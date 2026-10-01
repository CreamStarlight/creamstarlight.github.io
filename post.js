// @ts-check

const urlParams = new URLSearchParams(window.location.search);

const id = Number(urlParams.get("id"));

function fetchErrPresent() {
    console.log("Fetch Err");
}

function noSuchPostPresent() {
    console.log("No such post");
}

async function initPost() {
    if (!id) { window.location.replace("404.html"); return; }

    const articleData = articlesData.find(function (article) { return article.id === id; });

    if (!articleData) { noSuchPostPresent(); return; }

    const {
        title,
        date,
        category
    } = articleData;

    const response = await fetch(`articles/${id}.md`);

    if (!response.ok) { fetchErrPresent(); return; }

    const content = (await response.text()).replaceAll('\r\n', '\n').replaceAll('\r', '\n');

    
    const postTitle = document.getElementById("postTitle");
    const postDate = document.getElementById("postDate");
    const postCategories = document.getElementById("postCategories");
    const postContent = document.getElementById("postContent");
    
    if (!postTitle /** || !postFavoriteToggle **/ || !postDate || !postCategories || !postContent) return;
    
    postTitle.textContent = title;
    postDate.textContent = formatPublishDate(date);
    category.forEach(tag => {
        let item = document.createElement('li');
        item.textContent = tag;
        postCategories.append(item);
    });
    
    // @ts-ignore
    let articleElement = marked.parse(content);
    postContent.innerHTML = articleElement;
}

document.addEventListener('DOMContentLoaded', initPost);