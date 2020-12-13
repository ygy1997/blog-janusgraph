<template>
	<div class="templatemo-sidebar">
	  <header class="templatemo-site-header">
	    <div class="square"></div>
	    <h1>Visual Core</h1>
	  </header>
	  <div class="profile-photo-container">
	    <img src="../static/images/profile-photo.jpg" alt="Profile Photo" class="img-responsive">  
	    <div class="profile-photo-overlay"></div>
	  </div>      
	  <!-- Search box -->
	  <form class="templatemo-search-form" role="search">
	    <div class="input-group">
	        <button type="submit" class="fa fa-search"></button>
	        <input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term">           
	    </div>
	  </form>
	  <div class="mobile-menu-icon">
	      <i class="fa fa-bars"></i>
	  </div>
	  <nav class="templatemo-left-nav">          
	    <ul>
		  <router-link id="home" to="/home"><i class="fa fa-home fa-fw"></i>主页 Viasul Core</router-link>
		  <router-link id="blog" to="/blog"><i class="fa fa-pencil fa-fw"></i> 博客  Blog</router-link>
	      <router-link id="blog" to="/blog"><i class="fa fa-book fa-fw"></i>词汇  English Vocabulary</router-link>
		  <router-link id="blog" to="/blog"><i class="fa fa-users fa-fw"></i>社交网络 Social Net</router-link>
		  <router-link id="blog" to="/blog"><i class="fa fa-users fa-fw"></i>影评 Movie Reviews</router-link>
		  <router-link id="blog" to="/blog"><i class="fa fa-eject fa-fw"></i>Contact Me</router-link>
	    </ul>  
	  </nav>
	</div>
	
</template>

<script>
	export default{
		props:{
		},
		components:{
			
		},
		data(){
			return{
				
			}
		},
		created() {
			
		},
		methods:{
			
		}
	}
</script>

<style>

</style>
