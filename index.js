const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries=batteryBatches.reduce((
    (accum, element)=>accum+=element),0)
//practice
const products = [
    { name: 'Shampoo', price: 4.99 },
    { name: 'Donuts', price: 7.99 },
    { name: 'Cookies', price: 6.49 },
    { name: 'Bath Gel', price: 13.99 }
  ]

  function getTotalWorth(){
    let total=0;
    for(item of products)
    {
        total +=item.price
    }
    return total
  }

//reduce
const couponLocations = [
    { room: 'Living room', amount: 5 },
    { room: 'Kitchen', amount: 2 },
    { room: 'Bathroom', amount: 1 },
    { room: 'Master bedroom', amount: 7 }
  ]
 
  function theReduce(arr,reducer,init)
  {
    let accum=init
    for(element of arr)
    {
        accum= reducer(accum,element)
    }
    return accum
  }

  // our reducer 
  function totalWorth(accum,element)
  {
    return accum +=element.amount
  }
