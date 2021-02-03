<template>
		<div id="containerEchart"  >
		</div>
</template>

<script>
	import * as echarts from 'echarts';
	const echart = require('echarts')
	export default {
		props:{
			graphData:Object,
		},
		components: {
		},
		data() {
			return {
				myChart:null,
			}
		},
		created() {
			var _this = this
			this.$nextTick(() => {
				_this.graphInit()
			})
		},
		methods: {
			async graphInit(){
				var graph=this.graphData
				var  option = {
						title: {
				            text: 'Les Miserables',
				            subtext: 'Default layout',
				            top: 'bottom',
				            left: 'right'
				        },
						tooltip: {},
						legend: [{
							data: graph.categories.map(function (a) {
								return a.name;
							})
						}],
						series: [
							{
								name: 'Les Miserables',
								type: 'graph',
								layout: 'none',
								data: graph.nodes,
								links: graph.links,
								categories: graph.categories,
								roam: true,
								label: {
									show: true,
									position: 'right',
									formatter: '{b}'
								},
								labelLayout: {
									hideOverlap: true
								},
								scaleLimit: {
									min: 0.4,
									max: 2
								},
								lineStyle: {
									color: 'source',
									curveness: 0.3
								}
							}
						]
					};
				this.myChart=echarts.init(document.getElementById('containerEchart'))
				this.myChart.setOption(option);
				window.onresize = this.myChart.resize
			}
		}
	}
</script>

<style scoped="graph">
</style>
