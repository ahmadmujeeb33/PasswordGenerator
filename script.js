// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  let password = "";

  let wordCount = prompt("Please enter wordcount from 8 to 128");
  let wantsSpecilCharacters = confirm("would you like specil characters or no");
  let wantsLowercase = confirm("would you like lower case characters or no");
  let wantsUppercase = confirm("would you like upper case characters or no");
  let wantNumbers = confirm("would you like numbers or no");
  
//   var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  let allItems = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','1','2','3','4','5','6','7','8','9','!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','',']','^','_','`','{','|','}','~']
  let allItemsDuplicate = allItems;


  console.log(wantsSpecilCharacters)

  if(!wantsSpecilCharacters){
      console.log("11111111111111");
      allItemsDuplicate.splice(60)
      console.log(allItemsDuplicate);
  }

  if(!wantsLowercase){
      console.log("22222222222");
      allItemsDuplicate.splice(0,26)
      console.log(allItemsDuplicate);
  }

  if(!wantsUppercase){
      console.log("33333333333333");
      allItemsDuplicate.splice(26,26)
      console.log(allItemsDuplicate);
  }

  if(!wantNumbers){
      console.log("444444444444444");
      allItemsDuplicate.splice(51,9);
      console.log(allItemsDuplicate);
  }

  console.log("length " + allItemsDuplicate.length)
  for(let i=0; i<parseInt(wordCount);i++){
    let index = Math.floor((Math.random() * allItemsDuplicate.length-1) + 1);
    console.log(index);
    password = password + allItemsDuplicate[index];

  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
