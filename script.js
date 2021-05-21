// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  let password = "";

  
  let wordCount = prompt("Please enter wordcount from 8 to 128");
  while(wordCount<8 || wordCount>128){
    alert("Incorrect need to pick between 8 and 128 inclusive ");
    wordCount = prompt("Please enter wordcount from 8 to 128");
  }

  while(true){

    let wantsSpecilCharacters = confirm("would you like specil characters or no");
    let wantsLowercase = confirm("would you like lower case characters or no");
    let wantsUppercase = confirm("would you like upper case characters or no");
    let wantNumbers = confirm("would you like numbers or no");
    
  //   var password = generatePassword();
    var passwordText = document.querySelector("#password");

    let allItems = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','1','2','3','4','5','6','7','8','9','!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','',']','^','_','`','{','|','}','~']
    let allItemsDuplicate = allItems;
    let lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let uppercasseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let numbers = ['1','2','3','4','5','6','7','8','9'];
    let symbols = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','',']','^','_','`','{','|','}','~']
    
    let store = [];

    let counter = 0;

    if(wantsSpecilCharacters){
        let index = Math.floor((Math.random() * symbols.length -1) + 1);  
        password = password + symbols[index];
        store = store.concat(allItemsDuplicate.slice(61))
        counter+=1;
    }

  

    if(wantsLowercase){
      let index = Math.floor((Math.random() * lowercaseLetters.length -1) + 1);  
      password = password + lowercaseLetters[index];
      store = store.concat(allItemsDuplicate.slice(0,26));
      counter+=1;
      
    }

    if(wantsUppercase){
        let index = Math.floor((Math.random() * uppercasseLetters.length -1) + 1);  
        password = password + uppercasseLetters[index];
        store = store.concat(allItemsDuplicate.slice(26,52))
        counter+=1;
        
    }

    if(wantNumbers){
        let index = Math.floor((Math.random() * numbers.length -1) + 1);  
        password = password + numbers[index];
        store = store.concat(allItemsDuplicate.slice(52,61))
        counter+=1;
        
    }

    if(counter>0){
      for(let i=0; i<parseInt(wordCount)-counter;i++){
        let index = Math.floor((Math.random() * store.length -1) + 1);
        password = password + store[index];
  
      }
      break;
    }
    else{
      alert("must pick at least one try again");
    }
  }

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
