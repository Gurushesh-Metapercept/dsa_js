// Find the Index of the givne num in a String
// function helo(haystack, needle) {
//   for (let i = 0; i < haystack.length; i++) {
//     let found = true;
//     for (let j = 0; j < needle.length; j++) {
//       if (haystack[i + j] !== needle[j]) {
//         found = false;
//         break;
//       }
//     }
//     if (found) {
//       return i;
//     }
//   }
//   return -1;
// }

// let hh = helo(haystack, needle);
// console.log(hh);

// Count of Negative Numbers in an Array
// function helo(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       count++;
//     }
//   }

//   return count;
// }

// let arr = [5, -2, 3, 4, -9, 6, -6, -3];

// let hh = helo(arr);
// console.log(hh);


// find largest number in the array
// function largetNumber(arr) {
//     let large = -Infinity // or use arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > large) {
//             large = arr[i]
//         }
//     }

//     return large
// }

// let arr = [-5,-8,-2]

// let hh = largetNumber(arr)
// console.log(hh)


// Second largest number
// function secondLargetNum(arr) {
//     if(arr.length < 2) return null
//     let first = -Infinity
//     let second = -Infinity
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > first) {
//             second = first
//             first = arr[i]
//         } else if (arr[i] > second && arr[i] != first) {
//             second = arr[i]
//         }
//     }

//     return second
// }


// Count digit

// let counter = 0;

// function countDigit(n) {
//     if (n == 0) return 1

//     n = Math.abs(n) // convert negative num to positive
//     while (n > 0) {
//         n = Math.floor(n / 10)
//         counter++
//     }

//     return counter
// }

// let n = -565
// console.log(countDigit(n))



function PalindromNum(n) {
    if (n < 0) return false

    let xCopy = n
    let rev = 0

    while (n > 0) {
        let rem = n % 10
        rev = (10 * rev) + rem
        n = Math.floor(n / 10)
    }

    if (xCopy == rev) {
        return true
    } else {
        return false
    }

}

let n = 1215
console.log(PalindromNum(n))
