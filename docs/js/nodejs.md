# NodeJS

## NodeJS 介绍

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。Node.js 的包管理器 npm ，是全球最大的开源库生态系统。

### NodeJS 作用

- 统一前后端编程语言环境。
- 带来高性能的 I/O 操作。
- 并行 I/O 可以更高效的利用分布式环境。
- 并行 I/O 提高 Web 渲染能力。
- 可用于云计算平台。
- 可用于游戏开发。
- 工具类应用。

## NodeJS 模块

由于 Node.js 的模块系统构建时期还没有 ES6 模块化机制，因此它采用的是 CommonJs 模块化来实现的。到后来为了兼容不同类型的模块系统，增加了对 AMD 和 ES6 模块化的支持。不过，我们通常使用 CommonJs 和 ES6 模块化。

在 Node.js 模块系统中，每个文件都被视为独立的模块。

**示例 1**

模块导入语法:

```javascript
const moduleName = require("test1");
console.log(moduleName);
```

步骤二：

模块导出语法: 使用同样的方法新建一个名为 `test1.js` 的文件，在其中写入以下代码。

```javascript
/*======== 方式一===========*/
module.exports = {
  name: "apple",
  price: 8,
};

/*======== 方式二===========*/
exports.name = "apple";
exports.price = 8;
```

步骤三：在终端使用以下命令运行（这里演示的是方式一）：

```shell
node test
// { name: "apple",price: 8}
```



注意：直接采用 exports 导出变量的时候，**不能修改 exports 的指向**，因此下面的写法是错误的。

```js
exports = {
  name: "apple",
  price: 8,
};
```

### NodeJS 内置模块

- HTTP 模块：处理客户端的网络请求。
- URL 模块：处理客户端请求过来的 URL。
- Query Strings 模块：处理客户端通过 get/post 请求传递过来的参数。
- File System 模块：处理客户端与服务器之间的文件读取操作。
- Path 模块：操作文件的路径，为文件操作服务。
- Global 模块：全局共享的，不需要导入模块即可以使用。

### NodeJS 异步编程

#### **回调函数**

回调函数就是一个通过函数指针调用的函数。如果你把函数的指针（地址）作为参数传递给另一个函数，当这个指针被用来调用其所指向的函数时，我们就说这是回调函数。回调函数不是由该函数的实现方法直接调用，而是在特定的事件或条件发生时由另外的一方调用的，用于对该事件或条件进行响应。

test5.js:

```javascript
function haveBreakfast(food, drink, callback) {
  console.log("早餐" + food + ", " + drink);
  if (callback && typeof callback === "function") {
    callback();
  }
}

haveBreakfast("toast", "coffee", function () {
  console.log("早餐吃完了，工作了啦!");
});
```

在终端使用以下命令运行（这里演示的是方式一）：

```shell
node test5.js
```

可以看到，以下结果：

![image-20220223215718242](/assets/web/202202232157285.png)

#### **阻塞**

由于 Node 保持了 JavaScript 在浏览器中单线程的特点，因此只要一讲到 “阻塞” 问题，不得不提的就是“单线程”。单线程在程序执行时，所走的程序路径按照连续顺序排下来，前面的必须处理好，后面的才会执行。阻塞就好比如“老板让办公室的小姐姐写一篇文章，小姐姐说自己是单线程的同步操作，必须等到昨天在网上买的一件衣服到手之后才能写文章，在衣服没到之前就干坐着等待”。因此，在 Node 开发环境当中，我们应当少用同步操作，以减少阻塞问题。

在浏览器环境中，最简单常见的一个同步阻塞案例：

```javascript
alert("我是一个同步阻塞，当我未关闭的时候，后面的代码都不会被执行！");
```

#### **非阻塞**

结合上面阻塞的案例，非阻塞就好比如“饭店服务员给这一桌的顾客点完餐之后将菜单交给厨师就立马去给下一桌顾客点餐，而不是等待这一桌顾客的菜上完并吃完后才去服务下一桌顾客”。在 JavaScript 编程当中，通常在请求后台数据的时候采用异步 I/O 操作，此过程并不需要等待后台数据请求回来之后再往下执行任务，当所有任务完成之后，再通过轮询策略读取后台返回结果，因此这是一个非阻塞的单线程。

在浏览器环境中，最简单常见的一个非阻塞案例：

 `index.txt` :

```text
xxxxx
```

index6.js:

```javascript
var fs = require("fs");
fs.readFile("index.txt", function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});
console.log("程序执行结束!");
```

在终端使用以下命令运行：

```shell
node index6.js
// 程序执行结束！
// xxxxx
```

#### **异步编程**

nodejs 保持了 Javascript 的单线程特点，为了高效使用硬件，nodejs 编程中大量使用了异步编程技术。因此异步编程对 nodejs 尤为重要。异步编程主要解决方案：

- 事件发布/订阅模式。
- Promise/Deferred 模式。
- 流程控制库。

##### **事件发布/订阅模式**

事件监听器模式是一种广泛用于异步编程的模式，是回调函数的事件化，又称发布/订阅模式。Node 自身提供的 events 模块是发布/订阅模式的一个简单实现，Node 中部分模块都继承自它，这个模块比前端浏览器中的大量 DOM 事件简单，不存在事件冒泡，也不存在 preventDefault()、stopPropagation() 等控制事件传递的方法。它具有 `addListener/on()`、`once()`、`removeListener()`、`removeAllListener()` 和 `emit()` 等基本的事件监听模式的方法实现。事件发布/订阅模式的操作极其简单。

 `index1.js` 

```javascript
const EventEmitter = require("events");
const myEmitter = new EventEmitter();

/*======== 订阅===========*/
myEmitter.on("event", () => {
  console.log("A");
});

/*======== 发布===========*/
myEmitter.emit("event");
```

在终端使用以下命令运行：

```shell
node index1 //A
```

##### **Promise/Deferred 模式**

对于使用过 `jQuery/ajax` 技术的前端工程师而言，通过 `Promise/Deferred` 模式解决异步编程的方案并不陌生。在以往，异步的广泛使用使得回调、嵌套出现，一旦出现深度的嵌套，就会让我们后期的维护变得及其的困难。当我们使用 `Promise/Deferred` 模式能够在很大程度上解决这个问题。例如，我们可以通过该模式来封装一个自定义的请求后台数据的方法：

示例：

步骤一：在终端输入以下命令，安装 jQuery 依赖。

```shell
npm install jquery
```

步骤二：在终端输入以下命令，安装 jsdom。

```shell
npm install jsdom
```

步骤三：新建一个名为 index.js 文件，引入 jQuery，并输入代码。

```javascript
//引入jQuery
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { document } = new JSDOM(
  "<!doctype html><html><body></body></html>"
).window;
global.document = document;
const window = document.defaultView;
const $ = require("jquery")(window);
//输入代码
function request(option) {
  /*======== 这调用了jQuery的Deferred方法===========*/
  var def = $.Deferred();
  if (!option || !option.url) {
    throw Error("url is undefined.");
  }
  var _config = {
    type: "get",
    dataType: "json",
    success: function (res) {
      /*======== 通过resolve来改变def对象的状态为“成功”===========*/
      def.resolve(res);
    },
    error: function (a, b, err) {
      /*======== 通过reject来改变def对象的状态为“失败”===========*/
      def.reject(err);
    },
  };
  $.extend(_config, option, true);
  $.ajax(_config);

  /*======== 返回def对象的承诺（promise）===========*/
  return def.promise();
}

/*======== request调用===========*/
var option = {
  url: "./admin/test.php",
  data: {
    name: "loushengyue",
  },
};
request(option).then(
  function () {
    /*======== 成功时执行的回调函数===========*/
  },
  function () {
    /*======== 失败时执行的回调函数===========*/
  }
);
console.log(option);
```

步骤四：在终端使用以下命令运行：

```shell
node index.js
```

会看到，

![image-20220223222730755](/assets/web/202202232227794.png)

##### **流程控制库**

由于 Node 融入了 ES6 的特征，因此我们在 Node 编程时也可以采用 ES6 的流程控制模块 async 来解决异步编程问题。例如：

示例：新建一个名为 `index3.js` 的文件，在其中写入以下代码。

```javascript
var option1 = {
  url: "./admin/test.php",
  data: {
    name: "loushengyue",
  },
};
var option2 = {
  url: "./admin/test.php",
  data: {
    name: "wangxiaoming",
  },
};
function request(a) {
  console.log(a);
  return a;
}

const myAsyncFn = async function () {
  /*======== request是一个异步函数 const是声明一个常量===========*/
  const teacher = await request(option1);
  const student = await request(option2);

  /*======== 输出老师信息===========*/
  console.log(teacher);

  /*======== 输出学生信息===========*/
  console.log(student);
};

/*======== 调用async函数===========*/
myAsyncFn(option1, option2);
```

在终端使用以下命令运行：

```shell
node index3.js
```

![image-20220223222829420](/assets/web/202202232228481.png)

### NodeJS Buffer 缓存区

Buffer 是 Node.js 中的一个用来读取或操作二进制数据流的全局变量，它可以在 TCP 流或文件系统操作等场景中处理二进制数据流。Buffer 类的实例类似于整数数组，但 Buffer 的大小是固定的、且在 V8 堆外分配物理内存。Buffer 的大小在被创建时确定，且无法调整。

`Buffer.from(array)`：方法返回一个新建的包含所提供的字节数组的副本的 Buffer。

示例， 新建一个名为 `index2.js` 的文件，在其中写入以下代码。

```javascript
const buf = Buffer.from("hello");

/*======== <Buffer 68 65 6c 6c 6f>===========*/
console.log(buf);

/*======== hello===========*/
console.log(buf.toString());
```

从上述案例我们可以看出，通过 `Buffer.from` 方法可以得到一个字符串的 Buffer 缓冲，而通过 `toString` 方法能够将 Buffer 转换成字符串。因此，我们可以通过这两个方法轻松的操作二进制数据流。

`Buffer.alloc(size[, fill[, encoding]])` 方法能够为我们分配一个大小为 size 字节新建的 Buffer。如果 fill 为 undefined，则该 Buffer 会用 0 填充。例如：

示例， 新建一个名为 `index.js` 的文件，在其中写入以下代码。

```javascript
const buf1 = Buffer.alloc(5);
const buf2 = Buffer.alloc(5, 3);
const buf3 = Buffer.alloc(6, "中文", "utf-8");

/*======== <Buffer 00 00 00 00 00>===========*/
console.log(buf1);

/*======== <Buffer 03 03 03 03 03>===========*/
console.log(buf2);

/*======== <Buffer e4 b8 ad e6 96 87>===========*/
console.log(buf3);

/*======== 中文===========*/
console.log(buf3.toString());
```

注意： 一个汉字的需要 3 个字节的空间来存储。`Buffer.alloc` 方法默认的编码方式就是 “utf-8”，因此上面的案例中可以不写。

`Buffer.allocUnsafe(size):Buffer.allocUnsafe` 方法可以为我们分配一个大小为 size 字节的新建的 Buffer。如果 size 大于 `buffer.constants.MAX_LENGTH` 或小于 0，则抛出 `RangeError` 错误。如果 size 为 0，则创建一个长度为 0 的 Buffer。

示例， 新建一个名为 `index3.js` 的文件，在其中写入以下代码。

```javascript
const buf1 = Buffer.allocUnsafe(10);
const buf2 = Buffer.allocUnsafe(10);
const buf3 = Buffer.allocUnsafe(10);

/*======== <Buffer 06 00 00 00 00 00 00 00 e8 24>===========*/
console.log(buf1);

/*======== <Buffer 20 da 12 00 00 00 00 00 10 28>===========*/
console.log(buf2);

/*======== <Buffer 50 2b c1 02 00 00 00 00 00 00>===========*/
console.log(buf3);
```

注意：因为 `Buffer.allocUnsafe` 方法给我们分配的空间是**未重置**的，保留了硬盘当中之前存储过的垃圾信息，因此在使用的时候是**不安全的**，不过它的读取效率要比 `Buffer.alloc` 高。正因为这个特性，上述案例当中我们采用同样的方式申请了 3 个 `buffer` ，但最终得到的结果却没有相同的（因为同一块长度为 10 的磁盘不能同时被 3 个不同的对象来使用）。

Buffer 与字符编码：Buffer 实例一般用于表示编码字符的序列，比如 UTF-8、UCS2、Base64 或十六进制编码的数据。通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换。

示例，新建一个名为 `index5.js` 的文件，在其中写入以下代码。

```javascript
const buf = Buffer.from("xxxx");

/*======== <Buffer 78 78 78 78>===========*/
console.log(buf);

/*======== xxxx===========*/
console.log(buf.toString());

/*======== xxxx===========*/
console.log(buf.toString("utf-8"));

/*======== eHh4eA=============*/
console.log(buf.toString("base64"));
```

由上面的案例，我们不难看出 `toString` 方法可以将我们的 `Buffer` 转换成指定格式（比如：utf-8 和 base64 格式，其中 utf-8 为 toString 方法默认编码格式）的 JavaScript 字符串。

Node.js 目前支持的字符编码包括：

- ascii：仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
- utf8：多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
- utf16le：2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
- ucs2：'utf16le' 的别名。
- base64：Base64 编码。当从字符串创建 Buffer 时，按照 RFC4648 第 5 章的规定，这种编码也将正确地接受“URL 与文件名安全字母表”。
- latin1：一种把 Buffer 编码成一字节编码的字符串的方式（由 IANA 定义在 RFC1345 第 63 页，用作 Latin-1 补充块与 C0/C1 控制码）。
- binary：'latin1' 的别名。
- hex：将每个字节编码为两个十六进制字符。

### fs 模块

Node.js 的 fs 是一个类似标准 POSIX 函数的用来操作文件的模块，它对所有的文件系统操作都有异步和同步两种形式。

**不过，需要注意的是:“当采用异步形式的时候，回调函数的第一个参数都会保留给异常，如果操作成功完成，则第一个参数会是 null 或 undefined ”。**

fs 模块引入及基本用法:

```javascript
/*======== 模块引入===========*/
const fs = require("fs");

/*======== 异步的方式===========*/
fs.readFile("./test.js", function (err, data) {
  /*======== handle===========*/
});

/*======== 同步的方式===========*/
const data = fs.readFileSync("./test.js");
```

异步的方式打开文件: `fs.open(path, flags,[mode], callback), fs.open` 方法通常用来打开一个文件地址、URL 或者 Buffer。其中 flags 参数可以是：

- `r` 以读取模式打开文件。如果文件不存在则发生异常。
- `r+` 以读写模式打开文件。如果文件不存在则发生异常。
- `rs+` 以同步读写模式打开文件。命令操作系统绕过本地文件系统缓存。

示例：

步骤一：新建一个名为 `demo1.js` 的文件，在其中输入以下代码：

```javascript
let a = "apple";
console.log(a);
```

步骤二：新建一个名为 `demo2.js` 的文件，在其中输入以下代码：

```javascript
let fs = require("fs");
fs.open("/home/project/demo1.js", "rs+", function (err, data) {
  if (err) {
    console.log("文件打开失败！");
    return false;
  }
  console.log("文件打开成功");
});
```

步骤三：在终端里面输入以下命令：

```shell
node demo2.js
// 文件打开成功
```

`fs.readFile(path[, options], callback)` ：异步的方式读取文件，**方法可以用来读取一个文件的具体内容**，下面是一个采用异步的方式读取文件信息的案例。

示例：

步骤一：新建一个名为 `demo.txt` 的文件，在其中输入以下内容。

```txt
xxxxx
```

步骤二：新建一个名为 `demo3.js` 的文件，在其中输入以下代码：

```javascript
let fs = require("fs");
fs.readFile("/home/project/demo.txt", "utf-8", function (err, data) {
  if (err) throw err;

  /*======== 这里将输出demo.txt的具体内容===========*/
  console.log(data);
});
```

步骤三：在终端里面输入以下命令：

```shell
node demo3.js
```

如果您需要使用同步的方式来读取文件，可以使用 `fs.readFileSync` 方法来实现。由于 fs 模块对每一个文件操作都提供了同步和异步两种操作方式，这里以及下文都将只演示异步的方式（因为，方法的实现就差一个回调函数）。

异步的方式写入文件。

```javascript
fs.write(fd , buffer[, offset[, length[, position]]], callback)
```

通过 fs.write 方法可以将字符串或者 Buffer 写入一个指定的文件（fd）。

示例：

步骤一：新建一个名为 `demo1.txt` 的文件。

步骤二：新建一个名为 demo4.js 的文件，在其中输入以下代码：

```javascript
let fs = require("fs");
fs.open("/home/project/demo1.txt", "rs+", function (err, fd) {
  if (err) {
    console.log("文件打开失败！");
    return false;
  }

  fs.write(fd, "hello world", function (err, written, str) {
    if (err) throw err;

    /*======== 11===========*/
      // 位数
    console.log(written);

    /*======== hello world===========*/
    console.log(str);
  });
});
```

`fs.close(fd, callback)`：异步的方式关闭文件与 fs.open 方法相反，fs.close 方法可以用来关闭一个已经打开的文件。

示例：

步骤一：新建一个名为 `demo2.txt` 的文件。

步骤二：新建一个名为 `demo5.js` 的文件，在其中输入以下代码：

```javascript
let fs = require("fs");
fs.open("/home/project/demo2.txt", "rs+", function (err, fd) {
  if (err) {
    console.log("文件打开失败！");
    return false;
  }
  fs.close(fd, (err) => {
    /*======== 关闭文件的回调函数体===========*/
    if (err) throw err;
    console.log("关闭文件成功");
  });
});
```

`fs.unlink(path, callback)`：异步的方式删除文件 fs.unlink 方法可以删除一个文件（不能删除目录）。

示例：

步骤一： 新建一个名为 `demo3.txt` 的文件。

步骤二：新建一个名为 `demo6.js` 的文件，在其中输入以下代码：

```javascript
let fs = require("fs");
fs.unlink("/home/project/demo3.txt", (err) => {
  if (err) throw err;
  console.log("删除成功！");
});
```

`fs.readdir(path[, options], callback)` ：读取一个目录当我们需要知道某个目录下都有那些文件或者文件夹的时候，我们可以使用 fs.readdir 方法来实现。

示例：新建一个名为 `demo7.js` 的文件，在其中输入以下代码：

```javascript
let fs = require("fs");
fs.readdir("/home/project", (err, files) => {
  if (err) throw err;

  /*======== 这里将输出当前路径下的所有文件、文件夹名称并通过“；”分隔===========*/
  console.log(files.join(";"));
});
```

> 注意：fs 模块的每一个方法都提供了异步与同步的两种操作方式。其中，异步的方式性能高，是一种推荐的操作方式。如果您需要采用同步的方式，只要在异步方法名后面加上 Sync 即可，同时去掉末尾的 callback 参数。

#### Fs流

Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对 http 服务器发起请求的 request 对象就是一个 Stream，还有 stdout（标准输出）。

流是一个抽象接口，有四种流类型：

- readable：可读。
- writable：可写操作。
- duplex：可读可写操作。
- transform：操作被写入数据，然后读出结果。

所有的 stream 对象都是 EventEmitter 的实例，常用事件有：

- data：当有数据可读触发。
- end：没有数据可读触发。
- error：发生错误时触发。
- finish：完成触发。

`fs.createReadStream(path[, options])` ：创建一个可读流 fs.createReadStream 方法通常用来创建一个可读流。

示例：

步骤一：新建一个名为 `demo4.txt` 的文件。在其中写入以下内容。

```txt
Hello World
```

步骤二：新建一个名为 `demo8.js` 的文件，在其中输入以下代码：

```javascript
let fs = require("fs");
var data = "";

/*======== 创建可读流===========*/
var readerStream = fs.createReadStream("/home/project/demo4.txt");

/*======== 设置编码为 utf8===========*/
readerStream.setEncoding("UTF8");

/*======== 处理流事件 --> data, end, and error===========*/
readerStream.on("data", function (chunk) {
  data += chunk;
});
readerStream.on("end", function () {
  console.log(data);
});
readerStream.on("error", function (err) {
  console.log(err.stack);
});
console.log("程序执行完毕");
// 程序执行完毕
// Hello World
```

`fs.createWriteStream(path[, options])` ：创建一个可写流 fs.createWriteStream 方法可以创建一个可写入流对象，通过这个对象可以将自己想要写入的信息写到指定文件。

示例：

步骤一：新建一个名为 `demo5.txt` 的文件。

步骤二：新建一个名为 `demo9.js` 的文件，在其中输入以下代码：

```javascript
var fs = require("fs");
var data = "这是我要写入到demo5.txt文件中的数据";

/*======== 创建一个可以写入的流，写入到文件 demo5.txt 中===========*/
var writerStream = fs.createWriteStream("/home/project/demo5.txt");

/*======== 使用 utf8 编码写入数据===========*/
writerStream.write(data, "UTF8");

/*======== 标记文件末尾===========*/
writerStream.end();

/*======== 处理流事件 --> data, end, and error===========*/
writerStream.on("finish", function () {
  console.log("写入完成。");
});
writerStream.on("error", function (err) {
  console.log(err.stack);
});
console.log("程序执行完毕");

// 写入成功后读取测试
fs.readFile("/home/project/demo5.txt", "utf-8", function (err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
});
// 程序执行完毕
// 写入完成
// 这是我要写入到demo5.txt文件中的数据
```

`readerStream.pipe(writerStream)` ：将可读流信息导入可写流（即管道流）readerStream.pipe 方法可以将我们创建的**可读流文件信息一一导入到可写流当中。**

<u>**读出来导入到新的可写流中**</u>

示例：

步骤一：新建一个名为 `input.txt` 的文件。在其中写入以下内容 。

```txt
Hello World
```

步骤二： 新建一个名为 `output.txt` 的文件。

步骤三：新建一个名为 `demo10.js` 的文件，在其中输入以下代码：

```javascript
var fs = require("fs");

/*======== 创建一个可读流===========*/
var readerStream = fs.createReadStream("/home/project/input.txt");

/*======== 创建一个可写流===========*/
var writerStream = fs.createWriteStream("/home/project/output.txt");

/*======== 管道读写操作===========*/
/*======== 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中===========*/
readerStream.pipe(writerStream);
console.log("程序执行完毕");

// 写操作成功后读取测试
fs.readFile("/home/project/output.txt", "utf-8", function (err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
});
// 程序执行完毕
// Hello World
```

#### 链式流

链式是通过连接**输出流**到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。

例如我们可以用管道和链式来压缩和解压文件：

步骤一：新建一个名为 `demo6.txt` 的文件。

步骤二：新建一个名为 `demo11.js` 的文件，在其中输入以下代码：

```javascript
/*======== 压缩===========*/
var fs = require("fs");

/*======== 引进压缩模块===========*/
var zlib = require("zlib");

/*======== 压缩 demo6.txt 文件为 demo6.txt.gz===========*/
fs.createReadStream("demo6.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("demo6.txt.gz"));
console.log("文件压缩完成。");
//读取目录,查看文件是否压缩成功
fs.readdir("/home/project", function (err, files) {
  if (err) {
    throw err;
  }
  // files是一个数组
  // 每个元素是此目录下的文件或文件夹的名称
  console.log(files);
});
```

输出流和输入流吧，读取得是输出流，写入是输入。



```js
/*======== 解压===========*/
var fs = require("fs");
var zlib = require("zlib");

/*======== 解压 demo6.txt.gz 文件为 demo7.txt===========*/
fs.createReadStream("/home/project/demo6.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("demo7.txt"));
console.log("文件解压完成。");
//读取目录,查看文件是否压缩成功
fs.readdir("/home/project", function (err, files) {
  if (err) {
    throw err;
  }
  // files是一个数组
  // 每个元素是此目录下的文件或文件夹的名称
  console.log(files);
});
```

### http 模块

超文本传输协议（`HTTP，HyperText Transfer Protocol`)是互联网上应用最为广泛的一种网络协议。所有的 WWW 文件都必须遵守这个标准。设计 HTTP 最初的目的是为了提供一种发布和接收 HTML 页面的方法。1960 年美国人 Ted Nelson 构思了一种通过计算机处理文本信息的方法，并称之为超文本（`hypertext`）,这成为了 HTTP 超文本传输协议标准架构的发展根基。Ted Nelson 组织协调万维网协会（`World Wide Web Consortium`）和互联网工程工作小组（`Internet Engineering Task Force` ）共同合作研究，最终发布了一系列的 RFC ，其中著名的 RFC 2616 定义了 HTTP 1.1。

HTTPS（全称：`Hyper Text Transfer Protocol over Secure Socket Layer`），是以安全为目标的 HTTP 通道，简单讲是 HTTP 的安全版。即 HTTP 下加入 SSL 层，HTTPS 的安全基础是 SSL ，因此加密的详细内容就需要 SSL 。 它是一个 URI scheme（抽象标识符体系），句法类同 http:体系。用于安全的 HTTP 数据传输。https:URL 表明它使用了 HTTP ，但 HTTPS 存在不同于 HTTP 的默认端口及一个加密/身份验证层（在 HTTP 与 TCP 之间）。这个系统的最初研发由网景公司(Netscape)进行，并内置于其浏览器 `Netscape Navigator` 中，提供了身份验证与加密通讯方法。现在它被广泛用于万维网上安全敏感的通讯，例如交易支付方面。

我们知道传统的 HTTP 服务器会由 Aphche、Nginx、IIS 之类的软件来担任，但是 nodejs 并不需要，nodejs 提供了 http 模块，自身就可以用来构建服务器，而且 http 模块是由 C++ 实现的，性能可靠。

http 模块中封装了高效的 http 服务器和 http 客户端。`http.server` 是一个基于事件的 HTTP 服务器，内部是由 C++ 实现的，接口由 JavaScript 封装。`http.request` 是一个 HTTP 客户端工具，用于用户向服务器发送数据。

#### HTTP 服务端

`http.server` 是一个基于事件的 HTTP 服务器，所有的请求都被封装到独立的事件当中，我们只需要对他的事件编写相应的行数就可以实现 HTTP 服务器的所有功能，它继承自 `EventEmitter`，提供了以下的事件：

- request：当客户端请求到来的时候，该事件被触发，提供两个参数 request 和 response ，分别是 `http.ServerRequest` 和 `http.ServerResponse` 表示请求和响应的信息。
- connection：当 TCP 建立连接的时候，该事件被触发，提供了一个参数 `socket`，为 `net.socket` 的实例（底层协议对象）。
- close：当服务器关闭的时候会被触发。
- 除此之外还有 checkContinue、upgrade、clientError 等事件，我们最常用的还是 request 事件，http 也给这个事件提供了一个捷径：`http.createServer([requestListener])` 。

示例：

步骤一：新建一个名为 `demo13.js` 的文件。在其中输入以下代码：

```javascript
var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "content-type": "text/plain",
    });
    res.write("hello nodejs");
    res.end();
  })
  .listen(8080);
```

以上代码是通过直接创建一个 `http.Server` 对象，然后为其添加 `request` 事件监听，其实也就说 `createServer` 方法其实本质上也是为 `http.Server` 对象添加了一个 `request` 事件监听。

`http.ServerRequset` 请求信息：我们都知道 HTTP 请求分为两部分，分别是请求头和请求数据，如果请求的内容少的话就直接在请求头协议完成之后立即读取，请求数据如果相对较长一点，就需要一定的时间传输。因此提供了三个事件用于控制请求数据传输：

- `data`：当请求体数据到来时，该事件被触发，该事件一共一个参数 chunk，表示接受到的数据。
- `end`：当请求体数据传输完成时，该事件被触发，此后将不会再有数据到来。
- `close`：用户当前请求结束时，该事件被触发，不同于 end，如果用户强制终止了传输，也会触发 close。

ServerRequest 的属性，如下图：

![图片描述](/assets/web/202202242248240.png)

`http.ServerResponse` 返回客户端信息：`http.ServerResponse` 决定了用户最终能到的结果，它是由 `http.Server` 的 `request` 事件发送的，作为第二个参数传递。主要有三个函数：

- ```
  response.writeHead(statusCode,[headers])
  ```

  ：向请求的客户端发送响应头。

  - statusCode 是 HTTP 的状态码，如 200 为成功，404 未找到等；
  - headers 是一个类似关联数组的对象，表示响应头的每个属性；

- `response.write(data,[encoding])`：向请求客户端发送相应内容：data 是 buffer 或字符串，encoding 为编码 。

- `response.end([data],[encoding])`： 结束响应，告知用户所有发送已经完成，当所有要返回的内容发送完毕，该函数必须被调用一次，如果不调用，客户端永远处于等待状态。

#### HTTP 客户端

http 模块提供了两个函数 `http.request` 和 `http.get` ，功能是作为客户端向服务器端发送请求。

`http.request:http.request(options,callback)` 用于发起 http 请求，接收两个参数：

- options 是一个类似关联数组的对象，里面包含一些请求的参数。
- callback 表示请求后的回调。

options 常用的参数，如下图：

![图片描述](/assets/web/202202242254118.png)

示例：新建一个名为 `demo14.js` 的文件。在其中输入以下代码：

```javascript
var http = require("http");
var options = {
  hostname: "www.baidu.com",
  methods: "GET",
  path: "/",
};
var req = http.request(options, function (res) {
  console.log("STAUS: " + res.statusCode);
  console.log("HRADERS: " + JSON.stringify(res.headers));
  res.setEncoding("utf-8");
  res.on("data", function (chunk) {
    console.log(chunk);
  });
});
req.end();
```

> 需要记住的是，如果我们使用 http.request 方法时没有调用 end 方法，服务器将不会收到信息。

`http.get:http` 模块还提供了 `http.get(options,callback)`，用来更简单的处理 GET 方式的请求，它是 http.request 的简化版本，唯一的区别在于 http.get 自动将请求方法设为 GET 请求，同时不需要手动调用 `req.end()`; 这个就好像 jQuery 中的 .ajax 和.GET 的区别。

示例:新建一个名为 `demo15.js` 的文件。在其中输入以下代码：

```javascript
var http = require("http");
var options = {
  hostname: "www.baidu.com",
};
var req = http.get(options, function (res) {
  console.log("STAUS: " + res.statusCode);
  console.log("HRADERS: " + JSON.stringify(res.headers));
  res.setEncoding("utf-8");
  res.on("data", function (chunk) {
    console.log(chunk);
  });
});
```

http.ServerRequset 和 http.request 区别在于 `http.ServerRequest` 表示服务端的一些请求信息反馈给客户端。`http.request()` 是客户端用于发起 http 请求的一个函数。

### 其他模块

#### path 模块

path 模块是一个专门处理路径问题的模块。通过它，我们可以轻松地获得一个文件、文件夹的绝对路径、相对路径、文件名称、文件扩展名等信息。

`normalize`：无论是相同系统环境还是不同系统环境，我们编写的路径格式通常是有区别的，通过 `path.normalize` 方法，我们可以将其转换成该系统环境中大家都认可的一种统一格式。

示例：新建一个名为 `demo16.js` 的文件。在其中输入以下代码：

```javascript
var path = require("path");
var myPath = path.normalize("/foo/bar//baz/asdf/quux/..");
console.log(myPath);
```

join：`path.join` 方法可以将两个或者多个路径拼接成一个绝对路径，并能够识别当中的绝对路径及相对路径。

- 传入的参数是字符串的路径片段，可以是一个，也可以是多个。
- 返回的是一个拼接好的路径，但是根据平台的不同，他会对路径进行不同的规范化，举个例子，Unix 系统是 `/`，Windows 系统是 `\`，那么你在两个系统下看到的返回结果就不一样。
- 如果返回的路径字符串长度为零，那么他会返回一个 `.`，代表当前的文件夹。
- 如果传入的参数中有不是字符串的，那就直接会报错。

示例：新建一个名为 `demo17.js` 的文件。在其中输入以下代码：

```javascript
var path = require("path");
var path1 = "path1",
  path2 = "path2/pp",
  path3 = "/path3";
var myPath = path.join(path1, path2, path3);
console.log(myPath);//path1/path2/pp/path3
```

resolve：`path.resolve` 方法会把一个路径或路径片段的序列解析为一个绝对路径。

示例：新建一个名为 `demo18.js` 的文件。在其中输入以下代码：

```javascript
var path = require("path");
var myPath = path.resolve("path1", "path2", "a/b\\c/");
console.log(myPath);//home/path1.path2/a/b\c
```

parse：`path.parse` 方法返回一个对象，对象的属性表示 path 的元素。如下图：

![图片描述](/assets/web/202202262206608.png)

示例：新建一个名为 `demo19.js` 的文件。在其中输入以下代码：

```javascript
var path = require("path");
var obj = path.parse(
  "/Users/laihuamin/Documents/richEditor/editor/src/task.js"
);
console.log(obj);
```

效果如图：

![image-20220226220802693](/assets/web/202202262208761.png)

#### url 模块

URL 模块用于解析和处理 URL 字符串，提供了三个方法：

- `parse`：通过此方法，我们可以轻松获取 URL 中详细的某一部分数据（例如原始 url）。
- `format`：与 parse 方法相反，通过此方法我们可将 url 对象轻松转换成 url 字符串。
- `resolve`：通过此方法，我们可以轻松获得当前目录的绝对路径。

其语法为：

```javascript
parse(urlStr[, parseQueryString][, slashesdenotehost])
```

- `urlStr`：需要处理的 url 字符串。
- `parseQueryString`：是否将查询参数也解析成对象。为 true 时将使用查询模块分析查询字符串，默认为 false。
- `slashesDenoteHost`：解析主机处理，双斜线表示主机。默认为 false ，//foo/bar 形式的字符串将被解释成 { pathname: ‘//foo/bar' }；如果设置成 true ，//foo/bar 形式的字符串将被解释成 { host: foo', pathname: /bar' }。

示例：新建一个名为 `demo20.js` 的文件。在其中输入以下代码：

```javascript
var url = require("url");
var myurl = "http://www.nodejs.org/some/url/?with=query&param=that#about";
var parsedUrl = url.parse(myurl);
parsedUrl = {
  protocol: "http:",
  slashes: true,
  auth: null,
  host: "www.nodejs.org",
  port: null,
  hostname: "www.nodejs.org",
  hash: "#about",
  search: "?with=query&param=that",
  query: "with=query&param=that",
  pathname: "/some/url/",
  path: "/some/url/?with=query&param=that",
  href: "http://www.nodejs.org/some/url/?with=query&param=that#about",
};
```

`format`：format 方法就是 parse 的相反过程，把对象转换成 url 字符串。

示例：新建一个名为 `demo21.js` 的文件。在其中输入以下代码：

```javascript
var url = require("url");
var testObj1 = {
  protocol: "http:",
  slashes: true,
  auth: null,
  host: "www.nodejs.org",
  port: null,
  hostname: "www.nodejs.org",
  hash: "#about",
  search: "?with=query&param=that",
  query: "with=query&param=that",
  pathname: "/some/url/",
  path: "/some/url/?with=query&param=that",
  href: "http://www.nodejs.org/some/url/?with=query&param=that#about",
};
var rsUrl = url.format(testObj1);//http://www.nodejs.org/some/url/?with=query&param=that#about
```

`resolve`：resolve 方法返回从根目录指定到当前目录的绝对路径 url 。返回结果去除参数和锚点，返回结果为标准 url 路径格式。

示例：新建一个名为 `demo22.js` 的文件。在其中输入以下代码：

```javascript
var url = require("url");
var url1 = url.resolve("/one/two/three", "four");

/*======== '/one/two/four'===========*/
console.log(url1);
var url2 = url.resolve("http://example.com/", "/one");

/*======== 'http://example.com/one'===========*/
console.log(url2);
var url3 = url.resolve("http://example.com/one", "/two");

/*======== 'http://example.com/two'===========*/
console.log(url3);
```

## NPM

### NPM 包管理器介绍

NPM（`node package manager`），通常称为 node 包管理器。顾名思义，它的主要功能就是管理 node 包，包括：安装、卸载、更新、查看、搜索、发布等。

NPM 的背后，是基于 `couchdb` 的一个数据库，详细记录了每个包的信息，包括作者、版本、依赖、授权信息等。它的一个很重要的作用就是：将开发者从繁琐的包管理工作（版本、依赖等）中解放出来，更加专注于功能的开发。

NPM 为我们打开了连接整个 JavaScript 天才世界的一扇大门。它是世界上最大的软件注册表，每星期大约有 30 亿次的下载量，包含超过 600000 个 包（package） （即，代码模块）。来自各大洲的开源软件开发者使用 npm 互相分享和借鉴。

NPM 是随同 NodeJS 一起安装的包管理工具，能解决 NodeJS 代码部署上的很多问题，常见的使用场景有以下几种：

- 允许用户从 NPM 服务器下载别人编写的第三方包到本地使用。
- 允许用户从 NPM 服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到 NPM 服务器供别人使用。

NPM 由三个独立的部分组成：

- 网站 -- 是开发者查找包（package）、设置参数以及管理 npm 使用体验的主要途径。
- 注册表（registry）-- 是一个巨大的数据库，保存了每个包（package）的信息。
- 命令行工具 (CLI) -- CLI 通过命令行或终端运行。开发者通过 CLI 与 npm 打交道

npm 已经集成到 nodejs 上了，安装 nodejs 之后自动带有 npm 功能，因此，不再需要安装 npm 。我们可以通过输入 "npm -v" 来测试是否成功安装，出现版本提示表示安装成功。

### NPM 包安装模式

NPM 的包安装分为本地安装（local）、全局安装（global）两种。

两者区别：

- 本地安装：package 会被下载到当前所在目录，也只能在当前目录下使用。
- 全局安装：package 会被下载到到特定的系统目录下，安装的 package 能够在所有目录下使用。

本地安装：

```shell
npm install <Module Name>
```

全局安装：

```shell
npm install <Module Name> -g
/*======== 通过 npm 本地安装 vue 命令行工具===========*/
npm install vue
```

运行以上命令，就会在当前目录下安装 vue。安装结束后，当前目录下会多出一个 node_modules 目录，vue 就安装在里面。

上面已经安装了 vue，然后我们跑到其他目录下面运行如下命令：vue控制台提示 vue 命令不存在，为什么呢？因为上面只是进行了本地安装，vue 命令只能在对应安装目录下使用。

如果需要在所有目录下使用，采用全局安装。运行以上代码后，在所有目录下都可以使用 vue 命令了。

```shell
npm install vue -g
```

### NPM 包管理

npm 的包管理命令是使用频率最高的，所以也是我们需要牢牢记住并熟练使用的。主要包括：安装、卸载、更新、查看、搜索、发布等。

安装最新版本模块：

```shell
npm install <Module Name>
```

安装某个版本的模块：

```shell
/*======== version为版本号===========*/
npm install <Module Name>@"version"
```

卸载模块：

```shell
npm uninstall <Module Name>
```

卸载某个版本的模块：

```shell
/*======== version为版本号===========*/
npm uninstall <Module Name>@"version"
```

查看当前目录安装了哪些模块：

```shell
npm ls
```

查看特定某个模块的安装目录、版本：

```shell
npm ls <Module Name>
```

查看特定某个模块的详细信息：

```shell
npm info <Module Name>
```

更新模块：

```shell
npm update <Module Name>
```

搜索模块：

```shell
npm search <Module Name>
```

## Node.js 路由

路由是指客户端请求地址与服务器程序代码的对应关系，要针对不同的 URL 有不同的处理方式，简单来说，就是请求什么响应什么。例如，我们访问 `http://localhost:3000/index` 这个地址时访问的是首页，访问 `http://localhost:3000/login` 这个地址时访问的是登录页界面。

![图片描述](/assets/web/202202262247883.png)

路由过程会在路由模块中**结束**，并且路由模块并不是真正针对请求**采取行动**的模块，否则当我们的应用程序变得更为复杂的时候就将无法得到很好的扩展。

示例：

步骤一： 新建一个名为 `app.js` 的文件。在其中输入以下代码：

```js
// 1.引入系统模块 http
const http = require("http");
const url = require("url");

// 2.创建网站服务器
const app = http.createServer();

// 3.为网站服务器对象添加请求事件
// 4.实现路由功能（请求方式、请求地址）
app.on("request", (req, res) => {
  // 获取请求方式
  const method = req.method.toLowerCase();
  // 获取请求地址
  const pathname = url.parse(req.url).pathname;

  res.writeHead(200, {
    "content-type": "text/html;charset=utf8",
  });

  if (method == "get") {
    if (pathname == "/" || pathname == "/index") {
      res.end("欢迎来到首页");
    } else if (pathname == "/list") {
      res.end("欢迎来到列表页");
    } else {
      res.end("您访问的页面不存在");
    }
  } else if (method == "post") {
  }
});

app.listen(8080);
console.log("服务器启动成功");
```

## Node.js 全局对象

JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。

在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global。在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。

### 全局对象与全局变量

global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条件的变量是全局变量：

- 在最外层定义的变量；
- 全局对象的属性；
- 隐式定义的变量（未定义直接赋值的变量）。

当你定义一个全局变量时，这个变量同时也会成为全局对象的属性，反之亦然。需要注意的是，在 `Node.js` 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的，而模块本身不是最外层上下文。

> 注意：最好不要使用 var 定义变量以避免引入全局变量，因为全局变量会污染命名空间，提高代码的耦合风险。

Node 中全局对象下有以下方法，可以在任何地方使用，global 可以忽略。

| 方法            | 描述           |
| --------------- | -------------- |
| console.log()   | 在控制台中输出 |
| setTimeout()    | 设置超时定时器 |
| clearTimeout()  | 清除超时定时器 |
| setInterval()   | 设置间歇定时器 |
| clearInterval() | 清除间歇定时器 |

### console

console 用于提供控制台标准输出，它是由 Internet Explorer 的 JScript 引擎提供的调试工具，后来逐渐成为浏览器的实施标准。

Node.js 沿用了这个标准，提供与习惯行为一致的 console 对象，用于向标准输出流（stdout）或标准错误流（stderr）输出字符。

console.log()：向标准输出流打印字符并以换行符结束。

console.log 接收若干个参数，如果只有一个参数，则输出这个参数的字符串形式。如果有多个参数，则 以类似于 C 语言 printf() 命令的格式输出。

第一个参数是一个字符串，如果没有参数，只打印一个换行。新建 index.js 文件，代码如下：

```js
console.log("Hello world");
console.log("byvoid%diovyb");
console.log("byvoid%diovyb", 1991);
```

`console.error()`：与 `console.log()` 用法相同，只是向标准错误流输出。

`console.trace()`：向标准错误流输出当前的调用栈。

```js
console.trace();
```

![image-20220227164717373](/assets/web/202202271647474.png)

**`console.info([data][, ...])`**
该命令的作用是返回信息性消息，这个命令与console.log差别并不大，除了在chrome中只会输出文字外，其余的会显示一个蓝色的惊叹号。

**`console.dir(obj[, options])`**
用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示。

**`console.assert(value[, message][, ...])`**
用于判断某个表达式或变量是否为真，接手两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果。

**实例**

步骤一：新建一个名为 `global.js` 的文件。在其中输入以下代码：

```js
console.log("我是 global 对象下面的console.log 方法输出的内容");
console.time("获取数据");

console.log("Hello world");
console.log("byvoid%diovyb");
console.log("byvoid%diovyb", 1991);

console.timeEnd("获取数据");
```

![image-20220227182357970](/assets/web/202202271823052.png)

**`console.time()`和`console.timeEnd()`获取执行区间**

### setTimeout(cb, ms)

`setTimeout(cb, ms)` 全局函数在指定的毫秒（ms）数后执行指定函数（cb）。`setTimeout()` 只执行一次指定函数。返回一个代表定时器的句柄值。

**实例**

步骤一：新建一个名为 `demo.js` 的文件。在其中输入以下代码：

```js
console.log("两秒后输出 Hello, World!");

function printHello() {
  console.log("Hello, World!");
}
// 两秒后执行以上函数
setTimeout(printHello, 2000);
```

### clearTimeout(t)

`clearTimeout(t)` 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。参数 t 是通过 setTimeout() 函数创建的定时器。

**实例**

步骤一：新建一个名为 `demo1.js` 的文件。在其中输入以下代码：

```js
function printHello() {
  console.log("Hello, World!");
}
// 两秒后执行以上函数
const t = setTimeout(printHello, 2000);

// 清除定时器
clearTimeout(t);
```

### setInterval(cb, ms)

`setInterval(cb, ms)` 全局函数在指定的毫秒（ms）数后执行指定函数（cb）。返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。

`setInterval()` 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。

**实例**

步骤一：新建一个名为 `demo2.js` 的文件。在其中输入以下代码：

```js
function printHello() {
  console.log("xxxx");
}
// 两秒后执行以上函数
setInterval(printHello, 2000);
```

### process

process 是一个全局变量，即 global 对象的属性。它用于描述当前 Node.js 进程状态的对象，提供了一个与操作系统的简单接口。通常在你写本地命令行程序的时候，少不了要和它打交道。下面将会介绍 process 对象的一些最常用的成员方法。

| 事件                  | 描述                                                         |
| --------------------- | ------------------------------------------------------------ |
| **exit**              | 当进程准备退出时触发。                                       |
| **beforeExit**        | 当 node 清空事件循环，并且没有其他安排时触发这个事件。通常来说，当没有进程安排时 node 退出，但是 'beforeExit' 的监听器可以异步调用，这样 node 就会继续执行。 |
| **uncaughtException** | 当一个异常冒泡回到事件循环，触发这个事件。如果给异常添加了监视器，默认的操作（打印堆栈跟踪信息并退出）就不会发生。 |
| **Signal 事件**       | 当进程接收到信号时就触发。信号列表详见标准的 POSIX 信号名，如 SIGINT、SIGUSR1 等。 |

process.argv 是命令行参数数组，第一个元素是 node，第二个元素是脚本文件名，从第三个元素开始每个元素是一个运行参数。

**实例**

步骤一：新建一个名为 `demo3.js` 的文件。在其中输入以下代码：

```js
process.on("exit", function (code) {
  // 以下代码永远不会执行
  setTimeout(function () {
    console.log("该代码不会执行");
  }, 0);

  console.log("退出码为:", code);
});
console.log("程序执行结束");
//程序执行结束
//退出码为: 0
```

遇到了异步代码，js将setTimeOut中的操作交给浏览器，浏览器启动一个计时器线程，等待0毫秒后将函数加入到消息队列，待本轮事件循环结束后，从消息队列中取出下一个事件执行。然而进程已经退出了，所以执行本地事件(两个console)，消息队列还没有取就没了。

再举个例子，

```text
setTimeOut(()=>console.log(1),0)
console.log(2)
//先打印2再打印1
```

## Node.js 常用工具

### util.inherits

`util.inherits(constructor, superConstructor)` 是一个实现对象间**原型继承**的函数。与常见的基于类的不同，JavaScript 的面向对象特性是基于原型的。JavaScript 没有提供对象继承的语言级别特性，而是通过原型复制来实现的。

在这里我们只介绍 `util.inherits` 的用法，示例如下：

步骤一：新建一个名为 demo.js 的文件，在其中输入以下代码：

```js
<!--demo.js-->
console.log('hello!');
// 父类
module.exports.Hello = function() {
    // 私有方法与变量
    this.pri = {
        name: ''
    };
    // 构造时执行的语句（相当于构造器）
    this.pri.name = '张三';
    this.sayHello = function() {
        console.log(this.pri.name);
    };
    return this; // 需返回 this，才可调用 Hello 的函数
};
// 子类
exports.sonHello = function() {
    this.pri.name = '李四';
    return this;
};
// 确定继承关系，sonHello 继承于 Hello
var util = require('util'); // 获取 util 对象
util.inherits(exports.Hello, exports.sonHello);
```

步骤二：新建一个名为 main.js 的文件，在其中输入以下代码:

```js
<!--main.js-->
// 获取模块
var c = require('./demo').Hello();
c.sayHello();

var s = require('./demo').sonHello();
s.sayHello();

var util = require('util');

// 将 c 和 s 转换成字符串输出
console.log(util.inspect(c));
console.log(util.inspect(s));
```

![image-20220301140129550](/assets/web/202203011401656.png)

### util.inspect

`util.inspect(object,[showHidden],[depth],[colors])` 是一个将任意对象转换为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。

- showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。
- depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多少。如果不指定 depth，默认会递归 2 层，指定为 null 表示将不限递归层数完整遍历对象。
- 如果 colors 值为 true，输出格式将会以 ANSI 颜色编码，通常用于在终端显示更漂亮的效果。

特别要指出的是，`util.inspect` **并不会简单地直接把对象转换为字符串，即使该对象定义了 toString 方法也不会调用**。

**实例**

步骤一：新建一个名为 demo1.js 的文件，在其中输入以下代码：

```js
var util = require("util");
function Person() {
  this.name = "byvoid";
  this.toString = function () {
    return this.name;
  };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));
```

![image-20220301140401293](/assets/web/202203011404382.png)

### util.isArray(object)

如果给定的参数 `object` 是一个数组返回 true，否则返回 false。

实例如下：

```js
var util = require("util");

util.isArray([]);
// true
util.isArray(new Array());
// true
util.isArray({});
// false
```

### util.isRegExp(object)

如果给定的参数 `object` 是一个正则表达式返回 true，否则返回 false。

实例如下：

```js
var util = require("util");

util.isRegExp(/some regexp/);
// true
util.isRegExp(new RegExp("another regexp"));
// true
util.isRegExp({});
// false
```

### util.isDate(object)

如果给定的参数 `object` 是一个日期返回 true，否则返回 false。

实例如下：

```js
var util = require("util");

util.isDate(new Date());
// true
util.isDate(Date());
// false (without 'new' returns a String)
util.isDate({});
// false
```

### util.isError(object)

如果给定的参数 `object` 是一个错误对象返回 true，否则返回 false。

实例如下：

```js
var util = require("util");

util.isError(new Error());
// true
util.isError(new TypeError());
// true
util.isError({ name: "Error", message: "an error occurred" });
// false
```

## Node.js 文件系统

### 系统模块 fs 文件操作

Node.js 提供一组类似 UNIX（POSIX）标准的文件操作 API。

f: file 文件，s: system 系统，文件操作系统。

![图片描述](/assets/web/202203011415593.png)

Node 导入文件系统模块（fs）语法如下所示：

```js
var fs = require("fs");
```

### 打开文件

**语法**

以下为在异步模式下打开文件的语法格式：

```js
fs.open(path, flags[, mode], callback);
```

**参数**

参数使用说明如下：

- path - 文件的路径。
- flags - 文件打开的行为。具体值详见下文。
- mode - 设置文件模式（权限），文件创建默认权限为 0666（可读，可写）。
- callback - 回调函数，带有两个参数如：callback(err, fd)。

flags 参数可以是以下值：

| Flag | 描述                                                   |
| ---- | ------------------------------------------------------ |
| r    | 以读取模式打开文件。如果文件不存在抛出异常。           |
| r+   | 以读写模式打开文件。如果文件不存在抛出异常。           |
| rs   | 以同步的方式读取文件。                                 |
| rs+  | 以同步的方式读取和写入文件。                           |
| w    | 以写入模式打开文件，如果文件不存在则创建。             |
| wx   | 类似 'w'，但是如果文件路径存在，则文件写入失败。       |
| w+   | 以读写模式打开文件，如果文件不存在则创建。             |
| wx+  | 类似 'w+'， 但是如果文件路径存在，则文件读写失败。     |
| a    | 以追加模式打开文件，如果文件不存在则创建。             |
| ax   | 类似 'a'， 但是如果文件路径存在，则文件追加失败。      |
| a+   | 以读取追加模式打开文件，如果文件不存在则创建。         |
| ax+  | 类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。 |

**实例**

接下来我们创建 demo.js 以及 input.txt 文件，并打开 input.txt 文件进行读写，代码如下所示：

```js
<!--demo.js-->
var fs = require("fs");

// 异步打开文件
console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
  console.log("文件打开成功！");
});
```

### 读取文件内容

Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，例如读取文件内容的函数有异步的 `fs.readFile()` 和同步的 `fs.readFileSync()`。

异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息（error）。

```js
fs.readFile('文件路径/文件名称',['文件编码',] callback);
```

建议大家使用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。

**实例**

在之前创建的 input.txt 文件中编辑以下内容：

```shell
文件读取实例
```

创建 file.js 文件, 代码如下：

```js
// 通过模块的名字 fs 对模块进行引用
var fs = require("fs");

// 异步读取 读取当前文件夹下的 input.tex
fs.readFile("./input.txt", "utf8", function (err, data) {
  // 如果文件读取出错 err 是一个对象，包含错误信息
  // 如果文件读取正确， err 是 null
  // data 是文件读取的结果
  if (err) {
    return console.error(err);
  }
  console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync("input.txt");
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");
```

### 写入文件内容

写入文件内容语法如下：

```js
fs.writeFile('文件路径/文件名称', '数据'[, options], callback);
```

writeFile 直接打开文件默认是 `w` 模式，所以如果文件存在，该方法写入的内容会覆盖旧的文件内容。

**参数使用说明如下：**

| 参数     | 使用说明                                                     |
| -------- | ------------------------------------------------------------ |
| file     | 文件名或文件描述符。                                         |
| data     | 要写入文件的数据，可以是 String（字符串）或 Buffer（缓冲）对象。 |
| options  | 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666， flag 为 `w`。 |
| callback | 回调函数，回调函数只包含错误信息参数（err），在写入失败时返回。 |

接下来我们创建 file1.js 文件，代码如下所示：

```js
var fs = require("fs");
var content = "我是通过 fs.writeFile 写入文件的内容";

console.log("准备写入文件");
fs.writeFile("./input.txt", content, function (err) {
  if (err != null) {
    console.log(err);
    return;
  }
  console.log("文件写入成功！");

  console.log("--------我是分割线-------------");

  console.log("读取写入的数据！");
  fs.readFile("input.txt", function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("异步读取文件数据: " + data.toString());
  });
});
```

### 删除文件

以下为删除文件的语法格式：

```js
fs.unlink(path, callback);
```

参数使用说明如下：

- path - 文件路径。
- callback - 回调函数，没有参数。

**实例**

我们在一开始已经创建了文件 input.txt 。

接下来我们创建 file2.js 文件，代码如下所示：

```js
var fs = require("fs");

console.log("准备删除文件！");
fs.unlink("input.txt", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("文件删除成功！");
});
```

### 创建文件夹

以下为创建目录的语法格式：

```js
fs.mkdir(path[, options], callback);
```

参数使用说明如下：

- path - 文件路径。
- options 参数可以是：
  - recursive - 是否以递归的方式创建目录，默认为 false。
  - mode - 设置目录权限，默认为 0777。
- callback - 回调函数，没有参数。

**实例**

接下来我们创建 file3.js 文件以及文件夹 tmp，代码如下所示：

```js
var fs = require("fs");
// tmp 目录必须存在
console.log("创建目录 /tmp/test/");
fs.mkdir("./tmp/test/", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("目录创建成功。");
});
```

## Node.js 多进程

### 多进程

Node.js 本身是以单线程的模式运行的，但它使用的是事件驱动来处理并发，这样有助于我们在多核 cpu 的系统上创建多个子进程，从而提高性能。

每个子进程总是带有三个流对象：`child.stdin`，`child.stdout` 和 `child.stderr`。他们可能会共享父进程的 stdio 流，或者也可以是独立的被导流的流对象。

Node 提供了 `child_process` 模块来创建子进程，方法有：

- exec - `child_process.exec` 使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。
- spawn - `child_process.spawn` 使用指定的命令行参数创建新进程。
- fork - `child_process.fork` 是 spawn() 的特殊形式，用于在子进程中运行的模块，如 `fork('./son.js')` 相当于 `spawn('node', ['./son.js'])`。与 spawn 方法不同的是，fork 会在父进程与子进程之间，建立一个通信管道，用于进程之间的通信。

### exec() 方法

`child_process.exec` 使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。

语法如下所示：

```js
child_process.exec(command[, options], callback);
```

#### 参数

参数说明如下：

command：字符串，将要运行的命令，**参数使用空格隔开**。

options：对象，可以是下表内容。

| 对象       | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| cwd        | 字符串，子进程的当前工作目录                                 |
| env        | 对象，环境变量键值对                                         |
| encoding   | 字符串，字符编码（默认： 'utf8'）                            |
| shell      | 字符串，将要执行命令的 Shell（默认: 在 UNIX 中为 `/bin/sh` ， 在 Windows 中为 `cmd.exe`， Shell 应当能识别 `-c` 开关在 UNIX 中，或 `/s /c` 在 Windows 中。 在 Windows 中，命令行解析应当能兼容 `cmd.exe`） |
| timeout    | 数字，超时时间（默认： 0）                                   |
| maxBuffer  | 数字， 在 stdout 或 stderr 中允许存在的最大缓冲（二进制），如果超出那么子进程将会被杀死（默认: 200*1024） |
| killSignal | 字符串，结束信号（默认：'SIGTERM'）                          |
| uid        | 数字，设置用户进程的 ID                                      |
| gid        | 数字，设置进程组的 ID                                        |

**callback**：回调函数，包含三个参数 error，stdout 和 stderr。

exec() 方法返回最大的缓冲区，并等待进程结束，一次性返回缓冲区的内容。

#### 实例

步骤一：新建一个名为 demo.js 的文件，在其中输入以下代码：

```js
console.log("进程 " + process.argv[2] + " 执行。");
```

步骤二：新建一个名为 master.js 的文件，在其中输入以下代码：

```js
const fs = require("fs");
const child_process = require("child_process");

for (var i = 0; i < 3; i++) {
  var workerProcess = child_process.exec(
    "node demo.js " + i,
    function (error, stdout, stderr) {
      if (error) {
        console.log(error.stack);
        console.log("Error code: " + error.code);
        console.log("Signal received: " + error.signal);
      }
      console.log("stdout: " + stdout);
      console.log("stderr: " + stderr);
    }
  );

  workerProcess.on("exit", function (code) {
    console.log("子进程已退出，退出码 " + code);
  });
}
```

![image-20220301165027961](/assets/web/202203011650069.png)

### spawn() 方法

`child_process.spawn` 使用指定的命令行参数创建新进程，语法格式如下：

```js
child_process.spawn(command[, args][, options]);
```

#### 参数

参数说明如下：

**command**：将要运行的命令；

**args**：Array 字符串参数数组；

**options Object**

| 对象     | 描述                                    |
| -------- | --------------------------------------- |
| cwd      | String，子进程的当前工作目录            |
| env      | Object，环境变量键值对                  |
| stdio    | Array\|String，子进程的 stdio 配置      |
| detached | Boolean，这个子进程将会变成进程组的领导 |
| uid      | Number，设置用户进程的 ID               |
| gid      | Number，设置进程组的 ID                 |

spawn() 方法返回流 `(stdout & stderr)`，在进程返回大量数据时使用。进程开始执行 spawn() 时就开始接收响应。

#### 实例

步骤一：新建一个名为 master1.js 的文件。在其中输入以下代码：

```js
const fs = require("fs");
const child_process = require("child_process");

for (var i = 0; i < 3; i++) {
  var workerProcess = child_process.spawn("node", ["demo.js", i]);

  workerProcess.stdout.on("data", function (data) {
    console.log("stdout: " + data);
  });

  workerProcess.stderr.on("data", function (data) {
    console.log("stderr: " + data);
  });

  workerProcess.on("close", function (code) {
    console.log("子进程已退出，退出码 " + code);
  });
}
```

### fork 方法

`child_process.fork` 是 spawn() 方法的特殊形式，用于创建进程，语法格式如下：

```js
child_process.fork(modulePath[, args][, options]);
```

#### 参数

参数说明如下：

**modulePath**：String，将要在子进程中运行的模块；

**args**：Array，字符串参数数组；

**options**：Object

| 对象     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| cwd      | String，子进程的当前工作目录                                 |
| env      | Object，环境变量键值对                                       |
| execPath | String，创建子进程的可执行文件                               |
| execArgv | Array，子进程的可执行文件的字符串参数数组（默认：`process.execArgv`） |
| silent   | Boolean，如果为 `true`，子进程的 `stdin`，`stdout `和 `stderr` 将会被关联至父进程，否则，它们将会从父进程中继承。（默认为：`false`） |
| uid      | Number，设置用户进程的 ID                                    |
| gid      | Number，设置进程组的 ID                                      |

返回的对象除了拥有 ChildProcess 实例的所有方法，还有一个内建的通信信道。

#### 实例

步骤一：新建一个名为 master2.js 的文件，在其中输入以下代码：

```js
const fs = require("fs");
const child_process = require("child_process");

for (var i = 0; i < 3; i++) {
  var worker_process = child_process.fork("demo.js", [i]);

  worker_process.on("close", function (code) {
    console.log("子进程已退出，退出码 " + code);
  });
}
```
