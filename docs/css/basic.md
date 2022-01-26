

# css

## 在页面中使用css

### **1．外部样式表**

所谓外部样式表，就是将样式表保存成一个独立的 CSS 样式表文件，当编写的 HTML 文档要使用这个 CSS 文件时，可使用 `<link>` 标签将该样式表引入到 HTML 文档中。

```html
<link rel="stylesheet" type="text/css" href="css/myStyle.css" />
```

### **2．内部样式表**

如果设计的样式规则只需要在一个 HTML 文档中起作用，则可以采用内部样式表。所谓内部样式表，就是将组成该样式表的样式规则都放在 HTML 文档头部，而不使用 `<link>` 标签进行链接。

```html
<head>
  <style>
    body {
      font-family: Verdana, sans-serif;
    }
    p {
      margin-left: 20px;
    }
  </style>
</head>
```

### **3．内联样式**

内联样式又将内容和样式混合了起来，失去了 CSS 样式表的灵活性和复用性，不推荐使用。

使用内联样式，需要在相关的标签内使用 style 属性，然后再在 style 属性里包含 CSS 属性名和属性值。接下来的 HTML 代码就在 `<p>` 标签中使用了内联样式。

```html
<p style="margin-left: 20px">我在使用内联样式设置段落的左边距为20px。</p>
```

> 总结：样式选择优先级：内联样式>内部样式>外联样式。就近原则



推荐外部样式表，能够内容与样式进行分离。



## CSS如何工作的

![image-20220115145250573](https://gitee.com/Dye/statics/raw/master/img/202201151452636.png)

## css语法

CSS 使用 `<style>` 标签来声明样式规则，`<style>` 和 `</style>` 标签之间的所有内容都是样式规则。通过这些样式规则，确定使用该 CSS 样式表中指定样式规则的 HTML 文档元素，如何显示元素内容。

基本语法：

```html
<style type="text/css">
  选择器{
      对象的样式1: 样式值1;
      对象的样式2: 样式值2;
          …
   }
    …
</style>
```

CSS 样式表可以包含多个样式规则，一个样式规则主要由两部分组成，分别是选择器及选择器内的一行或多行声明，每个声明里又包含对象的属性和属性值。

其中，选择器可以是需要设置样式的 HTML 元素，比如表格的标题，而每行声明是需要设置的样式属性和属性值，例如颜色是红色。声明之间用分号分开，属性和属性值之间用冒号分开。例如下面样式表的作用就是将段落内的文字设置为居中、蓝色，大小为 16。

```html
<style type="text/css">
  p {
    text-align: center;
    color: blue;
    font-size: 16px;
  }
</style>
```

需要注意的是，CSS 对大小写不敏感，且忽略空格。

### 继承

在 CSS 中，子元素会从父元素**继承**属性。如果已经将 body 元素里的字体都设置为宋体，那么 body 元素下的其他子元素（例如 p、ul、ol、li、td 等）将继承此属性，也将字体设置为宋体。但是在这些子元素中，如果希望表格中单元格的字体为隶书，则可以单独给 td 元素设置字体，具体代码如下：

```css
body {
  font-family: 宋体;
}
td {
  font-family: 隶书;
}
```

### 显示继承

```css
{
    属性:inherit;
}
```

### 初始值

css中，每个属性都有一个初始值，可以使用initial关键字显示重置为初始值

## 选择器

### 通配选择器

*代表全部

```css
* {
    
}
```

### 标签选择器

```css
body {
    background-color: #000000;
    color: yellow;
}
h1 {
    text-align: center;
}
```

### 类选择器

在定义类选择器时，需要用点号和类名来定义，而在使用该类选择器时，需要在使用该类选择器的元素标签中，增加 class="类名"的属性（不包括点号），表示该标签使用了指定的类选择器。

```css
.center {
    color: red;
}
```

### id 选择器

在一个 HTML 文档中，可以为 HTML 元素指定一个 id 作为这个元素的唯一标识。W3C 已将 id 属性定为 HTML 元素的标准属性，id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。

在定义 id 选择器时，需要用 “#” 号和 id 名来定义选择器，而在使用该 id 选择器时，需要在 HTML 标签元素中，增加 id="id 名"的属性（不包括 “#” 号），指定这个 HTML 元素的 id，这个 id 在 HTML 文档中是唯一的。

从上面的描述中可以看出，id 选择器和类选择器有明显的区别，id 选择器用于修饰**某个指定**的 HTML 元素，而类选择器定义的样式可以为 HTML 文档中**多个元素共享**，能够实现样式的复用。需要补充的一点是，id 选择器和类选择器一样，可以被用作派生选择器。

```css
#wenyi {
    font-family: 隶书;
    font-size: 12px;
    background: #dddddd;
}
```

### 属性选择器

```css
[属性] {
    
}
[属性="特定值"]{
    
}
/*匹配符*/
a[href^="#"]{
    /*匹配开头*/
}
a[href$="#"]{
    /*匹配结尾*/
}
```

例如，给disabled的添加样式

```css
[disabled]{
    ....
}
```

### 组合

| 名称       | 语法 | 说明                          | 示例          |
| ---------- | ---- | ----------------------------- | ------------- |
| 直接组合   | AB   | 满足A同时满足B                | `input:focus` |
| 后代组合   | A B  | 选中B，如果它是A的子孙        | `nav a`       |
| 亲子组合   | A>B  | 选中B，如果它是A的子元素      | `section>p`   |
| 兄弟选择器 | A~B  | 选中B，如果它是A的后且和A同级 | `h2~p`        |
| 相邻选择器 | A+B  | 选中B，如果它紧跟A后面        | `h2+p`        |

### 伪类

#### 状态伪类

见底下的css链接

#### 结构伪类

```css
li:first-child{
    /*li是父级的第一个元素*/
}
li:last-child{
    /*li是父级的最后一个元素*/
}
```

还有偶数个，奇数个等等

### 选择器组

**如果属性值是由多个单词组成的词组表达一个具体的含义时，则需要给这个词组加上双引号**，例如 font-family: "Times New Roman"。

多个选择器直接用,

例如：

```html
h1,
h2,
h3,
h4,
h5,
h6 {
  color: red;
}
```

### 优先级

一等：代表内联样式，如: style=””，权值为1000；

二等：代表ID选择器，如：#content，权值为100；

三等：代表类，伪类和属性选择器，如.content，权值为10；

四等：代表类型选择器和伪元素选择器，如div p，权值为1；

注意：通用选择器（*），子选择器（>）和相邻同胞选择器（+）并不在这四个等级中，所以他们的权值都为0。

继承的样式没有权值



将高权重的覆盖低权重



## 颜色

>  RGB

(0-255)

+ R 红
+ G 绿
+ B 蓝

也可以转成十六进制

#fff

>  HSL

- 色相(H) 0-360

- 饱和度(S) 0-100%

- 亮度(L) 0-100%

> 关键字

200+，比如red，gold

> alpha透明度(0-1)

就有了rgba，hsla

## CSS常用样式

### CSS 背景

背景属性用于定义 HTML 元素的背景色、背景图片，同时还可以进行背景定位、背景图片重复、背景图片固定。下表列出了常用背景属性和简单描述，接下来讲解部分属性。

| 属 性                 | 描 述                                        |
| --------------------- | -------------------------------------------- |
| background            | 在一个声明中设置所有的背景属性               |
| background-color      | 设置背景颜色                                 |
| background-image      | 设置背景图像                                 |
| background-position   | 设置背景图像的起始位置                       |
| background-repeat     | 设置背景图像是否平铺                         |
| background-attachment | 设置背景图像是否固定或随着页面的其余部分滚动 |

#### background-color 属性

需要注意的是，background-color 属性不能被继承，其默认值为 transparent ，就是透明的意思。也就是说，即使 body 元素设置了背景色为黑色，那么 body 元素下的子元素也不会继承这个背景色的属性。

#### background-image 属性

background-image 属性可以把图像插入背景。可以通过对 `<body>` 标签设置 background 属性，完成了如下图所示的增加背景图片的效果

#### background-position 属性

设置 background-position 属性值有很多方法。可以使用一些关键字，例如 top、bottom、left、right 和 center，还可以使用长度值，如 200px 或 10cm，也可以使用百分数值。

`background-position: center;`其作用就是居中

`background-position: 100px 80px;`其作用将图像设置在页面内距离左上角水平 100px，垂直 80px 的位置上

#### background-repeat 属性

如果需要在页面中对背景图像进行平铺，可以使用 background-repeat 属性。默认情况下，背景图像将在水平和垂直方向上进行平铺。下表列出了 background-repeat 属性的一些可取值以及每个可取值的含义。

| 可 取 值  | 描 述                                             |
| --------- | ------------------------------------------------- |
| repeat    | 背景图像将在垂直方向和水平方向重复（默认值）      |
| repeat-x  | 背景图像将在水平方向重复                          |
| repeat-y  | 背景图像将在垂直方向重复                          |
| no-repeat | 背景图像将仅显示一次                              |
| inherit   | 规定应该从父元素继承 background-repeat 属性的设置 |

#### background-attachment 属性

通过对 `<body>` 标签设置 bgproperties 属性，实现了页面内容较长，当拖动浏览器滚动条时，背景不动，只滚动内容的效果，具体代码如下：

```html
<body background="img_URL" bgproperties="fixed"></body>
```

也可以在 CSS 中通过设置 background-attachment 属性达到这样的目的

background-attachment 属性的默认值是 scroll，也就是说，在默认的情况下，背景会随页面内容滚动。

#### background 属性

上面列出的属性都可以设置其中，中间用空格隔开。

### CSS 文本

下表列出了常用文本属性、可取值及简单描述。

| 属 性           | 可 取 值                                                | 描 述            |
| --------------- | ------------------------------------------------------- | ---------------- |
| direction       | ltr、rtl、inherit                                       | 设置文本方向     |
| line-height     | normal、number、length、%、inherit                      | 设置行高         |
| text-indent     | length、%、inherit                                      | 设置文本缩进     |
| text-align      | left、right、center、justify、inherit                   | 设置对齐方式     |
| letter-spacing  | normal、length、inherit                                 | 设置字符间距     |
| word-spacing    | normal、length、inherit                                 | 设置字间距       |
| text-transform  | none、uppercase、lowercase、capitalize、inherit         | 处理文本大小写   |
| text-decoration | none、underline、overline、line-through、blink、inherit | 设置文本修饰     |
| white-space     | normal、pre、nowrap、pre-wrap、pre-line、inherit        | 规定如何处理空白 |

#### line-height

浏览器默认的line-height为1.2

通常撑起的高度就是由行高起来的，而不是height

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201151410020.png)

图中两条红线之间的距离就是**行高**（line-height），上一行的底线和下一行的顶线之间的距离就是**行距**，而同一行顶线和底线之间的距离是**font-size**的大小，行距的一半是**半行距**，半行距、font-size、line-height之间的关系看图片的右下角就一目了然了~

```arduino
半行距 = （line-height - font-size）/2
```

当然，半行距也可能为负值（当line-height < font-size），这时候两行之间就会重叠

```css
p {
    font-size:20px;
    line-height:1.6; // 1.6*20 = 32px
}
```

有一句话叫line-height与height一样能够垂直居中，这怎么理解呢？

比如说，有一行20px大小的文字，如果设置为line-height:50px，那就是说，这行文字的高度会占50px。

显然，每个字的大小只有20px，那怎么办呢？于是呢，浏览器就把多出来的30px（50px-20px）在这行文字的上面加上了15px(上下编边距)，下面加上了15px。

这样的话，那文字就在这50px的空间内是居中的了（这个就是浏览器规定的，它就这个分配空间）。

如果你的DIV是50px，那么巧了，正好这行文字也就相对于DIV居中了。

好，行高与高度不能搞混，两个独立的空间，

接下来，如果行高>高度，例如说明这个文字应该在100px空间是居中的，而现在只有50px，在页面里，都是从上至下堆叠的，因此

顶部靠齐。

![image-20220115144722288](https://gitee.com/Dye/statics/raw/master/img/202201151447366.png)

当行高小于高度时，文字会偏上

当行高大于高度时，文字会偏下

#### text-align

justify属性值，对非最后一行生效

#### white-space

默认，多个空格会合并一个

`pre`保留了空格换行

`pre-wrap`一行内能显示，就不换行

`pre-line`合并空格，该有的换行还是有的

### CSS 字体

| 属 性        | 可 取 值                                                     | 描 述                              |
| ------------ | ------------------------------------------------------------ | ---------------------------------- |
| font         | font-style、font-variant、font-weight、font-size**（或 line-height）**、font-family | 在一个声明中设置所有的字体属性     |
| font-family  | 字体名称、inherit                                            | 设置字体类型                       |
| font-size    | xx-small、x-small、small、medium（默认）、large、x-large、xx-large smaller、larger length、%、inherit | 设置字体大小                       |
| font-weight  | normal（默认）、bold、bolder、lighter、inherit 100、200...900（400=normal，700=bold） | 设置字体粗细，还需要字体支持       |
| font-variant | normal、small-caps、inherit                                  | 以小型大写字体或者正常字体显示文本 |
| font-style   | normal、italic、oblique、inherit                             | 设置字体风格                       |

#### font-family建议

1. 还得在电脑安装了该字体，才能显示;
2. 如果值有多个用`,`分割的字体，从第一个开始找存在在电脑或者相似的
3. 字体列表最后写上通用字体族
4. 英文字体放在中文字体前面(中文字体里面可能包含了英文字体)

##### 通用字体族

- serif带衬线字体，笔画结尾有特殊的装饰线或衬线。

> 例如：Lucida Bright,Lucida Fax,Palatino,"Palatino Linotype",Palladio,"URW Palladio",serif.

- sans-serif无衬线字体，即笔画结尾是平滑的字体。

> 例如，"Open Sans","Fira Sans","Lucida Sans","Lucida Sans Unicode","Trebuchet MS","Liberation Sans","Nimbus Sans L",sans-serif.

- monospace等宽字体，即字体中每个字宽度相同。

> 例如，"Fira Mono","DejaVu Sans Mono",Menlo,Consolas,"Liberation Mono",Monaco,"Lucida Console",monospace.

- cursive草书字体。这种字体有的有连笔，有的还有特殊的斜体效果。因为一般这种字体都有一点连笔效果，所以会给人一种手写的感觉。

> 例如，"Brush Script MT","Brush Script Std","Lucida Calligraphy","Lucida Handwriting","Apple Chancery",cursive.

- fantasyFantasy字体主要是那些具有特殊艺术效果的字体。

##### 使用web-font

```css
@font-face {
    font-family:"";
    src:url("") format("")
}
```

#### font-size

- 单位：em,px,%

- em，%要对比父元素的字体大小

### CSS 链接

在 CSS 中，链接有以下四个状态。这四种状态也称之为超链接的伪类。

| 状态      | 效果                     |
| --------- | ------------------------ |
| a:link    | 普通的、未被访问的链接。 |
| a:hover   | 鼠标指针位于链接的上方。 |
| a:active  | 链接被单击的时刻。       |
| a:visited | 用户已访问的链接。       |

讲到伪类，还有一个状态伪类是

```css
:focus {
    
}
```

针对超链接的上述四种状态设置样式规则，能起到美化超链接的作用。例如，为了完成下对超链接的显示要求，编写的 CSS 样式代码如下。

| 状 态    | 颜 色 | 背 景 色 | 文 本 修 饰 |
| -------- | ----- | -------- | ----------- |
| 未访问   | 蓝色  | 无       | 无下画线    |
| 鼠标移到 | 黑色  | #DDDDDD  | 下画线      |
| 正单击   | 红色  | #AAAAAA  | 删除线      |
| 已访问   | 绿色  | 无       | 无下画线    |

示例代码：

```html
<style>
  a:link {
    color: blue;
    text-decoration: none;
  }
  a:hover {
    color: black;
    background-color: #dddddd;
    text-decoration: underline;
  }
  a:active {
    color: red;
    background-color: #aaaaaa;
    text-decoration: line-through;
  }
  a:visited {
    color: green;
    text-decoration: none;
  }
</style>
```

### CSS 列表样式

| 属 性               | 可 取 值                                               | 描 述                          |
| ------------------- | ------------------------------------------------------ | ------------------------------ |
| list-style          | list-style-type、list-style-position、list-style-image | 在一个声明中设置所有的列表属性 |
| list-style-image    | URL、none                                              | 设置图像为列表项标志           |
| list-style-position | inside、outside、inherit                               | 设置列表中列表项标志的位置     |
| list-style-type     | disc（默认）、circle、square、decimal 等               | 设置列表项标志的类型           |

其中，list-style 属性允许在一个声明中设置所有的列表属性，需要注意的是，为该属性设置值需要按照 list-style-type、list-style-position、list-style-image 顺序进行排列，中间用空格隔开

#### **list-style-image 属性**

list-style-image 属性的作用是使用图像来替换列表项的标志。这个属性可以作用于有序列表或无序列表，图像相对于列表项内容的放置位置通常由 list-style-position 属性控制。

#### **float 属性**

假设需要为电子商务网站制作一个顶部导航菜单，共有 5 个菜单项，显示效果如下图所示：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201142153902.png)

示例代码如下：

```html
<html>
  <head>
    <style type="text/css">
      li {
        float: left;
        text-align: center;
        list-style-type: none;
      }
      a {
        float: left;
        width: 120px;
        text-decoration: none;
        color: white;
        background-color: purple;
        padding: 3px 10px;
        border-right: 1px solid white;
      }
      a:hover {
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <ul>
      <li><a href="#">首页</a></li>
      <li><a href="#">用户管理</a></li>
      <li><a href="#">购物车</a></li>
      <li><a href="#">订单</a></li>
      <li><a href="#">退出</a></li>
    </ul>
  </body>
</html>
```

通过阅读代码发现，这个顶部导航菜单是由无序列表完成的。但列表都是纵向排列的，如何实现将列表横向排列呢？使用 float 属性可实现横向排列的效果，但 float 属性并不是列表项特有的属性。float 属性定义元素在哪个方向浮动，此处用该属性的目的是让列表项显示后不换行，也就实现了横向排列。

### CSS 表格样式

CSS 可以通过对表格的样式进行控制，实现对表格的美化操作。表格的常用样式如下表：

| 属性            | 描述                                 |
| --------------- | ------------------------------------ |
| border-collapse | 设置是否把表格边框合并为单一的边框。 |
| border-spacing  | 设置分隔单元格边框的距离。           |
| caption-side    | 设置表格标题的位置。                 |
| empty-cells     | 设置是否显示表格中的空单元格。       |
| table-layout    | 设置显示单元、行和列的算法。         |

#### 表格边框

使用 border 属性设置表格边框的各个属性，包括边框的宽度、样式、颜色等。

示例代码：

```html
<head>
  <meta charset="UTF-8" />
  <style type="text/css">
    table td {
      border: 1px solid blue;
    }
  </style>
</head>
<body>
  <table>
    <tr>
      <td>手机</td>
      <td>价格</td>
    </tr>
    <tr>
      <td>小米</td>
      <td>3000</td>
    </tr>
    <tr>
      <td>苹果</td>
      <td>6000</td>
    </tr>
  </table>
</body>
```

演示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201151535832.png)

可以看到表格的 table 和 td 都有表格的边框。这里的边框有重叠的情况，可以通过折叠边框实现。



#### 折叠边框

border-collapse 属性可以设置是否将表格边框折叠为单一边框，以避免如上图显示的情况。示例代码：

```html
<head>
  <meta charset="UTF-8" />
  <style type="text/css">
    table {
      border-collapse: collapse;
    }
    table td {
      border: 1px solid blue;
    }
  </style>
</head>
<body>
  <table>
    <tr>
      <td>手机</td>
      <td>价格</td>
    </tr>
    <tr>
      <td>小米</td>
      <td>3000</td>
    </tr>
    <tr>
      <td>苹果</td>
      <td>6000</td>
    </tr>
  </table>
</body>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201151537641.png)

#### 宽度高度

表格的宽度和高度也是影响表格效果的主要因素，表格可以通过 width、height 属性来实现控制，属性的值可以通过百分比或者像素来控制表格的尺寸。

示例代码：

```html
<head>
  <meta charset="UTF-8" />
  <style type="text/css">
    table {
      border-collapse: collapse;
      width: 200px;
    }
    table td {
      border: 1px solid blue;
      width: 50%;
      height: 45px;
    }
  </style>
</head>
<body>
  <table>
    <tr>
      <td>手机</td>
      <td>价格</td>
    </tr>
    <tr>
      <td>小米</td>
      <td>3000</td>
    </tr>
    <tr>
      <td>苹果</td>
      <td>6000</td>
    </tr>
  </table>
</body>
```

显示效果：

![img](https://gitee.com/Dye/statics/raw/master/img/202201151537729.png)

#### 文本对齐

表格的文本默认是居左对齐，在某些情况下需要对表格内的文本进行居中等进行样式调整。这时就需要进行文本对齐的属性 text-align 和 vertical-align 来进行控制。

示例代码：

```html
<head>
  <meta charset="UTF-8" />
  <style type="text/css">
    table {
      border-collapse: collapse;
      width: 200px;
    }
    table td {
      border: 1px solid blue;
      width: 50%;
      height: 45px;
    }
    td {
      text-align: center;
      vertical-align: bottom;
    }
  </style>
</head>
<body>
  <table>
    <tr>
      <td>手机</td>
      <td>价格</td>
    </tr>
    <tr>
      <td>小米</td>
      <td>3000</td>
    </tr>
    <tr>
      <td>苹果</td>
      <td>6000</td>
    </tr>
  </table>
</body>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201151538466.png)

## CSS盒子模型

Box 模型，又称盒子模型或框模型，它是实现 DIV+CSS 页面布局的基础。Box 就是用来装 HTML 元素的盒子，Box 模型用于描述一个装有 HTML 元素的矩形盒子。该模型包括边框（border）、内边距（padding）、内容、外边距（margin）、宽和高等属性，下图显示了 Box 模型的结构。

![image-20200620090929085](https://gitee.com/Dye/statics/raw/master/img/202201151540824.png)

各部分的功能如下表：

| 区域   | 功能                                                         |
| ------ | ------------------------------------------------------------ |
| 内容区 | 内容区在模型的中心包含了盒子内的信息也就是 HTML 元素。这些元素可以是文本、图片等。 |
| 内边距 | 内边距是内容区和边框之间的空间，可以被看作是内容区的背景区域。 |
| 边框   | 边框用于标识盒子的边界，介于内边距和外边距之间。             |
| 外边距 | 外边距位于边框外部，是边框与周围之间的空间。                 |

Box 模型除平面结构外，还可以用三维的立体层次结构图展现，如下图：

![image-20200620091744004](https://gitee.com/Dye/statics/raw/master/img/202201151540196.png)

从上往下看，Box 模型表示的层次关系依次为：

1. Box 模型的核心—边框（border），它位于第一层。
2. 元素内容（content）、内边距（padding），两者同位于第二层。
3. 背景图（background-image），它位于第三层。
4. 背景色（background-color）位于第四层。
5. 整个盒子的外边距（margin），它位于底层。

从该层次关系中可以看出，若对某个页面元素同时设置背景图像和背景色，则背景图像将在背景色的上方显示。

### 边距

边距是指边框和内容中间的距离，又可以分为：内边距和外边距。

#### 内边距

内边距在边框和内容区之间，在 CSS 样式表中使用 padding 属性来控制该区域。padding 属性能接受长度值或百分比值，例如希望所有 p 元素的上、右、下、左的内边距都是 15 像素，则需要写以下样式规则：

```css
p {
  padding: 15px;
}
```

如果希望 p 元素的上、右、下、左的内边距分别是 30 像素、50 像素、3em（1 个 em 一般代表 16px）和 20%，则需要写以下样式规则：

```css
p {
  padding: 30px 50px 3em 20%;
}
```

通过这个例子，可以分析出，一个 padding 的内边距属性是由四个单独的属性构成的，这四个属性分别设置 Box 模型的上、右、下、左四个部分的内边距。上面的样式规则可以写成以下形式。

示例代码：

```css
p {
  padding-top: 30px;
  padding-right: 50px;
  padding-bottom: 3em;
  padding-left: 20%;
}
```

如果内边距上下相同、左右也相同，则直接使用 padding 属性一次性赋值的形式可以写成 padding: 上下内边距 左右内边距;，具体的样式规则如下：

```css
p {
  padding: 50px 3em;
}
```

如果把样式规则写成了如下的形式：

```css
p {
  padding: 30px 50px 3em;
}
```

即 padding 属性里仅赋了三个值，其等价于：

```css
p {
  padding: 30px 50px 3em 50px;
}
```

如果使用百分比，相对的是父元素的**宽度**

#### 外边距

外边距是围绕在边框外面的空白区域，在实际生活中可以理解为箱子和箱子之间的间隙。设置外边距使用 margin 属性，这个属性和内边距属性 padding 非常类似，可以接收各种单位的长度值和百分数，甚至可以接受负值（内边距和边框不可以接受负值）。例如，段落元素的上、右、下、左的外边距都是 0.5 英寸时，则需要写以下样式规则：

```css
p {
  margin: 0.5in;
}
```

如果 p 元素的上、右、下、左的内边距分别是 50px、15%、2em 和 0.5 英寸时，则需要写以下样式规则：

```css
p {
  margin: 50px 15% 2em 0.5in;
}
```

当然也可以分别设置外边距的上、右、下、左 4 个部分，样式规则可以写成以下形式：

```css
p {
  margin-top: 50px;
  margin-right: 15%;
  margin-bottom: 2em;
  margin-left: 0.5in;
}
```

margin 属性的默认值是 0，所以如果没有为 margin 声明一个值，就不会出现外边距。但是，在实际情况下，浏览器为了达到更好的显示效果，会对许多元素提供默认的样式，外边距也包括在其中。也就是说，当显式地进行元素样式声明之后，会覆盖掉浏览器默认的样式，否则会以浏览器提供的默认样式显示元素。

##### 外边距的合并

最后需要提一下外边距的合并，如下图所示，h1 元素（上部的块）下外边距的值为 16px，p 元素（下部的块）上外边距的值为 14px，实际显示的结果是取了两者中的**最大值**而不是两者之和，这就是外边距的合并。

![image-20200620101955973](https://gitee.com/Dye/statics/raw/master/img/202201151548684.png)

### 边框

边框是围绕内容区和内边距的一个框架，在 CSS 样式表中使用 border 属性来控制边框。通过 border 属性，可以定义边框的宽度、样式和颜色，创建出效果出色的边框。

#### border-width 属性

CSS 样式表中边框的宽度由 border-width 属性定义，其值可以是 thin、medium 或 thick 等，分别代表细、中、粗边框，也可以是具体的像素值，如图所示：

![image-20200620100458911](https://gitee.com/Dye/statics/raw/master/img/202201151549714.png)

如果希望所有 p 元素边框的宽度都是 2 像素，则需要写以下样式规则：

```css
p {
  border-width: 2px;
}
```

在学习内边距时，可以分别为内边距的上、右、下、左四个部分设置内边距的值，同样，也可以分别给边框的上、右、下、左四个部分设置不同的宽度。

例如，段落元素边框的上、右、下、左四个部分分别是细边框、中等边框、粗边框和宽度为 6 个像素的边框，样式规则可以写成以下两种形式。

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p {
        border-style: solid;
        border-top-width: thin;
        border-right-width: medium;
        border-bottom-width: thick;
        border-left-width: 6px;
      }
    </style>
  </head>
  <body>
    <p>
      在当今社会中，Web已经成为网络信息共享和发布的主要形式。
      要想开发Web应用系统，就必须掌握前端技术。
      本书从HTML、CSS和JavaScript三个方面系统地介绍了Web前端开发。
    </p>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201151549895.png)

需要注意的是，当分别给 Box 模型的四个边框设置宽度时，也可以使用 2 个或 3 个参数的形式，具体的含义与设置内边距宽度时类似。

#### border-style 属性

在 CSS 样式表中，使用 border-style 属性设置边框的样式，或单独为上、右、下、左设置边框样式。下表出了 border-style 属性的可取值、描述及示例。

| 值     | 描 述                          | 示 例                                                        |
| ------ | ------------------------------ | ------------------------------------------------------------ |
| none   | 设置无边框                     | —                                                            |
| hidden | 与 none 相同，但应用于表时除外 | —                                                            |
| dotted | 设置点状边框                   | ![image-20200701162302409](https://gitee.com/Dye/statics/raw/master/img/202201151550004.png) |
| dashed | 设置虚线                       | ![image-20200701162342873](https://gitee.com/Dye/statics/raw/master/img/202201151550176.png) |
| solid  | 设置实线                       | ![image-20200701162413709](https://gitee.com/Dye/statics/raw/master/img/202201151550045.png) |
| double | 设置双线                       | ![image-20200701162450514](https://gitee.com/Dye/statics/raw/master/img/202201151550725.png) |
| groove | 设置 3D 凹槽边框               | ![image-20200701162601681](https://gitee.com/Dye/statics/raw/master/img/202201151550482.png) |
| ridge  | 设置 3D 垄状边框               | ![image-20200701162639779](https://gitee.com/Dye/statics/raw/master/img/202201151550976.png) |
| inset  | 设置 3D inset 边框             | ![image-20200701162720520](https://gitee.com/Dye/statics/raw/master/img/202201151550601.png) |
| outset | 设置 3D outset 边框            | ![image-20200701162751562](https://gitee.com/Dye/statics/raw/master/img/202201151550651.png) |

将上面段落元素边框的上、右、下、左四个部分的边框类型分别设置为实线、点状、虚线和双线，样式规则可以写成以下两种形式。

示例代码：

```css
p {
  border-style: solid dotted dashed double;
}
p {
  border-top-style: solid;
  border-right-style: dotted;
  border-bottom-style: dashed;
  border-left-style: double;
}
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201151550961.png)

#### border-color 属性

border-color 属性可以设置边框的颜色。同样，不仅可以将四个边框的颜色设置为同一种颜色，也可以分别为上、右、下、左四个边框分别设置颜色。具体的样式规则可以写成以下几种形式，具体含义比较简单，这里不再赘述。

```css
p {
  border-color: blue;
}
p {
  border-color: red green blue yellow;
}
p {
  border-top-color: red;
  border-right-color: green;
  border-bottom-color: blue;
  border-left-color: yellow;
}
```

#### 四个边框属性

上面分别介绍了边框的宽度、样式和颜色属性，而且针对不同的属性类别，分别设置了上、右、下、左四个边框的相关类型属性值。接下来，换一个角度，从上、右、下、左四个边框的角度，分别设置这些边框的宽度、样式和颜色属性。下表列出了代表这四个边框的属性和简单描述，接下来会讲解部分属性。

| 属 性         | 描 述                                              |
| ------------- | -------------------------------------------------- |
| border-top    | 简写属性，用于把上边框的所有属性设置到一个声明中。 |
| border-right  | 简写属性，用于把右边框的所有属性设置到一个声明中。 |
| border-bottom | 简写属性，用于把下边框的所有属性设置到一个声明中。 |
| border-left   | 简写属性，用于把左边框的所有属性设置到一个声明中。 |

需要注意的是，在把边框的所有属性设置到一个声明中时，需要按照 border-left-width、border-left-style 和 border-left-color 的顺序进行设置。例如设置以下样式规则，一并实现了之前案例对宽度、样式和颜色的全部设置。

示例代码：

```css
p {
  border-top: thin solid red;
  border-right: medium dotted green;
  border-bottom: dashed thick blue;
  border-left: double 6px yellow;
  padding: 10px;
}
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201151551421.png)

### display 属性

display 属性规定元素应该生成的框的类型。可以通过对 diplay 属性的值的设置，来改变元素的类型。常用的属性值有三个：none、inline、block。

- none：此元素不会被显示。效果等价于 visibility:hidden。区别在于 display 隐藏后不会占据原来位置。
- inline：默认。此元素会被显示为行内元素，元素前后没有换行符。
- block：此元素将显示为块级元素，此元素前后会带有换行符。
- inline-block：此元素显示为行内块元素，兼具inline与block的特性

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .c1 {
        display: none;
      }
      .c2 {
        visibility: hidden;
      }
    </style>
  </head>
  <body>
    <div id="header">header</div>
    <div id="content">
      <div class="c c1">c1</div>
      <div class="c c2">c2</div>
    </div>
    <div id="footer">footer</div>
  </body>
</html>
```

效果如下：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201151552187.png)

注意：在 CSS 中如果不谨慎使用 display 会很危险，因为可能违反 HTML 中已经定义的显示层次结构。

## CSS 浮动

在 CSS 中，定位方案是控制元素布局的主要方式，常见的定位方案有三种：

- 常规(文档)流（normal flow）
- 浮动（float）
- 定位（positioning）

常规流是默认的页面布局方式，此种方式无法有效的完成页面的特色布局。所以通常所说的 CSS 布局，指的是另外两种定位方案：浮动和定位。

HTML 中默认是以常规流的方式实现页面布局，元素按照其在 HTML 中的先后位置至上而下布局。在这个过程中，行内元素水平排列，直到当行被占满然后换行；块级元素则会被渲染为完整的一个新行。除非另外指定，否则所有元素默认都是常规流定位，也可以说，常规流中元素的位置由该元素在 HTML 文档中的位置决定。

示例代码：

```html
<body>
  <div id="header">header</div>
  <div id="content">
    <div class="c">c1</div>
    <div class="c">c2</div>
  </div>
  <div id="footer">footer</div>
</body>
```

当需要 c1 和 c2 两个块级标签同行水平排列时，就需要使用浮动来实现。

### 什么是浮动

浮动就是让元素脱离常规流的控制，移动到其父元素中指定位置的过程。

浮动可以将块级元素同行排列，浮动的元素会脱离常规流，不会占据常规流的位置但是可能会影响常规流内的元素，

例如浮动元素会遮盖住常规流内元素。另外浮动只有左右浮动，不会出现上下浮动。

语法格式：

```css
float: left; /*左浮动*/
float: right; /*有浮动*/
```

### 浮动的原理

在一个页面中有四个 div 层，每个层有不同的颜色和属性，默认没有浮动，此时所有的层都在常规流中。按照块级标签的规范自上而下排列。示例代码如下：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style type="text/css">
      #div1 {
        width: 60px;
        height: 50px;
        background-color: red;
      }
      #div2 {
        width: 60px;
        height: 50px;
        background-color: yellow;
      }
      #div3 {
        width: 60px;
        height: 50px;
        background-color: blue;
      }
      #div4 {
        width: 60px;
        height: 50px;
        background-color: green;
      }
    </style>
  </head>
  <body>
    <div id="div1">第一层</div>
    <div id="div2">第二层</div>
    <div id="div3">第三层</div>
    <div id="div4">第四层</div>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201151610780.png)

当我们想让 div 元素在同一行的左边显示时，可修改成以下代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style type="text/css">
      #div1 {
        width: 60px;
        height: 50px;
        background-color: red;
        float: left;
      }
      #div2 {
        width: 60px;
        height: 50px;
        background-color: yellow;
        float: left;
      }
      #div3 {
        width: 60px;
        height: 50px;
        background-color: blue;
        float: left;
      }
      #div4 {
        width: 60px;
        height: 50px;
        background-color: green;
        float: left;
      }
    </style>
  </head>
  <body>
    <div id="div1">第一层</div>
    <div id="div2">第二层</div>
    <div id="div3">第三层</div>
    <div id="div4">第四层</div>
  </body>
</html>
```

效果如下：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201151610433.png)

通过 float 属性的设置让 div 元素在同一行的右边显示。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style type="text/css">
      #div1 {
        width: 60px;
        height: 50px;
        background-color: red;
        float: right;
      }
      #div2 {
        width: 60px;
        height: 50px;
        background-color: yellow;
        float: right;
      }
      #div3 {
        width: 60px;
        height: 50px;
        background-color: blue;
        float: right;
      }
      #div4 {
        width: 60px;
        height: 50px;
        background-color: green;
        float: right;
      }
    </style>
  </head>
  <body>
    <div id="div1">第一层</div>
    <div id="div2">第二层</div>
    <div id="div3">第三层</div>
    <div id="div4">第四层</div>
  </body>
</html>
```

效果如下：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201151610420.png)

若是想让一二三层在同一行，一二层向左，三四层向右，可以使用如下样式：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style type="text/css">
      #div1 {
        width: 60px;
        height: 50px;
        background-color: red;
        float: left;
      }
      #div2 {
        width: 60px;
        height: 50px;
        background-color: yellow;
        float: left;
      }
      #div3 {
        width: 60px;
        height: 50px;
        background-color: blue;
        float: right;
      }
      #div4 {
        width: 60px;
        height: 50px;
        background-color: green;
        float: right;
      }
    </style>
  </head>
  <body>
    <div id="div1">第一层</div>
    <div id="div2">第二层</div>
    <div id="div3">第三层</div>
    <div id="div4">第四层</div>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201151610995.png)

### 清除浮动

清除（clear）是浮动的相关属性，一个设置了清除浮动的元素不会像设置浮动的元素那样在其他元素左边界或右边界浮动，**而是直接向下移动**。下表罗列了 clear 属性的一些可取值以及每个可取值的含义。

| 值    | 描 述                            |
| ----- | -------------------------------- |
| left  | 在左侧不允许浮动元素。           |
| right | 在右侧不允许浮动元素。           |
| both  | 在左右两侧均不允许浮动元素。     |
| none  | 默认值，允许浮动元素出现在两侧。 |

例如：现有一个页面，包括一个内容块、一个侧栏块和一个页脚块，其中内容块和侧栏块分别设置了左浮动和右浮动，且侧栏块的高度小于内容块的高度，所以页脚块被放置在右下角。要解决这个问题，可以在页脚块上清除浮动，使页脚块在浮动元素的下面，其代码如下。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style type="text/css">
      body {
        width: 300px;
        height: 200px;
        border: 1px solid;
      }
      .content {
        width: 200px;
        height: 150px;
        background-color: red;
        float: left;
      }
      .items {
        width: 90px;
        height: 100px;
        background-color: yellow;
        float: right;
      }
      .footer {
        width: 90px;
        height: 50px;
        background-color: blue;
        clear: both;
      }
    </style>
  </head>
  <body>
    <div class="content">内容块（左浮动）</div>
    <div class="items">侧栏块（右浮动）</div>
    <div class="footer">页脚块（清除浮动）</div>
  </body>
</html>
```

效果如下：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201151613278.png)

## CSS定位

CSS 中使用定位来实现页面布局对页面美化有很好的帮助，下面就详细介绍一下定位布局的具体操作。定位布局可以分为四种：

- 静态定位
- 相对定位
- 绝对定位
- 固定定位

其中一般的标签元素不加任何定位属性时，默认都属于静态定位，静态定位在页面的最底层属于标准流（常规流）

### 相对定位

> 相对定位是相对于元素在文档中的初始位置。在使用相对定位时，无论是否进行移动，元素仍然占据原来的空间。
>
> **因此，移动元素会导致它覆盖其他框。**

相对定位通过 `position: relative` 实现，以下示例代码设置了 id 为 myBox 的元素的位置是以原位置为参照点，向右偏移 30px、向下偏移 20px：

```css
# myBox {
  position: relative;
  left: 30px;
  top: 20px;
}
```

### 绝对定位

绝对定位是相对于元素最近的已定位的祖先元素（设置了绝对定位或者相对定位的祖先元素）。如果元素没有已定位的祖先元素，那么它的位置则是相对于最初的包含块（body）。

绝对定位与文档流无关，所以它们可以覆盖页面上其他的元素，可以通过 z-index 属性来控制这些层的堆放顺序。

绝对定位通过 `position: absolute` 实现，以下示例代码设置了 id 为 myBox 的元素的位置是距离上方 20px、距离左方 30px：

```css
#myBox {
  position: absolute;
  left: 30px;
  top: 20px;
}
```

### 固定定位

固定定位与绝对定位类似，但它是相对于浏览器窗口定位，并且不会随着滚动条进行滚动。使用 fixed 的元素会脱离文档流。并且定位元素经常与 z-index 属性进行层次分级。

固定定位的最常见的一种用途是在页面中创建一个固定头部、固定脚部或者固定侧边栏，不需使用 margin、border、padding。

固定定位通过 `position: fixed` 实现，以下示例代码设置了 id 为 myBox 的元素的位置是距离浏览器上方 20px、距离左方 10px：

```css
#myBox {
  position: fixed;
  left: 10px;
  top: 20px;
}
```

### z-index 控制

z-index 属性指定一个 HTML 元素的堆叠顺序。元素堆叠级别是相对于元素在 Z 轴上（与 X 轴 Y 轴相对照）的位置而言。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。这个层叠顺序沿着浏览器垂直的线轴（ z 轴）被呈现。如下图所示：

![image-20200702091710565](https://gitee.com/Dye/statics/raw/master/img/202201151724327.png)

简单来说，数字越大越前面

## BFC 和 IFC 渲染规则

先说说 FC，FC 的含义就是 Fomatting Context，它是 CSS2.1 规范中的一个概念。它是页面中的一块渲染区域。而且有一套渲染规则，

它决定了其子元素将怎样定位。以及和其它元素的关系和相互作用。

BFC（Block Fomatting Context ）和 IFC（Inline Formatting Context）都是常见的 FC。

FC 定义了如何在标准流中显示 HTML 标签元素，HTML 标签元素主要可以分为块级标签和行内标签，两种类型的标签都有各自的特点，

这些特点其实就是由 FC 规则来定义的。

BFC 用于块级元素，IFC 用于行内元素。

所谓 BFC 就是块级格式化上下文，在文档流中竖着排列。IFC 就是行内格式化上下文，在文档流中横着排列。

### BFC 规则

1. 元素内部的盒子会在垂直方向一个个地放置。
2. 盒子垂直方向的距离由 margin 决定，**同一个** BFC 的两个相邻 Box 的上下 margin 会发生重叠。
3. 每一个元素的左边会和包含的盒子的左边相接触，即使存在浮动也是如此。
4. BFC 的区域不会与 float 重叠。
5. BFC 是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
6. 计算 BFC 的高度时，浮动元素也参与计算。

#### 哪些元素会触发 BFC 规则

- 根元素。
- float 的属性不为 none 的元素。
- position 属性为 absolute 或 fixed 的元素。
- display 属性为 inline-block、table-cell、table-caption、flex 的元素。
- overflow 属性不为 visible 的元素。

#### 具体应用

> 第二条的应用

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>
      .p {
        width: 300px;
        height: 50px;
        margin: 20px 0;
        background-color: purple;
      }
      .wrap {
        overflow: hidden;
      }
    </style>
  </head>
  <body>
    <div class="p">111</div>
    <div class="wrap">
      <div class="p">
        222
      </div>
    </div>
  </body>
</html>
```

如果wrap没有添加`overflow: hidden`

效果：会发生重叠

![image-20220116164235440](https://gitee.com/Dye/statics/raw/master/img/202201161642530.png)

如果添加了，会发现margin不重叠了

![image-20220116164401278](https://gitee.com/Dye/statics/raw/master/img/202201161644364.png)



解释：如果wrap没有添加`overflow: hidden`，那么就与上一个p同处于一个BFC中，而添加了，wrap就与上一个p处于不同的BFC中，就不会发生重叠了

> 第4条的应用

现需要将两个 div 并排在一行显示。

示例代码如下：

```html
<head>
  <meta charset="UTF-8" />
  <style type="text/css">
    div {
      width: 200px;
      height: 200px;
    }
    #div1 {
      width: 100px;
      height: 100px;
      float: left;
      background-color: blue;
    }
    #div2 {
      background-color: red;
    }
  </style>
</head>
<body>
  <div id="div1"></div>
  <div id="div2"></div>
</body>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201161535308.png)

这时的效果符合 BFC 规则中的第三条：每一个元素的左边，同包含的盒子的左边相接触，即使存在浮动也是如此。

（div1是BFC，div2不是，要将div2变成BFC，包含的盒子指body，或者说根元素）

这样并不能满足需求，这里可以可以继续使用第四条规范：BFC 的区域不会与 float 重叠，进行修改。加入属性 “ overflow : hidden ;” 后代码效果如下。

修改代码：

```html
<head>
  <meta charset="UTF-8" />
  <style type="text/css">
    div {
      width: 200px;
      height: 200px;
    }
    #div1 {
      width: 100px;
      height: 100px;
      float: left;
      background-color: blue;
    }
    #div2 {
      background-color: red;
      overflow: hidden;
    }
  </style>
</head>
<body>
  <div id="div1"></div>
  <div id="div2"></div>
</body>
```

效果如下：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201161517910.png)

>  第6条的应用

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>
      .child {
        border: 2px solid plum;
        width: 50px;
        height: 50px;
        float: left;
      }
      .parent {
        border: 2px solid black;
        width: 400px;
        margin-top: 20px;
        overflow: hidden;
      }
    </style>
  </head>
  <body>
    <div class="parent">
      <div class="child"></div>
      将父div触发为BFC，也就是将其overflow设为hidden，撑开父元素。
    </div>
  </body>
</html>
```

如果父元素不添加，那么就会变成

![image-20220116165515628](https://gitee.com/Dye/statics/raw/master/img/202201161655703.png)

当添加后：

![image-20220116165550673](https://gitee.com/Dye/statics/raw/master/img/202201161655750.png)

这是因为，本来直接父div并不是BFC，因此不会把浮动的高度也计算在内，当为BFC后，就要计算了。

### IFC 规则

1. 子元素水平方向横向排列，并且垂直方向起点为 HTML 元素的顶部。
2. 子元素只会计算横向样式空间，垂直方向样式空间不会被计算。
3. 子元素在垂直方向上可以通过 `vertical-align` 属性实现对齐。
4. 能把一行中所有元素都完全包含进去的一个矩形区域我们称之为该行的行框（line box）。行框的宽度是由包含的 HTML 元素和包含的浮动块共同决定。
5. IFC 中的 “ line box ” 一般左右边紧贴其所包含的内容元素，其中的 float 元素会优先排列。
6. IFC 中的 “ line box ” 高度由 **CSS 行高**来确定，同个 IFC 下的多个 “ line box ” 高度可能会不同。
7. 当内容元素的总宽度小于包含它们的 line box 时，其水平对齐规则由 text-align 属性来控制。
8. 当 “ inline box ” 超过父元素的宽度时，在未设置强制换行的情况下 “ inline box ” 不可被分割，这时它会溢出父元素。

#### 具体应用

下面同样通过一个例子演示一下 IFC 规则第五条的应用。

```html
<head>
  <meta charset="UTF-8" />
  <style type="text/css">
    div {
      width: 200px;
      border: red 1px solid;
    }
    span {
      width: 50px;
    }
  </style>
</head>
<body>
  <div>
    <span>我是一号</span>
    <span>我是二号</span>
    <span>我是三号</span>
    <span>我是四号</span>
  </div>
</body>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201161600069.png)

修改代码，对三号添加 float 后，代码示例：

```html
<head>
  <meta charset="UTF-8" />
  <style type="text/css">
    div {
      width: 200px;
      border: red 1px solid;
    }
    span {
      width: 50px;
    }
    .three {
      float: left;
    }
  </style>
</head>
<body>
  <div>
    <span>我是一号</span>
    <span>我是二号</span>
    <span class="three">我是三号</span>
    <span>我是四号</span>
  </div>
</body>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201161600917.png)

## CSS hack

CSS Hack 由于不同厂商的浏览器，比如 Internet Explorer,Safari,Mozilla Firefox,Chrome 等，或者是同一厂商的浏览器的不同版本，如 IE6 和 IE7，对 CSS 的解析认识不完全一样，因此会导致生成的页面效果不一样，得不到我们所需要的页面效果。 这个时候我们就需要针对不同的浏览器去写不同的 CSS，让它能够同时兼容不同的浏览器，能在不同的浏览器中也能得到我们想要的页面效果。

简单的说，CSS Hack 的目的就是使你的 CSS 代码兼容不同的浏览器。当然，我们也可以反过来利用 CSS Hack 为不同版本的浏览器定制编写不同的 CSS 效果。

### CSS Hack 分类

CSS Hack 常见的有三种形式：

- CSS 属性 Hack
- CSS 选择符 Hack
- IE 条件注释 Hack

#### CSS 属性 Hack

**IE9 支持的 CSS 属性 Hack：**

| 标识 | 含义                                            |
| ---- | ----------------------------------------------- |
| "\9" | 所有 IE 浏览器都支持。*                         |
| "\0" | IE8、IE9 支持，opera 部分支持。                 |
| "+"  | IE7 支持。                                      |
| "*"  | IE6、IE7 支持。                                 |
| "_"  | 仅 IE6 支持。                                   |
| ""   | 主流浏览器如 FireFox，chrome 支持（没有标识）。 |

根据 CSS 覆盖的规律：**写在后面的样式会覆盖前面设置的样式**。 这样可以通过同一个样式属性设置不同的值，并且添加相应的标识，由浏览器决定选择哪个样式来只执行操作。因为是后面的样式覆盖前面的样式，所以要按照“从大到小”的规范来写。下面来看一些示例代码。

**1. 区别 IE 和非 IE 浏览器：**

```css
div {
  background: blue; /*非IE背景为蓝色，因为所有浏览器都能识别*/
  background: red\9; /*IE6、IE7、IE8、IE9背景红色，因为覆盖上面样式。IE10跟11应该不识别。*/
}
```

**2. 区别 IE6,IE7,IE8,FF**

```css
div {
  background: blue; /*Firefox背景变蓝色，所有浏览器都支持*/
  background: red\9; /*IE8背景变红色，IE6、7、8、9支持覆盖上面样式*/
  *background: black; /*IE7背景变黑色，IE6、7支持又一次覆盖上面样式*/
  _background: orange; /*IE6背景变橘，紧IE6支持又一次覆盖上面样式*/
}
```

**3. 区别 IE6,IE7,FF**

```css
div {
  background: blue; /*Firefox背景变蓝色*/
  *background: green !important; /*IE7背景变绿色*/
  *background: orange; /*IE6背景变橘色*/
}
```

IE7 可以辨识*和!important，但是 IE6 只可以辨识，却无法辨识!important，至于 Firefox 可以读取!important 但不能辨识*因此可以透过这样的差异来有效区隔 IE6、IE7、Firefox。

> 总结：CSS 属性 Hack 书写顺序为： **FF -> IE9 -> IE8 -> IE7 -> IE6**

#### CSS 选择符 Hack

选择器前缀法是针对一些页面表现不一致或者需要特殊对待的浏览器，在 CSS 选择器前加上一些只有某些特定浏览器才能识别的前缀进行 hack。例如下面的示例代码会被不同的浏览器解析。

```css
* html .test {
  color: #090;
} /* For IE6 and earlier */
* + html .test {
  color: #ff0;
} /* For IE7 */
.test:lang(zh-cn) {
  color: #f00;
} /* For IE8+ and not IE */
.test:nth-child(1) {
  color: #0ff;
} /* For IE9+ and not IE */
:root .test {
  background-color: green;
} /* For IE9 and Opera */
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .test {
    color: gray;
  }
} /* For Chrome and Safari */
@-moz-document url-prdfix() {
  .test {
    color: #fff;
  }
} /* For Forefox */
```

####  IE 条件注释 Hack

IE 条件注释是微软 IE5 开始就提供的一种非标准逻辑语句。比如针对所有 IE：`<!-[if IE]><!-您的代码-><![endif]>`，这类 Hack 不仅对 CSS 生效，对写在判断语句里面的所有代码都会生效。下面例举一些常用的注释 Hack 语法。

**1. 只在 IE 下生效**

```html
<!--[if IE]> 这段文字只在IE浏览器显示 <![endif]-->
```

**2. 只在非 IE 浏览器生效**

```html
<!--[if !IE]> 这段文字只在非IE浏览器显示 <![endif]-->
```

**3. 只在 IE6 下生效**

```html
<!--[if IE 6]> 这段文字只在IE6浏览器显示 <![endif]-->
```

**4. 只在 IE6 以上版本生效**

```html
<!--[if gte IE 6]> 这段文字只在IE6以上(包括)版本IE浏览器显示 <![endif]-->
```

**5. 只在 IE8 上不生效**

```html
<!--[if ! IE 8]> 这段文字在非IE8浏览器显示 <![endif]-->
```

> 注意：条件注释只有在 IE 浏览器下才能执行，这个代码在非 IE 浏览下被当做注释视而不见。可以通过 IE 条件注释载入不同的 CSS、JS、HTML 和服务器代码等。
