<template>
	<div class="templatemo-content-container">
		<div id="container" >
		</div>
	</div>
</template>

<script>
	const Viva = require('vivagraphjs');
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
			async graphInit() {
				var graph = Viva.Graph.graph();

				// Construct the graph
				graph.addNode('anvaka', {
					url: 'https://secure.gravatar.com/avatar/91bad8ceeec43ae303790f8fe238164b'
				});
				graph.addNode('manunt', {
					url: 'https://secure.gravatar.com/avatar/c81bfc2cf23958504617dd4fada3afa8'
				});
				graph.addNode('thlorenz', {
					url: 'https://secure.gravatar.com/avatar/1c9054d6242bffd5fd25ec652a2b79cc'
				});
				graph.addNode('bling', {
					url: 'https://secure.gravatar.com/avatar/24a5b6e62e9a486743a71e0a0a4f71af'
				});
				graph.addNode('diyan', {
					url: 'https://secure.gravatar.com/avatar/01bce7702975191fdc402565bd1045a8?'
				});
				graph.addNode('pocheptsov', {
					url: 'https://secure.gravatar.com/avatar/13da974fc9716b42f5d62e3c8056c718'
				});
				graph.addNode('dimapasko', {
					url: 'https://secure.gravatar.com/avatar/8e587a4232502a9f1ca14e2810e3c3dd'
				});

				graph.addLink('anvaka', 'manunt');
				graph.addLink('anvaka', 'thlorenz');
				graph.addLink('anvaka', 'bling');
				graph.addLink('anvaka', 'diyan');
				graph.addLink('anvaka', 'pocheptsov');
				graph.addLink('anvaka', 'dimapasko');

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
				    container: document.getElementById('container'),
					graphics: graphics
				});
				renderer.run();
			}
		}
	}
</script>

<style scoped="graph">
@import url("./graph.css");
</style>
