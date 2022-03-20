# ES6

## babel 简介

Babel 是一个转码器，可以将 ES6 代码转为 ES5 代码，从而在老版本的浏览器执行，保证了我们可以用 ES6 的方式编写程序，又不用担心现有环境是否支持。

Babel 默认使用一组 ES2015 语法转换器，允许你使用新的语法，无需等待浏览器支持。Babel 内置支持 JSX，与 babel-sublime 包一起结合，将语法高亮功能带到一个新的高度。Babel 支持用户插件，允许你插入强大的 Babel 转换层。

```js
// 转码前
input.map(item => item + 1);

// 转码后
input.map(function (item) {
  return item + 1;
});

```

## ES6 声明变量

### let

let 声明的变量只在 let 命令所在的代码块内有效。let 声明不存在变量提升，在声明变量之前，变量不存在会报错。

### const

const 声明一个只读的常量，声明时必须进行初始化，常量的值不能改变。

### import

在 ES6 之前，使用 require 来导入需要使用的外部的文件，ES6 之后，引入外部的文件或者模块，使用 import，它与 export 配合使用。

```js
let show = function () {
  console.log("hello world");
};
export { show };
```

再在一个文件写入以下代码

```js
import { show } from "demo.js";
let app = new show();
console.log(app);
```

如果直接运行node xxx.js会出现`SyntaxError: Cannot use import statement outside a module`，说明默认不支持es6，除了在在[package](https://so.csdn.net/so/search?q=package&spm=1001.2101.3001.7020).json文件中设置`"type": "module"`，我们还可以使用**babel**，

当然使用babel，你得先使用`npm install babel-cli -g`,安装 babel-cli，然后再安装一些babel的预设，帮助我们进行转换代码，

`npm install babel-preset-env -D`,接着我们使用`babel-node --presets env x.js`

## ES6数组

### ES6 apply 方法

apply() 应用某一个对象的一个方法，用另一个对象替换当前对象。

```javascript
apply([thisObj, argArray]);
```

示例：

```html
<html>
  <head></head>
  <body>
    <script>
      // 使用 apply 实现继承
      function Animal(name) {
        this.name = name;
        this.showName = function () {
          alert(this.name);
        };
      }
      function Cat(name) {
        Animal.apply(this, [name]);
      }
      var cat = new Cat("miaomiao");
      cat.showName();
    </script>
  </body>
</html>
```

### ES6 扩展运算符

扩展运算符（ spread ）是三个点（...），主要用于函数调用，它能够将一个数组转为用逗号分隔的参数序列，也可以用于数组的合并，与解构赋值配合使用等等。

示例：

```html
<html>
  <head></head>
  <body>
    <script>
      const color = ["red", "yellow"];
      const colors = [...color, "green", "pink"];
      console.log(colors);
      document.write(colors);
    </script>
  </body>
</html>
```

实验效果如下：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202091615827.png)

## ES6 函数

### 函数参数默认值与解构赋值结合

ES6 新增了解构，将一个数据结构分解为更小部分的过程。使用 ES5 提取对象中的信息形式如下：

```html
<html>
  <head></head>
  <body>
    <script>
      var person = { name: "zhangsan", age: 23 };
      var name = person.name;
      var age = person.age;
      document.write(name + "---" + age);
    </script>
  </body>
</html>
```

使用解构可以从对象里取出数据存为变量。

```html
<html>
  <head></head>
  <body>
    <script>
      var person = { name: "zhangsan", age: 23 };
      var { name, age } = person;
      document.write(name + "---" + age);
    </script>
  </body>
</html>
```

效果如下：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202091617994.png)

### rest 参数

ES6 新增了 Rest 参数用来接收函数的多余参数，组成一个数组，放在形参的最后。

示例：

```html
<html>
  <head></head>
  <body>
    <script>
      function nums(a, b, ...rest) {
        //console.log(a);
        //console.log(b);
        //console.log(rest);
        document.write(a + "</br>");
        document.write(b + "</br>");
        document.write(rest);
      }
      nums(1, 2, 3, 4, 5);

      //nums(19);
    </script>
  </body>
</html>
```

当 nums(1,2,3,4,5) 时，效果如下：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202091618448.png)

当 nums(19) 时，效果如下：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202091916912.png)

### 箭头函数

使用箭头函数不需要 function 关键字来创建函数,使用箭头函数不需要 function 关键字来创建函数

看下面代码（ES6）：

```javascript
(response,message) => { ....... }
```

相当于 ES5 代码：

```javascript
function(response,message){ ...... }
```

## ES6 对象

在 ES5 中我们对于对象都是以键值对的形式书写，是有可能出现键值对重名的。例如：

```javascript
function people(name, age) {
  return {
    name: name,
    age: age,
  };
}
```

以上代码可以简写为：

```javascript
function people(name, age) {
  return {
    name,
    age,
  };
}
```

### 对象合并

我们可以使用 assign（）将多个对象进行合并，也可以使用扩展的方式将对象合并。

```js
let name = { name: "lisi" };
let age = { age: 18 };
let sex = { sex: "male" };
var person = { ...name, ...age, ...sex };
console.log(person); // { name:'lisi',age:18,sex:'male' }
```

## ES6 字符串

ES6 新增了模板字符串，可以将表达式嵌入字符串中进行拼接，也可以实现多行字符串或者字符串一行行拼接。用 `${}` 来界定。

```js
// es5
var name = "world";
console.log("hello " + name);
// es6
var name2 = "world";
console.log(`hello ${name2}`); // hello world
```

## ES6 类的定义及使用

### constructor()

ES6 引入了 class 类的概念，每一个 class 类只有一个 constructor() 方法，用于创建和初始化对象。如果一个类没有指定 constructor() 方法，则会添加默认的 constructor() 方法。

示例：

```html
<html>
  <head></head>
  <body>
    <script>
      class Person {
        constructor(name) {
          this.name = name;
        }
      }
      var person = new Person("zhangsan");
      document.write(person.name);
    </script>
  </body>
</html>
```

效果如下图所示：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202091922553.png)

### Class 表达式

ES6 中的 Class 表达式使得可以使用表达式来声明一个类或者一个对象。

声明类：

```javascript
var 类名 = class [变量名]{...}
```

示例：

```javascript
<html>
    <head></head>
    <body>
        <script>
            // 使用 Class 表达式来声明一个类，Persons 可以在类的内部使用，如果内部不需要使用，可以省略
            var Person = class Persons{
                constructor(name){
                    this.name = name;
                }
                show(){
                    alert(this.name);
                }
            };
            var person = new Person('zhangsan');
            person.show();
        </script>
    </body>
</html>
```

声明对象：

```javascript
var 对象名 = new (class {})();
```

示例：

```html
<html>
  <head></head>
  <body>
    <script>
      // 声明对象 person，并赋初值
      var person = new (class {
        constructor(name) {
          this.name = name;
        }
        show() {
          alert(this.name);
        }
      })("zhangsan");
      person.show();
    </script>
  </body>
</html>
```

### super 关键字

super 可以用在类的继承中，在子类的构造方法中需要使用 super 关键字调用父类的 constructor()。

示例：

```html
<html>
  <head></head>
  <body>
    <script>
      class Person {
        constructor(name) {
          this.name = name;
        }
      }
      class Student extends Person {
        constructor(name) {
          super(name);
        }
      }
      var student = new Student("zhangsan");
      alert(student.name);
    </script>
  </body>
</html>
```

super 在对象字面值中的使用，super 指代了整个 `prototype` 或者 `__proto__` 指向的对象。

示例：

```html
<html>
  <head></head>
  <body>
    <script>
      // 使用字符值的放置声明对象 demo1，demo2
      var demo1 = {
        method1() {
          alert("show method1");
        },
      };
      var demo2 = {
        method2() {
          super.method1();
        },
      };
      // 设置第二个对象(demo2)的原型设为第一个对象(demo1)
      Object.setPrototypeOf(demo2, demo1);
      demo2.method2(); // show method1
    </script>
  </body>
</html>
```

## ES6 解构赋值

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

### 数组模型的解构赋值

以前，为变量赋值，只能直接指定值。

```JavaScript
var a = 1;
var b = 2;
var c = 3;
```

而 ES6 允许写成下面这样：

```JavaScript
var [a, b, c] = [1, 2, 3];
// a = 1
// b = 2
// c = 3
```

#### **可嵌套**

```JavaScript
let [a, [[b], c]] = [1, [[2], 3]];
// a = 1
// b = 2
// c = 3
```

#### **可忽略**

```JavaScript
let [x, , y] = [1, 2, 3];
// x = 1
// y = 3
```

#### **剩余运算符**

```JavaScript
let [a, ...b] = [1, 2, 3];
//a = 1
//b = [2, 3]
```

#### **解构默认值**

```JavaScript
let [a = 2] = [undefined];
console.log("a 的值为" + a);
// a = 2
```

#### **不完全解构**

不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。

a=1相当于默认值，然后获取b

```JavaScript
let [a = 1, b] = [];
// a = 1, b = undefined
```

如果解构不成功，变量的值就等于 undefined

当解构模式有匹配结果，且匹配结果是 undefined 时，会触发默认值作为返回结果。

```JavaScript
let [a = 3, b = a] = [];
// a = 3, b = 3

let [c = 3, d = c] = [1];
// c = 1, d = 1

let [e = 3, f = e] = [1, 2];
// e = 1, f = 2
```

### 对象的解构赋值

数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

```js
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
// foo = 'aaa'
// bar = 'bbb'

let { baz : foo } = { baz : 'ddd' };
// foo = 'ddd'

let person = { name: 'zhangsan', age: 20, sex: '男'};
let {name, age, sex} = person;
// name = 'zhangsan'
// age = 20
// sex = '男'
```

下面这个例子的变量没有对应的同名属性，导致取不到值，最后等于 undefined。

```JavaScript
var { baz } = { foo: "aaa", bar: "bbb" };
// baz = undefined
```

如果变量名与属性名不一致，必须写成下面这样。

```JavaScript
var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// baz = "aaa"


let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
// f = 'hello'
// l = 'world'
```

#### 可嵌套可忽略

和数组一样，解构也可以用于嵌套结构的对象。

```JavaScript
let obj = {p: ['hello', {y: 'world'}] };
let {p: [x, { y }] } = obj;
// x = 'hello'
// y = 'world'

let obj = {p: ['hello', {y: 'world'}] };
let {p: [x, {  }] } = obj;
// x = 'hello'
```

```js
let obj = {};
let arr = [];

({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

//obj = {prop:123}
//arr = [true]
```

#### 解构默认值

对象的解构也可以指定默认值。

```JavaScript
let {a = 10, b = 5} = {a: 3};
// a = 3; b = 5;


let {c: aa = 10, d: bb = 5} = {c: 3};
// aa = 3; bb = 5;


var { message: msg = 'Something went wrong' } = {};
//msg = "Something went wrong"
```

#### 不完全解构

```js
let obj = {p: [{y: 'world'}] };
let {p: [{ y }, x ] } = obj;
// x = undefined
// y = 'world'
```

#### 剩余运算符

```JavaScript
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
// a = 10
// b = 20
// rest = {c: 30, d: 40}
```

注意：

如果要将一个已经声明的变量用于解构赋值，必须非常小心。

```JavaScript
// 错误的写法
var x;
{x} = {x: 1};
// SyntaxError: syntax error
```

上面代码的写法会报错，因为 JavaScript 引擎会将 `{x}` 理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。

```JavaScript
// 正确的写法
({x} = {x: 1});
```

上面代码将整个解构赋值语句，放在一个圆括号里面，就可以正确执行。关于圆括号与解构赋值的关系,如下。

解构赋值允许，等号左边的模式之中，不放置任何变量名。因此，可以写出非常古怪的赋值表达式。

```JavaScript
({} = [true, false]);
({} = 'abc');
({} = []);
```

### 字符串的解构赋值

> 在数组的解构中，解构的目标若为可遍历对象，皆可进行解构赋值。

字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <script>
      let [a, b, c, d, e] = "hello";
      document.write("a 的值为" + a + "</br>");
      document.write("b 的值为" + b + "</br>");
      document.write("c 的值为" + c + "</br>");
      document.write("d 的值为" + d + "</br>");
      document.write("e 的值为" + e);
    </script>
  </body>
</html>
```

类似数组的对象都有一个 length 属性，因此还可以对这个属性解构赋值。

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <script>
      let { length: len } = "hello";
      document.write("len =" + len);
    </script>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202092130460.png)

### 圆括号问题

解构赋值虽然很方便，但是解析起来并不容易。对于编译器来说，一个式子到底是模式，还是表达式，没有办法从一开始就知道，必须解析到（或解析不到）等号才能知道。

由此带来的问题是，如果模式中出现圆括号怎么处理。ES6 的规则是，只要有可能导致解构的歧义，就不得使用圆括号。但是，这条规则实际上不那么容易辨别，处理起来相当麻烦。因此，建议只要有可能，就不要在模式中放置圆括号。

**不得使用圆括号的情况**

1. 变量声明语句中，不能带有圆括号。

```JavaScript
var [(a)] = [1];

var {x: (c)} = {};
var ({x: c}) = {};
var {(x: c)} = {};
var {(x): c} = {};

var { o: ({ p: p }) } = { o: { p: 2 } };
```

上面6个语句都会报错，因为它们都是变量声明语句，模式不能使用圆括号。

2. 函数参数中，模式不能带有圆括号。

```JavaScript
function f([(z)]) { return z; }
```

函数参数也属于变量声明，因此不能带有圆括号,否则报错。

3. 赋值语句中，不能将整个模式，或嵌套模式中的一层，放在圆括号之中。

```JavaScript
({ p: a }) = { p: 42 };
([a]) = [5];
// 上面代码将整个模式放在圆括号之中，导致报错。

[({ p: a }), { x: c }] = [{}, {}];
// 上面代码将嵌套模式的一层，放在圆括号之中，导致报错。
```

**可以使用圆括号的情况**

可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。

```JavaScript
[(b)] = [3];                // 正确
({ p: (d) } = {});          // 正确
[(parseInt.prop)] = [3];    // 正确
```

上面三行语句都可以正确执行，因为首先它们都是赋值语句，而不是声明语句；其次它们的圆括号都不属于模式的一部分。第一行语句中，模式是取数组的第一个成员，跟圆括号无关；第二行语句中，模式是 p，而不是 d；第三行语句与第一行语句的性质一致。

## ES6 Set

ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。Set 本身是一个构造函数，用来生成 Set 数据结构。Set 数据结构我们一般运用在电商网站的搜索历史关键字的存储。

Set 本身是一个构造函数，用来生成 Set 数据结构。

```javascript
const s = new Set();
```

Set 函数可以接受一个数组作为参数，用来初始化。

```javascript
const set = new Set([1, 2, 3, 4, 4]); // {1, 2, 3, 4}
```

- `add(value)`：添加某个值，返回 Set 结构本身。
- `delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `has(value)`：返回一个布尔值，表示该值是否为 Set 的成员。
- `clear()`：清除所有成员，没有返回值。

```javascript
const s = new Set();
s.add(1).add(2).add(3); // 向 set 结构中添加值(链式)
s.delete(2); // 删除 set 结构中的 2 值，返回一个布尔值，表示删除是否成功。
s.has(1); // 表示 set 结构中是否有 1 这个值 返回布尔值，表示该值是否为 Set 的成员。
s.clear(); // 清除 set 结构中的所有值
// 注意：删除的是元素的值，不是代表的索引。
```

### 遍历

Set 结构的实例与数组一样，也拥有 forEach 方法，用于对每个成员执行某种操作，没有返回值。

```javascript
s.forEach((value) => console.log(value));
```

### 类型转换

**Array**

```JavaScript
// Array 转 Set
var mySet = new Set(["value1", "value2", "value3"]);
// 用...操作符，将 Set 转 Array
var myArray = [...mySet];
```

**String**

```JavaScript
// String 转 Set
var mySet = new Set('hello');
// Set(4) {"h", "e", "l", "o"}
// Set 中 toString 方法是不能将 Set 转换成 String。
```

### Set 对象作用

**数组去重**

```JavaScript
var mySet = new Set([1, 2, 3, 4, 4]);
[...mySet];
// [1, 2, 3, 4]
```

**并集**

```JavaScript
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var union = new Set([...a, ...b]);
// {1, 2, 3, 4}
```

**交集**

```JavaScript
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var intersect = new Set([...a].filter(x => b.has(x)));
// {2, 3}
```

**差集**

```JavaScript
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var difference = new Set([...a].filter(x => !b.has(x)));
// {1}
```

## ES6 Map

Map 对象保存键值对，任何值（对象或者原始值） 都可以作为一个键或一个值。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串 — 值”的对应，Map 结构提供了“值 — 值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

```js
var m = new Map();
var o = { p: "Hello World" };

m.set(o, "content");
m.get(o); // "content"

m.has(o); // true
m.delete(o); // true
m.has(o); // false
```

### 实例的属性和操作方法

**size 属性**

size 属性返回 Map 结构的成员总数。

```javascript
let map = new Map();
map.set("foo", true);
map.set("bar", false);

map.size; // 2
```

**set(key, value)**

set 方法设置 key 所对应的键值，然后返回整个 Map 结构。**如果 key 已经有值，则键值会被更新，否则就新生成该键。**

```javascript
var m = new Map();

m.set("edition", 6); // 键是字符串
m.set(262, "standard"); // 键是数值
m.set(undefined, "nah"); // 键是 undefined
```

**get(key)**

get 方法读取 key 对应的键值，如果找不到 key，返回 undefined。

```javascript
var m = new Map();

var hello = function () {
  console.log("hello");
};
m.set(hello, "Hello ES6!"); // 键是函数

m.get(hello); // Hello ES6!
```

**has(key)**

has 方法返回一个布尔值，表示某个键是否在 Map 数据结构中。

```javascript
var m = new Map();

m.set("edition", 6);
m.set(262, "standard");
m.set(undefined, "nah");

m.has("edition"); // true
m.has("years"); // false
m.has(262); // true
m.has(undefined); // true
```

**delete(key)**

delete 方法删除某个键，返回 true。如果删除失败，返回 false。

```javascript
var m = new Map();
m.set(undefined, "nah");
m.has(undefined); // true

m.delete(undefined);
m.has(undefined); // false
```

**clear()**

clear 方法清除所有成员，没有返回值。

```javascript
let map = new Map();
map.set("foo", true);
map.set("bar", false);

map.size; // 2
map.clear();
map.size; // 0
```

### Map 的迭代

对 Map 进行遍历，以下两个最高级。

#### for...of

**遍历所有键值对：**

```javascript
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

// 将会显示两个 log。 一个是 "0 = zero" 另一个是 "1 = one"
// 方法一
for (var [key, value] of myMap) {
  console.log(key + " = " + value);
}

// 方法二
for (var [key, value] of myMap.entries()) {
  console.log(key + " = " + value);
}
```

> 这个 entries 方法返回一个新的 Iterator 对象，它按插入顺序包含了 Map 对象中每个元素的 [key, value] 数组。

**遍历所有键：**

```js
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

// 将会显示两个 log。 一个是 "0" 另一个是 "1"
for (var key of myMap.keys()) {
  console.log(key);
}
```

**遍历所有值：**

```javascript
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

// 将会显示两个 log。 一个是 "zero" 另一个是 "one"
for (var value of myMap.values()) {
  console.log(value);
}
```

#### forEach()

```javascript
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

// 将会显示两个 logs。 一个是 "0 = zero" 另一个是 "1 = one"
myMap.forEach(function (value, key) {
  console.log(key + " = " + value);
}, myMap);
```

### 类型转换

**Map 转为数组**

前面已经提过，Map 转为数组最方便的方法，就是使用扩展运算符（...）。

```javascript
let myMap = new Map().set(true, 7).set({ foo: 3 }, ["abc"]);
[...myMap];
// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
```

**数组转为 Map**

将数组转入 Map 构造函数，就可以转为 Map。

```javascript
new Map([
  [true, 7],
  [{ foo: 3 }, ["abc"]],
]);
// Map {true => 7, Object {foo: 3} => ['abc']}
```

**Map 转为对象**

如果所有 Map 的键都是字符串，它可以转为对象。

```javascript
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k, v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

let myMap = new Map().set("yes", true).set("no", false);
strMapToObj(myMap);
// { yes: true, no: false }
```

**对象转为 Map**

```javascript
function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

objToStrMap({ yes: true, no: false });
// [ [ 'yes', true ], [ 'no', false ] ]
```

## ES6 Reflect

ES6 中将 Object 的一些明显属于语言内部的方法移植到了 Reflect 对象上（当前某些方法会同时存在于 Object 和 Reflect 对象上），未来的新方法会只部署在 Reflect 对象上。

Reflect 对象对某些方法的返回结果进行了修改，使其更合理。

Reflect 对象使用函数的方式实现了 Object 的命令式操作。

### get

```javascript
Reflect.get(target, name, receiver);
```

查找并返回 target 对象的 name 属性。

```JavaScript
let exam = {
    name: "Tom",
    age: 24,
    get info(){
        return this.name + this.age;
    }
}
Reflect.get(exam, 'name'); // "Tom"

// 当 target 对象中存在 name 属性的 getter 方法， getter 方法的 this 会绑定 // receiver
let receiver = {
    name: "Jerry",
    age: 20
}
Reflect.get(exam, 'info', receiver); // Jerry20

// 当 name 为不存在于 target 对象的属性时，返回 undefined
Reflect.get(exam, 'birth'); // undefined

// 当 target 不是对象时，会报错
Reflect.get(1, 'name'); // TypeError: Reflect.get called on non-object at Obiect.get (<anonvmous>)

```

### set

```javascript
Reflect.set(target, name, value, receiver);
```

将 target 的 name 属性设置为 value。返回值为 boolean ，true 表示修改成功，false 表示失败。当 target 为不存在的对象时，会报错。

示例代码：

```JavaScript
let exam = {
    name: "Tom",
    age: 24,
    set info(value) {
        return this.age = value;
    }
}
exam.age; // 24
Reflect.set(exam, 'age', 25); // true
exam.age; // 25

// value 为空时会将 name 属性清除
Reflect.set(exam, 'age', ); // true
exam.age; // undefined

// 当 target 对象中存在 name 属性 setter 方法时，setter 方法中的 this 会绑定 // receiver , 所以修改的实际上是 receiver 的属性,
let receiver = {
    age: 18
}
Reflect.set(exam, 'info', 1, receiver); // true
receiver.age; // 1

let receiver1 = {
    name: 'oppps'
}
Reflect.set(exam, 'info', 1, receiver1); //true
receiver1.age; // 1
```

### has

```javascript
Reflect.has(obj, name);
```

是 name in obj 指令的函数化，用于查找 name 属性在 obj 对象中是否存在。返回值为 boolean。如果 obj 不是对象则会报错 TypeError 。

示例代码：

```JavaScript
let exam = {
    name: "Tom",
    age: 24
}
Reflect.has(exam, 'name'); // true
```

### deleteProperty

```JavaScript
Reflect.deleteProperty(obj, property)
```

它是 `delete obj[property]` 的函数化，用于删除 obj 对象的 property 属性，返回值为 boolean。如果 obj 不是对象则会报错 TypeError。

示例代码：

```JavaScript
let exam = {
    name: "Tom",
    age: 24
}
Reflect.deleteProperty(exam , 'name'); // true
exam // {age: 24}
// property 不存在时，也会返回 true
Reflect.deleteProperty(exam , 'name'); // true
```

### construct

```JavaScript
Reflect.construct(obj, args)
```

等同于 new target(...args)。

示例代码：

```JavaScript
function exam(name){
    this.name = name;
}
Reflect.construct(exam, ['Tom']); // exam {name: "Tom"}
```

### getPrototypeOf

```JavaScript
Reflect.getPrototypeOf(obj)
```

用于读取 obj 的 `_proto_` 属性。**在 obj 不是对象时不会像 Object 一样把 obj 转为对象，而是会报错。**

示例代码：

```JavaScript
class Exam{}
let obj = new Exam()
Reflect.getPrototypeOf(obj) === Exam.prototype // true
```

### setPrototypeOf 

```JavaScript
Reflect.setPrototypeOf(obj, newProto)
```

用于设置目标对象的 prototype。

示例代码：

```JavaScript
let obj ={}
Reflect.setPrototypeOf(obj, Array.prototype); // true
```

### apply

```JavaScript
Reflect.apply(func, thisArg, args)
```

等同于 `Function.prototype.apply.call(func, thisArg, args)`。func 表示目标函数；thisArg 表示目标函数绑定的 this 对象；args 表示目标函数调用时传入的参数列表，可以是数组或类似数组的对象。若目标函数无法调用，会抛出 TypeError 。

示例代码：

```JavaScript
Reflect.apply(Math.max, Math, [1, 3, 5, 3, 1]); // 5
```

`Function.prototype.apply.call(func, thisArg, args)`的理解

首先我们把`Function.prototype.apply`看成一个整体，xapply吧

`xapply.call(func,thisArg，agrs)`实际就是`func.xapply(thisArg，args)`

就进行转换，就是`this.func.(agrs)`

举一反三，

Function.prototype.call.apply(log,[console.arguments]);

```js
FunctionCall.apply(log,[console,arguments]);  
log.FunctionCall(console,arguments);  
console.log(arguments);  
```

小tips:

```js
 Function.prototype.apply.call  等同于Function.prototype.call.call
 Function.prototype.call.apply  等同于 Function.prototype.apply.apply
```

```js
function testA(a){  
    console.log('aaaa',a);  
}  
Function.prototype.apply.call(testA,window,['Mike']);  
//Function.prototype.call.call(testA,window,['Mike']);  
//testA.apply(window,['Mike']);  
//window.testA('Mike');  
//Function.prototype.apply.apply(testA,[window,['Mike']]);  
//Function.prototype.call.apply(testA,[window,['Mike']]);  
```

以上执行结果都一样

为:aaaa Mike

总结使用用法:

XXX可以是call或者是apply,child一定是parent可指向的对象

`Function.prototype.XXX.call(child,parent,arguments||array);`

`Function.prototype.XXX.apply(child,[parent,arguments||array]);`



`fun.apply(obj,args)等价于obj.fun(args)`

### defineProperty

```JavaScript
Reflect.defineProperty(target, propertyKey, attributes)
```

用于为目标对象定义属性。如果 target 不是对象，会抛出错误。

示例代码：

```JavaScript
let myDate = {}
Reflect.defineProperty(myDate, 'now', {
  value: () => Date.now()
}); // true

const student = {};
Reflect.defineProperty(student, "name", {value: "Mike"}); // true
student.name; // "Mike"
```

### getOwnPropertyDescriptor

```JavaScript
Reflect.getOwnPropertyDescriptor(target, propertyKey)
```

用于得到 target 对象的 propertyKey 属性的描述对象。在 target 不是对象时，会抛出错误表示参数非法，不会将非对象转换为对象。 示例代码：

```JavaScript
var exam = {}
Reflect.defineProperty(exam, 'name', {
  value: true,
  enumerable: false,
})
Reflect.getOwnPropertyDescriptor(exam, 'name')
// {value: true,writable:false, enumerable: false, configurable: false}


// propertyKey 属性在 target 对象中不存在时，返回 undefined
Reflect.getOwnPropertyDescriptor(exam, 'age') // undefined
```

附：

- `value` 这个属性值
- `writable` 这个属性是否可写
- `enumerable` 这个属性是否可以被遍历，被枚举 
- `configurable` 这个属性是否可以被修改 被delete

|                                                     | configuarable:true;<br>writable:false | configuarable:true;<br/>writable:true | configuarable:false;<br/>writable:true | configuarable:false;<br/>writable:false |
| --------------------------------------------------- | ------------------------------------- | ------------------------------------- | -------------------------------------- | --------------------------------------- |
| 修改属性的值                                        | √                                     | √*重设value标签修改                   | √                                      | ×                                       |
| 通过属性赋值修改属性的值                            | √                                     | ×                                     | √                                      | ×                                       |
| delete 该属性返回true                               | √                                     | √                                     | ×                                      | ×                                       |
| 修改get/set方法                                     | √                                     | √                                     | ×                                      | ×                                       |
| 修改属性标签(除了writable从true修改为false总是允许) | √                                     | √                                     | ×                                      | ×                                       |

> ```
> configurable`为`false`时，只允许`writable`从`true`改为`false
> ```

### isExtensible

```JavaScript
Reflect.isExtensible(target)
```

用于判断 target 对象是否可扩展。返回值为 boolean。如果 target 参数不是对象，会抛出错误。示例代码：

```JavaScript
let exam = {}
Reflect.isExtensible(exam) // true
```

### preventExtensions

```JavaScript
Reflect.preventExtensions(target)
```

用于让 target 对象变为不可扩展。如果 target 参数不是对象，会抛出错误。示例代码：

```JavaScript
let exam = {}
Reflect.preventExtensions(exam) // true
```

### ownKeys

```JavaScript
Reflect.ownKeys(target)
```

用于返回 target 对象的所有属性，等同于 `Object.getOwnPropertyNames` 与 `Object.getOwnPropertySymbols` 之和。示例代码：

```JavaScript
var exam = {
    name: 1,
    [Symbol.for('age')]: 4
}
Reflect.ownKeys(exam) // ["name", Symbol(age)]
```





## ES6 Proxy

一个 Proxy 对象由两个部分组成：target、handler。在通过 Proxy 构造函数生成实例对象时，需要提供这两个参数。target 即目标对象，handler 是一个对象，声明了代理 target 的指定行为。

### Proxy 基本用法

```JavaScript
let pro = new Proxy(target,handler);
```



```js
let target = {
  name: "Tom",
  age: 24,
};
let handler = {
  get: function (target, key) {
    console.log("getting " + key);
    return target[key]; // 不是 target.key
  },
  set: function (target, key, value) {
    console.log("setting " + key);
    target[key] = value;
  },
};
let proxy = new Proxy(target, handler);
console.log(proxy.name);
console.log(proxy.age);
```

 ```js
 // 创建的 target 对象为所要拦截的对象
 let target = {
   name: "张三",
   age: 24,
 };
 // handler 对象为拦截对象后执行的操作
 // 拦截操作对象 handler 为空，未对拦截对象设定拦截方法
 // 该情况下 pro 直接指向原对象 target，访问 pro 等同于访问 target，所以结果为 target 中的结果。
 let handler = {};
 // 最后创建一个 Proxy 实例，
 let pro = new Proxy(target, handler);
 console.log(pro.name);
 console.log(pro.age);
 ```

### Proxy 常用的拦截方法

**1. get 方法**

用于拦截某个读取属性的操作，第一个参数为目标对象，第二个参数为属性名称，第三个属性为操作所针对的对象（可选参数）。

```JavaScript
get(target, propKey, receive)
```

示例代码：

```JavaScript
let exam ={
    name: "Tom",
    age: 24
}
let proxy = new Proxy(exam, {
    get(target, propKey, receiver) {
        console.log('Getting ' + propKey);
        return target[propKey];
    }
})
proxy.name
// Getting name
// "Tom"
```

**2. set 方法**

用于拦截某个属性的赋值操作，第一个参数为目标对象，第二个参数为属性名，第三个参数为属性值，第四个参数为操作行为所针对的对象（可选参数）。

```JavaScript
set(target, propKey, value, receiver)
```

> 用于拦截 target 对象上的 propKey 的赋值操作。如果目标对象自身的某个属性，不可写且不可配置，那么 set 方法将不起作用。

```js
// 创建的 target 对象为所要拦截的对象，
let target = {
  name: "张三",
  age: 24,
};
// handler 对象为拦截对象后执行的操作，
let handler = {
  // 第一个参数为目标对象，第二个参数为属性名称，第三个属性为操作所针对的对象（可选参数）。
  get(target, propKey, receive) {
    if (propKey in target) {
      console.log("get success");
    } else {
      console.log("error");
    }
    // return Object.defineProperty(target, propKey, receive);
    return Reflect.get(target, propKey, receive);
  },
  // 第一个参数为目标对象，第二个参数为属性名，第三个参数为属性值，第四个参数为操作行为所针对的对象（可选参数）。
  set(target, propKey, value, receiver) {
    if (propKey == "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("The age is not an integer");
      } else {
        console.log("set success");
      }
    } else {
      console.log("set success");
    }
    return Reflect.set(target, propKey, value, receiver);
  },
};
// 最后创建一个 Proxy 实例，
let pro = new Proxy(target, handler);
pro.age = 30;
pro.name = "呵呵";
console.log(pro.age);
console.log(pro.name);
```

**3. has 方法**

用于拦截 HasProperty 操作，即在判断 target 对象是否存在 propKey 属性时，会被这个方法拦截。此方法不判断一个属性是对象自身的属性，还是继承的属性。

```JavaScript
has(target, propKey)
```

> 此方法不拦截 for ... in 循环。

示例代码：

```JavaScript
let handler = {
    has: function(target, propKey){
        console.log("handle has");
        return propKey in target;
    }
}
let exam = {name: "Tom"}
let proxy = new Proxy(exam, handler)
'name' in proxy;
// handle has
// true
```

**4. construct 方法**

**用于拦截 new 命令**。返回值必须为对象。

```javascript
construct(target, args);
```



```js
let handler = {
  construct: function (target, args, newTarget) {
    console.log("handle construct");
    return Reflect.construct(target, args, newTarget);
  },
};
class Exam {
  constructor(name) {
    this.name = name;
  }
}
let ExamProxy = new Proxy(Exam, handler);
let proxyObj = new ExamProxy("Tom");
console.log(proxyObj);
// handle construct
// exam {name: "Tom"}
```

## ES6 Reflect 与 Proxy

Reflect 对象的方法与 Proxy 对象的方法是一一对应的。所以 Proxy 对象的方法可以通过调用 Reflect 对象的方法获取默认行为，然后进行额外操作。

```js
let exam = {
  name: "Tom",
  age: 24,
};
let handler = {
  get: function (target, key) {
    console.log("getting " + key);
    return Reflect.get(target, key);
  },
  set: function (target, key, value) {
    console.log("setting " + key + " to " + value);
    Reflect.set(target, key, value);
  },
};
let proxy = new Proxy(exam, handler);
proxy.name = "Jerry";
proxy.name;
// setting name to Jerry
// getting name
// "Jerry"
```

> **也就是说通过Proxy进行拦截，然后使用Reflect如同Object一样进行赋值或者其它处理。**

## ES6 迭代器

### Iterator

Iterator 是 ES6 引入的一种新的遍历机制，迭代器有两个核心概念：

- 迭代器是一个统一的接口，它的作用是使各种数据结构可被便捷的访问，它是通过一个键为 `Symbol.iterator` 的方法来实现；
- 迭代器是用于遍历数据结构元素的指针（如数据库中的游标）。

迭代的过程如下：

- 通过 `Symbol.iterator` 创建一个迭代器，指向当前数据结构的起始位置;
- 随后通过 next 方法进行向下迭代指向下一个位置，next 方法会返回当前位置的对象，对象包含了 value 和 done 两个属性，value 是当前属性的值，done 用于判断是否遍历结束;
- **当 done 为 true 时则遍历结束**。

实例代码：

```JavaScript
const items = ["zero", "one", "two"];
const it = items[Symbol.iterator]();

it.next();
//{value: "zero", done: false}
it.next();
//{value: "one", done: false}
it.next();
//{value: "two", done: false}
it.next();
//{value: undefined, done: true}
```

迭代器是协议（使用它们的规则）的一部分，用于迭代。该协议的一个关键特性就是它是顺序的：迭代器一次返回一个值。这意味着如果可迭代数据结构是非线性的（例如树），**迭代将会使其线性化**。

### 可迭代的数据结构

String，Array，Map，Set，Dom 元素是所有内置的可迭代对象，他们的原型对象都有一个 `[Symbol.iterator]` 方法。

#### Array

数组（Array）和类型数组（TypedArray）他们是可迭代的。

```JavaScript
for (let item of ["zero", "one", "two"]) {
  console.log(item);
}

// zero
// one
// two
```

#### String

```js
// 方法一

// for ... of
const str = "dyedd";
for (const char of str) {
  console.log(char);
}
// d
// y
// e
// d
// d
```

```js
// 方法二
// iterator
const str = "dyedd";
const iterator = str[Symbol.iterator](); // 返回一个{next:方法}对象
let obj = null;
do {
  obj = iterator.next(); // 返回的是对象，{value:任意对象,done:布尔型}
  console.log(obj);
} while (!obj.done);
```

#### Map

Map 主要是迭代它们的 entries，每个 entry 都会被编码为 `[key, value]` 的项， entries 是以确定的形势进行迭代，其顺序是与添加的顺序相同。

```js
const map = new Map();
map.set(0, "zero");
map.set(1, "one");

for (let entry of map) {
    console.log(entry);
}

// [0, "zero"]
// [1, "one"]
```

#### Set

Set 是对其元素进行迭代，迭代的顺序与其添加的顺序相同

```js
const set = new Set();
set.add("red");
set.add("green");
set.add("blue");

for (let item of set) {
    console.log(item);
}

// red
// green
// blue
```

#### arguments

> arguments 目前在 ES6 中使用越来越少，但也是可遍历的

```js
function args() {
    for (let item of arguments) {
        console.log(item);
    }
}
args("red", "green", "blue");

// red
// green
// blue
```

## ES6 Module

ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单。ES6 模块的设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。ES6 模块不是对象，而是通过 `export` 命令显式指定输出的代码，再通过 `import` 命令输入。

### export 命令

模块功能主要由两个命令构成：`export` 和 `import`。`export` 命令用于规定模块的对外接口，`import` 命令用于输入其他模块提供的功能。

一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用 `export` 关键字输出该变量。

```js
// export.js
let firstName = 'Mark'
let lastName = 'Dave'

export { firstName, lastName }

export function multiply(x, y) {
	return x * y
}

export let m = 1;

let m = 1
export { m }
// let m = 1;export m;是错的

// export 输出的变量是本来的名字，但是可以使用 as 关键字重命名
function fun1() { ... }
function fun2() { ... }

export {
	fun1 as streamFun1,
	fun2 as streamFun2,
	fun2 as streamLatestFun 
}
//报错
export fun1
//不报错
export function f() {}
                 
```

**如何理解export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系？**

```js
export 1    
//这里输出的是一个值(1)，没有与任何模块内部变量建立联系，所以直接报错。

var m = 1;
export m;    

//这里看起来就像是输出了一个变量m作为对外的接口，
理想状态下，认为m这个变量被输出到模块外被使用，并且模块内的m产生引用的关系。
然而现实情况是，变量m在模块中作为一个变量存在，但是通过export导出m时，被导出的只有m的值（1），
所以同样不与内部变量产生联系，于是报错。我们要导出的是变量！

如果不好理解，可以看看函数的传参。

let x=1;                 //声明变量
const foo=(x)=>{x=2};    //声明一个函数
foo(x)                   //传入x执行函数
console.log(x)           //    1
变量x作为foo的参数，只把变量x的值传入foo，x只作为数值的载体，函数内部x并没有与变量x产生直接联系。
只是复制了变量x的值（不谈对象）（这种复制值然后再使用的形式与CommonJS加载模式类似）。
至于究竟为什么不会能直接输出变量？这是es6规定...（猜测与静态编译啥的有关）


export var m = 1;
//这里是直接输出一个声明的变量，变量的值为1；

var m = 1;
export {m};
声明一个m，然后输出变量，这是规定的写法（语法），也是推介的。({}中带有变量，和解构赋值差不多)

var n = 1;
export {n as m};
as 重命名关键词，其他没啥好说的。
```

**export可以出现在模块的任何位置，只要处于模块顶层就可以**

`export` 命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错

```js
function foo() {
	export default 'bar' // SyntaxError
}
foo()
```

上面代码中，`export` 语句放在函数之中，结果报错

**export default 命令**

使用 `import` 命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。但是，用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法。
为了给用户提供方便，让它们不用阅读文档就能加载模块，就要用到 `export default` 命令，为模块指定默认输出。

```js
// export-default.js
export default function() {
	console.log('foo')
}
```

上面代码是一个模块文件 `export-default.js` ，它默认输出是一个函数。
其他模块加载该模块时，`import` 命令可以为该匿名函数指定任意名字。

```js
// import-default.js
import customName from './export-default'
customName()
```

上面代码的 `import` 命令，可以用任意名称指向 `export-default.js` 输出的方法，这时就不需要知道原模块输出的函数名。需要注意的是，这时 `import` 命令后面，不使用大括号。
`export default` 命令用在非匿名函数前，也是可以的

```js
export default function foo() {
	console.log('foo')
}

// 或者写成
function foo() {
	console.log('foo')
}
export default foo
```

上面代码中，`foo` 函数的函数名 `foo` ，在模块外部是无效的。加载的时候，视同匿名函数加载。
下面比较一下默认输出和正常输出：

```js
// 第一组
export default function crc32() {}

import crc32 from 'crc32'

// 第二组
export function crc32() {}

import { crc32 } from 'crc32'
```

上面两组写法，第一组是使用 `export default` 时，对应的 `import` 语句不需要使用大括号；第二组是不使用 `export default` 时，对应的 `import` 语句需要使用大括号。

`export default` 命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此 `export default` 命令只能使用一次。所以，import 命令后面才不用加大括号，因为只可能唯一对应 `export default` 命令。
本质上，`export default` 就是输出一个叫做 `default` 的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的。

```js
// module.js
function add(x, y) {
	return x + y
}
export { add as default }
// 等同于
export default add

// main.js
import { default as foo } from 'modules'
// 等同于
import foo from 'modules'
```

正是因为 `export default` 命令其实只是输出一个叫做 `default` 的变量，所以它后面不能跟变量声明语句。

```js
// 正确
export let a = 1

// 正确
let a = 1
export default a

// 错误
export default let a = 1
```

上面代码中，`export default a` 的含义是将变量 a 的值赋值给变量 `default`。所以，最后一种写法会报错。
同样地，因为 `export default` 命令的本质是将后面的值，赋给 `default` 变量，所以可以直接将一根值写在 `export default` 之后

```js
// 正确
export default 42

// 报错
export 42
```

如果想在一条 `import` 语句中，同时输入默认方法和其他接口，可以写成下面这样

```js
import _, { each, forEach } from 'lodash'
```

`export default` 也可以用来输出类

```js
// MyClass.js
export default class { ... }

// main.js
import MyClass from 'MyClass'
let o = new MyClass()
```

### import 命令

使用 `export` 命令定义了模块的对外接口以后，其他 JS 文件就可以通过 `import` 命令加载这个模块。

示例：

```javascript
import { username, password } from "./userInfo";
// import 命令要使用 as 关键字，将输入的变量重命名
import { lastName } as surname from './export.js'
// import 命令输入的变量都是只读的，，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。
import { a } from './xxx.js
a = {} // Syntax Error: 'a' is read-only
// 上面代码中，脚本加载了变量 a，对其重新赋值就会报错，因为 a 是一个只读的接口，但是，如果 a 是一个对象，改写 a 的属性是允许
import { a } from './xxx.js'
a.foo = 'hello' // 合法操作
```

`import` 后面的 `from` 指定模块文件的位置，可以是相对路径，也可以是绝对路径。如果不带有路径，只是一个模块名，那么必须有配置文件，告诉 javascript 引擎该模块的位置。

`mport` 命令具有提升效果，会提升到整个模块的头部，首先执行

```js
foo()

import { foo } from 'my_module'
```

上面的代码不会报错，因为 `import` 的执行早于 `foo` 的调用。这种行为的本质是，`import` 命令是编译阶段执行的，在代码运行之前。

**import 是静态执行，不能使用表达式和变量**

由于 import 是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构

```js
// 报错
import { 'f' + 'oo' } from ''my_module

// 报错
let module = 'my_module'
import { foo } from module

// 报错
if (x === 1) {
	import { foo } from 'module1'
} else {
	import { foo } from 'module2'
}
```

上面三种写法都会报错，因为它们用到了表达式、变量和 if 结构。在静态分析阶段，这些语法是没法得到值的。
最后，`import` 语句会执行所加载的模块，因此可以有下面的写法：

```js
import 'lodash'
```

上面代码仅仅执行 `lodash` 模块，但是不输入任何值。
如果多次重复执行同一句 `import` 语句，那么只会执行一次，而不会执行多次。

```js
import 'lodash'
import 'lodash'
```

上面代码加载了两次 `lodash`，但是只会执行一次

```js
import { foo } from 'my_module'
import { bar } from 'my_module'

// 等同于
import { foo, bar } from 'my_module'
```

上面代码中，虽然 `foo` 和 `bar` 在两个语句中加载，但是它们对应的是同一个 `my_module` 模块，也就是说，`import` 语句是`singleton` 模式。

**模块的整体加载**

除了指定加载某个输出值，还可以使用整体加载，即用星号（`*`）指定一个对象，所有输出值都加载在这个对象上。
例如，下面是一个 `circle.js` 文件，它输出两个方法 `area` 和 `circum`

```js
// circle.js
export function area(radius) {
	return Math.PI * radius * radius
}
export function circum(radius) {
	return @ * Math.PI * radius
}
```

现在，加载这个模块

```js
// main.js
import {area, circum} from './circle'

console.log(area(4))
console.log(circum(14))
```

上面写法是逐一指定要加载的方法，整体加载的写法如下。

```js
import * as circle from './circle'

console.log(circle.area(4))
console.log(circle.circum(14))
```

注意：模块整体加载所在的那个对象（上例是 circle），应该是可以静态分析的，所以不允许运行时改变。下面的写法都是不允许的。

```js
import * as circle from './circle'

// 下面两行都是不允许的
circle.foo = 'hello'
circle.area = function () {}
```

### import()函数

ES2020提案引入 `import()` 函数，支持动态加载模块

```js
import(specifier)

```

上面代码中，`import` 函数的参数 `specifier`，指定所要加载的模块的位置，`import` 命令能够接受上面参数，`import()` 函数就能接受上面参数，两者区别主要是后者为动态加载。
`import()` 返回一个 Promise 对象。如

```js
const main = document.querySelector('main');

import(`./section-modules/${someVariable}.js`)
  .then(module => {
    module.loadPageInto(main);
  })
  .catch(err => {
    main.textContent = err.message;
  });
```

`import()` 函数可以用在任何地方，不仅仅是模块，非模块的脚本也可以使用。它是运行时执行，也就是说，什么时候运行到这一句，就会加载指定的模块。另外，`import()` 函数与所加载的模块没有静态连接关系，这点也是与 `import` 语句不相同。`import()` 类似于 Node 的 `require` 方法，区别主要是前者是异步加载，后者是同步加载。

#### 适用场合

#### 按需加载

`import()` 可以在需要的时候，再加载某个模块

```js
button.addEventListener('click', event => {
  import('./dialogBox.js')
  .then(dialogBox => {
    dialogBox.open();
  })
  .catch(error => {
    /* Error handling */
  })
});
```

上面代码中，`import()` 方法放在 `click` 事件的监听函数中，只有用户点击了按钮，才会加载这个模块。

#### 条件加载

`import()` 可以放在 if 代码块，根据不同的情况，加载不同的模块

```js
if (condition) {
  import('moduleA').then(...);
} else {
  import('moduleB').then(...);
}
```

上面代码中，如果满足条件，就加载模块 A，否则加载模块 B

#### 动态的模块路径

`import()` 允许模块路径动态生成

```js
import(f())
.then(...)
```

上面代码中，根据函数 f 的返回结果，加载不同的模块。

#### 注意点

`import()` 加载模块成功以后，这个模块会作为一个对象，当作 `then` 方法的参数。因此，可以使用对象结构赋值的语法，获取输出接口

```js
import('./myModule.js')
.then({export1, export2}) => {
	// ...
})
```

上面代码中，`export1` 和 `export2` 都是 `myModule.js` 的输出接口，可以解构获得
如果想同时加载多个模块，可以

```js
Promise.all([
  import('./module1.js'),
  import('./module2.js'),
  import('./module3.js'),
])
.then(([module1, module2, module3]) => {
   ···
});
```

`import()` 也可以用在 async 函数中

```js
async function main() {
  const myModule = await import('./myModule.js');
  const {export1, export2} = await import('./myModule.js');
  const [module1, module2, module3] =
    await Promise.all([
      import('./module1.js'),
      import('./module2.js'),
      import('./module3.js'),
    ]);
}
main();
```

## ES6 Promise

Promise 是一种异步操作，共有三种状态：

- `pending`（进行中）。
- `fulfilled`（已成功）。
- `rejected`（已失败）。

特点：

1. 只有异步操作可以决定当前处于的状态，并且任何其他操作无法改变这个状态；
2. ⼀旦状态改变，就不会再变。状态改变的过程只可能是从 pending 变为 fulfilled 和从 pending 变为 rejected 。如果状态发⽣上述变化后，此时状态就不会再改变 了，这时就称为 resolved（已定型） 。

### then()

其使用格式为：

```
then(fn1,fn2)
```

fn1 , fn2 分别指定 resolved 状态和 rejected 状态的回调函数。第一个回调函数就是 `fulfilled` 状态时调用；第二个回调函数就是 `rejected` 时调用，第二个参数是可选的。

```js
const promise1 = new Promise(function (resolve, reject) {
  resolve("success1");
  resolve("success2");
});
const promise2 = new Promise(function (resolve, reject) {
  resolve("success3");
  reject("reject");
});
promise1.then(function (value) {
  console.log(value); // success1
});
promise2.then(function (value) {
  console.log(value); // success3
});
```

### catch()

返回一个 Promise ，并且处理拒绝的情况。它的行为与调用 `Promise.prototype.then(undefined, onRejected)` 相同。

其语法为：

```javascript
p.catch(onReject);

p.catch(function (reason) {
  // 拒绝
});
```

### all()

其语法为：

```javascript
Promise.all(iterable);
```

iterable 必须是一个可迭代对象，如 Array 或 String，返回一个新的 `Promise` 实例。

如果传入的参数中存在不是 `Promise` 实例，则会先调用 `Promise.resolve`，将其转为 `Promise` 实例，再进一步处理。

如果传入的参数为空的可迭代对象，则同步返回一个已完成（already resolved）状态的 Promise；非空时则返回一个异步完成（asynchronously resolved）。

只有在全体 `Promise` 都为 `fulfilled` 的情况下，新的实例才会变成 `fulfilled` 状态。；如果参数中 `Promise` 有一个失败（`rejected`），此实例回调失败（`rejecte`），失败原因的是第一个失败 `Promise` 的结果。

```javascript
// all.js
var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "one");
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "two");
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "three");
});
var p4 = new Promise((resolve, reject) => {
  reject("p4 reject!");
});
var p5 = new Promise((resolve, reject) => {
  reject("p5 reject!");
});

Promise.all([p1, p2, p3, p4, p5]).then(
  (values) => {
    console.log(values);
  },
  (reason) => {
    console.log(reason);
  }
);

// p4 reject!
```

#### setTimeout的第三个参数

这里setTimeout的第三个参数作为延时器调用函数的第三个参数。

### resolve() 和 reject()

该构造函数接收两个函数作为参数，分别是 resolve 和 reject 。

当异步操作执行成功后，会将异步操作结果作为参数传入 resolve 函数并执行，此时 Promise 对象状态从 pending 变为 fulfilled ； 失败则会将异步操作的错误作为参数传入 reject 函数并执行，此时 Promise 对象状态从 pending 变为 rejected 。

```javascript
const promise = new Promise((resolve, reject) => {
  // do something here ...
  if (success) {
    resolve(value); // fulfilled
  } else {
    reject(error); // rejected
  }
});
```



## ES6 async 函数

其语法格式如下：

```javascript
async function name([param[, param[, ... param]]]) { statements }
```

- name: 函数名称。
- param: 要传递给函数的参数的名称。
- statements: 函数体语句。

返回值 async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。

```JS
// helloAsync.js
async function helloAsync() {
  return "helloAsync";
}

console.log(helloAsync()); // Promise {<resolved>: "helloAsync"}

helloAsync().then((v) => {
  console.log(v); // helloAsync
});
```



## ES6 Symbol 类型

ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：Undefined 、Null 、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

Symbol 值通过 `Symbol` 函数生成。对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，都是独一无二的，可以保证不会与其他属性名产生冲突。

### Symbol 属性

创建 Symbol 类型的变量，语法如下：

```jsx
var s = Symbol(["message"]);
```

`Symbol` 函数的 message 可以省略，表示对当前 Symbol 值的描述，用于区分 Symbol 变量。

```js
// test1.js
var p1 = Symbol();
var p2 = Symbol("zhangsan");

console.log(p1); // Symbol()
console.log(p2); // Symbol(zhangsan)
```

**Symbol 类型还可以用于定义一组常量，保证这组常量的值都是不相等的。**

```js
// test2.js
const log = {};
log.levels = {
  DEBUG: Symbol("debug"),
  INFO: Symbol("info"),
  WARN: Symbol("warn"),
};
console.log(log.levels.DEBUG, "debug message");
console.log(log.levels.INFO, "info message");

console.log(Symbol("debug") == Symbol("debug"))//false
```

### Symbol 方法

其语法格式如下所示：

```javascript
Symbol([description]);
```

ES5 时，声明对象属性通常使用的是字符串，ES6 中提供了 Symbol，使用 Symbol 可以作为对象的属性名。

```javascript
// test3.js
var pname = Symbol("lisi");
var age = Symbol();
var sex = Symbol();
var person = {
  // 给 person 对象添加属性 pname 并赋值
  [pname]: "zhangsan",
};
// 给 person 对象添加属性 age 并赋值
person[age] = 18;
// 给 person 对象添加属性 sex 并赋值
Object.defineProperty(person, sex, { value: "male" });

console.log(person[pname]); // 'zhangsan'
console.log(person[age]); // 18
console.log(person[sex]); // male
var p = Object.getOwnPropertySymbols(person);
console.log(p); // Symbol(lisi), Symbol(), Symbol()
```

### 其他

`Symbol.for()` 是接收一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。

**`Symbol()` 写法没有登记机制，所以每次调用都会返回一个不同的值。**

`Symbol.keyFor()` 是返回一个已登记的 Symbol 类型值的 `key`。

```javascript
// test4.js
var s1 = Symbol.for("aaa");
var s2 = Symbol.for("aaa");

console.log(s1 === s2); // true

var s3 = Symbol.for("aaa");
console.log(Symbol.keyFor(s3)); // "aaa"

var s4 = Symbol("aaa");
console.log(Symbol.keyFor(s4)); // undefined
```

## ES6 Class 类

### 类定义

类表达式可以是匿名或命名的方式。

```javascript
// 匿名类
let ExampleA = class {
  constructor(count) {
    this.count = count;
  }
};
// 命名类
let ExampleB = class ExampleB {
  constructor(a) {
    this.a = a;
  }
};
```

### 类声明

```javascript
class ExampleC {
  constructor(a) {
    this.a = a;
  }
}
```

> 注意要点：不可以重复声明，不然报错。

```javascript
class ExampleA {}
class ExampleA {}
// Uncaught SyntaxError: Identifier 'ExampleA' has already been
// declared

let Example1 = class {};
class ExampleA {}
// Uncaught SyntaxError: Identifier 'Example' has already been
// declared
```

> 注意：必须在访问前对类进行定义，否则就会报错。类中方法不需要 function 关键字。方法间不能加分号。

```javascript
new Example();
class Example {}
```

### 类的主体

**属性 prototype**

ES6 中，prototype 仍旧存在，虽然可以直接在类中定义方法，但是其实方法还是定义在 prototype 上的。覆盖方法 / 初始化时添加方法如下：

```javascript
ExampleA.prototype = {
  // methods
  getName(){
        return '张三';
    },
    getAge(){
        return '12';
    }
};
```

在类的实例上面调用方法，其实就是调用原型上的方法

```html
//index.js
console.log(person.constructor === Person.prototype.constructor);//true
```

添加方法：

**Object.assign**方法可以给对象Person动态的增加方法,而Person.prototype = {}是覆盖对象的方法,或者在初始化的时候添加方法。

```javascript
Object.assign(ExampleA.prototype, {
  // methods
});
```

**静态属性**

静态属性：class 本身的属性，也就是直接定义在类内部的属性（ Class.propname ），不需要实例化。ES6 中规定，Class 内部只有静态方法，没有静态属性。这里意思是，本来没有使用static定义静态属性的，但现在可以用下面方法实现

```javascript
class ExampleB {
  // 新提案
  static a = 2;
}
// 目前可行写法
ExampleB.b = 2;
```

**公共属性**

```javascript
class ExampleC {}
ExampleC.prototype.a = 2;
```

**实例属性**

实例属性：定义在实例对象（ this ）上的属性。

```javascript
class ExampleD {
  a = 2;
  constructor() {
    console.log(this.a);
  }
}

class Example {
    a = 2;
    constructor() {
        console.log(this.a,this.b) // 2，2
    }
}
Example.prototype.b = 2;
let test = new Example()
console.log(test.b)//2
//实例属性和公共属性其实没有区别。。
```

**name 属性**

返回跟在 class 后的类名（存在时）。

```javascript
let ExampleE = class Exam {
  constructor(a) {
    this.a = a;
  }
};
console.log(ExampleE.name); // Exam

let ExampleF = class {
  constructor(a) {
    this.a = a;
  }
};
console.log(ExampleF.name); // ExampleF
```

### 方法

**constructor 方法**

constructor 方法是类的默认的方法，创建类的实例化对象时被调用。

```javascript
class Example {
  constructor() {
    console.log("我是constructor");
  }
}
new Example(); // 我是 constructor
```

**返回对象**

```javascript
class Test {
  constructor() {
    // 默认返回实例对象 this
  }
}
console.log(new Test() instanceof Test); // true

class Example {
  constructor() {
    // 指定返回对象
    return new Test();
  }
}
console.log(new Example() instanceof Example); // false
```

**静态方法**

```javascript
class Example {
  static sum(a, b) {
    console.log(a + b);
  }
}
Example.sum(1, 2); // 3
```

**原型方法**

```javascript
class Example {
  constructor() {
    this.sum = (a, b) => {
      console.log(a + b);
    };
  }
}
```

**实例方法**

```javascript
class Example {
  constructor() {
    this.sum = (a, b) => {
      console.log(a + b);
    };
  }
}
```

### 类的实例化

**new**

类的实例化，必须通过 new 关键字。

```javascript
class ExampleG {}

let exam1 = ExampleG();
// Class constructor Example cannot be invoked without 'new'
```

**实例化对象**

共享原型对象。

```javascript
class ExampleH {
  constructor(m, n) {
    this.m = m;
    this.n = n;
    console.log("ExampleH");
  }
  sum() {
    return this.m + this.n;
  }
}
let exam1 = new ExampleH(5, 3);
let exam2 = new ExampleH(2, 7);
console.log(exam1._proto_ == exam2._proto_); // true

exam1.__proto__.sub = function () {
  return this.m - this.n;
};
console.log(exam1.sum()); // 8
console.log(exam2.sub()); // -5
```

### decorator

目前还是实验

> decorator 是一个函数，用来修改类的行为，在代码编译时产生作用。

#### 类修饰

一个参数。

第一个参数 target，指向类本身。

```javascript
function testable(target) {
  target.isTestable = true;
}
@testable
class Example {}
Example.isTestable; // true
```

多个参数——嵌套实现。

```javascript
function testable(isTestable) {
  return function (target) {
    target.isTestable = isTestable;
  };
}
@testable(true)
class Example {}
Example.isTestable; // true
```

实例属性，上面两个例子添加的是静态属性，若要添加实例属性，在类的 prototype 上操作即可。

#### 方法修饰

3 个参数：target（类的原型对象）、name（修饰的属性名）、descriptor（该属性的描述对象）。

```javascript
class Example {
  @writable
  sum(a, b) {
    return a + b;
  }
}
function writable(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor; // 必须返回
}
```

#### 修饰器执行顺序

由外向内进入，由内向外执行。

```javascript
class Example {
  @logMethod(1)
  @logMthod(2)
  sum(a, b) {
    return a + b;
  }
}
function logMethod(id) {
  console.log("evaluated logMethod" + id);
  return (target, name, desctiptor) =>
    console.log("excuted         logMethod " + id);
}
// evaluated logMethod 1
// evaluated logMethod 2
// excuted logMethod 2
// excuted logMethod 1
```

### 封装与继承

#### getter / setter

定义如下所示：

```javascript
class Example {
  constructor(a, b) {
    this.a = a; // 实例化时调用 set 方法
    this.b = b;
  }
  get a() {
    console.log("getter");
    return this.a;
  }
  set a(a) {
    console.log("setter");
    this.a = a; // 自身递归调用
  }
}
let exam = new Example(1, 2); // 不断输出 setter，最终导致 RangeError
class Example1 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  get a() {
    console.log("getter");
    return this._a;
  }
  set a(a) {
    console.log("setter");
    this._a = a;
  }
}
let exam1 = new Example1(1, 2); // 只输出 setter, 不会调用 getter 方法
console.log(exam1._a); // 1, 可以直接访问
```

以上说明，为了防止被重复调用，使用set时候，用`_a`赋值

特殊情况：getter 不可单独出现。

```javascript
class Example {
  constructor(a) {
    this.a = a;
  }
  get a() {
    return this.a;
  }
}
let exam = new Example(1); // Uncaught TypeError: Cannot set property // a of #<Example> which has only a getter
```

要点：getter 与 setter 必须同级出现。

```javascript
class Father {
  constructor() {}
  get a() {
    return this._a;
  }
}
class Child extends Father {
  constructor() {
    super();
  }
  set a(a) {
    this._a = a;
  }
}
let test = new Child();
test.a = 2;
console.log(test.a); // undefined

class Father1 {
  constructor() {}
  // 或者都放在子类中
  get a() {
    return this._a;
  }
  set a(a) {
    this._a = a;
  }
}
class Child1 extends Father1 {
  constructor() {
    super();
  }
}
let test1 = new Child1();
test1.a = 2;
console.log(test1.a); // 2
```

#### extends

通过 extends 实现类的继承。

```javascript
class Child extends Father { ... }
```

#### super

子类 constructor 方法中必须有 super，且必须出现在 this 之前，下面的代码就是没有 super 函数导致出错的情况。

```javascript
class Father {
  constructor() {}
}
class Child extends Father {
  constructor() {}
  // or
  // constructor(a) {
  // this.a = a;
  // super();  // 这里必须要有，如果没有super（）会报错
  // }
}
let test = new Child(); // Uncaught ReferenceError: Must call super
// constructor in derived class before accessing 'this' or returning
// from derived constructor
```

**注意要点**

不可继承常规对象。

```javascript
var Father = {
  // ...
};
class Child extends Father {
  // ...
}
// Uncaught TypeError: Class extends value #<Object> is not a constructor or null

// 解决方案
Object.setPrototypeOf(Child.prototype, Father);
```

## ES6 Generator 函数

### Generator 函数组成

Generator 有两个方面和普通函数不一样：

- function 后面，函数名之前有个 * ；
- 函数的内部有 yield 表达式。

其中 * 用来表示 Generator 函数，yield 用来定义函数内部的状态。

```javascript
function* call() {
  console.log("first");
  yield "1";
  console.log("second");
  yield "2";
  console.log("third");
  return "3";
}
```

### Generator 函数执行机制

使用 Generator 函数，和一般函数一样，是在函数名后面加上 ()，但是 Generator 函数不会像普通函数那样马上执行，而是会返回一个指针，这个指针指向对象的内部状态，所以要调用遍历器对象 Iterator 的 next 方法，指针就会从函数头部或者上一次停下来的地方开始执行。

```javascript
f.next();
// one
// {value: "1", done: false}

f.next();
// two
// {value: "2", done: false}

f.next();
// three
// {value: "3", done: true}

f.next();
// {value: undefined, done: true}
```

详细解释如下说明：

- 第一次调用 next 方法时，从 Generator 函数的头部开始执行，先是打印了 first，执行到 yield 就停下来，并将 yield 后边表达式的值 '1'，作为返回对象的 value 属性值，此时函数还没有执行完，返回对象的 done 属性值是 false。
- 第二次调用 next 方法时，和第一次一样。
- 第三次调用 next 方法时，先是打印了 third，然后执行了函数的返回操作，并将 return 后面的表达式的值，作为返回对象的 value 属性值，此时函数已经结束，所以 done 属性值为 true。
- 最后调用 next 方法时，此时函数已经执行完了，所以返回 value 属性值是 undefined ，done 属性值是 true。**如果执行第三步时，没有 return 语句的话，就直接返回 {value: undefined, done: true}。**

### 函数返回的遍历器对象的方法

**next 方法**

**常规情况，next 方法不传入参数时候，<u>yield 表达式的返回值是 undefined</u>。当 next 传入参数的时候，这个参数会作为上一步 yield 的返回值。**

```javascript
function* make2Parameter() {
  console.log("开始");
  var x = yield "2";
  console.log("第一个:" + x);
  var y = yield "3";
  console.log("第二个:" + y);
  console.log("全部是:" + (x + y));
}
```

next 不传参的情况如下：

```javascript
var cost = make2Parameter();
cost.next();
// 开始
// {value: "2", done: false}
cost.next();
// 第一个:undefined
// {value: "3", done: false}
cost.next();
// 第二个:undefined
// 全部是:NaN
// {value: undefined, done: true}
```

next 传参情况：

```javascript
var cost2 = make2Parameter();
cost2.next(10);
// 开始
// {value: "2", done: false}
cost2.next(20);
// 第一个:20
// {value: "3", done: false}
cost2.next(30);
//第二个:30
// 全部:50
// {value: undefined, done: true}
```

除了使用 next，还可以使用 for... of 循环遍历 Generator 函数生产的 Iterator 对象。

**return 方法**

return 方法返回给定的值，并结束遍历 Generator 函数。return 方法提供参数时，返回该参数；不提供参数时，返回 undefined。

```javascript
function* call() {
    yield 1;
    yield 2;
    yield 3;
}
var f = call();
f.next();
// {value: 1, done: false}
f.return("foo");
// {value: "foo", done: true}
f.next();
// {value: undefined, done: true}
throw 方法
throw 方法可以再 Generator 函数体外面抛出异常，再函数体内部捕获。
```

另外一个例子：

```javascript
var d = function* () {
  try {
    yield;
  } catch (e) {
    console.log("捕获里面的错误", e);
  }
};

var i = d();
i.next();

try {
  i.throw("a");
  i.throw("b");
} catch (e) {
  console.log("捕获外面的错误", e);
}
//"捕获外面的错误", a
//"捕获外面的错误", b
```

遍历器对象抛出了两个错误，第一个被 Generator 函数内部捕获，第二个因为函数体内部的 catch 函数已经执行过了，不会再捕获这个错误，所以这个错误就抛出 Generator 函数体，被函数体外的 catch 捕获。

**`yield\*` 表达式**

yield* 表达式用于表示 yield 返回一个遍历器对象，用于在 Generator 函数内部，调用另一个 Generator 函数。

```javascript
function* callA() {
  console.log("callA: " + (yield));
}
function* callerB() {
  while (true) {
    yield* callA();
  }
}
const callerObj = callerB();
callerObj.next();
callerObj.next("first");
callerObj.next("second");

// 等同于
function* callerB() {
  while (true) {
    for (var value of callA) {
      yield value;
    }
  }
}

//callA: first
//callA: second
```

为什么上面3个next，结果却是两个呢，在前面也说了，next的参数只给前一个yield的

还得再说明一下，yield后面不是返回值

### 使用场景

**实现 Iterator**

为不具备 Iterator 接口的对象提供遍历方法。

```javascript
function* objEnter(obj) {
  const propKeys = Reflect.ownKeys(obj);
  for (const propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}

const jane = { first: "小A", last: "大D" };
console.log(objEnter(jane).next())//{ value: [ 'first', '小A' ], done: false }
// 这里的of相当于每一次取next的value
for (const [key, value] of objEnter(jane)) {
  console.log(`${key}: ${value}`);
}
// first: 小A
// last: 大D
```

Reflect.ownKeys() 返回对象所有的属性，不管属性是否可枚举，包括 Symbol。 javascript 原生是不具备 Iterator 接口无法通过 for... of 遍历。这边用了 Generator 函数加上了 Iterator 接口，所以就可以遍历 jane 对象了。
