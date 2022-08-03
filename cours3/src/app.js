// y=f1(input)=1
// y=f1(input1, input2)=input1
// y=f1(2,3)=1

// function f1(input1, input2, input3) {
//     console.log("你好");
//     if (input2 > 18) {
//         console.log("大于18");
//     }
//     return input1 + input1;
// }

// const resultat = f1("true", 23, 26);

// console.log(resultat);

// 1. 定义空数组
// 2. 循环 1-100
//     - 判断是否符合条件
//         - 条件符合 加入数组中
// 3. 返回数组（完成的数组）
// function f() {
//     // 1. 定义空数组
//     var 数组 = []; // variable
//     // 2. 循环 100-1(符合从大到小)
//     for (var num = 100; num >= 1; num--) {
//         // - 判断是否符合条件
//         if (Math.sqrt(num) % 1 === 0) {
//             console.log(num);
//             // - 条件符合 加入数组中
//             数组.push(num); // 调用f(i)结果到tableF1,
//         }
//     }
//     console.log(数组);
//     // 3.返回数组（完成的数组）
//     return 数组;
// }



//--------------------------------------------------------------
// 变量！
// var let const 关键字后面的东西就是变量 !!!
//--------------------------------------------------------------
// 定义一个 函数（function）
// 基本规则 参数不是必须的！！！
// function 函数名称 (参数1，参数2...,){}
function sayHello(name) {
    return "你好" + name;
}

// sayHello();
const result = sayHello("js");
console.log(result);