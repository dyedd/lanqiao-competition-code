# JavaScript BOM 及 DOM 编程

## Js的组成

![image-20220322171114857](/assets/web/202203221711959.png)



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

## BOM

BOM（Browser Object Model）即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是 window。

- BOM 由一系列相关的对象构成，并且每个对象都提供了很多方法与属性
- BOM 缺乏标准，JavaScript 语法的标准化组织是 ECMA, DOM 的标准化组织是 W3C, BOM最初是Netscape 浏览器标准的一部分

| DOM                                | BOM                                              |
| ---------------------------------- | ------------------------------------------------ |
| 文档对象模型                       | 浏览器对象模型                                   |
| DOM 就是把 文档 当作一个对象来看待 | 把 浏览器当作一个对象来看待                      |
| DOM 的顶级对象是 document          | BOM 的顶级对象是 window                          |
| DOM 主要学习的是操作页面元素       | BOM 学习的是浏览器窗口交互的一些对象             |
| DOM 是 W3C 标准规范                | BOM 是浏览器厂商在各自浏览器上定义的，兼容性较差 |

### BOM的构成

BOM 比 DOM 更大，它包含 DOM。

![image-20220326165612276](/assets/web/202203281016156.png)

**window** **对象**是浏览器的顶级**对象**，它具有双重角色。

1. 它是 JS 访问浏览器窗口的一个接口。

2. 它是一个全局对象。定义在全局作用域中的变量、函数都会变成 window 对象的属性和方法。

在调用的时候可以省略 window，前面学习的对话框都属于 window 对象方法，如 alert()、prompt() 等。

**注意：**window下的一个特殊属性 window.name

```js
// window.document.querySelector()
// 定义在全局作用域中的变量会变成window对象的属性
var num = 10;
console.log(num);
console.log(window.num);

// 定义在全局作用域中的函数会变成window对象的方法
function fn() {
    console.log(11);

}
fn();
window.fn();
// alert(11);
// window.alert(11)
console.dir(window);
// var name = 10;
//不要用这个name变量,window下有一个特殊属性window.name
console.log(window.name);
```

### window 对象的常见事件

`window.onload`是窗口（页面）加载事件，当文档内容完全加载完成会触发该事件（包括图像，脚本文件，CSS文件等），就调用的处理函数。

```js
window.onload = function(){
    
};

// 或者
window.addEventListener("load",function(){});

```

注意：

- 有了window.onload就可以把JS代码写到页面元素的上方
- 因为onload是等页面内容全部加载完毕，再去执行处理函数
- window.onload 传统注册事件方式，只能写一次
- 如果有多个，会以最后一个window.onload为准
- **如果使用addEventListener 则没有限制**

```js
document.addEventListener('DOMContentLoaded',function(){})
```

接收两个参数：

- **DOMCountentLoaded事件触发时，仅当DOM加载完成，不包括样式表，图片，flash等等**

- 如果页面的图片很多的话, 从用户访问到onload触发可能需要较长的时间,交互效果就不能实现，必然影响用户的体验，此时用 DOMContentLoaded事件比较合适。

**区别**

- `load`等页面内容全部加载完毕，包括页面dom元素，图片，flash，css等
- `DOMContentLoaded` 是DOM加载完毕，不包含图片 flash css 等就可以执行，加载速度比load更快一些

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script>
        // window.onload = function() {
        //     var btn = document.querySelector('button');
        //     btn.addEventListener('click', function() {
        //         alert('点击我');
        //     })
        // }
        // window.onload = function() {
        //     alert(22);
        // }
        window.addEventListener('load', function() {
            var btn = document.querySelector('button');
            btn.addEventListener('click', function() {
                alert('点击我');
            })
        })
        window.addEventListener('load', function() {

            alert(22);
        })
        document.addEventListener('DOMContentLoaded', function() {
                alert(33);
            })
            // load 等页面内容全部加载完毕，包含页面dom元素 图片 flash  css 等等
            // DOMContentLoaded 是DOM 加载完毕，不包含图片 falsh css 等就可以执行 加载速度比 load更快一些
        // 先33，后22，因为第一个要加载dom完之后，第二个就先进队列
    </script>
</head>

<body>

    <button>点击</button>

</body>

</html>
```

### 调整窗口大小事件

`window.onresize` 是调整窗口大小加载事件，当触发时就调用的处理函数

```js
window.onresize = function() {}

// 或者
window.addEventListener('resize',function(){});
```

- 只要窗口大小发生像素变化，就会触发这个事件
- 我们经常利用这个事件完成响应式布局。`window.innerWidth` 当前屏幕的宽度

```html
<body>
    <script>
        window.addEventListener('load', function() {
            var div = document.querySelector('div');
            window.addEventListener('resize', function() {
                console.log(window.innerWidth);

                console.log('变化了');
                if (window.innerWidth <= 800) {
                    div.style.display = 'none';
                } else {
                    div.style.display = 'block';
                }

            })
        })
    </script>
    <div></div>
</body>
```

### 定时器

window 对象给我们提供了两个定时器

- `setTimeout()`
- `setInterval()`

#### setTimeout()定时器

`setTimeout()`方法用于设置一个定时器，该定时器在定时器到期后执行调用函数。

```js
window.setTimeout(调用函数,[延迟的毫秒数]);
```

注意：

- window可以省略

- 这个调用函数

  - 可以直接写函数
  - 或者写函数名
  - 或者采取字符串 ‘函数名()’ （不推荐）

- 延迟的毫秒数省略默认是0，如果写，必须是毫秒

- 因为定时器可能有很多，所以我们经常给定时器赋值一个标识符

- setTimeout() 这个调用函数我们也称为回调函数 callback

- 普通函数是按照代码顺序直接调用，而这个函数，需要等待事件，事件到了才会去调用这个函数，因此称为回调函数。

- 简单理解： 回调，就是回头调用的意思。上一件事干完，再回头再调用这个函数。

  以前我们讲的  element.onclick = function(){}  或者 element.addEventListener(“click”, fn);  里面的 函数也是回调函数。

```js
// 1. setTimeout 
    // 语法规范：  window.setTimeout(调用函数, 延时时间);
    // 1. 这个window在调用的时候可以省略
    // 2. 这个延时时间单位是毫秒 但是可以省略，如果省略默认的是0
    // 3. 这个调用函数可以直接写函数 还可以写 函数名 还有一个写法 '函数名()'
    // 4. 页面中可能有很多的定时器，我们经常给定时器加标识符 （名字)
    // setTimeout(function() {
    //     console.log('时间到了');

    // }, 2000);
    function callback() {
        console.log('爆炸了');

    }
    var timer1 = setTimeout(callback, 3000);
    var timer2 = setTimeout(callback, 5000);
    // setTimeout('callback()', 3000); // 我们不提倡这个写法
```

#### clearTimeout()停止定时器

- `clearTimeout()`方法取消了先前通过调用 `setTimeout()`建立的定时器

```js
window.clearTimeout(timeoutID)
```

**注意**：

- `window`可以省略
- 里面的参数就是定时器的标识符

```js
<body>
    <button>点击停止定时器</button>
    <script>
        var btn = document.querySelector('button');
        var timer = setTimeout(function() {
            console.log('爆炸了');
        }, 5000);
        btn.addEventListener('click', function() {
            clearTimeout(timer);
        })
    </script>
</body>
```

#### setInterval()定时器

- `setInterval()`方法重复调用一个函数，每隔这个时间，就去调用一次回调函数

```js
window.setInterval(回调函数,[间隔的毫秒数]);
```

- **第一次执行也是间隔毫秒数之后执行**，之后每隔毫秒数就执行一次
- 第一次执行也是间隔毫秒数，因此刚刷新页面会有空白
- 最好采取封装函数的方式， 这样可以先调用一次这个函数，防止刚开始刷新页面有空白问题

```html
<body>
    <script>
        // 1. setInterval 
        // 语法规范：  window.setInterval(调用函数, 延时时间);
        setInterval(function() {
            console.log('继续输出');

        }, 1000);
        // 2. setTimeout  延时时间到了，就去调用这个回调函数，只调用一次 就结束了这个定时器
        // 3. setInterval  每隔这个延时时间，就去调用这个回调函数，会调用很多次，重复调用这个函数
    </script>
</body>
```

#### clearInterval()停止定时器

- `clearInterval ( )` 方法取消了先前通过调用 `setInterval()` 建立的定时器

```html
<body>
    <button class="begin">开启定时器</button>
    <button class="stop">停止定时器</button>
    <script>
        var begin = document.querySelector('.begin');
        var stop = document.querySelector('.stop');
        var timer = null; // 全局变量  null是一个空对象
        begin.addEventListener('click', function() {
            timer = setInterval(function() {
                console.log('ni hao ma');

            }, 1000);
        })
        stop.addEventListener('click', function() {
            clearInterval(timer);
        })
    </script>
</body>
```

### this指向

- `this`的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定`this`到底指向谁

现阶段，我们先了解一下几个this指向:

- 全局作用域或者普通函数中`this`指向全局对象`window`(注意定时器里面的this指向window)
- 方法调用中谁调用`this`指向谁
- 构造函数中`this`指向构造函数实例

```html
<body>
    <button>点击</button>
    <script>
        // this 指向问题 一般情况下this的最终指向的是那个调用它的对象

        // 1. 全局作用域或者普通函数中this指向全局对象window（ 注意定时器里面的this指向window）
        console.log(this);

        function fn() {
            console.log(this);

        }
        window.fn();
        window.setTimeout(function() {
            console.log(this);

        }, 1000);
        // 2. 方法调用中谁调用this指向谁
        var o = {
            sayHi: function() {
                console.log(this); // this指向的是 o 这个对象

            }
        }
        o.sayHi();
        var btn = document.querySelector('button');
        // btn.onclick = function() {
        //     console.log(this); // this指向的是btn这个按钮对象

        // }
        btn.addEventListener('click', function() {
                console.log(this); // this指向的是btn这个按钮对象

            })
            // 3. 构造函数中this指向构造函数的实例
        function Fun() {
            console.log(this); // this 指向的是fun 实例对象

        }
        var fun = new Fun();
    </script>
</body>
```

### JS执行机制

#### JS是单线程

- JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。这是因为 Javascript 这门脚本语言诞生的使命所致——JavaScript 是为处理页面中用户的交互，以及操作 DOM 而诞生的。比如我们对某个 DOM 元素进行添加和删除操作，不能同时进行。 应该先进行添加，之后再删除。
- 单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。这样所导致的问题是： 如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。

以下代码执行的结果是什么？

```js
console.log(1);
setTimeout(function() {
    console.log(3);
},1000);
console.log(2);
// 如果按照上面流程，就会出现1，（过了1秒）3，2的结果
```

```js
console.log(1);
setTimeout(function() {
    console.log(3);
},0);
console.log(2);
// 1 3 2
```

#### 同步和异步

为了解决这个问题，利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程。于是，JS 中出现了同步和异步。

**同步**

前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的。比如做饭的同步做法：我们要烧水煮饭，等水开了（10分钟之后），再去切菜，炒菜。

**异步**

你在做一件事情时，因为这件事情会花费很长时间，在做这件事的同时，你还可以去处理其他事情。比如做饭的异步做法，我们在烧水的同时，利用这10分钟，去切菜，炒菜。

***他们****的本质区别： 这条流水线上各个流程的执行顺序不同。***

**同步任务**

同步任务都在主线程上执行，形成一个**执行栈**。

![image-20220326194001744](/assets/web/202203281016449.png)

**异步任务**

JS 的异步是通过回调函数实现的。

一般而言，异步任务有以下三种类型:

1、普通事件，如 click、resize 等

2、资源加载，如 load、error 等

3、定时器，包括 setInterval、setTimeout 等

异步任务相关回调函数添加到**任务队列**中（任务队列也称为消息队列）。

![image-20220326194013558](/assets/web/202203261940662.png)

#### **JS** **执行机制**

1. 先执行执行栈中的同步任务。

2. 异步任务（回调函数）放入任务队列中。

3. 一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行。

![image-20220326194116168](/assets/web/202203281016780.png)

此时再来看我们刚才的问题：

```js
console.log(1);
setTimeout(function() {
    console.log(3);
},1000);
console.log(2);
// 1,2,3
```

```js
console.log(1);
setTimeout(function() {
    console.log(3);
},0);
console.log(2);
// 1,2,3
```

```js
// 3. 第三个问题
console.log(1);
document.onclick = function() {
    console.log('click');
}
console.log(2);
setTimeout(function() {
    console.log(3)
}, 3000)
```

![image-20220326194310748](/assets/web/202203281016050.png)

> 由于主线程不断的重复获得任务、执行任务、再获取任务、再执行，所以这种机制被称为事件循环（ event loop）。

### location对象

- window 对象给我们提供了一个 `location`属性用于获取或者设置窗体的url，并且可以解析url。因为这个属性返回的是一个对象，所以我们将这个属性也称为 location 对象。

#### url

**统一资源定位符 (Uniform Resource Locator, URL)** 是互联网上标准资源的地址。互联网上的每个文件都有一个唯一的 URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它。

URL 的一般语法格式为：

```
 protocol://host[:port]/path/[?query]#fragment

 http://www.itcast.cn/index.html?name=andy&age=18#link
```

| 组成     | 说明                                     |
| -------- | ---------------------------------------- |
| protocol | 通信协议 常用的http,ftp,maito等          |
| host     | 主机(域名) dyedd.cn                      |
| port     | 端口号，可选                             |
| path     | 路径 由零或多个`'/'`符号隔开的字符串     |
| query    | 参数 以键值对的形式，通过`&`符号分隔开来 |
| fragment | 片段 `#`后面内容 常见于链接 锚点         |

#### location对象属性

| location对象属性  | 返回值                            |
| ----------------- | --------------------------------- |
| location.href     | 获取或者设置整个URL               |
| location.host     | 返回主机（域名）www.baidu.com     |
| location.port     | 返回端口号，如果未写返回空字符串  |
| location.pathname | 返回路径                          |
| location.search   | 返回参数                          |
| location.hash     | 返回片段 #后面内容常见于链接 锚点 |

重点记住： `href`和`search`

需求：5s之后跳转页面

```html
<body>
    <button>点击</button>
    <div></div>
    <script>
        var btn = document.querySelector('button');
        var div = document.querySelector('div');
        var timer = 5;
        setInterval(function() {
            if (timer == 0) {
                location.href = 'http://dyedd.cn';
            } else {
                div.innerHTML = '您将在' + timer + '秒钟之后跳转到首页';
                timer--;
            }

        }, 1000);
    </script>
</body>
```

#### **location对象方法**

| location对象方法   | 返回值                                                       |
| ------------------ | ------------------------------------------------------------ |
| location.assign()  | 跟href一样，可以跳转页面（也称为重定向页面）                 |
| location.replace() | 替换当前页面，因为不记录历史，所以不能后退页面               |
| location.reload()  | 重新加载页面，相当于刷新按钮或者 f5 ，如果参数为true 强制刷新 ctrl+f5 |

```html
<body>
    <button>点击</button>
    <script>
        var btn = document.querySelector('button');
        btn.addEventListener('click', function() {
            // 记录浏览历史，所以可以实现后退功能
            // location.assign('http://www.dyedd.cn');
            // 不记录浏览历史，所以不可以实现后退功能
            // location.replace('http://www.dyedd.cn');
            location.reload(true);
        })
    </script>
</body>
```

#### 获取URL参数

我们简单写一个登录框，点击登录跳转到 index.html

```html
<body>
    <form action="index.html">
        用户名： <input type="text" name="uname">
        <input type="submit" value="登录">
    </form>
</body>
```

接下来我们写 index.html

```html
<body>
    <div></div>
    <script>
        console.log(location.search); // ?uname=andy
        // 1.先去掉？  substr('起始的位置'，截取几个字符);
        var params = location.search.substr(1); // uname=andy
        console.log(params);
        // 2. 利用=把字符串分割为数组 split('=');
        var arr = params.split('=');
        console.log(arr); // ["uname", "ANDY"]
        var div = document.querySelector('div');
        // 3.把数据写入div中
        div.innerHTML = arr[1] + '欢迎您';
    </script>
</body>
```

### navigator对象

- navigator 对象包含有关浏览器的信息，它有很多属性
- 我们常用的是`userAgent`,该属性可以返回由客户机发送服务器的`user-agent`头部的值

下面前端代码可以判断用户是用哪个终端打开页面的，如果是用 PC 打开的，我们就跳转到 PC 端的页面，如果是用手机打开的，就跳转到手机端页面

```js
if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    window.location.href = "";     //手机
 } else {
    window.location.href = "";     //电脑
 }
```

### history对象

- window 对象给我们提供了一个 history 对象，与浏览器历史记录进行交互
- 该对象包含用户（在浏览器窗口中）访问过的 URL。

| history对象方法 | 作用                                                         |
| --------------- | ------------------------------------------------------------ |
| back()          | 可以后退功能                                                 |
| forward()       | 前进功能                                                     |
| go(参数)        | 前进后退功能，参数如果是 1 前进1个页面 如果是 -1 后退1个页面 |

```html
<body>
    <a href="list.html">点击我去往列表页</a>
    <button>前进</button>
    <script>
        var btn = document.querySelector('button');
        btn.addEventListener('click', function() {
            // history.forward();
            history.go(1);
        })
    </script>
</body>
```

## BOM 操作

浏览器对象模型（Browser Object Model，BOM）提供了 JavaScript 与浏览器窗口进行交互的对象，使用 BOM 可以访问和操控浏览器窗口。软件开发人员可以通过 BOM 实现移动窗口、更改状态栏等不与页面内容发生直接联系的操作。BOM 是一个分层结构，如图所示。

![图片描述](/assets/web/202202031404644.jpeg)



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

![图片描述](/assets/web/202202031418954.gif)

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

![图片描述](/assets/web/202202031418872.gif)

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

![image-20220322190813731](/assets/web/202203281016280.png)

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

![图片描述](/assets/web/202202031514399.png)

上面这个示例的文档由 `<html>`，`<head>`，`<meta>`，`<title>`，`<body>`，`<img>`，`<h1>`，`<p>` 以及文本节点组成。它们之间的结构如下图所示。

![图片描述](/assets/web/202202031514088.jpeg)

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

![image-20220322201308799](/assets/web/202203222013853.png)

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
- `this.checked `它可以得到当前复选框的选中状态如果是true 就是选中，如果是false 就是未选中*

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

我们可以通过 JS 修改元素的大小、颜色、位置等样式。

一般采用以下方式，当修改得样式太多了，最好使用类名

1. element.style   行内样式操作
2. element.className 类名样式操作

> 1. JS 里面的样式采取驼峰命名法 比如 fontSize、 backgroundColor
>
> 2. JS 修改 style 样式操作，产生的是行内样式，CSS 权重比较高
> 3. 如果样式修改较多，可以采取操作类名方式更改元素样式
> 4. class 因为是个保留字，因此使用`className`来操作元素类名属性
> 5. className 会直接更改元素的类名，会覆盖原先的类名

实例一：

```js
// 1. 获取元素
var div = document.querySelector('div');
// 2. 注册事件 处理程序
div.onclick = function() {
    // div.style里面的属性 采取驼峰命名法 
    this.style.backgroundColor = 'purple';
    this.style.width = '250px';
}
```

实例二：

```js
// 1. 使用 element.style 获得修改元素样式  如果样式比较少 或者 功能简单的情况下使用
var test = document.querySelector('div');
test.onclick = function() {
    // this.style.backgroundColor = 'purple';
    // this.style.color = '#fff';
    // this.style.fontSize = '25px';
    // this.style.marginTop = '100px';
    // 让我们当前元素的类名改为了 change

    // 2. 我们可以通过 修改元素的className更改元素的样式 适合于样式较多或者功能复杂的情况
    // 3. 如果想要保留原先的类名，我们可以这么做 多类名选择器
    // this.className = 'change';
    this.className = 'first change';
}
```

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

##### classList属性

classList属性是HTML5新增的一个属性，返回元素的类名。但要ie 10+才支持。

该属性用于在元素中添加、移除以及切换CSS类，有如下方法：

| 方法                      | 说明                                                        |
| ------------------------- | ----------------------------------------------------------- |
| e.classList.add 添加类    | 在元素中追加指定的类，且不会像className那样覆盖掉原来的类名 |
| e.classList.remove 移除类 | 移除元素中指定的类                                          |
| e.classList.toggle 切换类 | 自动判断元素中是否有指定的类名                              |

```html
<script>
    // classList 返回元素类名
    var div = document.querySelector('div');
    console.log(div.classList);
    // 1.添加类名 是在后面追加类名而不会像className那样覆盖掉原来的类名
    div.classList.add('three');
    // 2.移除类名
    div.classList.remove('one');
    // 3.切换类名 自动判断元素是否有指定的类名
    var btn = document.querySelector('button');
    btn.addEventListener('click', function () {
        document.body.classList.toggle('bg');
    })
</script>
```



##### 排他思想

如果有同一组元素，我们相要某一个元素实现某种样式，需要用到循环的排他思想算法：

1. 所有元素全部清除样式（干掉其他人）
2. 给当前元素设置样式 （留下我自己）
3. 注意顺序不能颠倒，首先干掉其他人，再设置自己

```js
<body>
    <button>按钮1</button>
    <button>按钮2</button>
    <button>按钮3</button>
    <button>按钮4</button>
    <button>按钮5</button>
    <script>
        // 1. 获取所有按钮元素
        var btns = document.getElementsByTagName('button');
        // btns得到的是伪数组  里面的每一个元素 btns[i]
        for (var i = 0; i < btns.length; i++) {
            btns[i].onclick = function() {
                // (1) 我们先把所有的按钮背景颜色去掉  干掉所有人
                for (var i = 0; i < btns.length; i++) {
                    btns[i].style.backgroundColor = '';
                }
                // (2) 然后才让当前的元素背景颜色为pink 留下我自己
                this.style.backgroundColor = 'pink';

            }
        }
        //2. 首先先排除其他人，然后才设置自己的样式 这种排除其他人的思想我们成为排他思想
    </script>
</body>

```

![在这里插入图片描述](/assets/web/202203231519356.gif)

##### 自定义属性

###### 获取属性值

- 获取内置属性值(元素本身自带的属性)

```js
element.属性;
```

- 获取自定义的属性

```js
element.getAttribute('属性');
```

###### 设置属性值

- 设置内置属性值

```js
element.属性 = '值';
```

- 设置自定义属性（标准）

```js
element.setAttribute('属性','值');
```

###### 移除属性

```js
element.removeAttribute('属性');
```

```html
<div id="demo" index="1" class="nav"></div>
    <script>
        var div = document.querySelector('div');
        // 1. 获取元素的属性值
        // (1) element.属性
        console.log(div.id);
        //(2) element.getAttribute('属性')  get得到获取 attribute 属性的意思 我们程序员自己添加的属性我们称为自定义属性 index
        console.log(div.getAttribute('id'));
        console.log(div.getAttribute('index'));
        // 2. 设置元素属性值
        // (1) element.属性= '值'
        div.id = 'test';
        div.className = 'navs';
        // (2) element.setAttribute('属性', '值');  主要针对于自定义属性
        div.setAttribute('index', 2);
        div.setAttribute('class', 'footer'); // class 特殊  这里面写的就是class 不是className
        // 3 移除属性 removeAttribute(属性)    
        div.removeAttribute('index');
    </script>
```



实例：tab选项卡：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        li {
            list-style-type: none;
        }
        
        .tab {
            width: 978px;
            margin: 100px auto;
        }
        
        .tab_list {
            height: 39px;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
        }
        
        .tab_list li {
            float: left;
            height: 39px;
            line-height: 39px;
            padding: 0 20px;
            text-align: center;
            cursor: pointer;
        }
        
        .tab_list .current {
            background-color: #c81623;
            color: #fff;
        }
        
        .item_info {
            padding: 20px 0 0 20px;
        }
        
        .item {
            display: none;
        }
    </style>
</head>

<body>
    <div class="tab">
        <div class="tab_list">
            <ul>
                <li class="current">商品介绍</li>
                <li>规格与包装</li>
                <li>售后保障</li>
                <li>商品评价（50000）</li>
                <li>手机社区</li>
            </ul>
        </div>
        <div class="tab_con">
            <div class="item" style="display: block;">
                商品介绍模块内容
            </div>
            <div class="item">
                规格与包装模块内容
            </div>
            <div class="item">
                售后保障模块内容
            </div>
            <div class="item">
                商品评价（50000）模块内容
            </div>
            <div class="item">
                手机社区模块内容
            </div>

        </div>
    </div>
    <script>
        // 获取元素
        var tab_list = document.querySelector('.tab_list');
        var lis = tab_list.querySelectorAll('li');
        var items = document.querySelectorAll('.item');
        // for循环绑定点击事件
        for (var i = 0; i < lis.length; i++) {
            // 开始给5个小li 设置索引号 
            lis[i].setAttribute('index', i);
            lis[i].onclick = function() {
                // 1. 上的模块选项卡，点击某一个，当前这一个底色会是红色，其余不变（排他思想） 修改类名的方式

                // 干掉所有人 其余的li清除 class 这个类
                在这里，为什么又能i，因为在里面的函数作用域里，不会影响到外面的i
                for (var i = 0; i < lis.length; i++) {
                    lis[i].className = '';
                }
                // 留下我自己 
                this.className = 'current';
                // 2. 下面的显示内容模块
                var index = this.getAttribute('index');
                console.log(index);
                // 干掉所有人 让其余的item 这些div 隐藏
                for (var i = 0; i < items.length; i++) {
                    items[i].style.display = 'none';
                }
                // 留下我自己 让对应的item 显示出来
                items[index].style.display = 'block';
            }
        }
    </script>
</body>

</html>
```

##### H5自定义属性

自定义属性目的：

- 保存并保存数据，有些数据可以保存到页面中而不用保存到数据库中
- 有些自定义属性很容易引起歧义，不容易判断到底是内置属性还是自定义的，所以H5有了规定

###### 设置H5自定义属性

H5规定自定义属性 `data-`开头作为属性名并赋值

```html
<div data-index = "1"></>
// 或者使用JavaScript设置
div.setAttribute('data-index',1);
```

###### 获取H5自定义属性

- 兼容性获取 `element.getAttribute('data-index')`
- H5新增的：`element.dataset.index` 或`element.dataset['index']` IE11才开始支持

```html
<body>
    <div getTime="20" data-index="2" data-list-name="andy"></div>
    <script>
        var div = document.querySelector('div');
        console.log(div.getAttribute('getTime'));
        div.setAttribute('data-time', 20);
        console.log(div.getAttribute('data-index'));
        console.log(div.getAttribute('data-list-name'));
        // h5新增的获取自定义属性的方法 它只能获取data-开头的
        // dataset 是一个集合里面存放了所有以data开头的自定义属性
        console.log(div.dataset);
        console.log(div.dataset.index);
        console.log(div.dataset['index']);
        // 如果自定义属性里面有多个-链接的单词，我们获取的时候采取 驼峰命名法
        console.log(div.dataset.listName);
        console.log(div.dataset['listName']);
    </script>
</body>

```

#### 节点操作

获取元素通常使用两种方式：

**1.利用DOM提供的方法获取元素**

- document.getElementById()
- document.getElementsByTagName()
- document.querySelector 等
- 逻辑性不强、繁琐

2.**利用节点层级关系获取元素**

- 利用父子兄节点关系获取元素
- 逻辑性强， 但是兼容性稍差

这两种方式都可以获取元素节点，我们后面都会使用，但是节点操作更简单

##### 节点概述

网页中的所有内容都是节点（标签、属性、文本、注释等），在DOM 中，节点使用 node 来表示。

HTML DOM 树中的所有节点均可通过 JavaScript 进行访问，所有 HTML 元素（节点）均可被修改，也可以创建或删除。

![](/assets/web/202203281016845.png)



一般的，节点至少拥有nodeType（节点类型）、nodeName（节点名称）和nodeValue（节点值）这三个基本属性。

- 元素节点：nodeType 为1
- 属性节点：nodeType 为2
- 文本节点：nodeType 为3(文本节点包括文字、空格、换行等)

我们在实际开发中，节点操作主要操作的是**元素节点**

利用 DOM 树可以把节点划分为不同的层级关系，常见的是**父子兄层级关系**。

##### 父级节点

```js
node.parentNode
```

- `parentNode`属性可以返回某节点的父结点，注意是最近的一个父结点
- 如果指定的节点没有父结点则返回null

```html
<body>
    <!-- 节点的优点 -->
    <div>我是div</div>
    <span>我是span</span>
    <ul>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
    </ul>
    <div class="demo">
        <div class="box">
            <span class="erweima">×</span>
        </div>
    </div>

    <script>
        // 1. 父节点 parentNode
        var erweima = document.querySelector('.erweima');
        // var box = document.querySelector('.box');
        // 得到的是离元素最近的父级节点(亲爸爸) 如果找不到父节点就返回为 null
        console.log(erweima.parentNode);
    </script>
</body>
```



##### 子节点

`parentNode.childNodes      (标准)`

- `parentNode.childNodes` 返回包含指定节点的子节点的集合，该集合为即时更新的集合
- 返回值包含了所有的子结点，包括元素节点，文本节点等
- 如果只想要获得里面的元素节点，则需要专门处理。所以我们一般不提倡使用`childNodes`

`parentNode.children     (非标准)`

- `parentNode.children` 是一个只读属性，返回所有的子元素节点
- 它只返回子元素节点，其余节点不返回 （**这个是我们重点掌握的**）
- 虽然 children 是一个非标准，但是得到了各个浏览器的支持，因此我们可以放心使用

```html
<body>
    <ul>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
    </ul>
    <ol>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
    </ol>
    <script>
        // DOM 提供的方法（API）获取
        var ul = document.querySelector('ul');
        var lis = ul.querySelectorAll('li');
        // 1. 子节点  childNodes 所有的子节点 包含 元素节点 文本节点等等
        console.log(ul.childNodes);
        console.log(ul.childNodes[0].nodeType);
        console.log(ul.childNodes[1].nodeType);
        // 2. children 获取所有的子元素节点 也是我们实际开发常用的
        console.log(ul.children);
    </script>
</body>
```

**第一个子节点**

`parentNode.firstChild`

- `firstChild` 返回第一个子节点，找不到则返回null
- 同样，也是包含所有的节点

兼容性：

`parentNode.firstElementChild`

- `firstElementChild` 返回第一个子节点，找不到则返回null
- 有兼容性问题，IE9以上才支持

**最后一个子节点**

`parentNode.lastChild`

- `lastChild` 返回最后一个子节点，找不到则返回null
- 同样，也是包含所有的节点

兼容性：

`parentNode.lastElementChild`

- `lastElementChild` 返回最后一个子节点，找不到则返回null
- 有兼容性问题，IE9以上才支持

###### 解决方案

实际开发中，firstChild 和 lastChild 包含其他节点，操作不方便，而 firstElementChild 和 lastElementChild 又有兼容性问题，那么我们如何获取第一个子元素节点或最后一个子元素节点呢？

- 如果想要第一个子元素节点，可以使用 `parentNode.chilren[0]`
- 如果想要最后一个子元素节点，可以使用`parentNode.chilren[parentNode.chilren.length - 1]` *数组元素个数减1 就是最后一个元素的索引号*

```html
<body>
    <ol>
        <li>我是li1</li>
        <li>我是li2</li>
        <li>我是li3</li>
        <li>我是li4</li>
        <li>我是li5</li>
    </ol>
    <script>
        var ol = document.querySelector('ol');
        // 1. firstChild 第一个子节点 不管是文本节点还是元素节点
        console.log(ol.firstChild);// 返回的是文本结点 #text(第一个换行结点)
        console.log(ol.lastChild); // 返回的是文本结点 #text(最后一个换行结点)
        // 2. firstElementChild 返回第一个子元素节点 ie9才支持
        console.log(ol.firstElementChild);
        console.log(ol.lastElementChild);
        // 3. 实际开发的写法  既没有兼容性问题又返回第一个子元素
        console.log(ol.children[0]);			//第一个子元素节点
        console.log(ol.children[ol.children.length - 1]);//最后一个子元素节点
    </script>
</body>
```

![image-20220323191746423](/assets/web/202203281016952.png)

##### 兄弟节点

###### 下一个兄弟节点

`node.nextSibling`

- `nextSibling` 返回当前元素的下一个兄弟元素节点，找不到则返回null
- 同样，也是包含所有的节点

兼容性：

`node.nextElementSibling`

- `nextElementSibling` 返回当前元素下一个兄弟元素节点，找不到则返回null
- 有兼容性问题，IE9才支持

###### 上一个兄弟节点

`node.previousSibling`

- `previousSibling` 返回当前元素上一个兄弟元素节点，找不到则返回null
- 同样，也是包含所有的节点\

兼容性：

`node.previousElementSibling`

- `previousElementSibling` 返回当前元素上一个兄弟元素节点，找不到则返回null
- 有兼容性问题，IE9才支持

实例：

```html
<body>
    <div>我是div</div>
    <span>我是span</span>
    <script>
        var div = document.querySelector('div');
        // 1.nextSibling 下一个兄弟节点 包含元素节点或者 文本节点等等
        console.log(div.nextSibling);		// #text
        console.log(div.previousSibling);	// #text
        // 2. nextElementSibling 得到下一个兄弟元素节点
        console.log(div.nextElementSibling);	//<span>我是span</span>
        console.log(div.previousElementSibling);//null
    </script>
</body>
```

我们还可以自定义一个兼容函数：

```js
function getNextElementSibling(element) {
    var el = element;
    while(el = el.nextSibling) {
        if(el.nodeType === 1){
            return el;
        }
    }
    return null;
}
```

##### 创建节点

```js
document.createElement('tagName');
```

- `document.createElement()` 方法创建由 tagName 指定的HTML 元素
- 因为这些元素原先不存在，是根据我们的需求动态生成的，所以我们也称为**动态创建元素节点**

##### 添加节点

```js
node.appendChild(child)
```

- `node.appendChild()` 方法将一个节点添加到指定父节点的子节点列表**末尾**。类似于 CSS 里面的 after 伪元素。

```js
node.insertBefore(child,指定元素)
//指定元素是已存在的
```

- `node.insertBefore()` 方法将一个节点添加到父节点的指定子节点**前面**。类似于 CSS 里面的 before 伪元素。

```html
<body>
    <ul>
        <li>123</li>
    </ul>
    <script>
        // 1. 创建节点元素节点
        var li = document.createElement('li');
        // 2. 添加节点 node.appendChild(child)  node 父级  child 是子级 后面追加元素  类似于数组中的push
        // 先获取父亲ul
        var ul = document.querySelector('ul');
        ul.appendChild(li);
        // 3. 添加节点 node.insertBefore(child, 指定元素);
        var lili = document.createElement('li');
        ul.insertBefore(lili, ul.children[0]);
        // 4. 我们想要页面添加一个新的元素分两步: 1. 创建元素 2. 添加元素
    </script>
</body>
```

##### 删除节点

```js
node.removeChild(child)
```

- `node.removeChild()`方法从 DOM 中删除一个子节点，返回删除的节点

##### 复制节点(克隆节点)

```js
node.cloneNode()
```

- `node.cloneNode()`方法返回调用该方法的节点的一个副本。 也称为克隆节点/拷贝节点
- 如果括号参数为空或者为 false ，则是浅拷贝，即只克隆复制节点本身，不克隆里面的子节点
- 如果括号参数为 true ，则是深度拷贝，会复制节点本身以及里面所有的子节点

```html
<body>
    <ul>
        <li>1111</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <script>
        var ul = document.querySelector('ul');
        // 1. node.cloneNode(); 括号为空或者里面是false 浅拷贝 只复制标签不复制里面的内容
        // 2. node.cloneNode(true); 括号为true 深拷贝 复制标签复制里面的内容
        var lili = ul.children[0].cloneNode(true);
        ul.appendChild(lili);
    </script>
</body>

```

![image-20220323211943716](/assets/web/202203281016854.png)

##### 三种动态创建元素的区别-面试题



- doucument.write()
- element.innerHTML
- document.createElement()

区别：

- `document.write()` 是直接将内容写入页面的内容流，但是文档流执行完毕，则它会导致页面全部重绘
- `innerHTML` 是将内容写入某个 DOM 节点，不会导致页面全部重绘
- `innerHTML` 创建多个元素效率更高（不要拼接字符串，采取数组形式拼接），结构稍微复杂
- `createElement()`创建多个元素效率稍低一点点，但是结构更清晰

> 总结：不同浏览器下， innerHTML（数组拼接） 效率要比 createElement 高

```js
// 三种创建元素方式区别 
// 1. document.write() 创建元素  如果页面文档流加载完毕，再调用这句话会导致页面重绘
// 也就是会覆盖原来的内容
// var btn = document.querySelector('button');
// btn.onclick = function() {
//     document.write('<div>123</div>');
// }
// 使用这个也是同理，加载时直接重绘了
window.onload = function() {
    document.write('<div>123</div>');
}

// 2. innerHTML 创建元素
var inner = document.querySelector('.inner');
for (var i = 0; i <= 100; i++) {
     inner.innerHTML += '<a href="#">百度</a>'
}
var arr = [];
for (var i = 0; i <= 100; i++) {
    arr.push('<a href="#">百度</a>');
}
inner.innerHTML = arr.join('');
// 3. document.createElement() 创建元素
var create = document.querySelector('.create');
for (var i = 0; i <= 100; i++) {
    var a = document.createElement('a');
    create.appendChild(a);
}
```

效率测试：

```js
function fn() {
    // 使用+，相当于Nubmer(new Date()),转换为数值
    var d1 = +new Date();

    var str = '';
    for (var i = 0; i < 1000; i++) {
        document.body.innerHTML += '<div style="width:100px; height:2px; border:1px solid blue;"></div>';
    }
    var d2 = +new Date();
    console.log(d2 - d1);
}//1080

function fn2() {
    var d1 = +new Date();
    var array = [];
    for (var i = 0; i < 1000; i++) {
        array.push('<div style="width:100px; height:2px; border:1px solid blue;"></div>');
    }
    document.body.innerHTML = array.join('');
    var d2 = +new Date();
    console.log(d2 - d1);
}//4

function fn3() {
    var d1 = +new Date();

    for (var i = 0; i < 1000; i++) {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '2px';
        div.style.border = '1px solid red';
        document.body.appendChild(div);
    }
    var d2 = +new Date();
    console.log(d2 - d1);
}//11


```

#### DOM核心

对于DOM操作，我们主要针对子元素的操作，主要有

- 创建
- 增
- 删
- 改
- 查
- 属性操作
- 时间操作

##### 创建

1. document.write
2. innerHTML
3. createElement

##### 增

1. appendChild
2. insertBefore

##### 删

1. removeChild

##### 改

- 主要修改dom的元素属性，dom元素的内容、属性、表单的值等

1. 修改元素属性：src、href、title 等
2. 修改普通元素内容：innerHTML、innerText
3. 修改表单元素：value、type、disabled
4. 修改元素样式：style、className

##### 查

- 主要获取查询dom的元素
- DOM提供的API方法：getElementById、getElementsByTagName (古老用法，不推荐)
- H5提供的新方法：querySelector、querySelectorAll (提倡)
- 利用节点操作获取元素：父(parentNode)、子(children)、兄(previousElementSibling、nextElementSibling) 提倡
  **parentNode获取直接的爸爸，只有一个，children获取多个元素，兄弟里加了element才是元素**

##### 属性操作

- 主要针对于自定义属性
- setAttribute：设置dom的属性值
- getAttribute：得到dom的属性值
- removeAttribute：移除属性

**事件操作**

给元素注册事件， 采取 事件源.事件类型 = 事件处理程序

![image-20220324090825908](/assets/web/202203240908993.png)

### 事件高级

#### 注册事件(绑定事件)

给元素添加事件，称为注册事件或者绑定事件。

注册事件有两种方式：传统方式和方法监听注册方式

**传统注册方式**

- 利用 on 开头的事件 onclick
- `<button onclick = "alert("hi")"></button>`
- `btn.onclick = function() {}`
- 特点：注册事件的唯一性
- 同一个元素同一个事件只能设置一个处理函数，最后注册的处理函数将会覆盖前面注册的处理函数

---

**方法监听注册方式**

- w3c 标准推荐方式
- addEventListener() 它是一个方法
- IE9 之前的 IE 不支持此方法，可使用 attachEvent() 代替
- 特点：同一个元素同一个事件可以注册多个监听器
- **按注册顺序依次执行**

> addEventListener事件监听方式

- `eventTarget.addEventListener()`方法将指定的监听器注册到 eventTarget（目标对象）上
- 当该对象触发指定的事件时，就会执行事件处理函数

```JS
eventTarget.addEventListener(type,listener[,useCapture])
```

该方法接收三个参数：

- `type`:事件类型字符串，比如click,mouseover,注意这里不要带on
- `listener`：事件处理函数，事件发生时，会调用该监听函数
- `useCapture`：可选参数，是一个布尔值，默认是 false。学完 DOM 事件流后，我们再进一步学习

```html
<body>
    <button>传统注册事件</button>
    <button>方法监听注册事件</button>
    <button>ie9 attachEvent</button>
    <script>
        var btns = document.querySelectorAll('button');
        // 1. 传统方式注册事件
        btns[0].onclick = function() {
            alert('hi');
        }
        btns[0].onclick = function() {
                alert('hao a u');
            }
            // 2. 事件监听注册事件 addEventListener 
            // (1) 里面的事件类型是字符串 所以加引号 而且不带on
            // (2) 同一个元素 同一个事件可以添加多个侦听器（事件处理程序）
        btns[1].addEventListener('click', function() {
            alert(22);
        })
        btns[1].addEventListener('click', function() {
                alert(33);
            })
            // 3. attachEvent ie9以前的版本支持
        btns[2].attachEvent('onclick', function() {
            alert(11);
        })
    </script>
</body>
```

> ### attachEvent事件监听方式(兼容)

- `eventTarget.attachEvent()`方法将指定的监听器注册到 eventTarget（目标对象） 上
- 当该对象触发指定的事件时，指定的回调函数就会被执行

该方法接收两个参数：

- `eventNameWithOn`：事件类型字符串，比如 onclick 、onmouseover ，这里要带 on
- `callback`： 事件处理函数，当目标触发事件时回调函数被调用
- ie9以前的版本支持

> ### 注册事件兼容性解决方案

```js
 function addEventListener(element, eventName, fn) {
      // 判断当前浏览器是否支持 addEventListener 方法
      if (element.addEventListener) {
        element.addEventListener(eventName, fn);  // 第三个参数 默认是false
      } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, fn);
      } else {
        // 相当于 element.onclick = fn;
        element['on' + eventName] = fn;
 } 
```

> 兼容性处理的原则： 首先照顾大多数浏览器，再处理特殊浏览器

#### 删除事件(解绑事件)

> ### removeEventListener删除事件方式

```js
eventTarget.removeEventListener(type,listener[,useCapture]);
```

该方法接收三个参数：

- `type`:事件类型字符串，比如click,mouseover,注意这里不要带on
- `listener`：事件处理函数，事件发生时，会调用该监听函数
- `useCapture`：可选参数，是一个布尔值，默认是 false。学完 DOM 事件流后，我们再进一步学习

> ### detachEvent删除事件方式(兼容)

```js
eventTarget.detachEvent(eventNameWithOn,callback);
```

该方法接收两个参数：

- `eventNameWithOn`：事件类型字符串，比如 onclick 、onmouseover ，这里要带 on
- `callback`： 事件处理函数，当目标触发事件时回调函数被调用
- ie9以前的版本支持

> ### 传统事件删除方式

```js
eventTarget.onclick = null;
```

事件删除示例：

```html
<body>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <script>
        var divs = document.querySelectorAll('div');
        divs[0].onclick = function() {
            alert(11);
            // 1. 传统方式删除事件
            divs[0].onclick = null;
        }
        // 2.removeEventListener 删除事件
        divs[1].addEventListener('click',fn);   //里面的fn不需要调用加小括号

        function fn(){
            alert(22);
            divs[1].removeEventListener('click',fn);
        }
        // 3.IE9 中的删除事件方式
        divs[2].attachEvent('onclick',fn1);
        function fn1() {
            alert(33);
            divs[2].detachEvent('onclick',fn1);
        }
    </script>

</body>
```

> ### 删除事件兼容性解决方案

```js
 function removeEventListener(element, eventName, fn) {
      // 判断当前浏览器是否支持 removeEventListener 方法
      if (element.removeEventListener) {
        element.removeEventListener(eventName, fn);  // 第三个参数 默认是false
      } else if (element.detachEvent) {
        element.detachEvent('on' + eventName, fn);
      } else {
        element['on' + eventName] = null;
 } 

```

> 兼容性处理的原则： 首先照顾大多数浏览器，再处理特殊浏览器

#### DOM事件流

- 事件流描述的是从页面中接收事件的顺序
- 事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流

比如我们给一个div 注册了点击事件：

![image-20220324091135191](/assets/web/202203281016857.png)

DOM 事件流分为3个阶段： 

1. 捕获阶段

2. 当前目标阶段

3. 冒泡阶段 

- 事件冒泡： IE 最早提出，事件开始时由最具体的元素接收，然后逐级向上传播到到 DOM 最顶层节点的过程。
- 事件捕获： 网景最早提出，由 DOM 最顶层节点开始，然后逐级向下传播到到最具体的元素接收的过程。 

加深理解：

我们向水里面扔一块石头，首先它会有一个下降的过程，这个过程就可以理解为从最顶层向事件发生的最具体元素（目标点）的捕获过程；之后会产生泡泡，会在最低点（ 最具体元素）之后漂浮到水面上，这个过程相当于事件冒泡。 

![image-20220324091243444](/assets/web/202203281016064.png)

事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即 DOM 事件流。

**注意**

1.JS 代码中只能执行捕获或者冒泡其中的一个阶段。

2.onclick 和 attachEvent 只能得到冒泡阶段。

3.addEventListener(type, listener[, useCapture])第三个参数如果是 true，表示在事件捕获阶段调用事件处理程序；如果是 false（不写默认就是false），表示在事件冒泡阶段调用事件处理程序。

4.实际开发中我们很少使用事件捕获，我们更关注事件冒泡。

5.有些事件是没有冒泡的，比如 onblur、onfocus、onmouseenter、onmouseleave

6.事件冒泡有时候会带来麻烦，有时候又会帮助很巧妙的做某些事件，我们后面讲解。

##### 捕获阶段

document -> html -> body -> father -> son

两个盒子嵌套，一个父盒子一个子盒子，我们的需求是当点击父盒子时弹出 father ，当点击子盒子时弹出 son

```html
<body>
    <div class="father">
        <div class="son">son盒子</div>
    </div>
    <script>
        // dom 事件流 三个阶段
        // 1. JS 代码中只能执行捕获或者冒泡其中的一个阶段,看addEventKustener只能二选一
        // 2. onclick 和 attachEvent（ie） 只能得到冒泡阶段。
        // 3. 捕获阶段 如果addEventListener 第三个参数是 true 那么则处于捕获阶段  document -> html -> body -> father -> son
        var son = document.querySelector('.son');
        son.addEventListener('click', function() {
             alert('son');
        }, true);
        var father = document.querySelector('.father');
        father.addEventListener('click', function() {
            alert('father');
        }, true);
    </script>
</body>
```

但是因为DOM流的影响，我们点击子盒子，会先弹出 father，之后再弹出 son

这是因为捕获阶段由 DOM 最顶层节点开始，然后逐级向下传播到到最具体的元素接收

document -> html -> body -> father -> son

*先看 document 的事件，没有；再看 html 的事件，没有；再看 body 的事件，没有；再看 father 的事件，有就先执行；再看 son 的事件，再执行。*

##### 冒泡阶段

- son -> father ->body -> html -> document

```html
<body>
    <div class="father">
        <div class="son">son盒子</div>
    </div>
    <script>
		// 4. 冒泡阶段 如果addEventListener 第三个参数是 false 或者 省略 那么则处于冒泡阶段  son -> father ->body -> html -> document
        var son = document.querySelector('.son');
        son.addEventListener('click', function() {
            alert('son');
        }, false);
        var father = document.querySelector('.father');
        father.addEventListener('click', function() {
            alert('father');
        }, false);
        document.addEventListener('click', function() {
            alert('document');
        })
    </script>
</body>
```

我们点击子盒子，会弹出 son、father、document

这是因为冒泡阶段开始时由最具体的元素接收，然后逐级向上传播到到 DOM 最顶层节点

- son -> father ->body -> html -> document

#### 事件对象

```js
eventTarget.onclick = function(event) {
   // 这个 event 就是事件对象，我们还喜欢的写成 e 或者 evt 
} 
eventTarget.addEventListener('click', function(event) {
   // 这个 event 就是事件对象，我们还喜欢的写成 e 或者 evt  
})
```

- 官方解释：event 对象代表事件的状态，比如键盘按键的状态、鼠标的位置、鼠标按钮的状态。

- 简单理解：事件发生后，跟事件相关的一系列信息数据的集合都放到这个对象里面，这个对象就是事件对象 event，它有很多属性和方法。

比如： 

1. 谁绑定了这个事件。

2. 鼠标触发事件的话，会得到鼠标的相关信息，如鼠标位置。

3. 键盘触发事件的话，会得到键盘的相关信息，如按了哪个键。

- 这个 event 是个形参，系统帮我们设定为事件对象，不需要传递实参过去
- 当我们注册事件时， event 对象就会被系统自动创建，并依次传递给事件监听器（事件处理函数）

```html
<body>
    <div>123</div>
    <script>
        // 事件对象
        var div = document.querySelector('div');
        div.onclick = function(e) {
                // console.log(e);
                // console.log(window.event);
                // e = e || window.event;
                console.log(e);


            }
        // 1. event 就是一个事件对象 写到我们侦听函数的 小括号里面 当形参来看
        // 2. 事件对象只有有了事件才会存在，它是系统给我们自动创建的，不需要我们传递参数
        // 3. 事件对象 是 我们事件的一系列相关数据的集合 跟事件相关的 比如鼠标点击里面就包含了鼠标的相关信息，鼠标坐标啊，如果是键盘事件里面就包含的键盘事件的信息 比如 判断用户按下了那个键
        // 4. 这个事件对象我们可以自己命名 比如 event 、 evt、 e
        // 5. 事件对象也有兼容性问题 ie678 通过 window.event 兼容性的写法  e = e || window.event;
    </script>
</body>
```

##### 事件对象的兼容性方案

事件对象本身的获取存在兼容问题：

1. 标准浏览器中是浏览器给方法传递的参数，只需要定义形参 e 就可以获取到。
2. 在 IE6~8 中，浏览器不会给方法传递参数，如果需要的话，需要到 window.event 中获取查找

解决：`e = e || window.event;`

##### 事件对象的常见属性和方法

| 事件对象属性方法    | 说明                                          |
| ------------------- | --------------------------------------------- |
| e.target            | 返回触发事件的对象 标准                       |
| e.srcElement        | 返回触发事件的对象 非标准 ie6-8使用           |
| e.type              | 返回事件的类型 比如`click` `mouseover` 不带on |
| e.cancelBubble      | 该属性阻止冒泡，非标准，ie6-8使用             |
| e.returnValue       | 该属性阻止默认行为 非标准，ie6-8使用          |
| e.preventDefault()  | 该方法阻止默认行为 标准 比如不让链接跳转      |
| e.stopPropagation() | 阻止冒泡 标准                                 |

##### e.target 与 this

e.target 和 this 的区别：

- this 是事件绑定的元素， 这个函数的调用者（绑定这个事件的元素）
- e.target 是事件触发的元素。

```html
<body>
    <div>123</div>
    <ul>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
    </ul>
    <script>
        // 常见事件对象的属性和方法
        // 1. e.target 返回的是触发事件的对象（元素）  this 返回的是绑定事件的对象（元素）
        // 区别 ： e.target 点击了那个元素，就返回那个元素 this 那个元素绑定了这个点击事件，那么就返回谁
        var div = document.querySelector('div');
        div.addEventListener('click', function(e) {
            console.log(e.target);
            console.log(this);

        })
        var ul = document.querySelector('ul');
        ul.addEventListener('click', function(e) {
                // 我们给ul 绑定了事件  那么this 就指向ul  
                console.log(this);
                console.log(e.currentTarget);

                // e.target 指向我们点击的那个对象 谁触发了这个事件 我们点击的是li e.target 指向的就是li
                console.log(e.target);

            })
            // 了解兼容性
            // div.onclick = function(e) {
            //     e = e || window.event;
            //     var target = e.target || e.srcElement;
            //     console.log(target);

        // }
        // 2. 了解 跟 this 有个非常相似的属性 currentTarget  ie678不认识
    </script>
</body>
```

##### 事件对象阻止默认行为

```html
<body>
    <div>123</div>
    <a href="http://www.baidu.com">百度</a>
    <form action="http://www.baidu.com">
        <input type="submit" value="提交" name="sub">
    </form>
    <script>
        // 常见事件对象的属性和方法
        // 1. 返回事件类型
        var div = document.querySelector('div');
        div.addEventListener('click', fn);
        div.addEventListener('mouseover', fn);
        div.addEventListener('mouseout', fn);

        function fn(e) {
            console.log(e.type);
        }
        // 2. 阻止默认行为（事件） 让链接不跳转 或者让提交按钮不提交
        var a = document.querySelector('a');
        a.addEventListener('click', function(e) {
                e.preventDefault(); //  dom 标准写法
            })
            // 3. 传统的注册方式
        a.onclick = function(e) {
            // 普通浏览器 e.preventDefault();  方法
            // e.preventDefault();
            // 低版本浏览器 ie678  returnValue  属性
            // e.returnValue;
            // 我们可以利用return false 也能阻止默认行为 没有兼容性问题 特点： return 后面的代码不执行了， 而且只限于传统的注册方式
            return false;
            alert(11);
        }
    </script>
</body>
```

##### 阻止事件冒泡

事件冒泡：开始时由最具体的元素接收，然后逐级向上传播到到 DOM 最顶层节点

事件冒泡本身的特性，会带来的坏处，也会带来的好处，需要我们灵活掌握。

- 标准写法

  `e.stopPropagation()`

- 非标准写法： IE6-8 利用对象事件 cancelBubble属性

  `e.cancelBubble = true;`

```html
<body>
    <div class="father">
        <div class="son">son儿子</div>
    </div>
    <script>
        // 常见事件对象的属性和方法
        // 阻止冒泡  dom 推荐的标准 stopPropagation() 
        var son = document.querySelector('.son');
        son.addEventListener('click', function(e) {
            alert('son');
            e.stopPropagation(); // stop 停止  Propagation 传播
            e.cancelBubble = true; // 非标准 cancel 取消 bubble 泡泡
        }, false);

        var father = document.querySelector('.father');
        father.addEventListener('click', function() {
            alert('father');
        }, false);
        document.addEventListener('click', function() {
            alert('document');
        })
    </script>
</body>
```

兼容性解决：

```js
if(e && e.stopPropagation){
      e.stopPropagation();
  }else{
      window.event.cancelBubble = true;
  }
```

#### 事件委托

- 事件委托也称为事件代理，在 jQuery 里面称为事件委派
- 事件委托的原理
  - **不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点**
- **事件委托的作用**
  - 我们只操作了一次 DOM ，提高了程序的性能。

```html
<body>
    <ul>
        <li>知否知否，点我应有弹框在手！</li>
        <li>知否知否，点我应有弹框在手！</li>
        <li>知否知否，点我应有弹框在手！</li>
        <li>知否知否，点我应有弹框在手！</li>
        <li>知否知否，点我应有弹框在手！</li>
    </ul>
    <script>
        // 事件委托的核心原理：给父节点添加侦听器， 利用事件冒泡影响每一个子节点
        var ul = document.querySelector('ul');
        ul.addEventListener('click', function(e) {
            // alert('知否知否，点我应有弹框在手！');
            // e.target 这个可以得到我们点击的对象
            e.target.style.backgroundColor = 'pink';
            // 点了谁，就让谁的style里面的backgroundColor颜色变为pink
        })
    </script>
</body>
```

以上案例：给 ul 注册点击事件，然后利用事件对象的 target 来找到当前点击的 li，因为点击 li，事件会冒泡到 ul 上， ul 有注册事件，就会触发事件监听器。

#### 常见的鼠标事件

| 鼠标事件    | 触发条件         |
| ----------- | ---------------- |
| onclick     | 鼠标点击左键触发 |
| onmouseover | 鼠标经过触发     |
| onmouseout  | 鼠标离开触发     |
| onfocus     | 获得鼠标焦点触发 |
| onblur      | 失去鼠标焦点触发 |
| onmousemove | 鼠标移动触发     |
| onmouseup   | 鼠标弹起触发     |
| onmousedown | 鼠标按下触发     |

##### 禁止鼠标右键与鼠标选中

- `contextmenu`主要控制应该何时显示上下文菜单，主要用于程序员取消默认的上下文菜单
- `selectstart` 禁止鼠标选中

```html
<body>
    <h1>我是一段不愿意分享的文字</h1>
    <script>
        // 1. contextmenu 我们可以禁用右键菜单
        document.addEventListener('contextmenu', function(e) {
                e.preventDefault(); // 阻止默认行为
            })
            // 2. 禁止选中文字 selectstart
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();

        })
    </script>
</body>
```

##### 鼠标事件对象

- **event**对象代表事件的状态，跟事件相关的一系列信息的集合
- 现阶段我们主要是用鼠标事件对象 **MouseEvent** 和键盘事件对象 **KeyboardEvent。**

| 鼠标事件对象        | 说明                                      |
| ------------------- | ----------------------------------------- |
| e.clientX           | 返回鼠标相对于浏览器窗口**可视区**的X坐标 |
| e.clientY           | 返回鼠标相对于浏览器窗口**可视区**的Y坐标 |
| **e.pageX（重点）** | 返回鼠标相对于文档页面的X坐标 IE9+ 支持   |
| **e.pageY（重点）** | 返回鼠标相对于文档页面的Y坐标 IE9+ 支持   |
| e.screenX           | 返回鼠标相对于电脑屏幕的X坐标             |
| e.screenY           | 返回鼠标相对于电脑屏幕的Y坐标             |

```html
<body>
    <script>
        // 鼠标事件对象 MouseEvent
        document.addEventListener('click', function(e) {
            // 1. client 鼠标在可视区的x和y坐标
            console.log(e.clientX);
            console.log(e.clientY);
            console.log('---------------------');

            // 2. page 鼠标在页面文档的x和y坐标
            console.log(e.pageX);
            console.log(e.pageY);
            console.log('---------------------');

            // 3. screen 鼠标在电脑屏幕的x和y坐标
            console.log(e.screenX);
            console.log(e.screenY);

        })
    </script>
</body>
```

##### 常用的键盘事件

| 键盘事件   | 触发条件                                                     |
| ---------- | ------------------------------------------------------------ |
| onkeyup    | 某个键盘按键被松开时触发                                     |
| onkeydown  | 某个键盘按键被按下时触发                                     |
| onkeypress | 某个键盘按键被按下时触发，但是它不识别功能键，比如 ctrl shift 箭头等 |

- **如果使用addEventListener 不需要加 on**
- `onkeypress` 和前面2个的区别是，它不识别功能键，比如左右箭头，shift 等
- 三个事件的执行顺序是： keydown – keypress — keyup

```html
<body>
    <script>
        // 常用的键盘事件
        //1. keyup 按键弹起的时候触发 
        // document.onkeyup = function() {
        //         console.log('我弹起了');

        //     }
        document.addEventListener('keyup', function() {
            console.log('我弹起了');
        })

        //3. keypress 按键按下的时候触发  不能识别功能键 比如 ctrl shift 左右箭头啊
        document.addEventListener('keypress', function() {
                console.log('我按下了press');
            })
            //2. keydown 按键按下的时候触发  能识别功能键 比如 ctrl shift 左右箭头啊
        document.addEventListener('keydown', function() {
                console.log('我按下了down');
            })
            // 4. 三个事件的执行顺序  keydown -- keypress -- keyup
    </script>
</body>
```

###### 键盘对象属性

| 键盘事件对象 **属性** | 说明                    |
| --------------------- | ----------------------- |
| keyCode               | 返回该**键**值的ASCII值 |

- `onkeydown`和 `onkeyup` 不区分字母大小写，`onkeypress` 区分字母大小写。
- 在我们实际开发中，我们更多的使用keydown和keyup， 它能识别所有的键（包括功能键）
- `Keypress` 不识别功能键，但是`keyCode`属性能区分大小写，返回不同的ASCII值

```html
<body>
    <script>
        // 键盘事件对象中的keyCode属性可以得到相应键的ASCII码值
        // 1. 我们的keyup 和keydown事件不区分字母大小写  a 和 A 得到的都是65
        // 2. 我们的keypress 事件 区分字母大小写  a  97 和 A 得到的是65
        document.addEventListener('keyup', function(e) {
            console.log('up:' + e.keyCode);
            // 我们可以利用keycode返回的ASCII码值来判断用户按下了那个键
            if (e.keyCode === 65) {
                alert('您按下的a键');
            } else {
                alert('您没有按下a键')
            }

        })
        document.addEventListener('keypress', function(e) {
            console.log('press:' + e.keyCode);
        })
    </script>
</body>
```

![image-20220326164723113](/assets/web/202203261647352.png)

```html
<body>
    <div class="search">
        <div class="con">123</div>
        <input type="text" placeholder="请输入您的快递单号" class="jd">
    </div>
    <script>
        // 快递单号输入内容时， 上面的大号字体盒子（con）显示(这里面的字号更大）
        // 表单检测用户输入： 给表单添加键盘事件
        // 同时把快递单号里面的值（value）获取过来赋值给 con盒子（innerText）做为内容
        // 如果快递单号里面内容为空，则隐藏大号字体盒子(con)盒子
        var con = document.querySelector('.con');
        var jd_input = document.querySelector('.jd');
        jd_input.addEventListener('keyup', function() {
                // console.log('输入内容啦');
                if (this.value == '') {
                    con.style.display = 'none';
                } else {
                    con.style.display = 'block';
                    con.innerText = this.value;
                }
            })
            // 当我们失去焦点，就隐藏这个con盒子
        jd_input.addEventListener('blur', function() {
                con.style.display = 'none';
            })
            // 当我们获得焦点，就显示这个con盒子
        jd_input.addEventListener('focus', function() {
            if (this.value !== '') {
                con.style.display = 'block';
            }
        })
    </script>
</body>
```

> ①注意： keydown 和 keypress 在文本框里面的特点： 他们两个事件触发的时候，文字还没有落入文本框中。
>
> ②keyup事件触发的时候， 文字已经落入文本框里面了，看执行顺序，keyup就是最后一个

## Javascript特效

### **元素偏移量** **offset** **系列**

#### **offset** **概述**

offset 翻译过来就是偏移量， 我们使用 offset 系列相关属性可以动态的得到该元素的位置（偏移）、大小等。

- 获得元素距离带有定位父元素的位置
- 获得元素自身的大小（宽度高度）
- 注意： 返回的数值都不带单位

![image-20220327195306261](/assets/web/202203281016164.png)

offset 系列常用属性：

***返回的数值都不带单位***

| 属性                 | 描述                                                         |
| -------------------- | ------------------------------------------------------------ |
| element.offsetParent | 返回带有定位的父亲，否则返回的是body                         |
| element.offsetTop    | 返回元素相对带有定位父元素上方的偏移，若没有父亲或父亲不带单位，则以body为准 |
| element.offsetLeft   | 返回元素相对带有定位父元素左边框的偏移，若没有父亲或父亲不带单位，则以body为准 |
| element.offsetWidth  | 返回自身包括padding、边框、内容区的宽度                      |
| element.offsetHeight | 返回自身包括padding、边框、内容区的高度                      |

```html
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        .father {
            /* position: relative; */
            width: 200px;
            height: 200px;
            background-color: pink;
            margin: 150px;
        }
        
        .son {
            width: 100px;
            height: 100px;
            background-color: purple;
            margin-left: 45px;
        }
        
        .w {
            height: 200px;
            background-color: skyblue;
            margin: 0 auto 200px;
            padding: 10px;
            border: 15px solid red;
        }
    </style>
<body>
    <div class="father">
        <div class="son"></div>
    </div>
    <div class="w"></div>
    <script>
        // offset 系列
        var father = document.querySelector('.father');
        var son = document.querySelector('.son');
        // 1.可以得到元素的偏移 位置 返回的不带单位的数值  
        console.log(father.offsetTop);
        console.log(father.offsetLeft);
        // 它以带有定位的父亲为准  如果么有父亲或者父亲没有定位 则以 body 为准
        console.log(son.offsetLeft);
        var w = document.querySelector('.w');
        // 2.可以得到元素的大小 宽度和高度 是包含padding + border + width 
        console.log(w.offsetWidth);
        console.log(w.offsetHeight);
        // 3. 返回带有定位的父亲 否则返回的是body
        console.log(son.offsetParent); // 返回带有定位的父亲 否则返回的是body
        console.log(son.parentNode); // 返回父亲 是最近一级的父亲 亲爸爸 不管父亲有没有定位
    </script>
</body>
```

#### offset系列和style的区别

| offset                                         | style                                         |
| ---------------------------------------------- | --------------------------------------------- |
| offset可以得到任意样式表中的样式值             | style只能得到行内样式表中的样式值             |
| offset系列获得的数值是没有单位的               | style.width获得的是带有单位的字符串           |
| offsetWidth包含padding+ border+width           | style.width获得不包含padding和border的值      |
| offsetWidth 等属性是只读属性，只能获取不能赋值 | style.width是可读写属性，可以获取也可以赋值   |
| 所以，我们想要获取元素大小位置，用offset更合适 | 所以，我们想要给元素更改值，则需要用style改变 |

案例：

```html
<div class="box"></div>
<script>
    // 我们在盒子内点击， 想要得到鼠标距离盒子左右的距离。
    // 首先得到鼠标在页面中的坐标（ e.pageX, e.pageY）
    // 其次得到盒子在页面中的距离(box.offsetLeft, box.offsetTop)
    // 用鼠标距离页面的坐标减去盒子在页面中的距离， 得到 鼠标在盒子内的坐标
    var box = document.querySelector('.box');
    box.addEventListener('mousemove', function(e) {
        // console.log(e.pageX);
        // console.log(e.pageY);
        // console.log(box.offsetLeft);
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        this.innerHTML = 'x坐标是' + x + ' y坐标是' + y;
    })
</script>
```

### **元素可视区** **client** **系列**

client 翻译过来就是客户端，我们使用 client 系列的相关属性来获取**元素可视区**的相关信息。通过 client 系列的相关属性可以动态的得到该元素的边框大小、元素大小等。

| client相关属性       | 描述                                                        |
| -------------------- | ----------------------------------------------------------- |
| element.clientTop    | 返回元素上边框的大小                                        |
| element.clientLeft   | 返回元素左边框的大小                                        |
| element.clientWidth  | 返回自身包括padding、内容区的宽度，不含边框，返回值不带单位 |
| element.clientHeight | 返回自身包括padding、内容区的高度，不含边框，返回值不带单位 |

![image-20220327200515847](/assets/web/202203281016169.png)

**client和offset最大的区别是返回宽度和高度时，offset包括边框，client不包括边框。**

#### flexible分析案例

```js
(function flexible(window, document) {
    // 获取的html 的根元素
    var docEl = document.documentElement
        // dpr 物理像素比
    var dpr = window.devicePixelRatio || 1

    // adjust body font size  设置我们body 的字体大小
    function setBodyFontSize() {
        // 如果页面中有body 这个元素 就设置body的字体大小
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else {
            // 如果页面中没有body 这个元素，则等着 我们页面主要的DOM元素加载完毕再去设置body
            // 的字体大小
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10    设置我们html 元素的文字大小
    function setRemUnit() {
        var rem = docEl.clientWidth / 10
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    // reset rem unit on page resize  当我们页面尺寸大小发生变化的时候，要重新设置下rem 的大小
    window.addEventListener('resize', setRemUnit)
        // pageshow 是我们重新加载页面触发的事件
    window.addEventListener('pageshow', function(e) {
        // e.persisted 返回的是true 就是说如果这个页面是从缓存取过来的页面，也需要从新计算一下rem 的大小
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports  有些移动端的浏览器不支持0.5像素的写法
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))
```



##### 立即执行函数

> 不需要调用，立马能够自己执行的函数。

```js
function fn() {
    console.log(1);

}
fn();
// 2. 写法 也可以传递参数进来
// 1.(function() {})()    或者  2. (function(){}());
(function(a, b) {
    console.log(a + b);
    var num = 10;
})(1, 2); // 第二个小括号可以看做是调用函数
(function sum(a, b) {
    console.log(a + b);
    var num = 10; // 局部变量
}(2, 3));
// 3. 立即执行函数最大的作用就是 独立创建了一个作用域, 里面所有的变量都是局部变量 不会有命名冲突的情况
```

主要作用： 创建一个独立的作用域。 避免了命名冲突问题

##### dpr物理像素比

`window.devicePixelRatio`如果获取不到，为了兼容性，可以设置`window.devicePixelRatio||1`

电脑一般为1，手机是2

####  pageshow事件

下面三种情况都会刷新页面都会触发 load 事件。

1. a标签的超链接

2. F5或者刷新按钮（强制刷新）

3. 前进后退按钮

但是 火狐中，有个特点，有个“往返缓存”，这个缓存中不仅保存着页面数据，还保存了DOM和JavaScript的状态；实际上是将整个页面都保存在了内存里。

所以此时后退按钮不能刷新页面。

此时可以使用 pageshow事件来触发。，这个事件在页面显示时触发，无论页面是否来自缓存。在重新加载页面中，pageshow会在load事件触发后触发；根据事件对象中的persisted来判断是否是缓存中的页面触发的pageshow事件，注意这个事件给window添加。

```js
// pageshow 是我们重新加载页面触发的事件
window.addEventListener('pageshow', function(e) {
    // e.persisted 返回的是true 就是说如果这个页面是从缓存取过来的页面，也需要从新计算一下rem 的大小
    if (e.persisted) {
        setRemUnit()
    }
```

### **元素滚动** **scroll**系列

scroll 翻译过来就是滚动的，我们使用 scroll 系列的相关属性可以动态的得到该元素的大小、滚动距离等。

#### scroll系列常用属性

返回值都不带单位。

| 属性                 | 描述                             |
| -------------------- | -------------------------------- |
| element.scrollTop    | 返回被卷去的上侧距离             |
| element.scrollLeft   | 返回被卷去的左侧距离             |
| element.scrollWidth  | 返回自身实际内容的宽度，不含边框 |
| element.scrollHeight | 返回自身实际内容的宽度，不含边框 |

![image-20220327203932842](/assets/web/202203281016403.png)

```html
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            border: 10px solid red;
            padding: 10px;
            overflow: auto;
        }
    </style>

<body>
    <div>
        我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容
    </div>
    <script>
        // scroll 系列
        var div = document.querySelector('div');
        console.log(div.scrollHeight);
        console.log(div.clientHeight);
        // scroll滚动事件当我们滚动条发生变化会触发的事件
        div.addEventListener('scroll', function() {
            console.log(div.scrollTop);

        })
    </script>
```

#### 页面被卷去的头部

如果浏览器的高（或宽）度不足以显示整个页面时，会自动出现滚动条。当滚动条向下滚动时，页面上面被隐藏掉的高度，我们就称为页面被卷去的头部。滚动条在滚动时会触发onscroll事件。

```js
//页面被卷去的头部：可以通过
window.pageYOffset
//如果是被卷去的左侧
window.pageXOffset
```

**注意，元素被卷去的头部是 element.scrollTop , 如果是页面被卷去的头部 则是 window.pageYOffset**

<u>其实这个值 可以通过盒子的 offsetTop 可以得到，如果大于等于这个值，就可以让盒子固定定位了</u>

案例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .slider-bar {
            position: absolute;
            left: 50%;
            top: 300px;
            margin-left: 600px;
            width: 45px;
            height: 130px;
            background-color: pink;
        }
        
        .w {
            width: 1200px;
            margin: 10px auto;
        }
        
        .header {
            height: 150px;
            background-color: purple;
        }
        
        .banner {
            height: 250px;
            background-color: skyblue;
        }
        
        .main {
            height: 1000px;
            background-color: yellowgreen;
        }
        
        span {
            display: none;
            position: absolute;
            bottom: 0;
        }
    </style>
</head>

<body>
    <div class="slider-bar">
        <span class="goBack">返回顶部</span>
    </div>
    <div class="header w">头部区域</div>
    <div class="banner w">banner区域</div>
    <div class="main w">主体部分</div>
    <script>
        //1. 获取元素
        var sliderbar = document.querySelector('.slider-bar');
        var banner = document.querySelector('.banner');
        // banner.offestTop 就是被卷去头部的大小 一定要写到滚动的外面,因为一旦滚动了，它也变了
        var bannerTop = banner.offsetTop
            // 当我们侧边栏固定定位之后应该变化的数值
        var sliderbarTop = sliderbar.offsetTop - bannerTop;
        // 获取main 主体元素
        var main = document.querySelector('.main');
        var goBack = document.querySelector('.goBack');
        var mainTop = main.offsetTop;
        // 2. 页面滚动事件 scroll
        document.addEventListener('scroll', function() {
            // console.log(11);
            // window.pageYOffset 页面被卷去的头部
            // console.log(window.pageYOffset);
            // 3 .当我们页面被卷去的头部大于等于了 172 此时 侧边栏就要改为固定定位
            if (window.pageYOffset >= bannerTop) {
                sliderbar.style.position = 'fixed';
                sliderbar.style.top = sliderbarTop + 'px';
            } else {
                sliderbar.style.position = 'absolute';
                sliderbar.style.top = '300px';
            }
            // 4. 当我们页面滚动到main盒子，就显示 goback模块
            if (window.pageYOffset >= mainTop) {
                goBack.style.display = 'block';
            } else {
                goBack.style.display = 'none';
            }

        })
    </script>
</body>

</html>
```

##### **页面被卷去的头部兼容性解决方案**

需要注意的是，页面被卷去的头部，有兼容性问题，因此被卷去的头部通常有如下几种写法：

1. 声明了 DTD，使用 document.documentElement.scrollTop

2. 未声明 DTD，使用 document.body.scrollTop

3. 新方法 window.pageYOffset 和 window.pageXOffset，IE9 开始支持

```js
function getScroll() {
    return {
      left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft||0,
      top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
 } 
//使用的时候  getScroll().left
```

### **三大系列总结**

| 三大系列大小对比    | 作用                                                         |
| ------------------- | ------------------------------------------------------------ |
| element.offsetWidth | 返回自身包括padding，边框，内容区的宽度，返回数值不带单位    |
| element.clientWidth | 返回自身包括padding，内容区的宽度，不包含边框，返回数值不带单位 |
| element.scrollWidth | 返回自身包括padding，内容区的实际宽度，不包含边框，返回数值不带单位 |

![image-20220328144212568](/assets/web/202203281442653.png)

他们主要用法：

1. offset系列 经常用于获得元素位置  offsetLeft offsetTop

2. client 经常用于获取元素大小 clientWidth clientHeight

3. scroll 经常用于获取滚动距离 scrollTop scrollLeft 

4. 注意页面滚动的距离通过 window.pageXOffset  获得

### mouseenter和mouseover的区别

```html
<style>
        .father {
            width: 300px;
            height: 300px;
            background-color: pink;
            margin: 100px auto;
        }
        
        .son {
            width: 200px;
            height: 200px;
            background-color: purple;
        }
    </style>
<body>
    <div class="father">
        <div class="son"></div>
    </div>
    <script>
        var father = document.querySelector('.father');
        var son = document.querySelector('.son');
        father.addEventListener('mouseenter', function() {
            console.log(11);

        })
    </script>
</body>
```

- 当鼠标移动到元素上时就会触发 mouseenter 事件
- 类似 mouseover，它们两者之间的差别是
  - mouseover 鼠标经过自身盒子会触发，经过子盒子还会触发。 mouseenter 只会经过自身盒子触发
  - 之所以这样，就是因为mouseenter不会冒泡
- 跟mouseenter搭配 鼠标离开 mouseleave 同样不会冒泡

### 动画原理

**核心原理**：通过定时器 setInterval() 不断移动盒子位置。

实现步骤：

1. 获得盒子当前位置

2. 让盒子在当前位置加上1个移动距离

3. 利用定时器不断重复这个操作

4. 加一个结束定时器的条件

5. 注意此元素需要添加定位，才能使用element.style.left

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            position: absolute;
            left: 0;
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    </style>
</head>

<body>
    <div></div>
    <script>
        // 动画原理
        // 1. 获得盒子当前位置  
        // 2. 让盒子在当前位置加上1个移动距离
        // 3. 利用定时器不断重复这个操作
        // 4. 加一个结束定时器的条件
        // 5. 注意此元素需要添加定位， 才能使用element.style.left
        var div = document.querySelector('div');
        var timer = setInterval(function() {
            if (div.offsetLeft >= 400) {
                // 停止动画 本质是停止定时器
                clearInterval(timer);
            }
            div.style.left = div.offsetLeft + 1 + 'px';
        }, 30);
    </script>
</body>

</html>
```

#### **动画函数简单封装** 

注意函数需要传递2个参数，**动画对象**和**移动到的距离**。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            position: absolute;
            left: 0;
            width: 100px;
            height: 100px;
            background-color: pink;
        }
        
        span {
            position: absolute;
            left: 0;
            top: 200px;
            display: block;
            width: 150px;
            height: 150px;
            background-color: purple;
        }
    </style>
</head>

<body>
    <div></div>
    <span>夏雨荷</span>
    <script>
        // 简单动画函数封装obj目标对象 target 目标位置
        function animate(obj, target) {
            var timer = setInterval(function() {
                if (obj.offsetLeft >= target) {
                    // 停止动画 本质是停止定时器
                    clearInterval(timer);
                }
                obj.style.left = obj.offsetLeft + 1 + 'px';

            }, 30);
        }

        var div = document.querySelector('div');
        var span = document.querySelector('span');
        // 调用函数
        animate(div, 300);
        animate(span, 200);
    </script>
</body>

</html>
```

#### **动画函数给不同元素记录不同定时器** 

如果多个元素都使用这个动画函数，每次都要var 声明定时器。

每次增加一个定时器，都会占用内存，就会逐渐累加起来，并且每个定时器都是同名，容易造成歧义。

因此我们需要就占用一个定时器内存，并且每一个动画定时器都不重名，这时候就用到了对象

我们可以给不同的元素使用不同的定时器（自己专门用自己的定时器）。

核心原理：利用 JS 是一门动态语言，可以很方便的给当前对象添加属性。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            position: absolute;
            left: 0;
            width: 100px;
            height: 100px;
            background-color: pink;
        }
        
        span {
            position: absolute;
            left: 0;
            top: 200px;
            display: block;
            width: 150px;
            height: 150px;
            background-color: purple;
        }
    </style>
</head>

<body>
    <button>点击夏雨荷才走</button>
    <div></div>
    <span>夏雨荷</span>
    <script>
        // var obj = {};
        // obj.name = 'andy';
        // 简单动画函数封装obj目标对象 target 目标位置
        // 给不同的元素指定了不同的定时器
        function animate(obj, target) {
            // 当我们不断的点击按钮，这个元素的速度会越来越快，因为开启了太多的定时器，每次点相当于告诉它快点走，执行了我这个移动的200，再继续执行下一个200，因此
            // 解决方案就是 让我们元素只有一个定时器执行
            // 先清除以前的定时器，只保留当前的一个定时器执行
            clearInterval(obj.timer);
            obj.timer = setInterval(function() {
                if (obj.offsetLeft >= target) {
                    // 停止动画 本质是停止定时器
                    clearInterval(obj.timer);
                }
                obj.style.left = obj.offsetLeft + 1 + 'px';

            }, 30);
        }

        var div = document.querySelector('div');
        var span = document.querySelector('span');
        var btn = document.querySelector('button');
        // 调用函数
        animate(div, 300);
        btn.addEventListener('click', function() {
            animate(span, 200);
        })
    </script>
</body>

</html>
```

#### 缓动效果原理

缓动动画就是让元素运动速度有所变化，最常见的是让速度慢慢停下来

思路：

1. 让盒子每次移动的距离慢慢变小，速度就会慢慢落下来。

2. 核心算法： (目标值 - 现在的位置 )  /  10  做为每次移动的距离 步长

3. 停止的条件是： 让当前盒子位置等于目标位置就停止定时器 

4. 注意步长值需要取整 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            position: absolute;
            left: 0;
            width: 100px;
            height: 100px;
            background-color: pink;
        }
        
        span {
            position: absolute;
            left: 0;
            top: 200px;
            display: block;
            width: 150px;
            height: 150px;
            background-color: purple;
        }
    </style>
</head>

<body>
    <button>点击夏雨荷才走</button>
    <span>夏雨荷</span>
    <script>
        // 缓动动画函数封装obj目标对象 target 目标位置
        // 思路：
        // 1. 让盒子每次移动的距离慢慢变小， 速度就会慢慢落下来。
        // 2. 核心算法：(目标值 - 现在的位置) / 10 做为每次移动的距离 步长
        // 3. 停止的条件是： 让当前盒子位置等于目标位置就停止定时器
        function animate(obj, target) {
            // 先清除以前的定时器，只保留当前的一个定时器执行
            clearInterval(obj.timer);
            obj.timer = setInterval(function() {
                // 步长值写到定时器的里面
                var step = (target - obj.offsetLeft) / 10;
                if (obj.offsetLeft == target) {
                    // 停止动画 本质是停止定时器
                    clearInterval(obj.timer);
                }
                // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
                obj.style.left = obj.offsetLeft + step + 'px';

            }, 15);
        }
        var span = document.querySelector('span');
        var btn = document.querySelector('button');

        btn.addEventListener('click', function() {
                // 调用函数
                animate(span, 500);
            })
            // 匀速动画 就是 盒子是当前的位置 +  固定的值 10 
            // 缓动动画就是  盒子当前的位置 + 变化的值(目标值 - 现在的位置) / 10）
    </script>
</body>

</html>
```

##### **动画函数多个目标值之间移动** 

步长应该要整数

`step = step > 0 ? Math.ceil(step) : Math.floor(step);`

- 前进：向上取整 8.1取9
- 后退：向下取整 -8.1取-9如果取-8，就向前走了

##### **动画函数添加回调函数** 

**回调函数****原理**：函数可以作为一个参数。将这个函数作为参数传到另一个函数里面，当那个函数执行完之后，再执行传进去的这个函数，这个过程就叫做回调。

回调函数写的位置：定时器结束的位置。

```js
function animate(obj, target, callback) {
            // console.log(callback);  callback = function() {}  调用的时候 callback()

            // 先清除以前的定时器，只保留当前的一个定时器执行
            clearInterval(obj.timer);
            obj.timer = setInterval(function() {
                // 步长值写到定时器的里面
                // 把我们步长值改为整数 不要出现小数的问题
                // var step = Math.ceil((target - obj.offsetLeft) / 10);
                var step = (target - obj.offsetLeft) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if (obj.offsetLeft == target) {
                    // 停止动画 本质是停止定时器
                    clearInterval(obj.timer);
                    // 回调函数写到定时器结束里面
                    if (callback) {
                        // 调用函数
                        callback();
                    }
                }
                // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
                obj.style.left = obj.offsetLeft + step + 'px';

            }, 15);
        }
        var span = document.querySelector('span');
        var btn500 = document.querySelector('.btn500');
        var btn800 = document.querySelector('.btn800');

        btn500.addEventListener('click', function() {
            // 调用函数
            animate(span, 500);
        })
        btn800.addEventListener('click', function() {
                // 调用函数
                animate(span, 800, function() {
                    // alert('你好吗');
                    span.style.backgroundColor = 'red';
                });
            })
```


