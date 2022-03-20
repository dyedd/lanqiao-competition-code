# jquery
## 为什么要学jquery

使用javascript开发过程中，有许多的缺点：

1. 查找元素的方法单一，麻烦。
2. 遍历数组很麻烦，通常要嵌套一大堆的for循环。
3. 有兼容性问题。
4. 想要实现简单的动画效果，也很麻烦
5. 代码冗余。

## 体验jquery的使用

```javascript
/*
* 1. 查找元素的方法多种多样，非常灵活
* 2. 拥有隐式迭代特性，因此不再需要手写for循环了。
* 3. 完全没有兼容性问题。
* 4. 实现动画非常简单，而且功能更加的强大。
* 5. 代码简单、粗暴。
* */
$(document).ready(function () {
    $("#btn1").click(function () {
        $("div").show(200);
    });
    $("#btn2").click(function () {
        $("div").text("我是内容");
    });
});
```

## jquery到底是什么

> jQuery的官网 [http://jquery.com/](http://jquery.com/)   
> jQuery就是一个js库，使用jQuery的话，会比使用JavaScript更简单。

**What is jQuery?**

```text
   jQuery is a fast, small, and feature-rich JavaScript library. 
   It makes things like HTML document traversal and manipulation, 
   event handling, animation, and Ajax 
   much simpler with an easy-to-use API that works across a multitude of browsers. 
   With a combination of versatility and extensibility, 
   jQuery has changed the way that millions of people write JavaScript. 
```

js库：把一些常用到的方法写到一个单独的js文件，使用的时候直接去引用这js文件就可以了。
（animate.js、common.js）

我们知道了，jQuery其实就是一个js文件，里面封装了一大堆的方法方便我们的开发，
其实就是一个加强版的common.js，因此我们学习jQuery，其实就是学习jQuery这个js文件中封装的一大堆方法。



## jquery的版本问题

> 官网下载地址：[http://jquery.com/download/](http://jquery.com/download/)  
> jQuery版本有很多，分为1.x 2.x 3.x     
> 1.x和2.x版本jquery都不再更新版本了，现在只更新3.x版本。

大版本分类：

* 1.x版本：能够兼容IE678浏览器
* 2.x版本：不能兼容IE678浏览器
* 3.x版本：不能兼容IE678浏览器，更加的精简（在国内不流行，因为国内使用jQuery的主要目的就是兼容IE678）



关于压缩版和未压缩版：  

* jquery-1.12.4.min.js:压缩版本，适用于生产环境，因为文件比较小，去除了注释、换行、空格等东西，但是基本没有颗阅读性。
* jquery-1.12.4.js:未压缩版本，适用于学习与开发环境，源码清晰，易阅读。