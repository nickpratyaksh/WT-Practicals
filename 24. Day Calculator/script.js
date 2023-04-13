let value = Number(prompt())
let output = document.getElementById('output')
console.log(value)

switch(value) {
    case 1:
    output.innerText = "Sunday"
    break;
    case 2:
    output.innerText = "Monday"
    break;
    case 3:
    output.innerText = "Tueday"
    break;
    case 4:
    output.innerText = "Wednesday"
    break;
    case 5:
    output.innerText = "Thursday"
    break;
    case 6:
    output.innerText = "Friday"
    break;
    case 7:
    output.innerText = "Saturday"
    break;
    default:
    output.innerText = "Kindly enter a valid number"    
}