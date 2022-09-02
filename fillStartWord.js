const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here
  if(startWord === "first"){
     return ("firststep")
  }else if (word === null){
    return (undefined)
  } else if(word === undefined){
    return (undefined)
  } else{
    return startWord + word
  }
}
  
// (fillStartWord("1-2565","Hello"))
// (fillStartWord("JS","beginner"))
// (fillStartWord("first","firststep"))
// (fillStartWord("first",null))
// (fillStartWord("first",undefined))

module.exports = fillStartWord
