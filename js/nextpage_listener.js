const order = JSON.parse(localStorage.getItem("pageOrder"));
const currentUrl = window.location.href;

const nextButton = document
  .getElementById("next")
  .addEventListener("click", () => {
    const currentPage = localStorage.getItem("currentPage");
    const nextPage = order[currentPage].next;
    const urlGeneric = currentUrl.substring(
      0,
      currentUrl.length - order[currentPage].page.length
    );
    const newurl = urlGeneric + nextPage;
    window.location.replace(newurl);
  });
const prevButton = document
  .getElementById("prev")
  .addEventListener("click", () => {
    const currentPage = localStorage.getItem("currentPage");
    const prevPage = order[currentPage].prev;
    const urlGeneric = currentUrl.substring(
      0,
      currentUrl.length - order[currentPage].page.length
    );
    const newurl = urlGeneric + prevPage;
    window.location.replace(newurl);
  });
