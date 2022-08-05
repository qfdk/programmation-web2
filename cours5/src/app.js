function sayHello() {
    console.log("你好");
    return 1;
}

const result = sayHello();

console.log(result);

const hello = {
    name: "OK",
    world: function (val) {
        console.log("你好" + val);
    }
};

hello.world("js");