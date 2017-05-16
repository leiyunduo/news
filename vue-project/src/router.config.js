import Section from "./components/Section.vue"
import Details from "./components/Details.vue"
import Comment from "./components/Comment.vue"
import UserInfo from "./components/User-info.vue"
import Order from "./components/Order.vue"

export default[
	{
		path:'/',
		redirect:'/section'
	},
	{
		path:'*',
		redirect:'/section'
	},
	{
		path:'/section',
		component:Section
	},
	{
		path:'/details',
		component:Details
	},
	{
		path:'/comment',
		component:Comment
	},
	{
		path:'/user-info',
		component:UserInfo
	},
	{
		path:'/order',
		component:Order
	}
]
