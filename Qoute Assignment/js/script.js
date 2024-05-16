var quotes = [
  "Be yourself; everyone else is already taken.",
  "So many books, so little time.",
  "A room without books is like a body without a soul.",
  "You only live once, but if you do it right, once is enough.",
  "Be the change that you wish to see in the world.",
];

function getRandomQuote() {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

document.getElementById("quoteButton").addEventListener("click", function () {
  document.getElementById("quote").innerText = getRandomQuote();
});
