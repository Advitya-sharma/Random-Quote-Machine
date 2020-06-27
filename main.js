const quotes = [
    {
      quote: "The purpose of our lives is to be happy.",
      author: "Dalai Lama"
    },
    {
      quote: "Life is what happens when you’re busy making other plans",
      author: "John Lennon"
    },
    {
      quote: "Get busy living or get busy dying.",
      author: "Stephen King"
    },
    {
      quote:
        "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
      author: "Thomas A. Edison"
    },
    {
      quote:
        "If you want to live a happy life, tie it to a goal, not to people or things.",
      author: "Albert Einstein"
    },
    {
      quote: "Never let the fear of striking out keep you from playing the game.",
      author: "Babe Ruth"
    },
    {
      quote:
        "Money and success don’t change people; they merely amplify what is already there.",
      author: "Will Smith"
    },
    {
      quote:
        "What seems to us as bitter trials are often blessings in disguise.",
      author: "Oscar Wilde"
    },
    {
      quote: "I like criticism. It makes you strong.",
      author: "LeBron James"
    },
    {
      quote:
        "In three words I can sum up everything I’ve learned about life: It goes on.",
      author: "Robert Frost"
    }
  ];
  
  function selector() {
    return quotes[Math.floor(Math.random() * 9)];
  }
  function quoteSetter(){
    var quote = selector();
    $("#text").text(quote.quote);
    $("#author").text(`-${quote.author}`);
  }
  $(document).ready(quoteSetter);
  
  $(document).ready(function(){
      $("#new-quote").click(quoteSetter)
    });
  