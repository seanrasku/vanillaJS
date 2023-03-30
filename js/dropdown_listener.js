document.querySelector(".dropdown-button").addEventListener("click", () => {
  const display = document.getElementById("topic-dropdown").style.display;
  if (display == "none") {
    document.getElementById("topic-dropdown").style.width = "17%";
    document.getElementById("topic-dropdown").style.display = "flex";
  } else {
    document.getElementById("topic-dropdown").style.display = "none";
  }
});
