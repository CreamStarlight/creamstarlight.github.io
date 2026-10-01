// @ts-check
/**
 * @typedef {Object} Article
 * @property {Number} id
 * @property {String} title
 * @property {String} excerpt
 * @property {String} date
 * @property {Array<String>} category
 */

/**
 * @type {Array<Article>}
 */
const articlesData = [
  {
    id: 1,
    title: "Test",
    excerpt: "???",
    date: "2026.10.01",
    category: ["C1", "C2"]
  }
];

/**
 * @param {String} str 
 * @returns {Date}
 */
function parseDate(str) {
  const [year, month, day] = str.split(".").map(Number);
  return new Date(year, month - 1, day);
}

/**
 * 
 * @param {String} dateStr 
 * @returns {String}
 */
function formatPublishDate(dateStr) {
  const publishDate = parseDate(dateStr);
  const now = new Date();
  
  // 将两个日期都设为当天 00:00:00，只比较日期差
  const publishDay = new Date(publishDate.getFullYear(), publishDate.getMonth(), publishDate.getDate());
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  // @ts-ignore
  const diffTime = today - publishDay;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays >= 0 && diffDays <= 6) {
    return diffDays === 0 ? "Today" : `${diffDays} days ago`;
  } else if (diffDays < 0) {
    return "Somewhere in the future";
  } else {
    return dateStr;
  }
}

// --- 本地收藏 ---
const FAVORITES_KEY = "blog_favorites";

/**
 * @returns {Array<Number>}
 */
function getFavorites() {
  let list = localStorage.getItem(FAVORITES_KEY);
  return list ? JSON.parse(list) : [];
}

/**
 * @param {Array<Number>} favorites
 */
function saveFavorites(favorites) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}

/**
 * @param {Number} articleId 
 */
function toggleFavorite(articleId) {
  let list = getFavorites();
  if (list.includes(articleId)) {
    list = list.filter(id => id != articleId);
  } else {
    list.push(articleId);
  }
  saveFavorites(list);
}

/**
 * @param {Number} articleId
 * @returns {Boolean}
 */
function isFavorite(articleId) {
  return getFavorites().includes(articleId);
}

/**
 * @param {Article} article 
 * @returns {HTMLAnchorElement}
 */
function createArticleCard(article) {
  const url = new URL("post.html", window.location.href);
  url.searchParams.set('id', String(article.id));

  let card = document.createElement("a");
  card.className = "article-card";
  card.href = url.toString();

    let titleBar = document.createElement("div");
    titleBar.className = "article-title-bar";

    let title = document.createElement("h3");
    title.className = "article-title";
    title.textContent = article.title;

    /*
    let favoriteButton = document.createElement("button");
    favoriteButton.type = "button";
    favoriteButton.className = "article-favorite-toggle";
    favoriteButton.dataset.favorite = isFavorite(article.id)? "true" : "false";
    favoriteButton.addEventListener("click", function(e) {
      console.log(`Article-${article.id} toggled`)
      toggleFavorite(article.id);
      favoriteButton.dataset.favorite = isFavorite(article.id)? "true" : "false";
      e.stopPropagation();
      e.preventDefault();
    });
    titleBar.append(title, favoriteButton);
    */

    

    let excerpt = document.createElement("p");
    excerpt.className = "article-excerpt";
    excerpt.textContent = article.excerpt;

    let info = document.createElement("div");
    info.className = "article-meta";

      let date = document.createElement("p");
      date.className = "article-date";
      date.textContent = formatPublishDate(article.date);

      let categories = document.createElement("ul");
      categories.className = "article-categories";

        article.category.forEach(tag => {
          let item = document.createElement("li");
          item.textContent = tag;
          categories.append(item);
        })
    
    info.append(date, categories);

  card.append(titleBar, excerpt, info);

  return card;
}