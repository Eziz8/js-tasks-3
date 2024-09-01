let capitalizer = (word) => {
  return word[0].toUpperCase() + word.substr(1);
};

console.log(capitalizer("necesen"));

//---------------------------------------------------

let check = (text, word) => {
  if (text.includes(word)) {
    console.log("Var");
  } else {
    console.log("Yoxdur");
  }
};
check("salam necesen gelirsen", "neciesen");

//---------------------------------------------------

let reverse = (text) => {
    return console.log(text.split("").reverse().join(""));;
};

reverse('salam gelirsen')

//---------------------------------------------------

let vowelsNum=(word)=>{
    
}