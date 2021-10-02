// Google AdSense
(function(){
  var ad = document.createElement("script");
  ad.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9312750344484857";
  ad.setAttribute("crossorigin", "anonymous");
  ad.setAttribute("async", true);
  document.head.appendChild(ad);
})();

// Google Analytics
(function(){
  var ga = document.createElement("script");
  ga.setAttribute("async", true);
  ga.src = "https://www.googletagmanager.com/gtag/js?id=UA-195431371-1";
  document.head.appendChild(ga);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-195431371-1');
})();

// baidu tongji
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?358b1a485f5d2756a663674529013da2";
  document.head.appendChild(hm);
})();
