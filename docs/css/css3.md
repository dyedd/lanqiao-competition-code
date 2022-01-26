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

## CSS3选择器

在前面，也指出了以下的选择器，在这里再提出一下，知道他们是css3才出来的。

CSS3 中新增了伪类选择器和伪元素选择器，他们之间的定义和区别如下：

| 名称   | 描述                                                         | 示例           |
| ------ | ------------------------------------------------------------ | -------------- |
| 类     | 用户定义的真实存在的类样式                                   | .div {}        |
| 伪类   | 非用户定义的，用于添加特殊效果的，作用于标记状态的类样式     | a:hover {}     |
| 元素   | 用户定义真实存在的元素（标签）                               | div {}         |
| 伪元素 | HTML 中不存在的虚拟的元素容器，该容器不包括 DOM ,但可以包括内容。 | div::before {} |

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201161720332.png)

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201161720395.png)

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201161720063.png)

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201161720351.png)

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

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>title</title>
    <style>
      /*strong 父节点中的第三个*/
      strong:nth-child(3) {
        background-color: yellow;
      }
      /*strong 父节点中，类型为 strong 的第三个*/
      strong:nth-of-type(3) {
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <ul>
      <li>
        <strong>hello world1</strong>
        <h1>hello world2</h1>
        <strong>hello world3</strong>
        <h1>hello world4</h1>
        <strong>hello world5</strong>
      </li>
    </ul>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201161722419.png)

在这里，能够区别`nth-child`与`nth-of-type`

> child说明是在父元素里排第几个，他们不同标签都可以，而type就不行，它得是同标签的第几个

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

## CSS3文本效果

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201162022655.png)

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

---

`word-wrap: break-word;` 嫌麻烦，不想分割，就会先另起一行，新的行放不到再把单词断了。

`word-break: break-all;` 就精致了，他不会去新起一行，而是直接在后面跟着，如果放不下，则会强制把单词折断。

有break实际并没有新起，而会连续分行



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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201171613915.png)

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201171614867.png)

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
        border-image: url("https://gitee.com/Dye/statics/raw/master/img/202201171617528.png")
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

![image-20220117161811877](https://gitee.com/Dye/statics/raw/master/img/202201171618930.png)

#### border-image-source

- border-image的背景图使用url()调用，图片可以是相对路径或是绝对路径，也可以不使用图片，即`border-image:none;`

#### border-image-slice

- 图片剪裁位置
- 没有单位，默认单位就是像素(px)。例如：border-image:url(border.png) 27 repeat;这里的27专指27px。
- 支持百分比值，百分比值大小是相对于边框图片的大小，假设边框图片大小为400px*300px，则20%的实际效果就是剪裁了图片的60px 80px 60px 80px的四边大小。
- 剪裁特性。类似于CSS中的clip属性。其有1~4个参数，代表上右下左四个方位的剪裁，符合CSS普遍的方位规则（与margin，padding等或border-width一致），举个简单的例子，前面提到，支持百分比宽度，所以这里“30% 35% 40% 30%”的示意可以用下图表示：
- ![clipboard.png](https://gitee.com/Dye/statics/raw/master/img/202201182051126.png)
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

![clipboard.png](https://gitee.com/Dye/statics/raw/master/img/202201182056704.png)

通过裁切属性变成

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201182109963.gif)

我们放开看，

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201182112406.jpeg)

- **如图 在border-image中的橙红色的四个边角只会呆在border的四个角,并且水平和垂直方向均被拉伸来填充border的四个角。**
- 如图 上下区域即border-top-image和border-bottom-image受到第一个参数——水平方向效果影响：如果为repeat，则此区域被水平重复(round水平平铺，stretch水平拉伸)来填充对应的上下border**【该区域在垂直方向上首先会按所对应的border-image-width的值等比缩放，然后再按参数设置在边框水平方向上进行重复或平铺或拉伸】**
- 左右区域border-left-image和border-right-image 的作用效果亦然**【该区域在水平方向上首先会按所对应的border-image-width的值等比缩放，然后再按参数设置在边框垂直方向上进行重复或平铺或拉伸】**

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201182246189.png)

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
![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201191439507.png)

```css
border-image-width: 1.5rem;
```

效果如下
（白框为border）
![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201191439407.png)

------

```css
border: 3em double orange;
border-image: url(border.png) 27 round;
border-image-width: 6rem 1.5rem;
```

效果如下
（白框为border）
![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201191439999.png)

> border-image-width用来设置边框素材的宽度,当同时设置了border-image-width和border-width属性时，那么边框的实际宽度由border-width属性决定。此时，如果border-image-width属性小于border-width属性，边框图片会沿边框的外侧分布而内侧留空形成 **padding** 的效果；如果border-image-width属性大于border-width属性，边框图片会仍会沿边框的外侧分布而**内测溢出**，如下图

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201191443559.png)

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201191441533.png)

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201191455619.png)

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

![image-20220119145800827](https://gitee.com/Dye/statics/raw/master/img/202201191458895.png)

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

显示效果： ![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201191526180.png)

由示例图可以发现，opacity 效果中的文字随着透明值下降越来越看不清楚，全透明时文字已经无法显示，而 rgba 效果则不具有这样的问题。rgba 同样也可以控制文字的透明度

### HSL 和 HSLA

CSS3 新增了 HSL 颜色表现方式，这种变现方式通常用在工业制造领域，在 CSS 中也引入了这种表示方式使得颜色的表示更加的丰富，HSL 标准几乎包含了人类所能感知的所有颜色，显示器上能呈现的颜色也都在这个范围内。

语法：

```css
hsl(hue,staturation,lightness)
```

#### **H(hue) 色相**

CSS3 的色相使用一个圆环来表示，取值范围 0~360。其中 0 和 360 表示红色，120 表示绿色，240 表示蓝色，其他的颜色依次类推。CSS3 色相环如下图所示：

![image-20200723102516677](https://gitee.com/Dye/statics/raw/master/img/202201191546819.png)

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201191616761.png)

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201191616831.png)

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201191616744.png)

#### **使用角度**

当需要在渐变的方向上做更多的控制，可以通过定义一个角度而不用预定义方向来实现。（to bottom 、to top 、to right 、to left 、to bottom right 等等）

角度是指水平线和渐变线之间的角度，逆时针方向计算。

<img src="https://gitee.com/Dye/statics/raw/master/img/202201201309540.png" alt="无标题" style="zoom:50%;" />

换句话说，0deg 将创建一个从下到上的渐变，90deg 将创建一个从左到右的渐变。如下图所示：

<img src="https://gitee.com/Dye/statics/raw/master/img/202201191616910.png" alt="图片描述" style="zoom: 67%;" />

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201191616894.png)

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

![image-20220120131555734](https://gitee.com/Dye/statics/raw/master/img/202201201315794.png)

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

<img src="https://gitee.com/Dye/statics/raw/master/img/202201202111495.jpeg" style="zoom:50%;" />

<img src="https://gitee.com/Dye/statics/raw/master/img/202201202112702.jpeg" style="zoom:50%;" />



<img src="https://gitee.com/Dye/statics/raw/master/img/202201202112328.jpeg" style="zoom:50%;" />



<img src="https://gitee.com/Dye/statics/raw/master/img/202201202112960.jpeg" style="zoom: 50%;" />

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201201318158.png)

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201201318077.png)

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201202116139.png)

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



![image-20220120212522152](https://gitee.com/Dye/statics/raw/master/img/202201202125217.png)

## CSS3转换

2009 年的 W3C 组织正式发布了 3D 变形动画标准草案和 2D 变形动画标准草案，两个草案的核心内容基本相似，但是针对的主题不同。一个是 3D 动画一个是 2D 动画。

CSS3 的 2D transform 获得了各主流浏览器的支持，但是 CSS 3D transform 只有少数浏览器支持。

transform 实现了一些可以用于 SVG 实现的变形功能。可以作用于内联元素和块级元素，该属性可以实现旋转、缩放、移动等功能。使用 transform 属性还可以控制文字的变形，这种纯粹的使用 CSS 进行文本控制的方式相比于使用图像实现具有更好的可操作性。也是文字变形的首选解决方案。

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

在 CSS3 中，使用 rotate() 函数能够旋转指定的元素对象，主要在二维空间内进行操作。可以接受一个角度参数值，用来定义旋转的幅度。操作的元素对象既可以是内联元素，也可以是块级元素。语法格式如下：

```html
rotate(angle)
```

其中 angle 为旋转的值，例如：angle 值为 30deg 表示元素**顺时针**旋转 30 度。

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div {
        margin: 30px;
        width: 200px;
        height: 100px;
        background-color: yellow;
        /* Rotate div */
        transform: rotate(30deg);
        -ms-transform: rotate(30deg); /* Internet Explorer */
        -moz-transform: rotate(30deg); /* Firefox */
        -webkit-transform: rotate(30deg); /* Safari 和 Chrome */
        -o-transform: rotate(30deg); /* Opera */
      }
    </style>
  </head>
  <body>
    <div>Hello World</div>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201211110548.png)

### translate() 移动

translate() 函数能够重新定位元素坐标，该函数包含两个参数值，分别用来定位 X 轴和 Y 轴的新坐标。语法格式如下：

```css
translate(<translate-value>[,<translate-value>])
```

其中 `<translate-value>` 参数表示坐标值，第一个参数表示相对于原坐标 X 轴的偏移量，第二个参数表示相对于原坐标的 Y 轴的偏移量。若是第二个参数省略，这表示 X 轴和 Y 轴的偏移量一致。参数值可以是正数也可以是负数，负数为反向偏移。

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div {
        margin: 10px;
        width: 100px;
        height: 100px;
        background-color: yellow;
        float: left;
      }
      div:hover {
        /* Rotate div */
        transform: translate(0, 10px);
        -ms-transform: translate(0, 10px); /* Internet Explorer */
        -moz-transform: translate(0, 10px); /* Firefox */
        -webkit-transform: translate(0, 10px); /* Safari 和 Chrome */
        -o-transform: translate(0, 10px); /* Opera */
      }
    </style>
  </head>
  <body>
    <div>Hello World</div>
    <div id="div1">CSS3</div>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201211111976.png)

> 注意：当仅需要设置垂直位移而不需要设置水平位移时，第一个参数值设置为 0。

### scale() 缩放

scale() 函数能够缩放元素大小，该函数包含两个参数，分别用来定义宽和高的缩放比例。语法格式如下：

```css
scale(<number>[<number>])
```

`<number>` 参数值可以是正数、负数和小数，正数基于设置的宽度和高度将会放大元素，负数值不会缩小元素，而是会翻转元素，例如元素内的文字被翻转，然后在缩放元素。使用小于 1 的小数也可以缩小元素。第二个 `<number>` 省略的情况下，表示高度和宽度的缩放比例一致。

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div {
        margin: 100px;
        width: 100px;
        height: 100px;
        background-color: yellow;
        /* Rotate div */
        transform: scale(3, 2);
        -ms-transform: scale(3, 2); /* Internet Explorer */
        -moz-transform: scale(3, 2); /* Firefox */
        -webkit-transform: scale(3, 2); /* Safari 和 Chrome */
        -o-transform: scale(3, 2); /* Opera */
      }
    </style>
  </head>
  <body>
    <div>Hello World</div>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201211116786.png)

> 注意：一定要设置 margin 或者 padding 值，否则当元素放大时页面会显示不全。

当参数设置成以下内容。

```css
transform: scale(-2);
-ms-transform: scale(-2);
-moz-transform: scale(-2);
-webkit-transform: scale(-2);
-o-transform: scale(-2);
```

显示效果如下：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201211116646.png)

当参数设置成以下内容。

```css
transform: scale(0.5);
-ms-transform: scale(0.5);
-moz-transform: scale(0.5);
-webkit-transform: scale(0.5);
-o-transform: scale(0.5);
```

显示效果如下：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201211116025.png)

一般该缩放操作都会同 `:hover` 一起使用。

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

显示效果： ![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201211117264.png)

### matrix() 变形

matrix() 是矩阵函数，调用该函数可以非常灵活的实现各种变形效果。matrix() 函数包括 6 个参数值，可以用 a-f 来表示。这六个参数值形成了一个 3×3 的矩阵，通过对该矩阵值的重新定义，实现元素的变形效果。

![image-20200813110619233](https://gitee.com/Dye/statics/raw/master/img/202201211119151.png)

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201211119320.png)

#### 原理：

> matrix() 方法需要六个参数，包含数学函数，允许您：旋转、缩放、移动以及倾斜元素。

根据我们上面说的用矩阵与向量的乘法来施加运动，我们就可以来看一下它到底是怎么运动起来的

![img](https://gitee.com/Dye/statics/raw/master/img/202201211407883.jpeg)

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

![img](https://gitee.com/Dye/statics/raw/master/img/202201211448737.jpeg)

同样的根据矩阵的计算公式，我们可以得到公式：

`x'=xcosθ-ysinθ; y'=xsinθ+ycosθ`

现在我们先把公式放在这里，我们来看一下下图的这个正方形，从图中我们可以知道a,b,c,d的坐标分别为：

![img](https://gitee.com/Dye/statics/raw/master/img/202201211448520.png)

A(0,1) B(1,1) C(1,0) D(0,0)


当我们让它旋转90°之后，那此时的cos45°就是0 sin45°都为1，分别把A,B,C,D里的x,y代入上面的公式之后我们可以得到：

现在这个正方形就变成了下图的样子，



结论：我们要记住初始写法是这样的

> transform：matrix（cosθ，-sinθ,sinθ,cosθ,0,0);然后需要旋转多少度就计算出这个度数的cosθ，sinθ就可以达到我们想要的效果啦



最后，

- **同时使用多个转换**，其格式为 `transform: translate() rotate() scale()`；
- 顺序会影响到转换的效果（先旋转会改变坐标轴方向）；
- 但我们同时有位置或者其他属性的时候，要将位移放到最前面。

## CSS3 3D 转换

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

transform-style 属性指定嵌套元素是怎样在三维空间中呈现。在使用此属性前必须先使用 transform 属性。语法如下：

```css
transform-style: flat|preserve-3d;
```

| 值          | 描述                             |
| ----------- | -------------------------------- |
| flat        | 表示所有子元素在 2D 平面呈现。   |
| preserve-3d | 表示所有子元素在 3D 空间中呈现。 |

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
        height: 200px;
        width: 200px;
        margin: 100px;
        padding: 10px;
        border: 1px solid black;
      }

      #div2 {
        padding: 50px;
        position: absolute;
        border: 1px solid black;
        background-color: blue;
        transform: rotateY(60deg);
        transform-style: preserve-3d;
        -webkit-transform: rotateY(60deg); /* Safari and Chrome */
        -webkit-transform-style: preserve-3d; /* Safari and Chrome */
      }

      #div3 {
        padding: 40px;
        position: absolute;
        border: 1px solid black;
        background-color: yellow;
        transform: rotateY(-60deg);
        -webkit-transform: rotateY(-60deg); /* Safari and Chrome */
      }
    </style>
  </head>
  <body>
    <div id="div1">
      <div id="div2">
        BLUE
        <div id="div3">YELLOW</div>
      </div>
    </div>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201211529587.png)

### perspective 属性

这个属性允许你改变 3D 元素是怎样查看透视图。定义时的 perspective 属性，它是一个元素的子元素的透视图，而不是元素本身。

 **`perspective`**指定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果。 z>0 的三维元素比正常大，而 z<0 时则比正常小，大小程度由该属性的值决定。

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201211625584.png)

看完了这里，相信你还不知道理解。

继续说把，

| `perspective: 250px;`                                        | `perspective: 350px;`                                        |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220121184948848](https://gitee.com/Dye/statics/raw/master/img/202201211849936.png) | ![image-20220121184957840](https://gitee.com/Dye/statics/raw/master/img/202201211850369.png) |
| `perspective: 500px;`                                        | `perspective: 650px;`                                        |
| ![](https://gitee.com/Dye/statics/raw/master/img/202201211850382.png) | ![image-20220121185034876](https://gitee.com/Dye/statics/raw/master/img/202201211850936.png) |

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201211859967.png)

- `left`, 关键字，0值的简记。
- `center`, 关键字，50%的简记。
- `right`, 关键字，100%的简记。

![image-20220121190148010](https://gitee.com/Dye/statics/raw/master/img/202201211901129.png)

如果用观察者的位置来解释，取bottom来说，现在就站在bottom这一平面看方块，自然只能看到如图所示的图片。

## CSS3 过渡

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201212132562.gif)

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201212133251.gif)

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201212135126.gif)

## CSS3 动画

在 CSS3 中，除了可以使用 Transitions 功能实现动画效果以外，还可以使用 Animations 功能实现更为复杂的动画效果，这些动画可以取代许多网页动画图像、Flash 动画和 JavaScript 实现的效果。到目前为止基本主流浏览器都已经支持 CSS3 动画。

### CSS3 动画属性

实际项目中，仅仅通过 3D 转换和过渡是无法满足对动画效果的开发需求，还有个关键的知识点就是 CSS3 动画（也称为关键帧动画）。

什么是关键帧动画？即可以通过对一个动画的过程的每一部分的表现都做出要求来实现一个完整动画过程的描述。一个关键帧动画最少包含两部分：

- animation 属性及属性值（动画的名称和运行方式运行时间等）。
- @keyframes（规定动画的具体实现过程）。

#### @keyframes 介绍

@keyframes 规则内指定一个 CSS 样式和动画将逐步从目前的样式更改为新的样式。利用 CSS3 制作动画效果其原理与 Flash 一样，我们需要定义关键帧处的状态效果，由 CSS3 来驱动产生动画效果。

示例代码：

```css
@keyframes myfirst {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}

@-moz-keyframes myfirst /* Firefox */ {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */ {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}

@-o-keyframes myfirst /* Opera */ {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}
```

```css
/* from to 等价于  0% 和  100% */
/* @keyframes move {
    from {
    	transform: translate(0, 0);
    }
    to {
    	transform: translate(300px, 0);
    }
} */
/* 动画序列 */
/* 1. 可以做多个状态的变化 keyframe 关键帧 */
/* 2. 里面的百分比要是整数 */
/* 3. 里面的百分比就是 总的时间（我们这个案例10s）的划分 25% * 10  =  2.5s */
      @keyframes move {
        0% {
          transform: translate(0, 0);
        }
        25% {
          transform: translate(300px, 0);
        }
        50% {
          transform: translate(300px, 300px);
        }
        75% {
          transform: translate(0, 300px);
        }
        100% {
          transform: translate(0, 0);
        }
      }
```



在 @keyframes 中创建动画时，还需要把它捆绑到某个选择器，否则不会产生动画效果。

通过规定至少需要设置以下两项 CSS3 动画属性，才可以将动画绑定到选择器：

- 规定动画的名称。
- 规定动画的时长。

这就需要用到 CSS3 动画的另外一个常用属性：**animation 属性**。

#### animation 属性

@keyframes 创建的动画绑定到选择器上。通过 animation 属性就能实现这个操作。animation 属性是一个复合属性，子属性功能描述如下表所示：

| 属性                      | 描述                                                         |
| ------------------------- | ------------------------------------------------------------ |
| animation-name            | 规定 @keyframes 动画的名称。                                 |
| animation-duration        | 规定动画完成一个周期所花费的秒或毫秒。默认是 0。             |
| animation-timing-function | 规定动画的速度曲线。默认是 "ease"。                          |
| animation-fill-mode       | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。 |
| animation-delay           | 规定动画何时开始。默认是 0。                                 |
| animation-iteration-count | 规定动画被播放的次数。默认是 1。                             |
| animation-direction       | 规定动画是否在下一周期逆向地播放。默认是 "normal"。          |

这里完成一个最简单的动画绑定示例，完成了色块由红色到蓝色渐变动画，该动画只用到了 animation-name 和 animation-duration 两个属性。

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
        animation: myfirst 5s;
        -webkit-animation: myfirst 5s; /* Safari and Chrome */
      }

      @keyframes myfirst {
        from {
          background: red;
        }
        to {
          background: blue;
        }
      }

      @-webkit-keyframes myfirst /* Safari and Chrome */ {
        from {
          background: red;
        }
        to {
          background: blue;
        }
      }
    </style>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201212147414.gif)

## CSS3 怪异盒模型

所有的 HTML 元素都可以看作盒子，在 CSS 中，"box model"这一术语是使用 HTML 元素来设计和布局时使用的。 CSS 盒模型本质上是一个盒子，盒子封装周围的 HTML 元素，它包括：外边距（margin）、边框（border）、内边距（padding）、实际内容（content）四个属性。

盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。CSS 中的盒子模型（Box model）分为两种：W3C 标准盒子模型和 IE 标准盒子模型。

大多数的浏览器都采用 W3C 标准，而 IE 采用的是 IE 标准。而怪异模式是指“部分浏览器在支持 W3C 标准的同时还保留了原先的解析模式”，怪异模式主要表现在 IE 内核的浏览器中。

### 标准盒模型

![image-20200817205235441](https://gitee.com/Dye/statics/raw/master/img/202201212156481.png)

由上图可以看到，在标准盒模型下，width 和 height 是内容区域即 content 的 width 和 height。

```txt
一个块的总宽度= width + margin(左右) + padding(左右) + border(左右)
```

### 怪异盒模型

![image-20200817205407394](https://gitee.com/Dye/statics/raw/master/img/202201212157788.png)

由上图可见，IE 盒模型或怪异盒模型和标准盒子模型最大的区别就是：width 和 height 除了 content 区域外，还包含 padding 和 border。

```txt
一个块的总宽度= width + margin(左右)（即width已经包含了padding和border值）
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

## CSS3 弹性盒子

### 弹性盒子模型介绍

CSS3 弹性盒（ Flexible Box 或 flexbox）是一种新的布局模式。引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的子元素进行排列、对齐和分配空白空间。使用弹性盒子可以轻松的实现自适应浏览器布局或自适应字体大小的弹性布局。

传统的盒子布局方式都是基于 HTML 流的垂直布局。盒子在页面中自上而下的依次排列。使用弹性盒子模型可以规定特殊的排列顺序，也可以将其反正排列。当需要开启弹性盒子模型的时候，只需要设置该盒子的 display 属性为 flex 或 inline-flex 即可。语法如下：

```css
display：flex|inline-flex
```

### flex 布局格式设置

弹性盒子由弹性容器 (Flex container) 和弹性子元素 (Flex item) 组成。弹性容器通过设置 display 属性的值为 flex 或 inline-flex 将其定义为弹性容器。弹性容器内包含了一个或多个弹性子元素。

### flex 布局容器属性

#### flex-direction 属性

flex-direction 属性指定了弹性子元素在父容器中的排列方向和顺序。语法如下：

```css
flex-direction: row | row-reverse | column | column-reverse;
```

| 属性值         | 描述                                                     |
| -------------- | -------------------------------------------------------- |
| row            | 横向从左到右排列（左对齐），默认的排列方式。             |
| row-reverse    | 反转横向排列（右对齐），从后往前排，最后一项排在最前面。 |
| column         | 纵向排列                                                 |
| column-reverse | 反转纵向排列，从后往前排，最后一项排在最上面。           |

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
      }
      #content {
        width: 300px;
        height: 300px;
        background-color: antiquewhite;
        display: flex;
        flex-direction: row-reverse;
      }
      .left {
        background-color: gray;
      }
      .center {
        background-color: silver;
      }
      .right {
        background-color: darkgray;
      }
    </style>
  </head>
  <body>
    <div id="content">
      <div class="left">div1块</div>
      <div class="center">div2块</div>
      <div class="right">div3块</div>
    </div>
  </body>
</html>
```

显示效果:

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201231348686.png)

#### flex-wrap 属性

flex-wrap 属性用于指定弹性盒子的子元素换行方式。语法如下：

```css
flex-wrap: nowrap|wrap|wrap-reverse|initial|inherit;
```

| 属性值       | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| nowrap       | 默认， 弹性容器为单行。该情况下弹性子项可能会溢出容器。      |
| wrap         | 弹性容器为多行。该情况下弹性子项溢出的部分会被放置到新行，子项内部会发生断行。 |
| wrap-reverse | 反转 wrap 排列。                                             |

示例代码：

```css
//省略其他代码....
<style>
        div{width: 100px; height: 100px}
        #content{width: 240px; height: 300px; background-color: antiquewhite;display: flex; flex-wrap:nowrap}
        .left{background-color: gray}
        .center{background-color: silver}
        .right{background-color: darkgray}
</style>
//省略其他代码....
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201231348714.png)

上面的示例，容器宽度为 240 px ，容器中有 3 个宽度为 100 px 的子元素，当属性值设置成 `nowrap` 时，项目会强行等分容器宽度从而不换行，这时子元素的实际宽度也就只有 80 px 而非设置的 100 px 。

当示例代码修改设置为`flex-wrap:wrap`或者`flex-wrap:wrap-reverse`时页面显示效果如下：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201231348914.png)

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201231348015.png)

#### flex-flow 属性

flex-flow 属性是 flex-deriction 与 flex-wrap 属性的简写集合，默认属性为 row nowrap ，即横向排列，且不换行，如果需要控制项目排列与换行，推荐使用此属性，而非单独写两个。

#### justify-content 属性

内容对齐（justify-content）属性应用在弹性容器上，把弹性项沿着弹性容器的主轴线（main axis）对齐。justify-content 语法如下：

```css
justify-content: flex-start | flex-end | center | space-between | space-around;
```

- flex-start ： 弹性项目向行头紧挨着填充。这个是默认值。第一个弹性项的 main-start 外边距边线被放置在该行的 main-start 边线，而后续弹性项依次平齐摆放。
- flex-end ： 弹性项目向行尾紧挨着填充。第一个弹性项的 main-end 外边距边线被放置在该行的 main-end 边线，而后续弹性项依次平齐摆放。
- center ： 弹性项目居中紧挨着填充。（如果剩余的自由空间是负的，则弹性项目将在两个方向上同时溢出）。
- space-between ： 弹性项目平均分布在该行上。如果剩余空间为负或者只有一个弹性项，则该值等同于 flex-start 。否则，第 1 个弹性项的外边距和行的 main-start 边线对齐，而最后 1 个弹性项的外边距和行的 main-end 边线对齐，然后剩余的弹性项分布在该行上，相邻项目的间隔相等。
- space-around ： 弹性项目平均分布在该行上，两边留有一半的间隔空间。如果剩余空间为负或者只有一个弹性项，则该值等同于 center 。否则，弹性项目沿该行分布，且彼此间隔相等（比如是 20 px ），同时首尾两边和弹性容器之间留有一半的间隔（1/2*20 px=10 px ）。

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201231355493.png)

#### align-items 属性

align-items 设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式。语法如下：

```css
align-items: flex-start | flex-end | center | baseline | stretch;
```

- flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
- flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
- center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
- baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与 'flex-start' 等效。其它情况下，该值将参与基线对齐。
- stretch：如果指定侧轴大小的属性值为 'auto' ，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照 'min/max-width/height' 属性的限制。

属性值默认为 stretch ，即如果项目没设置高度或高度为 auto ，则占满整个容器。示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      div {
        width: 100px;
      }
      #content {
        width: 240px;
        height: 300px;
        background-color: antiquewhite;
        display: flex;
        align-items: stretch;
      }
      .left {
        background-color: gray;
      }
      .center {
        background-color: silver;
      }
      .right {
        background-color: darkgray;
      }
    </style>
  </head>
  <body>
    <div id="content">
      <div class="left">div1块</div>
      <div class="center">div2块</div>
      <div class="right">div3块</div>
    </div>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201232203599.png)

属性值 flex-start 会让项目在纵轴紧贴容器顶部，flex-end 与之相反：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201232204634.png)

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201232204172.png)

属性值 center 使用最多，自然不会陌生，在纵轴中心位置排列：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201232204976.png)

<u>属性值 baseline 比较特殊，它让项目以第一行文字的基线为参照进行排列。</u>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      div {
        width: 100px;
      }
      #content {
        width: 240px;
        height: 300px;
        background-color: antiquewhite;
        display: flex;
        align-items: baseline;
      }
      .left {
        background-color: gray;
        height: 100px;
      }
      .center {
        background-color: silver;
        height: 150px;
      }
      .right {
        background-color: darkgray;
        height: 100px;
      }
    </style>
  </head>
  <body>
    <div id="content">
      <div class="left">div1块</div>
      <div class="center">div2块</div>
      <div class="right">div3块</div>
    </div>
  </body>
</html>
```

效果如下所示：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201232204339.png)

**注意，常理来说 justify-content 与 align-items 默认分别处理项目横轴，纵轴的对齐方式，但如果我们修改了 flex-direction 为 column ，它们处理的轴向会交换，也就是 justify-content 处理纵轴，align-items 处理横轴。**

#### align-content

align-content 属性用于控制**多行项目**的对齐方式，如果项目只有一行则不会起作用。语法如下：

```css
align-content: flex-start | flex-end | center | space-between | space-around |
  stretch;
```

| 属性值        | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| stretch       | 默认。各行将会伸展以占用剩余的空间。                         |
| flex-start    | 各行向弹性盒容器的起始位置堆叠。                             |
| flex-end      | 各行向弹性盒容器的结束位置堆叠。                             |
| center        | 各行向弹性盒容器的中间位置堆叠。                             |
| space-between | 各行在弹性盒容器中平均分布。                                 |
| space-around  | 各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。 |

默认 stretch ，即在项目没设置高度，或高度为 auto 情况下让项目填满整个容器，与 align-items 类似。注意，如下演示的 12 个项目我均没有设置高度。

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      div {
        width: 60px;
      }
      #content {
        width: 300px;
        height: 300px;
        background-color: antiquewhite;
        display: flex;
        flex-wrap: wrap;
        align-content: stretch;
      }
      .left {
        background-color: gray;
      }
      .center {
        background-color: silver;
      }
      .right {
        background-color: darkgray;
      }
    </style>
  </head>
  <body>
    <div id="content">
      <div class="left">div1块</div>
      <div class="center">div2块</div>
      <div class="right">div3块</div>
      <div class="left">div4块</div>
      <div class="center">div5块</div>
      <div class="right">div6块</div>
      <div class="left">div7块</div>
      <div class="center">div8块</div>
      <div class="right">div9块</div>
      <div class="left">div10块</div>
      <div class="center">div11块</div>
      <div class="right">div12块</div>
    </div>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201232212165.png)

属性值为：flex-start ，center，flex-end 与 align-items 属性表现一致：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201232212536.png)

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201232212859.png)

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201232212611.png)

属性值 space-around 与 justify-content 保持一致，即项目之间间距为上下两端项目与容器间距两倍。

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201232212778.png)

属性值 space-between 为上下两侧项目紧贴容器。

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201232212523.png)

### flex 布局子元素属性

#### order

排序，用整数值来定义排列顺序，**数值小的排在前面**。可以为负值。语法：

```css
order：<integer>
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
        width: 60px;
        height: 60px;
      }
      #content {
        width: 300px;
        height: 300px;
        background-color: antiquewhite;
        display: flex;
      }
      .left {
        background-color: gray;
        order: 3;
      }
      .center {
        background-color: silver;
        order: 2;
      }
      .right {
        background-color: darkgray;
        order: 1;
      }
    </style>
  </head>
  <body>
    <div id="content">
      <div class="left">div1块</div>
      <div class="center">div2块</div>
      <div class="right">div3块</div>
    </div>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201232213570.png)

#### flex-grow

用于决定项目在有剩余空间的情况下是否按比例放大，默认不放大。语法：

```css
flex-grow: number|initial|inherit;
```

| 值      | 描述                                                         |
| ------- | ------------------------------------------------------------ |
| number  | 一个数字，规定项目将相对于其他灵活的项目进行扩展的量。默认值是 0。 |
| initial | 设置该属性为它的默认值。                                     |
| inherit | 从父元素继承该属性。                                         |

> 注意：即便设置了固定宽度也会放大。

示例代码：

```css
<style>
        div{width: 60px; height: 60px}
        #content{width: 300px; height: 300px;
         background-color: antiquewhite;display: flex; }
        .left{background-color: gray; flex-grow: 1}
        .center{background-color: silver; }
        .right{background-color: darkgray; }
</style>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201232216536.png)

假设父元素宽400px，有两个子元素：A和B。A宽为100px，B宽为200px。 则空余空间为 400-（100+200）= 100px。 如果A，B都不索取剩余空间，则有100px的空余空间。

如果A索取剩余空间:设置flex-grow为1，B不索取。则最终A的大小为 自身宽度（100px）+ 剩余空间的宽度（100px）= 200px 。

**如果A，B都设索取剩余空间，A设置flex-grow为1，B设置flex-grow为2。则最终A的大小为 自身宽度（100px）+ A获得的剩余空间的宽度（100px (1/(1+2))）,最终B的大小为 自身宽度（200px）+ B获得的剩余空间的宽度（100px (2/(1+2))）**
👆对剩余空间进行比例分配

#### flex-basis

flex-basis 属性用于设置或检索弹性盒伸缩基准值。语法如下：

```css
flex-basis: number|auto|initial|inherit;
```

| 值      | 描述                                                         |
| ------- | ------------------------------------------------------------ |
| number  | 一个长度单位或者一个百分比，规定灵活项目的初始长度。         |
| auto    | 默认值。长度等于灵活项目的长度。如果该项目未指定长度，则长度将根据内容决定。 |
| initial | 设置该属性为它的默认值。                                     |
| inherit | 从父元素继承该属性。                                         |

> 注意：如果元素不是弹性盒对象的元素，则 flex-basis 属性不起作用。

默认 auto ，用于设置项目宽度，默认 auto 时，项目会保持默认宽度，或者以 width 为自身的宽度，但如果设置了 flex-basis ，**权重会 width 属性高**，因此会覆盖 widtn 属性。

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      #content {
        width: 300px;
        height: 100px;
        background-color: antiquewhite;
        display: flex;
      }
      #content div {
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 40px;
        width: 100px;
      }
      .left {
        background-color: gray;
      }
      .center {
        background-color: silver;
      }
      .right {
        background-color: darkgray;
      }
    </style>
  </head>
  <body>
    <div id="content">
      <div class="left">div1块</div>
      <div class="center">div2块</div>
      <div class="right">div3块</div>
    </div>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201232219812.png)

上图中先设置了 flex-basis 属性，后设置了 width 属性，但宽度依旧以 flex-basis 属性为准。

#### flex-shrink

flex-shrink 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。语法：

```css
flex-shrink: number|initial|inherit;
```

| 值      | 描述                                                         |
| ------- | ------------------------------------------------------------ |
| number  | 一个数字，规定项目将相对于其他灵活的项目进行收缩的量。默认值是 1。 |
| initial | 设置该属性为它的默认值。                                     |
| inherit | 从父元素继承该属性。                                         |

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      #content {
        width: 300px;
        background-color: antiquewhite;
        display: flex;
      }
      #content div {
        flex-basis: 120px;
      }
      .left {
        background-color: gray;
        flex-shrink: 1;
      }
      .center {
        background-color: silver;
      }
      .right {
        background-color: darkgray;
        flex-shrink: 4;
      }
    </style>
  </head>
  <body>
    <div id="content">
      <div class="left">div1块</div>
      <div class="center">div2块</div>
      <div class="right">div3块</div>
    </div>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201232219192.png)

上图中第二个子属性 flex-shrink 为 0，所以自身不会缩小。



假设父元素宽400px，有两子元素：A和B。A宽为200px，B宽为300px。 则A，B总共超出父元素的宽度为(200+300)- 400 = 100px。 如果A，B都不减小宽度，即都设置flex-shrink为0，则会有100px的宽度超出父元素。 

如果A不减小宽度:设置flex-shrink为0，B减小(`flex-shrink:1;`)。则最终B的大小为 自身宽度(300px)- 总共超出父元素的宽度(100px)= 200px 

如果A，B都减小宽度，A设置flex-shirk为3，B设置flex-shirk为2。则最终A的大小为 自身宽度(200px)- A减小的宽度(100px * (200px * 3/(200 * 3 + 300 * 2))) = 150px,最终B的大小为 自身宽度(300px)- B减小的宽度(100px * (300px * 2/(200 * 3 + 300 * 2))) = 250px

$超出宽度*(widthA*系数A/(widthA*系数A+(widthB*系数B))$

不再是普通的分配超出元素，对自身进行裁剪，所以要把自身宽度加入

#### flex

flex 属性用于指定弹性子元素如何分配空间。语法如下：

```css
flex: auto | initial | none | inherit | [ flex-grow ] || [ flex-shrink ] || [
  flex-basis ];
```

flex是flex-grow，flex-shrink, flex-basis缩写形式(大小基本)

flex 是一个复合属性，他可以拆解为多个子属性。其中个值的含义如下：

|                 |                                |
| --------------- | ------------------------------ |
| auto            | 计算值为 1 1 auto              |
| initial         | 计算值为 0 1 auto              |
| none            | 计算值为 0 0 auto              |
| inherit         | 从父元素继承                   |
| [ flex-grow ]   | 定义弹性盒子元素的扩展比率。   |
| [ flex-shrink ] | 定义弹性盒子元素的收缩比率。   |
| [ flex-basis ]  | 定义弹性盒子元素的默认基准值。 |

- 当 flex 取值为一个**非负数字**，则该数字为 flex-grow 值，flex-shrink 取 1，flex-basis 取 0%，如下是等同的：

`.item {flex: 1;}`=`.item {flex-grow: 1; flex-shrink: 1; flex-basis: 0%;}`

- 当 flex **取值为一个长度或百分比**，则视为 flex-basis 值，flex-grow 取 1，flex-shrink取 1，有如下等同情况（注意 0% 是一个百分比而不是一个非负数字）：

`.item-1 {flex: 0%;}`=`.item-1 { flex-grow: 1; flex-shrink: 1; flex-basis: 0%;} `

`.item-2 {flex: 24px;} `=`.item-2 { flex-grow: 1; flex-shrink: 1; flex-basis: 24px;}`

- 当 flex取值为**两个非负数字**，则分别视为 flex-grow和 flex-shrink的值，flex-basis取 0%，如下是等同的：

`.item {flex: 2 3;} `=`.item { flex-grow: 2; flex-shrink: 3; flex-basis: 0%;} `

- 当 flex取值为**一个非负数字和一个长度或百分比**，则分别视为 flex-grow和 flex-basis的值，flex-shrink取 1，如下是等同的：

` .item {flex: 2333 3222px;}`=` .item { flex-grow: 2333; flex-shrink: 1; flex-basis: 3222px;} `

> 数字依次给grow或者shrink，百分比或者长度是给basis的！！！！

#### align-self

align-self 属性用于设置**弹性元素自身**在侧轴（纵轴）方向上的对齐方式。各值的表现与父容器的 align-items 属性完全一致。语法如下：

```txt
align-self: auto | flex-start | flex-end | center | baseline | stretch
```

各个值解析:

- auto：如果 'align-self' 的值为 'auto' ，则其计算值为元素的父元素的 'align-items' 值，如果其没有父元素，则计算值为 'stretch' 。
- flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
- flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
- center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
- baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与 'flex-start' 等效。其它情况下，该值将参与基线对齐。
- stretch：如果指定侧轴大小的属性值为 'auto' ，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照 'min/max-width/height' 属性的限制。

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      .flex-container {
        display: -webkit-flex;
        display: flex;
        width: 400px;
        height: 250px;
        background-color: lightgrey;
      }

      .flex-item {
        background-color: cornflowerblue;
        width: 60px;
        min-height: 100px;
        margin: 10px;
      }

      .item1 {
        -webkit-align-self: flex-start;
        align-self: flex-start;
      }
      .item2 {
        -webkit-align-self: flex-end;
        align-self: flex-end;
      }

      .item3 {
        -webkit-align-self: center;
        align-self: center;
      }

      .item4 {
        -webkit-align-self: baseline;
        align-self: baseline;
      }

      .item5 {
        -webkit-align-self: stretch;
        align-self: stretch;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div class="flex-item item1">flex-start</div>
      <div class="flex-item item2">flex-end</div>
      <div class="flex-item item3">center</div>
      <div class="flex-item item4">baseline</div>
      <div class="flex-item item5">stretch</div>
    </div>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201232220008.png)

## CSS3多列

在使用 CSS2 进行页面布局时，若是需要在同一版面进行类似报纸和杂志类的多列页面显示时通常使用 float 或者 position 属性实现。但是使用这些属性会存在一些缺点。例如若是两栏或者多栏内元素的内容高度不一致时则底部很难对齐。因此，在 CSS3 中增加了一些新的布局方式。使用这些新的布局方式，除了可以修改之前存在的问题之外，还可以进行更便捷、更复杂的页面布局。

多列布局适合纯文档版式设计而不适合做网页结构布局，灵活使用多列布局特性可以实现在多列中显示文字和图片，从而节省大量的网页控制。如果网页上的文本内容很长，多列布局特性就能够发挥它的用武之地。

多列与弹性盒子布局是有区别的。在使用多列布局的时候各列宽度必须相同，在指定列宽时只能为所有的列定义一个统一的宽度。另外，再使用多列布局时，也不能具体指定那列中显示什么内容。因此多列布局更适用于显示文章的内容。不使用与网页结构布局

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201261844597.png)

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201261853308.png)

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201261853361.png)

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201261858072.png)

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201261902564.png)

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201261903164.png)

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201261904110.png)

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

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201261905455.png)

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