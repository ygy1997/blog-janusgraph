<template>
	<div class="templatemo-content-container">
		<div id="container" >
		</div>
	</div>
</template>

<script>
	import G6 from "@antv/g6";
	export default {
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
				graphData: {
					nodes: [{
							id: "node1",
							label: "Circle1",
							x: 150,
							y: 150
						},
						{
							id: "node2",
							label: "Circle2",
							x: 400,
							y: 150
						}
					],
					edges: [{
						source: "node1",
						target: "node2"
					}]
				}
			}
		},
		created() {
			var _this = this
			this.$nextTick(() => {
				_this.graphInit()
			})
		},
		methods: {
			async graphInit() {
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
					container: "container",
					// fitView: true,
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
				const response = await fetch(
					'https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json',
				);
				const remoteData = await response.json();
				
				this.graph.data(remoteData);
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
@import url("./graph.css");
</style>