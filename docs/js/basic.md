# JavaScript 基础

## JavaScript 使用

在 HTML 中，使用 JavaScript 也有三种方式，下面我们逐一介绍。

### 使用外部 JavaScript 文件

使用外部 JavaScript 文件，就是将 JavaScript 脚本代码写入一个后缀为 `.js` 的外部脚本文件中，当编写的 HTML 文档需要使用这个 JavaScript 脚本文件时，通过给 `<script>` 标签设置 src 属性的方式，引入这个脚本文件即可。

在使用 JavaScript 时，可以采用外部文件的方式，而且我们通常将这些 JavaScript 脚本文件都存放到一个命名为 js 的目录中，方便管理和维护。

示例：在 HTML 文档中使用外部 JavaScript 文件。

```html
<html>
  <head>
    <script src="js/write.js"></script>
  </head>
  <body>
    <script src="js/alert.js"></script>
  </body>
</html>
```

`write.js` 代码如下：

```javascript
document.write("学习《使用前端技术展现 Web 系统》课程");
```

`alert.js` 代码如下：

```javascript
alert("我是 JavaScript 脚本代码！");
```

需要注意，JavaScript 脚本文件中不能包含 `<script>` 标签，只能包含 `JavaScript` 脚本代码。

### 使用 `<script>` 标签

我们使用 `<script>` 标签将 JavaScript 代码嵌入到 HTML 文档中（包括 `<head>` 和 `<body>` ）。通常的做法是把 JavaScript 函数放入 `<head>` 部分中，这样就可以把它们集中到同一处位置，不会干扰页面的其他内容。在一个文档中，可以同时嵌入多个 `script` 元素，里面存放 `JavaScript` 脚本代码。

基本语法：

```javascript
<script>
<!-- JavaScript脚本代码-->
</script>
```

浏览器在遇到 `<script>` 标签时，会解释并执行位于 `<script>` 和 `</script>` 之间的 JavaScript 脚本代码。在一些网页中，我们经常会看到在 `<script>` 标签里加上 type 属性，属性值为 text/javascript 。现在已经不必这样做了，因为 JavaScript 已经是所有现代浏览器以及 HTML5 中的默认脚本语言。

示例：了解 JavaScript 基本结构。

```html
<html>
  <head>
    <script>
      document.write("学习《使用前端技术展现Web系统》课程");
    </script>
  </head>
  <body>
    <script>
      alert("我是JavaScript脚本代码！");
    </script>
  </body>
</html>
```

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201262203799.gif)

从运行结果可以看出，`document.write("学习《使用前端技术展现Web系统》课程");` 语句的作用是向页面输出内容，而“ `alert("我是JavaScript脚本代码！");` ”语句的作用是弹出了一个警告对话框。

### 在 HTML 标签中

针对一些特别简短的 JavaScript 代码，我们可以直接在 HTML 标签中加入。例如单击一个普通按钮，会弹出一个对话框的功能，就可以用下面的代码实现。当用户单击“警告”按钮时，会弹出所示的对话框。

```html
<input
  type="button"
  name="alert"
  value="警告"
  onclick="javascript: alert('我是JavaScript脚本代码！');"
/>
```

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201262204567.gif)

> 浏览器本身并不会执行 JS 代码，而是通过内置 JavaScript 引擎（解释器）来执行 JS 代码 。JS 引擎执行代码时逐行解释每一句源码（转换为机器语言），然后由计算机去执行，所以 JavaScript 语言归为脚本语言，会逐行解释执行。

## JavaScript 语法

### JavaScript 基础语法

```js
function 函数名(参数) {
  return 返回值;
}
```

JavaScript 是一种弱类型语言，在声明变量时，不需要指定变量的类型，变量的类型由赋值给变量的值决定。在 JavaScript 中，使用 var 声明变量，声明变量时也可以直接赋值。

```javascript
var height = 80;
var left,
  right,
  top,
  bottom = 20;
var info = "I’m fine!";
```

尤其需要注意，在 JavaScript 中，对大小写敏感。在 JavaScript 中，甚至可以不经声明直接使用变量，但作为软件开发人员而言，反对这样做，因为一旦出错不容易排查。

#### **数据类型**

JavaScript 包括如下数据类型：字符串（string）、数字（number）、布尔（boolean）、数组、对象（object）、空（null）、未定义（undefined）。其中字符串需要用单引号或双引号括起来。

例如下面的代码，第 1 行声明了一个未定义类型 height，当给 height 赋值 80 时，该变量为数字类型。

```JavaScript
var height

height = 80；
```

我们可以通过 typeof 运算符来判断一个变量的数据类型，下面的代码和显示结果说明了 JavaScript 数据类型和 typeof 运算符的使用。

```html
<html>
  <head>
    <script>
      document.write("<h3>JavaScript数据类型及typeof使用</h3>");
      var undef,
        width = 80,
        height = 20.5,
        fill = true;
      var fileName = "typeof.html";
      var objecttype = new Date();
      document.write("undef类型为：" + typeof undef + "<br>");
      document.write("width类型为：" + typeof width + "<br>");
      document.write("height类型为：" + typeof height + "<br>");
      document.write("fill类型为：" + typeof fill + "<br>");
      document.write("fileName类型为：" + typeof fileName + "<br>");
      document.write("objecttype类型为：" + typeof objecttype + "<br>");
    </script>
  </head>
</html>
```

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201262207468.png)

#### **对象**

JavaScript 中所有事物都是对象，例如数字、字符串、日期和数组等。

示例：创建并使用带有属性的对象，访问对象的属性和访问对象的方法。

```html
<html>
  <body>
    <script>
      var text = { width: 80, height: 20, name: "密码框", color: "blue" };
      document.write(
        text.name + "的宽和高分别为：" + text.width + " " + text.height
      );
    </script>
  </body>
</html>
```

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201262207446.png)

该案例中，自定义了一个对象 text，并给该对象设置了四个属性，执行了属性赋值和访问操作。

### JavaScript 运算符

略,与c,c++,java一样

### JavaScript 流程控制

JavaScript 控制语句分为 if...else... 条件语句、 switch 语句、 for 循环语句、 while 循环语句、 break 和 continue 循环语句，仍然和 Java 非常类似。需要注意的是， JavaScript 中 switch 语句可以用于字符串，而 Java 中 switch 语句直到 JDK 7.0 才开始支持字符串类型。

JavaScript 中的输入和输出，因为针对的对象不同，可以分为针对用户的输入和输出，以及针对 HTML 文档元素的输入和输出。

```js
for (初始化表达式; 条件表达式; 循环后操作) {}
```

#### 针对用户输入、输出

在浏览者访问网页时，常会弹出一个对话框提示一个警告信息或弹出一个对话框要求用户输入一个数据，这就是我们说的针对用户的输入、输出。

前面的案例中，通过 `alert()` 方法，能创建、显示一个特殊的对话框窗口，该窗口中包含一个字符串和一个“确定”按钮。在单击“确定”或关闭该对话框前，正在操作的网页不可用。

示例：通过 `prompt()` 方法实现的针对用户的输入。我们要完成的需求是打印倒小太阳的特殊符号，打印前要求用户输入需要打印多少行，根据用户的输入进行打印。

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201262211478.gif)

```html
<html>
  <body>
    <h3 style="text-align:center">打印倒小太阳</h3>
    <table width="100%" border="0" cellspacing="0" ellpadding="0">
      <tr>
        <td style="text-align:center;">
          <script>
            var sun = "\u263c"; // 小太阳 Unicode 码为 \u263c
            var num = prompt("请输入需要打印出多少行小太阳：", "10");

            for (var r = num; r > 0; r--) {
              // 逐行打印
              for (var c = 0; c < r; c++) {
                document.write("  " + sun + "  ");
              }
              document.write("<br/>");
            }
          </script>
        </td>
      </tr>
    </table>
  </body>
</html>
```

prompt() 方法中有两个参数，第一个是提示信息，第二个是显示的默认值。如果用户在对话框中单击“取消”按钮或直接关闭对话框，该方法返回 null。

#### 操作 HTML 元素

JavaScript 可以操作 HTML 元素。如果需要从 HTML 文档中获取元素输入到 JavaScript 代码中，可以使用 `document.getElementById(id)` 方法，其中 id 是用来标识 HTML 元素的，在学习 CSS 时常用的 id 选择器中的 id 就是这个 id。

示例：获取 HTML 元素并改变该元素的属性。

```html
<html>
  <body>
    <h1>JavaScript操作HTML元素</h1>
    <p id="pid">这是我原始的段落内容！</p>
    <script>
      document.getElementById("pid").innerHTML = "通过id获取HTML元素！";
    </script>
  </body>
</html>
```

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201262212243.png)

该行 JavaScript 代码的作用是访问 id="pid" 的 HTML 元素，并把它的内容（innerHTML）替换为“通过 id 获取 HTML 元素！”，关于获取和操作元素相关的知识后面会详细介绍。

### JavaScript 函数

JavaScript 中的函数类似于 Java 中的方法，是执行特定功能的语句块。Java 中出现方法的主要目的是为了使程序结构清晰、代码复用和便于维护，JavaScript 中使用函数也是解决类似的问题。

不过在 JavaScript 中，函数使用比较简单，不需要像 Java 一样通过“对象名.方法名”的方式调用，而直接使用函数名即可。同样 JavaScript 中有自带的系统函数，我们也可以自定义函数以供使用。

# JavaScript 内置类型与对象

## JavaScript 数组

avaScript 中，Array 对象代表数组，创建 Array 对象的语法为：

```javascript
new Array();
new Array(size);
new Array(element0, element1, ..., elementN);
```

在下表中列出了 Array 对象部分属性、方法和简单描述。

#### Array 属性

| 属性        | 描述                            |
| :---------- | :------------------------------ |
| constructor | 返回创建 Array 对象原型的函数。 |
| length      | 设置或返回数组中元素的数量。    |
| prototype   | 允许您向数组添加属性和方法。    |

#### Array 方法

| 方法          | 描述                                               |
| :------------ | :------------------------------------------------- |
| concat()      | 连接两个或多个数组，并返回已连接数组的副本。       |
| copyWithin()  | 将数组中的数组元素复制到指定位置或从指定位置复制。 |
| entries()     | 返回键/值对数组迭代对象。                          |
| every()       | 检查数组中的每个元素是否通过测试。                 |
| fill()        | 用静态值填充数组中的元素。                         |
| filter()      | 使用数组中通过测试的每个元素创建新数组。           |
| find()        | 返回数组中第一个通过测试的元素的值。               |
| findIndex()   | 返回数组中通过测试的第一个元素的索引。             |
| forEach()     | 为每个数组元素调用函数。                           |
| from()        | 从对象创建数组。                                   |
| includes()    | 检查数组是否包含指定的元素。                       |
| indexOf()     | 在数组中搜索元素并返回其位置。                     |
| isArray()     | 检查对象是否为数组。                               |
| join()        | 将数组的所有元素连接成一个字符串。                 |
| keys()        | 返回 Array Iteration 对象，包含原始数组的键.       |
| lastIndexOf() | 在数组中搜索元素，从末尾开始，并返回其位置。       |
| map()         | 使用为每个数组元素调用函数的结果创建新数组。       |
| pop()         | 删除数组的最后一个元素，并返回该元素。             |
| push()        | 将新元素添加到数组的末尾，并返回新的长度。         |
| reduce()      | 将数组的值减为单个值（从左到右）。                 |
| reduceRight() | 将数组的值减为单个值（从右到左）。                 |
| reverse()     | 反转数组中元素的顺序。                             |
| shift()       | 删除数组的第一个元素，并返回该元素。               |
| slice()       | 选择数组的一部分，并返回新数组。                   |
| some()        | 检查数组中的任何元素是否通过测试。                 |
| sort()        | 对数组的元素进行排序。                             |
| splice()      | 从数组中添加/删除元素。                            |
| toString()    | 将数组转换为字符串，并返回结果。                   |
| unshift()     | 将新元素添加到数组的开头，并返回新的长度。         |
| valueOf()     | 返回数组的原始值。                                 |

## 基本包装类型

JavaScript 中的基本类型包括了 undefined，null，boolean，number，string 。其中的 boolean，number，string 都存在其对应的包装类型 Boolean，Number，String 。由于包装类的存在，使得我们不需要显示的将 string 等类型的变量转换为其对应的包装类型的变量再去调用方法，而是可以直接去调用方法。

### String

String 对象用于处理文本（字符串）

| 方法                                | 描 述                |
| ----------------------------------- | -------------------- |
| length                              | 字符串的长度         |
| big()                               | 显示大号字体字符串   |
| small()                             | 显示小号字体字符串   |
| blink()                             | 显示闪动字符串       |
| bold()                              | 显示粗体字符串       |
| italics()                           | 显示斜体字符串       |
| strike()                            | 显示删除线字符串     |
| fixed(）                            | 显示打字机文本字符串 |
| sub()                               | 把字符串显示为下标   |
| sup()                               | 把字符串显示为上标   |
| toLowerCase()                       | 把字符串转换为小写   |
| toUpperCase()                       | 把字符串转换为大写   |
| fontcolor(color)                    | 指定字符串颜色       |
| fontsize(size)                      | 指定字符串字体大小   |
| concat(string1,string2,...,stringN) | 连接字符串           |

| 方法                               | 描 述                                                        |
| ---------------------------------- | ------------------------------------------------------------ |
| charAt(index)                      | 返回在指定位置的字符                                         |
| charCodeAt(index)                  | 返回在指定的位置的字符的 Unicode 编码                        |
| search(searchvalue)                | 检索字符串 searchvalue 的索引位置                            |
| indexOf(searchvalue,fromindex)     | 检索字符串 searchvalue 的索引位置，可以从指定位置 fromindex 开始检索 |
| lastIndexOf(searchvalue,fromindex) | 从后向前检索字符串 searchvalue 的索引位置                    |
| match(searchvalue)                 | 类似 indexOf ()，但它返回指定的值，而不是位置                |
| slice(start,end)                   | 从指定位置提取字符串的子串                                   |
| substr(start,length)               | 从指定位置提取字符串中指定长度的子串                         |
| substring(start,stop)              | 从指定位置提取字符串的子串（不接受负的参数）                 |
| replace(oldvalue,newvalue)         | 替换子字符串值                                               |
| split(separator,num)               | 把字符串分割为字符串数组，num 表示返回的数组的最大长度       |
| fromCharCode(num1,num2,...,numN)   | 由一系列字符编码创建一个字符串                               |
| anchor(anchorname)                 | 将文本创建为 HTML 锚                                         |
| link(URL)                          | 将字符串显示为链接                                           |
| toSource()                         | 代表对象的源代码                                             |
| toString()                         | 返回字符串                                                   |
| valueOf()                          | 返回某个字符串对象的原始值                                   |



### Number

Number 对象是原始数字的包装对象，创建 Number 对象的语法为：

```javascript
var myNum = new Number(value);
```

其中 value 是要创建的 Number 对象的数值。可以省略 new 关键字，但此时是把 Number() 当作一个函数来调用而不是当作构造函数使用，该函数返回 Number 对象。在下表列出了 Number 对象部分属性、方法和简单描述

| 方法               | 描 述                                                        |
| ------------------ | ------------------------------------------------------------ |
| MAX_VALUE          | 可表示的最大的数：1.7976931348623157e+308                    |
| MIN_VALUE          | 可表示的最小的数：5e-324                                     |
| NaN                | 表示非数字值                                                 |
| NEGATIVE_INFINITY  | 负无穷大，溢出时返回该值：-Infinity                          |
| POSITIVE_INFINITY  | 正无穷大，溢出时返回该值：Infinity                           |
| toString(radix)    | 把数字转换为字符串，radix 表示进制数，如 2、8、10、16，省略参数时默认值为 10 |
| toFixed(num)       | 把数字转换为字符串，按指定小数位数 num 四舍五入              |
| toExponential(num) | 把对象的值转换为指数计数法，小数点之后有 num 位数字          |
| toPrecision(num)   | 把数字格式化为指定的长度，如果 num 数足够大，采用定点计数法，不够大的话，则采用指数计数法 |
| valueOf()          | 返回一个 Number 对象的基本数字值                             |

示例：Number 对象属性和方法的使用。

```javascript
document.write("Number.MAX_VALUE:" + Number.MAX_VALUE + "<br>");
document.write("Number.MIN_VALUE:" + Number.MIN_VALUE + "<br>");
var month = 28;
if (month < 1 || month > 12) {
  month = Number.NaN;
}
document.write(month + "<br>");
var x = Number.MAX_VALUE * 2;
if (x == Number.POSITIVE_INFINITY) {
  document.write("Number.MAX_VALUE*2值为：" + x + "<br>");
}
var num1 = new Number(17);
document.write(
  "数17的二进制表示为：" +
    num1.toString(2) +
    "，八进制表示为：" +
    num1.toString(8) +
    "，十六进制表示为：" +
    num1.toString(16) +
    "<br>"
);
document.write(
  "Number(12.34567).toFixed(2)的值为：" + Number(12.34567).toFixed(2) + "<br>"
);
document.write(
  "Number(1234567).toExponential(4)的值为：" +
    Number(1234567).toExponential(4) +
    "<br>"
);
document.write(
  "Number(1234567).toPrecision(4)的值为：" +
    Number(1234567).toPrecision(4) +
    "<br>"
);
document.write(
  "Number(1234567).toPrecision(10)的值为：" +
    Number(1234567).toPrecision(10) +
    "<br>"
);
```

效果如下所示：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201271448937.png)

### Date

Date 对象用来处理日期和时间。Date 对象有很多的方法，接下来我们换一种方式学习日期对象，即不逐一列出 Date 对象的属性和方法，而是通过一些具体实例来学习 Date 对象。

#### 获取和设置日期

下面的案例演示了如何设置、获取和显示 Date 对象的日期和时间，具体代码如下，显示结果如下图所示。

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <script type="text/javascript">
      var date = new Date();
      document.write("Date显示：" + date + "<br>");
      document.write("Date.toUTCString显示：" + date.toUTCString() + "<br>");
      // 设置日期和时间
      date.setFullYear(2014, 8, 8); // 2014 年 9 月 8 日
      date.setHours(18);
      date.setMinutes(18);
      date.setSeconds(18);
      document.write("设置后，Date显示：" + date + "<br>");
      date = new Date("Jan 09, 2014, 19:19:19"); // 注意格式
      document.write("设置后，Date显示：" + date + "<br>");
    </script>
  </body>
</html>
```

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201271531026.png)

#### 显示动态时间

下面的完整案例演示了动态显示时间的变化，代码如下：

```javascript
<!DOCTYPE html>
<html>
    <head>
        <script>
            function Time(){
                var today = new Date();
                var h = today.getHours();
                var m = today.getMinutes();
                var s = today.getSeconds();
                document.getElementById('txt').innerHTML = "现在时间为：" + h + ":" + m + ":" + s;
                setTimeout('Time()',500);
            }
        </script>
    </head>
    <body onload="Time()">
        <h3 id = "txt"></h3>
    </body>
</html>
```

效果如下所示：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201271538107.gif)

### Math

Math 不是一个函数对象，它是 JavaScript 的一个内置对象。与其他全局对象不同的是，Math 不是一个构造器，Math 的所有的属性与方法都是静态的，我们可以直接使用 "Math." 的方式直接去调用。下表列出了 Math 对象部分属性、方法和简单描述，希望大家有所了解。

| 方法     | 描 述                                                        |
| -------- | ------------------------------------------------------------ |
| PI       | 圆周率，一个圆的周长和直径之比，约等于 3.14159。             |
| LN2      | 2 的自然对数，约等于 0.693。                                 |
| SQRT1_2  | 二分之一 ½ 的平方根，同时也是 2 的平方根的倒数 12，约等于 0.707。 |
| E        | 欧拉常数，也是自然对数的底数，约等于 2.718。                 |
| LOG2E    | 以 2 为底的 E 的对数，约等于 1.443。                         |
| abs()    | 返回一个数的绝对值。                                         |
| ceil()   | 返回大于一个数的最小整数，即一个数向上取整后的值。           |
| exp()    | 返回欧拉常数的参数次方，Ex，其中 x 为参数，E 是欧拉常数（2.718...，自然对数的底数）。 |
| floor()  | 返回小于一个数的最大整数，即一个数向下取整后的值。           |
| max()    | 返回零到多个数值中最大值。                                   |
| min()    | 返回零到多个数值中最小值。                                   |
| random() | 返回一个 0 到 1 之间的伪随机数。                             |
| round()  | 返回四舍五入后的整数。                                       |

示例：Math 对象属性和方法使用。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <script>
      // 从五种颜色中随机挑选一个颜色
      var arr = ["红色", "绿色", "蓝色", "黄色", "紫色"];
      // 获取随机数
      var r = Math.random();
      // 获取数组的下标
      var index = Math.floor(arr.length * r);
      // 根据下标获取数组元素
      var result = arr[index];
      console.log("这一次选择的颜色是：" + result);
      alert("这一次选择的颜色是：" + result);
      document.write("你选择的是：" + result);
    </script>
  </body>
</html>
```

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201271540742.gif)

### Global

全局对象只是一个对象，而不是类。既没有构造函数，也无法实例化一个新的全局对象。在 ECMAScript 中，不存在独立的函数，所有函数都必须是某个对象的方法。通过使用全局对象，可以访问所有其他所有预定义的对象、函数和属性。在下表中列出了全局对象部分属性、方法和简单描述

#### JavaScript 全局属性

| 属性      | 描述                           |
| :-------- | :----------------------------- |
| Infinity  | 表示正/负无穷大的数值。        |
| NaN       | “非数字”（"Not-a-Number"）值。 |
| undefined | 表示变量尚未赋值。             |

#### JavaScript 全局方法

| 方 法                | 描 述                                              |
| -------------------- | -------------------------------------------------- |
| decodeURI()          | 解码某个编码的 URI。                               |
| decodeURIComponent() | 解码一个编码的 URI 组件。                          |
| encodeURI()          | 把字符串编码为 URI。                               |
| encodeURIComponent() | 把字符串编码为 URI 组件。                          |
| eval()               | 计算 JavaScript 字符串，并把它作为脚本代码来执行。 |
| getClass()           | 返回一个 JavaObject 的 JavaClass。                 |
| isNaN()              | 检查某个值是否是数字。                             |
| Number()             | 把对象的值转换为数字。                             |
| parseFloat()         | 解析一个字符串并返回一个浮点数。                   |
| parseInt()           | 解析一个字符串并返回一个整数。                     |
| String()             | 把对象的值转换为字符串。                           |
| isFinite()           | 检查某个值是否为有穷大的数。                       |

示例：全局对象属性和方法使用。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body>
    <script>
      // eval() 把字符串作为脚本代码来执行，声明了函数 sayHello()
      eval("function sayHello() { alert('Hello'); }");
      // 调用 sayHello()
      sayHello();

      // 将一个字符串转换为整数并进行四舍五入后输出
      var str = "123.3";
      var num = parseFloat(str);
      var result = Math.round(num);
      document.write(result);
    </script>
  </body>
</html>
```

运行结果，如下图所示。

eval 函数的使用

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201271546957.jpeg)

全局函数的使用

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201271546971.jpeg)

# JavaScript 的事件和作用域

## JavaScript 的事件

`JavaScript` 可以让我们有能力创建动态页面，`html` 页面中的每一个元素都可以产生某些触发 `JavaScript` 函数的事件。而这些事件可以理解成可以被 `JavaScript` 侦测到的一种行为，并且 `JavaScript` 程序能应对这些事件。

### 常见的 HTML 事件

`HTML` 事件是浏览器或者用户做的某些事情，下表是我们经常见到的 `HTML` 事件。

| 事件          | 描述                             |
| ------------- | -------------------------------- |
| `onchange`    | `HTML` 元素发生改变。            |
| `onclick`     | 用户点击 `HTML` 元素。           |
| `onmouseover` | 用户把鼠标移动到 `HTML` 元素上。 |
| `onmouseout`  | 用户从 `HTML` 元素移开鼠标。     |
| `onkeydown`   | 用户按下键盘按键。               |
| `onload`      | 浏览器完成页面的加载。           |
|               |                                  |

常见的 `HTML` 事件例子如下：

- `HTML` 网页完成了加载；
- `HTML` 输入字段被用户修改；
- `HTML` 按钮被用户点击。

一旦事件发生，用户的目的都是为了做某件事。当 `HTML` 页面中的 `JavaScript` 侦测到事件的发生时就会执行相应的代码作出响应。

通过 `JavaScript` 代码，`HTML` 允许你向 `HTML` 元素添加事件处理程序。

使用单引号：

```html
<element event='JavaScript 代码'></element>
```

使用双引号：

```html
<element event="JavaScript 代码"></element>
```

我们来看一个 `onclick` 属性（以及代码）被添加到 `<button>` 元素的实例：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>javascript 事件</title>
  </head>

  <body>
    <button onclick="getElementById('demo').innerHTML=Date()">
      现在的时间是：
    </button>
    <p id="demo">请注意，这里将被修改</p>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201271602167.gif)

观察上面实例的代码发现，`JavaScript` 代码修改了 `id="demo"` 元素的内容。现在我们用 `this.innerHTML` 代码修改元素自身的内容。

还有一种是通过事件属性来调用。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Javascript 事件</title>
  </head>

  <body>
    <p>点击按钮执行 <b>displayDate()</b> 函数.</p>
    <button onclick="displayDate()">点击这里 p 标签的内容将被修改</button>
    <script>
      function displayDate() {
        document.getElementById("demo").innerHTML = Date();
      }
    </script>
    <p id="demo">现在的时间将显示在这里</p>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201271603399.gif)

## JavaScript 的作用域

作用域是变量与函数的可访问范围，在 `JavaScript` 中，变量的作用域有全局作用域和局部作用域两种。

### JavaScript 局部作用域

在函数内声明的变量为局部变量，作用域只在函数内部有效，也只能被函数内部访问。

> （注：正因为局部变量只作用于函数内部，所以不同函数在函数内部是可以使用相同名称的变量；函数开始执行时创建局部变量，函数执行完成后局部变量会自动销毁。）

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>JavaScript 局部作用域</h1>

    <p>myFtn() 之外的 test 未定义。</p>

    <p id="demo1"></p>

    <p id="demo2"></p>

    <script>
      myFtn();

      function myFtn() {
        var test = "test";
        document.getElementById("demo1").innerHTML =
          "test" + " = " + test;
      }

      document.getElementById("demo2").innerHTML = typeof lanqiaoxueyuan;
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![image-20220127171638908](https://gitee.com/Dye/statics/raw/master/img/202201271716000.png)

### 全局 JavaScript 变量

在函数外部声明的变量，即为全局变量。全局变量的作用域针对整个全局：简单来说，就是网页的所有脚本和函数都能够访问它。



```html
<!DOCTYPE html>
<html>
  <body>
    <h1>JavaScript 全局作用域</h1>

    <p>网页的所有脚本和函数都能够访问全局变量。</p>

    <p id="demo"></p>

    <script>
      var test = "test";
      myFtn();

      function myFtn() {
        document.getElementById("demo").innerHTML =
          "我能显示 " + test;
      }
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![image-20220127171755255](https://gitee.com/Dye/statics/raw/master/img/202201271717351.png)

### 自动全局

如果变量在函数内没有声明（即没有使用 `var` 关键字），该变量为全局变量。

实例：

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>JavaScript 自动全局</h1>

    <p>如果您向未声明的变量赋值，它会自动成为全局变量：</p>

    <p id="demo"></p>

    <script>
      myFtn();

      // 此处的代码可以把 test作为全局变量使用。
      document.getElementById("demo").innerHTML =
        "我可以显示 " + test;

      function myFtn() {
        test = "23333333";
      }
    </script>
  </body>
</html>
```

结果：

![image-20220127172032148](https://gitee.com/Dye/statics/raw/master/img/202201271720239.png)

### JavaScript 变量生命周期

- `JavaScript` 变量的生命周期在声明时进行初始化。
- 局部变量在函数执行完成后自动销毁。
- 全局变量在页面关闭后进行销毁。

#### 函数参数

函数参数只在函数内起作用，是局部变量。

#### HTML 中的全局变量

在 `HTML` 中，全局变量是 `window` 对象：所有数据变量都属于 `window` 对象。

实例：

```html
<html>
  <head>
    <meta charset="utf-8" />
    <title>HTML 中的全局变量</title>
  </head>

  <body>
    
    <p>在 HTML 中, 所有全局变量都会成为 window 变量。</p>
    <p id="demo"></p>
    <script>
      myFtn();
      document.getElementById("demo").innerHTML =
        "我可以显示 " + window.test;
      function myFtn() {
        test = "2333";
      }
    </script>
    
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![image-20220130192818008](https://gitee.com/Dye/statics/raw/master/img/202201301928152.png)

> 注意：若没有特殊需求，请勿创建全局变量。因为全局变量（或函数）能够覆盖 `window` 变量（或函数）。任何函数，包括 `window` 对象，能够覆盖您的全局变量和函数。

# JavaScript 的字符串和运算符

## JavaScript 字符串

`JavaScript` 中的字符串是用单引号或双引号括起来的 `unicode` 字符序列，（注：若是特殊的字符可以通过转义符进行标识。）用于存储和操作文本。

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>JavaScript 字符串</h1>

    <p>字符串使用单引号或双引号书写。</p>

    <p id="demo"></p>

    <script>
      var string1 = "test"; // 使用双引号
      var string2 = '233'; // 使用单引号

      document.getElementById("demo").innerHTML = string1 + " " + string2;
    </script>
  </body>
</html>
```

当然，我们也可以在字符串中使用引号，只要不匹配围绕字符串的引号即可。

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>JavaScript 字符串</h2>

    <p>您可以在字符串中使用引号，只要不匹配围绕字符串的引号即可：</p>

    <p id="demo"></p>

    <script>
      var string1 = " 'How are you?' ";
      var string2 = "I'm fine ,thank you,and you?";
      var string3 = '"good bye"';

      document.getElementById("demo").innerHTML =
        string1 + "<br>" + string2 + "<br>" + string3;
    </script>
  </body>
</html>
```

### 字符串长度

内建属性 `length` 可返回字符串的长度。

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>JavaScript 字符串属性</h1>

    <p>length 属性返回字符串的长度：</p>

    <p id="demo"></p>

    <script>
      var string = "dhxilwhfdlhfol";
      document.getElementById("demo").innerHTML = string.length;
    </script>
  </body>
</html>
```

### 特殊字符

下表列举出了在字符串中可以使用转义字符转义的特殊字符：

| 代码 | 输出           |
| ---- | -------------- |
| `\'` | 单引号         |
| `\"` | 双引号         |
| `\\` | 反斜杠         |
| `\n` | 换行           |
| `\r` | 回车           |
| `\t` | `tab` (制表符) |
| `\b` | 退格符         |
| `\f` | 换页符         |
|      |                |

我们来看下面这个例子，由于字符串必须由引号包围，因此 `JavaScript` 会误解这段字符串，该字符串将被切为 "中国是瓷器的故乡，因此 `china` 与"。：

```javascript
var y = "中国是瓷器的故乡，因此 china 与"China（中国）"同名。"
```

避免此问题的解决方法是使用 `\` 转义字符。

```javascript
var x = '中国是瓷器的故乡，因此 china 与"China（中国）"同名。';
```

### 字符串可以是对象

通常，`JavaScript` 字符串是原始值，可以使用字符创建。

```javascript
var test = "www";
```

但我们也可以使用 `new` 关键字将字符串定义为一个对象。

```javascript
var test = new String("www");
```

但是创建出来的类型会有所差别

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JavaScript 字符串</title>
  </head>

  <body>
    <p id="demo"></p>
    <script>
      var a = "www"; // a 是一个字符串
      var b = new String("www"); // b 是一个对象
      document.getElementById("demo").innerHTML =
        "a是" + typeof a + " b是" + typeof b;
    </script>
  </body>
</html>
```

> 注意：虽然 `String` 对象可以创建。但是它会拖慢执行速度，并可能产生其他副作用。

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>绝不要把字符串创建为对象</h1>

    <p>字符串与对象、对象与对象无法比较。</p>

    <p id="demo1"></p>
    <p id="demo2"></p>
    <p id="demo3"></p>
    <p id="demo4"></p>

    <script>
      var a = "test"; // a 是字符串
      var b = new String("test"); // b 是对象
      var c = new String("test"); // c 是对象
      // (a == b) 为 true，因为 a 和 b 的值相等
      document.getElementById("demo1").innerHTML = a == b;
      // (a === b) 为 false，因为 a 和 b 的类型不同（字符串与对象）
      document.getElementById("demo2").innerHTML = a === b;
      // (b == c) 为 false，因为 b 和 c 是不同的对象
      document.getElementById("demo3").innerHTML = b == c;
      // (b === c) 为 false，因为 b 和 c 是不同的对象
      document.getElementById("demo4").innerHTML = b === c;
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201301950093.png)

注：`===` 为绝对相等，即数据类型与值都必须相等。

> 比较对象是比较地址

## JavaScript 运算符

运算符 `=` 用于给 `JavaScript` 变量赋值；算术运算符 `+` 用于把值加起来。

### JavaScript 算术运算符

我们定义一个 `b=5`，下表将演示这些算术运算符：

| 运算符 | 描述         | 例子    | a 运算结果 | b 运算结果 |
| ------ | ------------ | ------- | ---------- | ---------- |
| `+`    | 加法         | `a=b+2` | 7          | 5          |
| `-`    | 减法         | `a=b-2` | 3          | 5          |
| `*`    | 乘法         | `a=b*2` | 10         | 5          |
| `/`    | 除法         | `a=b/2` | 2.5        | 5          |
| `%`    | 取模（余数） | `a=b%2` | 1          | 5          |
| `++`   | 自增         | `a=++b` | 6          | 6          |
| `++`   | 自增         | `a=b++` | 5          | 6          |
| `--`   | 自减         | `a=--b` | 4          | 4          |
| `--`   | 自减         | `a=b--` | 5          | 4          |

### JavaScript 赋值运算符

赋值运算符用于给 `JavaScript` 变量赋值。

给定 `a=10` 和 `b=5`，下面的表格解释了赋值运算符：

| 运算符 | 例子   | 等同于  | 运算结果 |
| ------ | ------ | ------- | -------- |
| `=`    | `a=b`  |         | `a=5`    |
| `+=`   | `a+=b` | `a=a+b` | `a=15`   |
| `-=`   | `a-=b` | `a=a-b` | `a=5`    |
| `*=`   | `a*=b` | `a=a*b` | `a=50`   |
| `/=`   | `a/=b` | `a=a/b` | `a=2`    |
| `%=`   | `a%=b` | `a=a%b` | `a=0`    |
|        |        |         |          |

### 字符串的 `+` 运算符

`+` 运算符可以把文本值或字符串变量加起来（连接起来）。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>javascript 运算符</title>
  </head>

  <body>
    <p>点击按钮创建及增加字符串变量。</p>
    <button onclick="myFtn()">点击这里</button>
    <p id="demo"></p>
    <script>
      function myFtn() {
        txt1 = "2";
        txt2 = "3";
        txt3 = txt1 + txt2;
        document.getElementById("demo").innerHTML = txt3;
      }
    </script>
  </body>
</html>
```

可以在两个字符串之间增加空格，把空格插入一个字符串之中。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>javascript 运算符</title>
  </head>

  <body>
    <p>空格插入一个字符串之中。</p>
    <button onclick="myFtn()">点击这里</button>
    <p id="demo"></p>
    <script>
      function myFtn() {
        txt1 = "2 ";
        txt2 = "3";
        txt3 = txt1 + txt2;
        document.getElementById("demo").innerHTML = txt3;
      }
    </script>
  </body>
</html>
```

另一种方法是把空格插入表达式中。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>javascript 运算符</title>
  </head>

  <body>
    <p>空格插入一个字符串之中。</p>
    <button onclick="myFtn()">点击这里</button>
    <p id="demo"></p>
    <script>
      function myFtn() {
        txt1 = "2";
        txt2 = "3";
        txt3 = txt1 +" "+ txt2;
        document.getElementById("demo").innerHTML = txt3;
      }
    </script>
  </body>
</html>
```

### 对字符串和数字进行加法运算

两个数字相加，返回数字相加的和，如果数字与字符串相加，返回字符串。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>javascript 运算符</title>
  </head>

  <body>
    <p>字符串和数字进行加法运算。</p>
    <button onclick="myFtn()">点击这里</button>
    <p id="demo"></p>
    <script>
      function myFtn() {
        var a = 3 + 3;
        var b = "3" + 3;
        var c = "Hello" + 3;
        var Demo = document.getElementById("demo");
        Demo.innerHTML = a + "<br>" + b + "<br>" + c;
      }
    </script>
  </body>
</html>
```

![image-20220130195626796](https://gitee.com/Dye/statics/raw/master/img/202201301956914.png)

> 结论：如果把数字与字符串相加，结果将是字符串！

# JavaScript 的数据类型转换

## JavaScript 类型转换

### JavaScript 数据类型

`JavaScript` 中有六种可包含值的数据类型：

- 字符串（string）；
- 数字（number）；
- 布尔（boolean）；
- 对象（object）；
- 函数（function）；
- 唯一的 （symbol）。

三种对象类型：

- 对象（Object）；
- 日期（Date）；
- 数组（Array）。

两种不能包含值的数据类型：

- null；
- undefined 。

### typeof 运算符

`typeof` 运算符是用来确定 `JavaScript` 变量的数据类型。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>typeof 运算符</title>
  </head>

  <body>
    <p>typeof 操作符返回变量、对象、函数、表达式的类型。</p>
    <p id="demo"></p>
    <script>
      document.getElementById("demo").innerHTML =
        typeof "JACK" +
        "<br>" +
        typeof 3.14 +
        "<br>" +
        typeof NaN +
        "<br>" +
        typeof false +
        "<br>" +
        typeof [1, 2, 3, 4, 5] +
        "<br>" +
        typeof { name: "JACK", age: 36 } +
        "<br>" +
        typeof new Date() +
        "<br>" +
        typeof function () {} +
        "<br>" +
        typeof myCar +
        "<br>" +
        typeof null;
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201302217002.png)

通过这个实例，我们应该了解到以下几点：

- NaN 的数据类型是 number；
- 数组（Array）的数据类型是 object；
- 日期（Date）的数据类型为 object；
- null 的数据类型是 object；
- 未定义变量的数据类型为 undefined。
- 函数的数据类型为function

**同时，若对象是 `JavaScript Array` 或 `JavaScript Date`，不能通过 `typeof` 来判断他们的类型，因为都是返回 `object`。**

### constructor 属性

`constructor` 属性用于返回所有 `JavaScript` 变量的构造函数。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JavaScript constructor 属性</title>
  </head>

  <body>
    <p>constructor 属性返回变量或对象的构造函数。</p>
    <p id="demo"></p>
    <script>
      document.getElementById("demo").innerHTML =
        "JACK".constructor +
        "<br>" +
        (3.14).constructor +
        "<br>" +
        false.constructor +
        "<br>" +
        [1, 2, 3, 4, 5].constructor +
        "<br>" +
        { name: "JACK", age: 36 }.constructor +
        "<br>" +
        new Date().constructor +
        "<br>" +
        function () {}.constructor;
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201302221095.png)

> 我们可以通过 `constructor` 属性来确定某个对象是否为数组（包含单词 `"Array"`）。

#### 通过constructor判断是否数组

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JavaScript 数组</title>
  </head>

  <body>
    <p>判断是否为数组。</p>
    <p id="demo"></p>
    <script>
      var haha = ["Women", "Meitian", "Douyao", "Kaixin"];
      document.getElementById("demo").innerHTML = isArray(haha);
      function isArray(myArray) {
        return myArray.constructor.toString().indexOf("Array") > -1;
      }
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201302228385.png)

> 同时，我们可以通过检查 `constructor` 属性来确定某个对象是否为日期（包含单词 `"Date"`）。

#### 通过constructor判断是否日期

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JavaScript 日期对象</title>
  </head>

  <body>
    <p>判断是否为日期。</p>
    <p id="demo"></p>
    <script>
      var myDate = new Date();
      document.getElementById("demo").innerHTML = isDate(myDate);
      function isDate(myDate) {
        return myDate.constructor.toString().indexOf("Date") > -1;
      }
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201302228281.png)

### JavaScript 类型转换

`JavaScript` 变量可以转换为新变量或其他数据类型：

- 使用 `JavaScript` 函数；
- `JavaScript` 自身自动转换。

#### 将数字转换为字符串

全局方法 `String()` 可以将数字转换为字符串。该方法可用于任何类型的数字，字母，变量和表达式。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>数字转换字符串</title>
  </head>

  <body>
    <p>String() 方法可以将数字转换为字符串。</p>
    <p id="demo"></p>
    <script>
      var x = 100;
      document.getElementById("demo").innerHTML =
        // 将变量 x 转换为字符串并返回
        String(x) +
        "<br>" +
        // 将数字 100 转换为字符串并返回
        String(100) +
        "<br>" +
        // 将数字表达式转换为字符串并返回
        String(50 + 50);
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201302239505.png)

`Number` 方法 `toString()` 有异曲同工之妙。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>数字转换字符串</title>
  </head>

  <body>
    <p>toString() 方法将数字转换为字符串。</p>
    <p id="demo"></p>
    <script>
      var x = 100;
      document.getElementById("demo").innerHTML =
        x.toString() +
        "<br>" +
        (100).toString() +
        "<br>" +
        (50 + 50).toString();
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://doc.shiyanlou.com/courses/uid1454664-20201225-1608861110218)

#### 将布尔值转换为字符串

全局方法 `String()` 能够将布尔转换为字符串：

```javascript
String(false); // 返回 "false"
String(true); // 返回 "true"
```

布尔方法 `toString()` 同理：

```javascript
false.toString(); // 返回 "false"
true.toString(); // 返回 "true"
```

#### 将日期转换为字符串

`Date()` 返回字符串：

```javascript
Date(); // 返回 Sun Jan 30 2022 22:41:02 GMT+0800 (中国标准时间)
```

全局方法 `String()` 可以将日期对象转换为字符串：

```javascript
String(new Date()); // 返回 Sun Jan 30 2022 22:41:02 GMT+0800 (中国标准时间)
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>时间、日期转换字符串</title>
  </head>

  <body>
    <p id="demo">点击按钮把日期和时间转换成字符串。</p>
    <button onclick="myFtn()">点我</button>
    <script>
      function myFtn() {
        var d = new Date();
        var x = document.getElementById("demo");
        x.innerHTML = d.toString();
      }
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201302238571.gif)

#### 字符串转换为数字

- 全局方法 `Number()` 可以将字符串转换为数字；
- 字符串包含数字（如 "3.14"）转换为数字（如 3.14）；
- 空字符串转换为 0；
- 其他的字符串会转换为 `NaN`（不是个数字）。

```javascript
Number("3.14"); // 返回 3.14
Number(" "); // 返回 0
Number(""); // 返回 0
Number("99 88"); // 返回 NaN
```

##### 一元运算符 `+`

`Operator +` 可用于将变量转换为数字。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>一元运算符 `+`</title>
  </head>

  <body>
    <p>typeof 操作符返回变量或表达式的类型。</p>
    <button onclick="myFtn()">点击查看</button>
    <p id="demo"></p>
    <script>
      function myFtn() {
        var a = "6";
        var b = +a;
        document.getElementById("demo").innerHTML =
          typeof a + "<br>" + typeof b;
      }
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201312258653.gif)

> 若变量不能转换，但它仍然会是一个数字，但值为 `NaN`（不是一个数字）。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>一元运算符 `+`</title>
  </head>

  <body>
    <p>typeof 操作符返回变量或表达式的类型。</p>
    <button onclick="myFtn()">点击查看</button>
    <p id="demo"></p>
    <script>
      function myFtn() {
        var a = "JACK";
        var b = +a;
        document.getElementById("demo").innerHTML = typeof b + "<br>" + b;
      }
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201312301383.gif)

#### 将布尔值转换为数字

全局方法 `Number()` 可将布尔值转换为数字：

```javascript
Number(false); // 返回 0
Number(true); // 返回 1
```

#### 将日期转换为数字

全局方法 `Number()` 可将日期转换为数字：

```javascript
d = new Date();
Number(d); // 返回 1404568027739
```

日期方法 `getTime()` 也有相同的效果：

```javascript
d = new Date();
d.getTime(); // 返回 1404568027739
```

### 自动转换类型

当 `JavaScript` 尝试操作一个 "错误" 的数据类型时，会自动转换为 "正确" 的数据类型。

以下输出结果不是你所期望的：

```javascript
5 + null; // 返回 5         null 转换为 0
"5" + null; // 返回"5null"   null 转换为 "null"
"5" + 1; // 返回 "51"      1 转换为 "1"
"5" - 1; // 返回 4         "5" 转换为 5
```



```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>

  <body>
    <p id="demo"></p>

    <script>
      var x = [];
      document.getElementById("demo").innerHTML =
        5 +
        null +
        "<br>" +
        ("5" + null) +
        "<br>" +
        ("5" + 2) +
        "<br>" +
        ("5" - 2) +
        "<br>" +
        "5" * "2" +
        "<br>" +
        "5" / "2" +
        "<br>";
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201312302121.png)

#### 自动转换为字符串

当你尝试输出一个对象或一个变量时 `JavaScript` 会自动调用变量的 `toString()` 方法：

```javascript
document.getElementById("demo").innerHTML = myVar;

myVar = { name: "Fjohn" }; // toString 转换为 "[object Object]"
myVar = [1, 2, 3, 4]; // toString 转换为 "1,2,3,4"
myVar = new Date(); // toString 转换为 "Fri Dec 25 2020 10:02:33 GMT+0800 "
```

数字和布尔值也经常相互转换：

```javascript
myVar = 123; // toString 转换为 "123"
myVar = true; // toString 转换为 "true"
myVar = false; // toString 转换为 "false"
```

下表中列出了将不同 `JavaScript` 值转换为数字、字符串和布尔的结果：

| 原始值             | 转换为数字  | 转换为字符串        | 转换为逻辑 |
| ------------------ | ----------- | ------------------- | ---------- |
| `false`            | `0`         | `"false"`           | `false`    |
| `true`             | `1`         | `"true"`            | `true`     |
| `0`                | `0`         | `"0"`               | `false`    |
| `1`                | `1`         | `"1"`               | `true`     |
| `"0"`              | `0`         | `"0"`               | `true`     |
| `"000"`            | `0`         | `"000"`             | `true`     |
| `"1"`              | `1`         | `"1"`               | `true`     |
| `NaN`              | `NaN`       | `"NaN"`             | `false`    |
| `Infinity`         | `Infinity`  | `"Infinity"`        | `true`     |
| `-Infinity`        | `-Infinity` | `"-Infinity"`       | `true`     |
| `""`               | `0`         | `""`                | `false`    |
| `"20"`             | `20`        | `"20"`              | `true`     |
| `"twenty"`         | `NaN`       | `"twenty"`          | `true`     |
| `[ ]`              | `0`         | `""`                | `true`     |
| `[20]`             | `20`        | `"20"`              | `true`     |
| `[10,20]`          | `NaN`       | `"10,20"`           | `true`     |
| `["twenty"]`       | `NaN`       | `"twenty"`          | `true`     |
| `["ten","twenty"]` | `NaN`       | `"ten,twenty"`      | `true`     |
| `function(){}`     | `NaN`       | `"function(){}"`    | `true`     |
| `{ }`              | `NaN`       | `"[object Object]"` | `true`     |
| `null`             | `0`         | `"null"`            | `false`    |
| `undefined`        | `NaN`       | `"undefined"`       | `false`    |

数组里只有一个元素，直接提出来当字符串！

# JavaScript 的正则表达式

## 什么是正则表达式

- 正则表达式是由一个字符序列形成的搜索模式；
- 当您搜索文本中的数据时，您可使用搜索模式来描述您搜索的内容；
- 正则表达式可以是单字符，也可以是更复杂的模式；
- 正则表达式可用于执行所有类型的文本搜索和文本替换操作。

简单来说，正则表达式（英语：`Regular Expression`，在代码中常简写为 `regex` 、`regexp` 或 `RE`）可用于文本搜索和文本替换，它是使用单个字符串来描述、匹配一系列符合某个句法规则的字符串搜索模式。

语法：

```text
/pattern/modifiers;
```

实例：

```javascript
var patt = /lanqiaoxueyuan/i;
```

实例释义：

`/lanqiaoxueyuan/i `是一个正则表达式。`lanqiaoxueyuan` 是模式（`pattern`）（在搜索中使用）；`i` 是修饰符（把搜索修改为大小写不敏感）。

## 使用字符串方法

在 `JavaScript` 中，正则表达式常使用以下两个字符串方法：

- `search()` 方法使用表达式来搜索匹配，然后返回匹配的位置；
- `replace()` 方法返回模式被替换处修改后的字符串。

### 使用 search() 字符串方法来处理字符串

`search()` 方法也接受字符串作为搜索参数。字符串参数将被转换为正则表达式。

```js
var a = str.search(/xxx/i); // 返回索引所在第一个位置
var a = str.search("xxx"); // 返回索引所在第一个位置
```

### replace() 方法使用正则表达式

```js
var txt = str.replace(/xxx/i, "test");
```

`replace()` 同样接受搜索参数是字符串。

```js
var txt = str.replace("xxx", "test");
```

## 正则表达式修饰符

修饰符可用于大小写不敏感的更全局的搜索：

| 修饰符 | 描述                                                     |
| ------ | -------------------------------------------------------- |
| `i`    | 执行对大小写不敏感的匹配。                               |
| `g`    | 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。 |
| `m`    | 执行多行匹配。                                           |

### 正则表达式模式

括号用于查找一定范围的字符串：

| 表达式  | 描述                           |
| ------- | ------------------------------ |
| `[abc]` | 查找方括号之间的任何字符。     |
| `[0-9]` | 查找任何从 `0` 至 `9` 的数字。 |
| `(x|y)` | 查找任何以 `|` 分隔的选项。    |

元字符是拥有特殊含义的字符：

| 元字符   | 描述                                            |
| -------- | ----------------------------------------------- |
| `\d`     | 查找数字。                                      |
| `\s`     | 查找空白字符。                                  |
| `\b`     | 匹配单词边界。                                  |
| `\uxxxx` | 查找以十六进制数 `xxxx` 规定的 `Unicode` 字符。 |

量词：

| 量词 | 描述                                    |
| ---- | --------------------------------------- |
| `n+` | 匹配任何包含至少一个 `*n*` 的字符串。   |
| `n*` | 匹配任何包含零个或多个 `*n*` 的字符串。 |
| `n?` | 匹配任何包含零个或一个 `*n*` 的字符串。 |

### 使用 RegExp 对象

在 `JavaScript` 中，`RegExp` 对象是一个正则表达式对象，并带有预定义属性和方法。

#### 使用 test()

`test()` 同样是一个正则表达式方法。它通过模式来搜索字符串，并根据结果返回 `true` 或 `false`。



```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>RegExp 对象</title>
  </head>

  <body>
    <script>
      var a = new RegExp("f");
      document.write(
        a.test(
          "Attitude determines life, and should not let life determine your attitude!"
        )
      );
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202011938826.png)

也可以不用设置正则表达式的变量。



```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>RegExp 对象</title>
  </head>

  <body>
    <script>
      document.write(
        /f/.test(
          "Attitude determines life, and should not let life determine your attitude!"
        )
      );
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202011938440.png)

#### 使用 exec()

`exec()` 方法是一个正则表达式方法。通过指定的模式（`pattern`）搜索字符串，并返回已找到的文本。如果未找到匹配，则返回 `null`。



```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>RegExp 对象</title>
  </head>

  <body>
    <h2>JavaScript 正则表达式</h2>

    <p id="demo"></p>

    <script>
      var patt1 = new RegExp("f");
      document.write(
        patt1.exec(
          "Attitude determines life, and should not let life determine your attitude!"
        )
      );
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202011939877.png)

# JavaScript let 和 const

## let 和 const

`ES2015(ES6)` 新增加了两个重要的 JavaScript 关键字 `let` 和 `const`：

- `let` 声明的变量只在 `let` 命令所在的代码块内有效。
- `const` 声明一个只读的常量，并且声明以后，常量的值就不能改变。

`let` 和 `const` 在 JavaScript 中提供了块作用域（`Block Scope`）变量（和常量）。

## 块级作用域（Block Scope）

通过 `var` 关键词声明的变量没有块作用域，它在 {} 外依然能被访问到。

```javascript
{
  var a = 1;
}
// 这里可以使用 1 变量
```

在 `ES2015` 之前，JavaScript 还没有块作用域。从 `ES6` 开始可以使用 `let` 关键字来实现块级作用域。

在块 {} 内声明的变量无法从块外访问：

```javascript
{
  let a = 1;
}
// 这里不能使用 1 变量
```

## 重新定义变量

若我们用 `var` 声明一个变量以后，再次使用 `var` 关键字重新声明这个变量可能会带来这样一个问题。那就是在块中重新声明变量也会重新声明块外的变量。



```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>javascript let 和 const</title>
  </head>

  <body>
    <h1>使用 var 声明变量</h1>

    <p id="demo"></p>

    <script>
      var a = 8;
      // 这里输出 a 为 8
      {
        var a = 6;
        // 这里输出 a 为 6
      }
      // 这里输出 a 为 6
      document.getElementById("demo").innerHTML = a;
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202011951690.png)

`let` 关键字刚好可以避免这个情况的发生，因为它只在 `let` 命令所在的代码块 {} 内有效。



```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>javascript let 和 const</title>
  </head>

  <body>
    <h1>使用 let 声明变量</h1>

    <p id="demo"></p>

    <script>
      var a = 8;
      // 这里输出 a 为 8
      {
        let a = 6;
        // 这里输出 a 为 6
      }
      // 这里输出 a 为 8
      document.getElementById("demo").innerHTML = a;
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://doc.shiyanlou.com/courses/uid1454664-20201228-1609143348436)

### 浏览器支持

Internet Explorer 11 及更早版本的浏览器不支持 `let` 关键字，下表是各个浏览器支持 `let` 关键字的最低版本号：

| ![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202011951158.png) | ![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202011951187.png) | ![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202011951258.png) | ![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202011951822.png) | ![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202011951363.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Chrome 49                                                    | IE / Edge 12                                                 | Firefox 44                                                   | Safari 11                                                    | Opera 36                                                     |
| 2016 年 3 月                                                 | 2015 年 7 月                                                 | 2015 年 1 月                                                 | 2017 年 9 月                                                 | 2016 年 3 月                                                 |

## 循环作用域

在循环中使用 `var`。

实例：点击 File -> New File 新建一个名为 `index3.html` 的文件，并输入以下代码。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>javascript let 和 const</title>
  </head>

  <body>
    <h2>JavaScript let</h2>

    <p id="demo"></p>

    <script>
      var a = 100;
      for (var a = 0; a < 88; a++) {
        // 一些代码...
      }
      document.getElementById("demo").innerHTML = a;
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202011953255.png)

使用 `let` 关键字。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>javascript let 和 const</title>
  </head>

  <body>
    <h2>JavaScript let</h2>

    <p id="demo"></p>

    <script>
      var a = 100;
      for (let a = 0; a < 88; a++) {
        // 一些代码...
      }
      document.getElementById("demo").innerHTML = a;
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202011955877.png)

通过上面两个实例我们可以看出，第一个使用 `var` 关键字，它声明的变量是全局的，包括循环体内与循环体外，第二个实例使用 `let` 关键字，它声明的变量作用域只在循环体内，循环体外的变量不受影响。

## 局部变量

在**函数里面**使用 `var` 和 `let` 关键字声明的变量的作用域都是局部的。

```javascript
// 使用 var
function myFtn() {
  var Name = "Lanqiaoxueyuan"; // 局部作用域
}

// 使用 let
function myFtn() {
  let Name = "Lanqiaoxueyuan"; // 局部作用域
}
```

## 全局变量

在函数体外或代码块外使用 `var` 和 `let` 关键字声明的变量作用域都是全局的。

```javascript
// 使用 var
var a = 1; // 全局作用域

// 使用 let
let a = 1; // 全局作用域
```

## HTML 代码中使用全局变量

在 JavaScript 中，全局作用域是针对 JavaScript 环境。但在 `HTML` 中， 全局作用域是针对 `window` 对象。使用 `var` 关键字声明的全局作用域变量属于 window 对象。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>javascript let 和 const</title>
  </head>

  <body>
    <h2>JavaScript 全局变量</h2>

    <p>使用 var 关键字声明的全局作用域变量属于 window 对象。</p>

    <p id="demo"></p>

    <script>
      var name = "test";

      // 可以使用 window.name 访问变量
      document.getElementById("demo").innerHTML = "我可以显示" + window.name;
    </script>
  </body>
</html>
```

![image-20220201195741492](https://gitee.com/Dye/statics/raw/master/img/202202011957599.png)

<u>`let` 关键字声明的全局作用域变量不属于 `window` 对象。</u>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JavaScript 全局变量</title>
  </head>

  <body>
    <h2>JavaScript 全局变量</h2>

    <p>使用 let 关键字声明的全局作用域变量不属于 window 对象。</p>

    <p id="demo"></p>

    <script>
      let mz = "test";

      // 不能使用 window.name 访问变量
      document.getElementById("demo").innerHTML = "我不能显示 " + window.mz;
    </script>
  </body>
</html>
```

![image-20220201195840773](https://gitee.com/Dye/statics/raw/master/img/202202011958884.png)

## 重置变量

`var` 关键字声明的变量在任何地方都可以修改。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>重置变量</title>
  </head>

  <body>
    <h2>JavaScript let</h2>

    <p>使用 var 关键字声明的变量在任何地方都可以修改:</p>

    <p id="demo"></p>

    <script>
      var a = 9;

      // a 为 9

      var a = 8;

      // 现在 a 为 8

      document.getElementById("demo").innerHTML = a;
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202011959666.png)

在**相同的作用域，或在相同的块中**，<u>通过 `let` 重新声明一个 `var` 变量是不允许的。</u>

```javascript
var a = 9; // 合法
let a = 8; // 不合法

{
  var a = 6; // 合法
  let a = 5; // 不合法
}
```

在**相同的作用域，或在相同的块**中，<u>通过 `let` 重新声明一个 `let` 变量是不允许的。</u>

```javascript
let a = 9; // 合法
let a = 8; // 不合法

{
  let a = 6; // 合法
  let a = 5; // 不合法
}
```

在**相同的作用域**，**或在相同的块中**，<u>通过 `var` 重新声明一个 `let` 变量是不允许的。</u>

```javascript
let a = 9; // 合法
var a = 8; // 不合法

{
  let a = 6; // 合法
  var a = 5; // 不合法
}
```

`let` 关键字在**不同作用域，或不同块级作用域中是可以重新声明赋值的。**

```javascript
let a = 9; // 合法

{
  let a = 8; // 合法
}

{
  let a = 6; // 合法
}
```

> 也就是说在相同作用域或者块中，let和var两两以及let本身(var可以)不能相互出现

使用 `var` 关键字声明的变量在任何地方都可以修改。

```javascript
var a = 1; // 合法
var a = 2; // 合法
a = 3; //合法
```

## 变量提升

通过 `var` 声明的变量会提升到顶端，您可以在声明变量之前就使用它。

实例：点击 File -> New File 新建一个名为 `index8.html` 的文件，并输入以下代码。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>变量提升</title>
  </head>

  <body>
    <h1>JavaScript 提升</h1>

    <p>使用 <b>var</b>，您可以在声明之前使用变量：</p>

    <p id="demo"></p>

    <script>
      name = "test";
      document.getElementById("demo").innerHTML = name;
      var name;
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![image-20220201200523967](https://gitee.com/Dye/statics/raw/master/img/202202012005079.png)

`let` 关键字定义的变量则不可以在使用后声明，也就是变量需要先声明再使用。

```javascript
// 在这里不可以使用 name 变量

let name;
```

## const 关键字

`const` 定义的变量与 `let` 变量类似，但不能重新赋值。



```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>const 关键字</title>
  </head>

  <body>
    <h2>JavaScript const</h2>

    <p>
      const
      用于声明一个或多个常量，声明时必须进行初始化，且初始化后值不可再修改。
    </p>

    <p id="demo"></p>

    <script>
      try {
        const PI = 3.141592653589793;
        PI = 3.14;
      } catch (err) {
        document.getElementById("demo").innerHTML = err;
      }
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202012037500.png)

`const` 定义常量与使用 `let` 定义的变量相似：

- 二者都是块级作用域；
- 都不能和它所在作用域内的其他变量或函数拥有相同的名称。

两者还有以下两点区别：

- `const` 声明的常量必须初始化，而 `let` 声明的变量不用；
- `const` 定义常量的值不能通过再赋值修改，也不能再次声明。而 `let` 定义的变量值可以修改。

```javascript
var a = 9;
// 这里输出 a 为 9
{
  const a = 8;
  // 这里输出 a 为 8
}
// 这里输出 a 为 9
```

const 声明的常量必须初始化：

```javascript
// 错误写法
const PI;
PI = 3.14159265359;

// 正确写法
const PI = 3.14159265359;
```

### 不是真正的常数

`const` 的本质：`const` 定义的变量并非常量，并不是不可以改变，它定义了一个常量引用一个值。

使用 `const` 定义的对象或者数组，是可以改变的。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>const 关键字</title>
  </head>

  <body>
    <h2>JavaScript const</h2>

    <p>
      const 定义的变量并非常量，并非不可变，它定义了一个常量引用一个值。使用
      const 定义的对象或者数组，其实是可变的。下面的代码并不会报错：
    </p>

    <p id="demo"></p>

    <script>
      // 创建常量对象
      const people = { name: "小明", age: "18", gender: "male" };

      // 修改属性:
      people.age = "20";

      // 添加属性
      people.height = "180";

      // 显示属性
      document.getElementById("demo").innerHTML = "小明身高是 " + people.height;
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202012045109.png)

但不能对常量对象重新赋值。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>const 关键字</title>
  </head>

  <body>
    <h2>JavaScript const</h2>

    <p>我们不能对常量对象重新赋值:</p>

    <p id="demo"></p>

    <script>
      try {
        const people = { name: "小明", age: "18", gender: "male" };
        people = { name: "小红", age: "20", gender: "male" };
      } catch (err) {
        document.getElementById("demo").innerHTML = err;
      }
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202012045659.png)

修改常量数组。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>const 关键字</title>
  </head>

  <body>
    <h2>JavaScript const</h2>

    <p>修改常量数组:</p>

    <p id="demo"></p>

    <script>
      // 创建常量数组
      const people = ["小明", "小王", "小张"];

      // 修改元素
      people[0] = "小蓝";

      // 添加元素
      people.push("小二");

      // 显示数组
      document.getElementById("demo").innerHTML = people;
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202012045391.png)

同样的，我们不能对常量数组重新赋值。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>const 关键字</title>
  </head>

  <body>
    <h2>JavaScript const</h2>

    <p>不能对常量数组重新赋值：</p>

    <p id="demo"></p>

    <script>
      try {
        const people = ["小王", "小李", "小张"];
        people = ["小易", "小智", "小杰"];
      } catch (err) {
        document.getElementById("demo").innerHTML = err;
      }
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202012045858.png)

### 浏览器支持

下表是各个浏览器支持 `const` 关键字的最低版本号：

| ![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202012047679.png) | ![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202012047223.png) | ![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202012047787.png) | ![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202012047462.png) | ![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202012047923.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Chrome 49                                                    | IE / Edge 11                                                 | Firefox 36                                                   | Safari 10                                                    | Opera 36                                                     |
| 2016 年 3 月                                                 | 2013 年 10 月                                                | 2015 年 2 月                                                 | 2016 年 9 月                                                 | 2016 年 3 月                                                 |

### 重置变量

在相同的作用域或块级作用域中，**不能使用 `const` 关键字来重置 `var` 和 `let` 关键字声明的变量。**

```javascript
var a = 6; // 合法
const a = 6; // 不合法
{
  let a = 6; // 合法
  const a = 6; // 不合法
}
```

在相同的作用域或块级作用域中，**不能使用 `const` 关键字来重置 `const` 关键字声明的变量。**

```javascript
const a = 6; // 合法
const a = 8; // 不合法
a = 8; // 不合法
var a = 8; // 不合法
let a = 8; // 不合法

{
  const a = 6; // 合法
  const a = 8; // 不合法
  a = 8; // 不合法
  var a = 8; // 不合法
  let a = 8; // 不合法
}
```

`const` 关键字在不同作用域，或不同块级作用域中是可以重新声明赋值的。

```javascript
const a = 1; // 合法

{
  const a = 2; // 合法
}

{
  const a = 3; // 合法
}
```

### 变量提升

`const` 关键字定义的变量需要先声明再使用。

```javascript
mz = "xiaoming"; // 在这里不可以使用 mz 变量
const mz = "xiaoming";
```

# JavaScript 异步编程

## 同步与异步

我们知道无论是在浏览器端还是在服务器（`Node`）端，`JavaScript` 的执行都是在单线程下进行的。

我们以浏览器中的 `JavaScript` 执行线程为例，在这个线程中 `JavaScript` 引擎会创建执行上下文栈，之后我们的代码就会作为执行上下文（全局、函数、`eval`） 像一系列任务一样在执行上下文栈中按照后进先出（`LIFO`） 的方式依次执行。

而同步最大的特性就是会阻塞后面任务的执行，比如此时 `JavaScript` 正在执行大量的计算，这个时候就会使线程阻塞从而导致页面渲染加载不连贯（ 在浏览器端的 `Event Loop` 中每次执行栈中的任务执行完毕后都会去检查并执行事件队列里面的任务直到队列中的任务为空，而事件队列中的任务又分为微队列与宏队列，当微队列中的任务执行完后才会去执行宏队列中的任务，而在微队列任务执行完到宏队列任务开始之前浏览器的 `GUI` 线程会执行一次页面渲染（`UI rendering`），这也就解释了为什么在执行栈中进行大量的计算时会阻塞页面的渲染）。

与同步相对的异步则可以理解为在异步操作完成后所要做的任务，它们通常以回调函数或者 `Promise` 的形式被放入事件队列，再由事件循环（`Event Loop`） 机制在每次轮询时检查异步操作是否完成，若完成则按事件队列里面的执行规则来依次执行相应的任务。也正是得益于事件循环机制的存在，才使得异步任务不会像同步任务那样完全阻塞 `JavaScript` 执行线程。

总结起来就是两点：

- 同步：事件阻塞，完成第一件事才能去做第二件事；
- 异步：事件不阻塞，两件事可同时进行。

### 什么时候用异步编程

我们在编程时，若需要处理一些简短、快速的操作时，例如计算 `1 + 1` 的结果，往往在主线程中就可以完成。主线程作为一个线程，不能够同时接受多方面的请求。此时，当一个事件没有结束时，界面将无法处理其他请求。

假设现在有这么一个按钮，我们将它的 `onclick` 事件设置为一个死循环，那么当这个按钮按下，整个网页将失去响应。

为了避免上述情况的发生，我们选择用子线程来完成一些可能消耗时间足够长以至于被用户察觉的事情，比如读取一个大文件或者发出一个网络请求。因为子线程独立于主线程，所以即使出现阻塞也不会影响主线程的运行。但是子线程有一个局限：一旦发射了以后就会与主线程失去同步，我们无法确定它的结束，如果结束之后需要处理一些事情，比如处理来自服务器的信息，我们是无法将它合并到主线程中去的。

既然出现了问题，那肯定就应该有解决措施， `JavaScript` 中的异步操作函数往往通过回调函数来实现异步任务的结果处理。

## 回调函数

回调函数是一个函数，我们在启动一个异步任务的时候就告诉它：等你完成了这个任务之后你该干什么。这样一来主线程几乎不用关心异步任务的状态了，他自己会善始善终。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JavaScript 异步编程</title>
  </head>

  <body>
    <p>回调函数等待 5 秒后执行。</p>
    <p id="demo"></p>
    <script>
      function print() {
        document.getElementById("demo").innerHTML =
          "现在，请继续开始我们的学习";
      }
      setTimeout(print, 5000);
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202012146397.gif)

实例中的 `setTimeout` 是一个消耗时间较长（5 秒）的过程。其中，第一个参数是个回调函数，第二个参数是毫秒数，这个函数执行之后会产生一个子线程，子线程会在等待 5 秒后执行回调函数 `"print"`，在命令行输出 `"Time out"`。当然，我们可以不用单独定义一个函数 `print` ，上面的实例也可以写成下面的形式。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JavaScript 异步编程</title>
  </head>

  <body>
    <p>回调函数等待 5 秒后执行。</p>
    <p id="demo"></p>
    <script>
      setTimeout(function () {
        document.getElementById("demo").innerHTML =
          "现在，请继续开始我们的学习";
      }, 5000);
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202012146926.gif)

`setTimeout` 既然会在子线程中等待 5 秒，主线程并没有在 `setTimeout` 函数执行之后停止，那我们来看以下的实例。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JavaScript 异步编程</title>
  </head>

  <body>
    <p>回调函数等待 5 秒后执行。</p>
    <p id="demo1"></p>
    <p id="demo2"></p>
    <script>
      setTimeout(function () {
        document.getElementById("demo1").innerHTML = "我是五秒后才出现的！";
      }, 5000);
      document.getElementById("demo2").innerHTML = "请等待五秒";
    </script>
  </body>
</html>
```

运行实验代码，我们可以看到以下实验效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202012144410.gif)

## 异步 AJAX

除了 `setTimeout` 函数以外，异步回调广泛应用于 `AJAX` 编程。其中，`XMLHttpRequest` 常常用于请求来自远程服务器上的 `XML` 或 `JSON` 数据。一个标准的 `XMLHttpRequest` 对象往往包含多个回调。

实例：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JavaScript 异步编程</title>
  </head>

  <body>
    <p><b>以下内容是通过异步请求获取的：</b></p>
    <p id="demo"></p>
    <script>
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        // 输出接收到的文字数据
        document.getElementById("demo").innerHTML = xhr.responseText;
      };

      xhr.onerror = function () {
        document.getElementById("demo").innerHTML = "请求出错";
      };

      // 发送异步 GET 请求
      xhr.open("GET", "index.txt", true);
      xhr.send();
    </script>
  </body>
</html>
```

`XMLHttpRequest` 的 `onload` 和 `onerror` 属性都是函数，分别在它请求成功和请求失败时被调用。当引入完整的 `jQuery` 库，你可以更好的使用异步 `AJAX`：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JavaScript 异步编程</title>
    <script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
    <script>
      $(document).ready(function () {
        $("button").click(function () {
          $.get("index1.txt", function (data, status) {
            alert("数据: " + data + "\n状态: " + status);
          });
        });
      });
    </script>
  </head>

  <body>
    <button>发送一个 HTTP GET 请求并获取返回结果</button>
  </body>
</html>
```

