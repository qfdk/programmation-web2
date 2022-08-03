// y=f1(input)=1
// y=f1(input1, input2)=input1
// y=f1(2,3)=1

function f1(input1, input2, input3) {
    console.log("你好");
    if (input2 > 18) {
        console.log("大于18");
    }
    return input1 + input1;
}

const resultat = f1("true",23, 26);

console.log(resultat);

// 1. 定义空数组
// 2. 循环 1-100
//     - 判断是否符合条件
//         - 条件符合 加入数组中
// 3. 返回数组（完成的数组）
