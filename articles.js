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
    id: 3,
    title: "Phigros: I Reached The Finale and I Want To Cry",
    excerpt: "Go play Phigros. NOW.",
    date: "2026.10.02",
    category: ["Casual"]
  },
  {
    id: 2,
    title: "Article system: NOW UP!",
    excerpt: "Major update! We now have easier page adding.",
    date: "2026.10.01",
    category: ["Announcement"]
  },
  {
    id: 1,
    title: "Test",
    excerpt: "This is only a testing page, and has no meaningful content. Please ignore it.",
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
  
  if (diffDays < 0) {
    return "Back to the Future, kiddo!"
  } else if (diffDays === 0){
    return "Today"
  } else if (diffDays === 1){
    return "1 day ago"
  } else if (diffDays < 10){
    return diffDays + " days ago"
  } else {
    return dateStr
  }
}

async function createArticleTabs(){
  const slots=document.getElementById("tabslots");
  console.log("Detecting...");
  if(!slots){return;}
  console.log("Tab slot ID found. Trying to create tabs...");
  articlesData.forEach(article => {
    const title=article.title;
    const date=article.date;
    const categories=article.category;
    const subtitle=article.excerpt;
    const url = new URL("post.html", window.location.href);
    url.searchParams.set('id', String(article.id));

    let tab = document.createElement("div");
    tab.className = "textbox";

    let link = document.createElement("a");
    link.href = url.toString();
    link.textContent = "Go to Article >>";

    tab.innerHTML=title+"<br/><small>"+date+" - "+categories.join(" / ")+"</small><br/><small>"+subtitle+"</small><br/>";
    tab.append(link);

    slots.append(tab);
    slots.append(document.createElement("br"));
  });
  console.log("Tabs created.");
}