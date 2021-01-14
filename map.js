  // Map is a collection of elements where is elements is stored as key, value pair
    
  let years = new Map();
  years['J'] = 'january'
  years['F'] = 'february'
  console.log(years);// retrun Map(0) {J: "january", F: "february"}
  console.log(years.has('J'));// retrun false
  console.log(years.delete('J'));// retrun false
  console.log(years.set('M', 'March'));// retrun Map(1) {"M" => "March"}
  console.log(years.size);// retrun 1

  let months = new Map();
  months.set(1, 'One')
  months.set(2, 'Two')
  months.set(3, 'Three')



  // Itareting wiht for of
  for(let [key, month] of months) {
      console.log(key + ' = '+ month); // return 1 = One 2 = Two 3 = Three
  }


  for(let [key, month] of months.entries()) {
      console.log(key + ' = '+ month); // return 1 = One 2 = Two 3 = Three
  }

  // Itareting wiht forEach

  months.forEach(function(value, key) {
      console.log(key); // return 1 2 3
  })

  months.forEach(function(value, key) {
      console.log(value); // return One Two Three
  })
