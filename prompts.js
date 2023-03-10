
//get random prompt from array
let randomPrompt =
  promptsArray[Math.floor(Math.random() * promptsArray.length)];
//log random prompt to the console
console.log(randomPrompt);
//create a prompt holder element variable from html
let promptHolder = document.getElementById(prompt - holder);
//Put randomPrompt value4 in the prompt-holder element
promptHolder.innerHTML = randomPrompt;
