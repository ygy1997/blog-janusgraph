<template>
	<div class="templatemo-content-container">

		<div class="templatemo-flex-row flex-content-row">
			<div class="col-2">
				<div class="templatemo-content-widget white-bg">
					<select v-model="graphEngine.name" class="form-control margin-bottom-10" @change="graphEngineChange">
						<option value="echart">百度Echarts</option>
						<option value="antV">蚂蚁G6</option>
						<option value="ngraph">大数据ngraph</option>
					</select>

					<div style="border:5px dotted #999999;" v-if="graphData!=undefined" >
						<echartGraph :graphData="graphData" v-if="graphEngine.name==='echart' "></echartGraph>
						<antGraph :graphData="graphData" v-if="graphEngine.name==='antV'"></antGraph>
						<ngraphGraph :graphData="graphData" v-if="graphEngine.name==='ngraph'"></ngraphGraph>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	const printf = console.log
	import antGraph from "../content/graph/antGraph.vue"
	import echartGraph from "../content/graph/echatGraph.vue"
	import ngraphGraph from "../content/graph/ngraph.vue"

	export default {

		components: {
			"echartGraph": echartGraph,
			"ngraphGraph": ngraphGraph,
			'antGraph': antGraph,
		},
		data() {
			return {
				graphEngine: {
					name: "echart",
				},
				graphData: undefined,
				path: 'home'
			}
		},
		created() {
			this.path = this.$route.fullPath.replace("/", "")
			printf(this.path)
			this.graphDataInit()
		},
		methods: {
			graphEngineChange(graphEngine) {
				console.log(this.graphEngine.name)
			},
			async graphDataInit() {
				var response = await fetch(
					'https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json',
				);
				this.graphData = await response.json();
				printf(this.graphData)
				var _this = this
				this.$nextTick(() => {
					_this.$forceUpdate()
				})
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	@import url("./graph/graph.css");

	.footer {
		position: fixed;
		bottom: 5px;
		right: 50px;
	}

	.templatemo-content {
		overflow: hidden
	}

</style>
