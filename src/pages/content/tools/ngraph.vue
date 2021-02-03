<template>
		<div id="containerNgraph"  >
		</div>
</template>

<script>
	const Viva = require('vivagraphjs');
	export default {
		props:{
			graphData:Object
		},
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
			async graphInit() {
				var graph = Viva.Graph.graph();
				this.graphData.nodes.forEach(node=>{
					graph.addNode(node.id)
				})
				this.graphData.edges.forEach(edge=>{
					graph.addLink(edge.source,edge.target)
				})
				// Set custom nodes appearance
				var graphics = Viva.Graph.View.webglGraphics();
				console.log(Viva.Graph.View)
				
				var layout = Viva.Graph.Layout.forceDirected(graph, {
					springLength : 10,
					springCoeff : 0.0005,
					dragCoeff : 0.02,
					gravity : -1.2
				});

				var renderer = Viva.Graph.View.renderer(graph, {
					layout : layout,
				    container: document.getElementById('containerNgraph'),
					graphics: graphics
				});
				renderer.run();
			}
		}
	}
</script>

<style scoped="graph">
</style>
