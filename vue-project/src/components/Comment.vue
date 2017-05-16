<template>
	<div id='comment' class="section mt50">
		<div class="three">
			<div class="ping">
				<div class="ping_left">
					<p class="spc-22">4.8</p>
					<p class="spc-14">总体评分</p>
					<p>共212人评价</p>
				</div>
				<div class="ping_right">
					<p>送达速度<img src="../assets/img/sto_star_03.png"><a class="spc-14">4.8</a></p>
					<p>服务态度<img src="../assets/img/sto_star_03.png"><a class="spc-14">4.8</a></p>
				</div>
			</div>

			<div class="pinba">
				<dl v-for="(item,index) in arrList">
					<dt><img :src="item.img"/></dt>
					<dd>
						<p>{{item.name}}</p>
						<p><img :src="item.img1"></p>
						<p>{{item.comments}}</p>
					</dd>
					<dd><span>{{item.date}}</span></dd>
				</dl>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				arrList:[]
			}
		},
		mounted(){
			this.feachData();
		},
		methods:{
			feachData(){
				var _this=this;
				this.$http.get('src/data/comment.data').then(function(res){
					console.log();
					_this.arrList = res.data;
				}).catch(function(err){
					console.log('Comment', err);
				})
			}
		}
	}
</script>
<style scoped>
	.mt50{
		margin-top: 50px;
	}
</style>