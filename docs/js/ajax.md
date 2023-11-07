# AJAX

## 1. Ajax 基础

### 1.1 传统网站中存在的问题

- 网速慢的情况下，页面加载时间长，用户只能等待
- 表单提交后，如果一项内容不合格，需要重新填写所有表单内容
- 页面跳转，重新加载页面，造成资源浪费，增加用户等待时间

### 1.2 Ajax 概述

Ajax：标准读音` [ˈeɪˌdʒæks] `，中文音译：阿贾克斯。  
它是浏览器提供的一套方法，可以实现 **页面无刷新更新数据，提高用户浏览网站应用的体验**。

### 1.3 Ajax 应用场景

- 页面上拉加载更多数据
- 列表数据无刷新分页
- 表单项离开焦点数据验证
- 搜索框提示文字下拉列表
- ...
- 

### 1.4 Ajax 运行环境

Ajax 技术需要 **运行在网站服务器环境中才能生效**，我们学习 Ajax 可以使用 Node 创建的服务器作为网站服务器。

## 2. Ajax 运行原理及实现

### 2.1 Ajax 运行原理

Ajax 相当于浏览器 **发送请求与接收响应的代理人**，以实现在不影响用户浏览页面的情况下，局部更新页面数据，从而提高用户体验。

![ajax1](/assets/web/202204031714406.png)

### 2.2 Ajax 实现步骤

1. 创建 Ajax 对象  
    使用 `XMLHttpRequest` 构造函数实例化创建一个 `xhr`。

    ```js
    var xhr = new XMLHttpRequest();
    ```

2. 告诉 Ajax 请求方式和请求地址  
   以何种方式发送请求，向哪发送请求。

    ```js
    xhr.open('get', 'http://www.example.com');
    ```

3. 发送请求
    ```js
    xhr.send();
    ```

4. 获取服务器端给与客户端的响应数据  

    **响应受到网络环境的影响，发送请求以后不能直接去接收数据（例如网络拥挤导致服务器延迟响应）**，而是要使用 `onload` 方法监听服务器的响应状态。`responseText` 是服务器响应的数据内容。

    ```js
    xhr.onload = function () {
        console.log(xhr.responseText);
    }
    ```

### 2.3 服务器端响应的数据格式

在真实的项目中，服务器端 **大多数情况下会以 JSON 对象作为响应数据的格式**。当客户端拿到响应数据时，要将 JSON 数据和 HTML 字符串进行拼接，然后将拼接的结果展示在页面中。  

通过 `xhr.getResponseHeader('Content-Type')` 可获取服务器响应数据的形式，一般有两种：
- JSON 对象形式：`application/json`  
    返回的 `xhr.responseText` 为 JSON 对象字符串，需要转换为 JSON 对象。
- 普通字符串形式：`text/html`

在 http 请求与响应的过程中，无论是请求参数还是响应内容，如果是对象类型，最终都会被转换为对象字符串进行传输。我们往往使用 `JSON.parse()` 方法将该对象字符串转换为对象。

将 json 字符串转换为json对象：
```js
JSON.parse()
```

### 2.4 请求参数传递

传统网站表单提交
```html
 <form method="get" action="http://www.example.com">
     <input type="text" name="username"/>
     <input type="password" name="password">
 </form>
 <!-- http://www.example.com?username=zhangsan&password=123456 -->
```

- GET 请求方式  
    get 请求方式需要手动拼接请求参数：
    ```js
    let params = 'username=' + nameValue + '&age=' + ageValue;
    xhr.open('get', params);
    xhr.open('get', 'http://www.example.com?' + params);
    // xhr.open('get', 'http://www.example.com?username=zhangsan&age=20');
    ```
    服务端（这里以 node express 构建的服务器为例）使用 `req.query` 来接收客户端传来的请求参数，返回一个对象
    ```js
    // app.js
    app.get('/get', (req, res) => {
        res.send(req.query);
    })
    ```

- POST 请求方式
    ```js
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('name=zhangsan&age=20');
    ```
    举例：
    ```js
    // 拼接参数
    let params = 'username=' + nameValue + '&age=' + ageValue;
    // 设置post请求
    xhr.open('post', 'http://localhost:3001/post');
    // 设置请求参数格式的类型（post方式必须设置）
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // post请求的参数写在 send 方法里面
    xhr.send(params);
    xhr.onload = function () {
        console.log(xhr.responseText);
    }
    ```
    node 服务器 app.js 中：
    ```js
    // app.js
    // post 方式获取请求参数
    app.use(express.urlencoded());
    app.post('/post', (req, res) => {
        // body 请求体
        res.send(req.body);
    })
    ```

### 2.5 GET 还是 POST ?

与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。  
然而，在以下情况中，请使用 POST 请求：
- 无法使用缓存文件（更新服务器上的文件或数据库）
- 向服务器发送大量数据（POST 没有数据量限制）
- 发送包含未知字符（密码等）的用户输入时，POST 比 GET 更稳定也更可靠

### 2.6 请求报文

在 HTTP 请求和响应的过程中传递的数据块就叫报文，包括要传送的数据和一些附加信息，这些数据和信息要遵守规定好的格式。
![ajax2](https://cdn.jsdelivr.net/gh/Hacker-C/Picture-Bed@main/JavaScript/ajax2.2ngwh6y398q0.png)

### 2.7 请求参数的格式

通过 `xhr.setRequestHeader()` 方法可以设置请求头的请求参数类型。

1. application/x-www-form-urlencoded  
    这类设置的一般是 `属性1=属性值1&属性2=属性值2` 的形式的请求参数。例如 `name=zhangsan&age=20&sex=男`。
    
    ```js
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    ```
    
2. application/json  
    在请求头中指定 `Content-Type` 属性的值是 `application/json`，告诉服务器端当前请求参数的格式是 json。  
    将对象作为请求参数，前提是要转换为对象字符串。使用 `JSON.stringify()` 可将 json 对象转换为 json 字符串。例如：`{name: 'zhangsan', age: '20', sex: '男'}`。
    ```js
    xhr.setRequestHeader('Content-Type', 'application/json');
    ```
    举例：
    ```js
    let xhr = new XMLHttpRequest();
    xhr.open('post', 'http://localhost:3001/json');
    let params = {name: 'zhangsan', age: '20', sex: '男'};
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(params));
    ```
    node 服务器端：
    ```js
    // 设置为接收 json 请求参数
    app.use(express.json());
    // 设置服务器返回的数据
    app.post('/json', (req, res) => {
        res.send(req.body);
    })
    ```

> get 请求和传统网站的表单提都不支持 json 对象数据格式的的请求参数。post 方式既支持 “对象=对象值” 形式，又支持 json 对象格式。

### 2.8 获取服务器端的响应方式

#### （1） Ajax 状态码

在创建 ajax 对象，配置 ajax 对象，发送请求，以及接收完服务器端响应数据，这个过程中的每一个步骤都会对应一个数值，这个数值就是 ajax 状态码。

- `0`：请求未初始化（还没有调用 `open()`）
- `1`：请求已经建立，但是还没有发送（还没有调用 `send()`）
- `2`：请求已经发送
- `3`：请求正在处理中，通常响应中已经有部分数据可以用了
- `4`：响应已经完成，可以获取并使用服务器的响应了

获取 Ajax 状态码：
```js
xhr.readyState
```

#### （2）onreadystatechange 事件

当 Ajax 状态码发生变化时将自动触发该事件。  

监测 Ajax 各阶段的状态码：
```js
let xhr = new XMLHttpRequest();
// xhr创建，未初始化
console.log(xhr.readyState); // 0

xhr.open('get', 'http://localhost:3001/readystate');
// xhr初始化，还未发送
console.log(xhr.readyState); // 1

xhr.onreadystatechange = function () {
    // 时刻监听 ajax 状态码的变化
    console.log(xhr.readyState); // 2 3 4
}

xhr.send();
```

以上代码将依次输出：`0`、`1`、`2`、`3`、`4`。  

在事件处理函数中可以获取 Ajax 状态码并对其进行判断，当状态码为 `4` 时就可以通过 `xhr.responseText` 获取服务器端的响应数据了。
```js
let xhr = new XMLHttpRequest();

xhr.open('get', 'http://localhost:3001/readystate');

xhr.send();

// 当Ajax状态码发生变化时
xhr.onreadystatechange = function () {
    // 判断当Ajax状态码为4时
    if (xhr.readyState === 4) {
        // 获取服务器端的响应数据
        console.log(xhr.responseText);
    }
}

```

### 2.9 两种获取服务器端响应方式的区别

|         区别描述         | `onload` 事件 | `onreadystatechange` 事件 |
| :----------------------: | :-----------: | :-----------------------: |
|     是否兼容IE低版本     |    不兼容     |           兼容            |
| 是否需要判断 Ajax 状态码 |    不需要     |           需要            |
|        被调用次数        |     一次      |           多次            |

### 2.10 HTTP 状态码

客户端（浏览器）向服务器端发起请求，服务器接收到请求信息，然后向客户端返回一个包含 HTTP 状态码的信息头（server header）用以响应浏览器的请求。HTTP状态码的英文为 HTTP Status Code。

常见状态码：
- `200`：请求成功。
- `301`：资源被永久转移到其他 URL
- `404`：请求的资源不存在
- `500`：服务器端内部错误

HTTP 状态码分类：
- `1xx`：服务器收到请求，需要请求者继续执行操作
- `2xx`：成功，操作被成功接收并处理
- `3xx`：重定向，需要进一步的操作以完成请求
- `4xx`：客户端错误，请求包含语法错误或无法完成请求
- `5xx`：服务器错误，服务器在处理请求的过程中发生了错误

node express 构建的服务器通过 `res.status()` 可设置响应给浏览器的 HTTP 状态码。  

`onreadystatechange` 方式获取服务端响应：

```js
let xhr = new XMLHttpRequest();
xhr.open('get', 'http://localhost:3001/http');
xhr.send();

xhr.onreadystatechange = function () {
    // 当 ajax 状态码为 4，意味着服务器成功接收到请求
    // 当 http 状态码为 200，意味着客户端成功接收到数据，交易成功
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
}
```

### 2.11 Ajax 错误处理

- 网络畅通，服务器端能接收到请求，服务器端返回的结果不是预期结果。  
    解决：**可以判断服务器端返回的状态码**，分别进行处理。通过 `xhr.status` 获取 http 状态码。
- 网络畅通，请求地址有误，服务器端没有接收到请求，返回 `404` 状态码。  
    解决：**检查请求地址是否错误**。
- 网络畅通，服务器端能接收到请求，服务器端返回 `500` 状态码。  
    解决：**服务器端错误，找后端程序员进行沟通**。
- 网络中断，请求无法发送到服务器端。  
    解决：此时 `xhr.onload` 事件将不会触发。但会触发 `xhr` 对象下面的 `onerror` 事件，在 `xhr.onerror` 事件处理函数中对错误进行处理。

### 2.12 低版本 IE 浏览器的缓存问题

问题：在低版本的 IE 浏览器中，Ajax 请求有严重的缓存问题，即在请求地址不发生变化的情况下，只有第一次请求会真正发送到服务器端，**后续的请求都会从浏览器的缓存中获取结果。即使服务器端的数据更新了，客户端依然拿到的是缓存中的旧数据**。

解决方案：在请求地址的后面 **加请求参数，保证每一次请求中的请求参数的值不相同**。 
```js
xhr.open('get', 'http://www.example.com?t=' + Math.random());
```

## 3. Ajax 异步编程

### 3.1 同步异步概述

同步
- 一个人同一时间只能做一件事情，只有一件事情做完，才能做另外一件事情。
- 落实到代码中，就是上一行代码执行完成后，才能执行下一行代码，即代码逐行执行。

```js
console.log('before'); 
console.log('after');
```

异步
- 一个人一件事情做了一半，转而去做其他事情，当其他事情做完以后，再回过头来继续做之前未完成的事情。
- 落实到代码上，就是异步代码虽然需要花费时间去执行，但程序不会等待异步代码执行完成后再继续执行后续代码，而是直接执行后续代码，当后续代码执行完成后再回头看异步代码是否返回结果，如果已有返回结果，再调用事先准备好的回调函数处理异步代码执行的结果。
- Ajax （Asynchronous JavaScript and XML，异步的 JavaScript 和 XML）是异步请求，我们发送请求之后，不必等待响应，而是去执行 ajax 后面的代码。等到异步请求成功响应之后，再来执行后续代码。

```js
let xhr = new XMLHttpRequest();
xhr.open('get', 'http://localhost:3001/first');
xhr.send();
console.log('普通同步事件A'); // (1)
setTimeout(() => {
    console.log('时间异步事件A'); // (2)
}, 2000);
setTimeout(() => {
    console.log('时间异步事件B');  // (3)
}, 1000);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('异步请求事件X'); // (4)
        console.log(xhr.responseText);
    }
}
console.log('普通同步事件B'); // (5)
```

分析：按照 JS 同步异步的原理，首先执行同步事件，然后执行异步事件。(1) 和 (5) 处都是同步事件，依序执行。(2) 和 (3) 中的 `setTimeout` 事件本身是同步事件，但是内部接收的函数参数为异步事件，以及异步请求事件 (4)。这些异步事件将被放到异步事件队列中，等待同步事件执行完后按照 “先进先出” 顺序执行。进入异步事件队列的按照时间为：(4)、(3)、(2)，这也是执行顺序。
最后输出结果如下：  

![ajax3](https://cdn.jsdelivr.net/gh/Hacker-C/Picture-Bed@main/JavaScript/ajax3.3gt4iopro2y0.png)

### 3.2 Ajax 封装

简易流程图：

![Ajax-请求](https://cdn.jsdelivr.net/gh/Hacker-C/Picture-Bed@main/JavaScript/Ajax-请求.2okvmla3y2e0.png)

#### （1）简单封装一个 GET Ajax 请求函数

```js
function ajax(options) {
    let xhr = new XMLHttpRequest();
    xhr.open(options.type, options.url);
    xhr.send();
    xhr.onload = function () {
        options.success(xhr.responseText);
    }
}
ajax({
    type: 'get',
    url: 'http://localhost:3001/first',
    // 通过 success 函数接收返回的响应数据，并进行下一步处理
    success: function (data) {
        console.log(data);
    }
});
```

#### （2）完整版本


```js
function ajax (options) {
	// 默认值
	var defaults = {
		type: 'get',
		url: '',
		async: true,
		data: {},
		header: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		success: function () {},
		error: function () {}
	}
	// 使用用户传递的参数替换默认值参数
	Object.assign(defaults, options);
	// 创建ajax对象
	var xhr = new XMLHttpRequest();
	// 参数拼接变量
	var params = '';
	// 循环参数
	for (var attr in defaults.data) {
		// 参数拼接
		params += attr + '=' + defaults.data[attr] + '&';
		// 去掉参数中最后一个&
		params = params.substr(0, params.length-1)
	}
	// 如果请求方式为get
	if (defaults.type == 'get') {
		// 将参数拼接在url地址的后面
		defaults.url += '?' + params;
	}

	// 配置ajax请求
	xhr.open(defaults.type, defaults.url, defaults.async);
	// 如果请求方式为post
	if (defaults.type == 'post') {
		// 设置请求头
		xhr.setRequestHeader('Content-Type', defaults.header['Content-Type']);
		// 如果想服务器端传递的参数类型为json
		if (defaults.header['Content-Type'] == 'application/json') {
			// 将json对象转换为json字符串
			xhr.send(JSON.stringify(defaults.data))
		}else {
			// 发送请求
			xhr.send(params);
		}
	} else {
		xhr.send();
	}
	// 请求加载完成
	xhr.onload = function () {
		// 获取服务器端返回数据的类型
		var contentType = xhr.getResponseHeader('content-type');
		// 获取服务器端返回的响应数据
		var responseText = xhr.responseText;
		// 如果服务器端返回的数据是json数据类型
		if (contentType.includes('application/json')) {
			// 将json字符串转换为json对象
			responseText = JSON.parse(responseText);
		}
		// 如果请求成功
		if (xhr.status == 200) {
			// 调用成功回调函数, 并且将服务器端返回的结果传递给成功回调函数
			defaults.success(responseText, xhr);
		} else {
			// 调用失败回调函数并且将xhr对象传递给回调函数
			defaults.error(responseText, xhr);
		} 
	}
	// 当网络中断时
	xhr.onerror = function () {
		// 调用失败回调函数并且将xhr对象传递给回调函数
		defaults.error(xhr);
	}
}
ajax({
    type: 'post',
    url: 'http://localhost:3001/post',
    data: {
        name: 'rick',
        age: 20
    },
    headers: { 'Content-Type': 'application/json' },
    success: function (data, xhr) {
        console.log('请求成功');
        console.log(data);
        console.log(xhr);
    },
    error: function (data, xhr) {
        console.log(data);
        console.log(xhr);
    }
});
```

## 4. FormData
### 4.1 FormData 对象的作用
在有多个参数的 Ajax 请求中，例如名字、密码、年龄、性别等，都要使用 DOM 获取元素，然后又要按照规则拼接参数。传统 Ajax 也不能传送二进制文件。使用 `FormData` 对象可以解决这些问题。  
`FormData` 的作用：
- 模拟 HTML 表单，相当于将 HTML 表单映射成 **表单对象**，自动 **将表单对象中的数据拼接成请求参数的格式**。
- 异步上传二进制文件
### 4.2 FormData 对象的使用
1. 准备 HTML 表单
    ```html
    <form id="form">
        <input type="text" name="username" />
        <input type="password" name="password" />
        <input type="button"/>
    </form>
    ```
    
2. 将 HTML 表单转化为 `FormData` 对象
    ```js
    var form = document.getElementById('form'); 
    var formData = new FormData(form);
    ```
    
3. 提交表单对象
    ```js
    var xhr = new XMLHttpRequest();
    xhr.open('post', 'http://localhost:3001/post');
    xhr.send(formData);
    ```
    注意：
    
    `FormData` 对象不能用于 `get` 请求，因为对象需要被传递到 `send` 方法中，而 `get` 请求方式的请求参数只能放在请求地址的后面。
    
    服务器端 bodyParser 模块不能解析 `FormData` 对象表单数据，我们需要使用 formidable 模块进行解析。
    node 后端服务器配置（app.js）：
```js
// 需要使用 npm install formidable 下载好 formidable 模块
const formidable = require('formidable');
app.post('/formData', (req, res) => {
    // 创建formidable表单解析对象
    const form = new formidable.IncomingForm();
    // 解析客户端传递过来的FormData对象
    form.parse(req, (err, fields, files) => {
        res.send(fields);
    });
});
```
### 4.3 FormData 对象的实例方法
1. 获取表单对象中属性的值
    ```js
    formData.get('key');
    ```
2. 设置表单对象中属性的值
    ```js
    formData.set('key', 'value');
    ```
3. 删除表单对象中属性的值
    ```js
    formData.delete('key');
    ```
4. 向表单对象中追加属性值
    ```js
    formData.append('key', 'value');
    ```
    注意：`set` 方法与 `append` 方法的区别是，在属性名已存在的情况下，`set` 会覆盖已有键名的值，`append` 会保留两个值。
### 4.4 FormData 二进制文件上传
```html
<input type="file" id="file"/>
```
```js
var file = document.getElementById('file')
// 当用户选择文件的时候
file.onchange = function () {
    // 创建空表单对象
    var formData = new FormData();
    // 将用户选择的二进制文件追加到表单对象中
    formData.append('attrName', this.files[0]);
    // 配置ajax对象，请求方式必须为post
    xhr.open('post', 'www.example.com');
    xhr.send(formData);
}
```
#### 4.4.1 FormData 文件上传展示
```js
 // 当用户选择文件的时候
file.onchange = function () {
    // 文件上传过程中持续触发onprogress事件
    xhr.upload.onprogress = function (ev) {
        // 当前上传文件大小/文件总大小 再将结果转换为百分数
        // 将结果赋值给进度条的宽度属性 
        bar.style.width = (ev.loaded / ev.total) * 100 + '%';
    }
}
```
#### 3.4.2 FormData 文件上传图片即时预览
在我们将图片上传到服务器端以后，服务器端通常都会将图片地址做为响应数据传递到客户端，客户端可以从响应数据中获取图片地址，然后将图片再显示在页面中。
```js
xhr.onload = function () {
    var result = JSON.parse(xhr.responseText);
    var img = document.createElement('img');
    img.src = result.src;
    img.onload = function () {
        document.body.appendChild(this);
    }
}
```
## 5. 同源策略
### 5.1 Ajax 请求限制
Ajax 只能向自己的服务器发送请求。比如现在有一个A网站、有一个B网站，A网站中的 HTML 文件只能向A网站服务器中发送 Ajax 请求，B网站中的 HTML 文件只能向 B 网站中发送 Ajax 请求，但是 A 网站是不能向 B 网站发送 Ajax请求的，同理，B 网站也不能向 A 网站发送 Ajax请求。
### 5.2 什么是同源
如果两个页面拥有相同的 **协议、域名和端口**，那么这两个页面就属于同一个源，其中只要有一个不相同，就是不同源。  
例如，对于网站：http://www.example.com/dir/page.html ，有以下例子。
- http://www.example.com/dir2/other.html ：同源
- http://example.com/dir/other.html ：不同源（域名不同）
- http://v2.www.example.com/dir/other.html ：不同源（域名不同）
- http://www.example.com:81/dir/other.html ：不同源（端口不同）
- https://www.example.com/dir/page.html ：不同源（协议不同）
### 5.3 同源策略的目的
同源策略，它是由 Netscape 提出的一个著名的安全策略，现在所有支持 JavaScript 的浏览器都会使用这个策略。  
同源政策是为了保证用户信息的安全，防止恶意的网站窃取数据。最初的同源政策是指 A 网站在客户端设置的 Cookie，B网站是不能访问的。  
随着互联网的发展，同源政策也越来越严格，在不同源的情况下，其中有一项规定就是无法向非同源地址发送Ajax 请求，如果请求，浏览器就会报错。  
![ajax4](https://cdn.jsdelivr.net/gh/Hacker-C/Picture-Bed@main/docs/ajax4.5q3rre1hgeo0.png)

> 浏览器请求发送成功，服务器也可以成功响应数据，但是浏览器拒绝接收响应的数据！这意味着第一次发送 Ajax 请求的时候，HTTP状态码为 200 OK。
### 5.4 使用 JSONP 解决同源策略问题
JSONP 是 json with padding 的缩写，它不属于 Ajax 请求，但它可以模拟 Ajax 请求。  
使用 JSONP，我们可以绕过同源政策，从而实现 **跨域读取数据**。
我们知道 `script` 标签可以引入其他 JS 文件，比如 CDN jQuery链接：

```js
<script src="https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js"></script>
```
**JSONP 原理**：实际上 `script` 中的 `src` 属性中可以放的不止 JS 这一种文件类型，也可以是一个网站地址。`script` 处理 JS 文件的原理，首先加载该地址中的 JS 文件，然后从头到尾执行一遍该文件的内容。所以，如果 `src` 的内容是一段内容为函数的字符串，那么该函数将会被执行。那么服务器可以返回一个 “函数字符串”，然后客户端执行提前准备好的该函数内容。  主要就是利用了 `script` 标签的`src`没有跨域限制来完成的。

- 只能进行`GET`请求

执行过程：

- 前端定义一个解析函数(如: `jsonpCallback = function (res) {}`)
- 通过`params`的形式包装`script`标签的请求参数，并且声明执行函数(如`cb=jsonpCallback`)
- 后端获取到前端声明的执行函数(`jsonpCallback`)，并以带上参数且调用执行函数的方式传递给前端
- 前端在`script`标签返回资源的时候就会去执行`jsonpCallback`并通过回调函数的方式拿到数据了。

前端：

```html
<script type='text/javascript'>
    window.jsonpCallback = function (res) {
        console.log(res)
    }
</script>
<script src='http://localhost:8080/api/jsonp?id=1&cb=jsonpCallback' type='text/javascript'></script>
```

这两个`script`的意思是：

- 第一个，创建一个`jsonpCallback`函数。但是它还没有被调用
- 第二个，加载`src`中的资源，并等待请求的内容返回

后端：

```js
const Koa = require('koa');
const app = new Koa();
const items = [{ id: 1, title: 'title1' }, { id: 2, title: 'title2' }]

app.use(async (ctx, next) => {
  if (ctx.path === '/api/jsonp') {
    const { cb, id } = ctx.query;
    const title = items.find(item => item.id == id)['title']
    ctx.body = `${cb}(${JSON.stringify({title})})`;
    return;
  }
})
console.log('listen 8080...')
app.listen(8080);
```

整个过程就是：

1. 当执行到第二个`script`的时候，由于请求了我们的`8080`端口，并且把`id`和`cb`这两个参数放到`URL`里。那么后台就可以拿到`URL`里的这两个参数。
2. 也就是在**后端代码**中的`const { id, cb } = ctx.query`这里获取到了。
3. 那么后端在拿到这两个参数之后，可能就会根据`id`来进行一些查询，当然，我这里只是模拟的查询，用了一个简单的`find`来进行一个查找。查找到`id`为`1`的那项并且取`title`。
4. 第二个参数`cb`，拿到的就是`"jsonpCallback"`了，这里也就是告诉后端，前端那里是会有一个叫做`jsonpCallback`的函数来接收后端想要返回的数据，而后端你只需要在返回体中写入`jsonpCallback()`就可以了。
5. 前端在得到了后端返回的内容`jsonpCallback({"title":"title1"})`，发现里面是一段执行函数的语句，因此就会去执行第一个`script`中的`jsonpCallback`方法了，并且又是带了参数的，所以此时浏览器控制台会打印出`{ title: 'title1' }`

上面的后端代码就是把前端代码第二个script改成下面情况，最终返回这个结果

```html
<script>
    jsonpCallback({ title: 'title1' })
</script>
```

如果还不明白，请看这个简单实现：

1. 提前定义好 `fn` 函数，在 `fn` 函数内部对服务器端返回的数据进行处理

   ```js
   function fn (data) {
       console.log(data);
   }
   ```

2. 将不同源的服务器端请求地址写在 script 标签的 `src` 属性中。

   ```html
   <script src="www.example.com"></script>
   ```

3. 服务器端响应数据必须是一个函数的调用，真正要发送给客户端的数据需要作为函数调用的参数。
   例如，node express 服务器端（app.js）：

   ```js
   const data = 'fn({name: "张三", age: "20"})';
   res.send(data);
   ```

这里就又说了前面指出的，`src`可以带网址，而在这个网址B的后端，输出A的js函数，让A网址自己执行



### 5.5 JSONP 代码优化

#### 5.5.1 优化一：客户端需要将函数名称传递到服务器端
优化一：客户端修改函数名，客户端也要修改，很麻烦。客户端将每次将更新的函数名传给服务器端，于是两方都同步函数名了。
```html
<script>
    // 客户端将每次将更新的函数名传给服务器端，于是两方都同步函数名了。
    function myFn(data) {
        console.log(data);
    }
</script>
<script src="http://localhost:3002/better?callback=myFn"></script>
```
node express 服务器（app.js）：
```js
// 客户端将每次将更新的函数名传给服务器端，于是两方都同步函数名了。
app.get('/better', (req, res) => {
    const result = req.query.callback + '({name: "张三"})';
    res.send(result);
})
```
#### 5.5.2 优化二：将 script 请求的发送变成动态请求
分析：每次发送请求都需要执行一次 `script` 中的文件内容，也就需要刷新一次界面，这样很不方便。我们可以**动态创建** `script` 节点，给 `script` 添加 `src` 属性，然后添加到网页中。在完成请求后，再将该 `script` 标签移除即可。这就实现了 **动态请求**。  
参考代码：
```js
function myFn(data) {
    console.log(data);
}
let btn = document.querySelector('.btn');
btn.onclick = function () {
    // 创建 script 标签，动态添加到文档中，从而动态请求
    let script = document.createElement('script');
    script.src = 'http://localhost:3002/better?callback=myFn';
    document.body.appendChild(script);
    // 在script加载完成后，移除该节点
    script.onload = function () {
        document.body.removeChild(script);
    }
}
```
#### 5.5.3 优化三：封装 jsonp 函数
封装 jsonp 函数，方便发送请求。
```js
function jsonp(options) {
    let script = document.createElement('script');
    // 创造一个独一无二的函数名，可以实现多次请求
    let myFn = 'myJsonp' + Math.random().toString().replace('.', '');
    // 全局创建此函数，以便后面执行 script 中代码的时候能找到 myFn
    window[myFn] = options.success;
    // 拼接参数
    let params = '';
    for (let k in options.data) {
        params += '&' + k + '=' + options.data[k];
    }
    // 拼接请求地址
    script.src = options.url + '?callback=' + myFn + params;
    document.body.appendChild(script);
    script.onload = function () {
        document.body.removeChild(script);
    }
}
```
nodejs express 服务端（app.js）：
```js
app.get('/better', (req, res) => {
    res.jsonp({ name: "张三" });
})
```
调用封装的 jsonp：
```js
jsonp({
    url: 'http://localhost:3002/better',
    data: {
        name: 'peter',
        age: 20
    },
    success: function (data) {
        console.log(data);
    },
});
```
上面，我们改造的避免多次请求覆盖问题，在window创建了独一无二的函数，我们还有法二，

```js
function jsonp(options) {
    // 定义本地的唯一callbackId，若是没有的话则初始化为1
    JSONP.callbackId = JSONP.callbackId || 1;
    let callbackId = JSONP.callbackId;
    // 把要执行的回调加入到JSON对象中，避免污染window
    JSONP.callbacks = JSONP.callbacks || [];
    JSONP.callbacks[callbackId] = options.success;
    // 把这个名称加入到参数中: 'callback=JSONP.callbacks[1]'
    options.data['callback'] = `JSONP.callbacks[${callbackId}]`;

    // 得到'id=1&cb=JSONP.callbacks[1]'
    const paramString = Object.keys(options.data).map(key => {
        return `${key}=${options.data[key]}`
    }).join('&')
    // 创建 script 标签
    const script = document.createElement('script');
    script.setAttribute('src', `${url}?${paramString}`);
    document.body.appendChild(script);
    // id自增，保证唯一
    JSONP.callbackId++;
    script.onload = function () {
        document.body.removeChild(script);
    }
}
```

但是上面代码有个问题，如果我们给的参数是

```json
    data: {
		a: '2&b=3',
    },
```

后台并不知道`a`的参数是一个字符串，它只会按照`&`来截取参数。

所以为了解决这个问题，可以使用**URI编码**。

也就是使用：

```javascript
encodeURIComponent('2&b=3')

// 结果为
"2%26b%3D3"
```

只需要改一下`JSONP`方法中参数的生成：

```javascript
// 得到'id=1&cb=JSONP.callbacks[1]'
const paramString = Object.keys(options.data).map(key => {
    return `${key}=${encodeURIComponent(options.data[key])}`
}).join('&')
```

注意⚠️：

`encodeURI`和`encodeURIComponent`的区别：

- `encodeURI()`不会对本身属于URI的特殊字符进行编码，例如冒号、正斜杠、问号和井字号；
- 而`encodeURIComponent()`则会对它发现的任何非标准字符进行编码

例如：

```javascript
var url = 'https://lindaidai.wang'

encodeURI(url) // "https://lindaidai.wang"

encodeURIComponent(url) // "https%3A%2F%2Flindaidai.wang"
```

另外，可以使用`decodeURIComponent`来解码。

```javascript
decodeURIComponent("https%3A%2F%2Fdyedd.cn")
// 'https://dyedd.cn'
```

### 5.6 CORS 跨域资源共享

**CORS**：全称为 Cross-Origin Resource Sharing，即 **跨域资源共享**，它允许浏览器向跨域服务器发送 Ajax 请求，克服了 Ajax 只能同源使用的限制。使用 CORS 的时候，客户端的代码不需要修改，在服务端作相应的配置皆可。
![ajax5](/assets/web/202204032101921.png)
- 非同源网站的发送端
    ```
    origin: http://localhost:3000
    ```
- 允许哪些非同源网站的请求
    ```
    Access-Control-Allow-Origin: 'http://localhost:3000'
    ```
- 允许所有非同源网站的请求
    ```
    Access-Control-Allow-Origin: '*'
    ```
- 允许的请求方式
    ```
    Access-Control-Allow-Methods: 'get,post'
    ```
    Node 服务器端设置响应头示例代码：
```js
// 拦截所有请求
app.use((req, res, next) => {
    // 允许哪些客户端访问
    res.header('Access-Control-Allow-Origin', '*');
    // 允许哪些请求方法
    res.header('Access-Control-Allow-Methods', 'get,post');
    next();
})
```
### 5.7 访问非同源数据-服务器端解决方案
同源政策是浏览器对 Ajax 技术的限制，**服务器端是不存在同源政策限制**。因此，客户端A可以先向自身所在的服务器端A发送 ajax 请求，服务器A再向服务器B发送请求。服务器A将从服务器B响应来的数据传给客户端A。这样，就绕过了同源政策，实现跨域请求。  
![ajax6](/assets/web/202204032101014.png)
浏览器端A（ http://localhost:3001 ）向自身的服务器端A（ http://localhost:3001 ）发送请求：
```js
ajax({
    type: 'get',
    url: 'http://localhost:3001/server',
    success: function (data) {
        console.log(data);
    }
});
```
服务器端A向服务器端B（ http://localhost:3002 ）使用 `request` 发送请求：
```js
// 向其他服务器端请求数据的模块
const request = require('request');
app.get('/server', (req, res) => {
    request('http://localhost:3002/CORS', (err, response, body) => {
        // console.log(err);
        // console.log(response);
        // console.log(body);
        // 1号服务器向2号服务器响应，服务器之间请求没有同源限制，
        // 1号服务器将2号服务器响应的数据传给1号浏览器端
        res.send(body);
    })
})
```
### 5.8 Cookie
HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是 **服务器发送到用户浏览器并保存在本地的一小块数据**，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器，如 **保持用户的登录状态**。Cookie **使基于无状态的HTTP协议记录稳定的状态信息成为了可能**。
![ajax7](https://cdn.jsdelivr.net/gh/Hacker-C/Picture-Bed@main/docs/ajax7.68d0nsprfak0.png)
### 5.9 withCredentials 属性
在使用 Ajax 技术发送跨域请求时，默认情况下不会在请求中携带 cookie 信息。
对于前端，设置 `xhr.withCredentials` 指定在涉及到跨域请求时，是否携带 cookie 信息，默认值为 `false`
对于服务端，设置 `Access-Control-Allow-Credentials：true` 允许客户端发送请求时携带 cookie。

## 6. \$.ajax()

### 6.1 概述

`$.ajax()` 封装好了 Ajax 请求，我们可以更方便的发送请求。

```js
$.ajax({
    // 设置请求类型
    type: 'get',
    // 设置请求地址
    url: 'http://www.example.com',
    // 设置请求参数
    data: { name: 'zhangsan', age: '20' },
    // 设置请求参数类型
    contentType: 'application/x-www-form-urlencoded',
    // 设置请求发送前的要做的事情
    beforeSend: function () { 
        // 阻断请求的发送
        return false
    },
    // 请求成功后要做的事情
    success: function (response) {},
    // 请求出现错误要做的事情
    error: function (xhr) {}
});
```

其中，请求参数 `data` 的类型可以是对象类型（`{ name: 'zhangsan', age: '20' }`）或者 `&` 拼接类型（`'name=zhangsan&age=20'`），此时请求头设置的 `contentType` 为 `application/x-www-form-urlencoded`，这也是默认类型。  

`data` 也可以是对象字符串类型，需要使用 `JSON.stringify()` 将对象转换为对象字符串，且此时 `contentType` 设置为 `application/json`。

案例：`$.ajax()` 请求设置请求参数。
```js
var params = {name: 'wangwu', age: 300};
$.ajax({
    // 请求方式
    type: 'post',
    // 请求地址
    url: '/user',
    // 向服务器端发送的请求参数
    // name=zhangsan&age=100
    data: JSON.stringify(params),
    // 指定参数的格式类型
    contentType: 'application/json',
    // 请求成功以后函数被调用
    success: function (response) {
        // response为服务器端返回的数据
        // 方法内部会自动将json字符串转换为json对象
        console.log(response);
    }
```
上面请求中 `contentType` 的请求参数类型为 `application/json`，所以需要使用 `JSON.stringify(params)` 将 JSON 对象转换为对象字符串。
### 6.2 serialize 方法的使用
`serialize()` 方法将表单中的数据自动拼接成字符串类型的参数。
```js
var params = $('#form').serialize();
// name=zhangsan&age=30
```
案例：将表单内容拼接成字符串类型的参数
HTML 结构
```html
<form id='form'>
    <input type='text' name='username'>
    <input type='password' name='password'>
    <input type='submit' value='提交'>
</form>
```
方法一：使用 `serialize()` 将参数拼接成 `name=zhangsan&age=30` 类型字符串。
```js
$('#form').on('submit', function () {
    // 将表单内容拼接成字符串类型的参数
    var params = $('#form').serialize();
    console.log(params)
    return false;
});
```
方法二：使用 `serializeArray()`，通过一定转换，使表单数据转换为 `{name: 'zhangsan', age: 100}`  JSON 对象类型。
```js
$('#form').on('submit', function () {
    // 将表单内容拼接成字符串类型的参数
    serializeObject($(this));
    return false;
});
// 将表单中用户输入的内容转换为对象类型
function serializeObject (obj) {
    // 处理结果对象
    var result = {};
    // [{name: 'username', value: '用户输入的内容'}, {name: 'password', value: '123456'}]
    var params = obj.serializeArray();
    // 循环数组 将数组转换为对象类型
    $.each(params, function (index, value) {
        result[value.name] = value.value;
    })
    // 将处理的结果返回到函数外部
    return result;
}
```
### 6.3 \$.ajax 发送 jsonp 请求
在 `$.ajax()` 设置 `dataType: 'jsonp'` 即可发送 jsonp 请求。
```js
$.ajax({
    // 请求地址
    url: 'http://www.example.com',
    // 指定当前发送jsonp请求
    dataType: 'jsonp',
    // 可选，向服务器端传递函数名字的参数名称
    jsonp: 'cb',
    // 可选，指定函数名称，若不想用 success 函数时指定，需要提前在全局定义好该函数
    jsonCallback: 'fnName',
    success: function (response) {} 
})
```
## 7. \$.get 和 \$.post
`$.get()` 方法用于发送 get 请求，`$.post()` 方法用于发送 post 请求。
`$.get()` 语法：
```js
$.get(URL,data,function(data,status,xhr),dataType)
```
`$.post()` 语法：
```js
$.post(URL,data,function(data,status,xhr),dataType)
```
两者的参数格式是类似的，如下所示：
| 参数                        | 说明                                                         |
| --------------------------- | ------------------------------------------------------------ |
| `URL`                       | 必需。规定将请求发送到哪个 `URL`。                           |
| `data`                      | 可选。规定连同请求发送到服务器的数据。                       |
| `function(data,status,xhr)` | 可选。规定当请求成功时运行的函数。函数内部参数：`data`：包含来自请求的结果数据`status`：包含请求的状态（'success'、'notmodified'、'error'、'timeout'、'parsererror'）`xhr`： 包含 XMLHttpRequest 对象 |
| `dataType`                  | 可选。规定预期的服务器响应的数据类型。默认地，jQuery 会智能判断。`'xml'` - 一个 XML 文档  `'html'` - HTML 作为纯文本 `'text'` - 纯文本字符串 `'script'` - 以 JavaScript 运行响应，并以纯文本返回 `'json'` - 以 JSON 运行响应，并以 JavaScript 对象返回 `'jsonp'` - 使用 JSONP 加载一个 JSON 块，将添加一个 `'?callback=?'` 到 `URL` 来规定回调 |
| 例如：                      |                                                              |
```js
$.get('http://www.example.com', {name: 'zhangsan', age: 30}, function (response) {
});
$.post('http://www.example.com', {name: 'lisi', age: 22}, function (response) {
});
```
## 8. 全局事件
只要页面中有 Ajax 请求被发送，对应的全局事件就会被触发。
```js
$().ajaxStart(function(){}) // 当请求开始发送时触发
$().ajaxComplete(function(){}) // 当请求完成时触发
```
- `function()`：必需。规定当 AJAX 请求开始时运行的函数。

实例

当 AJAX 请求开始时，显示“加载中”的指示：

```js
$("div").ajaxStart(function(){
  $(this).html("<img src='demo_wait.gif' />");
});
```

## 9. nprogress 进度条插件

官宣：纳米级进度条，使用逼真的涓流动画来告诉用户正在发生的事情！
```js
<link rel='stylesheet' href='nprogress.css'/>
<script src='nprogress.js'></script>
```
```js
NProgress.start();  // 进度条开始运动 
NProgress.done();   // 进度条结束运动
```

## 10.RESTful 风格的 API

传统风格地址回顾：

```js
GET http://www.example.com/getUsers         // 获取用户列表
GET http://www.example.com/getUser?id=1     // 比如获取某一个用户的信息
POST http://www.example.com/modifyUser      // 修改用户信息
GET http://www.example.com/deleteUser?id=1  // 删除用户信息Copy to clipboardErrorCopied
```

RESTful API：一套关于设计请求的规范。

- `GET`：获取数据
- `POST`：添加数据
- `PUT`：更新数据
- `DELETE`： 删除数据

RESTful API 的实现：

| 请求   | 请求地址                       | 功能                                           |
| ------ | ------------------------------ | ---------------------------------------------- |
| GET    | http://www.example.com/users   | 获取用户列表数据                               |
| POST   | http://www.example.com/users   | 用户数据                                       |
| GET    | http://www.example.com/users/1 | 创建(添加)                                     |
| PUT    | http://www.example.com/users/1 | 获取用户ID为1的用户信息修改用户ID为1的用户信息 |
| DELETE | http://www.example.com/users/1 | 删除用户ID为1的用户信息                        |