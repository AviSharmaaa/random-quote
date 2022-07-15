let quoteText = document.getElementById("quote-text");
let quoteBtn = document.querySelector(".btn");
let quoteAuthor = document.getElementById("author");
let reload = document.getElementById("reload");
let quoteUrl = "https://api.quotable.io/random";

let getQuote = async () => {
  quoteText.innerText = "...Loading";
  quoteAuthor.innerHTML = "loading";
  quoteBtn.classList.add("fa-spin");
  await fetch(quoteUrl)
    .then((res) => res.json())
    .then((result) => {
      let randomQuote = result.content;
      let author = result.author;
      console.log(quoteText);

      quoteText.innerText = randomQuote;
      quoteAuthor.innerText = "~ " + author;
      console.log(randomQuote);
      console.log(author);
      quoteBtn.classList.remove("fa-spin");
    });
};

reload.addEventListener("click", getQuote);
getQuote();