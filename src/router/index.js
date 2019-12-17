import Vue from 'vue'
import VueRouter from 'vue-router'
import One from "../views/One.vue"
import All from "../views/All.vue"
import Me from "../views/Me.vue"
import ContentView from "../components/ContentView.vue"


Vue.use(VueRouter)

const routes = [{
		path: "/",
		redirect: "/one"
	},
	{
		path: '/one',
		name: 'one',
		component: One
	},
	{
		path: '/all',
		name: 'all',
		component: All
	},
	{
		path: '/me',
		name: 'me',
		component: Me
	},
	{
		path: '/content',
		name: 'content',
		component: ContentView,
		props: true
	}

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
