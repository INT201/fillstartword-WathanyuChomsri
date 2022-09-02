//const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here
  
 if (word == null){
    return (undefined)
  } else if(word == undefined){
    return (undefined)
  } else if (startWord === word.substr(0,startWord.length) ){ //word.substr จุดเริ่มต้นของparameter word (ตำแหน่ง)ถ้าไปเท่ากับ,ตัวอักษรทั้งหมดของstartword จะทำการลบอักขระที่ซ้ำของ word ออก) --> string.substr(จุดเริ่มต้น, ความยาวที่ต้องการ)
      return word
  }else{
    return startWord + word
  }
}
  
// console.log(fillStartWord("1-2565","Hello"))
// console.log(fillStartWord("JS","beginner"))
// console.log(fillStartWord("first","firststep"))
// console.log(fillStartWord("first",null))
// console.log(fillStartWord("first",undefined))

//module.exports = fillStartWord
