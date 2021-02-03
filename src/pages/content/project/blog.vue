<template>
	<div class="templatemo-content-container">
		<div class="templatemo-flex-row flex-content-row">
			<div class="col-2">
				<div class="templatemo-content-widget white-bg">
					<div style="border:5px dotted #999999;" v-if="graphData!=undefined" >
						<echartGraph :graphData="graphData" ref="mychart" ></echartGraph>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	const printf = console.log
	import echartGraph from "../../content/tools/echatGraph"
	export default {

		components: {
			"echartGraph": echartGraph,
		},
		data() {
			return {
				graphData: undefined,
				path: 'home',
			}
		},
		created() {
			this.path = this.$route.fullPath.replace("/", "")
			printf(this.path)
			this.graphDataInit()
		},
		methods: {
			async graphDataInit() {
				var response = await fetch(
					'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/les-miserables.json',
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
	@import url("../../content/tools/graph.css");

	.footer {
		position: fixed;
		bottom: 5px;
		right: 50px;
	}

	.templatemo-content {
		overflow: hidden
	}

</style>
