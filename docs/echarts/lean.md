# Echarts

## 快速上手

- 步骤1：引入echarts.js文件
- 步骤2：准备一个呈现图表的盒子
- 步骤3：初始化echarts实例对象
- 步骤4：准备配置项
- 步骤5：将配置项设置给echarts实例对象

```html
    <!-- 2.准备一个具备大小的 DOM 容器 -->
    <div class="box"></div>

    <script>
        // 3.初始化echarts实例化对象
        var myChart = echarts.init(document.querySelector('.box'));
        // 4.指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 5.使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    </script>
```

- 我们除了柱形图还可以选择其他不同的图表，唯一不同的步骤就在于步骤4指定图表的配置项和数据

---

## 组件

在系列之上，ECharts 中各种内容，被抽象为“组件”。例如，ECharts 中至少有这些组件：`xAxis`（直角坐标系 X 轴）、`yAxis`（直角坐标系 Y 轴）、`grid`（直角坐标系底板）、`angleAxis`（极坐标系角度轴）、`radiusAxis`（极坐标系半径轴）、`polar`（极坐标系底板）、`geo`（地理坐标系）、`dataZoom`（数据区缩放组件）、`visualMap`（视觉映射组件）、`tooltip`（提示框组件）、`toolbox`（工具栏组件）、`series`（系列）、...。

我们注意到，其实系列（`series`）也是一种组件，可以理解为：系列是专门绘制“图”的组件。

如下图，右侧的 `option` 中声明了各个组件（包括系列），各个组件就出现在图中。

![图片描述](/assets/web/202203301948863.png)

注：因为系列是一种特殊的组件，所以有时候也会出现 “组件和系列” 这样的描述，这种语境下的 “组件” 是指：除了 “系列” 以外的其他组件。

### title标题组件

- 标题组件，包含主标题和副标题

- 常用属性：

  - `text` ：String类型，主标题文本，支持使用`\n` 换行

  - `textStyle` ：Object类型，文字样式

- 标题边框

  - `borderWidth` ： number类型，标题的边框线宽
  - `borderRadius` ：number/Array，圆角半径
  - `borderColor`：标题的边框颜色

- 标题位置

  - left、top、right、bottom

### tooltip提示框

- 提示框组件，用于配置鼠标滑过或点击图表时的显示框
- 常用属性：

  - `trigger`：触发类型，类型String，值有以下三种可选

    - `item`：数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
    - `axis`：坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
    - `none`：什么都不触发。
  - `triggerOn`：触发时机,类型 String，
    - `mousemove` ：鼠标移动时触发
    - `click` ：鼠标点击时触发
    - `mousemove|click` ：鼠标移动和点击时触发
  - `formatter` ：提示框浮层内容格式器，支持字符串模板和回调函数两种形式
    - 官方文档：https://echarts.apache.org/zh/option.html#tooltip.formatter

### toolbox工具栏

- 工具栏。内置有[导出图片](https://echarts.apache.org/zh/option.html#toolbox.feature.saveAsImage)，[数据视图](https://echarts.apache.org/zh/option.html#toolbox.feature.dataView)，[动态类型切换](https://echarts.apache.org/zh/option.html#toolbox.feature.magicType)，[数据区域缩放](https://echarts.apache.org/zh/option.html#toolbox.feature.dataZoom)，[重置](https://echarts.apache.org/zh/option.html#toolbox.feature.reset)五个工具。
- 常用属性如下：
  - feature，里面的对象有以下几种可选
    - `saveAsImage {}` ：保存为图片
    - `restore {}`：配置项还原
    - `dataView{}` ：数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
    - `dataZoom {}`：数据区域缩放。目前只支持直角坐标系的缩放。
    - `magicType {}`：动态类型切换

### legend图例组件

- 图例组件，用于筛选系列，需要和 series 配合使用
- 常用属性：
  - data：图例的数据数组，是一个数组。
  - **legend 中的 data 的值需要和 series 数组中某组数据的 name 值一致**。

![image-20220329195049818](/assets/web/202203291950517.png)

### grip直角坐标系内绘图网格

- 直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以在网格上绘制 折线图、柱状图、散点图
- 常用属性：https://echarts.apache.org/zh/option.html#grid

![image-20220329195754643](/assets/web/202203291957752.png)

红色框为DOM容器范围，

绿色框为grid范围

`left`、`right`、`bottom` 几个值分别是 `grid` 组件离容器左侧、右侧、底部的距离。`containLabel` 是指 `grid` 区域是否包含坐标轴的刻度标签。

离容器距离是什么意思呢？还记得我们之前定义了一个 DOM 容器吗，他和 `grid` 的关系如下图：

![图片描述](/assets/web/202203301958557.png)

当我们把 `left` 值设置为 `0%`，`containLabel` 设置成 `false` 后，`grid` 区域就会紧紧地贴合在 DOM 容器边上了。

![图片描述](/assets/web/202203301959759.png)

我们来看下图，这是最简单的使用直角坐标系的方式：只声明了 `xAxis`、`yAxis` 和一个 `scatter`（散点图系列），`ECharts` 暗自为他们创建了 `grid` 并关联起他们：

![图片描述](/assets/web/202203301955244.png)

再来看下图，两个 `yAxis`，共享了一个 `xAxis`。两个 `series`，也共享了这个 `xAxis`，但是分别使用不同的 `yAxis`，使用 `yAxisIndex` 来指定它自己使用的是哪个 `yAxis`：

![图片描述](/assets/web/202203301955039.png)

再来看下图，一个 ECharts 实例中，有多个 `grid`，每个 `grid` 分别有 `xAxis`、`yAxis`，他们使用 `xAxisIndex`、`yAxisIndex`、`gridIndex` 来指定引用关系：

![图片描述](/assets/web/202203301957008.png)

另外，一个系列，往往能运行在不同的坐标系中。例如，一个 `scatter`（散点图）能运行在直角坐标系、极坐标系、地理坐标系（GEO）等各种坐标系中。同样，一个坐标系，也能承载不同的系列，如上面出现的各种例子，直角坐标系里承载了 `line`（折线图）、`bar`（柱状图）等等。



### xAxis和yAxis

- xAxis 是直角坐标系 grid 中的 x 轴， yAxis 是直角坐标系 grid 中的y轴

- 官方文档：https://echarts.apache.org/zh/option.html#xAxis

- 其常用属性如下：

  - type ：类型String，表示坐标轴类型，可选值有以下：
    - `value` ：数值轴，适用于连续数据
    - `category` ：类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 [series.data](https://echarts.apache.org/zh/option.html#series.data) 或 [dataset.source](https://echarts.apache.org/zh/option.html#dataset.source) 中取，或者可通过 [yAxis.data](https://echarts.apache.org/zh/option.html#yAxis.data) 设置类目数据。
    - `time` ：时间轴，适用于连续的时序数据
    - `log` ：对数轴，适用于对数数据
  - name：类型String，坐标轴的名称
  - boundaryGap: 是否在坐标轴两边留白。当把值修改为 `true` 时两边留白

  ![image-20220329201201287](/assets/web/202203292012372.png)

- `xAxis`
  - 直角坐标系 中的 x 轴, 如果 type 属性的值为 `category` ,那么需要配置 data 数据, 代表在 x 轴的 呈现
- `yAxis`
  - 直角坐标系 中的 y 轴, 如果 type 属性配置为` value` , 那么无需配置 data , 此时 y 轴会自动去 `series `下找数据进行图表的绘制

## series

- 官方文档：https://echarts.apache.org/zh/option.html#series

- 系列列表，每个系列通过 type 决定自己的图表类型，并且可以给 y 轴提供数据

- 其常用属性如下：

  - data：https://echarts.apache.org/zh/option.html#series-line.data

  - type：通过 type 决定自己的图表类型

在 ECharts 中取其扩展的概念，不仅表示数据，也表示数据映射成为的图。所以，一个 系列 包含的要素至少有：一组数值、图表类型（`series.type`）、以及其他的关于这些数据如何映射成图的参数。

ECharts 里系列类型（`series.type`）就是图表类型。系列类型（`series.type`）至少有：line（折线图）、bar（柱状图）、pie（饼图）、scatter（散点图）、graph（关系图）、tree（树图）、...

比如将这个值修改为 `bar`。

![图片描述](/assets/web/202203301912179.png)

那他就会变成柱状图。

![图片描述](/assets/web/202203301912294.png)

`series.name` 就是系列名称，`series.data` 是系列中的数据内容数组，在这里也就是每一个折线的拐点。

![图片描述](/assets/web/202203301921524.png)

如果要实现多个数据堆叠，

第2条数据值 = 第1条数据值 + 第2条数据值

第3条数据值 = 第2条数据值 + 第3条数据值

...

以此类推

那么就要配置`series.stack`，同个类目轴上系列配置相同的 `stack` 值后，后一个系列的值会在前一个系列的值上相加。

看图片，视频广告数据开头应该是150，可是在500附近，说明是120+220+150=490，但是显示各自的值不会变。

如果想要**改变这几条线的颜色**，那就在optionj添加数组！

![图片描述](/assets/web/202203301936924.png)

---



在这里我们讨论两个例子：

**正常下(x是类目轴，y是数值轴)，而如果把x，y变成非正常轴，`series`下的data仍是一维数组时候，就会使用图表出现异常**

我们详细说说解决方法

> 当x,y轴都是类目轴怎么办？

```js
  xAxis: {
      type: 'category',
      data: ['星期一', '星期二', '星期三', '星期四']
  },
  yAxis: {
      type: 'category',
      data: ['a', 'b', 'm', 'n', 'p', 'q']
  },
  series: [{
      data: [
          // xAxis    yAxis
          [  0,        0,    2  ], // 意思是此点位于 xAxis: '星期一', yAxis: 'a'。
          [  '星期四',  2,    1  ], // 意思是此点位于 xAxis: '星期四', yAxis: 'm'。
          [  2,       'p',   2  ], // 意思是此点位于 xAxis: '星期三', yAxis: 'p'。
          [  3,        3,    5  ]
      ]
  }]
```

演示：https://echarts.apache.org/examples/zh/editor.html?c=scatter-punchCard

> x,y都是数值轴

```js
option = {
    xAxis: {
        type: 'value',
        data: [1, 2, 3, 4, 5, 6, 7],
        name: 'x轴'
    },
    yAxis: {
        type: 'value',
        name: 'y轴'
    }，
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
};
```

使用上述代码，可以发现柱状图的左上角那个点的x和y的值是相等的，从左往右分别是70,80,110,120,130,150,200

![img](/assets/web/202203292030007.png)

本以为这能过渡给y轴，实则不然。

上面我们也说了这是 [series.data](https://echarts.apache.org/zh/option.html#series-line.data)的问题，那么data到底是怎么回事？

*axis.type*等的axis指x/yAxis~

> 通常来说，数据用一个二维数组表示。如下，每一列被称为一个『维度』
>
> 特别地，当只有一个轴为类目轴（axis.type 为 `'category'`）的时候，数据可以简化用一个一维数组表示

![img](/assets/web/202203292033274.png)

![img](/assets/web/202203292032526.png)

`xAxis.data`是类目数据。但是注意一点的是，它只在类目轴（`type: 'category'`）中有效。

如果没有设置 `type`，但是设置了 `axis.data`，则认为 `type` 是 `'category'`。因此第二张图省略了`type`

没有设置 `axis.data`，则 `axis.data` 的内容会自动从 `series.data` 中获取

那么也就是说，需要在`xAxis.type='value'`的时候，把x轴的数据存放到series.data里面去。*本来正常应该y是value，x是category*

```js
option = {
    xAxis: {
        type: 'value',
        name: 'x轴'
    },
    yAxis: {
        type: 'value',
        name: 'y轴'
    },
    series: [{
        data: [
            [1,120],
            [2,200],
            [3,150],
            [4,80],
            [5,70],
            [6,110],
            [7,130]
        ],
        type: 'bar'
    }]
};
```

![img](/assets/web/202203292034042.png)

还可以使用[新特性dataset](https://echarts.baidu.com/option.html#dataset)来设置，代码如下，效果和上图一致

```js
option = {
    xAxis: {
        type: 'value',
        name: 'x轴'
    },
    yAxis: {
        type: 'value',
        name: 'y轴'
    },
    series: [{
        type: 'bar'
    }],
    dataset: {
        source: [
            [1, 120],
            [2, 200],
            [3,150],
            [4,80],
            [5,70],
            [6,110],
            [7,130]
        ]
    }
};
```

---



通过上面案例，我们明白，

如果是type是`value`类型，是无法通过series.data的索引去访问xAis里面的值的，data的第一个写啥值就是啥

![image-20220329205432217](/assets/web/202203292054310.png)



反之，如果是`category`，就可以通过索引去访问类目轴里的data

![image-20220329205600658](/assets/web/202203292056751.png)

dataset这个新特性也是这样适用规则。

因此我们就能很好举一反三了！



