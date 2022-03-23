

# JavaScript BOM 及 DOM 编程

## Js的组成

![image-20220322171114857](https://gitee.com/Dye/statics/raw/master/img/202203221711959.png)



- **JS** **基础阶段**
  - 我们学习的是 ECMAScript 标准规定的基本语法
  - 要求同学们掌握 JS 基础语法
  - 只学习基本语法，做不了常用的网页交互效果
  - 目的是为了 JS 后面的课程打基础、做铺垫
- Web APIs阶段
  - Web APIs 是 W3C 组织的标准
  - Web APIs 我们主要学习 DOM 和 BOM
  - Web APIs 是我们 JS 所独有的部分
  - 我们主要学习页面交互功能
  - 需要使用 JS 基础的课程内容做基础

### API

API（Application Programming Interface,应用程序编程接口）是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，或理解内部工作机制的细节。

简单理解： **API** **是给程序员提供的一种工具，以便能更轻松的实现想要完成的功能。**

比如手机充电的接口：

> 我们要实现充电这个功能：
>
> - 我们不关心手机内部变压器，内部怎么存储电等
> - 我们不关心这个充电线怎么制作的
> - 我们只知道，我们拿着充电线插进充电接口就可以充电
> - 这个充电接口就是一个 API 

### **Web API** 

**Web API** 是浏览器提供的一套操作浏览器功能和页面元素的 API ( BOM 和 DOM )。

现阶段我们主要针对于浏览器讲解常用的 API , 主要针对浏览器做交互效果。

比如我们想要浏览器弹出一个警示框， 直接使用 alert(‘弹出’)

MDN 详细 API : https://developer.mozilla.org/zh-CN/docs/Web/API

因为 Web API 很多，所以我们将这个阶段称为 **Web APIs**





## BOM 介绍

BOM（Browser Object Model）即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是 window。

## BOM 操作

浏览器对象模型（Browser Object Model，BOM）提供了 JavaScript 与浏览器窗口进行交互的对象，使用 BOM 可以访问和操控浏览器窗口。软件开发人员可以通过 BOM 实现移动窗口、更改状态栏等不与页面内容发生直接联系的操作。BOM 是一个分层结构，如图所示。

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202031404644.jpeg)

从图中可以看出，window 对象是 BOM 的核心。当浏览器打开一个页面时，所见的浏览器窗口就是一个 window 对象，也是 BOM 最顶层的对象。在这个顶层对象下，还包括地址对象 location、文档对象 document 和历史对象 history，其中 location 对象对应于浏览器地址栏，history 对象对应于浏览器的前进、后退按钮，document 对象表示浏览器窗口中的内容，包括有超链接、锚和表单等，其中表单中又包括文本框、单选按钮、复选框、按钮等。

### Window 对象

BOM 使 JavaScript 有能力与浏览器进行沟通，这个沟通要从 window 对象开始。所有 window 对象的属性和方法自动成为 JavaScript 全局变量和全局函数，可以直接使用。例如 window 对象的 alert() 方法，我们可以在 JavaScript 代码中写成如下两种形式：

```javascript
window.alert("我是 JavaScript 脚本代码！");
alert("我是 JavaScript 脚本代码！");
```

#### window 对象属性和方法

| 分 类                                          | 属性/方法                                          |
| ---------------------------------------------- | -------------------------------------------------- |
| document                                       | 对 Document 对象的只读引用                         |
| location                                       | 用于窗口或框架的 location 对象（当前 URL ）        |
| history                                        | 对 history 对象（用户访问过的 URL ）的只读引用     |
| navigator                                      | 对 navigator 对象（客户端浏览器）的只读引用        |
| screen                                         | 对 screen 对象（客户端屏幕）的只读引用             |
| name                                           | 窗口名称                                           |
| opener                                         | 创建此窗口的窗口的引用                             |
| parent                                         | 父窗口                                             |
| self、window                                   | 返回对当前窗口的引用                               |
| status                                         | 窗口状态栏的文本                                   |
| screenLeft、screenTop                          | 窗口左上角在屏幕上的 x、y 坐标                     |
| close()                                        | 关闭窗口                                           |
| open(URL,name,features,replace)                | 打开一个新的浏览器窗口或查找一个已命名的窗口       |
| print()                                        | 打印当前窗口的内容                                 |
| alert(message)                                 | 显示带有一段消息和一个确认按钮的警告框             |
| confirm(message)                               | 显示带有一段消息以及确认按钮和取消按钮的对话框     |
| prompt(text,defaultText)                       | 显示可提示用户进行输入的对话框                     |
| focus()、blur()                                | 把键盘焦点给予一个窗口和从顶层窗口移开             |
| moveBy(x,y)                                    | 把窗口向右向下移动指定的像素数                     |
| moveTo(x,y)                                    | 把窗口移动到指定的 x、y 坐标                       |
| resizeBy(width,height)                         | 按照指定的像素调整窗口的大小                       |
| resizeTo(width,height)                         | 把窗口大小调整为指定的宽度和高度                   |
| setTimeout(code,millisec)、clearTimeout(sid)   | 在指定的毫秒数后调用函数和取消指定动作             |
| setInterval(code,millisec)、clearInterval(sid) | 按照指定的周期（以毫秒计）来调用函数和取消指定动作 |

#### 打开和关闭窗口

通过单击 `openWin` 按钮打开一个新的空窗口，当用户单击 `closeWin` 按钮，会关闭这个窗口。程序具体代码如下：

```javascript
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript">
            var newWin
            function openWin(){
                newWin = window.open()
                newWin.document.write("往窗口文档写入内容！")
            }
            function closeWin(){
                newWin.close()
            }
        </script>
    </head>
    <body>
        <input type="button" value="openWin" onclick="openWin()" />
        <input type="button" value="closeWin" onclick="closeWin()" />
    </body>
</html>
```

提醒大家，不同的浏览器，相同浏览器的不同版本，同一版本浏览器的不同模式（多标签或多窗口），在处理 window 对象的属性和方法时，可能会有自己独有的操作，尤其是在一个窗口中调用另一个窗口的属性和方法时，会出现更多的问题，需要大家注意。

#### 定时器

在之前的内容中，我们已经通过 setTimeout(code,millisec) 方法（第一个参数是需要调用的函数，第二个参数是在多少毫秒之后调用函数）实现了定时调用函数的功能，让我们再回顾一下具体的代码。

```javascript
function Time() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  document.getElementById("txt").innerHTML =
    "现在时间为：" + h + ":" + m + ":" + s;
  setTimeout("Time()", 500);
}
```

其中最后一行代码的作用就是间隔 0.5 秒，调用 Time() 方法，又因为该行代码也在 Time() 方法里，所以会循环执行下去，动态显示系统时间。如果要想中止这个定时调用，可以调用 clearTimeout(sid) 方法，其中 sid 值为 setTimeout() 方法的返回值。

接下来我们完成一个带有“开始”、“停止”按钮的“显示动态时间”，具体代码如下，程序运行结果如图所示。

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript">
      var sid;
      function startT() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        document.getElementById("time").value =
          "现在时间为：" + h + ":" + m + ":" + s;
        sid = setTimeout("startT()", 500);
      }
      function stopT() {
        clearTimeout(sid);
      }
    </script>
  </head>
  <body>
    <form>
      <input type="button" value="开始：" onClick="startT()" />
      <input type="text" id="time" />
      <input type="button" value="停止！" onClick="stopT()" />
    </form>
  </body>
</html>
```

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202031418954.gif)

上面的代码是通过在函数体内调用自身的方法，实现了循环调用。下面我们通过 setInterval() 和 clearInterval() 方法直接实现函数的循环调用和取消。具体代码如下，运行结果如图所示。

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      var sid = self.setInterval("showTime()", 500);
      function showTime() {
        var date = new Date();
        document.getElementById("clock").value = date.toString();
      }
    </script>
  </head>
  <body>
    <h3>现在的时间是：</h3>
    <input type="text" id="clock" size="40" />
    <!--因为 JavaScript 代码短，可直接写在 onclick 事件里-->
    <button onclick="window.clearInterval(sid)">停止</button>
  </body>
</html>
```

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202031418872.gif)

### Location 对象

location 对象包含有关当前页面 URL 的信息，可以用来重新装载当前页面或装入新页面。location 对象也是 window 对象的下级对象，可以通过 window.location 进行访问。location 对象的 href 属性存放的是文档的完整 URL，其他属性则分别描述了 URL 的各个部分。当一个 location 对象被转换成字符串，返回的就是 href 属性的值，这意味着我们可以使用 location 直接替代 location.href。我们也可以把一个 URL 字符串赋予 location.href，浏览器会把新 URL 字符串所指向的文档装载浏览器窗口。下表列出了 location 对象常用属性（可读、可写）、方法、简单描述和示例。

location 对象属性和方法如下所示：

| 分类          | 属性/方法                      | 描 述                                                        |
| ------------- | ------------------------------ | ------------------------------------------------------------ |
| 属性          | href                           | 完整 URL                                                     |
| host          | 当前 URL 的主机名和端口号      | `www.baidu.com:8080`                                         |
| protocol      | 当前 URL 的协议                | http:                                                        |
| hostname      | 当前 URL 的主机名              | `www.baidu.com`                                              |
| port          | 当前 URL 的端口号              | 8080                                                         |
| pathname      | 当前 URL 的路径部分            | /ch08/location.jsp                                           |
| hash          | 从井号（#）开始的 URL 锚       | #archorname                                                  |
| search        | 从问号（?）开始的 URL 查询部分 | `?name=jacky&age=23`                                         |
| 方法          | assign(URL)                    | 加载新的文档                                                 |
| reload(force) | 重新加载当前文档               | location.[reload(true)](http://www.baidu.com/)               |
| replace(URL)] | 用新的文档                     | location.replace("[http://www.baidu.com"](http://www.baidu.com"/)) |

下面对 location 对象的方法进行简要的介绍。

assign(URL) 方法：加载一个新的文档。该方法等同于直接给 location.href 赋值，因为在 JavaScript 中直接给 location 对象的 href 属性赋值，也会加载这个 href 属性所指定的页面，**可以点击后退返回上一个页面**。

reload(force) 方法：等同于用户单击浏览器的刷新按钮。当该方法没有参数或参数是 false，它会用检测 HTTP 头部 If-Modified-Since 来判断服务器上的文档是否已改变。如果文档已改变会再次下载该文档，否则从缓存中装载文档。如果参数为 true，则会绕过缓存，从服务器上重新下载该文档。

replace(URL) 方法：用一个新文档取代当前文档。replace() 方法不会在 history 对象中生成一个新的记录，也就是说用新的 URL 覆盖 history 对象中的当前记录，**没有后退返回上一页的**。

### Navigator 对象

Navigator 对象包含有关浏览器的信息。虽然 W3C 没有应用于 Navigator 对象的公开标准，但是所有浏览器都支持该对象。从开发的角度来讲，Navigator 对象的使用比较简单，只需要掌握其常见的属性及方法即可，详见下表。

| 分类            | 属性/方法                                    | 描 述                      |
| --------------- | -------------------------------------------- | -------------------------- |
| 属性            | appCodeName                                  | 返回浏览器的代码名         |
| appName         | 返回浏览器的名称                             | navigator.appName          |
| appMinorVersion | 返回浏览器的次级版本                         | navigator. appMinorVersion |
| appVersion      | 返回浏览器的平台和版本信息                   | navigator.appVersion       |
| browserLanguage | 返回当前浏览器的语言                         | navigator. browserLanguage |
| cookieEnabled   | 返回指明浏览器中是否启用 cookie 的布尔值     | navigator. cookieEnabled   |
| cpuClass        | 返回浏览器系统的 CPU 等级                    | navigator. cpuClass        |
| systemLanguage  | 返回 OS 使用的默认语言                       | navigator. systemLanguage  |
| userAgent       | 返回由客户机发送服务器的 user-agent 头部的值 | navigator. userAgent       |
| userLanguage    | 返回 OS 的自然语言设置                       | navigator. userLanguage    |
| onLine          | 返回指明系统是否处于脱机模式的布尔值         | navigator. onLine          |
| platform        | 返回运行浏览器的操作系统平台                 | navigator. platform        |
| 方法            | javaEnabled()                                | 规定浏览器是否启用 Java    |
| taintEnabled()  | 规定浏览器是否启用数据污点 (data tainting)   | navigator. taintEnabled()  |

### Screen 对象

Screen 对象 包含了有关用户屏幕的信息。

Screen 对象属性：

- availWidth 可用的屏幕宽度。
- availHeight 可用的屏幕高度。
- height 屏幕的总高度。
- width 屏幕的总宽度。
- colorDepth 返回目标设备或缓冲器上的调色板的比特深度。

示例如下：

```javascript
document.write("<h2>屏幕信息：</h2>");
var width = screen.width;
var height = screen.height;
document.write("屏幕的高度：" + height + "<br>");
document.write("屏幕的宽度：" + width + "<br>");
var aHeight = screen.availHeight;
var aWidth = screen.availWidth;
document.write("屏幕的可用高度：" + aHeight + "<br>");
document.write("屏幕的可用宽度：" + aWidth);
```

### history 对象

history 对象包含用户在浏览器中访问过的 URL，提供了用户最近浏览过的 URL 列表。该对象最初设计出来的目的是表示窗口的浏览历史，但出于隐私方面的原因，history 对象不再允许 JavaScript 访问已经访问过的实际 URL ，仍然保持使用的功能只有 back()、forward() 和 go() 方法。histroy 对象是 window 对象的下级对象，可以通过 window.history 进行访问。下表列出了 histroy 对象常用属性、方法、简单描述和示例。

| 分 类     | 属性/方法                                     | 描 述                                         |
| --------- | --------------------------------------------- | --------------------------------------------- |
| 属 性     | length                                        | 返回浏览器历史列表中的 URL 数量               |
| 方 法     | back()                                        | 加载 history 列表中的前一个 URL，同“后退”按钮 |
| forward() | 加载 history 列表中的下一个 URL，同“前进”按钮 | history.forward()                             |
| go()      | 加载 history 列表中的某个具体页面             | history.go(-1) 等同与 back()                  |

## DOM

### DOM 简介

> 文档对象模型（Document Object Model，简称 DOM），是 W3C 组织推荐的处理可扩展标记语言（HTML或者XML）的标准编程接口。
>
> W3C 已经定义了一系列的 DOM 接口，通过这些 DOM 接口可以改变网页的内容、结构和样式。

document 是一个比较特殊的对象，它既是浏览器对象模型 BOM 中的一个对象（属于 window 对象的下级对象），同时也表示文档对象模型 DOM 中整个 HTML 文档。因为 document 对象非常重要，所以我们将 document 对象的属性和方法分开讲解，并且在 document 对象讲解属性和方法之前，简要介绍一下 document 对象下的元素集合。

document 对象表示整个 HTML 文档，文档中包括 HTML 元素。按类别划分，文档中又包括了一系列的图像、表单、锚、链接等对象。我们可以通过 document 对象，再根据 HTML 元素类别获取该文档中该类别元素的集合，再通过这个集合操作这些 HTML 元素。下表列出了 document 对象下的元素集合和简单描述，希望大家有所了解。

| 集 合     | 描 述                                      |
| --------- | ------------------------------------------ |
| all[]     | 提供对文档中所有 HTML 元素的访问。         |
| images[]  | 返回对文档中所有图像对象的引用。           |
| forms[]   | 返回对文档中所有表单对象的引用。           |
| anchors[] | 返回对文档中所有 anchor 对象的引用。       |
| links[]   | 返回对文档中所有 area 和 link 对象的引用。 |

在实际编写 JavaScript 代码时，很少会通过 document 对象下的元素集合去获取 HTML 元素（如 document.all[i]、document.images[name]、document.all.tags[tagname]），通常的做法是通过 getElementById() 方法、getElementsByTagName() 和 getElementsByName() 方法获取 HTML 元素。

### DOM树

![image-20220322190813731](https://gitee.com/Dye/statics/raw/master/img/202203221908793.png)

- 文档：一个页面就是一个文档，DOM 中使用 document 表示
- 元素：页面中的所有标签都是元素，DOM 中使用 element 表示
- 节点：网页中的所有内容都是节点（标签、属性、文本、注释等），DOM 中使用 node 表示

**DOM** 把以上内容都看做是对象

### DOM 元素

DOM 是以树状结构组织的 HTML 文档，DOM 定义了访问和操作 HTML 文档的标准方法。HTML 文档中的每个标签或元素都是一个节点。DOM 可以把文档呈现为带有元素、属性和文本的树节点。

在 DOM 中规定：

- 文档本身是文档节点。
- 所有 HTML 元素是元素节点。
- 所有 HTML 属性是属性节点。
- HTML 元素内的文本是文本节点。
- 注释是注释节点。

示例:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>123</title>
  </head>
  <body>
    <img
      src="flower.jpg "
      width="150px"
      height="100px"
      alt="鲜花"
      id="flower"
    />
    <h1>鲜花</h1>
    <p>鲜花的详细介绍</p>
  </body>
</html>
```

效果如下所示：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202031514399.png)

上面这个示例的文档由 `<html>`，`<head>`，`<meta>`，`<title>`，`<body>`，`<img>`，`<h1>`，`<p>` 以及文本节点组成。它们之间的结构如下图所示。

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202031514088.jpeg)

从上图中我们可以发现这些节点之间都存在着层次的关系。通常我们使用父、子、同胞等来描述这些关系。顶层的 `<html>` 节点被称为根节点。除了根节点以外，每个节点都有父节点，如 `<body>` 的子节点 `<img>`、`<h1>`、`<p>`，一个节点可以拥有任意数量的子节点。而 `<img>`、`<h1>`、`<p>` 又称之为兄弟节点或者同胞节点。同胞节点是拥有相同父节点的节点。

节点是 DOM 层次结构中的任何类型的对象的通用名称。每个节点都包含了节点名称、节点值、节点类型。

节点名称 NodeName 包含某个节点的名称。节点名称值可能是标签名称，属性名称，文本节点值为 #text，文档节点值为 #document。

节点值 NodeValue 节点值只适用于文本节点和属性节点。对于文本节点，节点值为包含的文本；对于属性节点，节点值为包含的属性值。

节点类型 NodeType 是只读属性，对于不同的类型返回不同的值。如下表所示。

| 节点类型 | 值   |
| -------- | ---- |
| 文档     | 9    |
| 元素     | 1    |
| 属性     | 2    |
| 文本     | 3    |

#### 获取元素

##### **根据** **ID** 获取

> 使用 getElementById() 方法可以获取带有 ID 的元素对象。

```js
document.getElementById('id');
```

> 小技巧:使用 console.dir() 可以打印我们获取的元素对象，更好的查看对象里面的属性和方法。

##### 根据标签名获取

使用 getElementsByTagName() 方法可以返回带有指定标签名的对象的集合。

```js
 document.getElementsByTagName('标签名');
```

> 1.因为得到的是一个对象的集合，所以我们想要操作里面的元素就需要遍历。
>
> 2.得到元素对象是动态的
>
> 如果获取不到元素,则返回为空的伪数组(因为获取不到对象)

**还可以获取某个元素(父元素)内部所有指定标签名的子元素.**

```js
element.getElementsByTagName('标签名');
```

> 父元素必须是单个对象(必须指明是哪一个元素对象). 获取的时候不包括父元素自己。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <ul>
        <li>知否知否，应是等你好久11</li>
        <li>知否知否，应是等你好久11</li>
        <li>知否知否，应是等你好久11</li>
        <li>知否知否，应是等你好久11</li>

    </ul>
    <ol id="ol">
        <li>生僻字</li>
        <li>生僻字</li>
        <li>生僻字</li>
        <li>生僻字</li>

    </ol>

    <script>
        // 1.返回的是 获取过来元素对象的集合 以伪数组的形式存储的
        var lis = document.getElementsByTagName('li');
        console.log(lis);
        console.log(lis[0]);
        // 2. 我们想要依次打印里面的元素对象我们可以采取遍历的方式
        for (var i = 0; i < lis.length; i++) {
            console.log(lis[i]);

        }
        // 3. 如果页面中只有一个li 返回的还是伪数组的形式 
        // 4. 如果页面中没有这个元素 返回的是空的伪数组的形式
        // 5. element.getElementsByTagName('标签名'); 父元素必须是指定的单个元素
        // var ol = document.getElementsByTagName('ol'); // [ol]
        // console.log(ol[0].getElementsByTagName('li'));
        var ol = document.getElementById('ol');
        console.log(ol.getElementsByTagName('li'));
    </script>
</body>

</html>
```



##### **通过** **HTML5** **新增的方法获取**

```js
document.getElementsByClassName(‘类名’)；// 根据类名返回元素对象集合
```

```js
document.querySelector('选择器');        // 根据指定选择器返回第一个元素对象
```

```js
document.querySelectorAll('选择器');     // 根据指定选择器返回
```

> querySelector 和 querySelectorAll里面的选择器需要加符号,比如:document.querySelector('#nav'); 

##### 获取特殊元素（body，html)

- 获取body元素

  - ```js
    document.body//返回body元素对象
    ```

- 获取html元素

  - ```js
     // var htmlEle = document.html; NO
    document.documentElement //返回html元素对象
    ```

    

#### 事件基础

> JavaScript 使我们有能力创建动态页面，而事件是可以被 JavaScript 侦测到的行为。
>
> 简单理解： 触发--- 响应机制。
>
> 网页中的每个元素都可以产生某些可以触发 JavaScript 的事件，例如，我们可以在用户点击某按钮时产生一个 事件，然后去执行某些操作。

##### **事件三要素**

1. 事件源 （谁）

2. 事件类型 （什么事件）

3. 事件处理程序 （做啥）

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <button id="btn">唐伯虎</button>
    <script>
        // 点击一个按钮，弹出对话框
        // 1. 事件是有三部分组成  事件源  事件类型  事件处理程序   我们也称为事件三要素
        //(1) 事件源 事件被触发的对象   谁  按钮
        var btn = document.getElementById('btn');
        //(2) 事件类型  如何触发 什么事件 比如鼠标点击(onclick) 还是鼠标经过 还是键盘按下
        //(3) 事件处理程序  通过一个函数赋值的方式 完成
        btn.onclick = function() {
            alert('点秋香');
        }
    </script>
</body>

</html>
```

##### **执行事件的步骤**

1. 获取事件源

2. 注册事件（绑定事件）

3. 添加事件处理程序（采取函数赋值形式）

```js
// 执行事件步骤
// 点击div 控制台输出 我被选中了
// 1. 获取事件源
var div = document.querySelector('div');
// 2.绑定事件 注册事件
// div.onclick 
// 3.添加事件处理程序 
div.onclick = function() {
    console.log('我被选中了');

}
```

##### **常见的鼠标事件**

![image-20220322201308799](https://gitee.com/Dye/statics/raw/master/img/202203222013853.png)

在鼠标经过和离开，推荐使用`mouseenter`和`mouseleave`

因为，over和out的方式是冒泡的，拿两个进行对比

1.不论鼠标指针离开被选元素还是任何子元素，都会触发 mouseout 事件。

2.只有在鼠标指针离开被选元素时，才会触发 mouseleave 事件。

#### 操作元素

JavaScript 的 DOM 操作可以改变网页内容、结构和样式，我们可以利用 DOM 操作元素来改变元素里面的内容 、属性等。注意以下都是属性

##### 修改元素内容

```js
element.innerText
// 从起始位置到终止位置的内容, 但它去除 html 标签， 同时空格和换行也会去掉
```

```js
element.innerHTML
// 起始位置到终止位置的全部内容，包括 html 标签，同时保留空格和换行
```

实例：

```js
// 当我们点击了按钮，  div里面的文字会发生变化
// 1. 获取元素 
var btn = document.querySelector('button');
var div = document.querySelector('div');
// 2.注册事件
btn.onclick = function() {
    // div.innerText = '2019-6-6';
    div.innerHTML = getDate();
}

function getDate() {
    var date = new Date();
    // 我们写一个 2019年 5月 1日 星期三
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var dates = date.getDate();
    var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    var day = date.getDay();
    return '今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day];
}
// 我们元素可以不用添加事件
var p = document.querySelector('p');
p.innerHTML = getDate();
```

**innerText和innerHTML的区别**

```js
// innerText 和 innerHTML的区别 
// 1. innerText 不识别html标签 非标准  去除空格和换行
var div = document.querySelector('div');
// div.innerText = '<strong>今天是：</strong> 2019';
// 2. innerHTML 识别html标签 W3C标准 保留空格和换行的
div.innerHTML = '<strong>今天是：</strong> 2019';
// 这两个属性是可读写的  可以获取元素里面的内容
var p = document.querySelector('p');
console.log(p.innerText);
console.log(p.innerHTML);
```

> 因此通常使用innerHTML代替innerText

##### 修改元素属性

**常用元素的属性操作**

1. innerText、innerHTML 改变元素内容

2. src、href

3. id、alt、title

实例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        img {
            width: 300px;
        }
    </style>
</head>

<body>
    <button id="ldh">刘德华</button>
    <button id="zxy">张学友</button> <br>
    <img src="images/ldh.jpg" alt="" title="刘德华">

    <script>
        // 修改元素属性  src
        // 1. 获取元素
        var ldh = document.getElementById('ldh');
        var zxy = document.getElementById('zxy');
        var img = document.querySelector('img');
        // 2. 注册事件  处理程序
        zxy.onclick = function() {
            img.src = 'images/zxy.jpg';
            img.title = '张学友思密达';
        }
        ldh.onclick = function() {
            img.src = 'images/ldh.jpg';
            img.title = '刘德华';
        }
    </script>
</body>

</html>
```

##### 修改表单属性

>  type、value、checked、selected、disabled

- 获取和设置input是不能通过innerHTML的，因为它是普通盒子如div的内容
- this指向当前函数的调用者

实例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <button>按钮</button>
    <input type="text" value="输入内容">
    <script>
        // 1. 获取元素
        var btn = document.querySelector('button');
        var input = document.querySelector('input');
        // 2. 注册事件 处理程序
        btn.onclick = function() {
            // input.innerHTML = '点击了';  这个是 普通盒子 比如 div 标签里面的内容
            // 表单里面的值 文字内容是通过 value 来修改的
            input.value = '被点击了';
            // 如果想要某个表单被禁用 不能再点击 disabled  我们想要这个按钮 button禁用
            // btn.disabled = true;
            this.disabled = true;
            // this 指向的是事件函数的调用者 btn
        }
    </script>
</body>

</html>
```

实例：仿京东显示隐藏密码明文：

> 点击按钮将密码框切换为文本框，并可以查看密码明文。

- 核心思路： 点击眼睛按钮，把密码框类型改为文本框就可以看见里面的密码
- 一个按钮两个状态，点击一次，切换为文本框，继续点击一次切换为密码框
- 算法：利用一个flag变量，来判断flag的值，如果是1 就切换为文本框，flag 设置为0，如果是0 就切换为密码框，flag设置为1

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .box {
            position: relative;
            width: 400px;
            border-bottom: 1px solid #ccc;
            margin: 100px auto;
        }
        
        .box input {
            width: 370px;
            height: 30px;
            /* 取消输入框的边框和选中蓝框 */
            border: 0;
            outline: none;
        }
        
        .box img {
            position: absolute;
            top: 2px;
            right: 2px;
            width: 24px;
        }
        /* 禁用ie和edge的密码显示功能 */
        input::-ms-reveal {
            display: none;
        }
    </style>
</head>

<body>
    <div class="box">
        <label for="">
            <img src="https://img1.baidu.com/it/u=912550374,2977800276&fm=26&fmt=auto" alt="" id="eye">
        </label>
        <input type="password" name="" id="pwd">
    </div>
    <script>
        // 使用id获取更快点
        // 1. 获取元素
        var eye = document.getElementById('eye');
        var pwd = document.getElementById('pwd');
        // 2. 注册事件 处理程序
        var flag = 0;
        eye.onclick = function() {
            // 点击一次之后， flag 一定要变化
            if (flag == 0) {
                pwd.type = 'text';
                eye.src = 'https://img1.baidu.com/it/u=617219962,2681601423&fm=26&fmt=auto';
                flag = 1; // 赋值操作
            } else {
                pwd.type = 'password';
                eye.src = 'https://img1.baidu.com/it/u=912550374,2977800276&fm=26&fmt=auto';
                flag = 0;
            }

        }
    </script>
</body>

</html>
```

##### 修改样式属性





### DOM 操作

在网页开发时，我们可以直接修改元素的样式，也可以使用 DOM 来设置或获取元素的样式。

主要有两种方式：

1. 使用 style 属性 可以设置或者返回元素的样式。

```javascript
HTML元素 .style.样式属性 = 值；
```

1. 使用 className 属性 可以设置或者返回元素的 class 样式。

```javascript
HTML元素.className = "样式名称";
```

示例：获取设置元素的样式。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      div {
        border: 1px solid black;
        width: 100px;
        height: 100px;
      }
    </style>
  </head>
  <body>
    <div></div>
    <script>
      window.onload = function () {
        var div = document.getElementsByTagName("div")[0];
        div.style.backgroundColor = "red";
      };
    </script>
  </body>
</html>
```

运行结果如下图所示。

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202031904262.png)



**style这个方法只能JS只能获取写在html标签中的写在style属性中的值（style=”…”），而无法获取定义在`<style type="text/css">`里面的属性。**

如果要获取，**在ie中我们可以使用 currentStyle 来代替。**

**语法：HTML 元素 .currentStyle. 样式属性。**

**针对非 IE 浏览器**

**其语法为：`document.defaultView.getComputedStyle('元素', '伪类')；`如果不需要伪元素信息，第二个参数可以是null**



`getComputedStyle`是一个可以获取当前元素所有最终使用的CSS属性值。返回的是一个CSS样式声明对象([object CSSStyleDeclaration])，只读。

**getComputedStyle与style的区别**

1. **只读与可写**
   正如上面提到的`getComputedStyle`方法是只读的，只能获取样式，不能设置；而`element.style`能读能写，能屈能伸。
2. **获取的对象范围**
   `getComputedStyle`方法获取的是最终应用在元素上的所有CSS属性对象（即使没有CSS代码，也会把默认的祖宗八代都显示出来）；而`element.style`只能获取元素`style`属性中的CSS样式。因此对于一个光秃秃的元素`<p>`，`getComputedStyle`方法返回对象中`length`属性值（如果有）就是`190+`， 而`element.style`就是`0`。



**getComputedStyle与defaultView**

如果我们查看jQuery源代码，会发现，其`css()`方法实现不是使用的`window.getComputedStyle`而是`document.defaultView.getComputedStyle`

实际上，使用`defaultView`基本上是没有必要的，`getComputedStyle`本身就存在`window`对象之中。



**getComputedStyle与currentStyle**

`currentStyle`是IE浏览器自娱自乐的一个属性，其与`element.style`可以说是近亲，至少在使用形式上类似，`element.currentStyle`，差别在于`element.currentStyle`返回的是元素当前应用的最终CSS属性值（包括外链CSS文件，页面中嵌入的`<style>`属性等）。

因此，从作用上将，`getComputedStyle`方法与`currentStyle`属性走的很近，形式上则`style`与`currentStyle`走的近。不过，`currentStyle`属性貌似不支持伪类样式获取，这是与`getComputedStyle`方法的差异，也是jQuery `css()`方法无法体现的一点。



1. 获取滚动状态下的元素的属性如下表所示。

| 属性         | 描述                                             |
| ------------ | ------------------------------------------------ |
| offsetWidth  | 返回元素的宽度                                   |
| offsetHeight | 返回元素的高度                                   |
| offsetLeft   | 返回当前元素的左边界到它的上级元素的左边界的距离 |
| offsetTop    | 返回当前元素的上边界到它的上级元素的上边界的距离 |
| ScrollLeft   | 返回匹配元素的滚动条的垂直位置                   |
| scrollTop    | 返回匹配元素的滚动条的水平位置                   |

**获取设置元素的属性**

查看属性节点：`getAttribute("属性名")；`

设置属性节点：`setAttribute("属性名","新属性值");`

示例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      * {
        font-size: 12px;
        font-family: "Arial", "微软雅黑";
        line-height: 25px;
      }
      input {
        text-align: center;
      }
      div {
        padding: 5px;
        text-align: center;
      }
      div span {
        display: block;
      }
    </style>
  </head>
  <body>
    <input type="button" value="人生海海" onclick="show()" />
    <input type="button" value="向上生长" onclick="showImage()" />
    <div>
      <img
        src=""
        alt=""
        id="image"
        width="150px"
        height="100px"
        onclick="img()"
      /><span></span>
    </div>
    <script>
      function show() {
        var img = document.getElementById("image");
        img.setAttribute(
          "src",
          "sea.jpg"
        );
        img.setAttribute("alt", "人生海海");
        document.getElementsByTagName("span")[0].innerHTML = "人生海海";
      }
      function showImage() {
        var img = document.getElementById("image");
        img.setAttribute(
          "src",
          "grow.jpg"
        );
        img.setAttribute("alt", "向上生长");
        document.getElementsByTagName("span")[0].innerHTML = "向上生长";
      }

      function img() {
        var alt = document.getElementById("image").getAttribute("alt");
        alert(alt);
      }
    </script>
  </body>
</html>
```

效果如下所示：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202031904378.gif)

**创建节点**

`createElement(name)` 创建一个标签名为 name 的新元素节点。

`createTextNode()`创建文本节点

**增添节点**

`insertBefore(A,B)` 把 A 节点插入到 B 节点之前。

`A.appendChild(B)` 把 B 节点追加到 A 节点的末尾。

**删除节点**

`removeChild(node)` 删除指定节点 node。

示例：加载、刷新和替换页面。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      * {
        font-size: 12px;
        font-family: "Arial", "微软雅黑";
        line-height: 25px;
      }
      input {
        text-align: center;
      }
      div {
        padding: 5px;
        text-align: center;
      }
      div span {
        display: block;
      }
      img {
        width: 150px;
        height: 100px;
      }
    </style>
  </head>
  <body>
    <input type="button" value="人生海海" onclick="show()" />
    <input type="button" value="向上生长" onclick="showImage()" />
    <input type="button" value="删除图像" onclick="delImg()" />
    <div></div>
    <script>
      function show() {
        var div = document.getElementsByTagName("div")[0];
        var img = document.createElement("img");
        img.setAttribute(
          "src",
          "sea.jpg"
        );
        img.setAttribute("alt", "人生海海");
        // 将节点放置到树中
        div.appendChild(img);
      }
      function showImage() {
        var div = document.getElementsByTagName("div")[0];
        var img = document.createElement("img");
        img.setAttribute(
          "src",
          "grow.jpg"
        );
        img.setAttribute("alt", "向上生长");
        // 将节点放置到树中
        div.appendChild(img);
      }
      function delImg() {
        var div = document.getElementsByTagName("div")[0];
        if (div.firstChild == null) {
          alert("没有图片,不能删除！");
        } else {
          // 删除第一张图片
          var img = document.getElementsByTagName("img")[0];
          img.parentNode.removeChild(img);
        }
      }
    </script>
  </body>
</html>
```

效果如下所示：

![图片描述](https://doc.shiyanlou.com/courses/uid1347963-20201117-1605602470981)

### DOM 方法

创建 JavaScript 对象最简单的办法就是：使用对象字面量。JavaScript 中 DOM 方法主要是通过一些列的方法访问页面中的 HTML 元素。访问 DOM 树中的节点，通常有两种方式：一种是通过 getElement 系列的方法来获取，一种是根据节点之间的关系获取。

**1. 通过 getElement 系列方式来获取，如下表所示。**

| 方法名                        | 描述                                         |
| ----------------------------- | -------------------------------------------- |
| getElementById(idName)        | 通过 id 号来获取元素，返回一个元素对象。     |
| getElementsByName(name)       | 通过 name 属性获取 id 号，返回元素对象数组。 |
| getElementsByTagName(tagName) | 通过标签名获取元素，返回元素对象数组。       |

**2. 根据节点间的关系获取**

| 名称            | 描述                     |
| --------------- | ------------------------ |
| parentNode      | 返回父节点               |
| childNodes      | 返回子节点               |
| firstNode       | 返回节点的第一个子节点   |
| lastNode        | 返回节点的最后一个子节点 |
| nextSlibing     | 下一个节点               |
| previousSibling | 上一个节点               |

示例：通过 getElement 系列以及节点间的关系获取节点。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      body,
      ul,
      li,
      div,
      section,
      header {
        margin: 0;
        padding: 0;
      }
      ul,
      li {
        list-style: none;
      }
      body {
        font-family: "微软雅黑";
        font-size: 12px;
        line-height: 28px;
      }
      #news {
        border: 1px solid #cccccc;
        width: 280px;
        overflow: hidden;
        margin: 5px auto 0 auto;
      }
      #news header {
        border-bottom: 1px solid #cccccc;
        font-size: 16px;
        line-height: 40px;
        padding-left: 15px;
        color: #666666;
        font-weight: bold;
      }
      #news header a {
        text-decoration: none;
        color: #666666;
        float: right;
        padding-right: 10px;
        font-size: 12px;
      }
      #news ul li {
        padding-left: 10px;
      }
      #news ul li a {
        color: #686868;
        text-decoration: none;
        display: inline-block;
      }
      #news ul li a:hover {
        color: #b02f4a;
      }
    </style>
  </head>
  <body>
    <section id="news">
      <header>今日特价<a href="#">更多 > </a></header>
      <ul>
        <li><a href="#">意大利面￥8.9</a></li>
        <li><a href="#">乐事薯片￥6.5</a></li>
        <li><a href="#">菲律宾进口凤梨￥29.9</a></li>
        <li><a href="#">节能领跑京东先行</a></li>
        <li><a href="#">越南火龙果￥9.9</a></li>
      </ul>
    </section>
    <script>
      var obj = document.getElementById("news");
      var str = obj.lastChild.firstChild.nextSibling.nextSibling.innerHTML;
      alert(str);
    </script>
  </body>
</html>
```

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202031947211.gif)

# 事件驱动编程

## 事件驱动简介

当网页完成加载，输入字段被修改，按钮被点击等事件发生时，通过执行相对应的 JavaScript 代码，给 HTML 元素添加事件处理程序。事件处理程序可用于处理、验证用户输入、用户动作和浏览器动作：当页面加载时应该做的事情，当页面被关闭时应该做的事情，当用户点击按钮时应该被执行的动作，当用户输入数据时应该被验证的内容等。

事件：点击/鼠标操作/键盘操作等发生的一个（动作）行为。

事件源：产生事件的地方，是事件发生的位置。

注册监听：将监听器绑定到事件源上，监听（等待状态）事件的触发（发生）。

监听器：当触发事件时，会产生一个事件对象，该对象将封装好的事件信息传递给事件处理程序。

事件处理程序：响应用户事件的代码（处理函数），呈现效果。

## 常见事件

JavaScript 中常见的事件有以下几种。

焦点事件：

- onfocus：元素获得焦点。
- onblur：元素失去焦点。

页面中包含一个文本框，当你用鼠标点击这个文本框的时候，这个文本框就是获得了焦点，你会发现文本框里会有光标闪动，这时触发了 onfocus 事件，当鼠标离开时触发了 onblur 事件。

点击事件：

- onclick：当用户点击某个对象时调用的事件句柄。
- ondblclick：当用户双击某个对象时调用的事件句柄。

键盘事件：

按下键盘按键会产生所有三种事件，依次是 keydown，keypress，最后是按键释放时候的 keyup。

- onkeydown：某个键盘按键被按下。
- onkeyup：某个键盘按键被松开。
- onkeypress：打印字符。

表单事件：

- onsubmit：确认按钮被点击。
- onreset：重置按钮被点击。
- onchange：域的内容被改变（比如下拉框）。
- onselect：文本被选中。

加载与卸载事件：

- onload：一张页面或一幅图像完成加载（先加载完页面）。
- onunload：用户退出页面，不支持 IE 支持。

## 事件监听与处理

在 JavaScript 中，可以为指定的元素添加或者移除事件处理程序。

**1. 添加指定事件处理程序**

其格式为：

```javascript
addEventListener(event, function, useCapture)
```

event：事件的类型（比如 "click" 或 "mousedown"）。

function：当事件发生时我们需要调用的函数。

useCapture)：布尔值，指定使用事件冒泡还是事件捕获。此参数是可选的。默认值是 false，将使用冒泡传播，如果该值设置为 true，则事件使用捕获传播。

![img](https://gitee.com/Dye/statics/raw/master/img/202202031955097.png)

addEventListener 方法可以给相同元素添加多个事件处理程序，也可以给相同元素添加不同类型的事件。

**2. 移除指定事件处理程序**

其格式为：

```javascript
removeEventListener(event, function)
```

removeEventListener 方法会删除通过 addEventListener() 方法附加的事件处理程序。

示例：添加和移除事件处理程序。

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <button id="addBtn">添加</button>
        <button id="removeBtn" onclick="remove()">移除</button>
        <div></div>
        <script>
            var myBtn= document.getElementById("addBtn");
            myBtn.addEventListener("mouseover", myFun);
            myBtn.addEventListener("click", myFun2);

            function myFun() {
                var div = document.getElementsByTagName("div")[0]
                div.innerHTML=new Date().toLocaleString();
            }
            function myFun2() {
                alert ("执行了函数myFun2...");
            }
            function remove(){
                var reBtn = document.getElementById("addBtn");
                reBtn.removeEventListener("mouseover",myFun);
            }
        </script>
    </body>
</html>

</script>
```

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202031955781.gif)

## Event 详解

Event 对象代表事件的状态，比如键盘按键的状态、鼠标的位置、鼠标按钮的状态。事件通常与函数结合使用，函数不会在事件发生前被执行。

Event 对象的常用的属性如下表所示：

| 方法/属性 | 描述                                                         |
| --------- | ------------------------------------------------------------ |
| button    | 返回当事件被触发时，哪个鼠标按钮被点击。                     |
| clientX   | 鼠标相对于浏览器（这里说的是浏览器的有效区域）x轴的位置      |
| clientY   | 当鼠标事件发生时，鼠标相对于浏览器（这里说的是浏览器的有效区域）y轴的位置 |
| screenX   | 当鼠标事件发生时，鼠标相对于显示器屏幕x轴的位置              |
| screenY   | 当鼠标事件发生时，鼠标相对于显示器屏幕y轴的位置              |
| offsetX   | 当鼠标事件发生时，鼠标相对于事件源x轴的位置                  |
| offsetY   | 当鼠标事件发生时，鼠标相对于事件源y轴的位置                  |

Event 在发生 onkeydown 和 onkeyup 事件的时候，event 对象中的 keyCode 属性会包含一个代码值，与键盘上一个特定的键对应。对数字和字母字符集，keyCode 返回的就是对应的 ASCII 值，不区分大小写。

示例：将方向与键盘中上下左右保持一致。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <script>
      // 将按键值与方向进行一一对应
      function setDirect(value) {
        switch (value) {
          case 37:
            alert("方向为向左");
            break;
          case 38:
            alert("方向为向上");
            break;
          case 39:
            alert("方向为向右");
            break;
          case 40:
            alert("方向为向下");
            break;
        }
      }
      window.onload = function () {
        // 给 body 添加事件 onkeydown
        document.getElementsByTagName("body")[0].onkeydown = function (event) {
          // alert(event.keyCode);// 右 39
          setDirect(event.keyCode);
        };
      };
    </script>
  </body>
</html>
```

效果如下所示：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202061942217.gif)

## 事件处理中的浏览器兼容

创建 JavaScript 对象最简单的办法就是：使用对象字面量。在对事件的处理中，不同浏览器以及不同浏览器版本对事件的处理可能不同。

示例：对不同浏览器的事件处理。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <input type="button" value="按钮" id="btn" />
    <script>
      var btn = document.getElementById("btn");
      function show() {
        alert("hello");
      }
      //btn.addEventListener('click',show,false);
      // 删除事件
      //btn.removeEventListener('click',show,false);
      //IE事件处理程序
      //btn.attachEvent('onclick',show);
      //删除IE 事件
      //btn.detachEvent('onclick',show);
      var eventU = {
        addHandler: function (element, type, handler) {
          if (element.addEventListener) {
            element.addEventListener(type, handler, false);
          } else if (element.attachEvent) {
            //IE
            element.attachEvent("on" + type, handler);
          } else {
            element["on" + click] = handler;
          }
        },
        //删除事件
        removeHandler: function (element, type, handler) {
          if (element.removeEventListener) {
            element.removeEventListener(type, handler);
          } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
          } else {
            element["on" + click] = null;
          }
        },
      };
      eventU.addHandler(btn, "click", show);
      //eventU.removeHandler(btn,'click',show);
    </script>
  </body>
</html>
```

效果如下所示：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202061946007.gif)

# AJAX

## 简介

Ajax 通过在后台与服务器之间交换少量数据的方式，实现网页的异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的局部内容进行更新，例如：我们在网页中观看电影时，如果点击了左下角的“赞”图标，那么“赞”的数量会从 5353 增加到 5354（即局部内容进行了更新），而当前网页并不会被刷新，如下图所示。

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202062021057.jpeg)

**网页中的视频**

而传统的网页（不使用 AJAX）如果需要更新内容，就必须重新加载整个网页。试想如果点击一下“赞”网页就刷新、视频就得从头开始看，肯定是非常不方便的。

AJAX 的应用非常广泛，再如当我们在百度搜索框输入内容时，搜索框会自动查询并显示列表，但搜索框以外的网页不会发生变化，如下图所示。

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202202062021866.jpeg)

**百度搜索框**

还有百度地图、微博等，都大量使用到了 AJAX 技术。

## 使用 JavaScript 实现 AJAX

使用 JavaScript 来实现 Ajax，主要是借助 XMLHttpRequest 对象向服务器发送请求，并获取返回结果。

使用 JavaScript 实现 Ajax，分为 POST 或 GET 两种方式，但大体的步骤都相同，如下：

1. 创建 XMLHttpRequest 对象，即创建一个异步调用对象。
2. 设置并编写回调函数。
3. 初始化 XMLHttpRequest 对象的参数值（若是 POST 方式，还需要设置“请求头”）。
4. 发送 HTTP 请求。

再在回调函数中编写：

1. 获取异步调用返回的数据。
2. 使用 JavaScript 或 jQuery 等实现局部刷新。

### XMLHttpRequest 详解

### XMLHttpRequest 对象的常用方法

```javascript
open(methodName, URL, isAsync);
```

与服务器连接建立。methodName 指定请求的方法名；URL 指定请求地址；isAsync 是一个 boolean 值，代表是否采用异步方式（默认 true；若无特殊需求，此值一般都填 true）。

```javascript
send(content);
```

发送 HTTP 请求。content 是可选项，用来指定请求参数，将请求参数作为请求体的一部分一起发送给服务器。通常只在 POST 方式下才使用 content 参数（GET 请求方式不携带请求体）。

```javascript
setRequestHeader(header, value);
```

在 HTTP 请求头中设置 key/value 对：

- 若为 GET 请求方式：则不用设置。

- 若为 POST 方式，有以下两种情况：

  - 当请求中包含文件上传元素时，设置为：

  ```javascript
  XMLHttpRequest.setRequestHeader("Content-Type", "mulipart/form-data");
  ```

  - 当请求中不包含文件上传元素时，设置为：

  ```javascript
  XMLHttpRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  ```

### XMLHttpRequest 对象的常用属性

**readystate**

readystate 表示 XMLHttpRequest 对象发送的 HTTP 请求状态，共有五种状态，如下表所示。

| 状态值 | 简介                                                         |
| ------ | ------------------------------------------------------------ |
| 0      | 表示 XMLHttpRequest 对象没有初始化。                         |
| 1      | 表示 XMLHttpRequest 对象开始发送请求：已经执行了 open() 方法并完成了相关资源的准备。 |
| 2      | 表示 XMLHttpRequest 对象已将请求发送完毕：已经执行了 send() 方法来发送请求，但是还没有收到响应。 |
| 3      | 表示 XMLHttpRequest 对象开始读取响应信息：已经接收到 HTTP 响应的头部信息，但是还没有将响应体接收完毕。 |
| 4      | 表示 XMLHttpRequest 对象将响应信息全部读取完毕。             |

**status**

status 表示 HTTP 响应中的状态码，各状态码的含义如下表所示。

| 状态码  | 含义                                     |
| ------- | ---------------------------------------- |
| **200** | 服务器正常响应。                         |
| **400** | 无法找到请求的资源。                     |
| **403** | 没有访问权限。                           |
| **404** | 访问的资源不存在。                       |
| **500** | 服务器内部错误，很可能是服务器代码有错。 |

可以发现，只有当状态码为 200 时才表示响应成功；否则，说明 HTTP 响应不正常。

**onreadystatechange**

指定 XMLHttpRequest 对象的回调函数。每当 readyState 的属性值改变时，此回调函数就会被调用一次。

**responseText**

从服务器端返回的 string 格式的响应内容。

**responseXML**

从服务器端返回的 XML 格式的数据，可以直接被当作 DOM 对象使用。

## JSON 简介

JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。在使用 Ajax 时，我们经常会使用 JSON 来传递数据。本小节，将重点学习 JSON 对象、JSON 数组以及如何在 Ajax 中传递 JSON 数据。

**JSON 对象**

定义 JSON 对象：

```javascript
var JSON对象名 = {key:value ,  key:value , … , key:value};
```

在 JavaScript 中，JSON 对象是用大括号括起来，包含了多组属性。每个属性名和属性值之间用冒号隔开，多个属性之间用逗号隔开，并且属性名必须是字符串，如下：

```javascript
var student = { name: "张三", age: 23 };
var stu = { name: "张三" };
```

使用 JSON 对象：

可以通过 `JSON对象名.key` 来获取对应的 value 值。

如下示例：

```javascript
…
var student = {"name":"张三","age":23};
var name = student.name;
var age = student.age ;
alert("姓名："+name+",年龄："+age);
…
```

**JSON 数组**

定义 JSON 数组：

```javascript
var JSON数组名 = [JSON对象, JSON对象,…, JSON对象] ;
```

在 JavaScript 中，JSON 数组是用中括号括起来，包含了多个 JSON 对象，多个对象之间用逗号隔开，如下：

```javascript
var students = [
  { name: "张三", age: 23 },
  { name: "李四", age: 24 },
];
```

使用 JSON 数组：

可以通过 `JSON对象名[索引].key` 获取对应的 value 值。

示例如下：

```javascript
…
var students = [{"name":"张三","age":23},
                   {"name":"李四","age":24}];
alert(students[1].name+","+students[1].age);
…
```