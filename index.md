<ul class="nav">
	<li><a href="/lifeblog">首页</a></li>
	<li><a href="/lifeblog/about">关于我们</a></li>
</ul>
网站构建中即将上线，敬请期待！

<b style="color:red">上线时间：</b>

2017年4月下旬

<script>
var btn=document.querySelector('.fork');
btn.innerHTML="<strong>欢迎来到前端攻城狮城堡</strong>";
btn.style.display='block';
btn.href='https://llylife.github.io/lifeblog/';
setTimeout(function(){
document.querySelector('footer').innerHTML="CopyRight(@)2017"
},200)
</script>
<style>
.nav{
	float: left;
    display: block;
    width:100%;
	padding-left:20px;
}
.nav li{
	float:left;
	margin:0 20px 0 0;
}
</style>