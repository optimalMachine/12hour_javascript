//Tiny Weather App
// let weather = prompt('how is the weather today?')

// if (weather == 'rain'){
//   console.log(`it's rainy day today.`)
// }else {
//   console.log('Wear your sunglasses.')
// }

function twoSum(a, b) {
  return a + b
}

//Simple Tip calculator
function tipCalculator() {
  let foodPrice = Number(prompt('How much is the food?'))
  let tipPercentage = Number(prompt('tip %?'))
  let totalTip = foodPrice * (tipPercentage / 100)
  let totalMoney = twoSum(foodPrice, totalTip)
  console.log(`the tip is $${totalTip}`)
  console.log(`the total is $${totalMoney}`)
  return totalMoney
}

//tipCalculator()

//ES6 =>
const sumArrow = (a, b) => a + b

let groceries = ['banana', 'apple', 'orange', 'pear']
groceries.push('cookie')
// console.log(groceries)
// console.log(groceries.slice(0,2))
// console.log(groceries.indexOf('orange'))
// console.log(groceries.length)


//Object
const person = {
  name: 'Leonardo',
  shirt: 'white'
}

// console.log(person.name)
// console.log(person.shirt)
// console.log(person['name'])
// console.log(person['shirt'])

// person.phone = '1-222-3333'
// console.log(person.phone)
// console.log(person)


const person_02 = {
  name: 'Qazi',
  shirt: 'black'
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
let fruits = ['banana', 'apple', 'orange', 'pear', 'banana', 'apple', 'orange', 'pear', 'banana', 'apple', 'orange', 'pear', 'banana', 'apple', 'orange', 'pear']

// for (let i=0; i<fruits.length; i++){
//       console.log(fruits[i])
// }

// console.log('loop start')
// for (fruits of fruits){
//   console.log(fruits)
// }

// let sum=0
// for (let i=0;i<numbers.length;i++){
//   sum += numbers[i]
// }
// console.log(sum)

// let sum2=0
// for (number of numbers){
//   sum2 += number
// }
// console.log(sum2)

// const numbers=[1,2,3,4,5,6]

// const doubleNumber = (a) => {
//   let result = []
//   for (number of numbers){
//     result.push(number*2)
//   }
//   return result
// }
// console.l og(doubleNumber(numbers))

//The way to count the number of letters.
const howManyLetters = () => {
  const phrase = '씨발놈아';
  let result = 0;
  for (let letter in phrase) {
    //console.log(Number(letter) + 1)
    result = Number(letter) + 1
  }
  return { result }
}

// console.log(howManyLetters())

const sumArray = () => {
  let a = []
  let result = 0
  for (let i = 0; i <= 10; i++) {
    a.push(Number(i))
  }
  for (const j in a) {
    result += Number(j);
  }
  return { result }
}

const sumArray_02 = () => {
  let a = []
  let result = 0
  for (let i = 0; i <= 10; i++) {
    a.push(Number(i))
  }
  for (const j in a) {
    result += Number(j);
  }
  return a
}

const maxNumber = (a) => {
  let result = a[0];
  for (const number of a) {
    if (number > result) {
      result = number
    }
  }
  return { result };
}

// console.log(sumArray())
// console.log(maxNumber(sumArray_02()))

const letterFrequency = (phrase) => {
  let result = {}
  for (const letter of phrase) {
    if (letter in result) {
      result[letter] = result[letter]++;
    }else{
      result[letter] = 1;
    }
  }
  return result
}

//console.log(letterFrequency('씨발놈아'))

const wordFrequency = (phrase) =>{
  let result = {}
  let replaceTexts = phrase.replaceAll('.' , '')
  let replaceTexts2 = replaceTexts.replaceAll(',' ,'')
  let texts = replaceTexts2.split(" ")
  console.log(texts)
  for (const word of texts){
    console.log(word)
    if (word in result){
      result[word] += 1
    }else{
      result[word] = 1
    }
  }

  return result
}

//console.log(wordFrequency('lol. what, lol'))