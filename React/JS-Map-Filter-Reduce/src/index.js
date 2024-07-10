import emojipedia from "./assets/emojipedia.js";

const newEmojipedia = emojipedia.map(function (emojiEntry){
  return emojiEntry.meaning.substring(0,100);
})
console.log(newEmojipedia);