**HTML (Hyper Text Markup Language,超文本标记语言)**

> 1. Hyper（超）：超（Hyper）是相对于线性（Linear）而言的，HTML 之前的计算机程序大多是线性的，即必须由上至下顺序执行，而用 HTML 制作的网页可以通过其中的超链接从一个网页跳转至另一个网页。
> 2. Text（文本）：不同于一些编译型的程序语言，例如 C、C++ 或 Java 等，HTML 是一种文本解释型的程序语言，即它的源代码不经过编译而直接在浏览器中被翻译运行。
> 3. Markup（标记）：HTML 的基本规则就是用标记语言（成对尖括号组成的标签元素）来描述网页内容如何在浏览器中显示。
> 4. Language（语言）：HTML 是一种语言，但它是解释型语言。它所有的标记都会被浏览器翻译成最终显示的效果。

# HTML基础标签

## HTML标签

HTML 标签有两种形式：

```html
<标签名>内容</标签名>
<标签名/>
```

> W3C标准推荐使用小写

*双标签指标签是成对出现的，单标签指标签不是成对出现的，杜绝出现`<标签名>`*



标签分为两部分：开始标签 `<html>` 和结束标签 `</html>`，两个标签之间的部分我们叫做标签体。

有些标签功能比较简单，使用一个标签即可，这种标签叫做自闭和标签，例如：`<br/>`、`<hr/>`、`<img/>` 等。

标签可以嵌套，例如：`<a><b></b></a>`；但是不能交叉嵌套，例如：`<a><b></a></b>`。



## HTML属性



所有属性都放在起始标签的尖括号内，并相互用空格分开。

为了符合 W3C 标准，要求所有的属性值都使用引号。

在一个标签中可以设置多个属性，语法形式如下：

```html
<标签名　属性名1="属性值1"　属性名2="属性值2" ... 属性名N="属性值N">内容</标签名>
```

有多个属性说明标签时，它们出现的先后顺序不影响页面显示的结果。

实例：

<!DOCTYPE html>
<html lang="zh">
    <head>
        <meta charset="UTF-8" />
        <title>我的第一个网页</title>
    </head>  
    <body>
        Hello World ！  
    </body> 
</html>



## 注释及特殊符号

### HTML 注释

基本语法：

```html
<!-- 在此处写注释 -->
```

保存一个良好的注释风格，可以有以下好处：

1. 让他人更好地解读你的代码，多用于团队协作

2.  或许现在你懂写了什么，可是过了一段时间，并不能就能记得这片的功能

3. 为未来调试查找提供方便

4. 可以通过注释掉一部分暂时不用的代码



### 特殊符号

| HTML 原代码 | 显示结果 | 描述                   |
| ----------- | -------- | ---------------------- |
| &lt;        | <        | 小于号或显示标记       |
| &gt;        | >        | 大于号或显示标记       |
| &amp;       | &        | 可用于显示其它特殊字符 |
| &quot;      | “        | 引号                   |
| &reg;       | ®        | 已注册                 |
| &copy;      | ©        | 版权                   |
| &trade;     | ™        | 商标                   |
| &ensp;      |          | 半个空白位             |
| &emsp;      |          | 一个空白位             |
| &nbsp;      |          | 不断行的空白           |



## HTML 基本结构

### html 标签

`<html>` 标签标识该文档为 HTML 文档。

`<html>` 标签置于 HTML 文档最前边，用来标识 HTML 文档的开始，而 `</html>` 标签恰好相反，它放在 HTML 文档最后边，用来标识 HTML 文档的结束。

两个标签必须成对使用，网页中所有其他的内容都应该放在 `<html>` 和 `</html>` 标签之间。

基本语法：

```html
<html>
    包含<head>、<body>等其他标签
</html>
```

### head 标签

`<head>` 和 `</head>` 定义了 HTML 文档的头部，其中包含的内容主要包括对页面的一些基本描述。如标题、关键字等。

常用的头部标签：

| 标 签      | 描 述                                                        |
| ---------- | ------------------------------------------------------------ |
| `<title>`  | 定义页面标题内容（唯一必须的头部标签）。                     |
| `<base>`   | 当前文档的基准地址，其他相对地址都建立在此基准地址之上。     |
| `<meta>`   | 有关文档本身的元信息，例如文档的作者，用于查询的关键词，关于文档的描述等。 |
| `<style>`  | 定义 CSS 层叠样式表的内容。                                  |
| `<link>`   | 定义外部文件的链接，最常见的用途是链接外部样式表。           |
| `<script>` | 定义页面中程序脚本的内容。                                   |

### meta 标签

**1．设定关键字**

<meta name="Keywords" content="value" />

关键字能被搜索引擎准确地获取,但不是越多越好，影响搜索引擎对该页面质量评价。

**2．设定描述**

对于一个网站的每个页面，都可以在源代码中添加说明，用来将页面的主题描述清楚，这就是页面描述的作用。

搜索引擎同样对描述文字的字数有一定的要求，所以内容应尽量简明扼要。

<u>以上两个适当使用，能够起到优化SEO的作用。</u>

基本语法：

```html
<meta name="description" content="value" />
```

**3．设定字符集**

<meta http-equiv="content-type" content="text/html; charset=UTF-8" />

解释：告诉浏览器准备接收一个 HTML 文档，并且编码为UTF-8( 国际化编码)

> 在中国大陆地区，常用的编码是 GB 码，表示简体中文，字符集应设置为 gb2312 ；中国台湾地区常用的编码是 BIG5 码，表示繁体中文；欧洲地区常用 ISO8859-1 表示英文……对于不同字符集的页面，如果用户的浏览器不支持该字符集的显示，则浏览器中显示的将是乱码。

HTML5 字符集设置简化写法：

```html
<meta charset="UTF-8" />
```

### body 标签

`<body>` 标签界定了 HTML 文档的主体。

在 `<body>` 和 `</body>` 之间放置的是实际要显示的所有内容和其他用来控制显示方式的标签，如 `<p></p>`、`<h1></h1>`、`<br />`、`<hr />` 等，它们中间所定义的文本、超链接、图像、表格和列表等将会在浏览器窗口中显示出来。



## HTML 块级标签

特点：

1. 总是以新行开始；
2. 高度、行高、外边距和内边距都可以控制；
3. 宽度缺省是它所在容器的 100%，除非设定一个宽度；
4. 可以容纳行内元素和其他块元素。

### div 标签

`<div>`标签没有特定的含义，它主要是用于实现页面布局操作。

网络流行的“DIV+CSS”布局方式中的 div 指的就是 `<div>` 标签。

![](https://gitee.com/Dye/statics/raw/master/img/202201022149816.png)

### p 标签

用标签 `<p>` 表示段落。

对于段落标签，有一个可选的属性 align，用于表示段落相对浏览器窗口在水平位置上的对齐方式。align 属性有四个可取值，每个可取值的含义如表所示：

| 值      | 描 述                                |
| ------- | ------------------------------------ |
| left    | 段落左对齐                           |
| right   | 段落右对齐                           |
| center  | 段落居中对齐                         |
| justify | 对行进行伸展，每行都可以有相等的长度 |

但我觉得还是css好👌

### hx 标签

主要用来标识 HTML 文档中的各级标题。在浏览器解析标题标签时，会将标题内容设为一个段落，字体设为黑体，字号大小根据 x 值的大小确定。

标题标签共有六种，每种的标题在字号上都有明显的区别。在 HTML 中，定义了六级标题，从一级到六级，每级标题的字体大小依次递减。

![xvIUaFBq2JzXi6k](https://gitee.com/Dye/statics/raw/master/img/202201022149260.png)

### ul、ol 和 li 标签

HTML 中的列表可分为两种类型，一种是有序列表，另一种是无序列表。前者使用编号来记录，而后者则使用项目符号来标识无序的项目。

#### 有序列表

基本语法：

```html
<ol>
  <li>项目一</li>
  <li>项目二</li>
  <li>项目三</li>
  …
</ol>
```

对于 `<ol>` 标签有两个可选的属性，下表列出了每个属性、可取值和简单描述。

| 属 性 | 可 取 值      | 描 述                        |
| ----- | ------------- | ---------------------------- |
| type  | A、a、I、i、1 | 规定列表的类型，默认为数字   |
| start | start_number  | 规定列表中的起始点，默认为 1 |

示例代码：

```html
<ol type="A" start="3">
  <li>华为</li>
  <li>小米</li>
  <li>苹果</li>
  <li>oppo</li>
  <li>三星</li>
</ol>
```

显示效果：

![i62RraW1mgOC9bM](https://gitee.com/Dye/statics/raw/master/img/202201022149366.png)

#### 无序列表

在 HTML 文档中，所谓无序列表，是指以实心圆 ●（默认）、空心圆 ○、实心方块 ■ 开头的，没有顺序的列表项目。

基本语法：

```html
<ul>
  <li>项目一</li>
  <li>项目二</li>
  <li>项目三</li>
  …
</ul>
```

无序列表的 type 属性可以设置为 disc、circle、square，其中 disc 代表实心圆 ●（默认），circle 代表空心圆 ○、square 代表实心方块 ■。

示例代码：

```html
<ul type="disc">
  <li>华为</li>
  <li>小米</li>
  <li>苹果</li>
  <li>oppo</li>
  <li>三星</li>
</ul>
```

显示效果：

![ExYCnAgXMJQl7z1](https://gitee.com/Dye/statics/raw/master/img/202201022150208.png)

### dl、dt和dd标签

如果使用 `<dt>` 或 `<dd>` 标签的话，那么最外层就必须使用 `<dl>` 包裹，这种组合标签也称作表格标签，与 `<table>` 表格类似故而也可以称之为 `<dl>` 表格。

基本语法：

```html
<dl>
  <dt>列表项</dt>
  <dd>列表描述</dd>
</dl>
```



## HTML行内标签

1.  和其他元素都在一行上；
2. 高、行高及外边距和内边距部分可改变；
3. 宽度就是它的文字或图片的宽度，不可改变；
4. 行内元素只能容纳文本或者其他行内元素。(不可以设置宽高，其宽度随着内容增加，高度随字体大小而改变)
5. **设置行内元素，需要注意如下**
   1. **设置宽度 width 无效。**
   2. **设置高度 height 无效，但可以通过 line-height 来设置。**
   3. **设置 margin 只有 左右有效，上下无效。**
   4. **设置 padding 只有 左右有效，上下无效。**

### a标签

超链接，也可以称之为锚（anchor）

超链接可以是一个字，一个词，也可以是一张图片，点击这些内容来跳转到新的文档或者当前文档中的某个部分。

尽管如此，现在一些鼠标箭头变为小手的也不一定是超链接(`cursor:pointer`附加上什么都可以)，可跳转的也不一定是超链接。

经常，我们使用其中的3种属性：

#### href 属性

基本语法：

```html
<a href="链接地址">文本或者图片</a>
```

如何在刷新本页面？

```html
<a href="javascript:void(0)"></a>
<a href="#"></a>
```



#### target 属性

<a> 标签的 target 属性规定在何处打开链接文档。

如果在一个 <a> 标签内包含一个 target 属性，浏览器将会载入和显示用这个标签的 href 属性命名的、名称与这个目标吻合的框架或者窗口中的文档。如果这个指定名称或 id 的框架或者窗口不存在，浏览器将打开一个新的窗口，给这个窗口一个指定的标记，然后将新的文档载入那个窗口。从此以后，超链接文档就可以指向这个新的窗口。

😶‍🌫️？？我们来个小栗子：

```html
<ul>
  <li><a href="1.html" target="showHTML">第一页</a></li>
  <li><a href="2.html" target="showHTML">第二页</a></li>
  <li><a href="3.html" target="showHTML">第三页</a></li>
</ul>
```

第一次选择内容列表中的某个链接时，浏览器会打开一个新的窗口，将它标记为 "showHTML"，并在其中显示文档内容。当用户选择另一个链接打开时，如果这个标记为 "showHTML" 的窗体仍处于打开状态，浏览器就会再次将选定的文档在该窗口中显示。



---

题外话：

我们还可以不打开一个完整的浏览器窗口，而是在框架中的一个 frame 中通过超链接控制另一个 frame 的页面显示。

例如，我们新建一个名为 `1.html` 的文件，写入以下内容。

```html
<!--1.html-->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body>
    <p>我是2.html</p>
  </body>
</html>
```

再新建一个名为 `2.html` 的文件，写入以下内容。

```html
<!--2.html-->
<frameset cols="300,*">
    <frame src="index.html">
    <frame src="1.html" name="showHTML">
</frameset>
```

点击查看 `2.html` 就会有以下显示效果：

![iJLSWRvnTACDugE](https://gitee.com/Dye/statics/raw/master/img/202201022150766.png)

回到正题：

<a> 标签的 target 属性有一个有 4 个保留的目标名称用作特殊的文档重定向操作：

（后3个不是经常用到）

| 值      | 描述                                                         |
| ------- | ------------------------------------------------------------ |
| _blank  | 浏览器总在一个新打开、未命名的窗口中载入目标文档。           |
| _self   | 浏览器在当前窗口载入目标文档。                               |
| _parent | 浏览器在父窗口载入目标文档。如果这个引用是在窗口或者在顶级框架中，那么它与 _self 等效。 |
| _top    | 浏览器在最顶端的框架窗体载入目标文档。                       |

#### title属性

顾名思义就是标题，它的作用可以在悬浮超链接时候，给用户一个关于超链接的介绍。

```html
<a class="a" title="233">233</a>
```

#### 其它用法

##### 邮件

超链接不仅可以链接网页，也可以链接到邮箱地址，也就是用户单击这个超链接时，会打开邮件客户端程序（必须安装），邮件客户端程序会根据超链接的内容自动填入收件人、主题等信息，等待用户发送邮件。

```html
<p>
  邮件链接：
  <a href="mailto:1176996982@qq.com?subject=test%20mail">发送测试邮件</a>
  <!--“%20”来替换单词之间的空格-->
</p>
```

##### 文档书签

博客要做目录的时候，经常用到这个方法

当一个页面内容特别多时，可以通过给页面建立书签的方式，对同一页面里的内容进行链接。这样用户在浏览网页时，可以通过书签进行页面内的内容跳转，提高浏览者的用户体验效果。

基本语法：

```html
<a name="书签名称">文字</a>
<!--or-->
<div id="书签名称">文字</div>
<!--使用id可以是任何标签，但是name只能是a标签-->
```

定义了书签后，链接到该书签的超链接的基本语法为：

```html
<a href="#书签名称">链接点</a>
```

### span标签

如果不对 `<span>` 应用样式，那么 `<span>` 元素中的文本与其他文本不会任何视觉上的差异。使用`<span>`可以对包裹的文本设置独立的样式

基本语法：

```html
<span>选中的文本</span>
```

示例代码：

```html
<body>
  <span style="color: blue"我span>们
</body>
```

### strong标签

`<strong>` 标签是一个短语标签，用来定义重要的文本。

在 HTML 中，短语标签是专用标签，用于指示文本块具有结构意义，执行与文本格式标签类似的特定操作。在开发的过程中并不反对使用这个标签，但如果只是为了达到某种视觉效果而使用这个标签的话，**强烈建议使用 CSS** ，这样可能会取得更丰富的效果。

基本语法：

```html
<strong>重要的文本</strong>
```

所有短语标签：

| 标签       | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| `<em>`     | 呈现为被强调的文本。                                         |
| `<strong>` | 定义重要的文本。                                             |
| `<dfn>`    | 定义一个定义项目。                                           |
| `<code>`   | 定义计算机代码文本。                                         |
| `<samp>`   | 定义样本文本。                                               |
| `<kbd>`    | 定义键盘文本。它表示文本是从键盘上键入的。它经常用在与计算机相关的文档或手册中。 |
| `<var>`    | 定义变量。您可以将此标签与 `<pre>` 及 `<code>` 标签配合使用。 |

### img标签

在 HTML 文档中，插入图像的标签只有一个，即 `<img>` 标签，它负责向页面中嵌入一幅图像。准确来讲，`<img>` 标签并不会在页面中真正插入图像，而只是提供了一个链接地址，链接显示出图像。所以说，`<img>` 标签创建的是被引用图像的占位空间。

基本语法：

```html
<img src="图像 URL" alt="图像描述" />
```

基本语法中只列出了 `<img>` 标签的两个重要属性：src 属性和 alt 属性，其中 src 属性定义了图像的链接地址（通常会把图像文件存放在一个单独的目录中，并将这个目录命名为 pics 或者 images 之类的名称），而 alt 属性则当图像无法显示时，替代显示的文本。

alt的设置也利于seo

对于 `<img>` 图像标签还有一些其他可选的属性，例如 width 属性和 height 属性。下表列出了属性名、可取值及简单描述。

| 属 性  | 可 取 值                         | 描 述                                                        |
| ------ | -------------------------------- | ------------------------------------------------------------ |
| align  | top、bottom、middle、left、right | <img> 标签的 align 属性定义了图像相对于周围元素的水平和垂直对齐方式。尤其需要注意的是，<img> 标签的 align 属性是一个表示相对位置的属性，是表示图像相对于图像周围元素的位置关系，不是图像本身绝对的对齐方式。 |
| width  | pixels、%                        | 前面已经说过，在页面中插入图像实际插入的是链接地址，浏览器通过这个链接地址找到并显示图像。浏览器在加载页面图像时，如果这个图像有 width 和 height 属性，则会按这两个属性值为该图像预留空间，等待链接显示出图像。 |
| height | pixels、%                        | 另外，如果图像实际的大小和 `<img>` 图像标签 width 和 height 属性的大小不一致，则会将实际图像进行缩放，以适合图像标签 width 和 height 属性大小的要求。这里需要注意的是，如果要在页面显示清晰度要求不高的小图，而原图是像素高、质量好的大图时，应事先对原图像进行处理，避免出现用户浏览器下载大图（流量大，下载速度慢）显示小图的情况。 |
| border | pixels                           | 定义图像周围的边框，默认为无边框                             |



## HTML表格标签

表格是行和列排列而成的结构，常用来组织和展现数据。下图展示了一个表格的基本形态，并对表格的常用元素给出了标注。

![ygYRDJb1ZqXftTv](https://gitee.com/Dye/statics/raw/master/img/202201022150818.png)

一般而言，表格中除了表格标题外，通常还包含如图所示的其他三类元素。其中，单元格是表格的最小单位，多个单元格的纵横排列形成了表格，由一个或多个单元格的横向排列形成了行，纵向排列则形成了列。

对应于 HTML 文档，一个表格由表格标签 `<table>`、表格行标签 `<tr>`、单元格标签 `<td>` 组成，还可以包括标题标签 `<caption>`、列标题标签 `<th>`，通过这些标签能构建起 HTML 中的表格。

一个表格由三个必备元素构成，依次是 table 表格元素、tr 行元素和 td、th 单元格元素，元素是由相应的标签和内容组成的。下表是对以上各个标签分别作了说明。

| 标签    | 说明                                                         | 选项 |
| ------- | ------------------------------------------------------------ | ---- |
| table   | table 元素用来定义表格，整个表格内容都包含在 `<table>` 和 `</table>` 标签之中。 | 必选 |
| tr      | tr 元素用来定义表格中的一行，它是单元格的容器，每行可以包含多个单元格，由 `<tr>` 和 `</tr>` 标签表示。 | 必选 |
| td      | td 代表一个单元格，所有单元格都在 tr 元素内，每个单元格都由一对 `<td>` 和 `</td>` 标签。 | 必选 |
| th      | th 也代表一个单元格，同时也表示该表格的表头。每个单元格都由一对 `<th>` 和 `</th>` 标签。 | 可选 |
| caption | caption 代表为该表格的表格标题，位于 table 中的第一行。      | 可选 |

基本语法：

```html
<table>
  <caption>
    表格标题
  </caption>
  <tr>
    <th>1列表头</th>
    <th>2列表头</th>
    …
  </tr>
  <tr>
    <td>1行1列的内容</td>
    <td>1行2列的内容</td>
    …
  </tr>
  <tr>
    <td>2行1列的内容</td>
    <td>2行2列的内容</td>
    …
  </tr>
  …
</table>
```

示例代码：

```html
<table border="1">
  <caption>
    一、二季度小说类图书销售情况
  </caption>
  <tr>
    <th>一季度销售量</th>
    <th>一季度销售额</th>
    <th>二季度销售量</th>
    <th>二季度销售额</th>
  </tr>
  <tr>
    <td>23521</td>
    <td>￥559,940.00</td>
    <td>18423</td>
    <td>￥44,841.00</td>
  </tr>
</table>
```

显示效果：

![pwUOvDms14TNx9g](https://gitee.com/Dye/statics/raw/master/img/202201022151174.png)

### 表格标签属性

#### table 标签属性

| 属性        | 可取值              | 描述                                             |
| ----------- | ------------------- | ------------------------------------------------ |
| align       | left、center、right | 定义表格相对周围元素的对齐方式                   |
| border      | pixels              | 定义表格边框的宽度                               |
| width       | pixels、%           | 定义表格的宽度                                   |
| bordercolor | 颜色的表示方法      | 定义表格边框的颜色                               |
| bgcolor     | 颜色的表示方法      | 定义表格的背景颜色                               |
| background  | URL                 | 定义表格背景图像                                 |
| cellspacing | >0  =0会重合        | 表示各单元格之间的空隙                           |
| cellpadding | >0                  | 表示单元格内容与单元格边界之间的距离，类似内边距 |

下面通过一个简单的例子，演示设置 `<table>` 标签 align、border、width 这三个属性的作用。

```html
<table align="left" border="4" width="600">
  <caption>
    一、二季度小说类图书销售情况
  </caption>
  …
</table>
```

显示效果：

![aWfgAqjYCUF7uMO](https://gitee.com/Dye/statics/raw/master/img/202201022151598.png)

#### tr标签属性

tr 元素可包含一个或多个 th 或 td 元素。

| 属 性   | 可 取 值                                  | 描 述                                                        |
| ------- | ----------------------------------------- | ------------------------------------------------------------ |
| align   | right、left、center、justify              | 定义表格行中内容的水平对齐方式，其中justify是对行进行伸展，这样每行都可以有相等的长度（就像在报纸和杂志中）。 |
| valign  | top、middle、bottom、baseline（基线对齐） | 定义表格行中内容的垂直对齐方式                               |
| bgcolor | 颜色的表示方法                            | 定义表格行的背景颜色                                         |

valign 属性有四个可取值，每个可取值的含义及示意图如下表：

| 值       | 描 述                        | 示 意 图                                                     |
| -------- | ---------------------------- | ------------------------------------------------------------ |
| top      | 对内容进行上对齐             | ![baTqOFtd3HfRP8I](https://gitee.com/Dye/statics/raw/master/img/202201022152998.png) |
| middle   | 对内容进行居中对齐（默认值） | ![6cNOLIF8ZDQiV31](https://gitee.com/Dye/statics/raw/master/img/202201022152482.png) |
| bottom   | 对内容进行下对齐             | ![KQYDm7FbqGplBZM](https://gitee.com/Dye/statics/raw/master/img/202201022152143.png) |
| baseline | 与基线对齐                   | ![yzrVnp6I9vJMQl4](https://gitee.com/Dye/statics/raw/master/img/202201022152195.png) |

#### td标签属性

td 元素中的文本一般显示为正常字体且左对齐。

| 属 性   | 可 取 值                      | 描 述                          |
| ------- | ----------------------------- | ------------------------------ |
| align   | left、right、center、justify  | 定义单元格中内容的水平对齐方式 |
| valign  | top、middle、bottom、baseline | 定义单元格中内容的垂直对齐方式 |
| bgcolor | 颜色的表示方法                | 定义单元格的背景颜色           |
| height  | pixels、%                     | 定义单元格的高度               |
| width   | pixels、%                     | 定义单元格的宽度               |
| colspan | number                        | 定义单元格可横跨的列数         |
| rowspan | number                        | 定义单元格可纵跨的行数         |
| nowrap  | nowrap                        | 定义单元格中的内容是否折行     |

单元格跨行跨列的基本语法：

```html
<td colspan="所跨列数">单元格内容</td>
<td rowspan="所跨行数">单元格内容</td>
```

示例代码：

```html
<table width="800" border="1" cellspacing="1" cellpadding="1">
  <tr>
    <td colspan="9" align="center">2020年度图书销售统计</td>
  </tr>
  <tr>
    <td rowspan="2" align="center">图书分类</td>
    <td colspan="2">一季度</td>
    <td colspan="2">二季度</td>
    <td colspan="2">三季度</td>
    <td colspan="2">四季度</td>
  </tr>
  <tr>
    <th width="60">销售量</th>
    <th width="80">销售额</th>
    <th width="60">销售量</th>
    <th width="80">销售额</th>
    <th width="60">销售量</th>
    <th width="80">销售额</th>
    <th width="60">销售量</th>
    <th width="80">销售额</th>
  </tr>
  <tr>
    <td align="center">小说</td>
    <td align="center">23521</td>
    <td align="center">￥559,940.00</td>
    <td align="center">18423</td>
    <td align="center">￥44,841.00</td>
    <td align="center">32125</td>
    <td align="center">￥829,870.00</td>
    <td align="center">25188</td>
    <td align="center">￥586,564.00</td>
  </tr>
  …
</table>
```

显示效果：

![xZnhRBv6iuPjgr5](https://gitee.com/Dye/statics/raw/master/img/202201022152776.png)

万维网联盟 W3C 推荐用 `<div>` 元素和 CSS 来进行布局，而不是用表格进行页面布局，因为 table 元素本来的目的就是显示数据。

当然肯定还有一些僵尸网站仍然使用table布局

示例代码：

```html
<table width="800" border="0">
  <tr>
    <td colspan="2" height="40" bgcolor="#DDDDDD"><h3>区域1</h3></td>
  </tr>
  <tr>
    <td height="160" width="300" bgcolor="#BBBBBB"><h3>区域2</h3></td>
    <td rowspan="2" bgcolor="#999999"><h3>区域3</h3></td>
  </tr>
  <tr>
    <td height="240" bgcolor="#BBBBBB"><h3>区域4</h3></td>
  </tr>
</table>
```

显示效果：

![WJ9R2SKAkogxGfI](https://gitee.com/Dye/statics/raw/master/img/202201022152959.png)

技巧：

`<tr align="center">`能代替n个`<td align="center">`

```html
<table border="1" width="60%"  cellpadding="2">
      <caption>
        课程表
      </caption>
      <tr align="center">
        <td colspan="2">时间\日期</td>
        <td>一</td>
        <td>二</td>
        <td>三</td>
        <td>四</td>
        <td>五</td>
      </tr>

      <tr align="center">
        <td rowspan="2">上午</td>
        <td>9:30-10:15</td>
        <td>语文</td>
        <td>数学</td>
        <td>外语</td>
        <td>音乐</td>
        <td>体育</td>
      </tr>

      <tr align="center">
        <td>10:25-11:10</td>
        <td>数学</td>
        <td>数学</td>
        <td>物理</td>
        <td>化学</td>
        <td>生物</td>
      </tr>

      <tr>
        <td colspan="7">&nbsp;</td>
      </tr>

      <tr align="center">
        <td rowspan="2">下午</td>
        <td>14:30-15:15</td>
        <td>体育</td>
        <td>语文</td>
        <td>历史</td>
        <td>政治</td>
        <td>化学</td>
      </tr>

      <tr align="center">
        <td>15:25-16:10</td>
        <td>音乐</td>
        <td>语文</td>
        <td>数学</td>
        <td>美术</td>
        <td>语文</td>
      </tr>
    </table>
```

效果：

![xYQf8e9AVnGHykO](https://gitee.com/Dye/statics/raw/master/img/202201022153783.png)

`<td colspan="7">&nbsp;</td>`效果与`<td colspan="7" height="20"></td>`一样

![vBu2aeoTMzVWFNS](https://gitee.com/Dye/statics/raw/master/img/202201022153560.png)

如果是

`<td colspan="7"></td>`

![wa9jmO7I8u3FioS](https://gitee.com/Dye/statics/raw/master/img/202201022153746.png)

高度变矮了，所以`&nbsq;`还能增开

![jSt6pm7uoIa935y](https://gitee.com/Dye/statics/raw/master/img/202201022153311.png)

## HTML表单标签

| 项 目            | 表单元素   | 图 例                                                        |
| ---------------- | ---------- | ------------------------------------------------------------ |
| 用户名、注册邮箱 | 单行文本框 | ![image-20200613191827889](https://gitee.com/Dye/statics/raw/master/img/202201022154057.png) |
| 密码             | 密码框     | ![img](https://gitee.com/Dye/statics/raw/master/img/202201022154587.png) |
| 性别             | 单选按钮   | ![img](https://gitee.com/Dye/statics/raw/master/img/202201022154549.png) |
| 出生年月         | 下拉列表框 | ![img](https://gitee.com/Dye/statics/raw/master/img/202201022154111.png) |
| 兴趣             | 复选框     | ![img](https://gitee.com/Dye/statics/raw/master/img/202201022141064.png) |
| 个人简介         | 多行文本域 | ![img](https://gitee.com/Dye/statics/raw/master/img/202201022138958.png) |
| 头像             | 文件上传   | ![img](https://gitee.com/Dye/statics/raw/master/img/202201022154159.png) |
| 免费注册         | 提交按钮   | ![image-20200613192316167](https://s2.loli.net/2022/01/01/8wIbDsGaLMO7d6o.png) |

基本语法：

```html
<form action="表单提交地址" method="提交方法">…</form>
```

现在的时代已经不使用这样的方法了，大多通过ajax的方式。

基本语法中的 `action` 属性（表单提交地址）就是这个指定位置。如若不填，则默认用当前页面进行处理，但不建议这么做。

method 属性规定了表单提交方式，最常用的有两种方式，分别是 `GET` 和 `POST`。其中 `GET` 是把表单中的参数放置在 HTTP 请求的头部发送给服务器，而 `POST` 是将请求参数置于请求体内发送。

除了基本语法中提交的 action 属性和 method 属性外，下表还列出了 form 元素的其他属性：

| 属 性          | 可 取 值                              | 描 述                                            | 示 例                          |
| -------------- | ------------------------------------- | ------------------------------------------------ | ------------------------------ |
| accept         | mime_type                             | 规定能够通过文件上传进行提交的文件类型           | accept="image/gif, image/jpeg" |
| accept-charset | charset                               | 规定服务器处理表单数据所接受的字符集             | accept-charset="UTF-8"         |
| enctype        | mime_type                             | 规定在发送到服务器之前应该如何对表单数据进行编码 | enctype="text/plain"           |
| name           | name                                  | 定义表单的名称                                   | name="divForm"                 |
| target         | blank、parent、 self、top、 framename | 定义在何处打开 action URL                        | target="_blank"                |

### input元素

input 元素基本语法：

```html
<input type="元素类型" name="表单元素名称" />
```

input 的常用属性如下表：

| 属 性            | 可 取 值                                                     | 描 述                                                        |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| type             | text、password、radio、checkbox、file、submit、reset、button、hidden、image | 定义 input 元素的类型                                        |
| name             | name                                                         | 定义 input 元素的名称                                        |
| value            | value                                                        | 定义 input 元素的值                                          |
| accept           | mime_type                                                    | 仅在文件上传中使用 accept 属性，规定能够通过文件上传进行提交的文件类型 |
| **align**        | **left、right、top、middle、bottom**                         | **仅能对图像类型使用 align 属性，定义图像的对齐方式**        |
| **alt**          | **text**                                                     | **仅能对图像类型使用 alt 属性，定义图像输入的替代文本**      |
| **src**          | **URL**                                                      | **仅能对图像类型使用 src 属性，规定图像的 URL**              |
| **checked**      | **checked**                                                  | **仅能对单选按钮或复选框使用 checked 属性，定义此 input 元素是否默认被选中** |
| disabled         | disabled                                                     | 禁用此 input 元素                                            |
| <u>size</u>      | <u>number</u>                                                | <u>定义 input 元素的宽度</u>                                 |
| <u>maxlength</u> | <u>number</u>                                                | <u>定义输入字段中字符的最大长度（注意和 size 的区别）</u>    |
| readonly         | readonly                                                     | 规定输入字段为只读                                           |

#### 文本类表单元素

以文本框为代表的表单元素称之为文本类元素。示例如下：

```html
<form action="" method="post">
  <p>
    &nbsp;用户名：<input type="text" name="name" size="22" maxlength="16" />
  </p>
  <p>&nbsp;密&nbsp;&nbsp;码：<input type="password" name="pass" size="22" /></p>
  <p>
    <input type="submit" name="submit" value="登录" />
    <input type="reset" name="reset" value="重置" />
    <input type="button" name="exit" value="退出" disabled="disabled" />
  </p>
</form>
```

#### 选择类表单元素

选择类表单元素只要是指单选框和复选框。使用选择类元素需要注意两点：

- 使用相同的 name 属性来控制分组操作。
- value 属性为提交值，显示值为标签后紧跟的内容。

示例代码：

```html
<form action="" method="post">
  性别：<input type="radio" name="sex" value="man" />男
  <input type="radio" name="sex" value="woman" />女 <br />
  爱好：<input type="checkbox" name="hobby" value="basketball" />篮球
  <input type="checkbox" name="hobby" value="football" />足球
</form>
```

#### 其他表单元素

input 元素中有几个特殊的元素和其他元素的使用不同。这里例举两个常用的文件上传元素和隐藏元素。

- 文件上传：文件需要以流的形式上传，所以在表单 form 中需要设置上传方式 enctype。
- 隐藏元素：该元素同文本类元素使用方法一致，区别在于该元素无法在文档中显示。

示例代码：

```html
<form action="xxxx" method="post" enctype="multipart/form-data">
  <p><input type="file" name="img" accept="image/gif, image/jpeg" /></p>
  <p><input type="hidden" name="imgdesc" value="bug截图" /></p>
  <p><input type="submit" name="upload" value="上传" /></p>
</form>
```

### 非 input 元素

在表单中，有两个常用的表单元素不属于 input 元素，它们分别是下拉列表框（`<select>` 和 `<option>` 标签实现）和多行文本域（`<textarea>` 标签实现）

#### 下拉列表框

下拉列表框通过 `<select>` 和 `<option>` 标签实现，`<select>` 标签用于显示可供用户选择的下拉列表，其中的每个选项都由 `<option>` 标签标识。

下拉列表框中的内容可以单选或多选，当用户提交表单时，浏览器会将选定的项目合成一个单独的参数列表，随同 `<select>` 标签的 name 属性提交给服务器。

示例代码：

```html
<html>
  <body>
    <h3>请提交就业相关信息</h3>
    <form>
      <p>
        学历：
        <select name="edu">
          <option value="0">初中</option>
          <option value="1">高中</option>
          <option value="2">大专</option>
          <option value="3" selected="selected">本科</option>
          <option value="4">硕士</option>
          <option value="5">博士</option>
          <option value="6">其他</option>
        </select>
        就业城市：
        <select name="city" multiple="multiple">
          <option value="A" selected="selected">北京</option>
          <option value="B">上海</option>
          <option value="C">深圳</option>
          <option value="D">广州</option>
          <option value="E">其他</option>
        </select>
      </p>
      <p><input type="submit" name="submit" value="提交" /></p>
    </form>
  </body>
</html>
```

显示效果：

![img](https://gitee.com/Dye/statics/raw/master/img/202201022205504.png)

#### 多行文本域

多行文本域用于显示或输入多行的文本，通过 `<textarea>` 标签来实现。在文本域内可容纳无限数量的文本，通过 cols 和 rows 属性来规定 textarea 元素的尺寸，其中 cols 属性定义了文本域内的可见列数，rows 属性定义了可见行数。

示例代码：

```html
<html>
  <body>
    <form action="xxxx" method="post">
      <h3>淘宝服务协议</h3>
      <textarea name="content" cols="30" rows="6" readonly="readonly">
          本协议由您与淘宝平台的经营者共同缔结，本协议具有合同效力…
      </textarea>
      <p><input type="button" name="agree" value="同意" /></p>
    </form>
  </body>
</html>
```

显示效果：

![img](https://gitee.com/Dye/statics/raw/master/img/202201022205054.png)

## HTML框架标签

> 现在呈现给最终用户的网页很少再使用框架技术啦



使用框架可以把浏览器窗口划分为多个区域，每个区域显示不同的页面，每次用户在访问框架页面时，只下载框架页面中变化的区域，对于不变的区域（例如顶部和底部）不用重新下载，从而节省了流量，有利于用户体验。

框架主要包括两个部分，框架集和框架。框架集（`frameset`）是一个页面文件，它的目的是将浏览器窗口划分成多个子窗口（或称框架），而框架是通过框架集划分出来的一个区域，用于显示与浏览器窗口其余框架无关的独立页面。

框架集页面的结构是通过属性 `rows` 和 `cols` 来设置的，根据框架的分割方式可分为上下分割窗口（`rows`），左右分割窗口（`cols`），嵌套分割窗口（`rows+cols`）。

基本语法：

```html
<frameset rows="行数列表" cols="列数列表">
  <frame src="html文件">
  <frame src="html文件">
  …
</frameset>
```

例如，我们创建四个 .html 文件，分别为 f1.html、f2.html、f3.html、f4.html：

```html
<!--f1.html-->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body>
    <p>f1框架页面</p>
  </body>
</html>
<!--f2.html-->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body>
    <p>f2框架页面</p>
  </body>
</html>
<!--f3.html-->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body>
    <p>f3框架页面</p>
  </body>
</html>
<!--f4.html-->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body>
    <p>f4框架页面</p>
  </body>
</html>
```

然后创建一个 index.html 文件，写入以下代码：

```html
<!--index.html-->
<html>
<frameset rows="20%,*,20%">
    <frame src="f1.html">
    <frameset cols="240px,*">
        <frame src="f2.html">
        <frame src="f3.html">
    </frameset>
    <frame src="f4.html">
</frameset>
</html>
```

> 注意：使用框架的时候不需要 `<head>` `<body>` 标签。

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201022241297.png)

`<frameset rows="20%,*,20%">`说明上下3行，第一行和最后一行占20%，中间的自适应

`<frameset cols="240px,*">`说明左右2列，第一列240px

### 内嵌框架

 iframe 内嵌框架，它更适用于将一个页面内嵌到另一个页面中。在日常开发中的使用比 frameset 框架更常用。

部分常用属性：

| 属 性       | 可 取 值      | 描 述                      |
| ----------- | ------------- | -------------------------- |
| frameborder | 0、1          | 规定是否显示框架周围的边框 |
| height      | pixels        | 定义框架高度               |
| width       | pixels        | 定义框架宽度               |
| name        | 自定义        | 框架名，用于超链接操作。   |
| scrolling   | yes、no、auto | 规定是否在框架中显示滚动条 |
| src         | 引用页面地址  | 内嵌页面地址。             |

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201022244089.png)

