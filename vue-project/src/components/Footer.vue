<template>
	<div class='footer'>
		<ul>
			<!--<li>
				<img src="../assets/img/per_center_11.png" />
				<p><a href="#">首页</a></p>
			</li>
			<li>
				<img src="../assets/img/per_center_12.png" />
				<p><a href="#">订单</a></p>
			</li>
			<li>
				<img src="../assets/img/per_center_13.png" />
				<p><a href="#">我的</a></p>
			</li>-->
			<router-link tag='li' active-class='my' to='/section'>
				<img src="../assets/img/per_center_11.png" />
				<p><a href="#">首页</a></p>
			</router-link>
			<router-link tag='li' active-class='my' to='/order'>
				<img src="../assets/img/per_center_12.png" />
				<p><a href="#">订单</a></p>
			</router-link>
			<router-link tag='li' active-class='my' to='/user-info'>
				<img src="../assets/img/per_center_13.png" />
				<p><a href="#">我的</a></p>
			</router-link>
		</ul>
	</div>
</template>