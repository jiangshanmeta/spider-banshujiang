import { describe, expect, test } from '@jest/globals'
import { parseCategoryList } from './parseCategoryList'

describe('parseCategoryList', () => {
  test('parseCategoryList', () => {
    const html = `<html lang="zh_CN" xmlns:wb="http://open.weibo.com/wb"><head>
    <title>编程语言:Java - 第1页 - 搬书匠</title>
    <meta charset="UTF-8">
    <meta name="renderer" content="webkit"> <!-- 为了告诉360浏览器应该使用极速核了 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1"> <!-- 如果安装了GCF，则使用GCF来渲染页面「”chrome=1″」，如果没有安装GCF，>    则使用最高版本的IE内核进行渲染「”IE=edge”」 -->
    <meta name="baidu-site-verification" content="AKra6WroiB">
    <meta property="wb:webmaster" content="919195fbd9f44369">
    <link rel="shortcut icon" href="http://image.banshujiang.cn/favicon.ico">
    <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/2.2.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="/asserts/css/e_books.css?release=1670065417479" rel="stylesheet">
    <script src="https://hm.baidu.com/hm.js?38a41a4c5062c2a88d0e6083f47105ab"></script><script>
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?38a41a4c5062c2a88d0e6083f47105ab";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    </script>
<meta name="robots" content="noindex,follow">
<script charset="UTF-8" src="https://js.t.sinajs.cn/open/api/js/api/bundle.js?version=20220715.01"></script><script charset="UTF-8" src="https://js.t.sinajs.cn/open/api/js/widget/iframeWidget/iframeWidget.js?version=20220715"></script></head>
<body><iframe id="sina_anywhere_iframe" style="display: none;"></iframe>
    <div class="navbar navbar-fixed-top">
        <div class="navbar-inner">
            <div style="margin-left:auto;margin-right:auto;width:970px;">
                <a class="brand"><strong>搬书匠</strong></a>
                <ul class="nav">
                    <li><a href="/"><i class="icon-home"></i> 首页</a></li>
                </ul>
                <ul class="nav pull-right">
                    <li><div style="margin-top:8px;"><wb:follow-button uid="3198737743" type="gray_2" width="120" height="24"><iframe src="http://widget.weibo.com/relationship/followbutton.php?btn=light&amp;style=2&amp;uid=3198737743&amp;width=120&amp;height=24&amp;language=zh_cn" width="120" height="24" frameborder="0" scrolling="no" marginheight="0"></iframe></wb:follow-button></div></li>
                </ul>
            </div>
        </div>
    </div>

    <div style="margin-left:auto;margin-right:auto;width:1000px;margin-top:44px;">
    <div style="height: 1px;"></div>
    <ul class="small-list">
    <li class="row shadow-panel">
        <div class="span2 small-list__item-image">
            <img src="http://image.banshujiang.cn/3171s.jpeg?timestamp=1671815272968" alt="Cassandra: The Definitive Guide 2nd Edition">
        </div>
        <div class="span8 small-list__item-desc">
            <ul class="book-property">
                <li>
                    <span class="book-property__title">书名：</span><a href="/e_books/3171">Cassandra: The Definitive Guide 2nd Edition</a>
                </li>
                <li>
                    <span class="book-property__title">作者：</span><span>Jeff Carpenter and Eben Hewitt</span>
                </li>
                <li>
                    <span class="book-property__title">语言：</span><span>英文</span>
                </li>
                <li>
                    <span class="book-property__title">出版年份：</span><span>2016</span>
                </li>
            </ul>
        </div>
        <div class="small-list__item-download">
            <a href="/e_books/3171">去下载</a>
        </div>
    </li>
    <li class="row shadow-panel">
        <div class="span2 small-list__item-image">
            <img src="https://imagebsj.netlify.app/3148s.jpeg" alt="Enterprise Java Microservices">
        </div>
        <div class="span8 small-list__item-desc">
            <ul class="book-property">
                <li>
                    <span class="book-property__title">书名：</span><a href="/e_books/3148">Enterprise Java Microservices</a>
                </li>
                <li>
                    <span class="book-property__title">作者：</span><span>Ken Finnigan</span>
                </li>
                <li>
                    <span class="book-property__title">语言：</span><span>英文</span>
                </li>
                <li>
                    <span class="book-property__title">出版年份：</span><span>2018</span>
                </li>
            </ul>
        </div>
        <div class="small-list__item-download">
            <a href="/e_books/3148">去下载</a>
        </div>
    </li>
    <li class="row shadow-panel">
        <div class="span2 small-list__item-image">
            <img src="https://imagebsj.netlify.app/3106s.jpeg" alt="Core Java for the Impatient 3rd Edition">
        </div>
        <div class="span8 small-list__item-desc">
            <ul class="book-property">
                <li>
                    <span class="book-property__title">书名：</span><a href="/e_books/3106">Core Java for the Impatient 3rd Edition</a>
                </li>
                <li>
                    <span class="book-property__title">作者：</span><span>Cay S. Horstmann</span>
                </li>
                <li>
                    <span class="book-property__title">语言：</span><span>英文</span>
                </li>
                <li>
                    <span class="book-property__title">出版年份：</span><span>2022</span>
                </li>
            </ul>
        </div>
        <div class="small-list__item-download">
            <a href="/e_books/3106">去下载</a>
        </div>
    </li>
    <li class="row shadow-panel">
        <div class="span2 small-list__item-image">
            <img src="https://imagebsj.netlify.app/3094s.jpeg" alt="Java Performance 2nd Edition">
        </div>
        <div class="span8 small-list__item-desc">
            <ul class="book-property">
                <li>
                    <span class="book-property__title">书名：</span><a href="/e_books/3094">Java Performance 2nd Edition</a>
                </li>
                <li>
                    <span class="book-property__title">作者：</span><span>Scott Oaks</span>
                </li>
                <li>
                    <span class="book-property__title">语言：</span><span>英文</span>
                </li>
                <li>
                    <span class="book-property__title">出版年份：</span><span>2020</span>
                </li>
            </ul>
        </div>
        <div class="small-list__item-download">
            <a href="/e_books/3094">去下载</a>
        </div>
    </li>
    <li class="row shadow-panel">
        <div class="span2 small-list__item-image">
            <img src="https://imagebsj.netlify.app/3082s.jpeg" alt="The Java Module System">
        </div>
        <div class="span8 small-list__item-desc">
            <ul class="book-property">
                <li>
                    <span class="book-property__title">书名：</span><a href="/e_books/3082">The Java Module System</a>
                </li>
                <li>
                    <span class="book-property__title">作者：</span><span>Nicolai Parlog</span>
                </li>
                <li>
                    <span class="book-property__title">语言：</span><span>英文</span>
                </li>
                <li>
                    <span class="book-property__title">出版年份：</span><span>2019</span>
                </li>
            </ul>
        </div>
        <div class="small-list__item-download">
            <a href="/e_books/3082">去下载</a>
        </div>
    </li>
    <li class="row shadow-panel">
        <div class="span2 small-list__item-image">
            <img src="https://imagebsj.netlify.app/3043s.jpeg" alt="Learning Java 5th Edition">
        </div>
        <div class="span8 small-list__item-desc">
            <ul class="book-property">
                <li>
                    <span class="book-property__title">书名：</span><a href="/e_books/3043">Learning Java 5th Edition</a>
                </li>
                <li>
                    <span class="book-property__title">作者：</span><span>Marc Loy, Patrick Niemeyer, and Daniel Leuck</span>
                </li>
                <li>
                    <span class="book-property__title">语言：</span><span>英文</span>
                </li>
                <li>
                    <span class="book-property__title">出版年份：</span><span>2020</span>
                </li>
            </ul>
        </div>
        <div class="small-list__item-download">
            <a href="/e_books/3043">去下载</a>
        </div>
    </li>
    <li class="row shadow-panel">
        <div class="span2 small-list__item-image">
            <img src="https://imagebsj.netlify.app/3038s.jpeg" alt="Java Cookbook 4th Edition">
        </div>
        <div class="span8 small-list__item-desc">
            <ul class="book-property">
                <li>
                    <span class="book-property__title">书名：</span><a href="/e_books/3038">Java Cookbook 4th Edition</a>
                </li>
                <li>
                    <span class="book-property__title">作者：</span><span>Ian F. Darwin</span>
                </li>
                <li>
                    <span class="book-property__title">语言：</span><span>英文</span>
                </li>
                <li>
                    <span class="book-property__title">出版年份：</span><span>2020</span>
                </li>
            </ul>
        </div>
        <div class="small-list__item-download">
            <a href="/e_books/3038">去下载</a>
        </div>
    </li>
    <li class="row shadow-panel">
        <div class="span2 small-list__item-image">
            <img src="https://imagebsj.netlify.app/3026s.jpeg" alt="Testing Java Microservices">
        </div>
        <div class="span8 small-list__item-desc">
            <ul class="book-property">
                <li>
                    <span class="book-property__title">书名：</span><a href="/e_books/3026">Testing Java Microservices</a>
                </li>
                <li>
                    <span class="book-property__title">作者：</span><span>Alex Soto Bueno</span>
                </li>
                <li>
                    <span class="book-property__title">语言：</span><span>英文</span>
                </li>
                <li>
                    <span class="book-property__title">出版年份：</span><span>2018</span>
                </li>
            </ul>
        </div>
        <div class="small-list__item-download">
            <a href="/e_books/3026">去下载</a>
        </div>
    </li>
    <li class="row shadow-panel">
        <div class="span2 small-list__item-image">
            <img src="https://imagebsj.netlify.app/3001s.jpeg" alt="Spring Boot 实战">
        </div>
        <div class="span8 small-list__item-desc">
            <ul class="book-property">
                <li>
                    <span class="book-property__title">书名：</span><a href="/e_books/3001">Spring Boot 实战</a>
                </li>
                <li>
                    <span class="book-property__title">作者：</span><span>美 Craig Walls 著, 丁雪丰 译</span>
                </li>
                <li>
                    <span class="book-property__title">语言：</span><span>中文</span>
                </li>
                <li>
                    <span class="book-property__title">出版年份：</span><span>2016</span>
                </li>
            </ul>
        </div>
        <div class="small-list__item-download">
            <a href="/e_books/3001">去下载</a>
        </div>
    </li>
    <li class="row shadow-panel">
        <div class="span2 small-list__item-image">
            <img src="https://imagebsj.netlify.app/2969s.jpeg" alt="Head First Java 3rd Edition">
        </div>
        <div class="span8 small-list__item-desc">
            <ul class="book-property">
                <li>
                    <span class="book-property__title">书名：</span><a href="/e_books/2969">Head First Java 3rd Edition</a>
                </li>
                <li>
                    <span class="book-property__title">作者：</span><span>Kathy Sierra</span>
                </li>
                <li>
                    <span class="book-property__title">语言：</span><span>英文</span>
                </li>
                <li>
                    <span class="book-property__title">出版年份：</span><span>2022</span>
                </li>
            </ul>
        </div>
        <div class="small-list__item-download">
            <a href="/e_books/2969">去下载</a>
        </div>
    </li>
</ul>
    <div class="pagination center" style="margin-top:25px;">
    <ul>
        <li class="active"><a href="../page/1">1</a></li>
        <li><a href="../page/2">2</a></li>
        <li><a href="../page/3">3</a></li>
        <li><a href="../page/4">4</a></li>
        <li><a href="../page/5">5</a></li>
        <li><a href="../page/6">6</a></li>
        <li><a href="../page/7">7</a></li>
        <li><a href="../page/8">8</a></li>
        <li><a href="../page/9">9</a></li>
        <li><a href="../page/10">10</a></li>
        <li class="disabled"><a href="javascript:;">...</a></li>
        <li><a href="../page/18">最旧</a></li>
    </ul>
</div>
</div>

    <div style="text-align:center;">
        <div style="font-size:14px;font-weight:bold;">
            期待您的支持
        </div>
        <div>
            <a href="/donations" rel="nofollow"><img alt="捐助本站" src="http://image.banshujiang.cn/donation.png"></a>
        </div>
    </div>

    <div style="height: 25px;"></div>

    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="http://libebook.banshujiang.cn/jquery-migrate-1.2.1.min.js"></script>
    <script src="http://libebook.banshujiang.cn/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript" src="/asserts/js/search_form.js"></script>
    <script>
        $(document).ready(function(){
            $('.category').click(function(event){
                event.stopImmediatePropagation();
            });
        });
    </script>

    <div></div>
    <script src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js" type="text/javascript" charset="utf-8"></script>


</body></html>`

    expect(parseCategoryList(html)).toStrictEqual({
      total: 18,
      bookIds: [3171, 3148, 3106, 3094, 3082, 3043, 3038, 3026, 3001, 2969],
    })
  })
})
