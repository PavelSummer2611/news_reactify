// function generateRandomColor() {
//    const hex = Math.floor(Math.random() * 100000000).toString(16)

//    console.log(hex)
//    return '#' + hex.padStart(6, '0')
//  }

//  console.log(generateRandomColor()); // Например: '#4B8A3F'
//  console.log(generateRandomColor()); // Например: '#E63D7B'
//  console.log(generateRandomColor());

// let l = [1, 2, "aasf", "1", "123", 123];

// function filter_list(l) {
// 	// Return a new array with the strings filtered out

// 	let result = l.filter((el) => typeof el === "number");
// 	return console.log(result);
// }

// filter_list(l);

// let str = 'hello'
// let letter = 'l'

// function strCount(str, letter){
//    //code here
//    console.log([...str])
//    return console.log([...str].filter(el => el===letter).length)
//  }

//  strCount(str,letter)

// const a = 1
// const b = 4
// function between(a, b) {
//    // your code here
//    let result =[]

//    let firstNum = a

//   while (firstNum <= b) {
//     result.push(firstNum)
//     firstNum=firstNum+1
//   }
//    return console.log( result)
//  }

//  between(a,b)

// let n = 5750
// let d = 0

// function nbDig(n, d) {
//    // your code
// let result=0

//  for (let i=0; i<=n; i++) {
//    let squared = i*i
//   let count= squared.toString().split('').filter(el=>el===d.toString()).length

//   result=result+count
//  }
//  console.log(result)

// }

// nbDig(5750,0)

// let url = "www.codewars.com#about"

// function removeUrlAnchor(url){
//    // TODO: complete
//    let index = url.indexOf('#')
//    console.log(index)
// let result = url.slice(0,16)

//    return console.log(result)
//  }

//  removeUrlAnchor(url)

// let principal = 1000.00
// let interest = 0.05
// let tax = 0.18
// let desired = 1100.00

// function calculateYears(principal, interest, tax, desired) {
//    // your code
//  if (principal===desired) {
//    return 0
//  }
//  let start = principal
//  console.log(start)
//  let finish = desired
//  console.log(finish)

//  let dohod =  start*interest - start*interest*tax
//  console.log(dohod)
//  let years = 0

//  while (start<finish) {
//    start=start+dohod
//    dohod =  start*interest - start*interest*tax
//    console.log(start)
//    years++
//  }
//  return console.log(years)

// }

// calculateYears(1000,0.01625,0.18,1200)

// const sequenceSum = (begin, end, step) => {
//    // May the Force be with you
//    let result = []

//    for(let i=begin; i<=end ; i=i+step) {
//      result.push(i)
//    }
//    return console.log(result.reduce((acc,el)=>acc+el))
//  };

//  sequenceSum(1,5,3)

// function solution(number){
//    if (number<0) return 0

//    let num = number
//    let arr = []

//    while (num>0) {
//      if (num%3===0 || num%5===0) {
//        arr.push(num)
//      }
//      num--
//    }
//      console.log(arr)
//    return arr.reduce((acc,el)=>acc+el)
//  }

//  console.log(solution(10))

// function likes(names) {
// 	// TODO
// 	if (names.length === 0) return "no one likes this";
// 	if (names.length > 3) {
// 		return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
// 	}

// 	switch (names.length) {
// 		case 1:
// 			return `${names[0]} likes this`;
// 		case 2:
// 			return `${names[0]} and ${names[1]} like this`;
// 		case 3:
// 			return `${names[0]}, ${names[1]} and ${names[2]} like this`;
// 	}
// }

// function createPhoneNumber(numbers){
//    return `(${Number(numbers.slice(0,3).join(''))}) ${Number(numbers.slice(3,6).join(''))}-${Number(numbers.slice(6,10).join(''))}`
//  }

// console.log( createPhoneNumber([0,3,6,6,7,1,4,2,6,2]))

// function findOdd(A) {
// 	//happy coding!
// 	const counts = {};

// 	for (const num of A) {
// 		counts[num] = (counts[num] || 0) + 1;
// 	}

// 	let result = 0;

// 	for (const num in counts) {
// 		if (counts[num] === 1 || counts[num] % 3 === 0) {
// 			result = num;
// 		}
// 	}

// 	return result;
// }

// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// function spinWords(string) {
// 	//TODO Have fun :)

// 	let arr = string.split(" ");

// 	let newArr = [];
// 	arr.forEach((word) => {
// 		if (word.length >= 5) {
// 			newArr.push(word.split('').reverse().join(''));
// 		} else newArr.push(word);
// 	});

//    return newArr.join(' ')
// }
// console.log(spinWords("Hey fellow warriors"));

////

const obj = {
	a: {
		b: { c: "d" },
	},
	e: "f",
};



function get(obj, path) {
	const paths = path.split(".");

	return paths.reduce((acc, el) => {
		return acc?.[el];
	}, obj);
}

console.log(get(obj, "a.b"));
