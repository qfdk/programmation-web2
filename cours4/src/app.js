// 变量名 = 值;
// { key:value, }
const person1 = {
    age: 18,
    name: "你好",
    sex: "男"
};
console.log(person1);
// 把p1 的值都复制给p2
const person2 = { ...person1, name: "你好p2", isChinese: true };

// 修改 person1 里面的数据
person1.sex = "大熊猫";
console.log(person1);

// 修改 person1 里面的数据
person1.sex = { mark: "BMW" };
console.log(person1);
console.log(person2);

function isAdult(age) {
    // const result = age >= 18;
    // return result;
    return age >= 18;
}

if (person1.age >= 18) {
    console.log("p1 成年人")
}

if (person2.age >= 18) {
    console.log("p2 成年人")
}
