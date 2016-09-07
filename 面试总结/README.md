#前端工作面试问题

本文包含了一些用于考查候选者的前端面试问题。不建议对单个候选者问及每个问题 (那需要好几个小时)。只要从列表里挑选一些，就能帮助你考查候选者是否具备所需要的技能。

**备注：** 这些问题中很多都是开放性的，可以引发有趣的讨论。这比直接的答案更能体现此人的能力。

## <a name='toc'>目录</a>

  1. [常见问题](#general-questions)
  1. [HTML 相关问题](#html-questions)
  1. [CSS 相关问题](#css-questions)
  1. [JS 相关问题](#js-questions)
  1. [测试相关问题](#testing-questions)
  1. [效能相关问题](#performance-questions)
  1. [网络相关问题](#network-questions)
  1. [代码相关问题](#coding-questions)
  1. [趣味问题](#fun-questions)

## 参与协作

  1. [贡献者](#contributors)
  1. [如何参与贡献](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/CONTRIBUTING.md)
  1. [许可协议](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/LICENSE.md)

#### <a name='general-questions'>常见问题：</a>

* 你在昨天/本周学到了什么？
* 编写代码的哪些方面能够使你兴奋或感兴趣？
* 你最近遇到过什么技术挑战？你是如何解决的？
* 在制作一个网页应用或网站的过程中，你是如何考虑其 UI、安全性、高性能、SEO、可维护性以及技术因素的？
* 请谈谈你喜欢的开发环境。
* 你最熟悉哪一套版本控制系统？
* 你能描述当你制作一个网页的工作流程吗？
* 假若你有 5 个不同的样式文件 (stylesheets), 整合进网站的最好方式是?
* 你能描述渐进增强 (progressive enhancement) 和优雅降级 (graceful degradation) 之间的不同吗?
* 你如何对网站的文件和资源进行优化？
* 浏览器同一时间可以从一个域名下载多少资源？
  * 有什么例外吗？
* 请说出三种减少页面加载时间的方法。(加载时间指感知的时间或者实际加载时间)

答案：
```
1. 减少http请求（合并文件、合并图片）**CSS精灵？**

2. 优化图片文件，减小其尺寸，特别是缩略图，一定要按尺寸生成缩略图然后调用，不要在网页中用resize方法实现，虽然这样看到的图片外形小了，但是其加载的数据量一点也没减少。曾经见过有人在网页中加载的缩略图，其真实尺寸有10M之巨…普通图像、icon也要尽可能压缩后，可以采用web图像保存、减少颜色数等等方法实现。**web图像保存**

3. 图像格式的选择（GIF：提供的颜色较少，可用在一些对颜色要求不高的地方）

4. 压缩Javascript、CSS代码：一般js、css文件中存在大量的空格、换行、注释，这些利于阅读，如果能够压缩掉，将会很有利于网络传输。这方面的工具也有很多，可以在百度里搜索一下关键字“css代码压缩”，或者“js代码压缩”将会发现有很多网站都提供这样的功能，当然了你也可以自己写程序来做这个工作，如果你会的话。就拿我们这个网站来说吧。刚开始上传这个网站的时候，我的很多Css代码都没有压缩，后面发现了这个问题，我就上网找了相关的网站的压缩代码的功能，最后就把很多CSS文件都压缩了。这个压缩比率还是比较高的，一般都有百分五十左右。这个代码压缩对于网页的加载还是很有用的。CDN加速**GULP？**

5. 服务器启用gzip压缩功能：将要传输的文件压缩后传输到客户端再解压，在网络传输 数据量会大幅减小。在服务器上的Apache、Nginx可直接启用，也可用代码直接设置传输文件头，增加gzip的设置，也可从 负载均衡设备直接设置。不过需要留意的是，这个设置会略微增加服务器的负担。服务器性能不是很好的网站，要慎重考虑。

6. 标明高度和宽度（如果浏览器没有找到这两个参数，它需要一边下载图片一边计算大小，如果图片很多，浏览器需要不断地调整页面。这不但影响速度，也影响浏览体验。 当浏览器知道了高度和宽度参数后，即使图片暂时无法显示，页面上也会腾出图片的空位，然后继续加载后面的内容。从而加载时间快了，浏览体验也更好了。）

7. 网址后面加上“/”:对服务器而言，不加斜杠服务器会多一次判断的过程，加斜杠就会直接返回网站设置的存放在网站根目录下的默认页面。
```


* 如果你参与到一个项目中，发现他们使用 Tab 来缩进代码，但是你喜欢空格，你会怎么做？
* 请写一个简单的幻灯效果页面。

```
settimeout setInterval~~~
```

* 如果今年你打算熟练掌握一项新技术，那会是什么？
* 请谈谈你对网页标准和标准制定机构重要性的理解。
* 什么是 FOUC (无样式内容闪烁)？你如何来避免 FOUC？

答案：
```

如果使用import方法对CSS进行导入,会导致某些页面在Windows 下的Internet Explorer出现一些奇怪的现象:以无样式显示页面内容的瞬间闪烁,这种现象称之为文档样式短暂失效(Flash of Unstyled 

Content),简称为FOUC.原因大致为：

1，使用import方法导入样式表。

2，将样式表放在页面底部

3，有几个样式表，放在html结构的不同位置。其实原理很清楚：当样式表晚于 结构性html 

加载，当加载到此样式表时，页面将停止之前的渲染。此样式表被下载和解析后，将重新渲染页面，也就出现了短暂 的 花屏现象。解决方法：使用LINK标签将样式表放在文档HEAD中更多
```

* 请解释什么是 ARIA 和屏幕阅读器 (screenreaders)，以及如何使网站实现无障碍访问 (accessible)。

答案：
```
语义化？
```
* 请解释 CSS 动画和 JavaScript 动画的优缺点。

答案：
```
　CSS3的动画的优点：
　　
1.在性能上会稍微好一些，浏览器会对CSS3的动画做一些优化（比如专门新建一个图层用来跑动画）
　　
2.代码相对简单
　　
但其缺点也很明显：
　　
1.在动画控制上不够灵活
　　
2.兼容性不好
　　
3.部分动画功能无法实现（如滚动动画，视差滚动等）
　　
JavaScript的动画正好弥补了这两个缺点，控制能力很强，可以单帧的控制、变换，同时写得好完全可以兼容IE6，并且功能强大。但想想CSS动画的transform矩阵是C++级的计算，必然要比javascript

级的计算要快。另外对库的依赖也是一个很让人头疼的问题。
　　
所以，对于一些复杂控制的动画，使用javascript会比较靠谱。而在实现一些小的交互动效的时候，就多考虑考虑CSS吧。
```

* 什么是跨域资源共享 (CORS)？它用于解决什么问题？

答案：

```
CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。

CORS与JSONP的使用目的相同，但是比JSONP更强大。
JSONP只支持GET请求，CORS支持所有类型的HTTP请求。JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据
```

#### <a name='html-questions'>HTML 相关问题：</a>

* `doctype`(文档类型) 的作用是什么？

```
答：<!DOCTYPE>声明位于文档中的最前面的位置,处于 <html> 标签之前,用来告知浏览器页面目前的文件是用哪种版本的HTML(或XML)撰写。

常见类型
HTML 5
<!DOCTYPE html>
HTML 4.01
三种文档类型:Strict、Transitional、Frameset。
XHTML 1.0
三种XML文档类型:Strict、Transitional、Frameset。
```

* 浏览器标准模式 (standards mode) 、几乎标准模式（almost standards mode）和怪异模式 (quirks mode) 之间的区别是什么？
 
 
 ```

答：
 
 标准模式:严格遵循W3C标准来呈现网页的渲染模式。

怪异模式:兼容旧版本浏览器,不会严格遵循W3C标准的网页的一种渲染模式

每个HTML文档的首行都是一个文档声明,这种文档声明是用来表示后面的那些个页面标签遵循哪一个原则的,这是HTML5的文档类型声明：

<!DOCTYPE html>

这个是XHTML 1.0严格模式的文档类型声明：

<!DOCTYPE html PUBLIC "-//W3C//DTD *XHTML 1.0* Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

保留文档类型声明主要是历史原因,没有文档声明的话大多数浏览器都将会转换到为怪异模式(quirk 

mode),这种模式下浏览器会以老版本的浏览器使用的规则来渲染页面,并且不同浏览器的怪异模式还是不一样的,我们在平时码代码时应该尽量回避这种错误。

在添加了文档类型声明之后,浏览器使用的就是标准模式(standard mode),这种情况下浏览器会用W3C的标准来渲染网页
 ```


* HTML 和 XHTML 有什么区别？

```
XHTML中的标签都必须被正确地嵌套,HTML中的某些标签可以彼此不正确的嵌套。

XHTML中的所有标签必须要关闭。

XHTML中规范定义：标签名和属性对大小写敏感,所有XHTML标签名必须用小写字母。

XHTML文档必须拥有根元素。

XHTML中标签的属性值要使用双引号"。
```

* 如果页面使用 'application/xhtml+xml' 会有什么问题吗？
`旧版的浏览器可能不兼容`
* 如果网页内容需要支持多语言，你会怎么做？

```
两种方法：

1，静态：就是为每种语言分别准备一套页面文件，要么通过文件后缀名来区分不同语言，要么通过子目录来区分不同语言。 

2，动态：站点内所有页面文件都是动态页面文件（PHP，ASP等）而不是静态页面文件，在需要输出语言文字的地方统一采用语言变量来表示，

这些语言变量可以根据用户选择不同的语言赋予不同的值，从而能够实现在不同的语言环境下输出不同的文字。
```

* 在设计和开发多语言网站时，有哪些问题你必须要考虑？
* 使用 `data-` 属性的好处是什么？

```
通过data-可以自定义属性,可以通过HTMLElement.dataset获取这些属性的值,data-中-后接自定义属性的名字,例如data-url。实际开发中可以利用这一点在生成DOM结构时把数据储存在自定义属性中,

通过一系列交互操作,可以再获得这些数据,而不用再去ajax去后台取得数据。

ata-前缀加上自定义的属性名，使用这样的结构可以进行数据存放。使用data-*可以解决自定义属性混乱无管理的现状

data-* 属性用于存储页面或应用程序的私有自定义数据。

data-* 属性赋予我们在所有 HTML 元素上嵌入自定义 data 属性的能力。

存储的（自定义）数据能够被页面的 JavaScript 中利用，以创建更好的用户体验（不进行 Ajax 调用或服务器端数据库查询）。

data-* 属性包括两部分：

属性名不应该包含任何大写字母，并且在前缀 "data-" 之后必须有至少一个字符 属性值可以是任意字符串

注释：用户代理会完全忽略前缀为 “data-” 的自定义属性
```

* 如果把 HTML5 看作做一个开放平台，那它的构建模块有哪些？
* 请描述 `cookies`、`sessionStorage` 和 `localStorage` 的区别。

```
sessionStorage和localStorage是web storage的两种储存方式,其中sessionStorage是会话级别储存,在浏览器或页面关闭时数据就会销毁,而localStorage是持久化的本地储存,不刻意去删除数据,数据

是不会销毁的。以上这两种方式只是客户端的储存,不会涉及到服务器储存。与之相比,每次发送HTTP请求时会将cookie添加到Cookie头字段,发送给服务器。

在储存量方面也有差异,单个cookie保存的数据不能超过4K,而localStorage和sessionStorage一般有5-10M。

除此之外,每个域名下cookie的个数会有限制,依据浏览器不同会有不同,而localStorage数量是无限制的。
```

* 请解释 `<script>`、`<script async>` 和 `<script defer>` 的区别。

```
script加载js文件会阻塞页面的渲染和交互,而script async和script defer都是异步加载js文件,期间不会才生阻塞,区别在于script async是加载完之后自动执行,script 

defer需要等到页面加载之后再执行

```


* 为什么通常推荐将 CSS `<link>` 放置在 `<head></head>` 之间，而将 JS `<script>` 放置在 `</body>` 之前？你知道有哪些例外吗？

```
  浏览器在处理HTML页面渲染和JavaScript脚本执行的时候是单一进程的,所以在当浏览器在渲染HTML遇到了script标签会先去执行标签内的代码(

  如果是使用src属性加载的外链文件,则先下载再执行),在这个过程中,页面渲染和交互都会被阻塞。所以将script放在</body>之前,当页面渲染完成再去执行script。
```

* 什么是渐进式渲染 (progressive rendering)？

```
渐进式渲染是指浏览器不用等待所有页面资源都渲染好之后再呈现给用户看，而是边下载边渲染，所以用户打开一个网页的时候往往不能第一时间看到所有的内容，

但是能够看到一个大概的样子，后续的内容浏览器会慢慢补上形成一个完整的页面。这个有点像 bigpipe。 这是我查到的，感觉图片流什么的就是用的渐进式渲染
```

* 你用过哪些不同的 HTML 模板语言？
`liquid jade bootstrap`

#### <a name='css-questions'>CSS 相关问题：</a>

* CSS 中类 (classes) 和 ID 的区别。

```
1. 书写上的差别：class名用“.”号开头来定义，id名用“#”号开头来定义；

2. 调用上的区别：在同一个html网页页面中class是可以被多次调用的（在不同的地方）。而id名作为标签的身份则是唯一的，id在页面中只能出现一次。在js脚本中经常会用到id来修改一个标签的属性 

3. id作为元素的标签，用于区分不同结构和内容，而class作为一个样式，它可以应用到任何结构和内容上。 

4. 在布局思路上，一般坚持这样的原则：id是先确定页面的结构和内容，然后再为它定义样式：而class相反，它先定义好一类样式，然后再页面中根据需要把类样式应用到不同的元素和内容上面。 

5. 在实际应用时，class更多的被应用到文字版块以及页面修饰等方面，而id更多地被用来实现宏伟布局和设计包含块，或包含框的样式。
```

* 请问 "resetting" 和 "normalizing" CSS 之间的区别？你会如何选择，为什么？

```
Normalize 相对「平和」，注重通用的方案，重置掉该重置的样式，保留有用的 user agent 样式，同时进行一些 bug 的修复，这点是 reset 所缺乏的。 
Reset 相对「暴力」，不管你有没有用，统统重置成一样的效果，且影响的范围很大，讲求跨浏览器的一致性。【摘自知乎】 
http://jerryzou.com/posts/aboutNormalizeCss/ 
Normalize.css是一种CSS reset的替代方案。它们的区别有： 
1.  Normalize.css 保护了有价值的默认值，Reset通过为几乎所有的元素施加默认样式，强行使得元素有相同的视觉效果。
相比之下，Normalize.css保持了许多默认的浏览器样式。这就意味着你不用再为所有公共的排版元素重新设置样式。
当一个元素在不同的浏览器中有不同的默认值时，Normalize.css会力求让这些样式保持一致并尽可能与现代标准相符合。 
2.  Normalize.css 修复了浏览器的bug，它修复了常见的桌面端和移动端浏览器的bug。这往往超出了Reset所能做到的范畴。关于这一点，Normalize.css修复的问题包含了HTML5元素的显示设置、预格式化文字的font-size问题、在IE9中SVG的溢出、许多出现在各浏览器和操作系统中的与表单相关的bug。 
3. Normalize.css 不会让你的调试工具变的杂乱 
4.  Normalize.css 是模块化的 
5.  Normalize.css 拥有详细的文档 
选择Normalize.css ，主要是reset.css为几乎所有的元素施加默认样式，所以需要对所有公共的排版元素重新设置样式，这是一件很麻烦的工作。
```
* 请解释浮动 (Floats) 及其工作原理。
```
答：float属性定义了元素是否浮动及在哪个方向浮动，在CSS中任何元素都可以浮动，且浮动元素会生成一个块级框，而不论它本身是何种元素。并且盒子的宽度不在伸展，而是根据盒子里面的内容的宽度来确定。浮动属性会使得浮动的元素脱离文档流，所以文档的普通流中的块框会表现的像浮动框不存在一样。
```
* 描述`z-index`和叠加上下文是如何形成的。

```
首先来看在CSS中叠加上下文形成的原因： 
1.负边距 
margin为负值时元素会依参考线向外偏移。margin-left/margin-top的参考线为左边的元素/上面的元素（如无兄弟元素则为父元素的左内侧/上内侧）,margin-right和margin-bottom的参考线为元素本身的border右侧/border下侧。一般可以利用负边距来就行布局，但没有计算好的话就可能造成元素重叠。堆叠顺序由元素在文档中的先后位置决定，后出现的会在上面。 

2.position的relative/absolute/fixed定位 
当为元素设置position值为relative/absolute/fixed后，元素发生的偏移可能产生重叠，且z-index属性被激活。z-index值可以控制定位元素在垂直于显示屏方向（Z 轴）上的堆叠顺序（stack order），值大的元素发生重叠时会在值小的元素上面。 
z-index属性 
z-index只能在position属性值为relative或absolute或fixed的元素上有效。 
基本原理：z-index值可以控制定位元素在垂直于显示屏方向（Z 轴）上的堆叠顺序（stack order），值大的元素发生重叠时会在值小的元素上面。 
使用相对性：z-index值只决定同一父元素中的同级子元素的堆叠顺序。父元素的z-index值（如果有）为子元素定义了堆叠顺序（css版堆叠“拼爹”）。
向上追溯找不到含有z-index值的父元素的情况下，则可以视为自由的z-index元素，它可以与父元素的同级兄弟定位元素或其他自由的定位元素来比较
z-index的值，决定其堆叠顺序。同级元素的z-index值如果相同，则堆叠顺序由元素在文档中的先后位置决定，后出现的会在上面。所以如果当你发现一
个z-index值较大的元素被值较小的元素遮挡了，请先检查它们之间的dom结点关系，多半是因为其父结点含有激活并设置了z-index值的position定位
元素。
```

* 请描述 BFC(Block Formatting Context) 及其如何工作。
```
BFC（Block Formatting Context）直译为“块级格式化范围”。
```
* 列举不同的清除浮动的技巧，并指出它们各自适用的使用场景。
```
huguobo.github.io

固定宽高，overflow，clear
```
* 请解释 CSS sprites，以及你要如何在页面或网站中实现它。
```
通常被意译为“CSS图像拼合”或“CSS贴图定位”。 
CSS Sprites就是把网页中一些背景图片整合到一张图片文件中，再利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位，background-position可以用数字能精确的定位出背景图片的位置。 
优点：当页面加载时，不是加载每个单独图片，而是一次加载整个组合图片。这是一个了不起的改进，它大大减少了HTTP请求的次数，减轻服务器压力，同时缩短了悬停加载图片所需要的时间延迟，使效果更流畅，不会停顿。 
缺点：做图像拼合的时候很麻烦。
```
* 你最喜欢的图片替换方法是什么，你如何选择使用。
```
设计师能够用一张背景图像替代某元素中的原始文字，以期显示出更美观的字体。 
实现方法 
一：添加span标签 
该技巧的实现非常简单：用span将元素中的文本包围起来，然后通过应用CSS样式隐藏这个span中的文本，最后将背景图像应用到该元素之上即可。例如，对于下面的这一段HTMl标记。 
二、负text-indent属性值 
设计师Mike Rundle提出了一种使用负text-indent属性值的方法，将文本推到屏幕的左边缘之外。虽然该方案的适用性并不广泛——IE 5.0会将背景图片随文本一起推出浏览者的视线范围——但却相当简洁优雅。 
缺点：并没有解决浏览器禁用图像后空白页面的可访问性问题；有时在IE 5.0中无法使用。
意义：而图像替换技术则保留了被替换元素中的原有文本，因此无论对何种客户而言，理解页面内容都不成问题。主要是考虑SEO，而非视觉上的效果。
```
* 你会如何解决特定浏览器的样式问题？

```
! important
hack
reset.css
nomalize.css
-moz-
-webkit-
```
* 如何为有功能限制的浏览器提供网页？
  * 你会使用哪些技术和处理方法？
* 有哪些的隐藏内容的方法 (如果同时还要保证屏幕阅读器可用呢)？
* 你用过栅格系统 (grid system) 吗？如果使用过，你最喜欢哪种？
```
bootstrap
```
* 你用过媒体查询，或针对移动端的布局/CSS 吗？
```
@media
```
* 你熟悉 SVG 样式的书写吗？

```
SVG 意为可缩放矢量图形（Scalable Vector Graphics）。

什么是SVG？

•SVG 指可伸缩矢量图形 (Scalable Vector Graphics)

•SVG 用来定义用于网络的基于矢量的图形

•SVG 使用 XML 格式定义图形

•SVG 图像在放大或改变尺寸的情况下其图形质量不会有所损失

•SVG 是万维网联盟的标准

•SVG 与诸如 DOM 和 XSL 之类的 W3C 标准是一个整体

书写示例如下：

1  <?xml version="1.0" standalone="no"?>
2     <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
3     <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
4         <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>
5     </svg>

```

* 如何优化网页的打印样式？

```
<link rel = "stylesheet" type = "text/css" media = "screen" href = "xxx.css"/>

其中media指定的属性就是设备，显示器上就是screen，打印机则是print，电视是tv，投影仪是projection。打印样式示例如下：

<link rel = "stylesheet" type = "text/css" media = "print" href = "yyy.css"/>

但打印样式表也应注意以下事项：

•打印样式表中最好不要用背景图片，因为打印机不能打印CSS中的背景。如要显示图片，请使用html插入到页面中。

•最好不要使用像素作为单位，因为打印样式表要打印出来的会是实物，所以建议使用pt和cm。

•隐藏掉不必要的内容。（@print div{display:none;}）

•打印样式表中最好少用浮动属性，因为它们会消失。如果想要知道打印样式表的效果如何，直接在浏览器上选择打印预览就可以了。

```
* 在书写高效 CSS 时会有哪些问题需要考虑？
```

•1.样式是：从右向左的解析一个选择器；

•2.ID最快，Universal最慢有四种类型的key selector，解析速度由快到慢依次是：ID、class、tag和universal ；

•3.不要tag-qualify（永远不要这样做ul#main-navigation{}ID已经是唯一的，不需要Tag来标识，这样做会让选择器变慢。）

•4.后代选择器最糟糕（换句话说，下面这个选择器是很低效的：html body ul li a{}）；

•5.想清楚你为什么这样写；

•6.CSS3的效率问题（CSS3选择器（比如:nth-child）能够漂亮的定位我们想要的元素，又能保证我们的CSS整洁易读。但是这些神奇的选择器会浪费很多的浏览器资源。）；

•7.我们知道#ID速度是最快的，那么我们都用ID，是不是很快。但是我们不应该为了效率而牺牲可读性和可维护性。

```
* 使用 CSS 预处理器的优缺点有哪些？
```
LESS&SassLESS是受Sass启发而开发的工具，它列出了如下开发的理由：

 “为什么要开发一个Sass的替代品呢？原因很简单：首先是语法。Sass的一个关键特性是缩进式的语法，这种语法可以产生柱

 式外观的代码。但是你需要花费时间学习一门新的语法以及重新构建你现在的样式表。LESS给CSS带来了很多特性，使得LESS

 能够和CSS无缝地紧密结合在一起。因此，你可以平滑地由CSS迁移到LESS，如果你只是对使用变量或者操作感兴趣的话，你不

 需要学习一整门全新的语言。”

StylusStylus相对前两者较新，可以看官方文档介绍的功能。

•1.来自NodeJS社区，所以和NodeJS走得很近，与JavaScript联系非常紧密。还有专门JavaScript API：http://
learnboost.github.io/stylus/docs/js.html；

•2.支持Ruby之类等等框架；

•3.更多更强大的支持和功能总结：Sass看起来在提供的特性上占有优势，但是LESS能够让开发者平滑地从现存CSS文件过渡到L
ESS，而不需要像Sass那样需要将CSS文件转换成Sass格式。Stylus功能上更为强壮，和js联系更加紧密。

```
  * 请描述你曾经使用过的 CSS 预处理器的优缺点。
* 如果设计中使用了非标准的字体，你该如何去实现？
```
所谓的标准字体是多数机器上都会有的，或者即使没有也可以由默认字体替代的字体。

方法：
•用图片代替
•web fonts在线字库，如Google Webfonts，Typekit等等；http://www.chinaz.com/free/2012/0815/269267.shtml；
•@font-face，Webfonts(字体服务例如：Google Webfonts，Typekit等等。)

```
* 请解释浏览器是如何判断元素是否匹配某个 CSS 选择器？

```
从后往前判断。浏览器先产生一个元素集合，这个集合往往由最后一个部分的索引产生（如果没有索引就是所有元素的集合）。然后向上匹配，

如果不符合上一个部分，就把元素从集合中删除，直到真个选择器都匹配完，还在集合中的元素就匹配这个选择器了。举个例子，有选择器：

  body.ready#wrapper>.lol233

先把所有class中有lol233的元素拿出来组成一个集合，然后上一层，对每一个集合中的元素，如果元素的parent 

id不为#wrapper则把元素从集合中删去。再向上，从这个元素的父元素开始向上找，没有找到一个tagName为body且class中有ready的元素，就

把原来的元素从集合中删去。至此这个选择器匹配结束，所有还在集合中的元素满足。大体就是这样，不过浏览器还会有一些奇怪的优化。为什

么从后往前匹配因为效率和文档流的解析方向。效率不必说，找元素的父亲和之前的兄弟比遍历所哟儿子快而且方便。关于文档流的解析方向，

是因为现在的CSS，一个元素只要确定了这个元素在文档流之前出现过的所有元素，就能确定他的匹配情况。应用在即使html没有载入完成，浏

览器也能根据已经载入的这一部分信息完全确定出现过的元素的属性。为什么是用集合主要也还是效率。基于CSS 

Rule数量远远小于元素数量的假设和索引的运用，遍历每一条CSS Rule通过集合筛选，比遍历每一个元素再遍历每一条Rule匹配要快得多。

```

* 请描述伪元素 (pseudo-elements) 及其用途。

```
```
* 请解释你对盒模型的理解，以及如何在 CSS 中告诉浏览器使用不同的盒模型来渲染你的布局。

```
盒子模型分为两类：W3C标准盒子模型和IE盒子模型 （微软确实不喜欢服从他家的标准）

这两者的关键差别就在于：

- W3C盒子模型——属性高（height）和属性宽（width）这两个值不包含 填充（padding）和边框（border）

- IE盒子模型——属性高（height）和属性宽（width）这两个值包含 填充（padding）和边框（border）

我们在编写页面代码的时候应该尽量使用标准的W3C盒子模型（需要在页面中声明DOCTYPE类型）。
   
各浏览器盒模型的组成结构是一致的，区别只是在"怪异模式"下宽度和高度的计算方式，而“标准模式”下则没有区别。组成结

构以宽度为例：总宽度=marginLeft+borderLeft+paddingLeft+contentWidth+paddingRight+borderRight+marginRight（W3C标

准盒子模型）。页面在“怪异模式”下，css中为元素的width和height设置的值在标准浏览器和ie系列(ie9除外)

里的代表的含义是不同的（IE盒子模型）。 


因而解决兼容型为题最简洁和值得推荐的方式是：下述的第一条。 

一、将页面设为“标准模式”。 

添加对应的dtd标识，如： 
Html代码 

<!DOCTYPE html>  

<!DOCTYPE html>  
<html>  
<head>  
<style>  
#box {width:100px;padding:0 10px;border:20px solid blue;margin:70px;}  
</style>  
<script type="text/javascript" src="../js/jquery-1.6.4.js"></script>  
</head>  
<body>  
<div id="box">  
</div>  
<script>  
var box = $('#box');  
var boxboxWidth=box[0].offsetWidth;//包括补白、边框和内容宽度  
alert(boxWidth+":"+box.width());//专指内容的宽度  
</script>  
</body>  
</html>  


注意：offsetWidth=borderLeft+paddingLeft+contentWidth+paddingRight+borderRight。 

此时alert的值是160:100。即，各浏览器均认为css中的width就是100px即内容的宽度,和padding+border最终相加结果是：160

px。 

如果把doctype去掉，即进入“怪异模式”，此时，ie6/7/8的值均为100:40，证明它们认为css中width指的和offsetWidth是同一

个值，除了内容的宽度外还都包含补白和边框，而内容的宽度则被压缩为40。而ie9,ff,chrome,opera这样的标准浏览器则依然是160:100。 

二、使用hack或者在外面套上一层wrapper。 

前提是页面处于“怪异模式”，“标准模式”不存在兼容性问题。 

1、hack 
   
依然使用上例：假设内容的宽度必须固定为100px。 

Html代码  

#box {  
width:100px !important; // ie9,ff,chrome,opera这样的标准浏览器
width:160px; //所有的浏览器；它的本意是只对不认识!important的设置。可是ie7、ie8也认识
+width:160px!important;//ie7
width:160px/0!important;//ie8
padding:0 10px;border:20px solid blue;margin:70px;  
}  

//不太正确


2、wrapper 

Html代码

#box {  
width:100px;  
margin:70px;  
float:left;  
}  
.wrapper {  
padding:0 10px;border:20px solid blue;  
}  

Html代码

<div class="wrapper">  
<div id="box"></div>  
<div style="clear:both"></div>  
</div>  


```
* 请解释 ```* { box-sizing: border-box; }``` 的作用, 并且说明使用它有什么好处？

```
说到IE的bug，在IE6以前的版本中，IE对盒模型的解析出现一些问题，跟其它浏览器不同，将border与padding都包含在width之内。而另外一些浏览器则与它相反，是不包括border和padding的。

在我们开发的过程中会发现，有时候，如果对页面中的大区域进行设置时，将border、padding计算到width和height之内，反而更灵活。但W3C的CSS2.1规范却规定了他们并不能被包含其中。考虑到这个问题，css3中引入了一个新的属性：box-sizing，它具有“content-box”和”border-box“两个值。

`box-sizing:content-box`

当我们设置box-sizing:content-box;时，浏览器对盒模型的解释遵从我们之前认识到的W3C标准，当它定义width和height时，它的宽度不包括border和padding。

`box-sizing:border-box`

当我们设置box-sizing:border-box;时，浏览器对盒模型的解释与IE6之前的版本相同，当它定义width和height时，border和padding则是被包含在宽高之内的。内容的宽和高可以通过定义的“width”和“height”减去相应方向的“padding”和“border”的宽度得到。内容的宽和高必须保证不能为负，必要时将自动增大该元素border box的尺寸以使其内容的宽或高最小为0。

```
* 请罗列出你所知道的 display 属性的全部值

![](http://images2015.cnblogs.com/blog/716683/201510/716683-20151013142822460-1264753317.jpg)

* 请解释 inline 和 inline-block 的区别？
* 请解释 relative、fixed、absolute 和 static 元素的区别
* CSS 中字母 'C' 的意思是叠层 (Cascading)。请问在确定样式的过程中优先级是如何决定的 (请举例)？如何有效使用此系统？
* 你在开发或生产环境中使用过哪些 CSS 框架？你觉得应该如何改善他们？
* 请问你有尝试过 CSS Flexbox 或者 Grid 标准规格吗？
* 为什么响应式设计 (responsive design) 和自适应设计 (adaptive design) 不同？
* 你有兼容 retina 屏幕的经历吗？如果有，在什么地方使用了何种技术？
* 请问为何要使用 `translate()` 而非 *absolute positioning*，或反之的理由？为什么？

#### <a name='js-questions'>JS 相关问题：</a>

* 请解释事件代理 (event delegation)。
```
JavaScript事件代理则是一种简单的技巧，通过它你可以把事件处理器添加到一个父级元素上，这样就避免了把事件处理器添

加到多个子级元素上。当我们需要对很多元素添加事件的时候，可以通过将事件添加到它们的父节点而将事件委托给父节点来

触发处理函数。这主要得益于浏览器的事件冒泡机制。事件代理用到了两个在JavaSciprt事件中常被忽略的特性：事件冒泡以

及目标元素。

 function getEventTarget(e) {
    e=e||window.event;
     return e.target||e.srcElement;
 }

```
* 请解释 JavaScript 中 `this` 是如何工作的。
```
this永远指向函数运行时所在的对象，而不是函数被创建时所在的对象。匿名函数或不处于任何对象中的函数指向window 。

1.如果是call，apply,with，指定的this是谁，就是谁。

2.普通的函数调用，函数被谁调用，this就是谁。

```
* 请解释原型继承 (prototypal inheritance) 的原理。

```
1 function getProperty(obj,prop) {
2     if (obj.hasOwnProperty(prop)) {
3         return obj[prop];
4     } else if (obj.__proto__!==null) {
5         return getProperty(obj.__proto__,prop);
6     } else {
7         return undefined;
8     }
9 }

下图展示的原（prototype）的关联：
```
![](http://images.cnitblog.com/blog2015/716683/201504/171011349018292.jpg)

* 你怎么看 AMD vs. CommonJS？
* 请解释为什么接下来这段代码不是 IIFE (立即调用的函数表达式)：`function foo(){ }();`.
  * 要做哪些改动使它变成 IIFE?
* 描述以下变量的区别：`null`，`undefined` 或 `undeclared`？
  * 该如何检测它们？
* 什么是闭包 (closure)，如何使用它，为什么要使用它？
* 请举出一个匿名函数的典型用例？
* 你是如何组织自己的代码？是使用模块模式，还是使用经典继承的方法？
* 请指出 JavaScript 宿主对象 (host objects) 和原生对象 (native objects) 的区别？
* 请指出以下代码的区别：`function Person(){}`、`var person = Person()`、`var person = new Person()`？
* `.call` 和 `.apply` 的区别是什么？
* 请解释 `Function.prototype.bind`？
* 在什么时候你会使用 `document.write()`？
* 请指出浏览器特性检测，特性推断和浏览器 UA 字符串嗅探的区别？
* 请尽可能详尽的解释 Ajax 的工作原理。
* 使用 Ajax 都有哪些优劣？
* 请解释 JSONP 的工作原理，以及它为什么不是真正的 Ajax。
* 你使用过 JavaScript 模板系统吗？
  * 如有使用过，请谈谈你都使用过哪些库？
* 请解释变量声明提升 (hoisting)。
* 请描述事件冒泡机制 (event bubbling)。
* "attribute" 和 "property" 的区别是什么？
* 为什么扩展 JavaScript 内置对象不是好的做法？
* 请指出 document load 和 document DOMContentLoaded 两个事件的区别。
* `==` 和 `===` 有什么不同？
* 请解释 JavaScript 的同源策略 (same-origin policy)。
* 如何实现下列代码：
```javascript
[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```
* 什么是三元表达式 (Ternary expression)？“三元 (Ternary)” 表示什么意思？
* 什么是 `"use strict";` ? 使用它的好处和坏处分别是什么？
* 请实现一个遍历至 `100` 的 for loop 循环，在能被 `3` 整除时输出 **"fizz"**，在能被 `5` 整除时输出 **"buzz"**，在能同时被 `3` 和 `5` 整除时输出 **"fizzbuzz"**。
* 为何通常会认为保留网站现有的全局作用域 (global scope) 不去改变它，是较好的选择？
* 为何你会使用 `load` 之类的事件 (event)？此事件有缺点吗？你是否知道其他替代品，以及为何使用它们？
* 请解释什么是单页应用 (single page app), 以及如何使其对搜索引擎友好 (SEO-friendly)。
* What is the extent of your experience with Promises and/or their polyfills?
* 使用 Promises 而非回调 (callbacks) 优缺点是什么？
* 使用一种可以编译成 JavaScript 的语言来写 JavaScript 代码有哪些优缺点？
* 你使用哪些工具和技术来调试 JavaScript 代码？
* 你会使用怎样的语言结构来遍历对象属性 (object properties) 和数组内容？
* 请解释可变 (mutable) 和不变 (immutable) 对象的区别。
  * 请举出 JavaScript 中一个不变性对象 (immutable object) 的例子？
  * 不变性 (immutability) 有哪些优缺点？
  * 如何用你自己的代码来实现不变性 (immutability)？
* 请解释同步 (synchronous) 和异步 (asynchronous) 函数的区别。
* 什么是事件循环 (event loop)？
  * 请问调用栈 (call stack) 和任务队列 (task queue) 的区别是什么？
* 解释 `function foo() {}` 与 `var foo = function() {}` 用法的区别

#### <a name='testing-questions'>测试相关问题：</a>

* 对代码进行测试的有什么优缺点？
* 你会用什么工具测试你的代码功能？
* 单元测试与功能/集成测试的区别是什么？
* 代码风格 linting 工具的作用是什么？

#### <a name='performance-questions'>效能相关问题：</a>

* 你会用什么工具来查找代码中的性能问题？
* 你会用什么方式来增强网站的页面滚动效能？
* 请解释 layout、painting 和 compositing 的区别。

#### <a name='network-questions'>网络相关问题：</a>

* 为什么传统上利用多个域名来提供网站资源会更有效？
* 请尽可能完整得描述从输入 URL 到整个网页加载完毕及显示在屏幕上的整个流程。
* Long-Polling、Websockets 和 Server-Sent Event 之间有什么区别？
* 请描述以下 request 和 response headers：
  * Diff. between Expires, Date, Age and If-Modified-...
  * Do Not Track
  * Cache-Control
  * Transfer-Encoding
  * ETag
  * X-Frame-Options
* 什么是 HTTP method？请罗列出你所知道的所有 HTTP method，并给出解释。

#### <a name='coding-questions'>代码相关的问题：</a>

*问题：`foo`的值是什么？*
```javascript
var foo = 10 + '20';
```

*问题：如何实现以下函数？*
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

*问题：下面的语句的返回值是什么？*
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

*问题：`window.foo`的值是什么？*
```javascript
( window.foo || ( window.foo = "bar" ) );
```

*问题：下面两个 alert 的结果是什么？*
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

*问题：`foo.length`的值是什么？*
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

*问题：`foo.x`的值是什么？*
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

*问题：下面代码的输出是什么？*
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```

#### <a name='fun-questions'>趣味问题：</a>

* 你最近写过什么的很酷的项目吗？
* 在你使用的开发工具中，最喜欢哪些方面？
* 谁使你踏足了前端开发领域？
* 你有什么业余项目吗？是哪种类型的？
* 你最爱的 IE 特性是什么？
* 你对咖啡有没有什么喜好？


#### <a name='contributors'>贡献者：</a>

本文档始于 2009 年，是以下作者的合作成果：[@paul_irish](https://twitter.com/paul_irish) [@bentruyman](https://twitter.com/bentruyman) [@cowboy](https://twitter.com/cowboy) [@ajpiano](https://twitter.com/ajpiano) [@SlexAxton](https://twitter.com/slexaxton) [@boazsender](https://twitter.com/boazsender) [@miketaylr](https://twitter.com/miketaylr) [@vladikoff](https://twitter.com/vladikoff) [@gf3](https://twitter.com/gf3) [@jon_neal](https://twitter.com/jon_neal) [@sambreed](https://twitter.com/sambreed) 和 [@iansym](https://twitter.com/iansym)。

时至今日，文档已经融入超过 [100 位开发者](https://github.com/h5bp/Front-end-Developer-Interview-Questions/graphs/contributors)的贡献。
