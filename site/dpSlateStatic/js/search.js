!function(){"use strict";function e(){$("h1, h2").each(function(){var e=$(this),t=e.nextUntil("h1, h2");r.add({id:e.prop("id"),title:e.text(),body:t.text()})})}function t(){a=$(".content"),n=$(".search-results"),$("#input-search").on("keyup",i)}function i(e){if(s(),n.removeClass("invisible"),$(".toc-title").addClass("invisible"),$(".toc").addClass("invisible"),27===e.keyCode&&(this.value=""),this.value){var t=r.search(this.value).filter(function(e){return e.score>1e-4});if(t.length){n.empty(),l.call(this),n.html('<li style="color:green"></li>');var i=$(".match");$(".search-results li").text(i.length.toLocaleString("en")+" Results Found and Highlighted"),$(".search-results li").append('<span id="searchPrev"> &lt;&lt;prev </span><span id="searchNext"> next&gt;&gt; </span>');var a=0;$("#searchNext").on("click",function(){a>=i.length&&(a=0);var e=$(".match");e.removeClass("search-highlight");var t=$(".match").eq(a);a+=1,t.addClass("search-highlight"),$(window).scrollTop(t.offset().top-30)}),$("#searchPrev").on("click",function(){0>a&&(a=i.length-1);var e=$(".match");e.removeClass("search-highlight");var t=$(".match").eq(a-2);a-=1,t.addClass("search-highlight"),$(window).scrollTop(t.offset().top-30)})}else n.html('<li style="color:red"></li>'),$(".search-results li").text('No Results Found for "'+this.value+'"')}else s(),n.addClass("invisible"),$(".toc-title").removeClass("invisible"),$(".toc").removeClass("invisible")}function l(){this.value&&a.highlight(this.value,h)}function s(){a.unhighlight(h)}var a,n,h={element:"span",className:"match"},r=new lunr.Index;r.ref("id"),r.field("title",{boost:10}),r.field("body"),r.pipeline.add(lunr.trimmer,lunr.stopWordFilter),$(e),$(t)}();