<template>
		<div id="containerAnt" >
		</div>
</template>

<script>
	import G6 from "@antv/g6";
	export default {
		props:{
			graphData:Object,
		},
		components: {

		},
		data() {
			return {
				layoutName:{
					"random":"随机布局",
					"force":"经典力导向布局",
					"comboForce":"combo力导向布局",
					"circular":"环形布局",
					"radial":"辐射状布局",
					"mds":"高维数据降维算法布局",
					"fruchterman":"Fruchterman 布局",
					"grid":"网格布局",
				},
				layoutType: "random",
				antGraph: "",
			}
		},
		created() {
			var _this = this
			this.$nextTick(() => {
				_this.graphInit()
			})
		},
		methods: {
			graphInit() {
				const menu = new G6.Menu();
				const tooltip = new G6.Tooltip();
				this.graph = new G6.Graph({
					modes: {
						default: [{
								type: 'drag-canvas',
								direction: 'both',
							},
							{
								type: 'zoom-canvas',
							},
							{
								type: 'drag-node',
							},
							{
								type: 'click-select',
							},

						],
					},
					container: "containerAnt",
					fitView: true,
					// fitViewPadding: 20,
					// fitCenter: true,
					width: 760,
					height: 620,
					animate: true,
					layout: {
						type: this.layoutType,

						linkDistance: 50, // 可选，边长
						nodeStrength: 30, // 可选
						edgeStrength: 0.1, // 可选
						nodeSize: 12
					},
					defaultNode: {
						shape: "circle",
						size: [12],
						color: "#5B8FF9",
						style: {
							fill: "#9EC9FF",
							lineWidth: 3
						},
						labelCfg: {
							style: {
								fill: "#fff",
								fontSize: 10
							}
						}
					},
					defaultEdge: {
						style: {
							stroke: "#e2e2e2"
						}
					},
					plugins: [menu,tooltip],
				});
				this.graph.data(this.graphData);
				this.graph.render();
			},
			handleClick() {
				this.graph.render();
				this.graph.zoom(2, { x: 750, y: 750 });
				
			},
			handleCommand(command) {
				this.layoutType = command
				this.graph.updateLayout(this.layoutType); // 参数为 String 代表布局名称
				this.graph.zoom(2, { x: 750, y: 750 });

			}
		}
	}
</script>


<style scoped="graph">
</style>