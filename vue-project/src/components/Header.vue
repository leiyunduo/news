<template>
	<div id='Nav'>
		<div class='header'>
			<ul>
				<!--<li class="active"><a href="">商品</a></li>
				<li><a href="">详情</a></li>
				<li><a href="">评论</a></li>-->
				<router-link to='/section' tag='li' active-class='active'>
					<a href="">商品</a>
				</router-link>
				<router-link to='/details' tag='li' active-class='active'>
					<a href="">详情</a>
				</router-link>
				<router-link to='/comment' tag='li' active-class='active'>
					<a href="">评论</a>
				</router-link>
			</ul>
		</div>
	</div>
</template>