<template>
 <!-- Left column -->
 <div class="templatemo-flex-row">
	<!-- siderbar -->
	<sider></sider>
  <!-- Main content --> 
   <div class="templatemo-content col-1 light-gray-bg">
	 <!-- navigation -->
	 <navgation></navgation>
	 <!-- content -->
		<!-- 首页 -->
	 <!-- <visualCore></visualCore> -->
		<!-- 地理信息 -->
	<!-- <geography></geography> -->
		<!-- 社交网络 -->
	<!-- <socialNet></socialNet> -->
		<!-- 画布 -->
	<antGraph></antGraph>
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
	import visualCore from "../content/visualCore-test.vue"
	import geography from "../content/geography.vue"
	import socialNet from "../content/socialNet.vue"
	import antGraph from "../content/antGraph.vue"
	export default{
		components:{
			'navgation':navgation,
			'sider':sider,
			'visualCore':visualCore,
			'geography':geography,
			'socialNet':socialNet,
			'antGraph':antGraph,
		},
		data(){
			return{
				
			}
		},
		created() {
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("../static/css/bootstrap.min.css");
@import url("../static/css/font-awesome.min.css");
@import url("../static/css/templatemo-style.css");
.footer{
	position:fixed;
	bottom: 5px;
	right: 50px;
}
</style>
