# 移动Web开发之流式布局

# 移动端基础

## 浏览器现状

由于移动端浏览器的发展比较晚，所以主流移动端浏览器的内核都是基于 `Webkit` 内核打造的。

我们在进行移动端的页面开发时，兼容性主要考虑 `Webkit` 内核。

## 手机屏幕现状

目前无论是 安卓 还是 IOS，移动端设备的屏幕尺寸非常多，碎片化非常严重。

但是，前端页面开发者无需关注这些分辨率，因为我们常用的尺寸单位是 `px`。

## 常见移动端屏幕尺寸

目前移动端的屏幕尺寸非常多，并且随着发展还会越来越多。

但是，对于移动端的 Web 开发来说，我们不用考虑太多。

对于专门的 安卓 和 IOS 开发，才需要特别关注 `dp`、`dpi`、`pt`、`ppi` 等单位。

## 移动端调试方法

- Chrome DevTools（谷歌浏览器）的模拟手机调试
- 搭建本地 Web 服务器，手机和服务器一个局域网内，通过手机访问服务器
- 使用外网服务器，直接 IP 或 域名 访问

## 总结

- 移动端浏览器我们主要对 Webkit 内核进行兼容
- 我们现在开发的移动端主要针对手机端开发
- 现在移动端碎片化比较严重，分辨率和屏幕尺寸大小不一
- 学会用谷歌浏览器模拟手机界面以及调试

# 视口

视口（viewport）：浏览器显示页面内容的**屏幕区域**。

视口的分类：布局视口、视觉视口、理想视口。

## 布局视口

- 为了解决早期 PC 端网页在手机上显示的问题，移动端浏览器都默认设置了一个布局视口。
- IOS、Android 基本都将布局视口分辨率设置为 980px，所以 PC 上的网页大多也能在手机上呈现，但是网页元素看上去会非常小，一般可以通过手动缩放网页。

<img src="/assets/web/202204071530756.png" style="zoom:50%;" />

## 视觉视口

- 字面意思，它是用户正在看到的网站的区域。注意：是网站的区域。
- 我们可以通过缩放去操作视觉视口，但不会影响布局视口，布局视口仍保持原来的宽度。

<img src="/assets/web/202204071530757.png" style="zoom:50%;" />

## 理想视口

> 发明者：史蒂夫·乔布斯

- 为了使网站在移动端有最理想的浏览和阅读宽度而设定
- 理想视口，对设备来讲，是最理想的视口尺寸
- 需要手动添写 `meta` 视口标签通知浏览器操作
- `meta` 视口标签的主要目的：**布局视口的宽度应该与理想视口的宽度一致，简单理解就是设备有多宽，我们布局的视口就有多宽。**

> 移动端 web 开发就是开发理想视口！

## 总结

- 视口就是浏览器显示页面内容的屏幕区域
- 视口分为布局视口、视觉视口和理想视口
- **我们移动端布局想要的是理想视口就是手机屏幕有多宽，我们的布局视口就有多宽**
- **想要理想视口，我们需要给我们的移动端页面添加 `meta` 视口标签**

## meta视口标签

```html
 <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
```

name="视口"

content="内容中包含若干个属性，用逗号隔开"

| 属性            | 解释说明                                                     |
| --------------- | ------------------------------------------------------------ |
| `width`         | 宽度设置的是 viewport 宽度，我们设置为 `device-width` “设备宽度” 特殊值 |
| `initial-scale` | 初始缩放比，大于 0 的数字，一般来说是设置为 1:1 即：`1.0`    |
| `maximum-scale` | 最大缩放比，大于 0 的数字                                    |
| `minimum-scale` | 最小缩放比，大于 0 的数字                                    |
| `user-scalable` | 用户是否可以缩放，yes 或 no（1或0），一般来说是 no           |

## 标准的viewport设置

- 视口宽度和设备保存一致 `device-width`
- 视口默认缩放比例 `1.0`
- 不允许用户自行缩放 `no`
- 最大允许的缩放比例 `1.0`
- 最小允许的缩放比例 `1.0`

# 二倍图

## 物理像素&物理像素比

- 物理像素点指的是屏幕显示的最小颗粒，是物理真实存在的
- 在 PC 端页面，1px 等于 1 个物理像素，但是移动端就不尽相同
- 移动端 1px 能实际显示的物理像素点的个数就称为物理像素比或屏幕像素比

`物理像素比 = 物理像素（分辨率） / 独立像素（CSS像素）`

例如：iPhone X 的物理像素比为 3

| 屏幕尺寸 | 独立像素（CSS像素） | 物理像素（分辨率） | ppi/dpi（像素密度） | dpr（倍图） |
| -------- | ------------------- | ------------------ | ------------------- | ----------- |
| 5.8英寸  | 812×375             | 2436×1125          | 458                 | 3           |

物理像素比提出的原因：

- 在早期，PC及移动端都是：1CSS像素 = 1物理像素
- 随着 Retina（视网膜屏幕）显示技术的普及，可以将更多的物理像素点压缩至一块屏幕里，从而达到更高的分辨率，并提高屏幕显示的细腻程度。

![](/assets/web/202204071530758.png)

常见 iPhone 设备屏幕参数：

| 设备                         | 物理分辨率  | 开发分辨率 | 物理像素比（dpr） |
| ---------------------------- | ----------- | ---------- | ----------------- |
| iPhone13 Pro Max、12 Pro Max | 1284 * 2778 | 428 * 926  | 3                 |
| iPhone 13\13 Pro、12\12 Pro  | 1170 * 2532 | 390 * 844  | 3                 |
| iPhone 13 mini、12 mini      | 1080 * 2340 | 375 * 812  | 2.88（3）         |
| iPhone 11 Pro Max、XS Max    | 1242 * 2688 | 414 * 896  | 3                 |
| iPhone X、XS、11 Pro         | 1125 * 2436 | 375 * 812  | 3                 |
| iPhone XR、11                | 828 * 1792  | 414 * 896  | 2                 |
| iPhone 8 Plus                | 1080 * 1920 | 414 * 736  | 2.6（3）          |
| iPhone 8、SE                 | 750 * 1334  | 375 * 667  | 2                 |

常见 iPad 设备屏幕参数：

| 设备          | 物理分辨率  | 开发分辨率  | 物理像素比（dpr） |
| ------------- | ----------- | ----------- | ----------------- |
| iPad Pro 12.9 | 2048 * 2732 | 1024 * 1366 | 2                 |
| iPad Pro 11   | 1668 * 2388 | 834 * 1194  | 2                 |
| iPad mini 8.3 | 1488 * 2266 | 744 * 1133  | 2                 |

> 随着移动智能设备屏幕素质的不断提高，目前手机一般都统一使用 3 倍图，平板电脑使用 2 倍图。

> **电脑-显示器多倍图说明**
>
> 目前由于电脑显示器的素质也越来越高（尤其是笔记本电脑），2K屏、3K屏、4K屏、5K屏、6K屏 已经在不断普及，所以其实电脑端的也已经存在多倍图的应用了。
>
> 比如 Macbook Pro 16 M1 Pro/Max：物理分辨率（3456 * 2234）开发分辨率（1728 * 1117）2倍图
>
> 当然电脑端用户都能够方便的设置屏幕显示的缩放比，当缩放比为100%时就为1倍图，但目前的电脑端显示器大多已经默认为 125%、150%、175%、200% 缩放比。
>
> 故，在未来多倍图的运用将会越来越必要！
>
> > 认识了缩放，就能合理的解释：为什么在电脑上设置了一个 100 * 100 的 div 盒子，而在浏览器上用测量工具测量像素长度时，却为 150 * 150，因为此时电脑显示器为 150% 的缩放比，只要我们将其改为 100%，就能得到我们想要的效果了。

## 多倍图

- 对于一张 `50px * 50px` 的图片，在手机 Retina 屏中打开，按照刚才的物理像素比会放大倍数，这样会造成图片模糊（比如：3倍图手机中，50 * 50 实际上是 150 * 150 个像素在显示）
- 在标准的 viewport 设置中，使用多倍图来提高图片质量，解决在高清设备中的模糊问题
- 通常使用二倍体，是因为 iPhone 6\7\8 的影响，但是现在 3倍图 4倍图 也逐渐普及了，这个要看实际开发需求
- 背景图片也同样要注意缩放问题
- 字体不用考虑缩放问题，因为字体是矢量的，不会失真

```css
  /* 在 iphone8 下面 */
  img {
      /* 原始图片100*100px */
      width: 50px;
      height: 50px;
  }

  .box {
      /* 原始背景图片100*100px */
      background-size: 50px 50px;
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
    <title>03-二倍图做法</title>
    <style>
        /* 我们需要一个50*50像素（css像素）的图片，直接放到我们的iphone8里面会放大2倍100*100就会模糊 */
        /* 我们采取的是放一个100*100图片，然后手动的把这个图片缩小为50*50（css像素）*/
        /* 我们准备的图片比我们实际需要的大小大2倍，这就方式就是2倍图 */
        img:nth-child(2) {
            width: 50px;
            height: 50px;
        }
    </style>
</head>

<body>
    <!-- 模糊的 -->
    <img src="images/apple50.jpg" alt="">
    <!-- 我们采取2倍图 -->
    <img src="images/apple100.jpg" alt="">
</body>

</html>
```

手机模拟效果：

<img src="/assets/web/202204071530759.jpg" style="zoom: 25%;" />

【附：二倍精灵图做法】

- 在 PS 中将精灵图等比例缩放为原来的一半
- 之后根据大小测量坐标
- 注意代码里面 background-size 也要写：精灵图原来宽度的一半

## 背景缩放

`background-size` 属性规定**背景图像**的尺寸

```css
background-size: 背景图片宽度 背景图片高度;
```

- 单位：长度 | 百分比 | cover | contain
- cover 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域
- contain 把图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域

注意：

1. 以长度为单位时，只写其中一个参数，另一个参数会自动适配
2. 以百分比为单位时，其参照对象为父盒子，只写其中一个参数，另一个参数会自动适配

【cover & contain 案例】

![](/assets/web/202204071530760.png)

cover 案例：

```css
background-size: cover;
```

![](/assets/web/202204071530761.png)

contain 案例：

```css
background-size: contain;
```

![](/assets/web/202204071530762.png)

当图片是竖直放置时：

![](/assets/web/202204071530763.png)

【背景缩放案例】

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>05-背景图片2倍图</title>

    <style>
        /* 1. 我们有一个50*50的盒子需要一个背景图片，但是根据分析这个图片还是要准备2倍，100*100 */
        /* 2. 我们需要把这个图片缩放一半，也就是 50*50 background-size*/
        div {
            width: 50px;
            height: 50px;
            border: 1px solid red;
            background: url(images/apple100.jpg) no-repeat;
            background-size: 50px 50px;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

## 多倍图切工具 cutterman

![](/assets/web/202204071530764.png)

一次性导出多种倍数的图片。

# 移动端开发选择

## 4.1 移动端主流方案

（1）单独制作移动端页面【主流】

- 京东 https://m.jd.com/
- 淘宝 https://m.taobao.com/
- 苏宁 https://m.suning.com/
- ……

（2）响应式页面兼容移动端【其次】

- https://www.samsungeshop.com.cn/
- ……

## 单独移动端页面（主流）

通常情况下，网址域名前面加 `m(mobile)` 可以打开移动端。通过判断设备，如果是移动设备打开，则跳到移动端页面。

## 响应式兼容移动端（其次）

通过判断浏览器窗口宽度来改变样式，以适应不同终端。

缺点：制作麻烦，需要花很大精力去调兼容性问题。

## 总结

现在市场常见的移动端开发有单独制作移动端页面和相应式页面两种方案。

现在市场主流的选择还是单独制作移动端页面。

# 移动端技术解决方案

## 移动端浏览器

- 移动端浏览器基本以 `webkit` 内核为主，因此我们就考虑 `webkit` 兼容性问题
- 我们可以放心使用 H5标签 和 CSS3样式
- 同时我们浏览器的私有前缀我们只要考虑添加 `webkit` 即可

## CSS初始化 normalize.css

移动端 CSS 初始化推荐使用 `normalize.css/`

- Normalize.css：保护了有价值的默认值
- Normalize.css：修复了浏览器的漏洞
- Normalize.css：是模块化的
- Normalize.css：拥有详细的文档

官网地址：http://necolas.github.io/normalize.css/

## 	CSS3盒子模型 box-sizing

- 传统模式宽度计算：盒子的宽度 = CSS中设置的 width + border + padding
- CSS3盒子模型：盒子的宽度 = CSS中设置的宽度 width，里面包含了 border 和 padding

也就是说，我们的 CSS3 中的盒子模型，padding 和 border 不会撑大盒子了

```css
/* CSS3盒子模型 */
box-sizing: border-box;
/* 传统盒子模型 */
box-sizing: content-box;
```

传统 or CSS3盒子模型？

- 移动端可以全部使用 CSS3 盒子模型
- PC 端如果完全需要兼容，我们就用传统模式，如果不考虑兼容性，我们就选择 CSS3 盒子模型

案例：

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>06-CSS3盒子模型</title>
    <style>
        div:nth-child(1) {
            /* 传统盒子模型= width + border + padding */
            width: 200px;
            height: 200px;
            background-color: pink;
            padding: 10px;
            border: 10px solid red;
            box-sizing: content-box;
        }

        div:nth-child(2) {
            /* 有了这句话就让盒子变成CSS3盒子模型 */
            /* padding 和 border 不会再撑大盒子了 */
            box-sizing: border-box;
            width: 200px;
            height: 200px;
            background-color: purple;
            padding: 10px;
            border: 10px solid blue;
        }
    </style>
</head>

<body>
    <div></div>
    <div></div>
</body>

</html>
```

![](/assets/web/202204071530765.png)

![](/assets/web/202204071530766.png)

## 移动端特殊样式

```css
/* CSS3盒子模型 */
box-sizing: border-box;
-webkit-box-sizing: border-box;	/* 浏览器前缀兼容老版本浏览器 */

/* 移动端中某些地方点击会高亮，我们一般需要清除，设置 transparent 完成透明 */
/* 说明：比如 a链接 在移动端默认点击时会有一个背景颜色高亮 */
-webkit-tap-highlight-color: transparent;
/* 比如可以这样： */
* {
    -webkit-tap-highlight-color: transparent;
}

/* 移动端浏览器默认的外观在 iOS 上加上这个属性才能给按钮和输入框自定义样式 */
-webkit-appearance: none;
/* 比如可以这样： */
input  {
    -webkit-appearance: none;
}

/* 禁用长按页面时的弹出菜单 */
-webkit-touch-callout: none;
/* 此处以 img 及 a 为例子 */
img, a { -webkit-touch-callout: none; }
```

# 移动端常见布局

【移动端技术选型】

移动端布局和以前我们学习的PC端有所区别：

（1）单独制作移动端页面【主流】

- 流式布局（百分比布局）
- flex 弹性布局（强烈推荐）
- less + rem + 媒体查询布局
- 混合布局

（2）响应式页面兼容移动端【其次】

- 媒体查询
- bootstrap

## 流式布局（百分比布局）

- 流式布局，就是百分比布局，也称非固定像素布局
- 通过盒子的宽度设置成百分比来根据屏幕的宽度来进行伸缩，不受固定像素的限时，内容向两侧填充
- 流式布局方式是移动Web开发使用的比较常见的布局方式
- `max-width` 最大宽度（`max-height` 最大高度）
- `min-width` 最小宽度（`min-height` 最小高度）

案例：

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>08-流式布局</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        section {
            width: 100%;
            max-width: 980px;
            min-width: 320px;
            margin: 0 auto;
        }

        section div {
            float: left;
            width: 50%;
            height: 400px;
        }

        section div:nth-child(1) {
            background-color: pink;
        }

        section div:nth-child(2) {
            background-color: rgb(0, 0, 0);
        }
    </style>
</head>

<body>
    <section>
        <div></div>
        <div></div>
    </section>
</body>

</html>
```

![](/assets/web/202204071530767.gif)

## 案例：京东移动端首页

【项目结构】

![](/assets/web/202204071530768.png)

【HTML】

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no,maximum-scale=1.0,minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- 引入我们的css初始化文件 -->
    <link rel="stylesheet" href="css/normalize.css">
    <!-- 引入我们首页的css -->
    <link rel="stylesheet" href="css/index.css">
    <title>Document</title>
</head>

<body>
    <!-- 顶部 -->
    <header class="app">
        <ul>
            <li>
                <img src="images/close.png" alt="">
            </li>
            <li>
                <img src="images/logo.png" alt="">
            </li>
            <li>打开京东App，购物更轻松</li>
            <li>立即打开</li>
        </ul>
    </header>
    <!-- 搜索 -->
    <div class="search-wrap">
        <div class="search-btn"></div>
        <div class="search">
            <div class="jd-icon"></div>
            <div class="sou"></div>
        </div>
        <div class="search-login">登陆</div>
    </div>
    <!-- 主体内容部分 -->
    <div class="main-content">
        <!-- 滑动图 -->
        <div class="slider">
            <img src="upload/banner.dpg" alt="">
        </div>

        <!-- 小家电品牌日 -->
        <div class="brand">
            <div>
                <a href="#">
                    <img src="upload/pic11.dpg" alt="">
                </a>
            </div>
            <div>
                <a href="#">
                    <img src="upload/pic22.dpg" alt="">
                </a>

            </div>
            <div>
                <a href="#">
                    <img src="upload/pic33.dpg" alt="">
                </a>

            </div>
        </div>
        <!-- nav部分 -->
        <nav class="clearfix">
            <a href="">
                <img src="upload/nav1.webp" alt="">
                <span>京东超市</span>
            </a>

            <a href="">
                <img src="upload/nav2.webp" alt="">
                <span>京东超市</span>
            </a>

            <a href="">
                <img src="upload/nav1.webp" alt="">
                <span>京东超市</span>
            </a>

            <a href="">
                <img src="upload/nav1.webp" alt="">
                <span>京东超市</span>
            </a>

            <a href="">
                <img src="upload/nav1.webp" alt="">
                <span>京东超市</span>
            </a>

            <a href="">
                <img src="upload/nav3.webp" alt="">
                <span>京东超市</span>
            </a>

            <a href="">
                <img src="upload/nav1.webp" alt="">
                <span>京东超市</span>
            </a>

            <a href="">
                <img src="upload/nav1.webp" alt="">
                <span>京东超市</span>
            </a>

            <a href="">
                <img src="upload/nav1.webp" alt="">
                <span>京东超市</span>
            </a>

            <a href="">
                <img src="upload/nav1.webp" alt="">
                <span>京东超市</span>
            </a>

        </nav>
        <!-- 新闻模块 -->
        <div class="news">
            <a href="#">
                <img src="upload/new1.dpg" alt="">
            </a>
            <a href="#">
                <img src="upload/new2.dpg" alt="">

            </a>
            <a href="#">
                <img src="upload/new3.dpg" alt="">

            </a>
        </div>
    </div>
</body>

</html>
```

【CSS】

```css
body {
  width: 100%;
  /* 目前智能手机最小物理像素宽度一般为 320px */
  min-width: 320px;
  /* 此处的宽度为物理像素 */
  max-width: 640px;
  margin: 0 auto;
  font-size: 14px;
  font-family: -apple-system, Helvetica, sans-serif;
  color: #666;
  line-height: 1.5;
}

/*点击高亮我们需要清除清除  设置为transparent 完成透明*/

* {
  -webkit-tap-highlight-color: transparent;
}

/*在移动端浏览器默认的外观在iOS上加上这个属性才能给按钮和输入框自定义样式*/

input {
  -webkit-appearance: none;
}

/*禁用长按页面时的弹出菜单*/

img,
a {
  -webkit-touch-callout: none;
}

a {
  color: #666;
  text-decoration: none;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  vertical-align: middle;
}

div {
  /* css3 盒子模型 */
  box-sizing: border-box;
}

.clearfix:after {
  content: "";
  display: block;
  line-height: 0;
  visibility: hidden;
  height: 0;
  clear: both;
}

.app {
  height: 45px;
}

.app ul li {
  float: left;
  height: 45px;
  line-height: 45px;
  background-color: #333333;
  text-align: center;
  color: #fff;
}

.app ul li:nth-child(1) {
  width: 8%;
}

.app ul li:nth-child(1) img {
  width: 10px;
}

.app ul li:nth-child(2) {
  width: 10%;
}

.app ul li:nth-child(2) img {
  width: 30px;
  /* 图片默认和文字的底线对齐，此处设置图片与文字居中对齐 */
  /* 这样的话，通过对文字设置行高的方式，就也可以实现图片的垂直居中对齐 */
  vertical-align: middle;
}

.app ul li:nth-child(3) {
  width: 57%;
}

.app ul li:nth-child(4) {
  width: 25%;
  background-color: #f63515;
}

/* 搜索 */

.search-wrap {
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 44px;
  min-width: 320px;
  max-width: 640px;
}

.search-btn {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 44px;
}

.search-btn::before {
  content: "";
  display: block;
  width: 20px;
  height: 18px;
  background: url(../images/s-btn.png) no-repeat;
  background-size: 20px 18px;
  margin: 14px 0 0 15px;
}

.search-login {
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 44px;
  color: #fff;
  line-height: 44px;
}

.search {
  position: relative;
  height: 30px;
  background-color: #fff;
  margin: 0 50px;
  border-radius: 15px;
  margin-top: 7px;
}

.jd-icon {
  width: 20px;
  height: 15px;
  position: absolute;
  top: 8px;
  left: 13px;
  background: url(../images/jd.png) no-repeat;
  background-size: 20px 15px;
}

.jd-icon::after {
  content: "";
  position: absolute;
  right: -8px;
  top: 0;
  display: block;
  width: 1px;
  height: 15px;
  background-color: #ccc;
}

.sou {
  position: absolute;
  top: 8px;
  left: 50px;
  width: 18px;
  height: 15px;
  background: url(../images/jd-sprites.png) no-repeat -81px 0;
  background-size: 200px auto;
}

.slider img {
  width: 100%; 
}

/* 品牌日 */

.brand {
  overflow: hidden;
  border-radius: 10px 10px 0 0;
}

.brand div {
  float: left;
  width: 33.33%;
}

.brand div img {
  width: 100%;
}

/* nav */

nav {
  padding-top: 5px;
}

nav a {
  float: left;
  width: 20%;
  text-align: center;
}

nav a img {
  width: 40px;
  margin: 10px 0;
}

nav a span {
  display: block;
}

/* news */

.news {
  margin-top: 20px;
}

.news img {
  width: 100%;
}

.news a {
  float: left;
  box-sizing: border-box;
}

.news a:nth-child(1) {
  width: 50%;
}

/* .news a:nth-child(2),
.news a:nth-child(3),
{
    width: 25%;
} */

/* n+2 就是从从2个往后面选 */

.news a:nth-child(n + 2) {
  width: 25%;
  border-left: 1px solid #ccc;
}

/* .news a:nth-child(3) {
    width: 25%;
} */
```

【效果图】

<img src="/assets/web/202204071530769.png" style="zoom: 50%;" />

## 京东移动端案例重点强调

### 搜索框

![](/assets/web/202204071530770.png)

<img src="/assets/web/202204071530771.gif" style="zoom: 33%;" />

可以看到，当页面宽度变化时，搜索框会同步变宽，但是左右两边的按钮是不会变化的，实现这个功能的原理是：

![](/assets/web/202204071530772.png)

代码：

```html
 <div class="search-wrap">
        <div class="search-btn"></div>
        <div class="search">
            <div class="jd-icon"></div>
            <div class="sou"></div>
        </div>
        <div class="search-login">登陆</div>
 </div>
```

```css
.search-wrap {
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 44px;
  min-width: 320px;
  max-width: 640px;
}

.search-btn {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 44px;
}

.search-btn::before {
  content: "";
  display: block;
  width: 20px;
  height: 18px;
  background: url(../images/s-btn.png) no-repeat;
  background-size: 20px 18px;
  margin: 14px 0 0 15px;
}

.search-login {
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 44px;
  color: #fff;
  line-height: 44px;
}

.search {
  position: relative;
  height: 30px;
  background-color: #fff;
  margin: 0 50px;
  border-radius: 15px;
  margin-top: 7px;
}

.jd-icon {
  width: 20px;
  height: 15px;
  position: absolute;
  top: 8px;
  left: 13px;
  background: url(../images/jd.png) no-repeat;
  background-size: 20px 15px;
}

.jd-icon::after {
  content: "";
  position: absolute;
  right: -8px;
  top: 0;
  display: block;
  width: 1px;
  height: 15px;
  background-color: #ccc;
}

.sou {
  position: absolute;
  top: 8px;
  left: 50px;
  width: 18px;
  height: 15px;
  background: url(../images/jd-sprites.png) no-repeat -81px 0;
  background-size: 200px auto;
}
```

### 图片底部空白

<img src="/assets/web/202204071530774.jpg" style="zoom: 33%;" />

图片底部默认会带有一个空白，所以通常在开发中会设置：

```css
img {
    vertical-align: top;	/* 去掉图片底部空白 */
}
```

### 二倍精灵图做法

- 在 `firework` 里面把精灵图等比例缩放为原来的一半
- 之后根据大小测量坐标
- 注意代码里面 background-size 也要写：精灵图原来宽度的一半

### 竖线的选型

**情况一**

![](/assets/web/202204071530775.png)

这里 JD 与 搜索按钮之间有一个 `|`，之前我们使用盒子模型的右边框来实现，但是这里使用边框并不是一个好的选择，原因有二：

1. 边框的长度不能控制
2. 内容与边框的距离不好控制，需要额外设置边距（打破了结构的科学性）

解决方法：利用伪元素法

```css
.jd-icon::after {
	content: "";
	position: absolute;
	right: -8px;
	top: 0;
	display: block;
	width: 1px;
	height: 15px;
	background-color: #ccc;
}
```

**情况二**

![](/assets/web/202204071530776.jpg)

这里的一排盒子用百分比布局，所以如果我们利用伪元素法加竖线的话，整体的大小加起来就大于 100% 了，所以最优的解法为直接给盒子加边框，但是加边框后盒子就变大了，所以正确的做法是先设置 CSS3 盒子模型，然后再设置边框就可以了。

附：CSS3 盒子模型 `box-sizing: border-box;`

# 移动Web开发之flex布局

# flex布局体验

## 传统布局与flex布局

【传统布局】

- 兼容性好
- 布局繁琐

- 局限性，不能在移动端很好的布局

【flex布局】

- 操作方便，布局极为简单，移动端应用很广泛
- PC 端浏览器支持情况较差
- IE11 或更低版本不支持或仅部分支持

建议：

1. 如果是 PC 端页面布局，我们还是建议使用传统布局
2. 如果是移动端或者不考虑兼容性问题的 PC 端页面布局，推荐使用 flex 弹性布局

## 初体验

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>01-flex布局体验</title>
    <style>
        div {
            display: flex;
            width: 80%;
            height: 300px;
            background-color: pink;
        }

        div span {
            /* 弹性布局中：行内盒子的宽高可直接设置了，这也是优于百分比布局的地方之一 */
            /* 免去了浮动的设置，以及对父盒子清除浮动的麻烦 */
            width: 150px;
            height: 100px;
            background-color: black;
            margin-right: 5px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072059954.png)

**等间距分布**

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>01-flex布局体验</title>
    <style>
        div {
            display: flex;
            width: 80%;
            height: 300px;
            background-color: pink;
            justify-content: space-around;
        }

        div span {
            /* 弹性布局中：行内盒子的宽高可直接设置了 */
            width: 150px;
            height: 100px;
            background-color: black;
            margin-right: 5px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072059661.gif)

**平均分为三等分**

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>01-flex布局体验</title>
    <style>
        div {
            display: flex;
            width: 80%;
            height: 300px;
            background-color: pink;
            justify-content: space-around;
        }

        div span {
            /* 弹性布局中：行内盒子的宽高可直接设置了 */
            /* width: 150px; */
            height: 100px;
            background-color: black;
            margin-right: 5px;
            flex: 1;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072044174.gif)

# flex布局原理

## 布局原理

flex 是 flexible Box 的缩写，意为 “弹性布局”，用来为盒状模型**提供最大的灵活性**，**任何一个容器都可以指定为 flex 布局**。

- 当我们为父盒子设为 flex 布局以后，子元素的 float（浮动功能）、clear（清除浮动功能）和 vertical-align（垂直居中功能）属性将失效。
- 伸缩布局 = 弹性布局 = 伸缩盒布局 = 弹性盒布局 = flex 布局

采用 flex 布局的元素，称为 flex 容器（flex container），简称 “容器”。它的所有子元素自动成为容器成员，称为 flex 项目（flex item），简称 “项目”。

- 上面的体验中 div 就是 flex 父容器
- 上面的体验中 span 就是子容器 flex 项目
- 子容器可以横向排列也可以纵向排列

【子容器横向排列时的图示】

![](/assets/web/202204072107534.png)

【总结 flex 布局原理】

**就是通过给父盒子添加 flex 属性，来控制子盒子的位置和排列方式。**

# flex布局父项常见属性

## 常见父项属性

以下由 6 个属性是对父元素设置的

- `flex-direction`：设置主轴的方向
- `justify-content`：设置主轴上的子元素排列方式
- `flex-wrap`：设置子元素是否换行
- `align-content`：设置侧轴上的子元素的排列方式（多行）
- `align-items`：设置侧轴上的子元素排列方式（单行）
- `flex-flow`：复合属性，相当于同时设置了 flex-direction 和 flex-wrap

## flex-direction设置主轴的方向

**（1）主轴与侧轴**

在 flex 布局中，是分为主轴和侧轴两个方向，同样的叫法有：行 和 列、x轴 和 y轴

- 默认主轴方向就是 x轴 方向，水平向右
- 默认侧轴方向就是 y轴 方向，水平向下

![](/assets/web/202204072107247.png)

**（2）属性值**

`flex-direction` 属性决定主轴的方向（即：项目的排列方向）

注意：主轴和侧轴是会变化的，就看 flex-direction 设置谁为主轴，剩下的就是侧轴。而我们的子元素是跟着主轴来排列的。

| 属性值           | 说明               |
| ---------------- | ------------------ |
| `row`            | 从左到右（默认值） |
| `row-reverse`    | 从右到左           |
| `column`         | 从上到下           |
| `column-reverse` | 从下到上           |

【案例】

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>02-flex主轴方向</title>
    <style>
        div {
            /* 给父级添加flex属性 */
            display: flex;
            width: 800px;
            height: 300px;
            background-color: pink;
            /* 默认的主轴是 x 轴,那么 y 轴就是侧轴喽 */
            /* 我们的元素是跟着主轴来排列的 */
            flex-direction: row;
            /* 简单了解翻转即可 */
            /* flex-direction: row-reverse; */
            /* 我们可以把我们的主轴设置为 y 轴 那么 x 轴就成了侧轴 */
            /* flex-direction: column; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: purple;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072107852.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>02-flex主轴方向</title>
    <style>
        div {
            /* 给父级添加flex属性 */
            display: flex;
            width: 800px;
            height: 300px;
            background-color: pink;
            /* 默认的主轴是 x 轴,那么 y 轴就是侧轴喽 */
            /* 我们的元素是跟着主轴来排列的 */
            /* flex-direction: row; */
            /* 简单了解翻转即可 */
            flex-direction: row-reverse;
            /* 我们可以把我们的主轴设置为 y 轴 那么 x 轴就成了侧轴 */
            /* flex-direction: column; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: purple;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072107908.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>02-flex主轴方向</title>
    <style>
        div {
            /* 给父级添加flex属性 */
            display: flex;
            width: 800px;
            height: 300px;
            background-color: pink;
            /* 默认的主轴是 x 轴,那么 y 轴就是侧轴喽 */
            /* 我们的元素是跟着主轴来排列的 */
            /* flex-direction: row; */
            /* 简单了解翻转即可 */
            /* flex-direction: row-reverse; */
            /* 我们可以把我们的主轴设置为 y 轴 那么 x 轴就成了侧轴 */
            flex-direction: column;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: purple;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072108117.png)

## justify-content设置主轴上的子元素排列方式

`justify-content` 属性定义了项目在主轴上的对齐方式

注意：使用这个属性之前一定要确定好主轴是哪个！

| 属性值          | 说明                                             |
| --------------- | ------------------------------------------------ |
| `flex-start`    | 从头部开始，如果主轴是 x轴，则从左到右（默认值） |
| `flex-end`      | 从尾部开始排列                                   |
| `center`        | 在主轴居中对齐（如果主轴是 x轴 则 水平居中）     |
| `space-around`  | 平分剩余空间                                     |
| `space-between` | 先两边贴边再平方剩余空间（重要）                 |

【案例】

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>03-flex设置主轴上的子元素排列方式1</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 300px;
            background-color: pink;
            /* 默认的主轴是 x轴 row */
            flex-direction: row;
            /* justify-content: 是设置主轴上子元素的排列方式 */
            /* 从头部开始，如果主轴是 x轴，则从左到右（默认值） */
            justify-content: flex-start;
            /* 从尾部开始排列 */
            /* justify-content: flex-end; */
            /* 让我们子元素居中对齐 */
            /* justify-content: center; */
            /* 平分剩余空间 */
            /* justify-content: space-around; */
            /* 先两边贴边，在分配剩余的空间 */
            /* justify-content: space-between; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072109312.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>03-flex设置主轴上的子元素排列方式1</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 300px;
            background-color: pink;
            /* 默认的主轴是 x轴 row */
            flex-direction: row;
            /* justify-content: 是设置主轴上子元素的排列方式 */
            /* 从头部开始，如果主轴是 x轴，则从左到右（默认值） */
            /* justify-content: flex-start; */
            /* 从尾部开始排列 */
            justify-content: flex-end;
            /* 让我们子元素居中对齐 */
            /* justify-content: center; */
            /* 平分剩余空间 */
            /* justify-content: space-around; */
            /* 先两边贴边，在分配剩余的空间 */
            /* justify-content: space-between; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072109933.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>03-flex设置主轴上的子元素排列方式1</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 300px;
            background-color: pink;
            /* 默认的主轴是 x轴 row */
            flex-direction: row;
            /* justify-content: 是设置主轴上子元素的排列方式 */
            /* 从头部开始，如果主轴是 x轴，则从左到右（默认值） */
            /* justify-content: flex-start; */
            /* 从尾部开始排列 */
            /* justify-content: flex-end; */
            /* 让我们子元素居中对齐 */
            justify-content: center;
            /* 平分剩余空间 */
            /* justify-content: space-around; */
            /* 先两边贴边，在分配剩余的空间 */
            /* justify-content: space-between; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072110325.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>03-flex设置主轴上的子元素排列方式1</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 300px;
            background-color: pink;
            /* 默认的主轴是 x轴 row */
            flex-direction: row;
            /* justify-content: 是设置主轴上子元素的排列方式 */
            /* 从头部开始，如果主轴是 x轴，则从左到右（默认值） */
            /* justify-content: flex-start; */
            /* 从尾部开始排列 */
            /* justify-content: flex-end; */
            /* 让我们子元素居中对齐 */
            /* justify-content: center; */
            /* 平分剩余空间 */
            justify-content: space-around;
            /* 先两边贴边，在分配剩余的空间 */
            /* justify-content: space-between; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072044458.png)

![](/assets/web/202204072044460.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>03-flex设置主轴上的子元素排列方式1</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 300px;
            background-color: pink;
            /* 默认的主轴是 x轴 row */
            flex-direction: row;
            /* justify-content: 是设置主轴上子元素的排列方式 */
            /* 从头部开始，如果主轴是 x轴，则从左到右（默认值） */
            /* justify-content: flex-start; */
            /* 从尾部开始排列 */
            /* justify-content: flex-end; */
            /* 让我们子元素居中对齐 */
            /* justify-content: center; */
            /* 平分剩余空间 */
            /* justify-content: space-around; */
            /* 先两边贴边，在分配剩余的空间 */
            justify-content: space-between;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072110771.png)

> 注意：以上例子并不能根据浏览器窗口大小自动调整子项之间的间距，因为父盒子的宽度是固定死 800px 的，假如我们把父盒子宽度设为 80%，那么就可以有效果了。

`div {width: 800px;}`

![](/assets/web/202204072044513.gif)

`div {width: 80%;}`

![](/assets/web/202204072120879.gif)

`div {width: 80%;}`

`div span {width: 80%;}`

![](/assets/web/202204072120047.gif)

【以上到下为主轴的案例】

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>04-flex设置主轴上的子元素排列方式2</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* 我们现在的主轴是 y轴 */
            flex-direction: column;
            /* justify-content: 是设置主轴上子元素的排列方式 */
            /* 从头部开始，则从上到下（默认值） */
            justify-content: flex-start;
            /* 从下开始排列 */
            /* justify-content: flex-end; */
            /* 让我们子元素垂直居中对齐 */
            /* justify-content: center; */
            /* 平分剩余空间 */
            /* justify-content: space-around; */
            /* 先上下两边贴边，在分配剩余的空间 */
            /* justify-content: space-between; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072119794.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>04-flex设置主轴上的子元素排列方式2</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* 我们现在的主轴是 y轴 */
            flex-direction: column;
            /* justify-content: 是设置主轴上子元素的排列方式 */
            /* 从头部开始，则从上到下（默认值） */
            /* justify-content: flex-start; */
            /* 从下开始排列 */
            justify-content: flex-end;
            /* 让我们子元素垂直居中对齐 */
            /* justify-content: center; */
            /* 平分剩余空间 */
            /* justify-content: space-around; */
            /* 先上下两边贴边，在分配剩余的空间 */
            /* justify-content: space-between; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072119977.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>04-flex设置主轴上的子元素排列方式2</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* 我们现在的主轴是 y轴 */
            flex-direction: column;
            /* justify-content: 是设置主轴上子元素的排列方式 */
            /* 从头部开始，则从上到下（默认值） */
            /* justify-content: flex-start; */
            /* 从下开始排列 */
            /* justify-content: flex-end; */
            /* 让我们子元素垂直居中对齐 */
            justify-content: center;
            /* 平分剩余空间 */
            /* justify-content: space-around; */
            /* 先上下两边贴边，在分配剩余的空间 */
            /* justify-content: space-between; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

盒子自动垂直居中的困扰终于解决啦！！！

![](/assets/web/202204072120572.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>04-flex设置主轴上的子元素排列方式2</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* 我们现在的主轴是 y轴 */
            flex-direction: column;
            /* justify-content: 是设置主轴上子元素的排列方式 */
            /* 从头部开始，则从上到下（默认值） */
            /* justify-content: flex-start; */
            /* 从下开始排列 */
            /* justify-content: flex-end; */
            /* 让我们子元素垂直居中对齐 */
            /* justify-content: center; */
            /* 平分剩余空间 */
            justify-content: space-around;
            /* 先上下两边贴边，在分配剩余的空间 */
            /* justify-content: space-between; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072044845.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>04-flex设置主轴上的子元素排列方式2</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* 我们现在的主轴是 y轴 */
            flex-direction: column;
            /* justify-content: 是设置主轴上子元素的排列方式 */
            /* 从头部开始，则从上到下（默认值） */
            /* justify-content: flex-start; */
            /* 从下开始排列 */
            /* justify-content: flex-end; */
            /* 让我们子元素垂直居中对齐 */
            /* justify-content: center; */
            /* 平分剩余空间 */
            /* justify-content: space-around; */
            /* 先上下两边贴边，在分配剩余的空间 */
            justify-content: space-between;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072044461.png)

## flex-wrap设置子元素是否换行

默认情况下，项目都排在一条线（又称 “轴线”）上。flex-wrap 属性定义，flex 布局中默认是不换行的。

| 属性值   | 说明             |
| -------- | ---------------- |
| `nowrap` | 不换行（默认值） |
| `wrap`   | 换行             |

【案例】

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>05-flex-wrap子元素是否换行</title>
    <style>
        div {
            display: flex;
            width: 600px;
            height: 400px;
            background-color: pink;
            /* flex布局中，默认的子元素是不换行的， 如果装不开，会缩小子元素的宽度，放到父元素里面  */
            /* flex-wrap: nowrap; */
            /* 自动换行 */
            /* flex-wrap: wrap; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
    </div>
</body>

</html>
```

<img src="/assets/web/202204072121225.png" alt="image-20220119004923437" style="zoom:50%;" />

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>05-flex-wrap子元素是否换行</title>
    <style>
        div {
            display: flex;
            width: 600px;
            height: 400px;
            background-color: pink;
            /* flex布局中，默认的子元素是不换行的， 如果装不开，会缩小子元素的宽度，放到父元素里面  */
            /* flex-wrap: nowrap; */
            /* 自动换行 */
            flex-wrap: wrap;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
    </div>
</body>

</html>
```

<img src="/assets/web/202204072044194.png" style="zoom:50%;" />

## align-items设置侧轴上的子元素排列方式（单行）

该属性是控制子项在侧轴（默认是 y轴）上的排列方式，在子项为单项（单行）的时候使用。

| 属性值       | 说明                                                       |
| ------------ | ---------------------------------------------------------- |
| `flex-start` | 从上到下                                                   |
| `flex-end`   | 从下到上                                                   |
| `center`     | 挤在一起居中                                               |
| `stretch`    | 拉伸（默认值）注：前提是子盒子没有指定高度，否则没有效果！ |

【案例】

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>06-flex设置侧轴上的子元素排列方式</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* 默认的主轴是 x轴 row */
            flex-direction: row;
            justify-content: center;
            /* 设置侧轴：从上到下 */
            align-items: flex-start;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072044779.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>06-flex设置侧轴上的子元素排列方式</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* 默认的主轴是 x轴 row */
            flex-direction: row;
            justify-content: center;
            /* 设置侧轴：从下到上 */
            align-items: flex-end;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072123406.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>06-flex设置侧轴上的子元素排列方式</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* 默认的主轴是 x轴 row */
            flex-direction: row;
            justify-content: center;
            /* 设置侧轴：挤在一起居中 */
            align-items: center;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072123731.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>06-flex设置侧轴上的子元素排列方式</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* 默认的主轴是 x轴 row */
            flex-direction: row;
            justify-content: center;
            /* 设置侧轴：拉伸（默认） */
            align-items: stretch;
        }

        div span {
            width: 150px;
            /* 拉伸的前提是没有指定高度 */
            /* height: 100px; */
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072123186.png)

> align-items 只能统一对侧轴上的子元素排列方式，假如有多行子元素，要分别对不同的行设置不同的排列方式，那么此种方式就无法做了。

## align-content 设置侧轴上的子元素的排列方式（多行）

设置子项在侧轴上的排列方式并且只能用于子项出现 **换行** 的情况（多行），在单行下是没有效果的。

| 属性值          | 说明                                   |
| --------------- | -------------------------------------- |
| `flex-start`    | 在侧轴的头部开始排列                   |
| `flex-end`      | 在侧轴的尾部开始排列                   |
| `center`        | 在侧轴中间显示                         |
| `space-around`  | 子项在侧轴平方剩余空间                 |
| `space-between` | 子项在侧轴先分布在两头，再平分剩余空间 |
| `stretch`       | 行拉伸以占据剩余空间（默认值）         |

【案例】

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>07-flex设置侧轴上的子元素排列方式（多行）</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* 换行 */
            flex-wrap: wrap;
            /* 因为有了换行，此时我们侧轴上控制子元素的对齐方式我们用 align-content */
            align-content: flex-start;
            /* align-content: center; */
            /* align-content: space-around; */
            /* align-content: space-between; */
            /* align-content: stretch; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072044282.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>07-flex设置侧轴上的子元素排列方式（多行）</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* 换行 */
            flex-wrap: wrap;
            /* 因为有了换行，此时我们侧轴上控制子元素的对齐方式我们用 align-content */
            /* align-content: flex-start; */
            align-content: center;
            /* align-content: space-around; */
            /* align-content: space-between; */
            /* align-content: stretch; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072124455.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>07-flex设置侧轴上的子元素排列方式（多行）</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* 换行 */
            flex-wrap: wrap;
            /* 因为有了换行，此时我们侧轴上控制子元素的对齐方式我们用 align-content */
            /* align-content: flex-start; */
            /* align-content: center; */
            align-content: space-around;
            /* align-content: space-between; */
            /* align-content: stretch; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072124861.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>07-flex设置侧轴上的子元素排列方式（多行）</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* 换行 */
            flex-wrap: wrap;
            /* 因为有了换行，此时我们侧轴上控制子元素的对齐方式我们用 align-content */
            /* align-content: flex-start; */
            /* align-content: center; */
            /* align-content: space-around; */
            align-content: space-between;
            /* align-content: stretch; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072124544.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>07-flex设置侧轴上的子元素排列方式（多行）</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* 换行 */
            flex-wrap: wrap;
            /* 因为有了换行，此时我们侧轴上控制子元素的对齐方式我们用 align-content */
            /* align-content: flex-start; */
            /* align-content: center; */
            /* align-content: space-around; */
            /* align-content: space-between; */
            align-content: stretch;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072124603.png)

## align-content和align-items区别

- align-items 适用于单行情况下，只有上对齐、下对齐、居中和拉伸
- align-content 适应于换行（多行）的情况下（单行情况下无效），可以设置上对齐、下对齐、居中、拉伸以及平均分配剩余空间等属性值
- 总结就是单行找 align-items 多行找 align-content

![](/assets/web/202204072044063.png)



**注意，常理来说 justify-content 与 align-items 默认分别处理项目横轴，纵轴的对齐方式，但如果我们修改了 flex-direction 为 column ，它们处理的轴向会交换，也就是 justify-content 处理纵轴，align-items 处理横轴。**

## flex-flow

`flex-flow` 属性是 flex-direction 和 flex-wrap 属性的复合属性

`flex-flow: row wrap;`

- `flex-direction`：设置主轴的方向
- `justify-content`：设置主轴上的子元素排列方式
- `flex-wrap`：设置子元素是否换行
- `align-content`：设置侧轴上的子元素的排列方式（多行）
- `align-items`：设置侧轴上的子元素排列方式（单行）
- `flex-flow`：复合属性，相当于同时设置了 flex-direction 和 flex-wrap

【案例】

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>08-flex-flow复合属性</title>
    <style>
        div {
            display: flex;
            width: 600px;
            height: 300px;
            background-color: pink;
            /* flex-direction: column;
            flex-wrap: wrap; */
            /* 把设置主轴方向和是否换行（换列）简写 */
            flex-flow: column wrap;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
    </div>
</body>

</html>
```

![](/assets/web/202204072127063.png)

# flex布局子项常见属性

## flex-grow属性

用于决定项目在有剩余空间的情况下是否按比例放大，**默认不放大**。语法：

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

![图片描述](/assets/web/202201232216536.png)

假设父元素宽400px，有两个子元素：A和B。A宽为100px，B宽为200px。 则空余空间为 400-（100+200）= 100px。 如果A，B都不索取剩余空间，则有100px的空余空间。

如果A索取剩余空间:设置flex-grow为1，B不索取。则最终A的大小为 自身宽度（100px）+ 剩余空间的宽度（100px）= 200px 。

**如果A，B都设索取剩余空间，A设置flex-grow为1，B设置flex-grow为2。则最终A的大小为 自身宽度（100px）+ A获得的剩余空间的宽度（100px (1/(1+2))）,最终B的大小为 自身宽度（200px）+ B获得的剩余空间的宽度（100px (2/(1+2))）**
👆对剩余空间进行比例分配

## flex-basis属性

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

![图片描述](/assets/web/202204081710320.png)

上图中先设置了 flex-basis 属性，后设置了 width 属性，但宽度依旧以 flex-basis 属性为准。

## flex-shrink属性

> 默认就会缩小，不放大

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

![图片描述](/assets/web/202201232219192.png)

上图中第二个子属性 flex-shrink 为 0，所以自身不会缩小。



假设父元素宽400px，有两子元素：A和B。A宽为200px，B宽为300px。 则A，B总共超出父元素的宽度为(200+300)- 400 = 100px。 如果A，B都不减小宽度，即都设置flex-shrink为0，则会有100px的宽度超出父元素。 

如果A不减小宽度:设置flex-shrink为0，B减小(`flex-shrink:1;`)。则最终B的大小为 自身宽度(300px)- 总共超出父元素的宽度(100px)= 200px 

如果A，B都减小宽度，A设置flex-shirk为3，B设置flex-shirk为2。则最终A的大小为 自身宽度(200px)- A减小的宽度(100px * (200px * 3/(200 * 3 + 300 * 2))) = 150px,最终B的大小为 自身宽度(300px)- B减小的宽度(100px * (300px * 2/(200 * 3 + 300 * 2))) = 250px

$超出宽度*(widthA*系数A/(widthA*系数A+(widthB*系数B))$

不再是普通的分配超出元素，对自身进行裁剪，所以要把自身宽度加入



## flex属性

flex 属性用于指定弹性子元素如何分配空间

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

> - 数字**依次**给grow或者shrink，百分比或者长度是给basis的！！！！
> - 如果在实际开发中，可以具体展开控制台的flex属性查看应用到哪了
> - 另外，如果设置了放大缩小，flex-basis设置的值就没有任何用了，它会自动缩小或者放大，除非刚刚好，如果要消除放大缩小的影响，最好属性值设置 0 0 值
> - 这也是为什么flex:1，也能有宽度的原因
> - 如果主轴方向变了，那么flex-basis控制的值不再是宽度，而是高度了，但是主轴变化对width，height无效

【案例】

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>09-flex子项flex份数</title>
    <style>
        section {
            display: flex;
            width: 60%;
            height: 150px;
            background-color: pink;
            margin: 0 auto;
        }

        section div:nth-child(1) {
            width: 100px;
            height: 150px;
            background-color: rgb(166, 255, 139);
        }

        section div:nth-child(2) {
            flex: 1;
            background-color: rgb(0, 0, 0);
        }

        section div:nth-child(3) {
            width: 100px;
            height: 150px;
            background-color: rgb(124, 185, 255);
        }

        /* --------------------------------- */

        p {
            display: flex;
            width: 60%;
            height: 150px;
            background-color: pink;
            margin: 100px auto;
        }

        p span {
            flex: 1;
        }

        p span:nth-child(2) {
            flex: 2;
            background-color: gray;
        }
    </style>
</head>

<body>
    <section>
        <div></div>
        <div></div>
        <div></div>
    </section>
    <p>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </p>
</body>

</html>
```

![](/assets/web/202204081646440.png)

![](/assets/web/202204081646783.gif)

## align-self控制子项自己在侧轴上的排列方式

`align-self` 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。

默认值 auto，表示继承父元素 align-items 属性，如果没有父元素，则等同于 stretch。

```css
span:nth-child(2) {
    /* 设置自己在侧轴上的排列方式 */
    align-self: flex-end;
}
```

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>align-self控制子项自己在侧轴上的排列方式</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* 默认的主轴是 x轴 row */
            flex-direction: row;
            justify-content: center;
            /* 设置侧轴：从下到上 */
            align-items: flex-end;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }

        div span:nth-child(2) {
            align-self: center;
        }
    </style>
</head>

<body>
<div>
    <span>1</span>
    <span>2</span>
    <span>3</span>
</div>
</body>

</html>
```

![](/assets/web/202204072044529.png)

## order属性定义项目的排列顺序

数值越小，排列越靠前，默认为 0。

注意：和 z-index 不一样。

```css
.item {
    order: <number>;
}
```

【案例】

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>10-align-self和order</title>
    <style>
        div {
            display: flex;
            width: 80%;
            height: 300px;
            background-color: pink;
            /* 让三个子盒子沿着侧轴底侧对齐 */
            /* align-items: flex-end; */
            /* 我们想只让3号盒子下来底侧 */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            margin-right: 5px;
        }

        div span:nth-child(2) {
            /* 排列顺序 */
            /* 默认是0，-1比0小所以在前面 */
            order: -1;
        }

        div span:nth-child(3) {
            /* 单独设置 */
            align-self: flex-end;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](/assets/web/202204081647472.png)

# 携程网首页案例制作

**【案例：携程网移动端首页】**

访问地址：https://m.ctrip.com/

**（1）技术选型**

方案：我们采取单独制作移动页面方案

技术：布局采取 flex 布局

**（2）搭建相关文件夹结构**

![](/assets/web/202204081647474.png)

**（3）设置视口标签以及引入初始化样式**

```html
<meta name="viewport" content="width=device-width, user-scalable=no,
initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/index.css">
```

**（4）常用初始化样式**

```css
/* 放在 index.css 中 */
body {
	max-width: 540px;
	min-width: 320px;
	margin: 0 auto;
	font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft Yahei", STXihei, hei;
	color: #000;
	background: #f2f2f2;
	overflow-x: hidden;
	-webkit-tap-highlight-color: transparent;
}
```

**（5）常见模块命名**

<img src="/assets/web/202204072044598.png" style="zoom: 33%;" />

<img src="/assets/web/202204072044966.png" style="zoom:33%;" />

**（6）常见 flex 布局思路**

![](/assets/web/202204081647475.png)

【完整代码】

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/index.css">
    <title>携程在手，说走就走</title>
</head>

<body>
    <!-- 顶部搜索 -->
    <div class="search-index">
        <div class="search">搜索:目的地/酒店/景点/航班号</div>
        <a href="#" class="user">我 的</a>
    </div>
    <!-- 焦点图模块 -->
    <div class="focus">
        <img src="upload/focus.jpg" alt="">
    </div>
    <!-- 局部导航栏 -->
    <ul class="local-nav">
        <li>
            <a href="#" title="景点·玩乐">
                <span class="local-nav-icon-icon1"></span>
                <span>景点·玩乐</span>
            </a>
        </li>
        <li>
            <a href="#" title="景点·玩乐">
                <span class="local-nav-icon-icon2"></span>
                <span>景点·玩乐</span>
            </a>
        </li>
        <li>
            <a href="#" title="景点·玩乐">
                <span class="local-nav-icon-icon3"></span>
                <span>景点·玩乐</span>
            </a>
        </li>
        <li>
            <a href="#" title="景点·玩乐">
                <span class="local-nav-icon-icon4"></span>
                <span>景点·玩乐</span>
            </a>
        </li>
        <li>
            <a href="#" title="景点·玩乐">
                <span class="local-nav-icon-icon5"></span>
                <span>景点·玩乐</span>
            </a>
        </li>

    </ul>

    <!-- 主导航栏 -->
    <nav>
        <div class="nav-common">
            <div class="nav-items">
                <a href="#">海外酒店</a>
            </div>
            <div class="nav-items">
                <a href="#">海外酒店</a>
                <a href="#">特价酒店</a>
            </div>
            <div class="nav-items">
                <a href="#">海外酒店</a>
                <a href="#">特价酒店</a>
            </div>
        </div>
        <div class="nav-common">
            <div class="nav-items">
                <a href="#">海外酒店</a>
            </div>
            <div class="nav-items">
                <a href="#">海外酒店</a>
                <a href="#">特价酒店</a>
            </div>
            <div class="nav-items">
                <a href="#">海外酒店</a>
                <a href="#">特价酒店</a>
            </div>
        </div>
        <div class="nav-common">
            <div class="nav-items">
                <a href="#">海外酒店</a>
            </div>
            <div class="nav-items">
                <a href="#">海外酒店</a>
                <a href="#">特价酒店</a>
            </div>
            <div class="nav-items">
                <a href="#">海外酒店</a>
                <a href="#">特价酒店</a>
            </div>
        </div>

    </nav>
    <!-- 侧导航栏 -->
    <ul class="subnav-entry">
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>电话费</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>电话费</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>电话费</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>电话费</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>电话费</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>电话费</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>电话费</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>电话费</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>电话费</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>电话费</span>
            </a>
        </li>

    </ul>

    <!-- 销售模块 -->
    <div class="sales-box">
        <div class="sales-hd">
            <h2>热门活动</h2>
            <a href="#" class="more">获取更多福利</a>
        </div>
        <div class="sales-bd">
            <div class="row">
                <a href="#">
                    <img src="upload/pic1.jpg" alt="">
                </a>
                <a href="#">
                    <img src="upload/pic2.jpg" alt="">

                </a>
            </div>
            <div class="row">
                <a href="#">
                    <img src="upload/pic3.jpg" alt="">
                </a>
                <a href="#">
                    <img src="upload/pic4.jpg" alt="">

                </a>
            </div>
            <div class="row">
                <a href="#">
                    <img src="upload/pic5.jpg" alt="">
                </a>
                <a href="#">
                    <img src="upload/pic6.jpg" alt="">

                </a>
            </div>

        </div>
    </div>
</body>

</html>
```

```css
body {
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
  font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft Yahei",
    STXihei, hei;
  color: #000;
  background: #f2f2f2;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #222;
}

div {
  box-sizing: border-box;
}

/* 搜索模块 */

.search-index {
  display: flex;
  /* 固定定位跟父级没有关系 它以屏幕为准 */
  position: fixed;
  top: 0;
  left: 50%;
  /* 固定的盒子应该有宽度 */
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 100%;
  min-width: 320px;
  max-width: 540px;
  height: 44px;
  background-color: #f6f6f6;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.search {
  position: relative;
  height: 26px;
  line-height: 24px;
  border: 1px solid #ccc;
  flex: 1;
  font-size: 12px;
  color: #666;
  margin: 7px 10px;
  padding-left: 25px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.search::before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  width: 15px;
  height: 15px;
  background: url(../images/sprite.png) no-repeat -59px -279px;
  background-size: 104px auto;
}

.user {
  width: 44px;
  height: 44px;
  font-size: 12px;
  text-align: center;
  color: #2eaae0;
}

.user::before {
  content: "";
  display: block;
  width: 23px;
  height: 23px;
  background: url(../images/sprite.png) no-repeat -59px -194px;
  background-size: 104px auto;
  margin: 4px auto -2px;
}

/* focus */

.focus {
  padding-top: 44px;
}

.focus img {
  width: 100%;
}

/* local-nav */

.local-nav {
  display: flex;
  height: 64px;
  margin: 3px 4px;
  background-color: #fff;
  border-radius: 8px;
}

.local-nav li {
  flex: 1;
}

.local-nav a {
  display: flex;
  flex-direction: column;
  /* 侧轴居中对齐 因为是单行 */
  align-items: center;
  font-size: 12px;
}

.local-nav li [class^="local-nav-icon"] {
  width: 32px;
  height: 32px;
  background-color: pink;
  margin-top: 8px;
  background: url(../images/localnav_bg.png) no-repeat 0 0;
  background-size: 32px auto;
}

.local-nav li .local-nav-icon-icon2 {
  background-position: 0 -32px;
}

.local-nav li .local-nav-icon-icon3 {
  background-position: 0 -64px;
}

.local-nav li .local-nav-icon-icon4 {
  background-position: 0 -96px;
}

.local-nav li .local-nav-icon-icon5 {
  background-position: 0 -128px;
}

/* nav */

nav {
  overflow: hidden;
  border-radius: 8px;
  margin: 0 4px 3px;
}

.nav-common {
  display: flex;
  height: 88px;
  background-color: pink;
}

.nav-common:nth-child(2) {
  margin: 3px 0;
}

.nav-items {
  /* 不冲突的 */
  flex: 1;
  display: flex;
  flex-direction: column;
}

.nav-items a {
  flex: 1;
  text-align: center;
  line-height: 44px;
  color: #fff;
  font-size: 14px;
  /* 文字阴影 */
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
}

.nav-items a:nth-child(1) {
  border-bottom: 1px solid #fff;
}

.nav-items:nth-child(1) a {
  border: 0;
  background: url(../images/hotel.png) no-repeat bottom center;
  background-size: 121px auto;
}

/* -n+2就是选择前面两个元素 */

.nav-items:nth-child(-n + 2) {
  border-right: 1px solid #fff;
}

.nav-common:nth-child(1) {
  background: -webkit-linear-gradient(left, #fa5a55, #fa994d);
}

.nav-common:nth-child(2) {
  background: -webkit-linear-gradient(left, #4b90ed, #53bced);
}

.nav-common:nth-child(3) {
  background: -webkit-linear-gradient(left, #34c2a9, #6cd559);
}

/* subnav-entry */

.subnav-entry {
  display: flex;
  border-radius: 8px;
  background-color: #fff;
  margin: 0 4px;
  flex-wrap: wrap;
  padding: 5px 0;
}

.subnav-entry li {
  /* 里面的子盒子可以写 % 相对于父级来说的 */
  flex: 20%;
}

.subnav-entry a {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subnav-entry-icon {
  width: 28px;
  height: 28px;
  background-color: pink;
  margin-top: 4px;
  background: url(../images/subnav-bg.png) no-repeat;
  background-size: 28px auto;
}

/* sales-box */

.sales-box {
  border-top: 1px solid #bbb;
  background-color: #fff;
  margin: 4px;
}

.sales-hd {
  position: relative;
  height: 44px;
  border-bottom: 1px solid #ccc;
}

.sales-hd h2 {
  position: relative;
  text-indent: -999px;
  overflow: hidden;
}

.sales-hd h2::after {
  position: absolute;
  top: 5px;
  left: 8px;
  content: "";
  width: 79px;
  height: 15px;
  background: url(../images/hot.png) no-repeat 0 -20px;
  background-size: 79px auto;
}

.more {
  position: absolute;
  right: 5px;
  top: 0px;
  background: -webkit-linear-gradient(left, #ff506c, #ff6bc6);
  border-radius: 15px;
  padding: 3px 20px 3px 10px;
  color: #fff;
}

.more::after {
  content: "";
  position: absolute;
  top: 9px;
  right: 9px;
  width: 7px;
  height: 7px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(45deg);
}

.row {
  display: flex;
}

.row a {
  flex: 1;
  border-bottom: 1px solid #eee;
}

.row a:nth-child(1) {
  border-right: 1px solid #eee;
}

.row a img {
  width: 100%;
}
```

<img src="/assets/web/202204072044624.png" style="zoom: 67%;" />

<img src="/assets/web/202204081647476.png" style="zoom:67%;" />

# 携程网首页案例重点强调

## 搜索模块

<img src="/assets/web/202204081647477.png" alt="" style="zoom:50%;" />

```html
<!-- 顶部搜索 -->
<div class="search-index">
    <div class="search">搜索:目的地/酒店/景点/航班号</div>
	<a href="#" class="user">我 的</a>
</div>
```

最上方的搜索模块整体是利用固定定位来实现的，里面的内容布局则是通过弹性布局实现。

**（1）整体部分的定位**

```css
.search-index {
  /* 固定定位跟父级没有关系 它以屏幕为准 */
  position: fixed;
  top: 0;
  /* 重点：利用 translateX 实现移动自身宽度的一半！*/
  left: 50%;
  /* 固定的盒子应该有宽度 */
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  /* 搜索框宽度与显示宽度一样 */
  width: 100%;
  min-width: 320px;
  max-width: 540px;
  height: 44px;
  background-color: #f6f6f6;
}
```

**（2）搜索栏与我的部分布局**

- 【对 search-index 设置弹性布局】

```css
display: flex;
```

- 【对 serch 设置占满1份区域】

```css
.search {
  height: 26px;
  line-height: 24px;
  border: 1px solid #ccc;
  /* 设置为占据 1份 */
  flex: 1;
  font-size: 12px;
  color: #666;
  margin: 7px 10px;
  padding-left: 25px;
}
```

- 【user 单独设置一个宽度，占据自己那部分】

```css
.user {
  width: 44px;
  height: 44px;
  font-size: 12px;
  text-align: center;
  color: #2eaae0;
}
```

最终实现的结构：

![](/assets/web/202204081647478.png)

## 渐变

### 背景渐变

**（1）背景线性渐变**

语法：

`background: linear-gradient(起始方向, 颜色1, 颜色2, 颜色3, ...);`

```css
background: -webkit-linear-gradient(left, red, blue);
background: -webkit-linear-gradient(left top, red, blue, deeppink);
background: -webkit-linear-gradient(45deg, red, blue);
```

- 背景渐变**必须**添加浏览器私有前缀

- 起始方向可以是：**方位名词** 或 **度数**，如果省略默认就是 top（从上到下）

- 方位名词：`top`、`bottom`、`left`、`right`、`两两组合`

- 度数：角度是指水平线和渐变线之间的角度，逆时针方向计算。换句话说，0deg 将创建一个从下到上的渐变，90deg 将创建一个从左到右的渐变。

  <img src="/assets/web/202204081647479.png" style="zoom:50%;" />

  > 注意很多浏览器（Chrome、Safari、firefox等）的使用了旧的标准，即 0deg 将创建一个从左到右的渐变，90deg 将创建一个从下到上的渐变。换算公式 **90 - x = y** 其中 x 为标准角度，y为非标准角度。

【案例】

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>背景线性渐变</title>
    <style>
        div {
            width: 600px;
            height: 200px;
            background-color: red; /* 浏览器不支持的时候显示 */
            /* 背景渐变必须添加浏览器私有前缀 */
            /* 由于此处是移动端，所以我们写 webkit 就够了 */
            background: -webkit-linear-gradient(left, red, blue);
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![](/assets/web/202204072044294.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>背景线性渐变</title>
    <style>
        div {
            width: 600px;
            height: 200px;
            background-color: red; /* 浏览器不支持的时候显示 */
            /* 背景渐变必须添加浏览器私有前缀 */
            /* 默认从上到下 top */
            background: -webkit-linear-gradient(red, blue);
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![](/assets/web/202204081647480.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>背景线性渐变</title>
    <style>
        div {
            width: 600px;
            height: 200px;
            background-color: red; /* 浏览器不支持的时候显示 */
            /* 背景渐变必须添加浏览器私有前缀 */
            /* left top 与 top left 都可以 */
            background: -webkit-linear-gradient(left top, red, blue);
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![](/assets/web/202204072045543.png)

【使用透明度】

CSS3 渐变也支持透明度（transparent），可用于创建减弱变淡的效果。

为了添加透明度，我们使用 `rgba()` 函数来定义颜色节点。rgba() 函数中的最后一个参数可以是从 0 到 1 的值，它定义了颜色的透明度：0 表示完全透明，1 表示完全不透明。

下面的实例演示了从左边开始的线性渐变。起点是完全透明，慢慢过渡到完全不透明的红色：

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>背景线性渐变</title>
    <style>
        div {
            width: 600px;
            height: 200px;
            /* 背景渐变必须添加浏览器私有前缀 */
            /* 前面的 red 为浏览器不支持时显示 */
            background: red -webkit-linear-gradient(left, rgba(0,0,255,.2), rgba(255,0,0,1));
        }
    </style>
</head>

<body>
<div></div>
</body>

</html>
```

<img src="/assets/web/202204072045578.png" style="zoom: 67%;" />

**（2）径向渐变**

径向渐变由它的中心定义。

为了创建一个径向渐变，你也必须至少定义两种颜色节点。颜色节点即你想要呈现平稳过渡的颜色。同时，你也可以指定渐变的中心、形状（圆形或椭圆形）、大小。默认情况下，渐变的中心是 center（表示在中心点），渐变的形状是 ellipse（表示椭圆形），渐变的大小是 farthest-corner（表示到最远的角落）。

> 径向渐变不要加浏览器前缀！

**径向渐变 - 颜色节点均匀分布（默认情况下）**

```css
width: 300px;
height: 300px;
background: radial-gradient(red, green, blue);
```

<img src="/assets/web/202204081647481.png" style="zoom:50%;" />

**径向渐变 - 颜色节点不均匀分布**

```css
width: 300px;
height: 300px;
background: radial-gradient(red 5%, green 15%, blue 60%);
```

<img src="/assets/web/202204081647482.png" style="zoom:50%;" />

**设置形状**

`shape` 参数定义了形状。它可以是值 `circle` 或 `ellipse`。其中，`circle` 表示圆形，`ellipse` 表示椭圆形。默认值是 `ellipse`。

```css
height: 150px;
width: 200px;
background: radial-gradient(red, yellow, green); 
background: radial-gradient(circle, red, yellow, green); 
```

<img src="/assets/web/202204081647483.png" style="zoom:50%;" />

**不同尺寸大小关键字的使用**

`size` 参数定义了渐变的大小。它可以是以下四个值：

- `closest-side`
- `farthest-side`
- `closest-corner`
- `farthest-corner`

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8"> 
<title></title> 
<style>
#grad1 {
  height: 150px;
  width: 150px;
  background-color: red; /* 浏览器不支持的时候显示 */
  background: radial-gradient(closest-side at 60% 55%, red, yellow, black); 
}

#grad2 {
  height: 150px;
  width: 150px;
  background-color: red; /* 浏览器不支持的时候显示 */
  background: radial-gradient(farthest-side at 60% 55%, red, yellow, black); 
}

#grad3 {
  height: 150px;
  width: 150px;
  background-color: red; /* 浏览器不支持的时候显示 */
  background: radial-gradient(closest-corner at 60% 55%, red, yellow, black);
}

#grad4 {
  height: 150px;
  width: 150px;
  background-color: red; /* 浏览器不支持的时候显示 */
  background: radial-gradient(farthest-corner at 60% 55%, red, yellow, black); 
}
</style>
</head>
<body>

<h3>径向渐变 - 不同尺寸大小关键字的使用</h3>

<p><strong>closest-side：</strong></p>
<div id="grad1"></div>

<p><strong>farthest-side：</strong></p>
<div id="grad2"></div>

<p><strong>closest-corner：</strong></p>
<div id="grad3"></div>

<p><strong>farthest-corner（默认）：</strong></p>
<div id="grad4"></div>

</body>
</html>
```

<img src="/assets/web/202204081647484.png" style="zoom:50%;" />

### 文字渐变

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        p{
            font-size: 60px;
            background: linear-gradient(0deg,red,blue);
            background-clip:text;
            -webkit-background-clip: text;
            color: transparent;
        }
    </style>
</head>
<body>
<p>
    我是渐变文字
</p>
</body>
</html>
```

<img src="/assets/web/202204081647485.png" style="zoom:50%;" />

**核心内容说明**

background 属性：设置背景图片为线性渐变色。

background-clip 属性：规定背景的绘制区域（我们注意到该属性上的-webkit-，说明该属性还存在兼容问题，并不是所有浏览器都支持，在 W3C 是没有 text 这个值的，这里的 text 是背景被裁剪到文字）。

![](/assets/web/202204081647486.png)

color 属性：设置文字颜色为透明，然后面的背景色显示出来。
