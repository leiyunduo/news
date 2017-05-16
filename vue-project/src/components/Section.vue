<template>
	<div id='home' class="mt50">
		<div class='section'>
			<div class="Tab">
				<div class="one">
					<div class="center">
						<div class="left_list">
							<!-- Swiper -->
							<div class="swiper-container">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<ul>
											<li>方便速食</li>
											<li>方便速食</li>
											<li>方便速食</li>
											<li>方便速食</li>
											<li>方便速食</li>
											<li>方便速食</li>
											<li>方便速食</li>
											<li>方便速食</li>
										</ul>
									</div>
								</div>
							</div>

						</div>
						<div class="right_list">
							<div class="right-nav">
								<div class="zuo">
									<div class="swiper-wrapper">
										<div class="swiper-slide hah">辣条</div>
										<div class="swiper-slide hah">辣条</div>
										<div class="swiper-slide hah">辣条</div>
									</div>
								</div>
							</div>

							<div class="right-main">
								<dl v-for="(item,index) in arrList">
									<dt><img :src='item.img' /></dt>
									<dd>
										<h3>{{item.name}}</h3>
										<p>{{item.num}}</p>
										<span>
											<a href="#" class="a1">{{item.money}}</a>
											<a href="#" class="a2">{{item.pirect}}</a>
										</span>
										<span>
											<img :src='item.img1' />
											<a href="">2</a>
											<img :src='item.img2' />
										</span>
									</dd>
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>		
	</div>
</template>
<script>
	
	export default{
		data(){
			return{
				arrList:[],
			}
		},
		mounted(){
			this.feachData()
		},
		methods:{
			feachData(){
				var _this=this;
//				console.log(this.$http);
				this.$http.get('src/data/section.data').then(function(res){
					_this.arrList = res.data;
				}).catch(function(err){
					console.log('Section', err)
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