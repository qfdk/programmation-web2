// 变量名 = 值;
// { key:value, }
const person1 = {
    age: 8,
    name: "你好",
    sex: "男"
};
console.log(person1);
// 把p1 的值都复制给p2
const person2 = { ...person1, name: "你好p2", isChinese: true, age: 16 };

const person3 = {
    age: 22,
    name: "第三个人",
    sex: "女"
};

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
    return age >= 16;
}

if (isAdult(person1.age)) {
    console.log("p1 成年人")
}

if (isAdult(person2.age)) {
    console.log("p2 成年人")
}

const persons = [person1, person2, person3];
// persons.push(person1);
// persons.push(person2);
// persons.push(person3);
console.log(persons)

// 遍历
// const table = [1, 2, 3, 99, 5, 6, 7, 123, 999];

// for (var index = 0; index < table.length; index++) {
//     console.log(table[index]);
// }
