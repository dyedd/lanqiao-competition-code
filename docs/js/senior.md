# 面向对象编程

## 面向对象简介

在面向对象的程序设计语言中，我们知道，万事万物皆对象。现实世界中的每一个事物都是一个对象。我们从不同的对象中可以抽象出它们的静态特征和动态特征，分别将它们称之为属性和方法。

针对不同的对象，我们也可以对对象进行抽象，从而得到类。在面向对象的程序设计中大多都包含了类，但是在 JavaScript 中并不包含类，如果想要实现面向对象，我们大多使用的是原型。

## 原型

在 JavaScript 中，如果想要创建一个对象，有很多种方法，我们可以采用常用的使用构造方法的方式。

创建对象 Person。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body>
    <script>
      function Person() {}
      // 声明一个 person 对象
      var person = new Person();
    </script>
  </body>
</html>
```

在 JavaScript 中，每一个函数都有一个 prototype 属性，**每一个 JavaScript 对象在创建的时候就会关联一个对象，我们称之为原型**。我们可以将对象的属性添加在原型中，每一个对象都会从原型“继承”属性。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body>
    <script>
      function Person() {}
      Person.prototype.name = "zhangsan";
      Person.prototype.age = 33;
      // 声明两个对象，并查看 name 属性值
      var person1 = new Person();
      var person2 = new Person();
      alert(person1.name + "--" + person2.name);
    </script>
  </body>
</html>
```

观察后发现，在原型链中添加了属性后，无论生成多少个对象，在原型链中添加的属性值都相同。

## 继承

在面向对象的编程语言中，我们经常用到继承，在 JavaScript 中也可以使用到继承，JavaScript 的继承通过原型链来实现。

在 js 中，每个构造函数都拥有一个原型对象，**原型对象包含一个指向构造函数的指针 constructor，实例都包含一个指向原型对象的内部指针 *proto*** 。

示例：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body>
    <script>
      // 父类
      function Humans() {
        this.clothing = ["trousers", "dress"];
      }
      // 子类
      function Man() {}
      // 实现继承
      Man.prototype = new Humans();
      var man1 = new Man();
      man1.clothing.push("coat");
      alert(man1.clothing);
      var man2 = new Man();
      alert(man2.clothing);
    </script>
  </body>
</html>
```



除了上面所说的原型链继承，JavaScript 也可以使用借用构造函数的方式：apply 方式和 call 方式。

apply 的语法格式为：

```javascript
apply(thisObj[,argArray])
```

应用某一对象的一个方法，**用另外一个对象替换当前对象**。

示例：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body>
    <script>
      function Parent(username) {
        this.username = username;
        this.showName = function () {
          alert(this.username);
        };
      }

      // 子类 Child 继承父类 Parent
      function Child(username, password) {
        // 使用 apply 方式
        // 这里意思是把this，也就是child给parent调用，child指向parent（有继承的味道了)
        Parent.apply(this, [username]);
        this.password = password;
        this.show = function () {
          alert(this.password);
        };
      }

      var child = new Child("zhangsan", "123");
      // child.show();
      child.showName();
    </script>
  </body>
</html>
```

call 的语法格式为：

```javascript
call([thisObj[,arg1]])
```

应用某一对象的一个方法，用另外一个对象替换当前对象。

示例：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body>
    <script>
      function Parent(username) {
        this.username = username;
        this.showName = function () {
          alert(this.username);
        };
      }
      // 子类 Child 继承父类 Parent
      function Child(username, password) {
        // 使用 call 方式
        Parent.call(this, username);
        this.password = password;
        this.show = function () {
          alert(this.password);
        };
      }

      var child = new Child("zhangsan", 123);
      child.showName();
    </script>
  </body>
</html>
```

通过上述两个案例，我们可以发现：call 方式和 apply 方式，它们的用法基本相同，只是在参数的位置有所区别。

当然还有一个bind ，它除了返回是函数以外，它 的参数和 call 一样。

apply是应用，所以要把数组外衣去除用，总有作用在的吧！

## 闭包详解

JavaScript 允许使用内部函数，内部函数可以访问外部函数中的所有局部变量、参数和声明的其他内部函数。当其中一个内部函数在外部函数以外被调用时，就会形成闭包。

示例：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body>
    <script>
      function fun1() {
        var num = 999;
        numAdd = function () {
          num += 1;
        };
        function fun2() {
          alert(num);
        }
        return fun2;
      }
      var result = fun1();
      result(); // 999
      numAdd();
      result(); // 1000
    </script>
  </body>
</html>
```

在这段代码中，result 实际上就是闭包 fun2 函数。它一共运行了两次，第一次的值是 999，第二次的值是 1000。

不难发现，使用闭包有以下好处：

1. 不增加额外的全局变量。
2. 执行过程中所有变量都是在匿名函数内部。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <p>局部变量计数</p>
        <button type="button" onclick="myFunction()">计数!</button>
        <p id="demo">0</p>
        <script>
            var add = (function () {
                var counter = 0;
                return function () {return counter += 1;}
            })();
            function myFunction(){
                document.getElementById("demo").innerHTML = add();
            }
        </script>
    </body>
</html>
</html>
```

解释：为什么add这里要立即执行，只有立即执行后面带一个(),就能运行闭包了。

而如果是`add()()`则不行，因为每一次add()是新的函数，count不共享

# RegExp 对象

## 正则表达式的作用

正则表达式是一个描述字符模式的对象，它由一些特殊的符号组成，表达一个特定的含义。

正则表达式有些类似于之前接触过的通配符，通过字符模式匹配表达式和值。在 JavaScript 中，RegExp 对象表示正则表达式，它是对字符执行模式匹配的强大工具。

## 正则表达式的创建

下面列举了两种正则表达式的定义方式，其中附加参数可省略。

```javascript
var reg = /正则表达式/附加参数;
var reg = new RegExp("正则表达式", "附加参数");
```

示例：

```javascript
var reg = /blue/i; // 附加参数 i 表示不区分大小写匹配
var reg = /^\w+$/;
var reg = new RegExp("blue ", "i");
var reg = new RegExp(document.getElementById("div"));
// 非构造函数法定义正则表达式，不可使用变量
```

## 正则表达式符号含义

方括号用于查找某个范围内的字符，下表列出了方括号表达式和简单描述。

| 表 达 式             | 描 述                            |
| -------------------- | -------------------------------- |
| `[a-h]`              | 匹配方括号之间的任何字符         |
| `[^a-h]`             | 匹配任何不在方括号之间的字符     |
| `[0-9]`              | 匹配任何从 0 至 9 的数字         |
| `[a-z]`              | 匹配任何从小写 a 到小写 z 的字符 |
| `[A-Z]`              | 匹配任何从大写 A 到大写 Z 的字符 |
| `[A-z]`              | 匹配任何从大写 A 到小写 z 的字符 |
| `[asdf]`             | 匹配给定集合内的任何字符         |
| `[^asdf]`            | 匹配给定集合外的任何字符         |
| `red | blue | green` | 匹配其中的任一表达式             |

元字符（Metacharacter）是拥有特殊含义的字符，下表列出了常用元字符和简单描述。

| 表 达 式 | 描 述                                                        |
| -------- | ------------------------------------------------------------ |
| `\.`     | 匹配单个字符（除了换行和行结束符）                           |
| `\w`     | 匹配字母、数字和下画线字符，等价于 [A-Za-z0-9_]              |
| `\W`     | 匹配非 `\w` 字符，等价于 [^a-za-z0-9_]                       |
| `\d`     | 匹配数字，等价于 [0-9]                                       |
| `\D`     | 匹配非数字，等价于 [^0-9]                                    |
| `\s`     | 匹配空白字符（空白字符包括空格符、制表符、回车符、换行符、垂直换行符、换页符） |
| `\S`     | 匹配非空白字符                                               |
| `\0`     | 匹配 NUL 字符                                                |
| `\n`     | 匹配换行符                                                   |
| `\f`     | 匹配换页符                                                   |
| `\r`     | 匹配回车符                                                   |
| `\t`     | 匹配制表符                                                   |
| `\xxx`   | 匹配以八进制数 xxx 规定的字符                                |
| `\xdd`   | 匹配以十六进制数 dd 规定的字符                               |
| `\uxxxx` | 查找以十六进制数 xxxx 规定的 Unicode 字符                    |

下列出了常用量词、简单描述和示例。

| 量 词    | 描 述                                                        | 示 例                                                  |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------ |
| `m+`     | 匹配任何包含 1-N（N 代表多个，以下同）个 m 的字符串，例如 `\d+` 代表匹配 1-N 个数字字符串 | `/ab+/` 匹配 dddabbbbc 中的 abbbb ，但不匹配 ddda      |
| `m*`     | 匹配任何包含 0-N 个 m 的字符串                               | `/ab*/` 匹配 dddabbbbc 中的 abbbb ，也匹配 ddda 中的 a |
| `m?`     | 匹配任何包含 0-1 个 m 的字符串                               | `/ab?/` 匹配 dddabbbbc 中的 ab，也匹配 ddda 中的 a     |
| `m{X}`   | 匹配包含连续 X 个 m 的字符串                                 | `/ab{2}c/` 匹配 abbcd 中的 abbc                        |
| `m{X,Y}` | 匹配包含连续 X-Y 个 m 的字符串                               | `/ab{2,3}c/` 匹配 abbcdabbbc 中的 abbbc ，也匹配 abbc  |
| `m{X,}`  | 匹配包含连续至少 X 个 m 的字符串                             | `/ab{2,}c/` 匹配 abbcdabbbc 中的 abbc ，也匹配 abbbc   |
| `^m`     | 匹配任何开头为 m 的字符串                                    | `/^b/` 匹配 babbc 中的第一个 b，但不匹配 abbc          |
| `m$`     | 匹配任何结尾为 m 的字符串                                    | `/c$/` 匹配 babbc 中的最后一个 c，但不匹配 cabb        |

1. +是1到n(本来就有1)，*是0到n(爆炸从无到有)
2. ^在[]里表示非，不在里面是表示开头

## 正则表达式举例

1. 邮政编码：国内邮政编码是 6 位数字，可以用 `/^\d{6}$/` 匹配。
2. 手机号码：国内手机号码是 11 位数字，第 1 位固定是 1，可以用 `/^1\d{10}$/` 匹配。
3. 年龄允许在 0 ～ 130 之间：可以用 `/^130$ | ^( (1[0-2] | [1-9])? \d)$/` 匹配。其中 `^130$` 单独列举出来，`^( (1[0-2] | [1-9])? \d)$` 中 `(1[0-2] | [1-9])?` 表示百位数和十位数，`1[0-2]` 表示当有百位数时的百位数和十位数，`[1-9]` 表示没有百位数时的十位数，? 表示可以有 1 个百位数十位数，也可以没有，最后 `\d` 表示必须要有的个位数。
4. 邮箱：可以用 `/^\w+@\w+.[A-Za-z]{2,3}(.[A-Za-z]{2,3})?$/` 匹配。其中 `^\w+@` 表示 `@` 符号前至少包括一个字符，`@\w+.` 表示 `@` 符号和 `.` 符号中间至少包括一个字符，`.[A-Za-z]{2,3}` 表示 `.` 符号后的域名段组成只可以有 2 位或 3 位，且必须是字母，`(.[A-Za-z]{2,3})?` 表示第二个 `.` 符号后的域名段组成也只可以有 2 位或 3 位，且必须是字母，不过该域名段可以没有或只出现 1 次。

## 验证其他内容

使用正则表达式验证的关键在于正则表达式的写法，具体的 JavaScript 代码往往是相似的。接下来我们针对一些常用的表单验证项，介绍正则表达式的写法。

1. 用户名：6 ～ 18 个字符，第 1 个字符必须是数字、字母、下画线或美元符，可以用 `/^[ A-Za-z0-9_$].{5,17}$/` 匹配。
2. 生日：可以用 `/^((19\d{2})|(200\d))-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2]\d|3[0-1])$/` 匹配，允许验证通过的生日形式为 1986-7-19 或 1992-01-08。
3. IP 地址：可以用 `/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/` 匹配，允许验证通过的 IP 地址形式为 192.168.1.1。
4. 网址：可以用 `/^(http|https):\/\/.*/` 匹配，允许验证通过的网址是以 `http://` 和 `https://` 开头的字符串。

#### 正则表达式的方法

- exec() 检索字符串中指定的值。返回找到的值，并确定其位置。
- test() 检索字符串中指定的值。返回 true 或 false。
- compile() 编译正则表达式。

示例：RegExp 对象方法使用，页面中有三个文本框，分别可以输入邮政编码、手机号码和年龄，如图一所示。使用正则表达式对这三个文本框的内容进行验证（移出焦点验证，页面显示验证提示错误信息）。

```html
<!DOCTYPE html>
<html>
    <head>
        <style type="text/css">
            div{color:#F00;font-size:12px;}
        </style>
        <script type="text/javascript">
            function checkCode(){
                var code = document.getElementById("code").value
                var codePrompt = document.getElementById("codePrompt")
                var regCode=/^\d{6}$/
                if(regCode.test(code) == false){ // 使用 RegExp 对象的 test 方法进行匹配
                    codePrompt.innerHTML = "邮政编码输入不正确，请重新输入！"
                    return false
                }
                codePrompt.innerHTML = ""
                return true
            }
            function checkMobile(){
                var mobile = document.getElementById("mobile").value
                var mobilePrompt = document.getElementById("mobilePrompt")
                var regMobile = /^1\d{10}$/
                if(regMobile.test(mobile) == false){
                    mobilePrompt.innerHTML="手机号码输入不正确，请重新输入！";
                    return false
                }
                mobilePrompt.innerHTML = ""
                return true
            }
            function checkAge(){
                var age = document.getElementById("age").value
                var agePrompt = document.getElementById("agePrompt")
                var regAge = /^130$|^((1[0-2]|[1-9])?\d)$/
                if(regAge.test(age) == false){
                    agePrompt.innerHTML="年龄输入不正确，请重新输入！";
                    return false
                }
                agePrompt.innerHTML = ""
                return true
            }
        </script>
    </head>
    <body>
        <h3>正则表达式验证</h3>
        <p>邮政编码：<input id="code" type="text" onblur="checkCode()"/>
        <div id="codePrompt"></div></p>
        <p>手机号码：<input id="mobile" type="text" onblur="checkMobile()" />
        <div id="mobilePrompt"></div></p>
        <p>年龄：<input id="age" type="text" onblur="checkAge()"/>
        <div id="agePrompt"></div></p>
    </body>
</html>
```

实验效果如下所示：

![图片描述](/assets/web/202202062151906.gif)

# HTML5 API

## 媒体操作

在 HTML5 中增加了媒体元素，我们也可以使用 JavaScript 来操纵和控制媒体元素。

示例：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <audio controls>
      <source src="snow.mp3" />
      WebIDE 中不支持音频文件。
    </audio>
  </body>
</html>
```

## 手势事件

在用户交互的时候，PC 端主要使用的是鼠标单击，移动端主要是通过触摸。在 HTML5 中，新增加了 touchstart，touchmove，touchend 事件，用于判断手指的点击和划动轨迹。

- touchstart 是触摸开始，多点触控，后面的手指同样会触发。
- touchmove 是滑动时，接触点改变。
- touchend 是手指离开屏幕时，触摸结束。

每个触摸事件都包括了三个触摸列表，列表里包含了对应的一系列触摸点（用来实现多点触控）：

- touches：当前位于屏幕上的所有手指的列表。
- targetTouches：位于当前 DOM 元素上手指的列表。
- changedTouches：涉及当前事件手指的列表。

## 设备事件

智能手机和平板电脑的普及，为用户与浏览器交互引入了一种新的方式，而一类新事件也应运而生。

主要事件有 orientationchange 和 MozOrientation。接下来会分别给大家讲解这两种事件。

### orientationchange 事件

苹果公司为移动 Safari 中添加了 orientationchange 事件，以便开发人员能够确定用户何时将设备由横向查看模式切换为纵向查看模式。移动 Safari 的 window.orientation 属性中可能包含 3 个值：0 表示肖像模式，90 表示向左旋转的横向模式（“主屏幕”按钮在右侧），-90 表示向右旋转的横向模式（“主屏幕”按钮在左侧）。所有 iOS 设备都支持 orientationchange 事件和 window.orientation 属性。

### MozOrientation 事件

这个事件和 orientationchange 事件差不多，是在 window 对象上触发的，event 对象包含三个属性：x、y 和 z。这几个属性的值都介于 1 到 -1 之间，表示不同坐标轴上的方向。在静止状态下，x 值为 0，y 值为 0，z 值为 1（表示设备处于竖直状态）。如果设备向右倾斜，x 值会减小；反之，向左倾斜，x 值会增大。类似地，如果设备向远离用户的方向倾斜，y 值会减小，向接近用户的方向倾斜，y 值会增大。z 轴检测垂直加速度度，1 表示静止不动，在设备移动时值会减小。（失重状态下值为 0。）

## 拖放事件

拖放是一种很常见的交互效果，大多数情况，我们都是使用第三方控件来实现，当然我们也可以使用原生的 js 来实现。

拖放是一种常见的特性，即抓取对象以后拖到另一个位置。

在 HTML5 中，拖放是标准的一部分，任何元素都能够拖放。
首先，为了使元素可拖动，把 draggable 属性设置为 true
拖动什么 - ondragstart
放到何处 - ondragover
ondragover 事件规定在何处放置被拖动的数据。

进行放置 - ondrop，当放置被拖数据时，会发生 drop 事件

示例：用 js 来实现图片的拖放。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!--拖放-->
    <style type="text/css">
      #div1 {
        width: 350px;
        height: 70px;
        padding: 10px;
        border: 1px solid #aaaaaa;
      }
    </style>
  </head>
  <body>
    <p>拖动图片到矩形框中:</p>
    <!--
        当放置被拖动数据时，会发生 drop 事件
        ondragover 事件规定在何处放置被拖动的数据 -->
    <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

    <br />
    <!--
        设置元素拖放属性 draggable
        ondragstart 规定了被拖动的数据 -->
    <img
      id="drag1"
      src="i.jpg "
      draggable="true"
      ondragstart="drag(event)"
      width="336"
      height="69"
    />

    <script>
      function allowDrop(ev) {
        // 默认设置的是数据无法放置到其他元素中，需要阻止这种默认处理方式
        ev.preventDefault();
      }

      function drag(ev) {
        // setData()设置被拖数据的数据类型和值
        ev.dataTransfer.setData("Text", ev.target.id);
      }

      function drop(ev) {
        // 阻止默认事件处理
        ev.preventDefault();
        // 获取被拖动的数据
        var data = ev.dataTransfer.getData("Text");
        // 把被拖元素追加到放置元素中
        ev.target.appendChild(document.getElementById(data));
      }
    </script>
  </body>
</html>
```

效果如下所示：

![图片描述](/assets/web/202202062200269.gif)

## 定位事件

HTML5 Geolocation（地理定位）用于定位用户的位置。通常使用 Geolocation API 用于获得用户的地理位置。Internet Explorer 9、Firefox、Chrome、Safari 以及 Opera 支持地理定位。

鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。

Geolocation 对象的常用方法：

| 方法                 | 描述                                                 |
| -------------------- | ---------------------------------------------------- |
| watchPosition()      | 返回用户的当前位置，并继续返回用户移动时的更新位置。 |
| clearWatch()         | 停止 watchPosition() 方法。                          |
| getCurrentPosition() | 方法来获得用户的位置。                               |

返回 latitude、longitude ，accuracy 属性，如下表。

| 属性                    | 描述                   |
| ----------------------- | ---------------------- |
| coords.latitude         | 十进制数的纬度         |
| coords.longitude        | 十进制数的经度         |
| coords.accuracy         | 位置精度               |
| coords.altitude         | 海拔，海平面以上以米计 |
| coords.altitudeAccuracy | 位置的海拔精度         |
| coords.heading          | 方向，从正北开始以度计 |
| coords.speed            | 速度，以米/每秒计      |
| timestamp               | 响应的日期/时间        |

示例：定位的使用。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <p id="demo">
      点击按钮显示当前坐标（线上WebIDE 无法获取，可以在本地试一试）：
    </p>
    <button onclick="getLocation()">点我</button>
    <script>
      var x = document.getElementById("demo");
      function getLocation() {
        if (navigator.geolocation) {
          // 获取用户的当前位置
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          x.innerHTML = "该浏览器不支持Geolocation!";
        }
      }
      // 显示当前用户的经度和维度
      function showPosition(position) {
        x.innerHTML =
          "纬度: " +
          position.coords.latitude +
          "<br>经度: " +
          position.coords.longitude;
      }
    </script>
  </body>
</html>
```

## canvas

`<canvas>` 为了客户端矢量图形而设计的。它自己没有行为，但却把一个绘图 API 展现给客户端 JavaScript 以使脚本能够把想绘制的东西都绘制到一块画布上。

`<canvas>` 标记由 Apple 在 Safari 1.3 Web 浏览器中引入。可以在 IE 中使用 `<canvas>` 标记，并在 IE 的 VML 支持的基础上用开源的 JavaScript 代码（由 Google 发起）来构建兼容性的画布。目前 `<canvas>` 已经成为 HTML 5 草案中一个正式的标签。

Canvas 对象表示一个 HTML 画布元素 `<canvas>`。它没有自己的行为，但是定义了一个 API 支持脚本化客户端绘图操作。

大多数 Canvas 绘图 API 都没有定义在 `<canvas>` 元素本身上，而是定义在通过画布的 getContext() 方法获得的一个“绘图环境”对象上。Canvas API 也使用了路径的表示法。但是，路径由一系列的方法调用来定义，而不是描述为字母和数字的字符串，比如调用 beginPath() 和 arc() 方法。一旦定义了路径，其他的方法，如 fill()，都是对此路径操作。绘图环境的各种属性，比如 fillStyle，说明了这些操作如何使用。

Canvas 对象包含属性：

- height 属性是画布的高度。指定为一个整数像素值或者是窗口高度的百分比。当这个值改变的时候，在该画布上已经完成的任何绘图都会擦除掉。默认值是 300。
- width 属性是画布的宽度。指定为一个整数像素值或者是窗口宽度的百分比。当这个值改变的时候，在该画布上已经完成的任何绘图都会擦除掉。默认值是 300。

Canvas 对象的方法：

getContext() 是返回一个用于在画布上绘图的环境。

canvas 元素使用 JavaScript 在网页上绘制图像。它拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

示例：canvas 的基本用法。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <canvas
      id="myCanvas"
      width="200"
      height="100"
      style="border:1px solid #000000;"
    >
    </canvas>
    <script>
      // 获取 canvas 对象
      var c = document.getElementById("myCanvas");
      // 获取 context 对象
      var ctx = c.getContext("2d");
      // 绘制一个红色的矩形
      ctx.fillStyle = "#ffc0cb";
      // 在画布上绘制 宽 150px，高 75px 的矩形
      ctx.fillRect(0, 0, 180, 75);
      // 设置字体的样式
      ctx.font = "30px Arial";
      ctx.strokeText("Hello World", 10, 50);
    </script>
  </body>
</html>
```

效果如下所示：

![图片描述](/assets/web/202202062204971.png)

## HTML 本地存储

在客户端存储数据，可以使用 cookie，由于 cookie 速度很慢并且效率较低使得 cookie 不适合大量数据的存储。

在 HTML5 中，数据不是由每个服务器请求传递的，而是只有在请求时使用数据，不会保存在服务器中。它使在不影响网站性能的情况下存储大量数据成为可能。对于不同的网站，数据存储于不同的区域，并且一个网站只能访问其自身的数据。HTML5 使用 JavaScript 来存储和访问数据。

HTML5 提供了两种方式在客户端存储数据：

- localStorage：没有时间限制的数据存储。
- sessionStorage：针对一个 session 的数据存储，当用户关闭浏览器窗口后，数据会被删除。

常用方法：

- 保存数据：`localStorage.setItem(key,value);`。
- 读取数据：`localStorage.getItem(key);`。
- 删除单个数据：`localStorage.removeItem(key);`。
- 删除所有数据：`localStorage.clear();`。
- 得到某个索引的 key：`localStorage.key(index);`。

示例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body>
    <div style="border: 2px dashed #ccc;width:320px;text-align:center;">
      <label for="goodsName">商品名(key)：</label>
      <input type="text" id="goodsName" name="goodsName" class="text" />
      <br />
      <label for="goodsNums">商品数量(value)：</label>
      <input type="text" id="goodsNums" name="goodsNums" />
      <br />
      <input type="button" onclick="save()" value="商品入库" />
      <hr />
      <label for="search_phone">输入商品名：</label>
      <input type="text" id="search_goods" name="search_goods" />
      <input type="button" onclick="find()" value="查找商品" />
      <p id="find_result"><br /></p>
    </div>
    <br />
    <div id="list"></div>
    <script>
      // 载入所有存储在 localStorage 的数据
      loadAll();
      // 保存数据
      function save() {
        var goodsNums = document.getElementById("goodsNums").value;
        var goodsName = document.getElementById("goodsName").value;
        localStorage.setItem(goodsName, goodsNums);
        alert("添加成功");
      }

      // 查找数据
      function find() {
        var search_goods = document.getElementById("search_goods").value;
        var goodsNums = localStorage.getItem(search_goods);
        var find_result = document.getElementById("find_result");
        find_result.innerHTML = search_goods + "的数量是：" + goodsNums;
      }
    </script>
  </body>
</html>
```

显示效果如下所示：

![图片描述](/assets/web/202202062205974.gif)

## WebSocket

很多网站实现推送技术都使用 Ajax 轮询。**轮询是在特定的的时间间隔（如每 1 秒），由浏览器对服务器发出 HTTP 请求，然后由服务器返回最新的数据给客户端的浏览器。浏览器不断的向服务器发出请求，在 HTTP 请求头中真实有效的数据只占一小部分，这种方式非常的浪费资源。**

HTML5 定义的 WebSocket 协议，能更好的节省服务器资源和带宽，并且能够更实时地进行通讯，是一种在单个 TCP 连接上进行全双工通讯的协议。WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。

WebSocket 的工作原理：

浏览器通过 JavaScript 向服务器发出建立 WebSocket 连接的请求，连接建立以后，客户端和服务器端就可以通过 TCP 连接直接交换数据。获取 WebSocket 连接后，可以通过 `send()` 方法来向服务器发送数据，并通过 `onmessage` 事件来接收服务器返回的数据。

因此，在使用 WebSocket 时，经常使用到的事件：

- open 是连接建立时触发。
- message 是客户端接收服务端数据时触发。
- error 是通信发生错误时触发。
- close 是连接关闭时触发。

通常使用 WebSocket 对象的常用的属性和方法如下：

**属性：**

`readyState` 表示连接状态，只读，属性值为：

- 0 表示连接尚未建立。
- 1 表示连接已建立，可以进行通信。
- 2 表示连接正在进行关闭。
- 3 表示连接已经关闭或者连接不能打开。

`bufferedAmount` 表示已被 `send()` 放入正在队列中等待传输，但是还没有发出的 UTF-8 文本字节数，只读。

**方法：**

- send() 是使用连接发送数据。
- close() 是关闭连接。

## 本地离线应用程序

在 HTML5 中引入了应用程序缓存，使得在离线时可以进行访问 Web 应用，并且提高资源加载的速度，很大程度上减轻了服务器的压力，浏览器只需要从服务器下载更新资源即可。

创建 Web 应用的离线版本，只需要编写文件 cache manifest 并在页面中进行引入。指定了 manifest 的页面在用户对其访问时都会被缓存，未指定 manifest 属性，则页面不会被缓存（除非在 manifest 文件中直接指定了该页面）。manifest 文件的建议的文件扩展名是：".appcache"。

在页面中通过 manifest 属性引入 Manifest 文件，该属性指定了文档的缓存 manifest 的位置。

其语法为：

```html
<html manifest="URL"></html>
```

URL 是文档的缓存 manifest 的地址，可以是绝对地址或者相对地址。

manifest 文件需要配置正确的 MIME-type，即 "text/cache-manifest"。必须在 Web 服务器上进行配置。

```html
<!DOCTYPE html>
<html manifest="demo.appcache">
  ...
</html>
```

Manifest 文件是简单的文本文件，它指定的浏览器被缓存的内容（以及不缓存的内容）。

Manifest 文件可分为三个部分：

- CACHE MANIFEST 文件将在首次下载后进行缓存。
- NETWORK 文件需要与服务器的连接，且不会被缓存。
- FALLBACK 文件规定当页面无法访问时的回退页面（比如 404 页面）。