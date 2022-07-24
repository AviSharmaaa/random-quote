const quoteText = document.getElementById("quote-text");
const quoteBtn = document.querySelector(".btn");
const quoteAuthor = document.getElementById("author");
const reload = document.getElementById("reload");
const quoteUrl = "https://api.quotable.io/random";

const getQuote = async () => {
  quoteText.innerText = "...Loading";
  quoteAuthor.innerHTML = "loading";
  quoteBtn.classList.add("fa-spin");
  await fetch(quoteUrl)
    .then((res) => res.json())
    .then((result) => {
      const randomQuote = result.content;
      const author = result.author;

      quoteText.innerText = randomQuote;
      quoteAuthor.innerText = "~ " + author;
      quoteBtn.classList.remove("fa-spin");
    });
};

reload.addEventListener("click", getQuote);
getQuote();