// Google AdSense
(function(){
  var ad = document.createElement("script");
  ad.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9312750344484857";
  ad.setAttribute("crossorigin", "anonymous");
  ad.setAttribute("async", true);
  document.head.appendChild(ad);
})();

/*
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
*/

   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(93154105, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });

