const jokes = [
    "Why don't scientists trust atoms? Because they make up everything.",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why don't scientists trust atoms? Because they make up everything.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why don't eggs tell jokes? Because they might crack up!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!"
  ];
  
  const funnyJoke = () => {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    console.log(`\x1b[34m${joke}\x1b[89m`);
  }
  
  module.exports = {
    funnyJoke
  };