# CSS3

CSS3 是 CSS2 的升级版本，3 只是版本号，它在 CSS2.1 的基础上增加了很多强大的新功能。2001 年 5 月 23 日 W3C 完成了 CSS3 的工作草案，主要包括盒子模型、列表模块、超链接方式、语言模块、背景和边框、文字特效、多栏布局等模块。目前主流浏览器 chrome、safari、firefox、opera 等已经支持了 CSS3 大部分功能了，IE10 以后也开始全面支持 CSS3 了。

## 浏览器私有属性

CSS 厂商前缀是浏览器公司在新的或实验性的 CSS3 功能成为正式的 CSS3 规范之前，或者在一个规范的功能还没有最后确定之前，提供对齐支持的一种方式。前缀又称为浏览器私有属性。当该功能通过其标准 CSS3 术语变得完全得到支持之后，这些前缀通常变为不必要的。

下面例举一下主流浏览器支持的前缀和示例。

| 浏览器  | 前缀     | 示例                                     |
| ------- | -------- | ---------------------------------------- |
| Android | -webkit- | -webkit-transition:background 0.5s ease; |
| Chrome  | -webkit- | -webkit-transition:background 0.5s ease; |
| Firefox | -moz-    | -moz-transition:background 0.5s ease;    |
| IE      | -ms-     | -ms-transition:background 0.5s ease;     |
| IOS     | -webkit- | -webkit-transition:background 0.5s ease; |
| Opera   | -o-      | -o-transition:background 0.5s ease;      |
| safari  | -webkit- | -webkit-transition:background 0.5s ease; |

虽然目前较新版本的浏览器都是不需要前缀的，但为了更好的向前兼容前缀还是少不了的。

### 提倡的写法

```css
-moz-border-radius: 10px; 
-webkit-border-radius: 10px; 
-o-border-radius: 10px; 
border-radius: 10px;
```

## CSS3选择器

在前面，也指出了以下的选择器，在这里再提出一下，知道他们是css3才出来的。

CSS3 给我们新增了选择器，可以更加便捷，更加自由的选择目标元素。

1. 属性选择器
2. 结构伪类选择器
3. 伪元素选择器

### 属性选择器

属性选择器可以根据元素特定属性来选择元素。这样就可以不用借助于类或者 id 选择器。

| 选择符          | 简介                                        |
| --------------- | ------------------------------------------- |
| `E[att]`        | 选择具有 att 属性的 E 元素                  |
| `E[att="val"]`  | 选择具有 att 属性且属性值等于 val 的 E 元素 |
| `E[att^="val"]` | 匹配具有 att 属性且值以 val 开头的 E 元素   |
| `E[arr$="val"]` | 匹配具有 att 属性且值以 val 结尾的 E 元素   |
| `E[att*="val"]` | 匹配具有 att 属性且值中含有 val 的 E 元素   |

注意：类选择器、属性选择器、伪类选择器，权重为 10。

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3新增属性选择器</title>
    <style>
        /* 必须是 input 同时具有 value 这个属性选择这个元素[] */
        /*input[value] {*/
        /*    color: hotpink;*/
        /*}*/

        /* 只选择 type=text 文本框的 input 选取出来 */
        input[type=text] {
            color: hotpink;
        }

        /* 选择首先是 div 然后具有 class 属性，并且属性值必须是 icon 开头的这些元素 */
        div[class^=icon] {
            color: red;
        }

        /* 选择首先是 section 然后具有 class 属性，并且属性值必须是 data 结尾的这些元素 */
        section[class$=data] {
            color: blue;
        }

        /* 类选择器 属性选择器 伪类选择器 权重都是 10 */
        div.icon1 {
            color: skyblue;
        }
    </style>
</head>
<body>
<!-- 1. 利用属性选择器就可以不用借助于类或者 id 选择器 -->
<!--<input type="text" value="请输入用户名">-->
<!--<input type="text">-->
<!-- 2. 属性选择器还可以选择属性=值的某些元素 重点务必掌握 -->
<input type="text" name="" id="one">
<input type="password" name="" id="two">
<!-- 3. 属性选择器可以选择属性值开头的某些元素 -->
<div class="icon1">小图标1</div>
<div class="icon2">小图标2</div>
<div class="icon3">小图标3</div>
<div class="icon4">小图标4</div>
<div>我是打酱油的</div>
<!-- 4. 属性选择器可以选择属性值结尾的某些元素 -->
<section class="icon1-data">我是安其拉</section>
<section class="icon2-data">我是哥斯拉</section>
<section class="icon3-ico">哪我是谁</section>

</body>
</html>
```

![](/assets/web/202204071022824.gif)

### 伪类选择器

伪类存在的意义是为了通过选择器找到那些不存在样式表中的类样式，这些类样式已经被 CSS3 定义好只需要使用选择器筛选传来即可。伪类通常用于进行“状态”描述工作。伪类由一个冒号 `:` 开头，冒号后面是伪类的名称。

#### anchor 伪类

`<a>` 元素有四种状态，每种状态对应一种伪类，在定义这些伪类的样式时必须按照 LVHA 原则，否则无法显示。

| 选择器   | 示例      | 状态                   |
| -------- | --------- | ---------------------- |
| :link    | a:link    | 选择所有未访问链接     |
| :visited | a:visited | 选择所有访问过的链接   |
| :hover   | a:hover   | 选择鼠标悬停状态的链接 |
| :active  | a:active  | 选择正在激活的链接     |

#### 表单元素伪类选择器

表单元素伪类选择器也可以称之为 UI 伪类选择器。在表单元素处于某种状态的时候会引起效果的变化，默认状态下不起作用。下面介绍两个常见的表单元素伪类选择器。

##### **属性有效性验证**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <style>
      input:invalid {
        background-color: red;
      } /*格式错误*/
      input:valid {
        background-color: green;
      } /*格式正确*/
    </style>
  </head>
  <body>
    电子邮箱：<input type="email" />
  </body>
</html>
```

显示效果：

![图片描述](/assets/web/202201161720332.png)

![图片描述](/assets/web/202201161720395.png)

##### **获得焦点验证**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <style>
      input:focus {
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    姓名：<input type="text" /><br />
    密码：<input type="password" />
  </body>
</html>
```

显示效果：

![图片描述](/assets/web/202201161720063.png)

![图片描述](/assets/web/202201161720351.png)

常见的表单元素伪类选择器功能描述如下表所示：

| 选择器        | 示例               | 示例说明                             |
| ------------- | ------------------ | ------------------------------------ |
| :focus        | input:focus        | 选择元素输入后具有焦点               |
| :enabled      | input:enabled      | 匹配每个已启用的元素                 |
| :disabled     | input:disabled     | 匹配每个被禁用的元素                 |
| :checked      | input:checked      | 匹配每个已被选中的 input 元素        |
| :required     | input:required     | 选择有"required"属性指定的元素属性   |
| :optional     | input:optional     | 选择没有"required"的元素属性         |
| :read-only    | input:read-only    | 选择只读属性的元素属性               |
| :read-write   | input:read-write   | 选择没有只读属性的元素属性           |
| :valid        | input:valid        | 选择所有有效值的属性                 |
| :invalid      | input:invalid      | 在表单元素中的值是非法时设置指定样式 |
| :in-range     | input:in-range     | 用于标签的值在指定区间值时显示的样式 |
| :out-of-range | input:out-of-range | 选择指定范围以外的值的元素属性       |

#### 结构伪类选择器

`nth-child(n)` 选择某个父元素的一个或多个特定的子元素（重点）。

- n 可以是数字，关键字和公式
- n 如果是数字，就是选择第 n 个子元素，里面数字从 1 开始……
- n 可以是关键字：even 偶数，odd 奇数
- n 可以是公式：常见的公式如下（如果 n 是公式，则从 n = 0 开始计算，但是第 0 个元素和超出了元素的个数会被忽略）

| 公式   | 取值                               |
| ------ | ---------------------------------- |
| `2n`   | 偶数（2、4、6、……）                |
| `2n+1` | 奇数（1、3、5、……）                |
| `5n`   | 5   10   15...                     |
| `n+5`  | 从第 5 个开始（包含第 5 个）到最后 |
| `-n+5` | 前 5 个（包含第 5 个）             |

结构伪类选择器主要根据文档结构来选择元素，常用于根据父级来选择其子元素。

| 选择器             | 简介                          |
| ------------------ | ----------------------------- |
| `E:first-child`    | 匹配父元素中的第一个子元素 E  |
| `E:last-child`     | 匹配父元素中最后一个 E 元素   |
| `E:nth-child(n)`   | 匹配父元素中的第 n 个子元素 E |
| `E:first-of-type`  | 指定类型 E 的第一个           |
| `E:last-of-type`   | 指定类型 E 的最后一个         |
| `E:nth-of-type(n)` | 指定类型 E 的第 n 个          |

区别：

1. nth-child 对父元素里面所有孩子排序选择（序号是固定的） 先找到第 n 个孩子，然后看看是否和 E 匹配
2. nth-of-type 对父元素里面指定子元素进行排序选择。 先去匹配 E，然后再根据 E 找第 n 个孩子

小结：

- 结构伪类选择器一般用于选择父级里面的第几个孩子
- **nth-child 对父元素里面所有孩子排序选择（序号是固定的） 先找到第 n 个孩子，然后看看是否和 E 匹配**
- **nth-of-type 对父元素里面指定子元素进行排序选择。 先去匹配 E，然后再根据 E 找第 n 个孩子**
- **若父元素内都是同一种标签（如：列表），优先用 nth-child，否则就只能使用 nth-of-type**
- 类选择器、属性选择器、伪类选择器，权重为 10

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3新增结构伪类选择器</title>
    <style>
        /* 1. 选择 ul 里面的第一个孩子 小 li */
        ul li:first-child {
            background-color: pink;
        }

        /* 2. 选择 ul 里面的最后一个孩子 小 li */
        ul li:last-child {
            background-color: pink;
        }

        /* 3. 选择 ul 里面的第 2 个孩子 小 li */
        ul li:nth-child(2) {
            background-color: skyblue;
        }

        /* 3. 选择 ul 里面的第 6 个孩子 小 li */
        ul li:nth-child(6) {
            background-color: skyblue;
        }
    </style>
</head>
<body>
<ul>
    <li>我是第1个孩子</li>
    <li>我是第2个孩子</li>
    <li>我是第3个孩子</li>
    <li>我是第4个孩子</li>
    <li>我是第5个孩子</li>
    <li>我是第6个孩子</li>
    <li>我是第7个孩子</li>
    <li>我是第8个孩子</li>
</ul>
</body>
</html>
```

![](/assets/web/202204071057414.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3新增结构伪类选择器-nth-child</title>
    <style>
        /* 1.把所有的偶数 even 的孩子选出来 */
        ul li:nth-child(even) {
            background-color: #ccc;
        }

        /* 2.把所有的奇数 odd 的孩子选出来 */
        ul li:nth-child(odd) {
            background-color: gray;
        }

        /* 3.nth-child(n) 从 0 开始每次加 1 往后面计算，这里面必须是 n，不能是其他的字母，此处选择了所有的孩子 */
        /* ol li:nth-child(n) {*/
        /*    background-color: pink;*/
        /*}*/
        /* 4.nth-child(2n) 母选择了所有的偶数孩子 等价于 even */
        /*ol li:nth-child(2n) {*/
        /*    background-color: pink;*/
        /*}*/
        /* 5.nth-child(2n+1) 母选择了所有的奇数孩子 等价于 odd */
        /*ol li:nth-child(2n+1) {*/
        /*    background-color: skyblue;*/
        /*} */
        /* 6.从第 3 个开始（包含第 3 个）到最后 */
        /*ol li:nth-child(n+3) {*/
        /*    background-color: pink;*/
        /*} */
        /*7.前 3 个（包含第 3 个）*/
        ol li:nth-child(-n+3) {
            background-color: pink;
        }
    </style>
</head>

<body>
<ul>
    <li>我是第1个孩子</li>
    <li>我是第2个孩子</li>
    <li>我是第3个孩子</li>
    <li>我是第4个孩子</li>
    <li>我是第5个孩子</li>
    <li>我是第6个孩子</li>
    <li>我是第7个孩子</li>
    <li>我是第8个孩子</li>
</ul>
<ol>
    <li>我是第1个孩子</li>
    <li>我是第2个孩子</li>
    <li>我是第3个孩子</li>
    <li>我是第4个孩子</li>
    <li>我是第5个孩子</li>
    <li>我是第6个孩子</li>
    <li>我是第7个孩子</li>
    <li>我是第8个孩子</li>
</ol>
</body>

</html>
```

![](/assets/web/202204071058471.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3新增选择器nth-type-of</title>
    <style>
        ul li:first-of-type {
            background-color: pink;
        }

        ul li:last-of-type {
            background-color: pink;
        }

        ul li:nth-of-type(even) {
            background-color: skyblue;
        }

        /* nth-child 会把所有的盒子都排列序号 */
        /* 执行的时候首先看 :nth-child(1) 之后回去看 前面 div */
        /* 所以此处先排序：*/
        /* 1号：<p>光头强</p> */
        /* 2号：<div>熊大</div> */
        /* 3号：<div>熊二</div> */
        /* 再回过头看，此时会发现，1号并不是 div，所以不生效！*/

        section div:nth-child(1) {
            background-color: red;	/* 不生效 */
        }

        /* nth-of-type 会把指定元素的盒子排列序号 */
        /* 执行的时候首先看 div 指定的元素 之后回去看 :nth-of-type(1) 第几个孩子 */
        section div:nth-of-type(1) {
            background-color: blue;
        }
    </style>
</head>

<body>
<ul>
    <li>我是第1个孩子</li>
    <li>我是第2个孩子</li>
    <li>我是第3个孩子</li>
    <li>我是第4个孩子</li>
    <li>我是第5个孩子</li>
    <li>我是第6个孩子</li>
    <li>我是第7个孩子</li>
    <li>我是第8个孩子</li>
</ul>
<!-- 区别 -->
<section>
    <p>光头强</p>
    <div>熊大</div>
    <div>熊二</div>
</section>
</body>

</html>
```

![](/assets/web/202204071059675.png)

结构伪类选择器如下所示：

| 选择器               | 示例                  | 示例说明                                    |
| -------------------- | --------------------- | ------------------------------------------- |
| :first-child         | p:first-child         | 匹配属于任意元素的第一个子元素的 p 元素     |
| :first-of-type       | p:first-of-type       | 选择父元素中的第一个 p 元素                 |
| :last-child          | p:last-child          | 选择所有 p 元素的最后一个子元素             |
| :last-of-type        | p:last-of-type        | 选择父元素中最后一个 p 元素                 |
| :empty               | p:empty               | 匹配没有子元素（包括文本节点）的 p 元素     |
| :nth-child(n)        | p:nth-child(2)        | 选择所有 p 元素的父元素的第二个子元素       |
| :nth-of-type(n)      | p:nth-of-type(2)      | 选择所有 p 元素第二个为 p 的子元素          |
| :nth-last-child(n)   | p:nth-last-child(2)   | 选择所有 p 元素倒数的第二个子元素           |
| :nth-last-of-type(n) | p:nth-last-of-type(2) | 选择所有 p 元素倒数的第二个为 p 的子元素    |
| :only-child          | p:only-child          | 选择所有仅有一个子元素，并且子元素是 p 元素 |
| :only-of-type        | p:only-of-type        | 选择所有仅有一个子元素中为 p 的元素         |



### 伪元素选择器

伪元素顾名思义就是在 HTML 文档中创建了一些抽象的标签元素，这些抽象元素并不存在于文档流中但是可以使用。例如 documen 接口不提供访问元素内容的第一个字或者第一行的机制，但是伪元素却能够让开发者可以提取到这些信息。同时一些伪元素也可以使开发者获取到不存在于源文档中的内容。伪元素由两个冒号 `::` 开头，后面为伪元素的名称。如：`::before`。所以可以这样认为**伪元素创建了一个虚拟容器，这个容器不包含任何 DOM 元素，但是可以包含内容。**

伪元素有以下几个：

| 选择器         | 示例            | 示例说明           |
| -------------- | --------------- | ------------------ |
| ::first-letter | p::first-letter | 选择器的首字母     |
| ::first-line   | p::first-line   | 选择器的首行       |
| ::selection    | p::selection    | 被用户选取的部分   |
| ::before       | p::before       | 在选择器前增加内容 |
| ::after        | p::after        | 在选择器后增加内容 |

可以用 content 属性和 before 及 after 伪元素配合使用来插入生成内容。

注意：

- before 和 after 创建一个元素，属于行内元素
- 新创建的这个元素在文档树中是找不到的，所以我们称为伪元素
- 语法：`element::before{}`
- before 和 after 必须有 content 属性
- before 在父元素内容的前面创建元素，after 在父元素内容的后面创建元素
- 伪元素选择器和标签选择器一样，权重为 1

**（1）伪元素选择器使用场景1：伪元素字体图标**

```css
p::before {
	position: absolute;
	right: 20px;
	top: 10px;
	content: '\e91e';
	font-size: 20px;
}
```

**（2）伪元素选择器使用场景2：仿土豆效果**

```css
/* 当我们鼠标经过了 土豆这个盒子，就让里面 before 遮罩层显示出来 */
.tudou:hover::before {
	/* 而是显示元素 */
    display: block;
}
```

**（3）伪元素选择器使用场景3：伪元素清除浮动**

1. 额外标签法也称为隔墙法，是 W3C 推荐的做法
2. 父级添加 overflow 属性
3. 父级添加 after 伪元素
4. 父级添加双伪元素

额外标签法也称为隔墙法，是 W3C 推荐的做法。

![](/assets/web/202204071107733.png)

注意：要求这个新的空标签必须是块级元素。

后面两种伪元素清除浮动算是第一种额外标签法的一个升级和优化。

```css
.clearfix:after {
	content: "";			/* 伪元素必须写的属性 */
	display: block;			/* 插入的元素必须是块级 */
	height: 0;				/* 不要看见这个元素 */
	clear: both;			/* 核心代码清除浮动 */
	visibility: hidden;		/* 不要看见这个元素 */
}
```

```css
.clearfix:before,
.clearfix:after {
	content: "";
	display: table;			/* 转换为块级元素并且一行显示 */
}

.clearfix:after {
	clear: both;
}
```

案例：

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>伪元素选择器before和after</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: salmon;
        }

        /* div::before 权重是 2 */
        div::before {
            /* 这个 content 是必须要写的 */
            /* display: inline-block; */
            content: '我';
            /* width: 30px;
            height: 40px;
            background-color: purple; */
        }

        div::after {
            content: '小猪佩奇';
        }
    </style>
</head>
<body>
<div>
    是
</div>
</body>
</html>
```

![](/assets/web/202204071110666.gif)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>伪元素选择器使用场景-字体图标</title>
    <style>
        @font-face {
            font-family: 'icomoon';
            src: url('fonts/icomoon.eot?1lv3na');
            src: url('fonts/icomoon.eot?1lv3na#iefix') format('embedded-opentype'),
            url('fonts/icomoon.ttf?1lv3na') format('truetype'),
            url('fonts/icomoon.woff?1lv3na') format('woff'),
            url('fonts/icomoon.svg?1lv3na#icomoon') format('svg');
            font-weight: normal;
            font-style: normal;
            font-display: block;
        }

        div {
            position: relative;
            width: 200px;
            height: 35px;
            border: 1px solid red;
        }

        div::after {
            position: absolute;
            top: 10px;
            right: 10px;
            font-family: 'icomoon';
            /* content: ''; */
            content: '\e91e';
            color: red;
            font-size: 18px;
        }
    </style>
</head>

<body>
<div></div>
</body>

</html>
```

![](/assets/web/202204071111438.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>伪元素选择器使用场景2-仿土豆网显示隐藏遮罩案例</title>
    <style>
        .tudou {
            position: relative;
            width: 444px;
            height: 320px;
            background-color: pink;
            margin: 30px auto;
        }

        .tudou img {
            width: 100%;
            height: 100%;
        }

        .tudou::before {
            content: '';
            /* 隐藏遮罩层 */
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .4) url(images/arr.png) no-repeat center;
        }

        /* 当我们鼠标经过了土豆这个盒子，就让里面 before 遮罩层显示出来 */
        .tudou:hover::before {
            /* 而是显示元素 */
            display: block;
        }
    </style>
</head>

<body>
<div class="tudou">
    <img src="images/tudou.jpg" alt="">
</div>
</body>

</html>
```

![](/assets/web/202204071111258.gif)

### CSS样式权重

 CSS 的优先级，为 `内嵌样式 > id > class >` 标签 。这种优先级仅是一种简单的分类，真正的 CSS 优先级使用的是权重来进行控制的。

权重，是一个相对的概念，是针对某一指标而言。某一指标的权重是指该指标在整体评价中的相对重要程度。每一个 CSS 的选择器都有一个相对的重要程度值，也就是权重的值，简称“权值”；CSS 通过 CSS 选择器的权重占比，来计算 CSS 选择规则的总权值，从而确定 定义样式规则的 优先级次序。

| 选择器                       | 权重值     |
| ---------------------------- | ---------- |
| 行内样式                     | 1，0，0，0 |
| id 选择器                    | 0，1，0，0 |
| class 选择器/属性选择器/伪类 | 0，0，1，0 |
| 元素名/伪元素                | 0，0，0，1 |
| 继承或者*                    | 0，0，0，0 |

CSS 优先级规则：

1. CSS 选择规则的权值不同时，权值高的优先；即先比较高等级，在高等级权值相同的时再比较低等级权值。
2. CSS 选择规则的权值相同时，后定义的规则优先；即**权值完全相同时，后定义的优先**。
3. CSS 属性后面加 !important 时，无条件绝对优先；即 !important 拥有最高权值。

> 总结：慎用 !important 。

定义 CSS 样式时，经常出现两个或更多规则应用在同一元素上，此时：

- 选择器相同，则执行层叠性；
- 选择器不同，就会出现优先级的问题；
- 权重计算公式值从左到右，左边的最大，一级大于一级，数位之间没有进制，级别之间不可超越。

> 数位之间没有进制 比如说： 0,0,0,5 + 0,0,0,5 =0,0,0,10 而不是 0,0, 1, 0， 所以不会存在10个div能
> 赶上一个类选择器的情况。

## CSS3 文本效果

### 文本阴影

CSS3 支持给文本添加阴影效果的属性 text-shadow

```css
div {
    text-shadow: 1px 2px 3px #000;
}
```

- 第一个数值 1px 代表阴影距离文字左边距多少显示阴影效果。
- 第二个数值 2px 代表阴影距离文字上边距多少显示阴影效果。
- 第三个数值 3px 代表阴影大小范围。
- 第四个数值代表阴影的颜色。

### 文本自动换行

当前主流浏览器都自带文本自动换行的功能。换行的规范如下：

- 英文会在空格或者连字符的位置换行以保证内容的可读性。
- 中文会在任何一个中文文字后面换行。

在 CSS3 中定义了几个专门用来进行换行控制的属性，分别是：

- line-break：用于控制中日韩文本的换行规则。
- word-wrap：用于控制换行，当属性值为 “ break-word ” 时将强制换行，这意味着页面将不按浏览器默认的换行规范执行，当一个单词没有结束时也会被截断强制换行。
- word-break：用户控制非中日韩文本的换行规则。

在日常的开发过程中只要使用 word-wrap 和 word-break 来实现换行控制，本节重点讲解这两个属性的使用。

`**word-break: break-all`，一般用这句这OK了，但在有些特殊情况下还是会撑开，因此需要再加上后面一句`(word-wrap:break-word;)`就可以解决。此样式可以让表格中的一些连续的英文单词自动换行。**

#### word-wrap 属性

word-wrap 属性的语法为：

```css
word-wrap: normal|break-word;
```

取值说明：

| 值         | 描述                                         |
| ---------- | -------------------------------------------- |
| normal     | 只在允许的断字点换行（浏览器保持默认处理）。 |
| break-word | 在长单词或 URL 地址内部进行换行。            |

`word-wrap`对行内元素是没有效果的

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <style>
      div {
        border: 1px solid;
        width: 80px;
        word-wrap: break-word;
      }
    </style>
  </head>
  <body>
    <div>CSS is a very, very good technology</div>
  </body>
</html>
```

显示效果：

![图片描述](/assets/web/202201162022655.png)

#### word-break 属性

word-break 属性的语法为：

```css
word-break: normal|break-all|keep-all;
```

取值说明：

| 值        | 描述                           |
| --------- | ------------------------------ |
| normal    | 使用浏览器默认的换行规则。     |
| break-all | 允许在单词内换行。             |
| keep-all  | 只能在半角空格或连字符处换行。 |

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <style>
      div {
        float: left;
        margin-left: 40px;
      }
      #text1 {
        border: 1px solid;
        width: 80px;
        word-break: keep-all;
      }
      #text2 {
        border: 1px solid;
        width: 80px;
        word-break: break-all;
      }
    </style>
  </head>
  <body>
    <div id="text1">CSS is a very, very good technology</div>
    <div id="text2">CSS is a very, very good technology</div>
  </body>
</html>
```

显示效果：

![图片描述](https://doc.shiyanlou.com/courses/uid1454664-20201110-1604971202235)



#### white-space、word-break、word-wrap（overflow-wrap）让人迷惑的三个属性

```html
<style>
.box {
  border: 1px solid grey;
  width: 140px;
  float: left;
  margin-right: 50px;
}
span {
  display: inline-block;
}
</style>
<div id="box">
  Hi&nbsp;&nbsp;,
  This   is a incomprehensibilities long word.
  <br>
  你好&nbsp;&nbsp;，
  这   是一个不可思议的长单词
</div>
```

可以看到，`nbsp;`和`<br>`可以正常发挥作用，而连续的空格会被缩减成一个（比如This和is之间的三个空格变成了一个），换行符也全都无效。句子超过一行后会自动换行，而长度超过一行的单个单词会超出边界。
接下来我们看下， 给它上面三个css属性赋值后会出现什么变化。

![image-20220223103822774](/assets/web/202202231038860.png)

##### white-space

正如它的名字，**这个属性是用来控制空白字符的显示的**，同时还能控制是否自动换行。它有五个值：`normal | nowrap | pre | pre-wrap | pre-line`。因为默认是`normal`，所以我们主要研究下其它四种值时的展现情况。

（为了方便比较，下文所有图，左侧为`normal`即初始情况，右侧为赋上相应值时的情况）

先看下`white-space:nowrap`时的情况：

不仅空格被合并，换行符无效，连原本的自动换行都没了！只有`</br>`才能导致换行！所以这个值的表现还是挺简单的，我们可以理解为`**永不换行**`。

![image-20220223104003160](/assets/web/202202231040228.png)

`white-space:pre`：

空格和换行符全都被保留了下来！不过自动换行还是没了。保留，所以`pre`其实是`preserve`的缩写，这样就好记了。

![image-20220223104041150](/assets/web/202202231040221.png)

`white-space:pre-wrap`：

显然`pre-wrap`就是`preserve`+`wrap`，保留空格和换行符，且可以自动换行。

**warp是换行**

![image-20220223104135679](/assets/web/202202231041764.png)

`white-space:pre-line`：

空格被合并了，但是换行符可以发挥作用，`line`应该是`new line`的意思，自动换行还在，所以`pre-line`其实是`preserve`+`new line`+`wrap`。

![image-20220223110350736](/assets/web/202202231103817.png)



| 是否能发挥作用 | 换行符 | 空格      | 自动换行 | `</br>`、nbsp; |
| -------------- | ------ | --------- | -------- | ------------ |
| normal         | ×      | ×（合并） | √        | √            |
| nowrap         | ×      | ×（合并） | ×        | √            |
| pre            | √      | √         | ×        | √            |
| pre-wrap       | √      | √         | √        | √            |
| pre-line       | √      | ×（合并） | √        | √            |

##### word-break

从这个名字可以知道，**这个属性是控制单词如何被拆分换行的**。它有三个值：`normal | break-all | keep-all`。

```
word-break:keep-all
```

**所有“单词”一律不拆分换行**，注意，我这里的“单词”包括连续的中文字符（还有日文、韩文等），或者可以理解为**只有空格可以触发自动换行**

![image-20220223111430810](/assets/web/202202231114882.png)

**(这后面换行是因为后面有空格)**

`word-break:break-all`

**所有单词碰到边界一律拆分换行**，不管你是`incomprehensibilities`这样一行都显示不下的单词，还是`long`这样很短的单词，只要碰到边界，都会被强制拆分换行。所以用`word-break:break-all`时要慎重呀。

![image-20220223111617812](/assets/web/202202231116891.png)
这样的效果好像并不太好呀，能不能就把incomprehensibilities拆一下，其它的单词不拆呢？那就需要下面这个属性了：

##### word-wrap（overflow-wrap）

> word-wrap 属性原本属于微软的一个私有属性，在 CSS3 现在的文本规范草案中已经被重名为 overflow-wrap 。 word-wrap 现在被当作 overflow-wrap 的 “别名”。 稳定的谷歌 Chrome 和 Opera 浏览器版本支持这种新语法。

**这个属性也是控制单词如何被拆分换行的**，实际上是作为`word-break`的互补，它只有两个值：`normal | break-word`，那我们看下`break-word`：

![image-20220223111708834](/assets/web/202202231117913.png)

终于达到了上文我们希望的效果，**只有当一个单词一整行都显示不下时，才会拆分换行该单词**。
所以我觉得`overflow-wrap`更好理解好记一些，**overflow，只有长到溢出的单词才会被强制拆分换行！**

（其实前面的`word-break`属性除了列出的那三个值外，也有个`break-word`值，效果跟这里的`word-wrap:break-word`一样，然而只有Chrome、Safari等部分浏览器支持）

最后总结一下三个属性

- white-space，**控制空白字符的显示**，同时还能控制是否自动换行。它有五个值：`normal | nowrap | pre | pre-wrap | pre-line`
- word-break，**控制单词如何被拆分换行**。它有三个值：`normal | break-all | keep-all`
- word-wrap（overflow-wrap）**控制长度超过一行的单词是否被拆分换行**，是`word-break`的补充，它有两个值：`normal | break-word`

### 文本溢出

在 CSS3 中新增了 text-overflow 属性，该属性可以设置超长文本省略显示。在文本编排的时候常常会遇到栏目边框的宽度和文本的长度不统一的情况，当这种情况发生的时候就会导致将栏目边框撑变形的情况发生，这样会使页面布局出现错误，因此对可能出现长文本文字的区域使用文本溢出属性省略部分文本以保证页面布局完整。

text-overflow 的语法如下：

```css
text-overflow: clip|ellipsis|string;
```

其中的属性含义如下表所示：

| 值       | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| clip     | 修剪文本。                                                   |
| ellipsis | 显示省略符号来代表被修剪的文本。                             |
| string   | 使用给定的字符串来代表被修剪的文本。 只在 Firefox浏览器下有效 |

文本溢出仅仅是对当文本超出边框时如何处理做了约束，但是并不能对超出的内容做处理，所以在使用该属性的时候通常需要同强制单行显示：`white-space: nowrap` 和超出隐藏 `overflow:hiddent` 一起使用。

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <style>
      div {
        border: 1px solid;
        width: 50px;
        text-overflow: ellipsis; /*文本溢出*/
        white-space: nowrap; /*强制单行显示*/
        overflow: hidden; /*超出隐藏*/
      }
    </style>
  </head>
  <body>
    <div>xxxxxxxx</div>
  </body>
</html>
```

## CSS3字体

### @font-face 介绍

#### 字体定义

@font-face 是 CSS3 中允许使用自定义字体的一个模块，它主要的功能是可以将自己定义的 Web 字体嵌入到网页中。随着 Web 的发展，自定义字体会越来越多的应用到网站当中。@font-face 的语法如下：

```css
@font-face {
   font-family: <YourDefineFontName>;
   src: <url> [<format>],[<source> [<format>]], *;
   [font-weight: <weight>];
   [font-style: <style>];
}
```

| 属性        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| font-family | 为载入的字体取名字。                                         |
| src         | 加载字体，可以是相对路径，可以是绝对路径，也可以是网络地址。 |
| font-weight | 定义加粗样式。                                               |
| font-style  | 定义字体样式。                                               |

format 对应字体格式以及常见兼容性写法：

```css
@font-face {
  font-family: "defineName";
  src: url("../fonts/singlemalta-webfont.eot");
  src: url("../fonts/singlemalta-webfont.eot?#iefix") format("embedded-opentype"),
    url("../fonts/singlemalta-webfont.woff") format("woff"),
    url("../fonts/singlemalta-webfont.ttf") format("truetype"), url("../fonts/singlemalta-webfont.svg#defineName")
      format("svg");
  font-weight: normal;
  font-style: normal;
}
```

说明：

**1、iefix 有何作用**

IE9 之前的版本没有按照标准解析字体声明，当 src 属性包含多个 url 时，它无法正确的解析而返回 404 错误，而其他浏览器会自动采用自己适用的 url。因此把仅 IE9 之前支持的 EOT 格式放在第一位，然后在 url 后加上 ?，这样 IE9 之前的版本会把问号之后的内容当作 url 的参数。至于 #iefix 的作用，一是起到了注释的作用，二是可以将 url 参数变为锚点，减少发送给服务器的字符。

**2、为何有两个 src**

绝大多数情况下，第一个 src 是可以去掉的，除非需要支持 IE9 下的兼容模式。在 IE9 中可以使用 IE7 和 IE8 的模式渲染页面，微软修改了在兼容模式下的 CSS 解析器，导致使用 ? 的方案失效。由于 CSS 解释器是从下往上解析的，所以在上面添加一个不带问号的 src 属性便可以解决此问题。

#### 字体引用

在样式表中将字体加载进来以后就可以使用了，使用 font-family 引入即可生效。

```css
body {
  font-family: defineName;
}
```

##### 兼容性

- IE6-8 仅支持 embedded-opentype（.eot）。
- firefox3.5 支持 truetype（.ttf）、opentype（.otf）。
- firefox3.6 支持 truetype（.ttf）和 opentype（.otf）、WOFF（.woff）。
- chrome 支持 truetype（.ttf）、opentype（.otf）、WOFF（.woff）、svg（.svg）。
- safari 支持 truetype（.ttf）、opentype（.otf）、WOFF（.woff）、svg（.svg）。
- opentype（.otf）、WOFF（.woff）、svg（.svg）。

##### 格式介绍

目前最主要的几种网络字体(web font) 格式包括 WOFF，SVG，EOT，OTF/TTF。

###### **WOFF**

WOFF 是 Web Open Font Format 几个词的首字母简写。这种字体格式专门用于网上，由 Mozilla 联合其它几大组织共同开发。WOFF 字体通常比其它字体加载的要快些，因为使用了 OpenType (OTF) 和 TrueType (TTF)字体里的存储结构和压缩算法。这种字体格式还可以加入元信息和授权信息。这种字体格式有君临天下的趋势，因为所有的现代浏览器都开始支持这种字体格式。

###### **SVG / SVGZ**

Scalable Vector Graphics (Font)。SVG 是一种用矢量图格式改进的字体格式，体积上比矢量图更小，适合在手机设备上使用。

###### **EOT**

Embedded Open Type。这是微软创造的字体格式。这种格式只在 IE6-IE8 里使用。

###### **OTF / TTF**

OpenType Font 和 TrueType Font。部分的因为这种格式容易被复制（非法的），这才催生了 WOFF 字体格式。然而，OpenType 有很多独特的地方，受到很多设计者的喜爱。

### iconfont 的使用

图标字体（iconfont）也叫字体图标，就是使用字体做的图标。受到近些年扁平化设计的影响，越来越多的图标都开始使用 iconfont 来实现。iconfont 使用有很多优点：

- 自由的变化大小，且不会模糊。
- 比图片小，加载快。
- 可以任意改变颜色。

当前主流的 iconfont 应用在阿里巴巴矢量图标库中都可以找到，下面就介绍一下如何使用图标库中的字体图标。

#### 下载字体图标

首先在 Iconfont-[阿里巴巴矢量图标库](http://www.iconfont.cn/) 上面找到你需要的图标并下载。

#### 解压字体图标

下载好的文件解压出来，放到项目的 css 文件夹。（方便之后在 html 中引用）

#### 使用字体图标

**1、unicode 用法**

字体图标的使用有很多中方式，unicode 是字体在网页端最原始的应用方式，特点是：

- 兼容性最好，支持 ie6+，及所有现代浏览器。
- 支持按字体的方式去动态调整图标大小，颜色等等。
- 但是因为是字体，所以不支持多色。只能使用平台里单色的图标，就算项目里有多色图标也会自动去色。

> 注意：新版 iconfont 支持多色图标，这些多色图标在 unicode 模式下将不能使用，如果有需求建议使用 symbol 的引用方式

第一步：拷贝项目下面生成的 font-face 到网站样式表（注意路径）。

```css
/* 声明字体 */
@font-face {
  /* 引用字体文件（注意路径）format 告诉浏览器这些字体文件以什么格式解析 */
  font-family: "iconfont";
  src: url("iconfont.eot"); /* IE9*/
  src: url("iconfont.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
      url("iconfont.woff") format("woff"),
    /* chrome, firefox */ url("iconfont.ttf") format("truetype"), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      url("iconfont.svg#iconfont") format("svg"); /* iOS 4.1- */
}
```

第二步：定义使用 iconfont 的样式。

```css
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
```

第三步：挑选相应图标并获取字体编码，应用于页面。

```css
<i class="iconfont">&#x33;</i>
```

**2、fontclass 引用**

font-class 是 unicode 使用方式的一种变种，主要是解决 unicode 书写不直观，语意不明确的问题。与 unicode 使用方式相比，具有如下特点：

- 兼容性良好，支持 ie8+，及所有现代浏览器。
- 相比于 unicode 语意明确，书写更直观。可以很容易分辨这个 icon 是什么。
- 因为使用 class 来定义图标，所以当要替换图标时，只需要修改 class 里面的 unicode 引用。
- 不过因为本质上还是使用的字体，所以多色图标还是不支持的。

第一步：引入项目下面生成的 fontclass 代码：

```html
<link rel="stylesheet" type="text/css" href="./iconfont.css" />
```

第二步：挑选相应图标并获取类名，应用于页面：

```html
<i class="iconfont icon-xxx"></i>
```

**3、symbol 引用**

这是一种全新的使用方式，应该说这才是未来的主流，也是平台目前推荐的用法。这种用法其实是做了一个 svg 的集合，与另外两种相比具有如下特点：

- 支持多色图标了，不再受单色限制。
- 通过一些技巧，支持像字体那样，通过 font-size,color 来调整样式。
- 兼容性较差，支持 ie9+，及现代浏览器。
- 浏览器渲染 svg 的性能一般，还不如 png。

第一步：引入项目下面生成的 symbol 代码：

```html
<script src="./iconfont.js"></script>
```

第二步：加入通用 css 代码（引入一次就行）：

```html
<style type="text/css">
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
```

第三步：挑选相应图标并获取类名，应用于页面：

```html
<svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-xxx"></use>
</svg>
```

## CSS3边框

### 圆角边框

border-radius 属性是一个最多可指定四个 border -*- radius 属性的复合属性，可以一次设置四个属性的圆角也可以分别设置。border-radius 属性的值表示圆角的直径。

语法：

```css
border-radius: 1-4 length|% / 1-4 length|%;
```

> 注意：每个半径的四个值的顺序是：左上角，右上角，右下角，左下角。

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <style>
      div {
        width: 300px;
        height: 100px;
        text-align: center;
        background-color: darkgray;
        border: 2px black;
        border-radius: 10px 20px 30px 40px; /*四个圆角直径不同*/
      }
    </style>
  </head>
  <body>
    <div>圆角效果</div>
  </body>
</html>
```

显示效果：

![图片描述](/assets/web/202201171613915.png)

示例代码中的圆角样式也可以这样设置：

```css
border-top-left-radius: 10px;
border-top-right-radius: 20px;
border-bottom-right-radius: 30px;
border-bottom-left-radius: 40px;
```

### 盒子阴影

在 CSS3 中使用 box-shadow 属性来设置一个或多个下拉阴影的框，视觉效果就像是盒子有了阴影一样。CSS3 的盒子阴影是一种常见的样式设置效果，在页面中可以使用盒子阴影来实现页面中的“卡片效果”。这是一种经常被使用到的特效。

语法：

```css
box-shadow: h-shadow v-shadow blur spread color inset;
```

| 值       | 说明                                           |
| -------- | ---------------------------------------------- |
| h-shadow | 必选，水平阴影的位置，允许负值。               |
| v-shadow | 必选，垂直阴影的位置。允许负值。               |
| blur     | 可选，模糊距离。                               |
| spread   | 可选，阴影的大小。                             |
| color    | 可选，阴影的颜色。                             |
| inset    | 可选，从外层的阴影（开始时）改变阴影内侧阴影。 |

在不设置阴影类型时，默认为投影效果。当设置为 inset 时，则阴影效果为内阴影，X 轴和 Y 轴可以控制阴影的偏移量。阴影大小、模糊距离和阴影颜色都是可选值。默认为黑色实体阴影。

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <style>
      div {
        width: 300px;
        height: 100px;
        text-align: center;
        background-color: green;
        box-shadow: 10px 10px 5px #888888;
      }
    </style>
  </head>
  <body>
    <div>盒子阴影</div>
  </body>
</html>
```

显示效果：

![图片描述](/assets/web/202201171614867.png)

- 盒子阴影面积大小可用 rgba() 效果会柔和一些，后期会很常用；

### 边框图片

CSS3 中引入边框图片属性 border-image 属性，该属性可以让变化的边框长度或者宽度使用一个图像来绘制。并且使用 border-image 属性可以让浏览器在显示图像边框时，自动的将图像分为 9 个部分来进行处理。这样就不需要人为的进程裁图了，只需要引用一个图片就可以实现边框图片的设置。

语法：

```css
border-image: source slice width outset repeat|initial|inherit;
```

| 值                  | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| border-image-source | 用于指定要用于绘制边框的图像的位置。                         |
| border-image-slice  | 图像裁剪位置                                                 |
| border-image-width  | 图像边界的宽度。                                             |
| border-image-outset | 用于指定在边框外部绘制 border-image-area 的量。              |
| border-image-repeat | 用于设置图像边界是否应重复（repeat）、拉伸（stretch）或铺满（round）。 |

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <style>
      div {
        width: 200px;
        height: 100px;
        text-align: center;
        border: 15px solid transparent; /*设置边框样式*/
        border-image: url("/assets/web/202201171617528.png")
          30 30 round; /*设置边框图片*/
      }
    </style>
  </head>
  <body>
    <div>xxxx</div>
  </body>
</html>
```

结果：

![image-20220117161811877](/assets/web/202201171618930.png)

#### border-image-source

- border-image的背景图使用url()调用，图片可以是相对路径或是绝对路径，也可以不使用图片，即`border-image:none;`

#### border-image-slice

- 图片剪裁位置
- 没有单位，默认单位就是像素(px)。例如：border-image:url(border.png) 27 repeat;这里的27专指27px。
- 支持百分比值，百分比值大小是相对于边框图片的大小，假设边框图片大小为400px*300px，则20%的实际效果就是剪裁了图片的60px 80px 60px 80px的四边大小。
- 剪裁特性。类似于CSS中的clip属性。其有1~4个参数，代表上右下左四个方位的剪裁，符合CSS普遍的方位规则（与margin，padding等或border-width一致），举个简单的例子，前面提到，支持百分比宽度，所以这里“30% 35% 40% 30%”的示意可以用下图表示：
- ![clipboard.png](/assets/web/202201182051126.png)
- *距离图片上部30%的地方，距离右边35%，距离底部40%，左边30%的地方各剪裁一下。也就是对图片进行了“四刀切”，形成了九个分离的区域，这就是九宫格*

#### border-image-repeat

取值为repeat（重复）只是其中之一，其余两个是round（平铺）和stretch（拉伸）。其中，stretch是默认值。

参数0~2个，0则使用默认值 – stretch，

例如：border-image:url(border.png) 30% 40%;就等同于border-image:url(border.png) 30% 40% stretch stretch;

1则表示水平方向及垂直方向均使用此参数；2个参数的话则第一个参数表水平方向，第二个参数表示垂直方向。

例如：border-image:url(border.png) 30% 40% round repeat;表示水平方向round（平铺），垂直方向repeat（重复）。

关于round 和repeat 的区别。

**round会凑整填充（进行了适度的拉伸）。repeat不进行拉伸，不凑整。**

##### 实际渲染规则

![clipboard.png](/assets/web/202201182056704.png)

通过裁切属性变成

![图片描述](/assets/web/202201182109963.gif)

我们放开看，

![图片描述](/assets/web/202201182112406.jpeg)

- **如图 在border-image中的橙红色的四个边角只会呆在border的四个角,并且水平和垂直方向均被拉伸来填充border的四个角。**
- 如图 上下区域即border-top-image和border-bottom-image受到第一个参数——水平方向效果影响：如果为repeat，则此区域被水平重复(round水平平铺，stretch水平拉伸)来填充对应的上下border**【该区域在垂直方向上首先会按所对应的border-image-width的值等比缩放，然后再按参数设置在边框水平方向上进行重复或平铺或拉伸】**
- 左右区域border-left-image和border-right-image 的作用效果亦然**【该区域在水平方向上首先会按所对应的border-image-width的值等比缩放，然后再按参数设置在边框垂直方向上进行重复或平铺或拉伸】**

![图片描述](/assets/web/202201182246189.png)

#### border-image-width

这个属性默认是边框的宽度，用来限制相应区域背景图的范围，首先相应背景区域的图像会根据这个属性值进行缩放。然后再重复或平铺或拉伸。

```css
在复合写法中应该位于 slice属性 和repeat属性中间 用“/”间隔
如：border-image:url(border.png) 27 / 6rem / repeat;
```

length 带 px, em, in … 单位的尺寸值

percentage 百分比

number 不带单位的数字；它表示 border-width 的倍数

auto 使用 auto， border-image-width 将会使用 border-image-slice 的值

效果如下
（白框为border）
![图片描述](/assets/web/202201191439507.png)

```css
border-image-width: 1.5rem;
```

效果如下
（白框为border）
![图片描述](/assets/web/202201191439407.png)

------

```css
border: 3em double orange;
border-image: url(border.png) 27 round;
border-image-width: 6rem 1.5rem;
```

效果如下
（白框为border）
![图片描述](/assets/web/202201191439999.png)

> border-image-width用来设置边框素材的宽度,当同时设置了border-image-width和border-width属性时，那么边框的实际宽度由border-width属性决定。此时，如果border-image-width属性小于border-width属性，边框图片会沿边框的外侧分布而内侧留空形成 **padding** 的效果；如果border-image-width属性大于border-width属性，边框图片会仍会沿边框的外侧分布而**内测溢出**，如下图

![图片描述](/assets/web/202201191443559.png)

#### border-image-outset

`语法：border-image-outset: [ <length> | <number> ]{1,4}`
相当于把原来的贴图位置向外延伸。不能为负值，试一下就知道。

在复合写法中应该位于 border-image-width 后面，用“/”间隔
`如：border-image:url(border.png) 27 / 6rem / 1.5rem /repeat;`
向外延伸1.5rem再贴图。。

```css
border: 3em double orange;
border-image: url(border.png) 27 round;
border-image-width: 1.5rem;
border-image-outset: 1.5rem;
```

![图片描述](/assets/web/202201191441533.png)

## CSS3背景

CSS3 中增强了 background 属性的功能，允许在一个元素内添加多个背景，并且与之配合的允许改变位置起始坐标等其他的一些背景属性，这些新增属性可以极大地改善背景的控制。

### 背景图像

在 CSS3 中定义的背景相关属性语法如下所示：

```css
background-image: url1, url2, ..., urlN;
background-color: color;
background-repeat: repeat1, repeat2, ..., repeatN;
backround-position: position1, position2, ..., positionN;
background-size: size1, size2, ..., sizeN;
background-attachment: attachment1, attachment2, ..., attachmentN;
background-clip: clip1, clip2, ..., clipN;
background-origin: origin1, origin2, ..., originN;
```

使用规则：

- 如果属性有多个值，每个属性值之间用逗号隔开；
- 如果有 size 属性值，需要紧跟 在 position 属性后设置，并且用 "/" 隔开；
- 如果设置多个背景图片，但其他属性只有一个（例如 background-repeat 只有一个），表明所有背景图片应用该属性值。
- background-color 属性只能设置一个值。

下面演示一下如何设置背景图片，示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <style>
      div {
        width: 300px;
        height: 200px;
        text-align: center;
        background-image: url("xxx"),
          url("xxxxx");
      }
    </style>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

### 背景图像的尺寸

在 CSS2 中背景图像的大小是不可以控制的，如何需要使用背景图像填充元素的背景区域，则需要设计更大的背景图像，否则只能让图像选择平铺的方式来填充页面元素。在 CSS3 中新增了 background-size 属性，该属性可以用来控制背景图像的显示大小。语法如下：

```css
background-size: length|percentage|cover|contain;
```

| 值         | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| length     | 设置背景图片高度和宽度。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为 **auto**(自动) 。 |
| percentage | 将计算相对于背景定位区域的百分比。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为"auto(自动)" 。 |
| cover      | 此时会保持图像的纵横比并将图像缩放成将**完全覆盖背景定位区域**的最小大小。 |
| contain    | 此时会保持图像的纵横比并将图像缩放成将**适合背景定位区域**的最大大小。 |

### 背景图像的位置区域

**`background-position`** 为每一个背景图片设置初始位置

- 关键字 `center`，用来居中背景图片。
- 关键字 `top`, `left`, `bottom`, `right` 中的一个。用来指定把这个项目*（原文为 item）放在哪*一个边缘。另一个维度被设置成 50%，所以这个项目（原文为 item）被放在指定边缘的中间位置。

- 如果一个值是 `top` 或 `bottom`，那么另一个值不应该是 `top` 或 `bottom`。
- 如果一个值是 `left` 或  `right`，那么另一个值不应该是 `left` 或 `right` 。

---



假设有一个300px宽的图片，将这个图片使用到一个100px宽的容器中，并且将background-size设置成自动：

> 当指定百分比值的时候，实际上执行了以下的计算公式（该公式可以用数学方式定义图片和容器相对位置重合）：
>
> ```
> (container width - image width) * (position x%) = (x offset value)
> (container height - image height) * (position y%) = (y offset value)
> ```

`100px - 300px = -200px (容器和图片的宽度差)`

> 另外需要注意，如果背景图片的大小和容器一样，那设置百分比的值将永远无效，因为“容器和图片的差”为0（图片永远填满容器，并且图片的相对位置和容器的相对位置永远重合）。在这种情况下，需要为偏移使用绝对值（例如px）。

当对background-position设置值依次为-25%，0%，50%，100%，125%，得到图片相对容器的偏移值为：

```
-200px * -25% = 50px
-200px * 0% = 0px
-200px * 50% = -100px
-200px * 100% = -200px
-200px * 125% = -250px
```

对于这些例子中设置的偏移，图片相对容器真实的偏移值就是：

- +50px（将图片的左边界对齐容器的中线）
- 0px（图片的左边界与容器左边界重合）
- -100px（将图片相对容器左移100px，这意味着图片中部的100px【把图片分成3份思考】内容将出现在容器中）
- -200px（将图片相对容器左移200px，这意味着图片右部分的100px内容将出现在容器中）
- -250px（将图片相对容器左移250px，这意味着图片的右边界对齐容器的中线）

因此，可总结出：

百分比值的偏移指定图片的相对位置和容器的相对位置重合。

值0%代表图片的左边界（或上边界）和容器的左边界（上边界）重合。

值100%代表图片的右边界（或下边界）和容器的右边界（或下边界）重合。

值50%则代表图片的中点和容器的中点重合。

----



CSS3 通过 background-position 属性定义背景的位置区域，新增的 background-origin 属性可以用来协助控制背景图片的位置。默认情况下，background-position 属性总是以元素左上角为原点定位背景图，使用 background-origin 属性可以改变这种定位方式，可以有更多的原点定位选择。

语法：

```css
background-origin: border-box|padding-box|content-box;
```

具体取值如下表所示：

| 属性值      | 描述                   |
| ----------- | ---------------------- |
| border-box  | 以边框作为原点来定位。 |
| padding-box | 以填充区为原点来定位。 |
| content-box | 以内容为原点来定位。   |

![图片描述](/assets/web/202201191455619.png)

### 背景裁剪

在 CSS3 中使用 background-clip 属性定义背景图像的裁剪区域。background-clip 属性和 background-origin 属性有一定的关联，background-clip 属性用来确定图片背景是否包含边框区域，background-origin 属性则用来决定 background-position 属性的定位参考。

语法：

```css
background-clip: border-box|padding-box|content-box;
```

| 值          | 说明                                             |
| ----------- | ------------------------------------------------ |
| border-box  | 默认值。背景绘制在边框方框内（剪切成边框方框）。 |
| padding-box | 背景绘制在衬距方框内（剪切成衬距方框）。         |
| content-box | 背景绘制在内容方框内（剪切成内容方框）。         |

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <style>
      div {
        width: 230px;
        height: 120px;
        border: 6px dotted;
        background-color: darkgray;
        background-clip: content-box; /*按内容裁剪*/
      }
    </style>
  </head>
  <body>
    <div>
      ces
    </div>
  </body>
</html>
```

![image-20220119145800827](/assets/web/202201191458895.png)

## CSS3 颜色

在 CSS3 之前的版本中，页面中的颜色使用 RGB 来进行控制，透明度则使用 opacity 来控制。控制方式比较单一并且许多颜色效果无法展示出来。

在 CSS3 中加入了三种颜色定义方式：RGBA 模式、HSL 模式、HSLA 模式，并允许通过 RGBA 颜色值和 HSLA 颜色值设定 Alpha 通道，通过这种方式可以更容易的实现将半透明文字和图片相重合。

### RGBA

RGBA 色彩模式是 RGB 色彩模式的扩展，在 Red（红）、Green（绿）、Blue（蓝）三原色通道的基础上，增加了 Alpha（不同明度）参数，这样设置让颜色的设置变得更加合理和便捷。

语法：

```css
rgba(r,g,b,<opacity>)
```

其中 rgb 的颜色取值范围为：0-255，opacity 的取值范围为：0-1。若是输入值超过取值范围，浏览器会将数值调整到最近的可取值。

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <style>
      li {
        width: 100px;
        list-style: none;
      }
      ul {
        float: left;
        margin-left: 40px;
      }
      li.opacity1 {
        opacity: 1;
        background: red;
      }
      li.opacity2 {
        opacity: 0.8;
        background: red;
      }
      li.opacity3 {
        opacity: 0.6;
        background: red;
      }
      li.opacity4 {
        opacity: 0.4;
        background: red;
      }
      li.opacity5 {
        opacity: 0.2;
        background: red;
      }
      li.opacity6 {
        opacity: 0;
        background: red;
      }
      li.rgba1 {
        background: rgba(255, 0, 0, 1);
      }
      li.rgba2 {
        background: rgba(255, 0, 0, 0.8);
      }
      li.rgba3 {
        background: rgba(255, 0, 0, 0.6);
      }
      li.rgba4 {
        background: rgba(255, 0, 0, 0.4);
      }
      li.rgba5 {
        background: rgba(255, 0, 0, 0.2);
      }
      li.rgba6 {
        background: rgba(255, 0, 0, 0);
      }
    </style>
  </head>
  <body>
    <ul>
      <li>opacity效果</li>
      <li class="opacity1">100%</li>
      <li class="opacity2">80%</li>
      <li class="opacity3">60%</li>
      <li class="opacity4">40%</li>
      <li class="opacity5">20%</li>
      <li class="opacity6">0</li>
    </ul>
    <ul>
      <li>rgba效果</li>
      <li class="rgba1">1</li>
      <li class="rgba2">0.8</li>
      <li class="rgba3">0.6</li>
      <li class="rgba4">0.4</li>
      <li class="rgba5">0.2</li>
      <li class="rgba6">0</li>
    </ul>
  </body>
</html>
```

显示效果： ![图片描述](/assets/web/202201191526180.png)

由示例图可以发现，opacity 效果中的文字随着透明值下降越来越看不清楚，全透明时文字已经无法显示，而 rgba 效果则不具有这样的问题。rgba 同样也可以控制文字的透明度

### HSL 和 HSLA

CSS3 新增了 HSL 颜色表现方式，这种变现方式通常用在工业制造领域，在 CSS 中也引入了这种表示方式使得颜色的表示更加的丰富，HSL 标准几乎包含了人类所能感知的所有颜色，显示器上能呈现的颜色也都在这个范围内。

语法：

```css
hsl(hue,staturation,lightness)
```

#### **H(hue) 色相**

CSS3 的色相使用一个圆环来表示，取值范围 0~360。其中 0 和 360 表示红色，120 表示绿色，240 表示蓝色，其他的颜色依次类推。CSS3 色相环如下图所示：

![image-20200723102516677](/assets/web/202201191546819.png)

#### **S(staturation) 饱和度**

饱和度表示颜色的鲜艳程度，取值范围为 0%~100%，数值越高饱和度越高，颜色就越鲜艳。完全不饱和（0%）的颜色是没有色相的。

#### **L(lightness)亮度**

亮度用来控制色彩的明暗变化，取值范围为 0%~100%。数值越小色彩越暗越接近于黑色，数值越大色彩越亮越接近于白色。

#### **HSLA**

HSL 和 HSLA 的关系同 RGB 和 RGBA 的关系一样，A 表示透明度 Alpha。使用和同 RGBA 一样，这里就不单独介绍了。

### Opacity

在 CSS3 中除了可以使用 Alpha 来设置透明度，还可以使用 Opacity 来设置。Opacity 可以设置页面任何属性的透明度，取值范围在 0~1 之间。Opacity 和 Alpha 在透明度的设置上还是有区别的，Alpha 可以有针对性的设置元素的背景色的透明度而不影响元素内容的透明度。**Opacity 是设置整个元素的透明度，内容也会受到影响**。

> HSL 是目前最主流的颜色定义标准，显示器上能呈现的颜色都在这个范围内，而 HSLA 则是 HSL 的扩展。

## CSS3渐变

> CSS3 渐变（gradient）可以通过设置两个或多个颜色来实现颜色间平稳过渡的效果。在 CSS3 以前的版本中，想要实现渐变效果只能使用图像来渲染。这样做会浪费大量的时间和带宽进行页面加载，得不偿失。现在，通过使用 CSS3 渐变（gradients）属性就可以实现颜色的渐变效果，节省了时间和带宽资源。同时，设置了渐变效果的元素在页面放大的时候看起来效果更好，因为渐变（gradient）是由浏览器生成的。

### 线性渐变

CSS3 的线性渐变是指设置两种颜色，在指定的方向上实现由一种颜色向另一种颜色转变的效果。两种颜色和方向必须设置，默认的方向从上至下。

语法：

```css
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
```

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <style>
      div {
        width: 300px;
        height: 200px;
        border: 1px solid;
        background-image: linear-gradient(red, green); /*从上到下*/
        background-image: linear-gradient(to right, red, green); /*从左到右*/
        background-image: linear-gradient(
          to bottom right,
          red,
          green
        ); /*从左上到右下*/
      }
    </style>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

显示效果：

![图片描述](/assets/web/202201191616761.png)

![图片描述](/assets/web/202201191616831.png)

![图片描述](/assets/web/202201191616744.png)

#### **使用角度**

当需要在渐变的方向上做更多的控制，可以通过定义一个角度而不用预定义方向来实现。（to bottom 、to top 、to right 、to left 、to bottom right 等等）

角度是指水平线和渐变线之间的角度，逆时针方向计算。

<img src="/assets/web/202201201309540.png" alt="无标题" style="zoom:50%;" />

换句话说，0deg 将创建一个从下到上的渐变，90deg 将创建一个从左到右的渐变。如下图所示：

<img src="/assets/web/202201191616910.png" alt="图片描述" style="zoom: 67%;" />

> 需要注意的是，当前很多浏览器（Chrome 、Safari 、firefox 等）依然使用了旧的标准，即 0deg 将创建一个从左到右的渐变，90deg 将创建一个从下到上的渐变。可以通过换算公式 **90 - x = y** 来重新确定角度。其中 x 为标准角度，y 为非标准角度。

语法：

```css
background-image: linear-gradient(angle, color-stop1, color-stop2);
```

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <style>
      div {
        width: 300px;
        height: 200px;
        border: 1px solid;
        background-image: linear-gradient(-90deg, green, yellow);
      }
    </style>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

显示效果：

![图片描述](/assets/web/202201191616894.png)

**多颜色渐变**

线性渐变还可以通过设置多个颜色来形成“彩虹效果”。示例如下：

```css
background-image: linear-gradient(red, yellow, green);
```

显示效果：

![图片描述](https://doc.shiyanlou.com/courses/uid1454664-20201111-1605054778525)

**透明度控制**

CSS3 渐变也支持透明度（transparent），可用于创建减弱变淡的效果。 为了添加透明度，我们使用 rgba() 函数来定义颜色节点。rgba() 函数中的最后一个参数可以是从 0 到 1 的值，它定义了颜色的透明度：0 表示完全透明，1 表示完全不透明。

下面的实例演示了从左边开始的线性渐变。起点是完全透明，慢慢过渡到完全不透明的红色：

```css
background-image: linear-gradient(
  to right,
  rgba(255, 0, 0, 0),
  rgba(255, 0, 0, 1)
);
```

显示效果：

![image-20220120131555734](/assets/web/202201201315794.png)

### 径向渐变

径向渐变由它的中心定义，径向渐变不同于线性渐变，线性渐变是从“一个方向”向“另一个方向”的颜色渐变，而径向渐变是从“一个点”向四周的颜色渐变。

为了创建一个径向渐变，你也必须至少定义两种颜色节点。颜色节点即你想要呈现平稳过渡的颜色。同时，你也可以指定渐变的中心、形状（圆形或椭圆形）、大小。默认情况下，渐变的中心是 center（表示在中心点），渐变的形状是 ellipse（表示椭圆形），渐变的大小是 farthest-corner（表示到最远的角落）。

语法：

```css
background-image: radial-gradient(
  shape size at position,
  start-color,
  ...,
  last-color
);
```

| 属性     | 描述                                                      |
| -------- | --------------------------------------------------------- |
| position | 渐变起点的位置，可以为百分比，默认是图形的正中心。        |
| shape    | 渐变的形状，ellipse 表示椭圆形（默认），circle 表示圆形。 |
| size     | 渐变的大小，即渐变到哪里停止，它有四个值。                |

position:

- left 0% center 50% right 100%
- 有些版本不支持`at <position>`写法
- 其中x轴的百分比相对于渐变框的宽度，而y轴的百分比相对于渐变框的高度。渐变框的宽高由`background-size`决定。
- 当只有一个值时，默认第二个值为center

size 的四个属性值：

| 属性            | 描述   |
| --------------- | ------ |
| closest-side    | 最近边 |
| farthest-side   | 最远边 |
| closest-corner  | 最近角 |
| farthest-corner | 最远角 |



> 以此为最近角，最近边；最远角，最远

<img src="/assets/web/202201202111495.jpeg" style="zoom:50%;" />

<img src="/assets/web/202201202112702.jpeg" style="zoom:50%;" />



<img src="/assets/web/202201202112328.jpeg" style="zoom:50%;" />



<img src="/assets/web/202201202112960.jpeg" style="zoom: 50%;" />

默认情况下，颜色均匀分布，示例代码如下：

```css
background-image: radial-gradient(red, yellow, green);
```

显示效果：

![图片描述](https://doc.shiyanlou.com/courses/uid1454664-20201111-1605055255869)

#### **颜色不均匀分布**

```css
background-image: radial-gradient(red 5%, yellow 15%, green 60%);
```

#### **圆形效果**

```css
background-image: radial-gradient(circle, red, yellow, green);
```

显示效果：

![图片描述](/assets/web/202201201318158.png)

![图片描述](https://doc.shiyanlou.com/courses/uid1454664-20201111-1605055815220)

#### **不同 size 效果**

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <style>
      div {
        width: 300px;
        height: 200px;
        border: 1px solid;
        background-image: radial-gradient(
          closest-side at 60% 55%,
          red,
          yellow,
          black
        ); /*最近边*/
        background-image: radial-gradient(
          farthest-side at 60% 55%,
          red,
          yellow,
          black
        ); /*最远边*/
        background-image: radial-gradient(
          closest-corner at 60% 55%,
          red,
          yellow,
          black
        ); /*最近角*/
        background-image: radial-gradient(
          farthest-corner at 60% 55%,
          red,
          yellow,
          black
        ); /*最远角*/
      }
    </style>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

显示效果：

![图片描述](/assets/web/202201201318077.png)

![图片描述](/assets/web/202201202116139.png)

![图片描述](https://doc.shiyanlou.com/courses/uid1454664-20201111-1605056218167)



![图片描述](https://doc.shiyanlou.com/courses/uid1454664-20201111-1605056244545)

### 文字渐变

CSS3 也可以对文字实现渐变效果。渲染的方式有很多种，这里采用学过的 background-image 、background-clip 属性和 text-fill-color 配合进行文字渐变效果的控制。示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <style>
      div {
        width: 300px;
        height: 200px;
        border: 1px solid;
        text-align: center;
        font-size: 40px;
        font-weight: bolder;
        background-image: -webkit-linear-gradient(bottom, red, yellow);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    </style>
  </head>
  <body>
    <div>xxxx</div>
  </body>
</html>
```



![image-20220120212522152](/assets/web/202201202125217.png)

## CSS3转换

2009 年的 W3C 组织正式发布了 3D 变形动画标准草案和 2D 变形动画标准草案，两个草案的核心内容基本相似，但是针对的主题不同。一个是 3D 动画一个是 2D 动画。

CSS3 的 2D transform 获得了各主流浏览器的支持，但是 CSS 3D transform 只有少数浏览器支持。

transform 实现了一些可以用于 SVG 实现的变形功能。可以作用于内联元素和块级元素，该属性可以实现旋转、缩放、移动等功能。使用 transform 属性还可以控制文字的变形，这种纯粹的使用 CSS 进行文本控制的方式相比于使用图像实现具有更好的可操作性。也是文字变形的首选解决方案。

转换（transform）是 CSS3 中具有颠覆性的特征之一。可以实现元素的位移、旋转、缩放等效果。

转换（transform）你可以简单理解为变形。

- 移动：translate
- 旋转：rotate
- 缩放：scale

### 二维坐标系

2D 转换是改变标签在二维平面上的位置和形状的一种技术，先来学习二维坐标系。

<img src="/assets/web/202204071136889.png" style="zoom: 50%;" />



transform 属性的基本语法如下：

```css
transform: none|<transform-function>[<transform-functioin>] *;
```

`<transform-function>` 为设置的变形函数，常用的变形函数如下：

- translate()：移动元素对象，更改 X 或 Y 轴的坐标。
- rotate()：旋转元素对象，取值为一个度数。
- scale()：缩放元素对象，可以使元素对象尺寸发生变化。
- skew()：倾斜元素对象，取值为一个度数。
- matrix()：定义矩阵变换，更改 X 或 Y 轴的坐标。

为了做到浏览器的全兼容，在使用转换操作的时候需要针对不同的浏览器添加对应的前缀。Webkit 引擎支持 `-webkit-transform:` 私有属性，Mozilla Gecko 引擎支持 `-moz-transform:` 私有属性，Presto 引擎支持 `-o-transform` 私有属性，浏览器早期的版本不支持该样式，需要使用 IE 滤镜来实现转换样式，但是最新的 IE10 以上版本的浏览器支持 `-ms-transform:` 私有属性。在设置样式时可以将各种支持都加入。

根据转换函数的语法可知，这几个转换函数和可以组合使用。例如下面的代码格式：

```css
transform: translate(80, 80) rotate(30deg) scale(2, 2);
```

下面详细介绍一下各个转换函数的用法。

### rotate() 旋转

2D 旋转指的是让元素在 2 维平面内顺时针旋转或者逆时针旋转。

<img src="/assets/web/202204071139960.png" style="zoom:50%;" />

语法：

```css
transform: rotate(度数)
```

重点：

- rotate 里面跟度数，单位是 deg，比如 rotate(45deg)
- 角度为正时，顺时针；负时，逆时针
- 默认旋转的中心点是元素的中心点

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>2D转换之旋转rotate</title>
    <style>
        img {
            width: 150px;
            /* 顺时针旋转45度 */
            /* transform: rotate(45deg); */
            border-radius: 50%;
            border: 5px solid pink;
            /* 过渡写到本身上，谁做动画给谁加 */
            transition: all 0.5s;
        }

        img:hover {
            transform: rotate(360deg);
        }
    </style>
</head>

<body>
<img src="media/pic.jpg" alt="">
</body>

</html>
```

![](/assets/web/202204071139496.gif)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>旋转三角</title>
    <style>
        div {
            position: relative;
            width: 249px;
            height: 35px;
            border: 1px solid #000;
        }

        /* 三角可以通过盒子来制作，不一定非得字体图标 */
        /* 让一个旋转45度的正方形（菱形）的两个边框显示出来 */
        div::after {
            content: "";
            position: absolute;
            top: 8px;
            right: 15px;
            width: 10px;
            height: 10px;
            border-right: 1px solid #000;
            border-bottom: 1px solid #000;
            transform: rotate(45deg);
            transition: all 0.2s;
        }

        /* 鼠标经过 div 里面的三角旋转 */
        div:hover::after {
            transform: rotate(225deg);
        }
    </style>
</head>

<body>
<div></div>
</body>

</html>
```

![](/assets/web/202204071139494.gif)

### translate() 移动

2D 移动是 2D 转换里面的一种功能，可以改变元素在页面中的位置，类似定位。

![](/assets/web/202204071137079.png)

语法：

```css
transform: translate(x, y); 
/* 或者分开写 */
transform: translateX(n);
transform: translateY(n);
```

重点：

- 定义 2D 转换中的移动，沿着 X 和 Y 轴移动元素
- translate 最大的优点：**不会影响到任何其他元素的位置**（优于定位的地方）
- translate 中的百分比单位是**相对于自身**元素的 translate: (50%, 50%);
- **对行内元素没有效果**

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>2D转换之移动translate</title>
    <style>
        /* 移动盒子的位置：定位、盒子的外边距、2D转换移动 */

        div {
            width: 200px;
            height: 200px;
            background-color: hotpink;
            /* x就是x轴上移动位置，y就是y轴上移动位置，中间用逗号分隔 */
            /* transform: translate(x, y); */
            /* transform: translate(100px, 100px); */
            /* 1. 只移动x坐标 */
            /* transform: translate(100px, 0); */
            /* transform: translateX(100px); */
            /* 2. 只移动y坐标 */
            /* transform: translate(0, 100px); */
            /* transform: translateY(100px); */
        }

        div:first-child {
            transform: translate(30px, 30px);
        }

        div:last-child {
            background-color: black;
        }
    </style>
</head>

<body>
    <div></div>
    <div></div>
</body>

</html>
```

<img src="/assets/web/202204071137197.png" style="zoom: 80%;" />

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>让一个盒子水平居中</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        div {
            position: relative;
            width: 500px;
            height: 500px;
            background-color: hotpink;
            /* 1. 我们 tranlate 里面的参数是可以用 % */
            /* 2. 如果里面的参数是 % 那么移动的距离是以盒子自身的宽度或者高度来对比的 */
            /* 这里的 50% 就是 250px 因为盒子的宽度是 500px */
            /* transform: translateX(50%); */
        }

        p {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 200px;
            height: 200px;
            background-color: black;
            /*
            在前面的定位中使用直接减去自身宽度与高度的一半，此种方式的缺点在于不能随盒子大小的变化而变化
            margin-top: -100px;
            margin-left: -100px;
            */
            transform: translate(-50%, -50%);
        }

        span {
            /* translate 对于行内元素是无效的 */
            transform: translate(300px, 300px);
        }
    </style>
</head>

<body>
<div>
    <p></p>
</div>
<span>123</span>
</body>

</html>
```

<img src="/assets/web/202204071137586.png" style="zoom:50%;" />



### 转换中心点 transform-origin

我们可以设置元素转换的中心点。

语法：

```css
transform-origin: x y;
```

重点：

- 注意后面的参数 x 和 y 用空格隔开
- **x y 默认转换的中心点是元素的中心点（50% 50%）**
- 还可以给 x y 设置 像素 或者 方位名词（top  bottom  left  right  center）

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>transform-origin</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
            margin: 100px auto;
            transition: all 1s;
            /* 1.可以跟方位名词 */
            /* transform-origin: left bottom; */
            /* 2. 默认的是 50% 50% 等价于 center center */
            /* 3. 可以是 px 像素 */
            transform-origin: 25px 25px;
        }

        div:hover {
            transform: rotate(360deg);
        }
    </style>
</head>

<body>
<div></div>
</body>

</html>
```

<img src="/assets/web/202204071141841.gif" style="zoom: 33%;" />

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>旋转中心点</title>
    <style>
        div {
            /* 溢出隐藏 */
            overflow: hidden;
            width: 200px;
            height: 200px;
            border: 1px solid pink;
            margin: 10px;
            float: left;
        }

        div::before {
            content: "黑马";
            display: block;
            width: 100%;
            height: 100%;
            background-color: hotpink;
            transform: rotate(180deg);
            transform-origin: left bottom;
            transition: all 0.4s;
        }

        /* 鼠标经过 div 里面的 before 复原 */
        div:hover::before {
            transform: rotate(0deg);
        }
    </style>
</head>

<body>
<div></div>
<div></div>
<div></div>
</body>

</html>
```

![](/assets/web/202204071141755.gif)

### scale() 缩放

缩放，顾名思义，可以放大和缩小。只要给元素添加上了这个属性就能控制它放大还是缩小。

语法：

```css
transform: scale(x, y);
```

注意：

- 注意其中的 x 和 y 用逗号分隔
- transform: scale(1, 1) ：宽和高都放大一倍，相当于没有放大
- transform: scale(2, 2) ：宽和高都放大了 2 倍
- transform: scale(2) ：只写一个参数，第二个参数默认等于第一个参数，相当于 scale(2, 2)
- transform: scale(0.5, 0.5) ：缩小
- scale 缩放最大的优势：可以设置缩放的基准点（默认以中心点缩放）；并且缩放不会影响其他盒子的位置（以上两个特点都是直接设置 width 和 height 都无法做到的）

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>2D转换之缩放</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            margin: 100px auto;
            /* 可以设置缩放的中心点 */
            /* transform-origin: left bottom; */
        }
        
        div:hover {
            /* 1. 里面写的数字不跟单位 就是倍数的意思， 1 就是 1 倍；2 就是 2 倍 */
            /* transform: scale(x, y); */
            /* transform: scale(2, 2); */
            /* 2. 修改了宽度为原来的 2 倍，高度不变 */
            /* transform: scale(2, 1); */
            /* 3. 等比例缩放 同时修改宽度和高度，我们有简单的写法以下是宽度修改了 2 倍，高度默认和第一个参数一样 */
            /* transform: scale(2); */
            /* 4. 我们可以进行缩小，小于 1就是缩小 */
            /* transform: scale(0.5, 0.5); */
            /* transform: scale(0.5); */
            /* 5. scale 的优势之处：不会影响其他的盒子，而且可以设置缩放的中心点 */
            /*
            直接设置宽高时无法做到以上优点的！
            width: 300px;
            height: 300px;
            */
            transform: scale(2);
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

<img src="/assets/web/202204071142887.gif" style="zoom:50%;" />

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>图片放大案例</title>
    <style>
        div {
            width: 225px;
            height: 137px;
            overflow: hidden;
            float: left;
            margin: 10px;
        }

        div img {
            transition: all .4s;
        }

        div img:hover {
            transform: scale(1.1);
        }
    </style>
</head>

<body>
<div>
    <a href="#"><img src="media/scale.jpg" alt=""></a>
</div>
<div>
    <a href="#"><img src="media/scale.jpg" alt=""></a>
</div>
<div>
    <a href="#"><img src="media/scale.jpg" alt=""></a>
</div>
</body>
 
</html>
```

![](/assets/web/202204071142899.gif)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        li {
            float: left;
            width: 30px;
            height: 30px;
            border: 1px solid hotpink;
            margin: 10px;
            text-align: center;
            line-height: 30px;
            list-style: none;
            border-radius: 50%;
            cursor: pointer;
            transition: all .4s;
        }

        li:hover {
            transform: scale(1.2);
        }
    </style>
</head>

<body>
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
</ul>
</body>

</html>
```

![](/assets/web/202204071142893.gif)

> 注意：一定要设置 margin 或者 padding 值，否则当元素放大时页面会显示不全。

### skew()倾斜

skew() 函数能够让元素倾斜显示，该函数包括两个参数值，分别用于定义 X 轴和 Y 轴的倾斜角度。注意，当第二个参数省略时表示参数值为 0，即不倾斜。语法格式如下：

```css
skew(<angle>[,<angle>])
```

其中 `<angle>` 参数表示角度值，skew() 的倾斜与 rotate() 函数的旋转不同，**rotate() 函数仅是围绕中心点进行顺时针或者逆时针的旋转，元素本身没有变化，而 skew() 函数会改变元素的形状。**

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      div {
        margin: 20px;
        width: 100px;
        height: 75px;
        background-color: yellow;
        border: 1px solid black;
        float: left;
      }
      #div1 {
        transform: skew(30deg, 20deg);
        -ms-transform: skew(30deg, 20deg); /* IE 9 */
        -webkit-transform: skew(30deg, 20deg); /* Safari and Chrome */
      }
    </style>
  </head>
  <body>
    <div>Hello World!</div>
    <div id="div1">Hello World!</div>
  </body>
</html>
```

显示效果： ![图片描述](/assets/web/202201211117264.png)

### matrix() 变形

matrix() 是矩阵函数，调用该函数可以非常灵活的实现各种变形效果。matrix() 函数包括 6 个参数值，可以用 a-f 来表示。这六个参数值形成了一个 3×3 的矩阵，通过对该矩阵值的重新定义，实现元素的变形效果。

![image-20200813110619233](/assets/web/202201211119151.png)

该函数的矩阵方程可以参考官方文档，其语法格式如下：

```css
matrix(<number>,<number>,<number>,<number>,<number>,<number>)
```

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      div {
        margin: 20px;
        width: 100px;
        height: 75px;
        background-color: yellow;
        border: 1px solid black;
        float: left;
      }
      #div1 {
        transform: matrix(1, 2, -1, 1, 80, 80);
        -ms-transform: matrix(1, 2, -1, 1, 80, 80); /* IE 9 */
        -webkit-transform: matrix(1, 2, -1, 1, 80, 80); /* Safari and Chrome */
      }
    </style>
  </head>
  <body>
    <div>Hello World!</div>
    <div id="div1">Hello World!</div>
  </body>
</html>
```

显示效果：

![图片描述](/assets/web/202201211119320.png)

#### 原理：

> matrix() 方法需要六个参数，包含数学函数，允许您：旋转、缩放、移动以及倾斜元素。

根据我们上面说的用矩阵与向量的乘法来施加运动，我们就可以来看一下它到底是怎么运动起来的

![img](/assets/web/202201211407883.jpeg)

这么一来我们可以得到一个式子就是：

`x'=ax+cy+e`

`y'=bx+dy+f`

`x'`和`y'`就是我们变换后的水平位置坐标和垂直位置坐标，

##### 平移

现在我们想要把元素往x轴的正方向平移10，在y轴方向上不动,反映到方程式里，我们要怎么来实现呢

元素往x轴的正方形平移10，在y轴方向上不动，反映到方程式里：

`x'=ax+cy+e ---（x'=ax+cy+e+10)`

`y'=bx+dy+f （不变）`

元素往y轴的正方向平移10，在x轴方向上不动，反映到方程式里：

`x'=ax+cy+e （不变）`

`y'=bx+dy+f ---（y'=bx+dy+f+10）`

元素同时往x轴正向和y轴正向移动10个单位 ：  

我们用css矩阵来写：transform： matrix（1,0,0,1,10,10）--其他数值都不动，e和f分别加10

> 结论：平移只有跟e和f有关系，跟其他a,b,c,d没有关系，它们该怎么样还是怎么样，e对应x轴的平移，f对应y轴的平移，往正方向平移多少单位就加上多少单位，反之则减去多少个单位。



##### 缩放

平移就是x或者y加减一个常数来得到的，理解了平移之后缩放就很简单了，可不就是x和y的倍数发生了变化么，反映到式子上来那就是系数的变化，那同样道理我们把上面的式子拿过来

x放大2倍 y不变

`x'=ax+cy+e---（x'=2ax+cy+e)` 就是x的系数增大2倍

`y'=bx+dy+f (不变)`

y放大2倍 x不变

`x'=ax+cy+e (不变)`

y'=bx+dy+f---(y'=bx+2dy+f)  

就是y的系数增大2倍x和y都放大2倍，就是x和y的系数都增大2倍写成矩阵就是：

transform：matrix（2,0,0,2,0,0)

> 结论：缩放只有跟a和b有关系，跟其他数值都无关，a对应x轴缩放，b对应y轴缩放，缩放多少倍就乘以多少

##### 旋转

相比于平移和缩放，旋转相对来说要复杂点了，当然搞清楚了就没什么难的了

`transform：matrix（cosθ，-sinθ,sinθ,cosθ,0,0);`




现在我们要让这个元素往顺时针方向旋转45°（sin45°=0.707，cos45°=0.707），那么我们给div加样式如下：

`transform: matrix(0.707,0.707,-0.707,0.707,0,0);`




这个div是不是就按我们预期的一样往顺时针方向转了45°了；

接下来我们把这个旋转放到数学里来看下
那同样的我们把它写成数学里矩阵的形式：

![img](/assets/web/202201211448737.jpeg)

同样的根据矩阵的计算公式，我们可以得到公式：

`x'=xcosθ-ysinθ; y'=xsinθ+ycosθ`

现在我们先把公式放在这里，我们来看一下下图的这个正方形，从图中我们可以知道a,b,c,d的坐标分别为：

![img](/assets/web/202201211448520.png)

A(0,1) B(1,1) C(1,0) D(0,0)


当我们让它旋转90°之后，那此时的cos45°就是0 sin45°都为1，分别把A,B,C,D里的x,y代入上面的公式之后我们可以得到：

现在这个正方形就变成了下图的样子，



结论：我们要记住初始写法是这样的

> transform：matrix（cosθ，-sinθ,sinθ,cosθ,0,0);然后需要旋转多少度就计算出这个度数的cosθ，sinθ就可以达到我们想要的效果啦

### 2D 转换综合写法

注意：

1. 同时使用多个转换，其格式为：`transform: translate() rotate() scale()` ...等
2. 其顺序会影转换的效果。（先旋转会改变坐标轴方向）
3. 当我们同时有位移和其他属性的时候，记得要将**位移放到最前**

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            transition: all 1s;
        }

        div:hover {
            /* transform: rotate(180deg) translate(150px, 50px); */
            /* 我们同时有位移和其他属性，我们需要把位移放到最前面 */
            transform: translate(150px, 50px) rotate(180deg) scale(1.2);
        }
    </style>
</head>

<body>
<div></div>
</body>

</html>
```

<img src="/assets/web/202204071145438.gif" style="zoom:50%;" />

### 2D 转换总结

- 转换 transform 我们简单理解就是变形，有 2D 和 3D 之分
- 我们暂且学了三个，分别是：位移、旋转 和 缩放
- 2D 移动 translate(x, y) 最大的优势是不影响其他盒子，里面参数用 %，是相对于自身宽度和高度来计算的
- 可以分开写比如 translateX(x)  和 translateY(y)
- 2D 旋转 rotate(度数) 可以实现旋转元素，度数的单位是 deg
- 2D 缩放 sacle(x, y) 里面参数是数字，不跟单位，可以是小数。最大的优势在于不影响其他盒子
- 设置转换中心点 transform-origin : x y; 参数可以百分比、像素或者是方位名词
- 当我们进行综合写法，同时有位移和其他属性的时候，记得要将位移放到最前

## CSS3 3D 转换

我们生活的环境是 3D 的，照片就是 3D 物体在 2D 平面呈现的例子。

**有什么特点**

- 近大远小
- 物体后面遮挡不可见

当我们在网页上构建 3D 效果的时候参考这些特点就能产出 3D 效果。

### 三维坐标系

三维坐标系其实就是指立体空间，立体空间是由3个轴共同组成的。

<img src="/assets/web/202204071438486.png" style="zoom: 33%;" />

- x 轴：水平向右（注意：x 右边是正值，左边是负值）
- y 轴：垂直向下（注意：**y 下面是正值，上面是负值**）
- z 轴：垂直屏幕（注意：往外面是正值，往里面是负值）

**3D 转换我们主要学习工作中最常用的 3D 位移 和 3D 旋转。**

**主要知识点**

- 3D 位移：translate3d(x, y, z)
- 3D 旋转：rotate3d(x, y, z)
- 透视：perspective
- 3D 呈现：transfrom-style

### 3D 转换 transform 属性

transform 属性应用于元素的 2D 或 3D 转换。这个属性允许你将元素旋转，缩放，移动，倾斜等。语法如下：

```css
transform: none|transform-functions;
```

| 值                                                           | 描述                                    |
| ------------------------------------------------------------ | --------------------------------------- |
| none                                                         | 定义不进行转换。                        |
| matrix(*n*,*n*,*n*,*n*,*n*,*n*)                              | 定义 2D 转换，使用六个值的矩阵。        |
| matrix3d(*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*) | 定义 3D 转换，使用 16 个值的 4x4 矩阵。 |
| translate(*x*,*y*)                                           | 定义 2D 转换。                          |
| translate3d(*x*,*y*,*z*)                                     | 定义 3D 转换。                          |
| translateX(*x*)                                              | 定义转换，只是用 X 轴的值。             |
| translateY(*y*)                                              | 定义转换，只是用 Y 轴的值。             |
| translateZ(*z*)                                              | 定义 3D 转换，只是用 Z 轴的值。         |
| scale(*x*[,*y*]?)                                            | 定义 2D 缩放转换。                      |
| scale3d(*x*,*y*,*z*)                                         | 定义 3D 缩放转换。                      |
| scaleX(*x*)                                                  | 通过设置 X 轴的值来定义缩放转换。       |
| scaleY(*y*)                                                  | 通过设置 Y 轴的值来定义缩放转换。       |
| scaleZ(*z*)                                                  | 通过设置 Z 轴的值来定义 3D 缩放转换。   |
| rotate(*angle*)                                              | 定义 2D 旋转，在参数中规定角度。        |
| rotate3d(*x*,*y*,*z*,*angle*)                                | 定义 3D 旋转。                          |
| rotateX(*angle*)                                             | 定义沿着 X 轴的 3D 旋转。               |
| rotateY(*angle*)                                             | 定义沿着 Y 轴的 3D 旋转。               |
| rotateZ(*angle*)                                             | 定义沿着 Z 轴的 3D 旋转。               |
| skew(*x-angle*,*y-angle*)                                    | 定义沿着 X 和 Y 轴的 2D 倾斜转换。      |
| skewX(*angle*)                                               | 定义沿着 X 轴的 2D 倾斜转换。           |
| skewY(*angle*)                                               | 定义沿着 Y 轴的 2D 倾斜转换。           |
| perspective(*n*)                                             | 为 3D 转换元素定义透视视图。            |

### 3D移动 translate3d

3D 移动在 2D 移动的基础上多加了一个可以移动的方向，就是 z 轴方向。

- transform:translateX(100px)：仅仅是在 X 轴上移动
- transform:translateY(100px)：仅仅是在 Y 轴上移动
- transform:translateZ(100px)：仅仅是在 Z 轴上移动（注意：translateZ 一般用 px 单位）
- transform:translate3d(x, y, z)：其中 x、y、z 分别指要移动的轴的方向的距离

因为 z 轴是垂直屏幕，**由里指向外面**（发射到我们的眼睛），所以默认是看不到元素在 z 轴的方向上移动（要借助透视）。



### perspective 属性

<img src="/assets/web/202204071451608.png" style="zoom: 25%;" />

<img src="/assets/web/202204071451021.png" style="zoom:25%;" />

在 2D 平面产生近大远小视觉立体，但是效果只是二维的。

- 如果想要在网页产生 3D 效果需要透视（理解成 3D 物体投影在 2D 平面内）
- 模拟人类的视觉位置，可认为安排一只眼睛去看
- 透视我们也称为视距：视距就是人的眼睛到屏幕的距离
- 距离视觉点越近的，在电脑平面成像越大，越远成像越小
- 透视的单位是像素

**透视写在被观察元素的父盒子上面。**

d：就是视距，视距就是一个距离人的眼睛到屏幕的距离。

z：就是 z 轴，物体距离屏幕的距离，z 轴越大（正值）我们看到的物体就越大。



```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>3D移动translate3d</title>
    <style>
        body {
            /* 透视写到被观察元素的父盒子上面 */
            perspective: 200px;
        }

        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            /* transform: translateX(100px) translateY(100px) translateZ(100px); */
            /* 1. translateZ 沿着 Z 轴移动 */
            /* 2. translateZ 后面的单位我们一般跟 px */
            /* 3. translateZ(100px) 向外移动 100px（向我们的眼睛来移动的） */
            /* 4. 3D 移动有简写的方法 */
            /* transform: translate3d(x, y, z); */
            /* transform: translate3d(100px, 100px, 100px); */
            /* 5. xyz 是不能省略的，如果没有就写 0 */
            transform: translate3d(400px, 100px, 100px);
        }
    </style>
</head>

<body>
<div></div>
</body>

</html>
```

![](/assets/web/202204071451018.png)这个属性允许你改变 3D 元素是怎样查看透视图。定义时的 perspective 属性，它是一个元素的子元素的透视图，而不是元素本身。

 **`perspective`**指定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果。 **z>0 的三维元素比正常大，而 z<0 时则比正常小，大小程度由该属性的值决定。**

语法如下：

```css
perspective: number|none;
```

| 值     | 描述                             |
| ------ | -------------------------------- |
| number | 元素距离视图的距离，以像素计算。 |
| none   | 默认值。与 0 相同。不设置透视。  |

> 注意：perspective 属性只影响 3D 转换元素。

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      #div1 {
        position: relative;
        height: 150px;
        width: 150px;
        margin: 50px;
        padding: 10px;
        border: 1px solid black;
        perspective: 150;
        -webkit-perspective: 150; /* Safari and Chrome */
      }

      #div2 {
        padding: 50px;
        position: absolute;
        border: 1px solid black;
        background-color: yellow;
        transform: rotateX(45deg);
        -webkit-transform: rotateX(45deg); /* Safari and Chrome */
      }
    </style>
  </head>
  <body>
    <div id="div1">
      <div id="div2">HELLO</div>
    </div>
  </body>
</html>
```

显示效果：

![图片描述](/assets/web/202201211625584.png)

看完了这里，相信你还不知道理解。

继续说把，

| `perspective: 250px;`                                        | `perspective: 350px;`                                        |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220121184948848](/assets/web/202201211849936.png) | ![image-20220121184957840](/assets/web/202201211850369.png) |
| `perspective: 500px;`                                        | `perspective: 650px;`                                        |
| ![](/assets/web/202201211850382.png) | ![image-20220121185034876](/assets/web/202201211850936.png) |

MDN上说立方体的收缩由 [`perspective`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective) 属性定义。它的值越小，视角越深。这个深怎么理解呢？我觉得应该是看的深度，从250到650，你会发现，我们看的从深到浅，最后的一层越来越明显。

### perspective-origin 属性

perspective-origin 属性定义 3D 元素所基于的 X 轴和 Y 轴。该属性允许您改变 3D 元素的底部位置。定义时的 perspective -Origin 属性，它是一个元素的子元素的透视图，而不是元素本身。

MDN上解释说是指定了观察者的位置，用作 perspective 属性的消失点。

语法如下：

```css
perspective-origin: x-axis y-axis;
```

| 值     | 描述                                     |
| ------ | ---------------------------------------- |
| x-axis | 定义该视图在 x 轴上的位置。默认值：50%。 |
| y-axis | 定义该视图在 y 轴上的位置。默认值：50%。 |

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      #div1 {
        position: relative;
        height: 150px;
        width: 150px;
        margin: 50px;
        padding: 10px;
        border: 1px solid black;
        perspective: 150;
        perspective-origin: 10% 10%;
        -webkit-perspective: 150; /* Safari and Chrome */
        -webkit-perspective-origin: 10% 10%; /* Safari and Chrome */
      }

      #div2 {
        padding: 50px;
        position: absolute;
        border: 1px solid black;
        background-color: red;
        transform: rotateX(45deg);
        -webkit-transform: rotateX(45deg); /* Safari and Chrome */
      }
    </style>
  </head>
  <body>
    <div id="div1">
      <div id="div2">HELLO</div>
    </div>
  </body>
</html>
```

显示效果：

![图片描述](/assets/web/202201211859967.png)

- `left`, 关键字，0值的简记。
- `center`, 关键字，50%的简记。
- `right`, 关键字，100%的简记。

![image-20220121190148010](/assets/web/202201211901129.png)

如果用观察者的位置来解释，取bottom来说，现在就站在bottom这一平面看方块，自然只能看到如图所示的图片。

### translateZ

translform:translateZ(100px)：仅仅是在 Z 轴上移动。有了透视，就能看到 translateZ 引起的变化了。

- translateZ：近大远小
- translateZ：往外是正值
- translateZ：往里是负值

![](/assets/web/202204071513891.gif)

### 3D旋转 rotate3d

3D旋转指可以让元素在三维平面内沿着 x轴，y轴，z轴或者自定义轴进行旋转。

**语法**

- transform: rotateX(45deg)：沿着 x 轴正方向旋转 45 度
- transform: rotateY(45deg)：沿着 y 轴正方向旋转 45deg
- transform: rotateZ(45deg)：沿着 z 轴正方向旋转 45deg
- transform: rotate3d(x, y, z, deg)：沿着自定义轴旋转 deg 为角度（了解即可）

![](/assets/web/202204071514362.gif)

对于元素旋转的方向的判断，我们需要先学习一个左手准则。

**左手准则**

- 左手的手拇指指向 x 轴的正方向
- 其余手指的弯曲方向就是该元素沿着 x 轴旋转的方向

<img src="/assets/web/202204071516045.png" style="zoom:50%;" />

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>rotateX</title>
    <style>
        body {
            /* 利用透视产生近大远小效果 */
            perspective: 300px;
        }

        img {
            display: block;
            margin: 100px auto;
            transition: all 1s;
        }

        img:hover {
            transform: rotateX(45deg);
        }
    </style>
</head>

<body>
<img src="media/pig.jpg" alt="">
</body>

</html>
```

<img src="/assets/web/202204071502905.gif" style="zoom:50%;" />

---

- 左手的手拇指指向 y 轴的正方向
- 其余手指的弯曲方向就是该元素沿着 y 轴旋转的方向（正值）

<img src="/assets/web/202204071502809.png" style="zoom:33%;" />

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>rotateY</title>
    <style>
        body {
            perspective: 500px;
        }

        img {
            display: block;
            margin: 100px auto;
            transition: all 1s;
        }

        img:hover {
            transform: rotateY(45deg);
        }
    </style>
</head>

<body>
<img src="media/pig.jpg" alt="">
</body>

</html>
```

<img src="/assets/web/202204071502066.gif" style="zoom:50%;" />

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>rotateZ</title>
    <style>
        body {
            perspective: 500px;
        }

        img {
            display: block;
            margin: 100px auto;
            transition: all 1s;
        }

        img:hover {
            transform: rotateZ(180deg);
        }
    </style>
</head>

<body>
<img src="media/pig.jpg" alt="">
</body>

</html>
```

<img src="/assets/web/202204071502861.gif" style="zoom:50%;" />

transform: rotate3d(x, y, z, deg)：沿着自定义轴旋转 deg 为角度（了解即可）。

xyz 是表示旋转轴的矢量，表示你是否希望沿着该轴旋转，最后一个表示旋转的角度。

- transform: rotate3d(1, 0, 0, 45deg)：就是沿着 x 轴旋转 45deg
- transform: rotate3d(0, 1, 0, 45deg)：就是沿着 y 轴旋转 45deg
- transform: rotate3d(0, 0, 1, 45deg)：就是沿着 z 轴旋转 45deg
- transform: rotate3d(1, 1, 0, 45deg)：就是沿着对角线（矢量计算）旋转 45deg

<img src="/assets/web/202204071502372.png" style="zoom: 33%;" />

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>rotate3d</title>
    <style>
        body {
            perspective: 500px;
        }

        img {
            display: block;
            margin: 100px auto;
            transition: all 1s;
        }

        img:hover {
            /* transform: rotate3d(x,y,z,deg); */
            /* transform: rotate3d(1, 0, 0, 45deg); */
            /* transform: rotate3d(0, 1, 0, 45deg); */
            transform: rotate3d(1, 1, 0, 45deg);
        }
    </style>
</head>

<body>
<img src="media/pig.jpg" alt="">
</body>

</html>
```

<img src="/assets/web/202204071502404.gif" style="zoom:50%;" />

### transform-origin

**`transform-origin`** CSS属性让你更改一个元素变形的**原点**。

2D 转换元素可以改变元素的 X 和 Y 轴。3D 转换元素，还可以更改元素的 Z 轴。

转换起点是应用转换的点。例如，`rotate()`函数的转换原点是旋转中心。（这个属性的应用原理是先用这个属性的赋值转换该元素，进行变形，然后再用这个属性的值把元素转换回去）

默认的转换原点是 `center`

如果定义了两个或更多值并且没有值的关键字，或者唯一使用的关键字是`center`，则第一个值表示水平偏移量，第二个值表示垂直偏移量。

- 一个值：
  - 必须是`<length>`，`<percentage>`，或 left, center, right, top, bottom关键字中的一个。
- 两个值：
  - 其中一个必须是`<length>`，`<percentage>`，或left, center, right关键字中的一个。
  - 另一个必须是`<length>`，`<percentage>`，或top, center, bottom关键字中的一个。
- 三个值：
  - 前两个值和只有两个值时的用法相同。
  - 第三个值必须是`<length>`。它始终代表Z轴偏移量。

关键字是方便的简写方法，等同于以下[`<percentage>`值：

| keyword  | value  |
| :------- | :----- |
| `left`   | `0%`   |
| `center` | `50%`  |
| `right`  | `100%` |
| `top`    | `0%`   |
| `bottom` | `100%` |

### transform-style 属性

- 控制子元素是否开启三维立体环境
- transform-style: flat 子元素不开启 3d 立体空间（默认的）
- transform-style: preserve-3d; 子元素开启立体空间
- 代码写给父级，但是影响的是子盒子
- 这个属性很重要，后面必用

![](/assets/web/202204071516099.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>transform-style</title>
    <style>
        body {
            perspective: 500px;
        }

        .box {
            position: relative;
            width: 200px;
            height: 200px;
            margin: 100px auto;
            transition: all 2s;
            /* 让子元素保持3d立体空间环境 */
            transform-style: preserve-3d;
        }

        .box:hover {
            transform: rotateY(60deg);
        }

        .box div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: pink;
        }

        .box div:last-child {
            background-color: purple;
            transform: rotateX(60deg);
        }
    </style>
</head>

<body>
<div class="box">
    <div></div>
    <div></div>
</div>
</body>

</html>
```

<img src="/assets/web/202204071517233.gif" style="zoom:50%;" />

【案例：两面翻转的盒子】

<img src="/assets/web/202204071516343.gif" style="zoom:50%;" />

实现步骤：

1. 搭建 HTML 结构

```html
<div class="box">
	<div class="front">黑马程序员</div>
    <div class="back">pink老师等你</div>
</div>
```

- box 父盒子里面包含前后两个子盒子
- box 是翻转的盒子 front 是前面盒子 back 是后面盒子

2. CSS 样式

- box 指定大小，切记要添加 3d 呈现
- back 盒子要沿着 Y 轴翻转 180 度
- 最后鼠标经过 box 沿着 Y 旋转 180deg

代码：

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>两面翻转的盒子</title>
    <style>
        body {
            perspective: 400px;
        }

        .box {
            position: relative;
            width: 300px;
            height: 300px;
            margin: 100px auto;
            transition: all .4s;
            /* 让背面的紫色盒子保留立体空间 给父级添加的 */
            transform-style: preserve-3d;
        }

        .box:hover {
            transform: rotateY(180deg);
        }

        .front,
        .back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            font-size: 30px;
            color: #fff;
            text-align: center;
            line-height: 300px;
        }

        .front {
            background-color: pink;
            z-index: 1;
        }

        .back {
            background-color: purple;
            /* 像手机一样 背靠背 旋转 */
            transform: rotateY(180deg);
        }
    </style>
</head>

<body>
<div class="box">
    <div class="front">黑马程序员</div>
    <div class="back">pink老师这里等你</div>
</div>
</body>

</html>
```

---

【案例：3D 导航栏】

![](/assets/web/202204071517234.gif)

实现步骤：

1. 搭建 HTML 结构

```html
<ul>
    <li>
        <div class="box">
            <div class="front">黑马程序员</div>
            <div class="bottom">pink老师等你</div>
         </div>
    </li>
</ul>
```

- li 做导航栏
- .box 是翻转的盒子 front 是前面盒子 bottom 是底下盒子

2. CSS 样式

- li 设置大小，加透视和 3d 呈现
- front 需要前移 17.5 像素
- bottom 需要下移 17.5 像素并且要沿着 x 轴翻转 负 90 度
- 鼠标放到 box 让盒子旋转 90 度

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>3D导航栏案例</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        ul {
            margin: 100px;
        }

        ul li {
            float: left;
            margin: 0 5px;
            width: 120px;
            height: 35px;
            list-style: none;
            /* 一会我们需要给 box 旋转 也需要透视 干脆给 li 加 里面的子盒子都有透视效果 */
            perspective: 500px;
        }

        .box {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: all .4s;
        }

        .box:hover {
            transform: rotateX(90deg);
        }

        .front,
        .bottom {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }

        .front {
            background-color: pink;
            z-index: 1;
            transform: translateZ(17.5px);
        }

        .bottom {
            background-color: purple;
            /* 这个x轴一定是负值 */
            /* 我们如果有移动 或者其他样式，必须先写我们的移动 */
            transform: translateY(17.5px) rotateX(-90deg);
        }
    </style>
</head>

<body>
<ul>
    <li>
        <div class="box">
            <div class="front">黑马程序员</div>
            <div class="bottom">pink老师等你</div>
        </div>
    </li>
    <li>
        <div class="box">
            <div class="front">黑马程序员</div>
            <div class="bottom">pink老师等你</div>
        </div>
    </li>
    <li>
        <div class="box">
            <div class="front">黑马程序员</div>
            <div class="bottom">pink老师等你</div>
        </div>
    </li>
    <li>
        <div class="box">
            <div class="front">黑马程序员</div>
            <div class="bottom">pink老师等你</div>
        </div>
    </li>
    <li>
        <div class="box">
            <div class="front">黑马程序员</div>
            <div class="bottom">pink老师等你</div>
        </div>
    </li>
    <li>
        <div class="box">
            <div class="front">黑马程序员</div>
            <div class="bottom">pink老师等你</div>
        </div>
    </li>
</ul>
</body>

</html>
```

---

【综合案例：旋转木马】

![](/assets/web/202204071516504.gif)

1. 搭建 HTML 结构

```html
<section>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</section>
```

- 里面的 6 个 div 分别是 6 个狗狗图片
- 注意最终旋转是 section 标签旋转

2. CSS 样式

- 给 body 添加 透视效果 perspective: 1000px;
- 给 section 添加大小，一定不要忘记添加 3d 呈现效果控制里面的 6 个 div
  -  别忘记子绝父相，section 要加相对定位
- 里面 6 个 div 全部绝对定位叠到一起，然后移动不同角度旋转和距离
  - 注意：旋转角度用 rotateY 距离肯定用 translateZ 来控制
- 给 section 添加动画 animation，让它可以自动旋转即可

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>综合案例：旋转木马</title>
    <style>
        body {
            perspective: 1000px;
        }

        section {
            position: relative;
            width: 300px;
            height: 200px;
            margin: 150px auto;
            transform-style: preserve-3d;
            /* 添加动画效果 */
            animation: rotate 10s linear infinite;
            background: url(media/pig.jpg) no-repeat;
        }

        section:hover {
            /* 鼠标放入 section 停止动画 */
            animation-play-state: paused;
        }

        @keyframes rotate {
            0% {
                transform: rotateY(0);
            }
            100% {
                transform: rotateY(360deg);
            }
        }

        section div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url(media/dog.jpg) no-repeat;
        }

        section div:nth-child(1) {
            transform: rotateY(0) translateZ(300px);
        }

        section div:nth-child(2) {
            /* 先旋转好了再 移动距离 */
            transform: rotateY(60deg) translateZ(300px);
        }

        section div:nth-child(3) {
            /* 先旋转好了再 移动距离 */
            transform: rotateY(120deg) translateZ(300px);
        }

        section div:nth-child(4) {
            /* 先旋转好了再 移动距离 */
            transform: rotateY(180deg) translateZ(300px);
        }

        section div:nth-child(5) {
            /* 先旋转好了再 移动距离 */
            transform: rotateY(240deg) translateZ(300px);
        }

        section div:nth-child(6) {
            /* 先旋转好了再 移动距离 */
            transform: rotateY(300deg) translateZ(300px);
        }
    </style>
</head>

<body>
<section>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</section>
</body>

</html>
```

## CSS3 过渡

### 过渡

过渡（transition）是 CSS3 中具有颠覆性的特征之一，我们可以在不使用 Flash 动画或 JavaScript 的情况下，当元素从一种样式变换为另一种样式时为元素添加效果。

过渡动画：是从一个状态**渐渐**的过渡到另外一个状态。

可以让我们页面更好看，更动感十足，虽然低版本浏览器不支持（IE9 以下版本） 但是不会影响页面布局。

我们现在经常和 `:hover` 一起搭配使用。

语法：

```css
transition: 要过渡的属性 花费时间 运动曲线 何时开始;
```

1. 属性：想要变化的 css 属性，宽度高度、背景颜色、内外边距都可以 。如果想要所有的属性都变化过渡，写一个 `all` 就可以
2. 花费时间：单位是秒（必须写单位）比如 `0.5s`
3. 运动曲线：默认是 `ease`（可以省略）
4. 何时开始：单位是秒（必须写单位）可以设置延迟触发时间默认是 `0s`（可以省略）

<img src="/assets/web/202204071120609.png" style="zoom: 25%;" />

记住过渡的使用口诀：**谁做过渡给谁加！**

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3过渡效果</title>
    <style>
        div {
            width: 200px;
            height: 100px;
            background-color: black;
            /* transition: 变化的属性 花费时间 运动曲线 何时开始; */
            /* transition: width .5s ease 0s, height .5s ease 1s; */
            /* 如果想要写多个属性，利用逗号进行分割 */
            /* transition: width .5s, height .5s; */
            /* 如果想要多个属性都变化，属性写 all 就可以了 */
            /* transition: height .5s ease 1s; */
            /* 谁做过渡，给谁加 */
            transition: all 0.5s;
        }

        div:hover {
            width: 400px;
            height: 200px;
            background-color: gray;
        }
    </style>
</head>
<body>
<div></div>
</body>
</html>
```

![](/assets/web/202204071120862.gif)

### 进度条案例

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3过渡练习-进度条</title>
    <style>
        .bar {
            width: 150px;
            height: 15px;
            border: 1px solid red;
            border-radius: 7px;
            padding: 1px;
        }

        .bar_in {
            width: 50%;
            height: 100%;
            border-radius: 7px;
            background-color: red;
            /* 谁做过渡给谁加 */
            transition: all .7s;
        }

        .bar:hover .bar_in {
            width: 100%;
        }
    </style>
</head>
<body>
<div class="bar">
    <div class="bar_in"></div>
</div>
</body>
</html>
```

![](/assets/web/202204071122837.gif)

CSS Transformation 呈现的是一种变形结果，而 CSS Transition 呈现的是一种过渡，是一种动画的转换过程。例如：渐显、渐若等。CSS Transformation 和 CSS Transition 是两种完全不同的动画模型，因此 W3C 为动画过渡定义了单独的样式语句。

CSS3 的 transition 属性是一个复合属性，可以同时定义如下属性类型：

| 子属性                     | 描述                                         |
| -------------------------- | -------------------------------------------- |
| transition                 | 简写属性，用于在一个属性中设置四个过渡属性。 |
| transition-property        | 规定应用过渡的 CSS 属性的名称。              |
| transition-duration        | 定义过渡效果花费的时间。默认是 0。           |
| transition-timing-function | 规定过渡效果的时间曲线。默认是 "ease"。      |
| transition-delay           | 规定过渡效果何时开始。默认是 0。             |

下面详细介绍一下各子属性的具体用法。

### 过渡属性

transition 效果产生时将会启动指定的 CSS 属性的变化。语法结构如下：

```css
transition-property: none|all| property;
```

| 值       | 描述                                                  |
| -------- | ----------------------------------------------------- |
| none     | 没有属性会获得过渡效果。                              |
| all      | 所有属性都将获得过渡效果。                            |
| property | 定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔。 |

**transition-property 属性初始值为 all，适用于所有元素以及 `:before` 和 `:after` 伪元素。**

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      div {
        width: 100px;
        height: 100px;
        background: red;
        transition-property: width;
        transition-duration: 2s;
        -webkit-transition-property: width; /* Safari */
        -webkit-transition-duration: 2s; /* Safari */
      }
      div:hover {
        width: 300px;
      }
    </style>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

显示效果：

![图片描述](/assets/web/202201212132562.gif)

> 注意：始终指定 transition-duration 属性，否则持续时间为 0，transition 不会有任何效果。

### 过渡时间

transition-duration 属性用来定义转换动画的时间长度，即设置从旧属性换到新属性花费的时间，单位为秒。该属性的基本语法如下所示：

```css
transition-duration: time;
```

| 值   | 描述                                                         |
| ---- | ------------------------------------------------------------ |
| time | 规定完成过渡效果需要花费的时间（以秒或毫秒计）。 默认值是 0，意味着不会有效果。 |

transition-duration 属性初始值为 0，适用于所有元素以及 `:before` 和 `:after` 伪元素。在默认情况下动画过渡时间为 0 秒，所以当指定元素动画时，是看不到任何效果的，直接看到结果。所以正常开发过程中 transition-duration 属性必须设置大于 0 的值。

### 过渡延迟

ransition-delay 属性用来定义过渡动画的延迟时间。即定义何时将开始切换效果。该属性的基本语法如下：

```css
transition-delay: time;
```

| 值   | 描述                                   |
| ---- | -------------------------------------- |
| time | 指定秒或毫秒数之前要等待切换效果开始。 |

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      div {
        width: 100px;
        height: 100px;
        background: yellow;
        transition-property: width;
        transition-duration: 5s;
        transition-delay: 2s;

        /* Safari */
        -webkit-transition-property: width;
        -webkit-transition-duration: 5s;
        -webkit-transition-delay: 2s;
      }

      div:hover {
        width: 300px;
      }
    </style>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

显示效果：

![图片描述](/assets/web/202201212133251.gif)

当鼠标悬停 2 秒后开始动画，动画执行时间为 5 秒

**与过渡时间不重复，在过渡时间前**

### 过渡效果

transition-timing-function 属性用来定义过渡动画的效果。该效果主要体现切换效果的速度上。该属性的语法如下：

```css
transition-timing-function: 过渡方式;
```

| 值                    | 描述                                                         |
| --------------------- | ------------------------------------------------------------ |
| linear                | 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。 |
| ease                  | 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。 |
| ease-in               | 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。  |
| ease-out              | 规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。  |
| ease-in-out           | 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。 |
| cubic-bezier(n,n,n,n) | 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。 |

其中 ease 值为默认值。

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      div {
        width: 100px;
        height: 100px;
        background: blue;
        transition: width 2s;
        transition-timing-function: linear;
        /* Safari */
        -webkit-transition: width 2s;
        -webkit-transition-timing-function: linear;
      }

      div:hover {
        width: 300px;
      }
    </style>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

显示效果：

![图片描述](/assets/web/202201212135126.gif)

## CSS3 动画

动画（animation）是 CSS3 中具有颠覆性的特征之一，可通过**设置多个节点来精确控制一个或一组动画**，常用来实现复杂的动画效果。

**相比较过渡，动画可以实现更多变化，更多控制，连续自动播放等效果。**

在 CSS3 中，除了可以使用 Transitions 功能实现动画效果以外，还可以使用 Animations 功能实现更为复杂的动画效果，这些动画可以取代许多网页动画图像、Flash 动画和 JavaScript 实现的效果。到目前为止基本主流浏览器都已经支持 CSS3 动画。

### 动画的基本使用

制作动画分为两步：

1. 先定义动画
2. 再使用（调用）动画

用 keyframes 定义动画（类似定义类选择器）

```css
@keyframes 动画名称 {
   0% {
        width: 100px;
   }  
   100% {
        width: 200px;
   }
}
```

**动画序列**

- 0% 是动画的开始，100% 是动画的完成。这样的规则就是动画序列
- 在 @keyframes 中规定某项 CSS 样式，就能创建由当前样式逐渐改为新样式的动画效果
- 动画是使元素从一种样式逐渐变化为另一种样式的效果。您可以改变任意多的样式任意多的次数
- 请用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%

### 元素使用动画

```css
div {
	width: 200px;
	height: 200px;
	background-color: aqua;
	margin: 100px auto;
	/* 调用动画 */
	animation-name: 动画名称;
	/* 持续时间 */
	animation-duration: 持续时间;
}
```

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3动画的基本使用</title>
    <style>
        /* 我们想页面一打开，一个盒子就从左边走到右边 */
        /* 1. 定义动画 */
        @keyframes move {
            /* 开始状态 */
            0% {
                transform: translateX(0px);
            }
            /* 结束状态 */
            100% {
                transform: translateX(1000px);
            }
        }

        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            /* 2. 调用动画 */
            /* 动画名称 */
            animation-name: move;
            /* 持续时间 */
            animation-duration: 2s;
        }
    </style>
</head>

<body>
<div></div>
</body>

</html>
```

![](/assets/web/202204071149598.gif)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>动画序列</title>
    <style>
        /* from to 等价于 0% 和 100% */
        /*
        @keyframes move {
            from {
                transform: translate(0, 0);
            }
            to {
                transform: translate(1000px, 0);
            }
        }
        */

        /* 动画序列 */
        /* 1. 可以做多个状态的变化 keyframe 关键帧 */
        /* 2. 里面的百分比要是整数 */
        /* 3. 里面的百分比就是 总的时间（我们这个案例 10s）的划分 25% * 10 = 2.5s */

        @keyframes move {
            0% {
                transform: translate(0, 0);
            }
            25% {
                transform: translate(1000px, 0)
            }
            50% {
                transform: translate(1000px, 500px);
            }
            75% {
                transform: translate(0, 500px);
            }
            100% {
                transform: translate(0, 0);
            }
        }

        div {
            width: 100px;
            height: 100px;
            background-color: pink;
            animation-name: move;
            animation-duration: 10s;
        }
    </style>
</head>

<body>
<div>

</div>
</body>

</html>
```

![](/assets/web/202204071148029.gif)

### 动画常用属性


| **属性**                  | **描述**                                                     |
| ------------------------- | ------------------------------------------------------------ |
| @keyframes                | 规定动画                                                     |
| animation                 | 所有动画属性的简写属性，除了animation-play-state 属性        |
| animation-name            | 规定 @keyframes 动画的名称（必须的）                         |
| animation-duration        | 规定动画完成一个周期所花费的秒或毫秒，默认是 0（必须的）     |
| animation-timing-function | 规定动画的速度曲线，默认是 “ease”                            |
| animation-delay           | 规定动画何时开始，默认是 0                                   |
| animation-iteration-count | 规定动画被播放的次数，默认是 1，还有 infinite                |
| animation-direction       | 规定动画是否在下一周期逆向播放，默认是 "normal", alternate 逆播放 |
| animation-play-state      | 规定动画是否正在运行或暂停。默认是 "running", 还有 "paused"  |
| animation-fill-mode       | 规定动画结束后状态，保持 forwards 回到起始 backwards         |

### 动画简写属性

animation：动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 动画起始或者结束的状态。

```css
animation: myfirst 5s linear 2s infinite alternate;
```

- 简写属性里面不包含 animation-play-state
- 暂停动画：animation-play-state: puased; 经常和鼠标经过等其他配合使用
- 想要动画走回来，而不是直接跳回来：animation-direction: alternate
- 盒子动画结束后，停在结束位置：animation-fill-mode: forwards 

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>动画属性</title>
    <style>
        @keyframes move {
            0% {
                transform: translate(0, 0);
            }
            100% {
                transform: translate(1000px, 0);
            }
        }

        div {
            width: 100px;
            height: 100px;
            background-color: pink;
            /* 动画名称 */
            animation-name: move;
            /* 持续时间 */
            /* animation-duration: 2s; */
            /* 运动曲线 */
            /* animation-timing-function: ease; */
            /* 何时开始 */
            animation-delay: 1s;
            /* 重复次数 iteration 重复的 conut 次数 infinite 无限 */
            /* animation-iteration-count: infinite; */
            /* 是否反方向播放 默认的是 normal 如果想要反方向 就写 alternate */
            /* animation-direction: alternate; */
            /* 动画结束后的状态 默认的是 backwards 回到起始状态 我们可以让他停留在结束状态 forwards */
            /* animation-fill-mode: forwards; */
            /* animation: name duration timing-function delay iteration-count direction fill-mode; */
            /* animation: move 2s linear 0s 1 alternate forwards; */
            /* 前面 2 个属性 name duration 一定要写 */
            /* animation: move 2s linear alternate forwards; */
        }

        div:hover {
            /* 鼠标经过 div 让这个 div 停止动画，鼠标离开就继续动画 */
            animation-play-state: paused;
        }
    </style>
</head>

<body>
<div>

</div>
</body>

</html>
```

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>大数据热点图</title>
    <style>
        body {
            background-color: #333;
        }

        .map {
            position: relative;
            width: 747px;
            height: 616px;
            background: url(media/map.png) no-repeat;
            margin: 0 auto;
        }

        .city {
            position: absolute;
            top: 227px;
            right: 193px;
            color: #fff;
        }

        .tb {
            /* 此处只能使用 top right 因为这样才能层叠 city，
            否则如果使用 bottom 的话，还会基础 city 的 top，bottom 与 top 优先执行 top */
            top: 500px;
            right: 80px;
        }

        .dotted {
            width: 8px;
            height: 8px;
            background-color: #09f;
            border-radius: 50%;
        }

        .city div[class^="pulse"] {
            /* 保证我们小波纹在父盒子里面水平垂直居中 放大之后就会中心向四周发散 */
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 8px;
            height: 8px;
            box-shadow: 0 0 12px #009dfd;
            border-radius: 50%;
            animation: pulse 1.2s linear infinite;
        }

        .city div.pulse2 {
            animation-delay: 0.4s;
        }

        .city div.pulse3 {
            animation-delay: 0.8s;
        }

        @keyframes pulse {
            0% {
            }
            70% {
                /* transform: scale(5);  我们不要用scale 因为他会让 阴影变大*/
                width: 40px;
                height: 40px;
                opacity: 1;
            }
            100% {
                width: 70px;
                height: 70px;
                opacity: 0;
            }
        }
    </style>
</head>

<body>
<div class="map">
    <div class="city">
        <div class="dotted"></div>
        <div class="pulse1"></div>
        <div class="pulse2"></div>
        <div class="pulse3"></div>
    </div>
    <div class="city tb">
        <div class="dotted"></div>
        <div class="pulse1"></div>
        <div class="pulse2"></div>
        <div class="pulse3"></div>
    </div>
</div>
</body>

</html>
```

![](/assets/web/202204071148056.gif)

### 速度曲线细节

animation-timing-function：规定动画的速度曲线，默认是 "ease"。

| **值**      | **描述**                                     |
| ----------- | -------------------------------------------- |
| linear      | 动画从头到尾的速度是相同的（匀速）           |
| ease        | 默认。动画以低速开始，然后加快，在结束前变慢 |
| ease-in     | 动画以低速开始                               |
| ease-out    | 动画以低速结束                               |
| ease-in-out | 动画以低速开始和结束                         |
| steps()     | 指定了时间函数中的间隔数量（步长）           |

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>速度曲线步长</title>
    <style>
        div {
            overflow: hidden;
            font-size: 20px;
            width: 0;
            height: 30px;
            background-color: pink;
            /* 让我们的文字强制一行内显示 */
            white-space: nowrap;
            /* steps 就是分几步来完成我们的动画 有了 steps 就不要在写 ease 或者 linear 了 */
            animation: w 4s steps(10) forwards;
        }

        @keyframes w {
            0% {
                width: 0;
            }
            100% {
                width: 200px;
            }
        }
    </style>
</head>

<body>
<div>世纪佳缘我在这里等你</div>
</body>

</html>
```

![](/assets/web/202204071148041.gif)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>奔跑的熊大案例</title>
    <style>
        body {
            background-color: #ccc;
        }

        div {
            position: absolute;
            width: 200px;
            height: 100px;
            background: url(media/bear.png) no-repeat;
            /* 我们元素可以添加多个动画，用逗号分隔 */
            animation: bear .4s steps(8) infinite, move 3s forwards;
        }

        @keyframes bear {
            0% {
                background-position: 0 0;
            }
            100% {
                background-position: -1600px 0;
            }
        }

        @keyframes move {
            0% {
                left: 0;
            }
            100% {
                left: 50%;
                /* margin-left: -100px; */
                transform: translateX(-50%);
            }
        }
    </style>
</head>

<body>
<div></div>
</body>

</html>
```

![](/assets/web/202204071149599.png)

![](/assets/web/202204071149600.gif)

## CSS3 怪异盒模型

所有的 HTML 元素都可以看作盒子，在 CSS 中，"box model"这一术语是使用 HTML 元素来设计和布局时使用的。 CSS 盒模型本质上是一个盒子，盒子封装周围的 HTML 元素，它包括：外边距（margin）、边框（border）、内边距（padding）、实际内容（content）四个属性。

盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。CSS 中的盒子模型（Box model）分为两种：W3C 标准盒子模型和 IE 标准盒子模型。

大多数的浏览器都采用 W3C 标准，而 IE 采用的是 IE 标准。而怪异模式是指“部分浏览器在支持 W3C 标准的同时还保留了原先的解析模式”，怪异模式主要表现在 IE 内核的浏览器中。

**注意宽度不算margin**

### 标准盒模型

![image-20200817205235441](/assets/web/202201212156481.png)

由上图可以看到，在标准盒模型下，width 和 height 是内容区域即 content 的 width 和 height。

```txt
一个块的总宽度= width + padding(左右) + border(左右)
```

### 怪异盒模型

![image-20200817205407394](/assets/web/202201212157788.png)

由上图可见，IE 盒模型或怪异盒模型和标准盒子模型最大的区别就是：width 和 height 除了 content 区域外，还包含 padding 和 border。

如果盒子模型我们改为了 box-sizing: border-box， 那 padding 和 border 就不会撑大盒子了（前提 padding 和 border 不会超过 width 宽度）

```txt
一个块的总宽度= width （即width已经包含了padding和border值）
```

### 解决方案

**1、配置文档声明**

只要在文档首部加了 DOCTYPE 声明，**即标明该文件使用了标准盒模型**，这样无论什么浏览器都会按照标准盒子模型来进行页面渲染，否则，使用什么盒子将会由浏览器自己决定，这时 IE 浏览器中会显示“IE 盒子模型”，在 FireFox 浏览器中显示“标准 w3c 盒子模型”。

**2、样式控制解决**

当在文档首部加了 DOCTYPE 申明，又想要使用“怪异盒子模型”时，可以通过 CSS3 的 box-sizing 属性设置来实现两种盒子模型之间的切换。box-sizing 语法如下：

```css
box-sizing: content-box || border-box || inherit || initial;
```

当设置为 box-sizing:content-box 时，将采用标准盒子模型解析计算，也是默认盒子模型； 

**当设置为 box-sizing:border-box 时，将采用怪异盒子模型解析计算。**

### 多列属性

columns 是多列布局特性的基本属性，该属性可以同时定义列数和每列的宽度，columns 的基本语法如下：

```css
columns: column-width column-count;
```

columns 属性初始值根据元素个别属性而定，适用于不可替换的块元素、行内块元素和单元格，但是表格元素除外。

| 值           | 描述           |
| ------------ | -------------- |
| column-width | 一列的最小宽度 |
| column-count | 列数           |

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      .newspaper {
        columns: 100px 3;
        -webkit-columns: 100px 3; /* Safari and Chrome */
        -moz-columns: 100px 3; /* Firefox */
      }
    </style>
  </head>
  <body>
    <div class="newspaper">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
      nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
      wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
      lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
      iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
      illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
      odio dignissim qui blandit praesent luptatum zzril delenit augue duis
      dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis
      eleifend option congue nihil imperdiet doming id quod mazim placerat facer
      possim assum. Typi non habent claritatem insitam; est usus legentis in iis
      qui facit eorum claritatem. Investigationes demonstraverunt lectores
      legere me lius quod ii legunt saepius.
    </div>
  </body>
</html>
```

显示效果：

![图片描述](/assets/web/202201261844597.png)

相对于单独设置 column-width 或 column-count，columns 要更加灵活。

#### 定义列宽

column-width 属性可以定义单列显示的宽度，该属性可以和其他的多列布局属性配合使用，也可以单独使用。基本语法如下：

```css
column-width: auto|length;
```

| 值     | 描述                   |
| ------ | ---------------------- |
| auto   | 浏览器将决定列的宽度。 |
| length | 指定列宽的长度。       |

**这里需要注意的是，当页面宽度足够时会按照指定的列宽显示内容，但是当页面宽度变小时，会根据宽度进行列数的变化。**

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      .newspaper {
        column-width: 200px;
        -moz-column-width: 200px; /* Firefox */
        -webkit-column-width: 200px; /* Safari and Chrome */
      }
    </style>
  </head>
  <body>
    <div class="newspaper">
      CSS3 是 CSS（层叠样式表）技术的升级版本，于 1999 年开始制订，2001 年 5 月
      23 日 W3C 完成了 CSS3
      的工作草案，主要包括盒子模型、列表模块、超链接方式、语言模块、背景和边框、文字特效、多栏布局等模块。
      CSS 演进的一个主要变化就是 W3C 决定将 CSS3 分成一系列模块。浏览器厂商按
      CSS 节奏快速创新，因此通过采用模块方法，CSS3
      规范里的元素能以不同速度向前发展，因为不同的浏览器厂商只支持给定特性。但不同浏览器在不同时间支持不同特性，这也让跨浏览器开发变得复杂
    </div>
  </body>
</html>
```

显示效果：

![图片描述](/assets/web/202201261853308.png)

![图片描述](/assets/web/202201261853361.png)

> 注意：改变浏览器的大小，显示列数随之变化。

#### 定义列数

column-count 属性可以定义显示的列数，该属性的基本语法如下：

```css
column-count: number|auto;
```

column-count 属性的初始值为 auto，适用于不可替换的块元素，行内块元素和单元格，但是表格元素除外。取值说明如下：

| 值     | 说明                                         |
| ------ | -------------------------------------------- |
| number | 列的最佳数目使其中元素的内容无法流出。       |
| auto   | 列数将取决于其他属性，例如："column-width"。 |

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      .newspaper {
        -moz-column-count: 3; /* Firefox */
        -webkit-column-count: 3; /* Safari and Chrome */
        column-count: 3;
      }
    </style>
  </head>
  <body>
    <div class="newspaper">
      CSS3是CSS（层叠样式表）技术的升级版本，于1999年开始制订，2001年5月23日W3C完成了CSS3的工作草案，主要包括盒子模型、列表模块、超链接方式、语言模块、背景和边框、文字特效、多栏布局等模块。
      CSS演进的一个主要变化就是W3C决定将CSS3分成一系列模块。浏览器厂商按CSS节奏快速创新，因此通过采用模块方法，CSS3规范里的元素能以不同速度向前发展，因为不同的浏览器厂商只支持给定特性。但不同浏览器在不同时间支持不同特性，这也让跨浏览器开发变得复杂
    </div>
  </body>
</html>
```

显示效果：

![图片描述](/assets/web/202201261858072.png)

**通过示例可以看出，当定义了列数后不论列宽是多少，都会按照制定的列数进行分列。当浏览器变化宽度时也同样按指定列数进行分列。**

#### 定义列间距

column-gap 属性可以定义两栏之间的间距，属性语法如下：

```css
column-gap: length|normal;
```

| 值     | 描述                                         |
| ------ | -------------------------------------------- |
| length | 一个指定的长度，将设置列之间的差距。         |
| normal | 指定一个列之间的普通差距。 W3C 建议 1EM 值。 |

示例代码：

```html
// 省略其他代码
<style>
  .newspaper {
    -moz-column-count: 3; /* Firefox */
    -webkit-column-count: 3; /* Safari and Chrome */
    column-count: 3;

    -moz-column-gap: 40px; /* Firefox */
    -webkit-column-gap: 40px; /* Safari and Chrome */
    column-gap: 40px;
  }
</style>
// 省略其他代码
```

显示效果：

![图片描述](/assets/web/202201261902564.png)

对比上一个示例可以看出，列间距发生了变化。

#### 定义列边框样式

就是border的边框在多列的应用！

为列边框添加样式，能够有效的区分各个栏目列之间的关系，样式美观且阅读时也会比较清晰。属性语法如下：

```css
column-rule: column-rule-width column-rule-style column-rule-color;
```

| 值                | 描述                   |
| ----------------- | ---------------------- |
| column-rule-width | 设置列之间的宽度规则。 |
| column-rule-style | 设置列之间的样式规则。 |
| column-rule-color | 设置列之间的颜色规则。 |

示例代码：

```html
// 省略其他代码
<style>
  .newspaper {
    -moz-column-count: 3; /* Firefox */
    -webkit-column-count: 3; /* Safari and Chrome */
    column-count: 3;

    -moz-column-gap: 40px; /* Firefox */
    -webkit-column-gap: 40px; /* Safari and Chrome */
    column-gap: 40px;

    -moz-column-rule: 2px dashed gray; /* Firefox */
    -webkit-column-rule: 2px dashed gray; /* Safari and Chrome */
    column-rule: 2px dashed gray;
  }
</style>
// 省略其他代码
```

显示效果：

![图片描述](/assets/web/202201261903164.png)

#### 定义跨列显示

在报纸期刊等杂志中，经常会看到文章的标题会跨列居中显示。在 CSS3 多列中可以使用 column-span 属性实现跨列显示，也可以设置单列显示。语法如下：

```css
column-span: 1|all;
```

| 值   | 描述                   |
| ---- | ---------------------- |
| 1    | 元素应跨越一列。       |
| all  | 该元素应该跨越所有列。 |

column-span 属性初始值为 1，适用于静态的、非浮动的元素。

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      .newspaper {
        column-count: 3;
        -moz-column-count: 3; /* Firefox */
        -webkit-column-count: 3; /* Safari and Chrome */
      }
      h2 {
        column-span: all;
        -webkit-column-span: all; /* Safari and Chrome */
      }
    </style>
  </head>
  <body>
    <div class="newspaper">
      <h2>来自CSS3百度百科的关于CSS3的定义</h2>
      CSS3是CSS（层叠样式表）技术的升级版本，于1999年开始制订，2001年5月23日W3C完成了CSS3的工作草案，主要包括盒子模型、列表模块、超链接方式、语言模块、背景和边框、文字特效、多栏布局等模块。
      CSS演进的一个主要变化就是W3C决定将CSS3分成一系列模块。浏览器厂商按CSS节奏快速创新，因此通过采用模块方法，CSS3规范里的元素能以不同速度向前发展，因为不同的浏览器厂商只支持给定特性。但不同浏览器在不同时间支持不同特性，这也让跨浏览器开发变得复杂
    </div>
  </body>
</html>
```

显示效果：

![图片描述](/assets/web/202201261904110.png)

#### 定义列高度

column-fill 属性可以用来定义列高度是否统一。该属性的语法如下：

```css
column-fill: balance|auto;
```

| 值      | 描述                                                 |
| ------- | ---------------------------------------------------- |
| balance | 对列进行协调。浏览器应对列长度的差异进行最小化处理。 |
| auto    | 按顺序对列进行填充，列长度会各有不同。               |

column-fill 属性的初始值为 balance，适用于多列布局元素。

示例代码：

```html
// 省略其他代码
<style>
  .newspaper {
    column-count: 3;
    -moz-column-count: 3; /* Firefox */
    -webkit-column-count: 3; /* Safari and Chrome */

    column-fill: auto;
    -moz-column-fill: auto; /* Firefox */
    -webkit-column-fill: auto; /* Safari and Chrome */
  }
</style>
// 省略其他代码
```

显示效果：

![图片描述](/assets/web/202201261905455.png)

## CSS3 多媒体查询

### 多媒体查询使用

在 CSS2 中就引入了多媒体类型的概念，使用 `@media` 规则可以针对不同媒体类型定制不同的样式规则。例如：可以针对不同的媒体类型（包括显示器、便携设备、电视机等等）设置不同的样式规则。但是这些多媒体类型在很多设备上支持还不够友好。

CSS3 的多媒体查询继承了 CSS2 多媒体类型的所有思想：取代了查找设备的类型，CSS3 根据设置自适应显示。

媒体查询可用于检测很多事情，例如：

- viewport（视窗）的宽度与高度。
- 设备的宽度与高度。
- 朝向（智能手机横屏，竖屏）。
- 分辨率。

目前很多针对苹果手机，Android 手机，平板等设备都会使用到多媒体查询。

多媒体查询由多种媒体组成，可以包含一个或多个表达式，表达式根据条件是否成立返回 true 或 false。

```css
@media not|only mediatype and (expressions) {
    CSS 代码...;
}
```

如果指定的多媒体类型匹配设备类型则查询结果返回 true，文档会在匹配的设备上显示指定样式效果。

除非你使用了 not 或 only 操作符，否则所有的样式会适应在所有设备上显示效果。

- **not**：用来排除掉某些特定设备的，比如 @media not print（非打印设备）。
- **only**：用来定某种特别的媒体类型。对于支持 Media Queries 的移动设备来说，如果存在 only 关键字，移动设备的 Web 浏览器会忽略 only 关键字并直接根据后面的表达式应用样式文件。对于不支持 Media Queries 的设备但能够读取 Media Type 类型的 Web 浏览器，遇到 only 关键字时会忽略这个样式文件。`@media only screen and 。。。`此时支持Media Queries 的移动设备是电脑屏幕，只有他能够响应。
- **all**：所有设备，这个应该经常看到。

也可以在不同的媒体上使用不同的样式文件：

```html
<link
  rel="stylesheet"
  media="mediatype and|not|only (expressions)"
  href="print.css"
/>
```

**CSS3 多媒体类型**

| 值     | 描述                             |
| ------ | -------------------------------- |
| all    | 用于所有多媒体类型设备。         |
| print  | 用于打印机。                     |
| screen | 用于电脑屏幕，平板，智能手机等。 |
| speech | 用于屏幕阅读器。                 |

使用多媒体查询可以在指定的设备上使用对应的样式替代原有的样式。例如以下实例中在屏幕可视窗口尺寸小于 480 像素的设备上修改背景颜色：

```css
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <style>
            body {
                background-color: green;
            }

            @media screen and (max-width: 480px) {
                body {
                    background-color: lightgreen;
                }
            }
        </style>
    </head>

</html>
```

### 多媒体特征

创建媒体查询时，最常用的是设备的视口宽度（width）和屏幕宽度（device-width）。很少需要检测其他特性。但是为方便查阅，下面列出了所有可供媒体查询检测的特性：

- width：视口宽度。
- height：视口高度。
- device-width：渲染表面的宽度（对我们来说，就是设备屏幕的宽度）。
- device-height：渲染表面的高度（对我们来说，就是设备屏幕的高度）。
- orientation：检查设备处于横向还是纵向。
- aspect-ratio：基于视口宽度和高度的宽高比。一个 16∶9 比例的显示屏可以这样定义 aspect-ratio: 16/9。
- device-aspect-ratio：和 aspect-ratio 类似，基于设备渲染平面宽度和高度的宽高比。
- color：每种颜色的位数。例如 min-color: 16 会检测设备是否拥有 16 位颜色。
- color-index：设备的颜色索引表中的颜色数。值必须是非负整数。
- monochrome：检测单色帧缓冲区中每像素所使用的位数。值必须是非负整数，如：monochrome: 2。
- resolution：用来检测屏幕或打印机的分辨率，如 min-resolution: 300dpi。还可以接受每厘米像素点数的度量值，如 min-resolution: 118dpcm。
- scan：电视机的扫描方式，值可设为 progressive（逐行扫描）或 interlace（隔行扫描）。如 720p HD 电视（720p 的 p 即表明是逐行扫描）匹配 scan: progressive，而 1080i HD 电视（1080i 中的 i 表明是隔行扫描）匹配 scan: interlace。
- grid：用来检测输出设备是网格设备还是位图设备。

在上述所有特性中，除 scan 和 grid 之外，**都可使用 min 和 max 前缀来创建一个查询范围**。例如，分析如下所示的代码片段：

```css
@import url("phone.css") screen and (min-width: 200px) and (max-width: 360px);
```

这里对 width 应用了 min 和 max 来设定查询范围。这样 phone.css 文件只会引入视口宽度介于 200 像素至 360 像素的显示屏设备。

## CSS3其它特性

1. 图片变模糊
2. 计算盒子宽度 width:calc 函数

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>图片模糊处理filter</title>
    <style>
        img {
            /* blur 是一个函数 小括号里面数值越大，图片越模糊 注意数值要加 px 单位 */
            filter: blur(15px);
        }

        img:hover {
            filter: blur(0);
        }
    </style>
</head>
<body>
<img src="images/pink.jpg" alt="">
</body>
</html>
```

![](/assets/web/202204071117317.gif)

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3属性calc函数</title>
    <style>
        .father {
            width: 500px;
            height: 500px;
            background-color: black;
        }

        .son {
            /* width: 300px; */
            /* width: calc(500px - 100px); */
            width: calc(100% - 100px);
            height: 200px;
            background-color: salmon;
        }
    </style>
</head>
<body>
<!-- 需求：我们的子盒子宽度永远比父盒子小 100 像素 -->
<div class="father">
    <div class="son"></div>
</div>
</body>
</html>
```

<img src="/assets/web/202204071117250.png" style="zoom:50%;" />

### CSS3滤镜 filter

filter CSS 属性将模糊或颜色偏移等图形效果应用于元素。

```css
filter: 函数(); 例如：filter: blur(5px); blur 模糊处理，数值越大越模糊
```

![](/assets/web/202204071117619.png)

### CSS3 calc 函数

calc() 此 CSS 函数让你在声明 CSS 属性值时执行一些计算。

```css
width: calc(100% - 80px);
```

括号里面可以使用 `+` `-` `*` `/` 来进行计算。





## 狭义的 HTML5 CSS3

1. HTML5 结构本身

   ![](/assets/web/202204071117579.png)

2. CSS3 相关样式

   ![](/assets/web/202204071117940.png)

## 广义的 HTML5

1. 广义的 HTML5 是 HTML5 + CSS3 + JavaScript
2. 这个集合有时称为 H5
3. 虽然 HTML5 的一些特性仍然不被某些浏览器支持，但是它是一种发展趋势