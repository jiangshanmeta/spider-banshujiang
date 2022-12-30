import { describe, expect, test } from '@jest/globals'
import { parseCategories } from './parseCategories'

describe('parseCategories', () => {
  test('parseCategories', () => {
    const html = `<html lang="zh_CN" xmlns:wb="http://open.weibo.com/wb"><head>
    <title>[搬书匠] - 电子书(EBook)</title>
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
<style>
        .logofont {
            font-size: 50px;
            vertical-align: middle;
            text-shadow: 3px 2px 2px #ddd;
        }
        .booktitle {
            height: 48px;
            text-align: center;
            font-size: 12px;
            line-height: 16px;
            margin-top: 5px;
            text-shadow: 3px 2px 2px #ddd;
            overflow: hidden;
        }
        ul.category>li {
            border-left: 1px solid lightgrey;
            margin: 5px 0;
            padding-left: 11px;
        }
        ul.ebook {
            list-style-type: none;
            margin:0;
        }
        ul.ebook>li {
            float: left;
            width: 110px;
            margin: 10px 0 0 13px;
        }
    </style>
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
    <div>
        <div style="width:280px;margin-top:80px;" class="center">
            <span class="logofont">搬</span>
            <img src="http://image.banshujiang.cn/logo.png?imageView2/2/w/128/h/128/q/100" style="width:128px;height:128px;" alt="搬书匠">
            <span class="logofont">匠</span>
        </div>
    </div>

    <div style="margin:10px 0 40px;" class="center">
        <form id="searchForm" accept-charset="UTF-8" action="/e_books/search" method="get">
            <div class="input-append">
                <input class="span6" id="search_words" name="searchWords" type="text" value="">
                <button type="submit" class="btn">书籍搜索</button>
            </div>
        </form>
    </div>

    <div class="region">
        <div class="region-head">
            <span style="font-size: 15px;">分类</span>
        </div>
        <div class="region-body" style="margin-top: 0; overflow: hidden;">
            <ul style="list-style-type:none;margin:0px;">
                
                <li style="margin-bottom:5px;">
                    <div class="row" style="margin-left: -5px;">
                        <div class="span1" style="padding-top:5px;">编程语言</div>
                        <div class="span11">
                            <ul class="inline category">
                                <li>
                                    <a href="/category/programming_language/ActionScript">ActionScript</a>
                                </li>
                                <li>
                                    <a href="/category/programming_language/ASP.net">ASP.net</a>
                                </li>
                                <li>
                                    <a href="/category/programming_language/C%23">C#</a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </li>
                <li style="margin-bottom:5px;">
                    <div class="row" style="margin-left: -5px;">
                        <div class="span1" style="padding-top:5px;">移动开发</div>
                        <div class="span11">
                            <ul class="inline category">
                                <li>
                                    <a href="/category/mobile_development/Android">Android</a>
                                </li>
                                <li>
                                    <a href="/category/mobile_development/iOS">iOS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>



                <li style="margin-bottom:5px;">
                    <div class="row" style="margin-left: -5px;">
                        <div class="span1" style="padding-top:5px;">语言</div>
                        <div class="span11">
                            <ul class="inline category">
                                <li>
                                    <a href="/category/language/%E4%B8%AD%E6%96%87">中文</a>
                                </li>
                                <li>
                                    <a href="/category/language/%E8%8B%B1%E6%96%87">英文</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>

    <br>
    <br>

    <div class="region">
        <div class="region-head">
            <span style="font-size: 15px;">最新更新</span>
            <span style="font-size: 13px; float: right; margin-right: 15px;"><a href="/e_books/page/1">更多&gt;&gt;</a></span>
        </div>
        <div class="region-body" style="height: 430px;">
            <ul class="ebook">
                <li>
                    <div>
                        <a href="/e_books/3171" data-toggle="tooltip" title="Cassandra: The Definitive Guide 2nd Edition"><img class="shadow-img" src="http://image.banshujiang.cn/3171s.jpeg?timestamp=1671815272968" alt="Cassandra: The Definitive Guide 2nd Edition"></a>
                        <div class="booktitle">Cassandra: The Definitive Guide 2nd Edition</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3170" data-toggle="tooltip" title="Building Web Apps with WordPress 2nd Edition"><img class="shadow-img" src="http://image.banshujiang.cn/3170s.jpeg?timestamp=1670941635638" alt="Building Web Apps with WordPress 2nd Edition"></a>
                        <div class="booktitle">Building Web Apps with WordPress 2nd Edition</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3169" data-toggle="tooltip" title="bash Cookbook 2nd Edition"><img class="shadow-img" src="http://image.banshujiang.cn/3169s.jpeg?timestamp=1670941525854" alt="bash Cookbook 2nd Edition"></a>
                        <div class="booktitle">bash Cookbook 2nd Edition</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3168" data-toggle="tooltip" title="Ansible: Up and Running 2nd Edition"><img class="shadow-img" src="http://image.banshujiang.cn/3168s.jpeg?timestamp=1670941434206" alt="Ansible: Up and Running 2nd Edition"></a>
                        <div class="booktitle">Ansible: Up and Running 2nd Edition</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3167" data-toggle="tooltip" title="Agile Application Security"><img class="shadow-img" src="http://image.banshujiang.cn/3167s.jpeg?timestamp=1670941102935" alt="Agile Application Security"></a>
                        <div class="booktitle">Agile Application Security</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3166" data-toggle="tooltip" title="Mining Social Media"><img class="shadow-img" src="http://image.banshujiang.cn/3166s.jpeg?timestamp=1670940900129" alt="Mining Social Media"></a>
                        <div class="booktitle">Mining Social Media</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3165" data-toggle="tooltip" title="WebAssembly in Action"><img class="shadow-img" src="http://image.banshujiang.cn/3165s.jpeg?timestamp=1670765971271" alt="WebAssembly in Action"></a>
                        <div class="booktitle">WebAssembly in Action</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3164" data-toggle="tooltip" title="Web Components in Action"><img class="shadow-img" src="http://image.banshujiang.cn/3164s.jpeg?timestamp=1670765899198" alt="Web Components in Action"></a>
                        <div class="booktitle">Web Components in Action</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3163" data-toggle="tooltip" title="The Joy of Kotlin"><img class="shadow-img" src="http://image.banshujiang.cn/3163s.jpeg?timestamp=1670765823701" alt="The Joy of Kotlin"></a>
                        <div class="booktitle">The Joy of Kotlin</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3162" data-toggle="tooltip" title="Streaming Data"><img class="shadow-img" src="http://image.banshujiang.cn/3162s.jpeg?timestamp=1670765760660" alt="Streaming Data"></a>
                        <div class="booktitle">Streaming Data</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3161" data-toggle="tooltip" title="RxJS in Action"><img class="shadow-img" src="http://image.banshujiang.cn/3161s.jpeg?timestamp=1670765642223" alt="RxJS in Action"></a>
                        <div class="booktitle">RxJS in Action</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3160" data-toggle="tooltip" title="Reactive Application Development"><img class="shadow-img" src="http://image.banshujiang.cn/3160s.jpeg?timestamp=1668844230103" alt="Reactive Application Development"></a>
                        <div class="booktitle">Reactive Application Development</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3159" data-toggle="tooltip" title="Programming with Types"><img class="shadow-img" src="http://image.banshujiang.cn/3159s.jpeg?timestamp=1668844150146" alt="Programming with Types"></a>
                        <div class="booktitle">Programming with Types</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3158" data-toggle="tooltip" title="Programmer’s Guide to Apache Thrift"><img class="shadow-img" src="http://image.banshujiang.cn/3158s.jpeg?timestamp=1668844081447" alt="Programmer’s Guide to Apache Thrift"></a>
                        <div class="booktitle">Programmer’s Guide to Apache Thrift</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3157" data-toggle="tooltip" title="Practices of the Python Pro"><img class="shadow-img" src="http://image.banshujiang.cn/3157s.jpeg?timestamp=1668844013835" alt="Practices of the Python Pro"></a>
                        <div class="booktitle">Practices of the Python Pro</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3156" data-toggle="tooltip" title="Practical Data Science with R 2nd Edition"><img class="shadow-img" src="http://image.banshujiang.cn/3156s.jpeg?timestamp=1668843909916" alt="Practical Data Science with R 2nd Edition"></a>
                        <div class="booktitle">Practical Data Science with R 2nd Edition</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <br>
    <br>

    <div class="region">
        <div class="region-head">
            <span style="font-size: 15px;">下载最多</span>
        </div>
        <div class="region-body" style="height: 430px;">
            <ul class="ebook">
                <li>
                    <div>
                        <a href="/e_books/3042" data-toggle="tooltip" title="Python 编程：从入门到实践"><img class="shadow-img" src="https://imagebsj.netlify.app/3042s.jpeg" alt="Python 编程：从入门到实践"></a>
                        <div class="booktitle">Python 编程：从入门到实践</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3117" data-toggle="tooltip" title="Python Crash Course 3rd Edition"><img class="shadow-img" src="https://imagebsj.netlify.app/3117s.jpeg" alt="Python Crash Course 3rd Edition"></a>
                        <div class="booktitle">Python Crash Course 3rd Edition</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3111" data-toggle="tooltip" title="100 Go Mistakes and How to Avoid Them"><img class="shadow-img" src="https://imagebsj.netlify.app/3111s.jpeg" alt="100 Go Mistakes and How to Avoid Them"></a>
                        <div class="booktitle">100 Go Mistakes and How to Avoid Them</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3041" data-toggle="tooltip" title="Python爬虫实战入门教程"><img class="shadow-img" src="https://imagebsj.netlify.app/3041s.jpeg" alt="Python爬虫实战入门教程"></a>
                        <div class="booktitle">Python爬虫实战入门教程</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/2969" data-toggle="tooltip" title="Head First Java 3rd Edition"><img class="shadow-img" src="https://imagebsj.netlify.app/2969s.jpeg" alt="Head First Java 3rd Edition"></a>
                        <div class="booktitle">Head First Java 3rd Edition</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/2981" data-toggle="tooltip" title="Python for Data Analysis 3rd Edition"><img class="shadow-img" src="https://imagebsj.netlify.app/2981s.jpeg" alt="Python for Data Analysis 3rd Edition"></a>
                        <div class="booktitle">Python for Data Analysis 3rd Edition</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/2588" data-toggle="tooltip" title="Python for Excel"><img class="shadow-img" src="https://imagebsj.netlify.app/2588s.jpeg" alt="Python for Excel"></a>
                        <div class="booktitle">Python for Excel</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3157" data-toggle="tooltip" title="Practices of the Python Pro"><img class="shadow-img" src="http://image.banshujiang.cn/3157s.jpeg?timestamp=1668844013835" alt="Practices of the Python Pro"></a>
                        <div class="booktitle">Practices of the Python Pro</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/2956" data-toggle="tooltip" title="Fluent Python 2nd Edition"><img class="shadow-img" src="https://imagebsj.netlify.app/2956s.jpeg" alt="Fluent Python 2nd Edition"></a>
                        <div class="booktitle">Fluent Python 2nd Edition</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/3077" data-toggle="tooltip" title="Modern C"><img class="shadow-img" src="https://imagebsj.netlify.app/3077s.jpeg" alt="Modern C"></a>
                        <div class="booktitle">Modern C</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/2866" data-toggle="tooltip" title="High Performance MySQL 4th Edition"><img class="shadow-img" src="https://imagebsj.netlify.app/2866s.jpeg" alt="High Performance MySQL 4th Edition"></a>
                        <div class="booktitle">High Performance MySQL 4th Edition</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/2456" data-toggle="tooltip" title="Head First Design Patterns 2nd Edition"><img class="shadow-img" src="https://imagebsj.netlify.app/2456s.jpeg" alt="Head First Design Patterns 2nd Edition"></a>
                        <div class="booktitle">Head First Design Patterns 2nd Edition</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/2915" data-toggle="tooltip" title="Introduction to Algorithms 4th Edition"><img class="shadow-img" src="https://imagebsj.netlify.app/2915s.jpeg" alt="Introduction to Algorithms 4th Edition"></a>
                        <div class="booktitle">Introduction to Algorithms 4th Edition</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/2692" data-toggle="tooltip" title="Rust in Action"><img class="shadow-img" src="https://imagebsj.netlify.app/2692s.jpeg" alt="Rust in Action"></a>
                        <div class="booktitle">Rust in Action</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/2974" data-toggle="tooltip" title="MySQL Cookbook 4th Edition"><img class="shadow-img" src="https://imagebsj.netlify.app/2974s.jpeg" alt="MySQL Cookbook 4th Edition"></a>
                        <div class="booktitle">MySQL Cookbook 4th Edition</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="/e_books/2836" data-toggle="tooltip" title="Spring in Action 6th Edition"><img class="shadow-img" src="https://imagebsj.netlify.app/2836s.jpeg" alt="Spring in Action 6th Edition"></a>
                        <div class="booktitle">Spring in Action 6th Edition</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <br>
    <br>

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

    <div style="text-align: center; margin: 10px 0">
    <a href="https://beian.miit.gov.cn">沪ICP备17021028号-1</a>
</div>
    <script src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js" type="text/javascript" charset="utf-8"></script>


</body></html>`

    expect(parseCategories(html)).toStrictEqual([
      {
        label: '编程语言',
        tags: [
          {
            label: 'ActionScript',
            url: '/category/programming_language/ActionScript',
          },
          {
            label: 'ASP.net',
            url: '/category/programming_language/ASP.net',
          },
          {
            label: 'C#',
            url: '/category/programming_language/C%23',
          },
        ],
      },
      {
        label: '移动开发',
        tags: [
          {
            label: 'Android',
            url: '/category/mobile_development/Android',
          },
          {
            label: 'iOS',
            url: '/category/mobile_development/iOS',
          },
        ],
      },
      {
        label: '语言',
        tags: [
          {
            label: '中文',
            url: '/category/language/%E4%B8%AD%E6%96%87',
          },
          {
            label: '英文',
            url: '/category/language/%E8%8B%B1%E6%96%87',
          },
        ],
      },

    ])
  })
})
