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
	 <contenter></contenter>
	 <!-- footer -->
	 <footer class="text-right">
	   <p>Copyright &copy; 2084 Company Name 
	   | Designed by <a href="http://www.templatemo.com" target="_parent">templatemo</a></p>
	 </footer> 
   </div>
 </div>
</template>

<script>
	import sider from './siderBar.vue'
	import navgation from "./navgation.vue"
	import contenter from "./content.vue"
	export default{
		components:{
			'navgation':navgation,
			'sider':sider,
			'contenter':contenter,
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
</style>
