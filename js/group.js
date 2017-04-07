var btn=document.querySelector('.fork');
var head=document.querySelector('header');
btn.innerHTML="<strong>欢迎来到前端攻城狮城堡</strong>";
btn.style.display='block';
btn.href='https://llylife.github.io/lifeblog/';
head.innerHTML="<h1>时代洞晰者</h1><p>深入探索WEB前沿技术，开拓JAVASCRIPT新时代</p>"
setTimeout(function(){
document.querySelector('footer').innerHTML="CopyRight © 2017"
},200)