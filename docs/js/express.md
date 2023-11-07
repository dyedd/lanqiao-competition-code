# Express的使用

Express 是一个基于 `Node.js` 平台的极简、灵活的 Web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。

Express 含有丰富的 HTTP 快捷方法和任意排列组合的 Connect 中间件，让你创建健壮、友好的 API 变得既快速又简单。

Express 不对 `Node.js` 已有的特性进行二次抽象，我们只是在它之上扩展了 Web 应用所需的基本功能。

## Express 的安装

Express 4.x 较 Express 3.x 进行了较大的改动，原来基于 Express 3.x 的项目无法直接升级到 4.x。

首先创建一个名为 `myExpressPro` 的文件夹，然后进入这个文件夹。

```shell
mkdir myExpressPro && cd myExpressPro
```

安装 Express 并将其保存到依赖列表中。

```shell
npm install express --save
```

以上命令会将 Express 框架安装在当前目录的 `node_modules` 目录中，`node_modules` 目录下会自动创建 express 目录。以下几个重要的模块是需要与 express 框架一起安装的。

```shell
npm install body-parser --save

npm install cookie-parser --save

npm install multer --save
```

安装完成后使用以下命令可以查看 express 的版本号。

## Express 路由

路由是指如何定义应用的端点（URIs）以及如何响应客户端的请求。

路由是由一个 URI、HTTP 请求（GET、POST 等）和若干个句柄组成，它的结构如下：

```javascript
app.METHOD(path, [callback...], callback)
```

app 是 express 对象的一个实例， METHOD 是一个 HTTP 请求方法，path 是服务器上的路径，callback 是当路由匹配时要执行的函数。

### GET

一般情况下，我们获取数据用 get 请求，express 的 get 请求实现方式如下，新建一个 `demo.js` 文件，进行以下操作：

```javascript
// demo.js
var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("访问地址为 http://%s:%s", host, port);
});
```

### POST

```js
// demo1.js
var express = require("express");
var app = express();

//  主页输出 "Hello World"
app.get("/", function (req, res) {
  console.log("主页 GET 请求");
  res.send("Hello GET");
});

//  POST 请求
app.post("/", function (req, res) {
  console.log("主页 POST 请求");
  res.send("Hello POST");
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("访问地址为 http://%s:%s", host, port);
});
```

## Express 请求对象

Req 对象表示 HTTP 请求，并具有请求查询字符串、参数、内容、HTTP 标头等的属性。在这个文档和约定中，对象总是被称为 Req（HTTP 响应是 Res），但是它的实际名称是由正在工作的回调函数的参数决定的。

通过 Req 我们可以拿到任何从前端发送过来的请求信息，比如 url。

```javascript
app.get("/", (req, res) => {
  /*======== 这里将输出前端发送过来的 url 信息”===========*/
  console.log(req.url);
  res.send("This is index get request.");
});
```

## Express 响应对象

Res 对象表示当 HTTP 请求收到时发送的 HTTP 响应。 在这个文档和约定中，对象总是被称为 Res（HTTP 请求是 Req），但是它的实际名称是由您正在工作的回调函数的参数决定的。

Res 对象是我们通过前端发过来的请求信息所做的响应，也就是发送信息给前端的。例如：

```javascript
/*======== 发送字符串===========*/
app.get("/index", (req, res) => {
  /*======== 这里发送一个字符串给前端===========*/
  res.send("This is index get request.");
});

/*======== 发送 json 格式数据===========*/
app.get("/index", (req, res) => {
  /*======== 这里发送一个 json 对象给前端===========*/
  res.json({ name: "loushengyue", age: 30 });
});

/*======== 发送 jsonp 数据格式给前端===========*/
app.get("/index", (req, res) => {
  /*======== 这里发送一个 jsonp 对象给前端===========*/
  res.jsonp({ name: "loushengyue", age: 30 });
});
```

# Express 中间件

Express 是一个自身功能极简，完全是由路由和中间件构成一个的 Web 开发框架：从本质上来说，一个 Express 应用就是在调用各种中间件。

中间件（`Middleware`）是一个函数，它可以访问请求对象（`request object (req)`）, 响应对象（`response object (res)`）, 和 Web 应用中处于请求-响应循环流程中的中间件，一般被命名为 `next` 的变量。

中间件的功能包括：

- 执行任何代码。
- 修改请求和响应对象。
- 终结请求-响应循环。
- 调用堆栈中的下一个中间件。
- 如果当前中间件没有终结请求-响应循环，则必须调用 next() 方法将控制权交给下一个中间件，否则请求就会挂起。

## 应用级中间件

应用级中间件绑定到 app 对象 使用 `app.use()` 和 `app.METHOD()`，其中，METHOD 是需要处理的 HTTP 请求的方法，例如 GET, PUT, POST 等等，全部小写。

```js
var express = require('express');
var app = express();

/*======== 没有挂载路径的中间件，应用的每个请求都会执行该中间件===========*/
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

/*======== 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它===========*/
app.use('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

/*======== 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求===========*/
app.get('/user/:id', function (req, res, next) {
    res.send('USER');
});

app.listen(8080);
```

## **路由级中间件**

路由级中间件和应用级中间件一样，只是它绑定的对象为 `express.Router()`。路由级使用 `router.use()` 或 `router.VERB()` 加载。

```js
var express = require('express');
var app = express();
var router = express.Router();

/*======== 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件===========*/
router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

/*======== 一个中间件栈，显示任何指向 /user/:id 的 HTTP 请求的信息===========*/
router.use('/user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
    });

/*======== 一个中间件栈，处理指向 /user/:id 的 GET 请求===========*/
router.get('/user/:id', function (req, res, next) {

    /*======== 如果 user id 为 0, 跳到下一个路由===========*/
    if (req.params.id == 0) next('router');

    /*======== 负责将控制权交给栈中下一个中间件===========*/
    else next();
}, function (req, res, next) {

    /*======== 给浏览器响应 ===========*/
    res.send("router");
});

/*======== 处理 /user/:id，响应一个特殊页面===========*/
router.get('/user/:id', function (req, res, next) {
    console.log(req.params.id);
    res.send("special");
});

/*======== 将路由挂载至应用===========*/
app.use('/', router);

app.listen(8080);
```

## 错误处理中间件

错误处理中间件有 4 个参数，定义错误处理中间件时必须使用这 4 个参数。即使不需要 next 对象，也必须在签名中声明它，否则中间件会被识别为一个常规中间件，不能处理错误。

错误处理中间件和其他中间件定义类似，只是要使用 4 个参数，而不是 3 个，其签名如下： (err, req, res, next)。

```JavaScript
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
```

## Multer 中间件

Multer 是一个 `node.js` 中间件，用于处理 `multipart/form-data` 类型的表单数据，它主要用于上传文件。

> 注意：Multer 不会处理任何非 `multipart/form-data` 类型的表单数据。

使用以下命令进行安装：

```JavaScript
npm install multer
```

文件对象: multer 解析完上传文件后，会被保存为一个包含以下字段的对象，如下图：

![图片描述](/assets/web/202203201525173.png)

multer(opts) 创建对象：Multer 接受一个 options 对象，其中最基本的是 dest 属性，告诉 Multer 将上传文件保存在哪。如果省略 options 对象，这些文件将保存在内存中，永远不会写入磁盘。为了避免命名冲突，Multer 会修改上传的文件名。

Multer 的选项对象中可以包含以下值,如下图：

![图片描述](/assets/web/202203201526207.png)

通常，只需要设置 dest 属性，如下示例：

```JavaScript
var upload = multer({ dest: 'uploads/' })
```

如果想在上传时进行更多的控制，可以使用 storage 选项替代 dest。Multer 具有 DiskStorage 和 MemoryStorage 两个存储引擎：

- `.single(fieldname)`：接受一个以 fieldname 命名的文件。这个文件的信息保存在 req.file。
- `.array(fieldname[, maxCount])`：接受一个以 fieldname 命名的文件数组。可以配置 maxCount 来限制上传的最大数量。这些文件的信息保存在 req.files。
- `.fields(fields)`：接受指定 fields 的混合文件。这些文件的信息保存在 req.files。
- `.none()`：只接受文本域。如果任何文件上传到这个模式，将发生 `LIMIT_UNEXPECTED_FILE` 错误。这和 upload.fields([]) 的效果一样。
- `.any()`：接受一切。文件数组将保存在 req.files。

storage 存储引擎有以下两个可选项：

- `DiskStorage`：硬盘存储。
- `MemoryStorage`：内存存储。

`DiskStorage`：磁盘存储引擎可以控制文件的存储，有两个选项可用，`destination` 和 `filename`。`destination` 是用来确定上传的文件应该存储在哪个文件夹中，也可以提供一个 `string` (例如 `/tmp/uploads`)。如果没有设置 `destination`，则使用操作默认的临时文件夹。`filename` 用于确定文件夹中的文件名的确定。 如果没有设置 `filename`，每个文件将设置为一个随机文件名，并且是没有扩展名的。

```JavaScript
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})
var upload = multer({ storage: storage })
```

注意：Multer 不会为你添加任何扩展名，你的程序应该返回一个完整的文件名。

MemoryStorage：内存存储引擎会以 Buffer 的形式将文件保存在内存中。该方法没有任何参数。

```JavaScript
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })
```

limits：一个用于指定一些数据大小的限制的对象，设置 limits 可以帮助保护你的站点免受拒绝服务 (DoS) 攻击。

fileFilter：设置一个函数来控制什么文件可以上传以及什么文件应该跳过。

```JavaScript
/*======== 需要调用回调函数 `cb`===========*/
function fileFilter (req, file, cb) {
    /*======== 并在第二个参数中传入一个布尔值，用于指示文件是否可接受,如果要拒绝文件，上传则传入 `false`===========*/
    cb(null, false)

    /*======== 如果接受上传文件，则传入 `true`===========*/
    cb(null, true)

    /*======== 出错后，可以在第一个参数中传入一个错误===========*/
    cb(new Error('I don\'t have a clue!'))
}
```
