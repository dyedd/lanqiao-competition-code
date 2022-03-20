

# **HTML5**

## 介绍

HTML5 技术结合了 HTML4.01 的相关标准并革新，符合现代网络发展要求，在 2008 年正式发布。HTML5 由不同的技术构成，其在互联网中得到了非常广泛的应用，提供更多增强网络应用的标准机。与传统的技术相比，HTML5 的语法特征更加明显，并且结合了 SVG 的内容。这些内容在网页中使用可以更加便捷地处理多媒体内容，而且 HTML5 中还结合了其他元素，对原有的功能进行调整和修改，进行标准化工作。HTML5 在 2012 年已形成了稳定的版本。（摘自百度百科）

### HTML5 的主要新功能

1. 语义标签

   在 HTML5 之前，网页使用 div 标签来实现页面布局，这些 div 标签只是提供给浏览器的指令，只是定义一个网页的某些部分，并没有任何实际意义。即便使用 CSS 样式的 id 和 class 形容这块内容也是没有意义的。在 HTML5 中，将那些之前没“意义”的 div 标签使用不用的语义关键字来代替，例如：`<article>`。这样就赋予了该标签相应的含义，这就是“语义标签”。

2. 增强型表单

   表单是实现用户与页面后台交互主要组成部分，HTML5 在表单的设计上功能更加强大。 input 类型和属性的多样性大大地增强了 HTML 可表达的表单形式，再加上新增加的一些表单标签，使得原本需要 JavaScript 来实现的控件，可以直接使用 HTML5 的表单来实现；一些如内容提示、焦点处理、数据验证等功能，也可以通过 HTML5 的智能表单属性标签来完成。

3. 视频和音频

   HTML5 最大特色之一就是支持音频视频，在通过增加了`<audio>`、`<video>`两个标签来实现对多媒体中的音频、视频使用的支持，只要在 Web 网页中嵌入这两个标签，而无需第三方插件（如 Flash）就可以实现音视频的播放功能。HTML5 对音频、视频文件的支持使得浏览器摆脱了对插件的依赖，加快了页面的加载速度，扩展了互联网多媒体技术的发展空间。

4. Canvas 绘图

   HTML5 的 canvas 元素可以实现画布功能，该元素通过自带的 API 结合使用 JavaScript 脚本语言在网页上绘制图形和处理，拥有实现绘制线条、弧线以及矩形，用样式和颜色填充区域，书写样式化文本，以及添加图像的方法，且使用 JavaScript 可以控制其每一个像素。 HTML5 的 canvas 元素使得浏览器无需 Flash 或 Silverlight 等插件就能直接显示图形或动画图像。

5. SVG 绘图

   可缩放向量图 SVG(Scalable Vector Graphic) ，在 HTML5 标准之前 SVG 是不能直接使用与网页中的。若是需要使用，只能将 SVG 编写在独立的 XML 文档中。在 HTML5 标准推出后，SVG 标签可以直接使用`<img>`标签在网页中显示。使用`<img src="x.svg">`嵌入到网页中。

6. 地理定位

   现今移动网络备受青睐，用户对实时定位的应用越来，要求也越来越高。HTML5 通过引入 eolocation 的 API 可以通 GPS 或网络信息实现用户的定位功能，定位更加准确、灵活。通过 HTML5 进行定位，除了可以定位自己的位置，还可以在他人对你开放信息的情况下获得他人的定位信息

7. 拖放 API

   在 HTML5 之前，用户是无法把页面中的元素拖放到另一个位置的，而在 HTML5 当中，可以使用拖放 API 将一个元素使用“鼠标按下 + 鼠标移动”两个事件将选中的元素从一个位置拖到另一个位置。在 HTML5 中，拖放是标准的一部分，任何元素都能够拖放。

8. WebWorker

   HTML5 利用 Web Worker 将 Web 应用程序从原来的单线程业界中解放出来，通过创建一个 Web Worker 对象就可以实现多线程操作。JavaScript 创建的 Web 程序处理事务都是在单线程中执行，响应时间较长，而当 JavaScript 过于复杂时，还有可能出现死锁的局面。HTML5 新增加了一个 WebWorkerAPI，用户可以创建多个在后台的线程，将耗费较长时间的处理交给后台面不影响用户界面和响应速度，这些处理不会因用户交互而运行中断。

9. WebStorage

   HTML5 较之传统的数据存储有自已的存储方式，允许在客户端实现较大规模的数据存储。为了满足不同的需求，HTML5 支持 DOM Storage 和 Web SQL Database 两种存储机制。其中，DOM Storage 适用于具有 key/value 对的基本本地存储；而 WebSQLDatabase 是适用于关系型数据库的存储方式，开发者可以使用 SQL 语法对这些数据进行查询、插入等操作。

10. WebSocket

    WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。在 WebSocket API 中，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。两者之间就直接可以数据互相传送。

### HTML5 的优势

从 HTML4.0、XHTML 到 HTML5，从某种意义上讲，这是 HTML 描述性标记语言的一种更加规范的过程。因此，HTML5 并没有给开发者带来多大的冲击。但 HTML5 增加了很多非常实用的新功能和新特性，下面具体介绍 HTML5 的一些优势。

1. 解决了跨浏览器问题

   在 HTML5 之前，各大浏览器厂商为了争夺市场占有率，会在各自的浏览器中增加各种各样的功能，并且不具有统一的标准。使用不同的浏览器，常常看到不同的页面效果。在 HTML5 中，纳入了所有合理的扩展功能，具备良好的跨平台性能。针对不支持新标签的老式 IE 浏览器，只需简单地添加 JavaScript 代码就可以使用新的元素。

2. 新增了多个新特性

   HTML 语言从 1.0 到 5.0 经历了巨大的变化，从单一的文本显示功能到图文并茂的多媒体显示功能，许多特性经过多年的完善，已经发展成为一种非常重要的标记语言。 HTML5 新增的特性如下。

   ● 新的语义标签，比如 header、nav、section、article、footer。

   ● 新的表单元素，比如 calendar、date、time、email、url、search。

   ● 用于绘画的 canvas 元素。

   ● 用于媒介回放的 video 和 audio 元素。

   ● 对本地离线存储的更好支持。

   ● 地理位置、拖曳、摄像头等 API。

3. 用户优先的原则

   HTML5 标准的制定是以用户优先为原则的，一旦遇到无法解决的冲突时，规范会把用户放在第一位。另外，为了增强 HTML5 的使用体验，还加强了以下两方面的设计。

   ● 安全机制的设计

   为确保 HTML5 的安全，在设计 HTML5 时做了很多针对安全的设计。HTML5 引入了一种新的基于来源的安全模型，该模型不仅易用，而且对不同的 API(Application Programming Interface ，应用程序编程接口)都通用。使用这个安全模型，不需要借助于任何不安全的 hack 就能跨域进行安全对话。

   ● 表现和内容分离

   表现和内容分离是 HTML5 设计中的另一个重要内容。实际上，表现和内容的分离早在 HTML4.0 中就有设计，但是分离的并不彻底。为了避免可访问性差、代码高复杂度、文件过大等问题，HTML5 规范中更细致、清晰地分离了表现和内容。但是考虑到 HTML5 的兼容性问题，一些陈旧的表现和内容的代码还是可以兼容使用的。比如说font等一些标签不用了，也不用自带的属性bgcolor设置，表现都在css中实现

4. 化繁为简的优势

   作为当下流行的通用标记语言，HTML5 尽可能地简化，严格遵循了“简单至上”的原则，主要体现在这几个方面：

   ● 新的简化的字符集声明;

   ● 新的简化的 DOCTYPE;

   ● 简单而强大的 HTML5 API;

   ● 以浏览器原生能力替代复杂的 JavaScript 代码。

## HTML5 网页标准结构

### 结构标签

HTML4：

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <title>Title</title>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
  </head>
  <body>
    内容...
  </body>
</html>
```

XHML：

```html
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
    <title>Title</title>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
  </head>
  <body>
    内容...
  </body>
</html>
```

HTML5：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    内容...
  </body>
</html>
```

通过对比观察可以发现结构标签中最大的变化在文档声明（DOCTYPE）和字符编码设置（meta）这两个部分。下面详细介绍一下 HTML5 结构标签各标签的具体功能。

**`<!DOCTYPE html>`**

HTML5 文档必须以 DOCTYPE 作为该文档的第一行，这是一个文档类型声明。它用来告诉浏览器或其他分析程序他们所访问的文件类型。

**html 标签**

html 标签是 HTML5 文档的根标签，必须为文档的第二行标签。在 HTML5 中新增了一个 html 标签的属性为：manifest。manifest 属性的值会定义一个 URL，在这个 URL 上描述了 HTML5 文档的缓存信息，这些信息会在离线应用的时候使用。

**head 标签**

head 标签是所有头部元素的容器。根据前面所学内容，在 head 标签内部包含了与当前文档相关的声明信息。例如：标题、样式表、脚本、元信息等。

**meta 标签**

meta 标签位于 head 标签内，主要用于定义与当前文档相关联的元信息（meta-information），这些信息用于当前页面的设置工作。例如设置页面编码；设置页面根路径；设置针对搜索引擎的描述和关键字等。

`<meta charset="UTF-8"> `定义了当前文档的字符编码是 UTF-8。这个设置是页面必须的设置，否则会出现页面乱码的情况。根据对比大家也会发现这种设置方式较以前的设置更加的简洁。

**title 标签**

title 标签位于 head 标签内，定义了文档的标题。该标签定义的标题会在浏览的工具栏或者标签中显示，同时也是页面收藏时的关键索引，所以非常重要。在以前版本的 HTML 中 title 是必须存在的，但是在 HTML5 中只规定了该标签的定义上限，虽然这意味着不定义 title 标签页面并不会出现错误，但是因为 title 标签的重要性，要求大家必须描述此标签。

**body 标签**

body 标签定义了文档的主体和所有的内容，如文本、图片、超链接、表单、表格等所有的用于显示的标签都必须包含在该标签中。该标签中的内容会在浏览器窗体中被显示出来。

### 语义化标签

所谓语义化，是指用恰当的标签去展示恰当的内容，例如 HTML5 中新增的 header、nav、footer 等标签，而非什么内容都用 div 、span 这种不具备语义化的标签来布局显示。

不使用语义标签和使用语义标签的对比如下图。

![image-20200706115514212](https://gitee.com/Dye/statics/raw/master/img/202201022311150.png) ![image-20200706115313308](https://gitee.com/Dye/statics/raw/master/img/202201022311533.png)

语义标签的优点：

- 在样式丢失的情况下，页面也能呈现出很好地内容结构、代码结构。
- 比 `<div>` 标签有更加丰富的含义，方便开发与维护。
- 有利于 SEO，提高搜索引擎的有效爬取。
- 方便其他设备解析（如移动设备）。
- 无障碍

我们传递的是内容，而不是样式。

例如：

```html
<p style="font-sieze":16px>
    ....
</p>
```

不如使用

```html
<h1>
    
</h1>
```



#### 页眉（header）

header 标签是一种具有引导和导航作用的构架元素，通常用来放置整个页面或者页面中一个内容块的标题，若是作为整个页面的标题，应该放在页面的起始位置。示例代码：

```html
<body>
  <header>
    <h1>我是整个页面的标题</h1>
  </header>
  <article>
    <header>我是文章的标题</header>
    <div>文章的正文...</div>
  </article>
</body>
```

header 中也可以包含 table、form、nav 等标签，只要应该在头部区域显示的内容都可以放到 header 中。

#### 导航（nav）

nav 标签是一个可以用作页面导航的链接组。其中的导航元素可以将页面导航至其他关联页。

例如，网站首页都会有整个网站的功能导航部分，此部分就需要使用 nav 标签来实现。示例代码：

```html
<body>
  <nav>
    <ul>
      <li><a>首页</a></li>
      <li><a>手机</a></li>
      <li><a>电脑</a></li>
      <li><a>pad</a></li>
      <li><a>其他</a></li>
    </ul>
  </nav>
</body>
```

> 注意：在 HTML5 中最好不要使用 menu 标签来替代 nav 标签实现导航功能，这种操作是错误的，因为 menu 标签主要用于交互命令的菜单上。

#### 分区（section）

section 标签用于对页面上的内容进行分区，可以通过其将页面的内容分成多个部分。每个部分之间又有一定的联系。一个 section 标签通常由标题和内容组成。一般不会出现没有标题的 section。示例代码：

```html
<div>
  <h1>排行榜</h1>
  <section>
    <h3>最热排行</h3>
    <ol>
      <li>歌曲1</li>
      <li>歌曲2</li>
      <li>...</li>
    </ol>
  </section>
  <section>
    <h3>新歌排行</h3>
    <ol>
      <li>歌曲1</li>
      <li>歌曲2</li>
      <li>...</li>
    </ol>
  </section>
</div>
```

> 注意：div 标签关注结构独立性，section 关注内容独立性。

#### 文章（article）

article 标签用来表示页面中的独立的、完整的、可以独自被外部引用的内容。它可以是一篇文章、一段评论、或者一段描述。一个 article 通常都包含一个 header 标签作为该文章的标题。示例代码：

```html
<body>
  <article>
    <header><h1>搭建“云实验室” 产教融合助力大学生就业</h1></header>
    <p>
      疫情期间，大学生在家“云上课”，去机房做实验难以实现，急需实操训练的计算机...
    </p>
  </article>
</body>
```

article 标签可以嵌套使用，但是要求内层的标签内容必须和外层的标签内容有关。例如外层标签是介绍手机性能的，那么内层标签可以介绍手机规格等内容。

```html
<body>
  <article>
    <header><h1>选择华为手机的六大理由</h1></header>
    <p>1、麒麟985 5G芯片....</p>
    <p>2、....</p>
    <article>
      <header><h3>包装清单</h3></header>
      <p>手机 * 1</p>
      ....
    </article>
  </article>
</body>
```

除此之外，article 标签还可以用来表示一个**插件**。使用它可以使插件看起来像内嵌入页面中一样。示例代码如下：

`<embed>` 标签定义嵌入的内容，比如插件。

```html
<article>
  <header>插件</header>
  <object>
    <embed type="video/webm" src="video.mp4" width="400" height="300" />
  </object>
</article>
```

**article 和 section 的区别**

1. article 代表文档或页面中独立完整的，可被外界引用的内容。例如一篇文章或者一个帖子。而 section 则通常作为单纯的分区来使用，例如一篇文章的多个自然段。
2. article 元素通常会包含 header 或者 footer 标签来实现独立内容的完整性。而 section 虽然也要求有标题元素，但会不使用 header 而通常会使用 `<hn>` 来实现定义标题的功能。
3. 从某种意义上来看，article 可以看成是特殊的 section。article 更强调独立性、完整性，而 section 更强调相关性。
4. 如果 article、aside 或者 nav 标签更符合使用条件，那么就不要使用 section。

#### 附注栏（aside）

aside 标签用来描述当前页面内容的附注信息，它可以是当前页面内容相关的引用、广告、侧边栏等。这些内容要区别于当前页面的主体内容。aside 有两种使用方式：

- 作为主要内容的附属信息，例如当前文章的参考资料等。

```html
<article>
  <h1>HTML5</h1>
  <p>HTML5是当前主流的...</p>
  <h3>参考资料</h3>
  <aside>
    <ul>
      <li>《HTML5从入门到精通》</li>
      <li>《HTML5开发指南》</li>
    </ul>
  </aside>
</article>
```

- 作为和页面相关的附属信息，例如侧边栏广告。

```html
<aside>
  <nav>
    <h3>友情链接</h3>
    <ul>
      <li>链接1</li>
      <li>链接2</li>
      <li>...</li>
    </ul>
  </nav>
</aside>
```

#### 页脚（footer）

footer 标签可以作为内容的注脚，例如在网页中添加版权信息等。示例代码：

```html
<footer>
 <p>
     &copy 2021;
    </p>
</footer>
```

#### 其他语义标签

##### **标题分组（hgroup）**

hgroup 标签可以为标题或者子标题进行分组，标题通常使用 `<hn>` 组合。一块内容中的标题和子标题可以通过 hgroup 进行分组，若是只有一个标题则不用分组。示例代码：

```html
<header>
  <hgroup>
    <h1>主标题</h1>
    <h3>副标题标题</h3>
  </hgroup>
</header>
```

##### **时间（time）**

time 标签可以对日期进行管理操作。它代表某个日期或者是 24 小时中的某个时刻。当表示时刻的时候，可以使用时区进行显示。例如：

```html
<time datetime="2020-6-9">2020年6月9日</time>
<time datetime="2020-6-9T20:00">2020年6月9日晚8点</time>
<time datetime="2020-6-9T20:00Z">2020年6月9日晚8点</time>
```

搜索引擎会读取 datetime 属性的值，而标签中的文字是在页面中显示的文字。其中 "T" 代表的是日期和时间的间隔。"z" 代表的是时间使用的是 UTC 标准时间。

如果没有datetime属性，time就跟普通的标签一样

time 标签还有一个特殊的属性为：pubdate。该属性是布尔类型，通常用在 article 标签中代表该文章的发布日期。示例代码：

```html
<article>
  <header>
    <h1>文章标题</h1>
    <p>发布日期<time datetime="2020-6-9" pubdate>2020年6月9日</time></p>
  </header>
</article>
```



#### 总结

语义化标签不能取代div，这些标签只是作为div标签的补充。

## HTML多媒体

早期的 Web 仅支持图片和文字，无法支持多媒体。后期开始支持简单的 MIDI 和 GIF 动画。到现在可以支持各种音频和视频的播放。

HTML4 的多媒体播放需要各种插件来实现，例如：Window Media Play、Flash Player 等。这些插件种类繁多，各自支持的视频格式也不一致，这给网站开发和用户的使用都带来了极大的不便。

HTML5 中多媒体功能的出现解决了这些问题，用户不需要安装任何插件就能播放页面中的多媒体音频和视频。HTML5 提供了两个重要的多媒体标签 audio 和 video。并提供了通用的、完整的、可脚本控制的 API。

### audio 标签

在 HTML5 中，使用 audio 标签来播放声音文件或者音频流，该标签支持 Ogg、MP3、WAV 等音频格式。

#### 参数：

![img](https://gitee.com/Dye/statics/raw/master/img/202201052220453.webp)

语法代码如下：

```html
<!--注意，这里的 samplemovice.mp4 并不存在-->
<audio src="samplemovie.mp4" controls="controls">
  您的浏览器不支持video标签
</audio>
```

其中 src 属性用于指定要播放的声音文件，controls 属性用于提供播放、暂停和音量控件。标签中的文本为提示信息，如果当前浏览器不支持 audio 元素，则可以显示这些信息。

#### 属性(参数)：

![img](https://gitee.com/Dye/statics/raw/master/img/202201052219889.webp)

另外 audio 标签还可以通过子标签 `<source>` 来进行多数据源的设置。

一个 audio 可以包含多个 source ，当播放器无法识别当前格式的播放源时会调用下一个 source 播放源进行播放。

```html
    <audio controls>
      <source src="snow.mp3" type="audio/mpeg" />
      <source src="snow.mp3" type="audio/ogg" />
      您的浏览器不支持audio标签
    </audio>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201052142053.png)

需要注意的是 src 属性指定的播放文件的格式一定要和 type 属性指定的类型保持一致，因为一个播放器可以播放各种类型的文件，type 会告知播放器按那种类型的文件解码，如果播放的文件和类型的编码格式不匹配，那么浏览器就会以为该文件无法播放，所以一个比较简单的(偷懒)方法就是不写 type 属性，由浏览器自行检测编码方式。

很多网站的页面都带背景音乐，这个需求也可以通过 audio 标签来实现。示例代码如下：

```html
<audio autoplay loop>
  <source src="snow.mp3" />
</audio>
```

其中的 autoplay 属性为设置自动播放。loop 属性为**循环播放**。

### video 标签

video不同audio，它是用来播放视频的

HTML5 视频播放标签 video 的使用方式和 audio 的使用方式类似，都是可以通过 video 标签来对播放器进行设置，通过 source 标签来对播放源进行设置，当遇到无法播放的文件时也会显示标签内的内容。通过 controls 属性设置控制栏的显示，通过 autoplay 设置是否自动播放。

示例代码：

```html
<video controls autoplay>
  <source src="test.mp4" />
</video>
```

显示效果：

![pic](https://gitee.com/Dye/statics/raw/master/img/202201052149113.png)

在某些时候可能会需要不使用控制栏来对视频进行控制，这时也可以使用一些内置的 JavaScript 函数和属性来控制播放器。功能如下表：

| 函数              | 描述                                                       |
| ----------------- | ---------------------------------------------------------- |
| load()            | 用于加载音频或视频文件，为播放做准备，通常不需要使用。     |
| play()            | 用于开始播放音频或视频文件，若该文件已经暂停，则继续播放。 |
| pause()           | 用于暂停处于播放状态的音频或视频文件。                     |
| canPlayType(type) | 用于检测 video 元素是否支持给定的 MIME 类型的文件。        |

示例代码：

```html
<video onmousemove="this.play()" onmouseout="this.pause()">
  <source src="video.mp4" />
</video>
```

### 浏览器兼容控制

#### **video + object 标签方案**

HTML5 支持使用 video 标签进行多媒体播放，并且按照前面章节所讲内容，当 video 标签无法支持播放时，会进入到标签内的执行提示信息操作。因此可以在外层部署 video 标签，等 video 标签无法正常执行时，使用 object 标签执行。<u>object 标签是 HTML4 可以识别并执行的标签</u>。这样就保证了在浏览器不支持 HTML5 的情况下以 HTML4 标准来进行解析。

示例代码：

```html
// 请自行加载 .mp4 文件和 .swf 文件
<video width="320" height="240" controls="controls">
  <source src="video.mp4" type="video/mp4" />
  <object data="video.mp4" width="320" height="240">
    <embed src="video.swf" width="320" height="240" />
  </object>
</video>
```

swf格式是一个 flash 动画

#### **JavaScript 控制方案**

此方案从本质上来说还是先判断浏览器是否支持 HTML5，不支持的情况下使用 HTML4 来替换多媒体标签实现播放的操作。和第一种方案的区别在于浏览器判断和标签的使用操作是由 JavaScript 脚本来实现控制。

检测视频是否能正常播放可以使用 canPlayType(type) 函数来实现。该函数只通过一行代码即可验证当前浏览器是否支持传入的视频格式。

示例代码：

```html
<head>
  <meta charset="UTF-8" />
  <title>Title</title>
  <script>
    function videoCheck() {
      var testVideo = document.getElementById("#video");
      if (
        "" == testVideo.canPlayType('video/ogg; codecs="theora, vorbis"') &&
        "" ==
          testVideo.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')
      ) {
        document.getElementById("showMsg").innerText = "使用HTML4的flash播放！";
        testVideo.outerHTML =
          '<object data="video.mp4" width="320" height="240">\n' +
          '    <embed src="video.swf" width="320" height="240" />\n' +
          "  </object>";
      } else {
        document.getElementById("showMsg").innerText = "使用HTML5的video播放！";
      }
    }

    window.onload = function () {
      videoCheck();
    };
  </script>
</head>
<body>
  <div id="showMsg"></div>
  <video id="#video" controls>
    <source src="test.mp4" />
  </video>
</body>
```

![pic](https://gitee.com/Dye/statics/raw/master/img/202201052155353.png)

![pic](https://gitee.com/Dye/statics/raw/master/img/202201052155235.png)



上面代码还有个outerHTML，那和innerHTML有什么区别呢？

1. innerHTML:从对象的起始位置到终止位置的全部内容, 不包括HTML标签。
2. outerHTML:除了包含innerHTML的全部内容外, **还包含对象标签本身**。

例子：

```html
<div id="test">
	<span style="color:red">test1</span> test2
</div>
<script>
    document.getElemntById('test')
</script>
```



1）innerHTML的值是 `<span style="color:red">test1</span> test2 `
2）outerHTML的值是` <div id="test"><span style="color:red">test1</span> test2</div>`

## HTML新表单元素和属性

在 HTML5 之前，表单支持的 input 输入类型有十个，如下表所示：

| 输入类型 | 关键字   | 描述                                 |
| -------- | -------- | ------------------------------------ |
| 文本域   | text     | 输入单行文本，默认 20 个字宽度。     |
| 密码域   | password | 输入单行文本，内容会被“*”隐藏。      |
| 单选按钮 | radio    | 在一组选择项中只能选择一项。         |
| 复选按钮 | checkbox | 在一组选择项中可以选多项。           |
| 提交按钮 | submit   | 提交表单到服务器，以按钮的形式显示。 |
| 单击按钮 | button   | 无任何功能，以按钮的形式显示。       |
| 图像按钮 | image    | 提交表单到服务器，以图片的形式显示。 |
| 重置按钮 | reset    | 重置表单元素内容。例如清空文本。     |
| 隐藏域   | hidden   | 无法在页面显示，隐藏的文本域。       |
| 文件域   | file     | 可以用于上传用户电脑文件。           |

在 HTML5 中新增了八个 input 输入类型。

- email
- url
- number
- range
- Date pickers (date, month, week, time, datetime, datetime-local)
- search
- tel
- color

下面将逐一介绍这些新增的输入类型。

### email

email 类型是 input 标签中专门用来输入电子邮件的文本输入框，在提交表单的时候会对文本框中的内容进行自动校验，如果该文本框中的内容不是一个 email 格式的字符串，则不允许表单被提交。早期的的版本中采用 “text 文本域 + JavaScript” 的方式来实现此功能。

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form>
      email: <input type="email" />
      <input type="submit" value="提交" />
    </form>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201052223034.png)

HTML5 的 email 类型在浏览器的表现形式上同普通的 text 类型没有区别。但是在手机浏览器中这两种类型额 input 元素是有区别的。在手机中 text 元素会用正常的手机输入键盘来显示输入信息，但当该元素是 email 类型时，手机的输入键盘会通过改变输入键盘来配合该输入框。这种改变无疑提供了更好的用户体验。

<img src="https://gitee.com/Dye/statics/raw/master/img/202201052223113.png" alt="image-20200713101517893" style="zoom: 25%;" />

### url

url 类型是 input 标签中专门用来输入 url 地址的文本输入框，当表单提交时，如果输入的文本内容不是 url 格式，则不允许提交。

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form>
      url: <input type="url" />
      <input type="submit" value="提交" />
    </form>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201052223297.png)

url 类型同样在手机中会有特殊的键盘配合输入。

### number

number 类型是 input 标签专门用于输入数值的文本框，再使用该类型的时候，input 标签还提供属性对所输入的数字进行限制。包括允许输入的最大值和最小值、合法的数字间隔和默认值。如果输入的数字不在规定的范围内，同样会提示错误信息。另外该类型的 input 标签只允许输入数字，其他字符无法输入。

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form>
      number: <input type="number" max="10" />
      <input type="submit" value="提交" />
    </form>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201052225432.png)

number 类型可配置属性。

| 属性  | 描述                                              |
| ----- | ------------------------------------------------- |
| max   | 输入框允许的最大值                                |
| min   | 输入框允许的最小值                                |
| step  | 合法的数字间隔，例如 step=2，则合法为：2、4、6、8 |
| value | 默认值                                            |

number 类型同样在手机中会有特殊的键盘配合输入。效果如下：

<img src="https://gitee.com/Dye/statics/raw/master/img/202201052225559.png" alt="image-20200713101626810" style="zoom:25%;" />

### range

range 类型是 input 元素提供输入在指定范围内数字值的文本框，在页面以滑动条的形式显示。使用 range 类型的标签时，必须指定最大值、最小值。否则该表单元素只能显示和操作，但无法正常使用。

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form>
      number: <input type="range" />
      <input type="submit" value="提交" />
    </form>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201052245593.png)

rang 类型的属性和 number 类型的属性是一致的，功能也是类似的，区别在于外观显示不同。另外，支持 range 类型的浏览器会将其显示成滑块形式，不支持的浏览器会将其显示成 text 形式的纯文本输入框。

### Date pickers

日期是网页中经常用到的一种输入类型。日期类型的输入数据若格式不对，在后期的程序开发过程中就会遇到很大的麻烦。为了规范输入日期的格式，同时也为了方便用户操作，在 HTML5 之前的版本开发过程中通常使用第三方的日期控件来实现日期的选择输入功能，这样操作既方便了用户的输入也可以对日期格式进行有效的控制。

在 HTML5 中默认提供了六种日期选择控件，统称为 Date pickers。通过对这些日期选择控件的使用可以灵活的对各种日期输入数据进行选择操作。这六种选择控件如下表所示：

| 类型           | 描述                      |
| -------------- | ------------------------- |
| date           | 选取年、月、日            |
| month          | 选取年、月                |
| week           | 选取年、周                |
| time           | 选取时间小时、分钟        |
| datetime       | 选取年、月、日和 UTC 时间 |
| datetime-local | 选取年、月、日和本地时间  |

这里只演示 date 和 datetime-local 两个日期选择控件。示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form>
      date: <input type="date" /> datetime-local：<input
        type="datetime-local"
      />
      <input type="submit" value="提交" />
    </form>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201052248598.png)

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201052248505.png)

这里需要注意 datetime 和 datetime-local 选择项虽然是 HTML5 标准中定义的日期类型选择项，但是在很多的浏览器中并不支持这个插件。例如最新的 chrome 支持 datetime-local 但是不支持 datetime。所以使用的时候还是要注意选择。

### search

search 类型的 input 标签提供用于输入搜索关键字的的文本框，从外观看 search 和 text 是一样的，功能也是相近的可以输入任意的字符串，实际操作过程可以看到当文本框中存在文字时，**文本框的右侧会出现一个“×”按钮，单击此按钮可以清空文本框中的内容，这是 search 和 text 最大的区别。**

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form>
      search: <input type="search" />
      <input type="submit" value="提交" />
    </form>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201052248073.png)

### tel

tel 类型是 input 标签专门用来输入电话号码的文本框，它并不仅局限输入数字，还可以输入一些其他的字的字符例如：- + （）等。

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form>
      tel: <input type="tel" />
      <input type="submit" value="提交" />
    </form>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201052250086.png)

在浏览器中效果并不明显，但是在手机浏览器输入数据时，手机会默认使用数字键盘来进行输入操作。

### color

color 类型是 input 标签提供的专门用于设置颜色的文本框。通过单击文本框可以打开一个调色板，用户可以在面板中选择需要的颜色。不同的操作系统打开的实测面板也不相同。

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form>
      color: <input type="color" />
      <input type="submit" value="提交" />
    </form>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201052251763.png)

### 新的 input 属性

#### autocomplete 属性

当前主流浏览器都自带自动补全功能。该功能可以让用户在输入过一次数据后，再次输入相同数据时自动完成内容的补全。表单的 autocomplete 属性也可以完成这样的操作。支持的 input 类型包括几乎所有的可输入的文本框。autocomplete 属性包括两种属性值：on、off。form 表单页包括该属性，作用是让该表单的所有表单元素都能自动补全。

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form autocomplete="on">
      用户名: <input type="text" name="name" /><br />
      密码 : <input type="text" name="pass" /><br />
      E-mail: <input type="email" name="email" autocomplete="off" /><br />
      <input type="submit" />
    </form>
  </body>
</html>
```

显示效果：

![img](https://gitee.com/Dye/statics/raw/master/img/202201052254873.png)

通过操作可以发现，用户名和密码都是可以提示的，email 则不能。若是浏览器关闭了自动提示功能，此功能则无法实现。请设置浏览器的自动提示功能再实现此代码。

autocomplete 属性也可以通过 HTML5 提供的 datalist 标签实现预设自动补全值的功能。用户可以选择预设值来实现自动填充功能。示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form autocomplete="on">
      您最喜欢前端技术: <input type="text" list="selectList" />
      <datalist id="selectList">
        <option>html</option>
        <option>css</option>
        <option>js</option>
        <option>vue</option>
      </datalist>
      <input type="submit" />
    </form>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201052254731.png)

> 注意：要将 input 标签和 datalist 标签关联在一起，需要 input 标签的 list 属性和 datalist 的 id 属性相同。

#### autofocus 属性

打开一个页面，当某个文本框需要获得光标焦点时，可以使用 autofocus 属性来实现。例如百度搜索页面，用户打开的时候搜索栏会自动获得光标焦点，用户直接输入需要搜索的内容即可，这种设置可以很好地提高用户体检。

语法格式为：

```html
<input autofocus />
```

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form>
      搜索：<input type="text" autofocus /> <input type="submit" value="搜索" />
    </form>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201052255872.png)

当然有部分的浏览器不支持 autofocus 属性所以无法达到预期的效果，这时也可以使用一段 JavaScript 脚本来解决这个问题，首先判断一下浏览器是否支持该属性，不支持则通过 JavaScript 控制来获得。代码如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form>
      搜索：<input id="search" type="text" autofocus />
      <input type="submit" value="搜索" />
    </form>
    <script>
      if (!("autofocus" in document.createElement("input"))) {
        document.getElementById("search").focus();
      }
    </script>
  </body>
</html>
```

#### form 属性

在 HTML5 之前的版本，当需要使用 form 表单的时候，所有的表单元素必须包含着 `<form>` 标签当中，若某个表单元素出现在 `<form>` 标签之外，那么当表单提交时此元素的值不会被发送到服务端。若需要提交 `<form>` 标签外的表单元素，除非使用 JavaScript 脚本控制单独提交或者使用 Ajax 提交才可以。这样的操作给开发带来了不便。

在 HTML5 中，input 元素新增了一个 form 属性，通过该属性可以将表单元素绑定到指定的 `<form>` 标签上，这样就可以灵活进行布局，同时一个表单元素可以从属于多个表单，这就让表单和表单元素的组合变得更加灵活。

语法格式为：

```html
<input form="form_id" />
```

form 属性的属性值为 from 标签元素的 id。

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form id="myForm"></form>
    关键字：<input type="text" name="key" form="myForm" />
    <input type="submit" value="搜索" form="myForm" />
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201082225150.png)

通过 URL 地址可以看到表单可以正常工作。“key=css” 会被提交到服务器。

#### form overrides 属性

HTML5 新增了几个表单重写属性，用于重写表单的某些属性。但是这些属性只适用于 submit 和 image 输入类型。详情见下表：

| 属性           | 描述                       |
| -------------- | -------------------------- |
| formaction     | 重写表单的 action 属性     |
| formenctype    | 重写表单的 enctype 属性    |
| formmethod     | 重写表单的 method 属性     |
| formnovalidate | 重写表单的 novalidate 属性 |
| formtarget     | 重写表单的 target 属性     |

例如现在有一个表单可以提交用户名和密码，用户可以选择不同的提交地址来实现不同身份的登录。示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form action="1.jsp" id="myForm">
      用户名：<input type="text" name="name" /><br />
      密码：<input type="password" name="pass" /><br />
      <input type="submit" value="用户登录" />
      <input type="submit" value="员工登录" formaction="2.jsp" />
    </form>
  </body>
</html>
```

效果如下：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201082226032.png)

#### height 和 width 属性

height 和 width 属性用于规定 image 输入类型图片的高度和宽度。这两个属性只适用于 image 输入类型，其他输入类型无法使用。

#### list 属性

HTML5 中添加了一个新标签 datalist，该标签可以实现提供数据列表的功能。在自动补全练习里演示过该标签的使用方法。而 list 属性则是**为了将该标签和指定文本框进行关联所设计的**。示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form autocomplete="on">
      您最喜欢前端技术: <input type="text" list="selectList" />
      <datalist id="selectList">
        <option>html</option>
        <option>css</option>
        <option>js</option>
        <option>vue</option>
      </datalist>
      <input type="submit" />
    </form>
  </body>
</html>
```

效果如下所示：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201082235915.png)

> 注意：list 属性的值为某个 datalist 标签的 id 属性。

#### min, max 和 step 属性

HTML5 新增了 min, max 和 step 属性用于为数字或日期输入类型的 input 提供数值限制。可以使用该属性的标签有 number、range、Date pickers。示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form>
      输入：<input type="number" min="0" max="100" step="2" /><input
        type="submit"
        value="提交"
      />
    </form>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201082236435.png)

#### **multiple 属性**

HTML5 提供了 multiple 属性可以允许一次选择多个文件并上传，这在 HTML5 之前的版本中是不支持的。该属性主要适用于文件上传功能，例如 email 也可以使用该属性。

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form>
      上传：<input type="file" multiple /><input type="submit" value="上传" />
    </form>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201111605014.png)

#### pattern (regexp) 属性

HTML5 新增 pattern 属性用于对用户输入信息进行正则表达式校验的功能。该属性适用于大多输的 input 类型。例如 text、pass、search 等。而许多的输入类型其实已经定义好正则表达式来进行验证了。例如 email、url 等。使用正则校验过的数据才能确保数据的准确性。HTML5 之前的版本一般都使用 JavaScript 脚本来实现数据校验的功能。

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form>
      邮政编码：<input type="text" pattern="[0-9]{6}" /><input
        type="submit"
        value="提交"
      />
    </form>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201111606318.png)

patten 属性的值为一个正则表达式



#### placeholder 属性

HTML5 新增 placeholder 属性用于为文本框提供提示说明功能，提示说明该文本框希望用户输入何种数据。当用光标焦点聚焦到该文本框时，提示说明文字消失。不输入任何信息，提示说明文字不会被当做用户输入数据提交。该功能再 HTML5 之前的版本使用 JavaScript 来实现。

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form>
      邮政编码：<input
        type="text"
        pattern="[0-9]{6}"
        placeholder="请输入邮政编码"
      />
      <input type="submit" value="提交" />
    </form>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201111607539.png)

#### required 属性

HTML5 新增的 required 属性用于限定文本框内容不能为空。当文本框内容为空时无法提交表单。该属性适用于 text、password 等大多数文本框。HTML5 前版本通过 JavaScript 实现该功能。

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form>
      邮政编码：<input
        name="key"
        type="text"
        placeholder="请输入邮政编码"
        required
      />
      <input type="submit" value="提交" />
    </form>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201111607717.png)

### 新的 form 元素

#### datalist 元素

datalist 标签主要用于为输入框提供一个可选择的数据列表。**在具有自动提示功能的文本框中可以使用这些选择项来自动补全文本框**。该标签由 `<datalist>` 和 `<option>` 标签组合应用。一个 datalist 标签中可以包含多个 option 标签。他们的关系和表单元素 `<select>` 和 `<option>` 的关系一样。

示例代码：

```html
<!DOCTYPE html>
<html>
  <head>
     
    <meta charset="utf-8" />
     
  </head>
  <body>
    <form>
      <input list="fruits" name="fruit" />
      <datalist id="fruits">
        <option value="苹果"></option>
        <option value="李子"></option>
        <option value="西瓜"></option>
        <option value="柠檬"></option>
        <option value="樱桃"></option>
      </datalist>

      <input type="submit" />
    </form>
  </body>
</html>
```

效果如下：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201111608262.png)

> 注意：option 标签的 value 属性为提交值，标签中的为显示值。若不设置 value 属性，提交值即为显示值。

#### output 元素

HTML5 新增的 output 元素用于在浏览器中显示计算结果或者脚本输出。输出的额结果在标签之间显示。

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <script>
      function calc() {
        document.getElementById("result").value =
          parseInt(document.getElementById("num1").value) +
          parseInt(document.getElementById("num2").value);
      }
    </script>
  </head>
  <body>
    <form>
      <input id="num1" /> + <input id="num2" /> =
      <output id="result"></output>
      <input type="button" onclick="calc()" value="计算" />
    </form>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201111609465.png)

还有更牛逼的代码：

```html
<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
    0 <input type="range" id="a" value="50" />100 +<input type="number" id="b" value="50"/>
    =<output name="x" for="a b"></output>
</form>
```

解析：

这里使用了input事件，更秀的是使用for，

这里的for与`label`的for不一样，output的for能够影响多个（同时for能够隐藏）。

**并且在事件里面，x.value这个x既可以是name，也可以是id**

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
    <input type="range" name="b" value="50" /> +
    <input type="number" name="a" value="10" /> =
    <output name="result"></output>
</form>
```

借此，来讲一下`<label>`元素

**HTML `<label>` 元素（标签）**表示用户界面中某个元素的说明。

将一个 `<label>` 和一个 `<input>` 元素匹配在一起，你需要给 `<input>` 一个 `id` 属性。而 `<label>` 需要一个 `for` 属性，其值和  `<input>` 的 `id` 一样。

另外，你也可以将 `<input>` 直接放在 `<label>` 里，此时则不需要 `for` 和 `id` 属性，因为关联已隐含存在：

```html
<label>Click me <input type="text"></label>
```

使用for属性

```html
<label for="username">Click me</label>
<input type="text" id="username">
```



#### keygen元素

- `<keygen>` 元素的作用是提供一种验证用户的可靠方法。
- `<keygen>` 标签规定用于表单的密钥对生成器字段。
- 当提交表单时，会生成两个键，一个是私钥，一个公钥。私钥（`private key`）存储于客户端，公钥（`public key`）则被发送到服务器。公钥可用于之后验证用户的客户端证书（`client certificate`）。

```HTML
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title>HTML5 新表单元素</title> 
</head>
<body>

<form action="#" method="#">
  用户名: <input type="text" name="usr_name">
  加密: <keygen name="security">
  <input type="submit">
</form>

<p><strong>注意:</strong> Internet Explorer 不支持 keygen 标签。</p>

</body>
</html>
```



### 新的 form 属性

#### autocomplete 属性

form 的 autocomplete 属性主要是用于设置表单元素的自动补全功能。该属性在前面的章节已经演示过，这里就不在赘述，该属性的作用是让对应表单中的所有元素都有自动补全功能。使用时可以不设置 form 的该属性而按需求每个表单元素单独设置。也可以设置 form 的该属性，在不需要的表单元素上设置关闭该属性。具体如何应用根据个人的使用习惯。

#### novalidate 属性

form 的 novalidate 属性用于取消表单的自动验证功能，例如前面已经讲过的 email 元素，当用户输入数据格式不符合 email 的格式要求时，系统会自动提示格式不正确，这个功能就是自动验证功能。若是用户不希望系统提示错误信息而是由自己写代码来实现验证提示功能的话，可以使用 novalidate 属性关闭该功能。

## 正则表达式与表单验证

### 正则表达式

正则表达式又称为规则表达式，它描述了一种字符串匹配的模式，可以用来检查一个串是否含有某种子串、将匹配的子串替换或者从某个串中取出符合某个条件的子串等。

正则表达式可以在以下场景中使用：

- 表单验证。
- 字符串查找。
- 字符串替换。

学习正则表达式主要从这几个方面学起：字符类型、数量限定、位置限定和特殊符号。

#### **字符类型**

字符类型包括所有大写和小写字母、所有数字、所有标点符号和一些其他符号。正则表达式还定义了一些特殊字符来代替一些字符组合，也称为字符类型。

常见的字符类型如下表：

| 字符         | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| .点          | 匹配除“`\n`”和"`\r`"之外的任何单个字符。要匹配包括“`\n`”和"`\r`"在内的任何字符，请使用像“`[\s\S]`”的模式。 |
| `x|y`        | 匹配 x 或 y。例如，“`z|food`”能匹配“z”或“food”(此处请谨慎)。“`[z|f]ood`”则匹配“zood”或“food”。 |
| `[xyz]`      | 字符集合。**匹配所包含的任意一个字符**。例如，“`[abc]`”可以匹配“plain”中的“a”。**注意：不是匹配xyz这个字符** |
| **`[^xyz]`** | **负值字符集合。匹配未包含的任意字符。例如，“abc”可以匹配“plain”中的“plin”任一字符。** |
| `[a-z]`      | 字符范围。匹配指定范围内的任意字符。例如，“`[a-z]`”可以匹配“a”到“z”范围内的任意小写字母字符。**注意:只有连字符在字符组内部时,并且出现在两个字符之间时,才能表示字符的范围; 如果出字符组的开头,则只能表示连字符本身。** |
| `\d`         | 匹配一个数字字符。等价于`[0-9]`。                            |
| `\D`         | 匹配一个非数字字符。等价于"`^0-9`"。                         |
| `\w`         | 匹配**包括下划线**的任何单词字符。类似但不等价于“`[A-Za-z0-9_]`”，这里的"单词"字符使用 Unicode 字符集。 |
| `\W`         | 匹配任何非单词字符。等价于“`^A-Za-z0-9_`”。                  |

`x|y`与`[xyz]`的与`[x|y|z]`区别

匹配的都是其中之一，而或就有意思了，说明有多个情况

x|y 与[x|y]一样，加不加框都无所谓，但看成一个集合挺不错的。而且[]能够与后面的所分开！比如说`[z|f]ood`与`z|food`就不一样了。

后两者比较吧，其实他俩一样，[xyz]反正不要记是匹配xyz或者x，y，z这三个字符都匹配，而是其中之一



 

#### **数量限定**

正则表达式中可以对字符出现的次数进行限定。用来描述正则表达式的一个给定组件必须要出现多少次才能满足匹配常见的限定符号如下：

| 字符  | 描述                                                         |
| ----- | ------------------------------------------------------------ |
| *     | 匹配前面的子表达式零次或多次。例如，`zo*` 能匹配 "z" 以及 "zoo"。* 等价于{0,}。 |
| +     | 匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。 |
| ?     | 匹配前面的子表达式零次或一次。例如，"do(es)?" 可以匹配 "do" 、 "does" 中的 "does" 、 "doxy" 中的 "do" 。? 等价于 {0,1}。 |
| {n}   | n 是一个非负整数。匹配确定的 n 次。例如，`o{2}` 不能匹配 "Bob" 中的 `o`，但是能匹配 "food" 中的两个 o。 |
| {n,}  | n 是一个非负整数。至少匹配 n 次。例如，`o{2,}` 不能匹配 "Bob" 中的 `o`，但能匹配 "foooood" 中的所有 o。`o{1,}` 等价于 `o+`。`o{0,}` 则等价于 `o*`。 |
| {n,m} | m 和 n 均为非负整数，其中 n <= m。最少匹配 n 次且最多匹配 m 次。例如，"o{1,3}" 将匹配 "fooooood" 中的前三个 o。`o{0,1}` 等价于 `o?`。请注意在逗号和两个数之间不能有空格。 |

> *像爆炸，宇宙大爆炸是毁灭，也是新生，前者让生命归于0，同时也诞生了好多的星球。

> +出现，你肯定要出现数字出来，所以不能是0个，至少1个以上才能

> ？去判断一件事，要么是，要么不是，只能是0或1.

#### **位置限定**

位置限定又称为定位符，是用来描述字符串或单词的边界，**^** 和 **$** 分别指字符串的开始与结束，**\b** 描述单词的前或后边界，**\B** 表示非单词边界。

| 字符 | 描述                                                         |
| ---- | ------------------------------------------------------------ |
| ^    | 匹配输入字符串开始的位置。如果设置了 RegExp 对象的 Multiline 属性，^ 还会与 `\n`或 `\r`之后的位置匹配。 |
| `$`  | 匹配输入字符串结尾的位置。如果设置了 RegExp 对象的 Multiline 属性，$ 还会与 `\n` 或 `\r` 之前的位置匹配。 |
| `\b` | 匹配一个单词边界，即字与空格间的位置。                       |
| `\B` | 非单词边界匹配。                                             |

#### **特殊符号**

正则表达式的特殊字符就是一些有特殊含义的字符，这些字符是正则表达式的保留字符，在使用的时候需要通过转义符转义才可以使用。

| 字符 | 描述                                                         |
| ---- | ------------------------------------------------------------ |
| `$`  | 匹配输入字符串的结尾位置。如果设置了 RegExp 对象的 Multiline 属性，则 `$ `也匹配 `\n` 或 `\r`。要匹配 $ 字符本身，请使用 `$`。 |
| ( )  | 标记一个子表达式的开始和结束位置。子表达式可以获取供以后使用。要匹配这些字符，请使用 `\(`和`\)`。 |
| *    | 匹配前面的子表达式零次或多次。要匹配 *字符，请使用 `\*`。    |
| +    | 匹配前面的子表达式一次或多次。要匹配 + 字符，请使用 `\+`。   |
| .    | 匹配除换行符 `\n` 之外的任何单字符。要匹配 . ，请使用 `\.` 。 |
| [    | 标记一个中括号表达式的开始。要匹配 `[` ，请使用 `\[`。       |
| ?    | 匹配前面的子表达式零次或一次，或指明一个非贪婪限定符。要匹配 ? 字符，请使用 `\?`。 |
| `\`  | 将下一个字符标记为或特殊字符、或原义字符、或向后引用、或八进制转义符。例如， `n` 匹配字符 `n`。`\n` 匹配换行符。 |
| ^    | 匹配输入字符串的开始位置，除非在方括号表达式中使用，当该符号在方括号表达式中使用时，表示不接受该方括号表达式中的字符集合。要匹配 ^ 字符本身，请使用 `\^`。 |
| {    | 标记限定符表达式的开始。要匹配 {，请使用 `\{`。              |
| `|`  | **指明两项之间的一个选择**。要匹配 \|，请使用 `\|`。         |

#### 常用正则表达式

`-`只是符号，没有特殊含义

```html
Email地址：^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$

域名：[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?

InternetURL：[a-zA-z]+://[^\s]* 或 ^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$

手机号码：^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$

电话号码("XXX-XXXXXXX"、"XXXX-XXXXXXXX"、"XXX-XXXXXXX"、"XXX-XXXXXXXX"、"XXXXXXX"和"XXXXXXXX)：^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$

国内电话号码(0511-4405222、021-87888822)：\d{3}-\d{8}|\d{4}-\d{7}

电话号码正则表达式（支持手机号码，3-4位区号，7-8位直播号码，1－4位分机号）: ((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)

身份证号(15位、18位数字)，最后一位是校验位，可能为数字或字符X：(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)

帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：^[a-zA-Z][a-zA-Z0-9_]{4,15}$

密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：^[a-zA-Z]\w{5,17}$

强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-10 之间)：^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,10}$

强密码(必须包含大小写字母和数字的组合，可以使用特殊字符，长度在8-10之间)：^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$

日期格式：^\d{4}-\d{1,2}-\d{1,2}

一年的12个月(01～09和1～12)：^(0?[1-9]|1[0-2])$

一个月的31天(01～09和1～31)：^((0?[1-9])|((1|2)[0-9])|30|31)$

钱的输入格式：
    有四种钱的表示形式我们可以接受:"10000.00" 和 "10,000.00", 和没有 "分" 的 "10000" 和 "10,000"：^[1-9][0-9]*$

    这表示任意一个不以0开头的数字,但是,这也意味着一个字符"0"不通过,所以我们采用下面的形式：^(0|[1-9][0-9]*)$

    一个0或者一个不以0开头的数字.我们还可以允许开头有一个负号：^(0|-?[1-9][0-9]*)$

    这表示一个0或者一个可能为负的开头不为0的数字.让用户以0开头好了.把负号的也去掉,因为钱总不能是负的吧。下面我们要加的是说明可能的小数部分：^[0-9]+(.[0-9]+)?$

    必须说明的是,小数点后面至少应该有1位数,所以"10."是不通过的,但是 "10" 和 "10.2" 是通过的：^[0-9]+(.[0-9]{2})?$

    这样我们规定小数点后面必须有两位,如果你认为太苛刻了,可以这样：^[0-9]+(.[0-9]{1,2})?$

    这样就允许用户只写一位小数.下面我们该考虑数字中的逗号了,我们可以这样：^[0-9]{1,3}(,[0-9]{3})*(.[0-9]{1,2})?$

    1到3个数字,后面跟着任意个 逗号+3个数字,逗号成为可选,而不是必须：^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$

    备注：这就是最终结果了,别忘了"+"可以用"*"替代如果你觉得空字符串也可以接受的话(奇怪,为什么?)最后,别忘了在用函数时去掉去掉那个反斜杠,一般的错误都在这里

xml文件：^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|M][l|L]$

中文字符的正则表达式：[\u4e00-\u9fa5]

双字节字符：[^\x00-\xff] (包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计1))

空白行的正则表达式：\n\s*\r (可以用来删除空白行)

HTML标记的正则表达式：<(\S*?)[^>]*>.*?|<.*? /> ( 首尾空白字符的正则表达式：^\s*|\s*$或(^\s*)|(\s*$) (可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式)
    
腾讯QQ号：[1-9][0-9]{4,} (腾讯QQ号从10000开始)
    
中国邮政编码：[1-9]\d{5}(?!\d) (中国邮政编码为6位数字)
    
IPv4地址：((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}
```

### 表单验证

使用 HTML5 实现表单验证需要一下几个前提条件：

- form 标签不能有 novalidate 属性。
- input 标签一定要有 required 和 pattern 属性。
- 必须要有 form 标签和提交按钮。
- 然后再脚本部分监听 input 的 oninput 和 oninvalid 事件，使用 validity 对象的相关属性。

表单验证需要做两点，一个是保证 required 属性，另一个是要确定 pattern 属性值。例如一个用户登录页面，用户名必填，要求格式为字母数字和下划线组合，长度在 6 到 20 之间。密码为数字，长度也是 6 到 20 之间。

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form>
      用户名：<input
        type="text"
        id="userName"
        placeholder="请输入用户名"
        required
        pattern="\W{6,20}"
      />
      密码：<input
        type="password"
        id="password"
        placeholder="请输入密码"
        required
        pattern="\d{6}"
      />
      <button>登录</button>
    </form>
  </body>
</html>
```

可以看到现在既可以判断输入信息为空的情况，也可以判断格式不符合的情况。但是这里有一个问题，假如需要更详细的提示该怎么办呢，这时就需要修改提示信息。可以使用 JavaScript 来控制。完整代码如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <script>
      window.onload = function () {
        var name = document.querySelector("#userName");
        var pass = document.querySelector("#password");

        name.oninvalid = checkUserName;
        name.oninput = checkUserName;

        function checkUserName() {
          if (this.validity.valueMissing) {
            //validity对象相关属性
            this.setCustomValidity("用户名不能为空!");
          } else if (this.validity.patternMismatch) {
            this.setCustomValidity("用户名格式无效!");
          } else {
            this.setCustomValidity("");
          }
        }
        pass.oninvalid = checkPassword;
        pass.oninput = checkPassword;

        function checkPassword() {
          if (this.validity.valueMissing) {
            this.setCustomValidity("密码不能为空!");
          } else if (this.validity.patternMismatch) {
            this.setCustomValidity("密码必须为6-20位数字!");
          } else {
            this.setCustomValidity("");
          }
        }
      };
    </script>
  </head>
  <body>
    <form>
      用户名：<input
        type="text"
        id="userName"
        placeholder="请输入用户名"
        required
        pattern="\w{6,15}"
      />
      密码：<input
        type="password"
        id="password"
        placeholder="请输入密码"
        required
        pattern="\d{6}"
      />
      <button>登录</button>
    </form>
  </body>
</html>
```

显示效果：

![图片描述](https://gitee.com/Dye/statics/raw/master/img/202201111742066.png)

checkValidity方法表示执行原生的表单验证，如果验证通过返回true。如果验证失败，则会触发一个invalid事件。使用该方法以后，会设置validity对象的值。

每一个表单元素都有一个validity对象，它有以下属性。

- valid：如果该元素通过验证，则返回true。
- valueMissing：如果用户没填必填项，则返回true。
- typeMismatch：如果填入的格式不正确（比如Email地址），则返回true。
- patternMismatch：如果不匹配指定的正则表达式，则返回true。
- tooLong：如果超过最大长度，则返回true。
- tooShort：如果小于最短长度，则返回true。
- rangeUnderFlow：如果小于最小值，则返回true。
- rangeOverflow：如果大于最大值，则返回true。
- stepMismatch：如果不匹配步长（step），则返回true。
- badInput：如果不能转为值，则返回true。
- customError：如果该栏有自定义错误，则返回true。(一个 Boolean，表示这个元素的自定义验证信息是否已通过调用元素的 setCustomValidity()，表示这个元素的自定义验证信息是否已通过调用元素的 setCustomValidity() 方法设置为一个非空字符串。)

setCustomValidity方法用于自定义错误信息，该提示信息也反映在该输入框的validationMessage属性中。如果将setCustomValidity设为空字符串，则意味该项目验证通过。

## Canvas 画布和内联 SVG

### HTML5 Canvas 画布

> HTML5 `<canvas>` 标签用于绘制图像，但元素本身并没有绘制能力（它仅仅是图形的容器） 我们必须使用脚本来完成实际的绘图任务。

`getContext()` 方法可返回一个对象，该对象提供了用于在画布上绘图的方法和属性，可用于在画布上绘制文本、线条、矩形、圆形等等。

#### 创建 Canvas 元素

向 HTML5 页面添加 canvas 元素。在 `<canvas>` 标签中规定元素的 id（方便我们写脚本时使用）、宽度和高度：

```html
<canvas id="huabu" width="300" height="150"></canvas>
```

使用 style 属性添加边框：

```html
<canvas id="myCanvas" width="300" height="150" style="border:1px solid pink;">
</canvas>
```

由于 canvas 元素本身没有绘图能力，它只是一个容器。因此，我们需要通过 JavaScript 来绘制所有的绘制工作。

```javascript
<script type="text/javascript">
	var c=document.getElementById("haubu"); 
	var cxt=c.getContext("2d");
	cxt.fillStyle="pink"; 
	cxt.fillRect(0,0,300,150);
</script>
```

##### Canvas 坐标

canvas 是一个二维网格。我们看到上面的 fillRect 方法拥有参数 (0,0,300,150)。

其释义是：在画布上绘制 300x150 的矩形，从左上角 (0,0) 开始绘制。

 **(0,0,300,150)->(x1,y1,x2,y2);**

##### Canvas 路径

在 Canvas 上画线，有以下两种方法：

- `moveTo(x,y)` 定义线条开始坐标。
- `lineTo(x,y)` 定义线条结束坐标。

绘制线条我们必须使用到 "ink" 的方法，就像 stroke()。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>HTML5 Canvas 画布的应用</title>
  </head>
  <body>
    <canvas id="huabu" width="300" height="150" style="border:1px solid red;">
      <!-- 浏览器不支持 canvas 会显示这句话 -->
      您的浏览器不支持 HTML5 canvas 标签。</canvas
    >
    <script>
      var c = document.getElementById("huabu");
      var ctx = c.getContext("2d");
      ctx.moveTo(0, 0);
      ctx.lineTo(300, 150);
      ctx.stroke();
    </script>
  </body>
</html>
```

**在 canvas 中绘制圆形则是使用 arc(x,y,r,start,stop) 方法。**

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <title>HTML5 Canvas 画布的应用</title>
  </head>

  <body>
    <canvas id="huabu" width="300" height="150" style="border:1px solid pink;">
      <!-- 浏览器不支持 canvas 会显示这句话 -->
      您的浏览器不支持 HTML5 canvas 标签。</canvas
    >
    <script>
      var c = document.getElementById("huabu");
      var ctx = c.getContext("2d");
      ctx.beginPath();
      ctx.arc(100, 60, 50, 0, 2 * Math.PI);
      ctx.stroke();
    </script>
  </body>
</html>
```

解释一下：

- x，y是圆心的左标

- r是半径
- start是初始角度，stop是停止角度

##### Canvas 文本

HTML5 Canvas 绘制文本，有以下重要的属性和方法：

- font 定义字体。
- `fillText(text,x,y)` 在 canvas 上绘制**实心**的文本。
- `strokeText(text,x,y)` 在 canvas 上绘制<u>空心</u>的文本。

就记填充的fill，所以描实了。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>HTML5 Canvas 画布的应用</title>
  </head>
  <body>
    <canvas
      id="huabu"
      width="300"
      height="150"
      style="border:1px solid paleturquoise;"
    >
      <!-- 浏览器不支持 canvas 会显示这句话 -->
      您的浏览器不支持 HTML5 canvas 标签。</canvas
    >
    <script>
      var c = document.getElementById("huabu");
      var ctx = c.getContext("2d");
      ctx.font = "50px Arial";
      ctx.strokeText("shi yan lou", 10, 50);
    </script>
  </body>
</html>
```

##### Canvas 渐变

Canvas 渐变使用以下两种不同的方式设置：

- `createLinearGradient(x,y,x1,y1)` 创建线条渐变。
- `createRadialGradient(x,y,r,x1,y1,r1)` 创建一个径向/圆渐变。

值得一提的是当我们使用渐变对象，必须使用<u>两种或两种以上</u>的停止颜色。比如 `addColorStop()` 方法指定颜色停止，参数使用坐标来描述，可以是 0 至 1。

通过设置 `fillStyle` 或 `strokeStyle` 的值为 渐变，然后绘制形状，例如一条线。下面使用 createLinearGradient() 创建线性渐变。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>HTML5 Canvas 画布的应用</title>
  </head>
  <body>
    <canvas
      id="huabu"
      width="300"
      height="150"
      style="border:1px solid blueviolet;"
    >
      <!-- 浏览器不支持 canvas 会显示这句话 -->
      您的浏览器不支持 HTML5 canvas 标签。</canvas
    >
    <script>
      var c = document.getElementById("huabu");
      var ctx = c.getContext("2d");
      // 创建渐变
      var grd = ctx.createLinearGradient(0, 0, 300, 0);
      grd.addColorStop(0, "blue");
      grd.addColorStop(1, "pink");
      // 填充渐变
      ctx.fillStyle = grd;
      ctx.fillRect(20, 30, 180, 80);
    </script>
  </body>
</html>
```

##### Canvas 图像

将一张图像放置到画布上使用 `drawImage(image,x,y)` 方法。

### HTML5 Canvas 内联 SVG

内联 SVG 概念：

- SVG 是可伸缩矢量图形 (Scalable Vector Graphics)。
- SVG 用于定义 Web 矢量的图形。
- SVG 使用 XML 格式定义图形。
- SVG 图像在缩放时其图形质量不会有损失。
- SVG 是万维网联盟的标准。

SVG 的优势：

- SVG 图像可通过文本编辑器来创建和修改。
- SVG 图像可被搜索、索引、脚本化或压缩。
- SVG 是可伸缩的。
- SVG 图像可在任何的分辨率下被高质量地打印。
- SVG 在被放大时图像质量不会下降。

SVG 和 Canvas 之间的差异：

- SVG 使用 XML 描述 2D 图形的语言。Canvas 通过 JavaScript 来绘制 2D 图形。
- SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。
- 在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。
- Canvas 逐像素进行渲染。在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

#### Canvas 与 SVG 的比较

| Canvas                                             | SVG                                                     |
| -------------------------------------------------- | ------------------------------------------------------- |
| 依赖分辨率                                         | 不依赖分辨率                                            |
| 不支持事件处理器                                   | 支持事件处理器                                          |
| 弱的文本渲染能力                                   | 最适合带有大型渲染区域的应用程序（比如谷歌地图）        |
| 能够以.png 或.jpg 格式保存结果图像                 | 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快） |
| 最适合图像密集型的游戏，其中的许多对象会被频繁重绘 | 不适合游戏应用                                          |

没有什么svg比canvas动画性能优的说法

## HTML5 MathML

HTML5 可以在文档中使用 MathML 元素，对应的标签是 `<math></math>`。

MathML 是数学标记语言，是一种基于 XML（标准通用标记语言的子集）的标准，用来在互联网上书写数学符号和公式的置标语言。

部分 HTML5 MathML 元素如下表：

| 属性                                     | 描述                               |
| ---------------------------------------- | ---------------------------------- |
| `<mstyle></mstyle>`                      | 用于设置其包裹的最终表达式的样式。 |
| `<mrow></mrow>`                          | 用于包裹一个或多个表达式。         |
| `<msup></msup>`                          | 用于包裹上标的表达式。             |
| `<msub></msub>`                          | 用于包裹下标的表达式。             |
| `<mi></mi>`                              | 用于包裹字符。                     |
| `<mn></mn>`                              | 用于包裹数字。                     |
| `<mo></mo>`                              | 用于包裹各种运算符号。             |
| `<msqrt></msqrt>`                        | 拿来开根号。                       |
| `<mfenced open="[" close="]"></mfenced>` | 用于包裹矩阵。                     |
| `<mtable></mtable>`                      | 用法和 `table` 类似。              |
| `<mtr></mtr>`                            | 代表矩阵的行。                     |
| `<mtd></mtd>`                            | 代表每行的每一个值。               |

#### MathML 实例

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>HTML5 MathML</title>
  </head>

  <body>
    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <mrow>
        <msup><mi>a</mi><mn>2</mn></msup>
        <mo>+</mo>

        <msup><mi>b</mi><mn>2</mn></msup>
        <mo>=</mo>

        <msup><mi>c</mi><mn>2</mn></msup>
      </mrow>
    </math>
  </body>
</html>
```

测试结果：

![image-20220113195640152](https://gitee.com/Dye/statics/raw/master/img/202201131956246.png)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>HTML5 MathML</title>
  </head>

  <body>
    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <mrow>
        <mrow>
          <msup>
            <mi>x</mi>
            <mn>2</mn>
          </msup>

          <mo>+</mo>

          <mrow>
            <mn>3</mn>
            <mo>⁢</mo>
            <mi>y</mi>
          </mrow>

          <mo>+</mo>
          <mn>5</mn>
        </mrow>

        <mo>=</mo>
        <mn>0</mn>
      </mrow>
    </math>
  </body>
</html>
```

注意：上下标得全包裹进去，后面的为上下，跟html写法不一样

```html
<msup>
    <mi>x</mi>
    <mn>2</mn>
</msup>
```

矩阵：

```html
<math xmlns="http://www.w3.org/1998/Math/MathML">
               
         <mrow>
            <mi>A</mi>
            <mo>=</mo>
                       
            <mfenced open="[" close="]">
                       
               <mtable>
                  <mtr>
                     <mtd><mi>x</mi></mtd>
                     <mtd><mi>y</mi></mtd>
                  </mtr>
                                       
                  <mtr>
                     <mtd><mi>z</mi></mtd>
                     <mtd><mi>w</mi></mtd>
                  </mtr>
               </mtable>
               
            </mfenced>
         </mrow>
      </math>
```

测试结果：

![image-20220113200127733](https://gitee.com/Dye/statics/raw/master/img/202201132001785.png)

## HTML5 Web 存储

### HTML5 Web 存储概念

- 通过使用 `Local Storage`，Web 应用程序能够将在用户浏览器中操作的数据存储在本地。
- 在 HTML5 之前，应用程序数据只能存储在 `cookie` 中，包括每个服务器请求。HTML5 Web 存储，是一个比 `cookie` 更好的本地存储方式。
- HTML5 Web 存储与 `cookie` 不同，存储限制要大得多（至少 5 MB），并且信息不会被传输到服务器。
- 本地存储经由起源地（origin）（经由域和协议）。所有页面，从起源地，能够存储和访问相同的数据。

### HTML 本地存储对象



HTML 本地存储提供了两个对象用于在客户端存储数据：

- window.localStorage 存储的数据没有截止日期，即使你关闭再次打开也会存在，直到手动清除为止。
- window.sessionStorage 针对一个 `session` 来存储数据，当关闭浏览器标签页面数据就会丢失，再次打开以往的数据为空。

注意：在使用本地存储时，请检测 `localStorage` 和 `sessionStorage` 在浏览器是否支持:

```javascript
if (typeof Storage !== "undefined") {
  // 针对 localStorage/sessionStorage 的代码
} else {
  // 抱歉！不支持 Web Storage ..
}
```

### localStorage 对象

`localStorage` 对象存储的是没有截止日期的数据。当浏览器被关闭时数据不会被删除，你可以随时选择使用数据。

```html
<!DOCTYPE html>
<html>
  <head>
     
    <meta charset="utf-8" />
     
    <title>HTML5 Web 存储</title>
     
  </head>

  <body>
    <div id="result"></div>
    <script>
      if (typeof Storage !== "undefined") {
        localStorage.sitename = "染念";
        document.getElementById("result").innerHTML =
          "网红：" + localStorage.sitename;
      } else {
        document.getElementById("result").innerHTML =
          "对不起，您的浏览器不支持 web 存储。";
      }
    </script>
  </body>
</html>
```

测试结果：

![image-20220113205504508](https://gitee.com/Dye/statics/raw/master/img/202201132055586.png)

除了上面的直接`变量.key=value`

也可以使用

`localStorage.setItem("key", "value");`



如要删除 `localStorage` 中的 "sitename"，只需进行以下操作即可:

```javascript
localStorage.removeItem("sitename");
```

不管是 `localStorage`，还是 `sessionStorage`，使用的 API 都相同，常用的有如下几个（以 `localStorage` 为例）：

- 保存数据：`localStorage.setItem(key,value)`;
- 读取数据：`localStorage.getItem(key)`;
- 删除单个数据：`localStorage.removeItem(key)`;
- 删除所有数据：`localStorage.clear()`;
- 得到某个索引的 key：`localStorage.key(index)`;

提示：键/值对通常以字符串存储，你可以按自己的需要转换该格式。

### sessionStorage 对象

`sessionStorage` 方法针对一个 `session` 进行数据存储。当用户关闭浏览器窗口后，数据会被删除。

## HTML5 Web SQL 数据库

本实验的 Web SQL 是在浏览器上模拟数据库，使用 JS 来操作 SQL 完成对数据的读写。

HTML5 Web SQL 数据库 API 并不是 HTML5 规范的一部分，但它是一个独立的规范，引入了一组使用 SQL 操作客户端数据库的 API。

### 核心方法

以下是规范中定义的三个核心方法：

1. `openDatabase` ：这个方法使用现有的数据库或者新建的数据库创建一个数据库对象。
2. `transaction` ：这个方法让我们能够控制一个事务，以及基于这种情况执行提交或者回滚。
3. `executeSql`：这个方法用于执行实际的 SQL 查询。

### 数据库操作的步骤

#### 打开数据库

使用 openDatabase() 方法来打开已存在的数据库，如果数据库不存在，则会创建一个新的数据库，使用代码如下：

```javascript
var db = openDatabase("mydb", "1.0", "Test DB", 2 * 1024 * 1024);
```

openDatabase() 方法对应的五个参数说明：

- 数据库名称
- 版本号
- 描述文本
- 数据库大小
- 创建回调

第五个参数，创建回调会在创建数据库后被调用。

#### 执行查询操作

执行操作使用 database.transaction() 函数：

```javascript
var db = openDatabase("mydb", "1.0", "Test DB", 2 * 1024 * 1024);
db.transaction(function (tx) {
  tx.executeSql("CREATE TABLE IF NOT EXISTS LOGS (id unique, log)");
});
```

执行上述操作后会在 'mydb' 数据库中创建一个名为 `LOGS` 的表。

#### 插入数据

执行完创建表语句后，我们可以插入一些数据：

```javascript
var db = openDatabase("mydb", "1.0", "Test DB", 2 * 1024 * 1024);
db.transaction(function (tx) {
  tx.executeSql("CREATE TABLE IF NOT EXISTS LOGS (id unique, log)");
  tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "dyedd")');
  tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "dyedd.cn")');
});
```

也可以使用动态值来插入数据。

```javascript
var db = openDatabase("mydb", "1.0", "Test DB", 2 * 1024 * 1024);
db.transaction(function (tx) {
  tx.executeSql("CREATE TABLE IF NOT EXISTS LOGS (id unique, log)");
  tx.executeSql("INSERT INTO LOGS (id,log) VALUES (?, ?)", [e_id, e_log]);
});
```

上面代码中的 `e_id` 和 `e_log` 是外部变量，executeSql 会映射数组参数中的每个条目给 "?"。

#### 读取数据

```javascript
var db = openDatabase("mydb", "1.0", "Test DB", 2 * 1024 * 1024);

db.transaction(function (tx) {
  tx.executeSql("CREATE TABLE IF NOT EXISTS LOGS (id unique, log)");
  tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "染念")');
  tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "dyedd.cn")');
});

db.transaction(function (tx) {
  tx.executeSql(
    "SELECT * FROM LOGS",
    [],
    function (tx, results) {
      var len = results.rows.length,
        i;
      msg = "<p>查询记录条数: " + len + "</p>";
      document.querySelector("#status").innerHTML += msg;

      for (i = 0; i < len; i++) {
        alert(results.rows.item(i).log);
      }
    },
    null
  );
});
```

#### 删除记录

```javascript
db.transaction(function (tx) {
  tx.executeSql("DELETE FROM LOGS  WHERE id=1");
});
```

#### 更新记录

```javascript
db.transaction(function (tx) {
  tx.executeSql("UPDATE LOGS SET log='www.w3cschool.cc' WHERE id=2");
});
```

删除和更新指定的数据 id 也可以是动态的。

#### 动态删除记录

```javascript
db.transaction(function (tx) {
  tx.executeSql("DELETE FROM LOGS WHERE id=?", [id]);
});
```

#### 动态更新记录

```javascript
db.transaction(function (tx) {
  tx.executeSql("UPDATE LOGS SET log='www.w3cschool.cc' WHERE id=?", [id]);
});
```

## HTML5 Web Workers

我们知道，`JavaScript` 是单线程，没有多线程。

当 `JavaScript` 在页面中运行耗时长的同步任务的时候就会导致页面崩溃而影响用户体验，从而需要把任务设置放在任务队列中；但是执行任务队列中的任务也并非多线程进行的。

HTML5 Web Workers 正是为解决这个问题而出现，Web Workers 使得一个 Web 应用程序可以在与主执行线程分离的后台线程中运行一个脚本操作。这样做的好处是可以在一个单独的线程中执行费时的处理任务，从而允许主（通常是 UI）线程运行而不被阻塞。

首先我们来看一个问题，什么是 Web Worker？

HTML 在页面中执行脚本时，页面是不可响应的，直到脚本已完成。Web Worker 是运行在后台的 `JavaScript`，独立于其他脚本，不会影响页面的性能。你可以做你想做的事情，例如：点击、选取内容等等，而此时 `Web Worker` 在后台运行。

`Web Worker` 的作用就是给 `JavaScript` 创造多线程运行环境，允许主线程创建 `worker` 线程，分配任务给后者，主线程运行的同时 `worker` 线程也在运行，互相之间不会产生影响，在 `worker` 线程运行结束后把结果返回给主线程。这样做的好处是主线程可以把计算密集型或高延迟的任务交给 `worker` 线程执行，主线程就会变得非常轻松，不会被阻塞或拖慢。但是这并不意味着我们的 `JavaScript` 语言本身支持了多线程能力，而是浏览器作为宿主环境提供了 `JavaScript` 一个多线程运行的环境。必须提到的一点是我们的 `worker` 一旦新建，就会一直运行，不会被主线程的活动打断，这样虽然有利于随时响应主线程的通性，但是也会造成资源的浪费，所以不应过度使用，用完注意关闭。

### 检测浏览器是否支持 Web Worker

在进行 HTML5 Web Workers 具体实验之前，我们应先检查浏览器是否支持 Web Worker：

```javascript
if (typeof Worker !== "undefined") {
  // 是的！支持 Web worker！
  // 一些代码.....
} else {
  // 抱歉！不支持 Web Worker！
}
```

### 创建 Web Worker 文件

```js
var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()", 500);
}

timedCount();
```

以上代码中 `postMessage()` 方法用于向 HTML 页面传回一段消息。

**注释：** Web Worker 通常不用于如此简单的脚本，而是用于更耗费 CPU 资源的任务。

下面的代码行检测是否存在 Worker，若不存在，会新创建一个 Web Worker 对象，然后运行 "test.js" 中的代码：

```javascript
if (typeof w == "undefined") {
  w = new Worker("test.js");
}
```

然后我们就可以从 Web Worker 发生和接收消息了。

接着向 Web Worker 添加一个 "onmessage" 事件监听器：

```javascript
w.onmessage = function (event) {
  document.getElementById("result").innerHTML = event.data;
};
```

### 终止 Web Worker

当我们创建 Web Worker 对象后，它会继续监听消息（即使在外部脚本完成之后）直到其被终止为止。

如需终止 Web Worker，并释放浏览器/计算机资源，请使用 terminate() 方法：

```javascript
w.terminate();
```

总的来说，分成两部分。

**1. HTML 页面**

- 创建 WebWorker 对象：关联 Worker 文件；
- 利用 onmessage 事件：监听 postMessage() 方法消息的传递。

**2. Worker 文件（js）**

- 调用 postMessage() 方法来传递消息。

在 HTML 页面中，如果不调用 terminate() 方法终止 Worker，onmessage 事件就会一直监听 Worker 文件通过 postMessage() 方法传递来的消息。

