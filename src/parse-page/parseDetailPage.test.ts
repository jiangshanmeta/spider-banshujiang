import { describe, expect, jest, test } from '@jest/globals'
import { parseDetailPage } from './parseDetailPage'
import type { downloadImage } from './downloadImage'

const html = `
<html lang="zh_CN" xmlns:wb="http://open.weibo.com/wb"><head>
    
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
<title>Get Programming with Node.js - 搬书匠 - 电子书下载</title>
<meta name="description" content="作者: Jonathan Wexler; 语言: 英文; 出版年份: 2019; 出版社: Manning Publications, 编程语言: JavaScript">
<meta name="keywords" content="Get Programming with Node.js, 英文, 搬书匠, 下载, pdf, 电子书">
<meta name="robots" content="index,nofollow">
<link href="http://bdimg.share.baidu.com/static/css/bdsstyle.css?cdnversion=20131219" rel="stylesheet" type="text/css"><script src="http://bdimg.share.baidu.com/static/js/logger.js?cdnversion=463471"></script><script charset="UTF-8" src="https://js.t.sinajs.cn/open/api/js/api/bundle.js?version=20220715.01"></script><script charset="UTF-8" src="https://js.t.sinajs.cn/open/api/js/widget/iframeWidget/iframeWidget.js?version=20220715"></script></head>
<body><iframe id="sina_anywhere_iframe" style="display: none;"></iframe><iframe frameborder="0" style="display: none;"></iframe><div id="bdshare_s" style="display: block;"><iframe id="bdsIfr" style="position:absolute;display:none;z-index:9999;" frameborder="0"></iframe><div id="bdshare_l" style="display: none;"><div id="bdshare_l_c"><h6>分享到</h6><ul><li><a href="#" class="bds_mshare mshare">一键分享</a></li><li><a href="#" class="bds_qzone qqkj">QQ空间</a></li><li><a href="#" class="bds_tsina xlwb">新浪微博</a></li><li><a href="#" class="bds_bdysc bdysc">百度云收藏</a></li><li><a href="#" class="bds_renren rrw">人人网</a></li><li><a href="#" class="bds_tqq txwb">腾讯微博</a></li><li><a href="#" class="bds_bdxc bdxc">百度相册</a></li><li><a href="#" class="bds_kaixin001 kxw">开心网</a></li><li><a href="#" class="bds_tqf txpy">腾讯朋友</a></li><li><a href="#" class="bds_tieba bdtb">百度贴吧</a></li><li><a href="#" class="bds_douban db">豆瓣网</a></li><li><a href="#" class="bds_tsohu shwb">搜狐微博</a></li><li><a href="#" class="bds_bdhome bdhome">百度新首页</a></li><li><a href="#" class="bds_sqq sqq">QQ好友</a></li><li><a href="#" class="bds_thx thx">和讯微博</a></li><li><a href="#" class="bds_more">更多...</a></li></ul><p><a href="#" class="goWebsite">百度分享</a></p></div></div></div>
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
    <div class="row shadow-panel" style="margin: 25px 0 25px">
        <div class="span6" style="">
            <img src="https://imagebsj.netlify.app/3149.jpeg" alt="Get Programming with Node.js">
        </div>
        <div class="span6">
            <div style="height:510px;padding-top:20px;">
                <div class="ebook-title">
                    <a href="/e_books/3149">Get Programming with Node.js</a>
                </div>
                <div style="border-top: 1px solid lightgrey; margin: 10px 0;"></div>
                <table class="table tablex">
                    <tbody>
                    <tr>
                        <td style="text-align:right;width:100px;">作者：</td>
                        <td>Jonathan Wexler</td>
                    </tr>
                    <tr>
                        <td style="text-align:right;width:100px;">语言：</td>
                        <td>英文</td>
                    </tr>
                    <tr>
                        <td style="text-align:right;width:100px;">出版年份：</td>
                        <td>2019</td>
                    </tr>
                    
                    <tr>
                        <td style="text-align:right;width:100px;">编程语言：</td>
                        <td>JavaScript</td>
                    </tr>
                    <tr>
                        <td style="text-align:right;width:100px;">下载链接：</td>
                        <td>
                            <ul class="inline">
                                <li style="margin-bottom: 10px; padding-left: 0; width: 270px;">
                                    <span class="format-tag PDF" style="vertical-align: middle;">PDF</span>

                                    <a class="link-name PDF" style="margin-left: 8px; vertical-align: middle;" rel="nofollow" target="_blank" href="/e_books/3149/webstorage_links/16698/to_link">城通网盘</a>
                                </li>
                                <li style="margin-bottom: 10px; padding-left: 0; width: 270px;">
                                    <span class="format-tag EPUB" style="vertical-align: middle;">EPUB</span>

                                    <a class="link-name EPUB" style="margin-left: 8px; vertical-align: middle;" rel="nofollow" target="_blank" href="/e_books/3149/webstorage_links/16696/to_link">城通网盘</a>
                                </li>
                                <li style="margin-bottom: 10px; padding-left: 0; width: 270px;">
                                    <span class="format-tag MOBI" style="vertical-align: middle;">MOBI</span>

                                    <a class="link-name MOBI" style="margin-left: 8px; vertical-align: middle;" rel="nofollow" target="_blank" href="/e_books/3149/webstorage_links/16697/to_link">城通网盘</a>
                                </li>
                                
                            </ul>
                            <div style="margin-top: 10px;">
                                <pre style="font-size: 12px;">书籍均收集自互联网，仅供学习和研究使用，请莫用于商业用途。谢谢合作。</pre>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div style="height:30px;">
                <!-- Baidu Button BEGIN -->
                <div id="bdshare" class="bdshare_t bds_tools get-codes-bdshare" style="float:right;">
                    <span class="bds_more">分享到：</span>
                    <a class="bds_qzone" title="分享到QQ空间" href="#"></a>
                    <a class="bds_tsina" title="分享到新浪微博" href="#"></a>
                    <a class="bds_tqq" title="分享到腾讯微博" href="#"></a>
                    <a class="bds_renren" title="分享到人人网" href="#"></a>
                    <a class="bds_t163" title="分享到网易微博" href="#"></a>
                    <a class="shareCount" href="#" title="累计分享0次">0</a>
                </div>
                <script type="text/javascript" id="bdshare_js" data="type=tools&amp;uid=5227233" src="http://bdimg.share.baidu.com/static/js/bds_s_v2.js?cdnversion=463471"></script>
                
                <script type="text/javascript">
                    document.getElementById("bdshell_js").src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + Math.ceil(new Date() / 3600000)
                </script>
                <!-- Baidu Button END -->
            </div>
        </div>
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

jest.mock('./downloadImage', () => {
  const mockDownloadImage = jest.fn<typeof downloadImage>().mockImplementation(async () => {
    return 'mock img'
  })

  return {
    downloadImage: mockDownloadImage,
  }
})

describe('parseDetailPage', () => {
  test('get one record', () => {
    return parseDetailPage(html, 3149).then((data) => {
      expect(data).toEqual({
        id: 3149,
        title: 'Get Programming with Node.js',
        img: 'https://imagebsj.netlify.app/3149.jpeg',
        author: 'Jonathan Wexler',
        language: '英文',
        publishYear: 2019,
        formats: [
          {
            fmt: 'PDF',
            title: '城通网盘',
            link: '/e_books/3149/webstorage_links/16698/to_link',
          },
          {
            fmt: 'EPUB',
            title: '城通网盘',
            link: '/e_books/3149/webstorage_links/16696/to_link',
          },
          {
            fmt: 'MOBI',
            title: '城通网盘',
            link: '/e_books/3149/webstorage_links/16697/to_link',
          },
        ],
      })
    })
  })
})
