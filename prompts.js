//creating the array
let promptsArray = [
  "Geese have grown to a giant size and taken over the world",
  "12 people have gone missing. Their last known place is cursed thaetre",
  "An Encounter with spirits in a sunken ship",
  "An encounter with the keeper of the sewer",
  "What's haunting my television?",
  "Waking up in an twisted evil fantasy world",
  "A hanted atraction that knows your greatest fears",
  "Cursed to never see light again",
  "Dangerous water(s)",
  "They hunt in your sleep",
  "Ritual game",
  "It lives in the attic",
  "The sound in the nursery",
  "Dark water stalker",
  "Place haunted by thte seven deadly sins",
  "Good dolls and their evil owners",
  "The thing the camp counselors do NOT want you to know about",
  "When technology attacks",
  "Your friend is acting differently...",
  "Something is VERY wrong with that family",
  "They are at the window",
  "Clown in abandonned places",
  "Trapped in a liminal space",
  "There's somthing off about this office",
  "The stairs in the parks leading to nowhere",
  "Disasterous Prom",
  "From cute to creepy",
  "Deadly Hotel",
  "Imaginary friend becomes adult enemy",
  "Goddess/God that protects the bog",
  "Cupid has gone crazy"
];
//get random prompt from array
function getPrompt(){
  //get random prompt from array
let randomPrompt = promptsArray[Math.floor(Math.random() * promptsArray.length)];
//create a prompt holder element variable from html
let promptHolder = document.getElementById('promptholder');
promptHolder.innerHTML=randomPrompt;
//log random prompt to the console
console.log(randomPrompt);
//Put randomPrompt value in the prompt-holder element
promptHolder.innerHTML=randomPrompt;
}
