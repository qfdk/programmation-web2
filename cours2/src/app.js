// const person = { age: 18 };

// person.age = 200;

// console.log(person);

const age = 18;

// console.log(age + "18");

// if (age >= 18) {
//     console.log("成年人");
// } else {
//     console.log("未成年");
// }

// 比较a和b的大小，定义 a 和 b 的值，显示最大的那个数字


// i++ <=> i=i+1

for (var i = 0; i < 5; i++) {
    //console.log("第: " + i + " 次");
}

// i = 0; console.log(i);=> consoloe.log(0); f(i)=i+1;
// i = 1; console.log(i);=> consoloe.log(1); f(i)=i+1;
// ...
// i = 4; console.log(i);=> consoloe.log(4); f(i)=i+1;
// i = 5;

// + - * /
const a = 1;
const b = 2;

const result1 = a + "" + b;
const result2 = a - b;
const result3 = a / b;
const result4 = a * b;

// console.log(result1, result2, result3, result4);

// console.log('你好1:' + result1 + '次，你好吗 ' + result4);

// // 推荐使用 !!!!
// console.log(`你好: ${result1} 次，你好吗 ${result4}!!`);


// function 函数 f(x)= x+1
// var

// function computeXPlus1(x) {
//     // do something
//     const result = x + 1;
//     console.log(`x + 1 的结果是 : ${result}`);
// }

/**
 * 计算 x +1 
 * @param {*} x 输入参数
 * @returns x + 1 的结果
 */
const computeXPlus1 = (x) => {
    const result = x + 1;
    console.log(`x + 1 的结果是 : ${result}`);
    return result;
    // return x + 1;
}

// 箭头函数
// const computeXPlus1 = (x) => x + 1;

const myFunction = computeXPlus1(100);
console.log(myFunction);

//  数组
const table = [3, 2, 1]
const table2 = [];
console.log(table)
table.push(99)
console.log(table)
console.log(table.sort())


// f(a,b)= a+b
function AplusB(a, b) {
    return a + b;
}

console.log(AplusB(2, 4))

// f (常数,n) = 常数^n

// 真值表
// &&  true && true => true
// ||
// !a
// if ((a || b) || (c && d)) {
// todo
// }
// f(x)= x+1

// function compteX_plus_1(x) {
//     const result = "abdc";
//     console.log(result);
//     return result;
// }

