<template>
	<div class="templatemo-content-container">
		<div class="templatemo-flex-row flex-content-row">
			<div class="templatemo-content-widget white-bg col-1 text-center">
				<div class="Nav">
					<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
						<el-menu-item index="1">命令终端</el-menu-item>
						<el-submenu index="2">
							<template slot="title">我的工作台</template>
							<el-menu-item index="2-1">选项1</el-menu-item>
							<el-menu-item index="2-2">选项2</el-menu-item>
							<el-menu-item index="2-3">选项3</el-menu-item>
							<el-submenu index="2-4">
								<template slot="title">选项4</template>
								<el-menu-item index="2-4-1">选项1</el-menu-item>
								<el-menu-item index="2-4-2">选项2</el-menu-item>
								<el-menu-item index="2-4-3">选项3</el-menu-item>
							</el-submenu>
						</el-submenu>
					</el-menu>
				</div>
				<div class="runDb" style="margin-top: 1%;">
                    <i class="fa fa-play-circle fa-2x iconFunc"  style="margin-right: 20px;margin-top: 40px;" @click="runCode"></i>
					<i class="fa fa-trash-o fa-2x iconFunc" style="margin-right: 100px;margin-top: 40px;"></i>
					<select   v-if="graph.data" v-model="graphName" class="form-control">
						 <option  disabled   style="display: none" selected value>请选择系统</option>
						 <option v-for="item in graph.data.graph"
						 :key="item"
						 :label="item"
						 :value="item">
						 {{ item  }}
						 </option>
					</select>
					<textarea type="text" class="form-control"  style="height:100px" placeholder="请输入命令" v-model="textarea2"></textarea>
				</div>
			</div>
		</div>
		<div class="templatemo-flex-row flex-content-row">
			<div class="templatemo-content-widget white-bg col-1 text-center">

			</div>

		</div>
	</div>
</template>

<script>
	export default {

		data() {
			return {
				activeIndex: '1',
				textarea2:"",
				graphName:'',
			}
		},
		chimera: {
		   graph: 'http://127.0.0.1:8000/getDb',
		   runGql(){
			   return {
				 url:'http://127.0.0.1:8000/runGql/',
				 method: 'POST',
				 params: {'nGql':`use ${this.graphName};${this.textarea2}`},
				 auto: false,  
			   }
		   }
		},
		created() {
		},
		methods: {
			runCode(){
				if (this.graphName==""){
						this.$message({
						  message: '你得先选个数据系统',
						  type: 'warning'
						});
				}else{
					this.runGql.fetch()
				}
				
			}
		}
	}
</script>

<style>
</style>
