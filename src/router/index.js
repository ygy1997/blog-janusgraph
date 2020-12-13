import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import baseGraph from '@/pages/content/baseGraph'
Vue.use(Router);
export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/:path',
			name: '',
			component: Home,
		},
	]
})