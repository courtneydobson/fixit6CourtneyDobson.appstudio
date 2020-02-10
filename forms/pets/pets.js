let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']
console.log(`${petNames}`)
// initial array variable
let withMarmaduke = petNames.concat (["Marmaduke"])
//using an array method to create a new variable
let marmadukeIndex = withMarmaduke.indexOf("Marmaduke")
console.log(`Marmaduke is placed ${marmadukeIndex} in the array.`)
//using an additional array method from the MSN Javascript Array Reference Guide, with output going to the console and using template literals
let pickOne = prompt(`Choose one of the following options and enter the letter of the action you would like to take: A. Remove Vinny from the array B. Remove Marty from the array C. Add Nancy to the front of the array D. Add your own name to the end of the array E. Display the array index where Riley is located F. display the array index where Cindy is located G. Show the data for the array titled withMarmaduke: `)
//allow the user to select an option


switch(pickOne) {

case(pickOne="A"):
  let removeVinny = petNames.splice([5])
  console.log(`The action taken was: Remove Vinny\nThe remaining data are: ${petNames}.`)
  break
  
case(pickOne="B"):
  petNames.splice([3])
  console.log(`The action taken was: Remove Marty\nThe remaining data are: ${petNames}.`)
  break
  
case(pickOne="C"):
  petNames.unshift('Nancy')
  console.log(`The action taken was: Add Nancy\nThe remaining data are: ${petNames}.`)
  break
  
case(pickOne="D"):
  let enterName=prompt(`Enter your name: `)
  petNames.push(enterName)
  console.log(`The action taken was: to add your own name to the end of the list\nThe remaining data are: ${petNames}.`)
  break
  
case(pickOne="E"):
  let rileyIndex= petNames.indexOf('Riley')
  console.log(`The action taken was: to display the index of Riley, which is ${rileyIndex}\nThe remaining data are: ${petNames}.`)
  break
  
case(pickOne="F"):
  let cindyIndex = petNames.indexOf('Cindy')
  console.log(`The action taken was: to display the index of Cindy, which is ${cindyIndex}\nThe remaining data are: ${petNames}.`)
  break
  
case(pickOne="G"):
  console.log(`The action taken was: to display the withMarmaduke array data which is ${withMarmaduke}\nThe remaining data are: ${petNames}.`)
  break
  
  default:
  console.log(`invalid entry`)
  }
//option selection, action items

//BEGIN SCENARIO AB
let pickAnotherOne = prompt(`You may choose an additional option: A. Remove the first array item B. Use the unshift array method and add the name Barney C. Add an additional six names D. create a string variable with three names E. Add the name Agnes: `)

switch(pickAnotherOne) {

case(pickAnotherOne="A"):
petNames.shift()
console.log(`The action taken was: Remove the first array item\nThe remaining data are: ${petNames}.`)
  break
  
case(pickAnotherOne="B"):
  petNames.unshift('Barney')
  console.log(`The action taken was: Add the name Barney\nThe remaining data are: ${petNames}.`)
  break
  
case(pickAnotherOne="C"):
  petNames.push(['Ted','Fred', 'Jed', 'Ned', 'Ed', 'Zed'])
  console.log(`The action taken was: Add six more names\nThe remaining data are: ${petNames}.`)
  break
  
case(pickAnotherOne="D"):
  let addThreeNames= ['Bob', 'Sam', 'Andy']
  let stringPets= petNames.concat(addThreeNames)
  console.log(`The action taken was: Add three more names\nThe remaining data are: ${stringPets}.`)
  break
  
case(pickAnotherOne="E"):
  petNames.unshift('Agnes')
  console.log(`The action taken was: Add Agnes\nThe remaining data are: ${petNames}.`)
  break
  
  default:
  console.log(`invalid etnry`)
  }