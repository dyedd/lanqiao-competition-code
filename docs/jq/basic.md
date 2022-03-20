# jquery知识
## jquery的入口函数

使用jQuery的三个步骤：

1. 引入jQuery文件
2. 入口函数
3. 功能实现

关于jQuery的入口函数：

```javascript
//第一种写法
$(document).ready(function() {
	
});
//第二种写法
$(function() {
	
});
```

jQuery入口函数与js入口函数的对比：

1.	JavaScript的入口函数要等到页面中所有资源（包括图片、文件）加载完成才开始执行。
2.	jQuery的入口函数只会等待文档树加载完成就开始执行，并不会等待图片、文件的加载。

## jq对象和dom对象(重要)

1. DOM对象：使用JavaScript中的方法获取页面中的元素返回的对象就是dom对象。
2. jQuery对象：jquery对象就是使用jquery的方法获取页面中的元素返回的对象就是jQuery对象。
3. jQuery对象其实就是DOM对象的包装集**包装了DOM对象的集合（伪数组）**
4. DOM对象与jQuery对象的方法不能混用。

DOM对象转换成jQuery对象：【联想记忆：花钱】

```javascript
var $obj = $(domObj);
// $(document).ready(function(){});就是典型的DOM对象转jQuery对象

```

jQuery对象转换成DOM对象：

```javascript
var $li = $("li");
//第一种方法（推荐使用）
$li[0]
//第二种方法
$li.get(0)
```


## jquery选择器

### 什么是jQuery选择器

- jQuery选择器是jQuery为我们提供的一组方法，让我们更加方便的获取到页面中的元素。  
  注意：jQuery选择器返回的是jQuery对象。
- jQuery选择器有很多，基本兼容了CSS1到CSS3所有的选择器，并且jQuery还添加了很多扩展性的选择器。  
  【查看jQuery文档】
- jQuery选择器虽然很多，但是选择器之间可以相互替代，就是说获取一个元素，你会有很多种方法获取到。  
  所以我们平时真正能用到的只是少数的最常用的选择器。

### 基本选择器

| 名称       | 用法               | 描述                                 |
| ---------- | ------------------ | :----------------------------------- |
| ID选择器   | $(“#id”);          | 获取指定ID的元素                     |
| 类选择器   | $(“.class”);       | 获取同一类class的元素                |
| 标签选择器 | $(“div”);          | 获取同一类标签的所有元素             |
| 并集选择器 | $(“div,p,li”);     | 使用逗号分隔，只要符合条件之一就可。 |
| 交集选择器 | $(“div.redClass”); | 获取class为redClass的div元素         |

> 总结：跟css的选择器用法一模一样。

### 层级选择器

| 名称       | 用法        | 描述                                                        |
| ---------- | ----------- | :---------------------------------------------------------- |
| 子代选择器 | $(“ul>li”); | 使用>号，获取儿子层级的元素，注意，并不会获取孙子层级的元素 |
| 后代选择器 | $(“ul li”); | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等  |

> 总结：跟css的选择器用法一模一样。

### 过滤选择器

| 名称         | 用法                               | 描述                                                        |
| ------------ | ---------------------------------- | :---------------------------------------------------------- |
| :eq（index） | $(“li:eq(2)”).css(“color”, ”red”); | 获取到的li元素中，选择索引号为2的元素，索引号index从0开始。 |
| :odd         | $(“li:odd”).css(“color”, ”red”);   | 获取到的li元素中，选择索引号为奇数的元素                    |
| :even        | $(“li:even”).css(“color”, ”red”);  | 获取到的li元素中，选择索引号为偶数的元素                    |
| :selected    | $("option:selected")               | select表单中获取到选中的                                    |
| :checked     | $(input:checked)                   |                                                             |

> 总结：这类选择器都带冒号

###  筛选选择器(方法)

| 名称               | 用法                                                         | 描述                           |
| ------------------ | ------------------------------------------------------------ | ------------------------------ |
| children(selector) | $("ul").children("li")      | 相当于\$(“ul>li”)，子类选择器  |
| find(selector)     | $("ul").find("li");         | 相当于 \$(“ul li”),后代选择器  |
| siblings(selector) | $(“#first”).siblings(“li”);                                  | 查找兄弟节点，不包括自己本身。 |
| parent()           | $(“#first”).parent();                                        | 查找父亲                       |
| eq(index)          | $("li").eq(2);              | 相当于\$(“li:eq(2)”),index从0开始 |
| next()             | $(“li”).next()                                               | 找下一个兄弟                   |
| prev()             | $(“li”).prev()                                               | 找上一个兄弟                   |
| prevAll()/nextAll() | $("li").prevAll() | 找前面/后面所有兄弟 |

> 总结：筛选选择器的功能与过滤选择器有点类似，但是用法不一样，筛选选择器主要是方法。

使用`$().index()`获取当前索引

## 元素设置

### 样式设置

```javascript
    /*1.设置一个样式*/
    //两个参数  设置的样式属性,具体样式
    $('li').css('color','red');
    //传入对象（设置的样式属性:具体样式）
    $('li').css({'color':'red'});
    /*2.设置多个样式*/
    $('li').css({
        'color':'green',
        'font-size':'20px'
    });
```

### 类名设置  

```javascript
    /*1.添加一个类*/
    $('li').addClass('now');
	/*2.添加多个类*/
    $('li').addClass('now yesterday');
    /*3.删除一个类*/
    $('li').removeClass('now');
	/*4.删除所有类*/
	$('li').removeClass();
    /*4.切换一个类  有就删除没有就添加*/
    $('li').toggleClass('now');
    /*5.匹配一个类  判断是否包含某个类  如果包含返回true否知返回false*/
    $('li').hasClass('now');
```



### 属性设置

```javascript
/*1.获取属性*/
// 还可以设置自定义属性，会添加上去，或者获取
$('li').attr('name');
/*2.设置属性*/
$('li').attr('name','tom');
/*3.设置多个属性*/
$('li').attr({
    'name':'tom',
    'age':'18'
});
/*4.删除属性*/
$('li').removeAttr('name');
// 移除多属性
$('li').removeAttr('name name1 name2');
```


### prop方法

```javascript
    /*对于布尔类型的属性，不要attr方法，应该用prop方法 prop用法跟attr方法一样。*/
    $("#checkbox").prop("checked");
    $("#checkbox").prop("checked", true);
    $("#checkbox").prop("checked", false);
    $("#checkbox").removeProp("checked");
```

## 动画

### 基本动画

```javascript
    /*注意：动画的本质是改变容器的大小和透明度*/
    /*注意：如果不传参数是看不到动画*/
    /*注意：可传入特殊的字符  fast normal slow*/
    /*注意：可传入数字 单位毫秒*/
  	/*注意：fast:200ms,normal:400ms;slow:600ms*/
	/*注意：如果传入的参数写错了，就相当于写了一个normal*/
    /*1.展示动画*/
    $('li').show();
	// 回调函数
	 $('li').show(2000,function(){console.log('xxx')});
    /*2.隐藏动画*/
    $('li').hide();
    /*3.切换展示和隐藏*/
    $('li').toggle();
```

### 滑入滑出

```javascript
/*注意：动画的本质是改变容器的高度*/
/*1.滑入动画*/
//sildeDown(参数1，参数2)
//参数1：动画执行时长
//参数2：动画执行完毕后的回调函数
//没有给参数，相当于normal，400ms
$('li').slideDown();
/*2.滑出动画*/
$('li').slideUp();
/*3.切换滑入滑出*/
$('li').slideToggle();
```



### 淡入淡出

```javascript
/*注意：动画的本质是改变容器的透明度*/
// 不给参数相当于normal
//参数2也是回调函数
/*1.淡入动画*/
$('li').fadeIn();
/*2.淡出动画*/
$('li').fadeOut();
/*3.切换淡入淡出*/
$('li').fadeToggle();
// 淡入到哪里
//speed填时间或者slow，opacity填透明度
$('li').fadeTo('speed','opacity');
```



### 自定义动画

```javascript
/*
    * 自定义动画
    * 参数1：需要做动画的属性，必选的对象
    * 参数2：需要执行动画的总时长，可选的
    * 参数3：执行动画的时候的速度，代表缓动还是匀速，默认不写是缓动，可选的
    * 参数4：执行动画完成之后的回调函数，可选的
    * */
$('#box1').animate({left:800},5000);
// linear：匀速
$('#box2').animate({left:800, top:200},5000,'linear');
// swing 缓动
$('#box3').animate({left:800},5000,'swing',function () {
    console.log('动画执行完成');
    // 还可以在这里继续嵌套写，上面执行完毕，这里继续执行什么动画
});
```



### 动画队列  

![](https://gitee.com/Dye/statics/raw/master/img/202203172238202.png)

```javascript
/*
    jQuery中有个动画队列的机制。
    当我们对一个对象添加多次动画效果时后添加的动作就会被放入这个动画队列中，  
    等前面的动画完成后再开始执行。
    可是用户的操作往往都比动画快，  
    如果用户对一个对象频繁操作时不处理动画队列就会造成队列堆积，
    影响到效果。
    */
```

### stop使用

> 第一个参数：是否清除队列
>
> 第二个参数：是否跳转到最终效果

```javascript
/*1.停止当前动画  如果动画队列当中还有动画立即执行*/
//$('div').stop();
/*2.和stop()效果一致  说明这是默认设置*/
//$('div').stop(false,false);
/*3.停止当前动画  清除动画队列*/
//$('div').stop(true,false);
/*4.停止当前动画并且到结束位置  清除了动画队列*/
//$('div').stop(true,true);
/*5.停止当前动画并且到结束位置  如果动画队列当中还有动画立即执行*/
$('div').stop(false,true);
```




## 节点操作

### 创建节点

```javascript
// 原生js中创建节点：document.write('<a></a>');innerHTML;document.createElement('div')
/*1.创建节点*/
var $a = $('<a href="http://www.baidu.com" target="_blank">百度1</a>');
//2.html(),不给参数，就是获取元素所有内容
//设置会覆盖原内容 
$('#div1').html('我是<a>...</a>')
```

### 克隆节点

```javascript
/*如果想克隆事件  false  true克隆事件，不给参数默认是false*/
var $cloneP = $('p').clone(true);
```

### 添加&移动节点

```javascript
/*追加自身的最后面  传对象和html格式代码*/
// 父元素.append(子元素)；作为最后一个子元素添加
// 如果子元素是存在的标签，那么就会剪切，再添加到最后一个元素
$('#box').append('<a href="http://www.baidu.com" target="_blank"><b>百度3</b></a>');
$('#box').append($('a'));
/*追加到目标元素最后面  传目标元素的选择器或者对象*/
//子元素.appendTo(父元素)，把子元素添加到父元素的最后一个添加
$('<a href="http://www.baidu.com" target="_blank"><b>百度3</b></a>').appendTo($('#box'));
$('a').appendTo('#box');

//添加到第一个
prepend();
prependTo();
//元素A.after(元素B) 把元素B插入到元素A的后面，作为兄弟元素添加
after();
//元素A.before(元素B) 把元素B插入到元素A的前面，作为兄弟元素添加
before();
```

### 删除节点&清空节点

```javascript
/*1.清空box里面的元素*/
/* 清理门户，所有子元素，且清空的是内容，父元素还在 */
$('#box').empty();
/*2.删除某个元素，如果是父元素，也都删了*/
/* 自杀 */
$('#box').remove();
```




## jQuery特殊属性操作

### val方法

> val方法用于设置和获取表单元素的值，例如input、textarea的值

```javascript
    //设置值
    $("#name").val('张三');
    //获取值
    $("#name").val();
```


### html方法与text方法

> html方法相当于innerHTML  text方法相当于innerText

```javascript
    //设置内容
    $('div').html('<span>这是一段内容</span>');
    //获取内容
    $('div').html()
    
    //设置内容
    $('div').text('<span>这是一段内容</span>');
    //获取内容
    $('div').text()
```

区别：html方法会识别html标签，text方法会那内容直接当成字符串，并不会识别html标签。

### width方法与height方法

> 设置或者获取高度

```javascript
//这个宽高不包括padding/border/margin
//带参数表示设置高度
$('img').height(200);
//不带参数获取高度
$('img').height();
//获取网页的可视区宽高
$(window).height(200);
//不带参数获取高度
$(window).height();
```

### innerWidth方法与innerHeight方法

```javascript
//包括内边距
//获取可视区宽度
$('img').innnerWidth();
//获取可视区高度
$('img').innerHeight();
```

### outerWidth方法与outerHeight方法

```js
//包括内边距和边框
$('img').outerWidth();
$('img').outerHeight();
//包括内边距，边框和外边距
$('img').outerWidth(true);
$('img').outerHeight(true);
```

### scrollTop与scrollLeft

> 设置或者获取垂直滚动条的位置

```javascript
//获取页面被卷曲的高度
$(window).scrollTop();
$(window).scrollTop(100);
//获取页面被卷曲的宽度
$(window).scrollLeft();
```

滚动事件：`scroll`

### offset方法与position方法

> offset方法获取元素距离document的位置，position方法获取的是元素距离有定位的父元素的位置。

```javascript
    //获取元素距离document的位置,返回值为对象：{left:100, top:100}
    $(selector).offset();
    //获取相对于其最近的有定位的父元素的位置。
    $(selector).position();
```

## jQuery事件机制

> JavaScript中已经学习过了事件，但是jQuery对JavaScript事件进行了封装，增加并扩展了事件处理机制。jQuery不仅提供了更加优雅的事件处理语法，而且极大的增强了事件的处理能力。

### jQuery事件发展历程(了解)

简单事件绑定>>bind事件绑定>>delegate事件绑定>>on事件绑定(推荐)

> 简单事件注册

```javascript
    click(handler)			//单击事件
    mouseenter(handler)		//鼠标进入事件，都使用这个替代mouseover，下同
    mouseleave(handler)		//鼠标离开事件
```

缺点：不能同时注册多个事件，不支持动态事件

原生js不能使用`on事件`给同一个元素注册同样的事件，后面会覆盖前面的，jq对其进行升级，可以注册同一个，后面等着前面执行，但是他们不能同时发生，而且不能同时注册

> bind方式注册事件

```javascript
    //第一个参数：事件类型
    //第二个参数：事件处理程序
    $("p").bind("click mouseenter", function(){
        //事件响应方法
    });
	//or
	 $("p").bind({
         click:function(){},
         mouseenter:function(){}
     });
```

缺点：不支持动态事件绑定

> delegate注册委托事件
>
> 原理：事件冒泡

```javascript
    // 第一个参数：selector，要绑定事件的元素
    // 第二个参数：事件类型
    // 第三个参数：事件处理函数
    $(".parentBox").delegate("p", "click", function(){
        //为 .parentBox下面的所有的p标签绑定事件
    });
	$(".parentBox").delegate("p", {
         click:function(){},
         mouseenter:function(){}
     });
	
```

缺点：只能注册委托事件，因此注册时间需要记得方法太多了

> on注册事件


### on注册事件(重点)

> jQuery1.7之后，jQuery用on统一了所有事件的处理方法。
>
> 最现代的方式，兼容zepto(移动端类似jQuery的一个库)，强烈建议使用。

on注册简单事件

```javascript
    // 表示给$(selector)绑定事件，并且由自己触发，不支持动态绑定。
    $(selector).on( "click", function() {});
	//多个事件同时注册，就用对象传进去
	$(selector).on({
         click:function(){},
         mouseenter:function(){}
     });
```

on注册委托事件

```javascript
    // 表示给$(selector)绑定代理事件，当必须是它的内部元素span才能触发这个事件，支持动态绑定
    $(selector).on( "click",'span', function() {});
```

on注册事件的语法：

```javascript
    // 第一个参数：events，绑定事件的名称可以是由空格分隔的多个事件（标准事件或者自定义事件）
    // 第二个参数：selector, 执行事件的后代元素（可选），如果没有后代元素，那么事件将有自己执行。
    // 第三个参数：data，传递给处理函数的数据，事件触发的时候通过event.data来使用（不常使用）
    // 第四个参数：handler，事件处理函数
    $(selector).on(events,[selector],[data],handler);
```

### 事件解绑

> unbind方式（不用）

```javascript
    $(selector).unbind(); //解绑所有的事件
    $(selector).unbind("click"); //解绑指定的事件
```

> undelegate方式（不用）

```javascript
    $( selector ).undelegate(); //解绑所有的delegate事件
    $( selector).undelegate( 'click' ); //解绑所有的click事件
```

> off方式（推荐）

```javascript
    // 解绑匹配元素的所有事件
    $(selector).off();
    // 解绑匹配元素的所有click事件
    $(selector).off("click");
```

### 触发事件

```javascript
    $(selector).click(); //触发 click事件
    $(selector).trigger("click");
	如果通过on注册了一个自定义事件，如test
    那么就用trigger("test")触发
```

### jQuery事件对象

jQuery事件对象其实就是js事件对象的一个封装，处理了兼容性。

```javascript
    //screenX和screenY	对应屏幕最左上角的值
    //clientX和clientY	距离页面左上角的位置（忽视滚动条）
    //pageX和pageY	距离页面最顶部的左上角的位置（会计算滚动条的距离）
    
    //event.keyCode	按下的键盘代码（keydown)
    //event.data	存储绑定事件时传递的附加数据
    
    //event.stopPropagation()	阻止事件冒泡行为
    //event.preventDefault()	阻止浏览器默认行为
    //return false:既能阻止事件冒泡，又能阻止浏览器默认行为。
```

## jQuery补充知识点

### 阻止a标签的跳转

- `rerturn false`
- `javascript:void(0);`
- `javascript:;`

### 链式编程

> 通常情况下，只有设置操作才能把链式编程延续下去。因为获取操作的时候，会返回获取到的相应的值，无法返回 jQuery对象。

```javascript
    end(); // 筛选选择器会改变jQuery对象的DOM对象，想要回复到上一次的状态，并且返回匹配元素之前的状态。
```



### each方法

> jQuery的隐式迭代会对所有的DOM对象设置相同的值，但是如果我们需要给每一个对象设置不同的值的时候，就需要自己进行迭代了。

作用：遍历jQuery对象集合，为每个匹配的元素执行一个函数

```javascript
    // 参数一表示当前元素在所有匹配元素中的索引号
    // 参数二表示当前元素（DOM对象）
    $(selector).each(function(index,element){});
```



### 多库共存

> jQuery使用$作为标示符，但是如果与其他框架中的$冲突时，jQuery可以释放$符的控制权.

```javascript
    var c = $.noConflict();//释放$的控制权,并且把$的能力给了c
```

## 插件

### 常用插件

> 插件：jquery不可能包含所有的功能，我们可以通过插件扩展jquery的功能。
>
> jQuery有着丰富的插件，使用这些插件能给jQuery提供一些额外的功能。

1. jquery.color.js

> animate不支持颜色的渐变，但是使用了jquery.color.js后，就可以支持颜色的渐变了。

使用插件的步骤

```javascript
    //1. 引入jQuery文件
    //2. 引入插件（如果有用到css的话，需要引入css）
    //3. 使用插件
```

2. jquery.lazyload.js

懒加载插件

### jquery.ui.js插件

jQueryUI专指由jQuery官方维护的UI方向的插件。

官方API：[http://api.jqueryui.com/category/all/](http://api.jqueryui.com/category/all/)

其他教程：[jQueryUI教程](http://www.runoob.com/jqueryui/jqueryui-tutorial.html)

基本使用:

```javascript
    //1.	引入jQueryUI的样式文件
    //2.	引入jQuery
    //3.	引入jQueryUI的js文件
    //4.	使用jQueryUI功能
```

使用jquery.ui.js手风琴菜单

## 制作jquery插件

> 原理：jquery插件其实说白了就是给jquery对象增加一个新的方法，让jquery对象拥有某一个功能。

```javascript
//通过给$.fn添加方法就能够扩展jquery对象
$.fn. pluginName = function() {}; //实例方法
$.pluginName = function(){} // 静态方法
```



















