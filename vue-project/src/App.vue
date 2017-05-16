<template>
	<div id='app'>
		<div class="warp">
			<loading v-show='loading'></loading>
			<!--header-->
				<HeaderView v-show='headerShow'></HeaderView>
			<!--section-->
				<transition name='silde-down'>
					<router-view></router-view>
				</transition>
			<!--footer-->
				<FooterView></FooterView>
		</div>
	</div>
</template>
<script>
	import HeaderView from './components/Header.vue'
	import FooterView from './components/Footer.vue'
	import {mapGetters,mapActions} from 'vuex'
	export default {
		computed:mapGetters([
			'headerShow',
			"loading"
		]),
		watch:{
			$route(to,from){
				if(to.path == '/user-info' || to.path == '/order'){
					this.$store.dispatch('hideHeader')
				}else{
					this.$store.dispatch('showHeader')
				}
			}
		},
		components: {
			HeaderView,
			FooterView
		}
	}
</script>
<style scoped>
	.silde-down-enter-active,
	.silde-down-leave-active{
		transition:.4s all ease;
		opacity:0.2;
		transform:translate3d(0,6em,0);
	}
	.silde-down-enter,
	.silde-down-leave{
		opacity:1;
		transform:translate3d(0,6em,0);
	}
</style>