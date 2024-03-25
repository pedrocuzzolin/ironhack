let operation = prompt("Dime una operación").trim().toLowerCase();;
const num1 = +prompt("Dime un número");
const num2 = +prompt("Dime otro número");
let result;

switch (operation) {
    case '+':
      console.log(result = num1 + num2)
      break;
    case '-':
       console.log(result = num1 - num2)
      break;
    case '*':
      console.log(result = num1 * num2)
      break;
    case '/':
      console.log(result = num1 / num2)
      break;

    default:
        console.log("Please enter a valid operation");

  }

  alert(result);









