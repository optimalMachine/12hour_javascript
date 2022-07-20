//Tiny Weather App
// let weather = prompt('how is the weather today?')

// if (weather == 'rain'){
//   console.log(`it's rainy day today.`)
// }else {
//   console.log('Wear your sunglasses.')
// }

function twoSum(a,b){
  return a+b
}

//Simple Tip calculator
function tipCalculator (){
  let foodPrice = Number(prompt('How much is the food?'))
  let tipPercentage = Number(prompt('tip %?'))
  let totalTip = foodPrice * (tipPercentage / 100)
  let totalMoney = twoSum(foodPrice,totalTip)
  console.log(`the tip is $${totalTip}`)
  console.log(`the total is $${totalMoney}`)
  return totalMoney
}

//tipCalculator()

//ES6 =>
const sumArrow = (a,b) => a+b

let groceries = ['banana','apple','orange','pear']
groceries.push('cookie')
// console.log(groceries)
// console.log(groceries.slice(0,2))
// console.log(groceries.indexOf('orange'))
// console.log(groceries.length)


//Object
const person={
  name:'Leonardo',
  shirt:'white'
}

console.log(person.name)
console.log(person.shirt)
console.log(person['name'])
console.log(person['shirt'])

person.phone = '1-222-3333'
console.log(person.phone)
console.log(person)


const person_02 = {
  name:'Qazi',
  shirt:'black'
}

const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    asset: 100000,
    liabilities: 50000,
    netWorth: function() {
      return this.asset - this.liabilities
    }
  }
  return `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and, I have total ${person.netWorth()}`
}

// console.log(introducer('jiuk','white'))


//loop



