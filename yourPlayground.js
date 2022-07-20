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



