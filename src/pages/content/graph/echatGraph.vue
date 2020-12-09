<template>
	<div class="templatemo-content-container">
		<div id="container" >
		</div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	const echart = require('echarts')
	export default {
		components: {
		},
		data() {
			return {

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
				const response = await fetch(
					'https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json',
				);
				const graph = await response.json();
				console.log('graph',graph)
				var option = {
				        title: {
				            text: 'Les Miserables',
				            subtext: 'Default layout',
				            top: 'bottom',
				            left: 'right'
				        },
				        tooltip: {},
				        animationDuration: 1500,
				        animationEasingUpdate: 'quinticInOut',
	
				        series : [
				            {
				                name: 'blog',
				                type: 'graph',
				                layout: 'none',
				                data: graph.nodes,
				                links: graph.edges,
				                roam: true,
				                focusNodeAdjacency: true,
				                itemStyle: {
				                    borderColor: '#fff',
				                    borderWidth: 1,
				                    shadowBlur: 10,
				                    shadowColor: 'rgba(0, 0, 0, 0.3)'
				                },
				                label: {
				                    position: 'right',
				                    formatter: '{b}'
				                },
				                lineStyle: {
				                    color: 'source',
				                    curveness: 0.3
				                },
				                emphasis: {
				                    lineStyle: {
				                        width: 10
				                    }
				                }
				            }
				        ]
				    };
				var myChart=echarts.init(document.getElementById('container'))
				myChart.setOption(option);
				window.onresize = myChart.resize
			}
		}
	}
</script>

<style scoped="graph">
@import url("./graph.css");
</style>
