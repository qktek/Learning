

// var userName ='Nguyen Van Teo'
// console.log(userName);

//let userPass ='Nguyen Van A';
//alert(userName);

// const userEmail ='contetct@qktek.com.vn';
// console.log(userEmail);

//userEmail ='abcd@qkteck.com.vn';


// let a = 5;
// let b = 2;
// let c = a;
// a = b;
// b = b;
// console.log(a);
// console.log(b);

/** 
 *  Định nghĩa hàm
 * (Code trong than ham chua duoc thu thi)
 * 
 * **/

// function showMess(){
//     console.log('Hello');
//     console.log('Welcome to Learning');
// }

/** 
 * Gọi hàm
 * (Code trong thân hàm sẽ được thực thi
*/
// showMess();
// showMess();

/**
 * Hàm có tham số  (Paraments)
 * 
*/

// function iMess(title){
//     console.log(title);
//     console.log('Welcome to QKTEK');
// }

// iMess('Xin chào:'); //Arguments
// iMess('Hi..!');


/**Hoisting Đưa phần khai báo lên trên đầu phạm vi
 * -  function (Declaration funcition)
 * - var, let const
 * **/

// let userName = 'Nguyen Van B';
// let iMess = `Xin chào ${userName}`;
// console.log(iMess);

// let a = 10;
// let b = 20;
// let totall = a + b;
// let iMess = `Tổng cùa ${a} và ${b} là: ${totall}`;
// console.log(iMess);


// /**
//  * Formats a given quote with the author's name.
//  */
// function formatQuote(quote, author){
//     return `"${quote}" - ${author}`;
// }


// // Sample usage
// const quote1 = formatQuote("Simplicity is genius.", "Albert Einstein");
// console.log(quote1); // "Simplicity is genius." - Albert Einstein

// const quote2 = formatQuote("Knowledge is power.", "Confucius");
// console.log(quote2); // "Knowledge is power." - Confucius



// function createLink(link, name){
//     return `<a href="${link}">${name}</a>`;
// }

// Sample usage
// const link1 = createLink('https://google.com', 'Search');
// console.log(link1); // <a href="https://google.com">Search</a>

// const link2 = createLink('https://fullstack.edu.vn', 'F8');
// console.log(link2); // <a href="https://fullstack.edu.vn">F8</a>



// function calculateTotalScore(studentName, score, regionalBonus ){
//     let totall1 = score + regionalBonus;
//     return `Sinh viên ${studentName} có tổng điểm là ${totall1}`;
// }


// Sample usage
//console.log(calculateTotalScore("Nguyễn Văn A", 7, 0.5)); // Sinh viên Nguyễn Văn A có tổng điểm là 7.5
//console.log(calculateTotalScore("Trần Thị B", 6, 1)); // Sinh viên Trần Thị B có tổng điểm là 7

// a=1

// if(a!==1){
//     console.log('Ok');
// }else{
//     console.log('Erorr');
// }

// let = convertNumberToMonth = 10;

// //function convertNumberToMonth (){
//     if(convertNumberToMonth ===1){
//         console.log('Thang 1');
//     }else if(convertNumberToMonth ===2){
//         console.log('Tháng 2');
//     }else if(convertNumberToMonth === 3){
//         console.log('Tháng 3');
//     }else if(convertNumberToMonth === 4){
//         console.log('Tháng 4');
//     }else if(convertNumberToMonth === 5){
//         console('Tháng 5');
//     }else if(convertNumberToMonth === 6){
//         console.log('Tháng 6');
//     }else if(convertNumberToMonth === 7){
//         console.log('Tháng 7');
//     }else if(convertNumberToMonth === 8){
//         console.log('Tháng 8');
//     }else if(convertNumberToMonth=== 9){
//         console.log('Tháng 9');
//     }else if(convertNumberToMonth === 10){
//         console.log('Thang 10');
//     }else if(convertNumberToMonth === 11){
//         console.log('Tháng 11');
//     }else if(convertNumberToMonth === 12){
//         console.log('Tháng 12')
//     }else{
//         console.log('Tháng khong hợp lệ');
//     }
            

//}

// function convertNumberToMonth(number){
//     if (number ===1){
//         return "Tháng một";
//     }else if(number ===2){
//         return "Tháng hai";
//     }
// }

/**
 * Checks if a number is even or odd.
 */
// function checkEvenOdd(number){
//     if(number % 2 === 0){
//         return "Chẵn"; 
//     }else{
//         return "Lẻ";
//     }
    
// }

// // Sample usage
// console.log(checkEvenOdd(4)); // Chẵn
// console.log(checkEvenOdd(5)); // Lẻ


// function checkInteger(number){
//     if(number % 1 ===0){
//         return "Số nguyên";
//     }else{
//         return "Không phải số nguyên";
//     }
// }

// // Sample usage
// console.log(checkInteger(4)); // Số nguyên
// console.log(checkInteger(3.14)); // Không phải số nguyên


// function compareNumbers (number, number1){
//     if(number < number1){
//         return "Số thứ hai lớn hơn";
//     }else if(number > number1){
//         return "Số thứ nhất lớn hơn";
//     }else if(number === number1){
//         return "Hai số bằng nhau";
//     }
// }

// // Sample usage
// console.log(compareNumbers(3, 4)); // Số thứ hai lớn hơn
// console.log(compareNumbers(5, 2)); // Số thứ nhất lớn hơn
// console.log(compareNumbers(8, 8)); // Hai số bằng nhau

// function checkAge (Age){
//     if (Age >= 20){
//         return "Người lớn";
//     } else (Age < 20)
//     {
//         return  "Vị thành niên";
//     }
// }

// function checkAge(age) {
//     const isAdult = age >= 18;
//     return isAdult ? "Người lớn" : "Vị thành niên";
// } 

// // Sample usage
// console.log(checkAge(20)); // Người lớn
// console.log(checkAge(16)); // Vị thành niên


/**
 * Calculates shipping cost based on distance.
 */
function calculateShipping(countTotal){
    const isCount = countTotal < 5;
    return isCount ? "70000" : "11000";
//         if (countTotal < 5 ){
//             return "70000";
//         }esle (countTotal => 5)
//         {
//             return "11000";
//         }
 }

// Sample usage
console.log(calculateShipping(3)); // 7000
console.log(calculateShipping(7)); // 11000