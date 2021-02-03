<template>
	<!-- Left column -->
	<div class="templatemo-flex-row">

		<!-- siderbar -->
		<sider ></sider>
		<!-- Main content -->
		<div class="templatemo-content col-1 light-gray-bg">

			<!-- navigation -->
			<navgation ></navgation>
	

			<!-- content -->
			<!-- 首页 -->
			<baseGraph v-if="$route.path==='/blog'"></baseGraph>
			<graphAdmin v-else-if="$route.path==='/admin'"></graphAdmin>
			<visualCore v-else-if="$route.path==='/home'"></visualCore>
			<!-- footer -->
			<footer class="text-right footer">
				<p>博主qq 1054660480
					| Designed by <a href="http://www.templatemo.com" target="_parent">亢龙无悔</a></p>
			</footer>
		</div>
	</div>
</template>

<script>
	import sider from './siderBar.vue'
	import navgation from "./navgation.vue"
	import visualCore from "../content/visualCore.vue"
	import baseGraph from "../content/baseGraph.vue"
	import graphAdmin from "../content/graphAdmin.vue"
	const printf = console.log
	export default {

		components: {
			'navgation': navgation,
			'sider': sider,
			'visualCore': visualCore,
			'baseGraph': baseGraph,
			'graphAdmin': graphAdmin,
		},
		data() {
			return {
			}
		},
		created() {
		},
		methods: {
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	@import url("../static/css/bootstrap.min.css");
	@import url("../static/css/font-awesome.min.css");
	@import url("../static/css/templatemo-style.css");

	.footer {
		position: fixed;
		bottom: 5px;
		right: 50px;
	}

	/* .templatemo-content{
		overflow:hidden
	} */
	.baseGraph {
		width: 100%;
		height: 100%;
	}

	.toolbar {
		background-color: white;
		color: white
	}

	.iconFunc {
		background-color: #d7d7d7;
		border-radius: 15px;
		color: white;
		cursor: pointer;
		padding: 4px 5px;
		position: absolute;
		top: 15px;
		right: 15px;
		z-index: 100;
		transition: all 0.3s ease;
	}

	.iconFunc:hover {
		background-color: #83ccd1;
	}
</style>
