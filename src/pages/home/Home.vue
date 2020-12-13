<template>
	<!-- Left column -->
	<div class="templatemo-flex-row">

		<!-- siderbar -->
		<sider v-show="showMax==false" ></sider>
		<!-- Main content -->
		<div class="templatemo-content col-1 light-gray-bg">

			<!-- navigation -->
			<navgation v-show="showMax==false"></navgation>
			<el-menu class="el-menu-demo" :default-active="$route.path" :router="true" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="orange">
				<el-menu-item index="/home">
						<i class="fa fa-home fa-fw"></i>主页 Viasul Core
				</el-menu-item>
				<el-submenu index="" >
					<template slot="title">图库系统</template>
					<el-menu-item index="/blog">
						<i class="fa fa-pencil fa-fw"></i> 博客  Blog
					</el-menu-item>
					<el-menu-item index="2-2">选项2</el-menu-item>
					<el-menu-item index="2-3">选项3</el-menu-item>
					<el-submenu index="2-4">
						<template slot="title">网页存档</template>
						<el-menu-item index="blog/0">blog-0</el-menu-item>
						<el-menu-item index="blog/1">blog-1</el-menu-item>
						<el-menu-item index="blog/2">blog-2</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-menu-item index="/admin" >
					<i class="fa fa-spinner fa-spin fa-fw"></i>控制台 Admin
				</el-menu-item>
				<el-menu-item index=""  @click="hideLeftAndTop">
					全屏模式：{{ showMax?"开":"关"}}
				</el-menu-item>
			</el-menu>

			<!-- content -->
			<!-- 首页 -->
			<baseGraph v-if="$route.path==='/blog'"></baseGraph>
			<graphAdmin v-else-if="$route.path==='/admin'"></graphAdmin>
			<visualCore v-else></visualCore>
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
				showMax: false,
			}
		},
		created() {
		},
		methods: {
			hideLeftAndTop() {
				this.showMax = !this.showMax
			}
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
