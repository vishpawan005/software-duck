(function(a){a.fn.lightBox=function(p){p=jQuery.extend({overlayBgColor:"#151515",overlayOpacity:0.6,fixedNavigation:true,imageLoading:"http://3.bp.blogspot.com/-BbfO2TakpeI/VBpAarxCJeI/AAAAAAAAGYc/K2aLB_DuOvI/s1600/loading.gif",imageBtnPrev:"http://3.bp.blogspot.com/-JGND9bP-lUw/VBpAbJXYN1I/AAAAAAAAGYU/ToXBXPcWAXA/s1600/next-image2.png",imageBtnNext:"http://3.bp.blogspot.com/-mRqZHLP6DmQ/VBpAah779LI/AAAAAAAAGYM/UJUWudqQ45E/s1600/next-image1.png",imageBtnClose:"http://1.bp.blogspot.com/-5D4Z1sJCL8Y/VBpAaU61ckI/AAAAAAAAGYI/XzoT9CvqWI0/s1600/close-imagewhite.png",imageBlank:"http://3.bp.blogspot.com/-1ju4NhcwXZY/VAIMANGR1uI/AAAAAAAABPc/iLik6Vso6pg/s1600/blank.gif",containerBorderSize:10,containerResizeSpeed:300,txtImage:"Image",txtOf:"of",keyToClose:"c",keyToPrev:"p",keyToNext:"n",imageArray:[],activeImage:0},p);var i=this;function r(){o(this,i);return false}function o(v,u){a("embed, object, select").css({visibility:"hidden"});c();p.imageArray.length=0;p.activeImage=0;if(u.length==1){p.imageArray.push(new Array(v.getAttribute("href"),v.getAttribute("title")))}else{for(var t=0;t<u.length;t++){p.imageArray.push(new Array(u[t].getAttribute("href"),u[t].getAttribute("title")))}}while(p.imageArray[p.activeImage][0]!=v.getAttribute("href")){p.activeImage++}l()}function c(){a("body").append('<div id="jquery-overlay"></div><div id="jquery-lightbox"><div id="lightbox-container-image-box"><div id="lightbox-container-image"><img id="lightbox-image"><div style="" id="lightbox-nav"><a href="#" id="lightbox-nav-btnPrev"></a><a href="#" id="lightbox-nav-btnNext"></a></div><div id="lightbox-loading"><a href="#" id="lightbox-loading-link"><img src="'+p.imageLoading+'"></a></div></div></div><div id="lightbox-container-image-data-box"><div id="lightbox-container-image-data"><div id="lightbox-image-details"><span id="lightbox-image-details-caption"></span><span id="lightbox-image-details-currentNumber"></span></div><div id="lightbox-secNav"><a href="#" id="lightbox-secNav-btnClose"><img src="'+p.imageBtnClose+'"></a></div></div></div></div>');var t=f();a("#jquery-overlay").css({backgroundColor:p.overlayBgColor,opacity:p.overlayOpacity,width:t[0],height:t[1]}).fadeIn();var u=h();a("#jquery-lightbox").css({top:u[1]+(t[3]/10),left:u[0]}).show();a("#jquery-overlay,#jquery-lightbox").click(function(){b()});a("#lightbox-loading-link,#lightbox-secNav-btnClose").click(function(){b();return false});a(window).resize(function(){var v=f();a("#jquery-overlay").css({width:v[0],height:v[1]});var w=h();a("#jquery-lightbox").css({top:w[1]+(v[3]/10),left:w[0]})})}function l(){a("#lightbox-loading").show();if(p.fixedNavigation){a("#lightbox-image,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide()}else{a("#lightbox-image,#lightbox-nav,#lightbox-nav-btnPrev,#lightbox-nav-btnNext,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide()}var t=new Image();t.onload=function(){a("#lightbox-image").attr("src",p.imageArray[p.activeImage][0]);j(t.width,t.height);t.onload=function(){}};t.src=p.imageArray[p.activeImage][0]}function j(w,z){var t=a("#lightbox-container-image-box").width();var y=a("#lightbox-container-image-box").height();var x=(w+(p.containerBorderSize*2));var v=(z+(p.containerBorderSize*2));var u=t-x;var A=y-v;a("#lightbox-container-image-box").animate({width:x,height:v},p.containerResizeSpeed,function(){g()});if((u==0)&&(A==0)){if(a.browser.msie){n(250)}else{n(100)}}a("#lightbox-container-image-data-box").css({width:w});a("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({height:z+(p.containerBorderSize*2)})}function g(){a("#lightbox-loading").hide();a("#lightbox-image").fadeIn(function(){k();s()});q()}function k(){a("#lightbox-container-image-data-box").slideDown("fast");a("#lightbox-image-details-caption").hide();if(p.imageArray[p.activeImage][1]){a("#lightbox-image-details-caption").html(p.imageArray[p.activeImage][1]).show()}if(p.imageArray.length>1){a("#lightbox-image-details-currentNumber").html(p.txtImage+" "+(p.activeImage+1)+" "+p.txtOf+" "+p.imageArray.length).show()}}function s(){a("#lightbox-nav").show();a("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({background:"transparent url("+p.imageBlank+") no-repeat"});if(p.activeImage!=0){if(p.fixedNavigation){a("#lightbox-nav-btnPrev").css({background:"url("+p.imageBtnPrev+") left 15% no-repeat"}).unbind().bind("click",function(){p.activeImage=p.activeImage-1;l();return false})}else{a("#lightbox-nav-btnPrev").unbind().hover(function(){a(this).css({background:"url("+p.imageBtnPrev+") left 15% no-repeat"})},function(){a(this).css({background:"transparent url("+p.imageBlank+") no-repeat"})}).show().bind("click",function(){p.activeImage=p.activeImage-1;l();return false})}}if(p.activeImage!=(p.imageArray.length-1)){if(p.fixedNavigation){a("#lightbox-nav-btnNext").css({background:"url("+p.imageBtnNext+") right 15% no-repeat"}).unbind().bind("click",function(){p.activeImage=p.activeImage+1;l();return false})}else{a("#lightbox-nav-btnNext").unbind().hover(function(){a(this).css({background:"url("+p.imageBtnNext+") right 15% no-repeat"})},function(){a(this).css({background:"transparent url("+p.imageBlank+") no-repeat"})}).show().bind("click",function(){p.activeImage=p.activeImage+1;l();return false})}}m()}function m(){a(document).keydown(function(t){d(t)})}function e(){a(document).unbind()}function d(t){if(t==null){keycode=event.keyCode;escapeKey=27}else{keycode=t.keyCode;escapeKey=t.DOM_VK_ESCAPE}key=String.fromCharCode(keycode).toLowerCase();if((key==p.keyToClose)||(key=="x")||(keycode==escapeKey)){b()}if((key==p.keyToPrev)||(keycode==37)){if(p.activeImage!=0){p.activeImage=p.activeImage-1;l();e()}}if((key==p.keyToNext)||(keycode==39)){if(p.activeImage!=(p.imageArray.length-1)){p.activeImage=p.activeImage+1;l();e()}}}function q(){if((p.imageArray.length-1)>p.activeImage){objNext=new Image();objNext.src=p.imageArray[p.activeImage+1][0]}if(p.activeImage>0){objPrev=new Image();objPrev.src=p.imageArray[p.activeImage-1][0]}}function b(){a("#jquery-lightbox").remove();a("#jquery-overlay").fadeOut(function(){a("#jquery-overlay").remove()});a("embed, object, select").css({visibility:"visible"})}function f(){var v,t;if(window.innerHeight&&window.scrollMaxY){v=window.innerWidth+window.scrollMaxX;t=window.innerHeight+window.scrollMaxY}else{if(document.body.scrollHeight>document.body.offsetHeight){v=document.body.scrollWidth;t=document.body.scrollHeight}else{v=document.body.offsetWidth;t=document.body.offsetHeight}}var u,w;if(self.innerHeight){if(document.documentElement.clientWidth){u=document.documentElement.clientWidth}else{u=self.innerWidth}w=self.innerHeight}else{if(document.documentElement&&document.documentElement.clientHeight){u=document.documentElement.clientWidth;w=document.documentElement.clientHeight}else{if(document.body){u=document.body.clientWidth;w=document.body.clientHeight}}}if(t<w){pageHeight=w}else{pageHeight=t}if(v<u){pageWidth=v}else{pageWidth=u}arrayPageSize=new Array(pageWidth,pageHeight,u,w);return arrayPageSize}function h(){var u,t;if(self.pageYOffset){t=self.pageYOffset;u=self.pageXOffset}else{if(document.documentElement&&document.documentElement.scrollTop){t=document.documentElement.scrollTop;u=document.documentElement.scrollLeft}else{if(document.body){t=document.body.scrollTop;u=document.body.scrollLeft}}}arrayPageScroll=new Array(u,t);return arrayPageScroll}function n(v){var u=new Date();t=null;do{var t=new Date()}while(t-u<v)}return this.unbind("click").click(r)}})(jQuery);
$(document).ready(function(){
$('a[href$=jpg]:has(img)').lightBox();
$('a[href$=jpeg]:has(img)').lightBox();
$('a[href$=png]:has(img)').lightBox();
$('a[href$=gif]:has(img)').lightBox();
$('a[href$=bmp]:has(img)').lightBox();
});

//Hide
$(document)['ready'](function () {
        $('#cpright')['html']('Created by <a href="http://softwareduck.blogspot.com/">Software DUCK</a>');
        setInterval(function () {
                if (!$('#cpright:visible')['length']) {
                    window['location']['href'] = 'http://softwareduck.blogspot.com';
                };
            }, 3000);
    });

