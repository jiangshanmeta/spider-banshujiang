import { describe, expect, test } from '@jest/globals'
import { parseListPage } from './parseListPage'

describe('parseListPage', () => {
  test('parse max id', () => {
    const html = `
    <html lang="zh_CN" xmlns:wb="http://open.weibo.com/wb"><head>
    <title>书籍列表 - 第1页 - 搬书匠</title>
    <meta charset="UTF-8">
    <meta name="renderer" content="webkit"> <!-- 为了告诉360浏览器应该使用极速核了 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1"> <!-- 如果安装了GCF，则使用GCF来渲染页面「”chrome=1″」，如果没有安装GCF，>    则使用最高版本的IE内核进行渲染「”IE=edge”」 -->
    <meta name="baidu-site-verification" content="AKra6WroiB">
    <meta property="wb:webmaster" content="919195fbd9f44369">
    <link rel="shortcut icon" href="http://image.banshujiang.cn/favicon.ico">
    <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/2.2.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="/asserts/css/e_books.css?release=1668119085998" rel="stylesheet">
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
            <img src="https://imagebsj.netlify.app/3150s.jpeg" alt="grokking Bitcoin">
        </div>
        <div class="span8 small-list__item-desc">
            <ul class="book-property">
                <li>
                    <span class="book-property__title">书名：</span><a href="/e_books/3150">grokking Bitcoin</a>
                </li>
                <li>
                    <span class="book-property__title">作者：</span><span>Kalle Rosenbaum</span>
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
            <a href="/e_books/3150">去下载</a>
        </div>
    </li>
    <li class="row shadow-panel">
        <div class="span2 small-list__item-image">
            <img src="https://imagebsj.netlify.app/3149s.jpeg" alt="Get Programming with Node.js">
        </div>
        <div class="span8 small-list__item-desc">
            <ul class="book-property">
                <li>
                    <span class="book-property__title">书名：</span><a href="/e_books/3149">Get Programming with Node.js</a>
                </li>
                <li>
                    <span class="book-property__title">作者：</span><span>Jonathan Wexler</span>
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
            <a href="/e_books/3149">去下载</a>
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
            <img src="https://imagebsj.netlify.app/3147s.jpeg" alt="Docker in Action 2nd Edition">
        </div>
        <div class="span8 small-list__item-desc">
            <ul class="book-property">
                <li>
                    <span class="book-property__title">书名：</span><a href="/e_books/3147">Docker in Action 2nd Edition</a>
                </li>
                <li>
                    <span class="book-property__title">作者：</span><span>Jeff Nickoloff and Stephen Kuenzli</span>
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
            <a href="/e_books/3147">去下载</a>
        </div>
    </li>
    <li class="row shadow-panel">
        <div class="span2 small-list__item-image">
            <img src="https://imagebsj.netlify.app/3146s.jpeg" alt="Data Science with Python&nbsp;and Dask">
        </div>
        <div class="span8 small-list__item-desc">
            <ul class="book-property">
                <li>
                    <span class="book-property__title">书名：</span><a href="/e_books/3146">Data Science with Python&nbsp;and Dask</a>
                </li>
                <li>
                    <span class="book-property__title">作者：</span><span>Jesse C. Daniel</span>
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
            <a href="/e_books/3146">去下载</a>
        </div>
    </li>
    <li class="row shadow-panel">
        <div class="span2 small-list__item-image">
            <img src="https://imagebsj.netlify.app/3145s.jpeg" alt="Malware Data Science">
        </div>
        <div class="span8 small-list__item-desc">
            <ul class="book-property">
                <li>
                    <span class="book-property__title">书名：</span><a href="/e_books/3145">Malware Data Science</a>
                </li>
                <li>
                    <span class="book-property__title">作者：</span><span>Joshua Saxe with Hillary Sanders</span>
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
            <a href="/e_books/3145">去下载</a>
        </div>
    </li>
    <li class="row shadow-panel">
        <div class="span2 small-list__item-image">
            <img src="https://imagebsj.netlify.app/3144s.jpeg" alt="Living by The Code">
        </div>
        <div class="span8 small-list__item-desc">
            <ul class="book-property">
                <li>
                    <span class="book-property__title">书名：</span><a href="/e_books/3144">Living by The Code</a>
                </li>
                <li>
                    <span class="book-property__title">作者：</span><span>Enrique López Mañas</span>
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
            <a href="/e_books/3144">去下载</a>
        </div>
    </li>
    <li class="row shadow-panel">
        <div class="span2 small-list__item-image">
            <img src="https://imagebsj.netlify.app/3143s.jpeg" alt="Learn More Python 3 The Hard Way">
        </div>
        <div class="span8 small-list__item-desc">
            <ul class="book-property">
                <li>
                    <span class="book-property__title">书名：</span><a href="/e_books/3143">Learn More Python 3 The Hard Way</a>
                </li>
                <li>
                    <span class="book-property__title">作者：</span><span>Zed A. Shaw</span>
                </li>
                <li>
                    <span class="book-property__title">语言：</span><span>英文</span>
                </li>
                <li>
                    <span class="book-property__title">出版年份：</span><span>2017</span>
                </li>
            </ul>
        </div>
        <div class="small-list__item-download">
            <a href="/e_books/3143">去下载</a>
        </div>
    </li>
    <li class="row shadow-panel">
        <div class="span2 small-list__item-image">
            <img src="https://imagebsj.netlify.app/3142s.jpeg" alt="Kotlin Apprentice 2nd Edition">
        </div>
        <div class="span8 small-list__item-desc">
            <ul class="book-property">
                <li>
                    <span class="book-property__title">书名：</span><a href="/e_books/3142">Kotlin Apprentice 2nd Edition</a>
                </li>
                <li>
                    <span class="book-property__title">作者：</span><span>Irina Galata, Joe Howard &amp; Ellen Shapiro</span>
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
            <a href="/e_books/3142">去下载</a>
        </div>
    </li>
    <li class="row shadow-panel">
        <div class="span2 small-list__item-image">
            <img src="https://imagebsj.netlify.app/3141s.jpeg" alt="iOS Test-Driven Development by Tutorials">
        </div>
        <div class="span8 small-list__item-desc">
            <ul class="book-property">
                <li>
                    <span class="book-property__title">书名：</span><a href="/e_books/3141">iOS Test-Driven Development by Tutorials</a>
                </li>
                <li>
                    <span class="book-property__title">作者：</span><span>Joshua Greene &amp; Michael Katz</span>
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
            <a href="/e_books/3141">去下载</a>
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
        <li><a href="../page/315">最旧</a></li>
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


</body></html>
    
    `
    expect(parseListPage(html)).toBe(3150)
  })
})
