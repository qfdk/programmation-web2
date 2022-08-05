// function sayHello() {
//     console.log("你好");
//     return 1;
// }

// const result = sayHello();

// console.log(result);

// const hello = {
//     name: "OK",
//     world: function (val) {
//         console.log("你好" + val);
//     }
// };

// hello.world("js");

// const person1 = {
//     age: 8,
//     name: "你好",
//     sex: "男"
// };

class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    isAdult() {
        return this.age >= 18;
    }

    getSex() {
        return this.sex;
    }

    sayHello() {
        console.log(this.name + ":说你好");
    }

    sayHelloToPerson(person) {
        console.log(`${this.name} 对 ${person.name} 说你好`);
    }
}

const p1 = new Person("P1", 18, "男");
const p2 = new Person("P2", 10, "男");

console.log(p1.isAdult());
console.log(p2.getSex());

p1.sayHello();
p2.sayHello();

p1.sayHelloToPerson(p2);

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function getDistance(point1, point2) {
    const xx = (point1.x - point2.x) * (point1.x - point2.x);
    const yy = (point1.y - point2.y) * (point1.y - point2.y);
    return Math.sqrt(xx + yy);
}

// const point1 = new Point(0, 0);
const point1 = {
    x: 0,
    y: 0
};

const point2 = new Point(1, 1);

const distance = getDistance(point1, point2);

console.log(distance);