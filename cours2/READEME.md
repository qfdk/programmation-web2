### cours2

#### 注释的用法 

js中 `//` 表示注释代码，注释过的代码并不会运行

##### let var const 的区别

- let 只能定义一次
    - let abcd;let abcd;会报错 ( Identifier 'abcd' has already been declared)
    - let abcd;abdc = 1;不会报错

- const 只能定义一次，值不能改变
    - 只有类型为object 的时候 才能修改值
    - 例： 看person 如何修改年龄

- var 可以重复定义
    - var abcd = 1; var abcd = 2; 不会报错

注意 ： 默认是 var