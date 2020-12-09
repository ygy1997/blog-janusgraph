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
	      <li><a href="#" class="active"><i class="fa fa-home fa-fw"></i>主页 Viasul Core</a></li>
		  <li><a href="data-visualization.html"><i class="fa fa-pencil fa-fw"></i> 博客  Blog</a></li>
	      <li><a href="data-visualization.html"><i class="fa fa-book fa-fw"></i>词汇  English Vocabulary</a></li>
		  <li><a href="data-visualization.html"><i class="fa fa-users fa-fw"></i>社交网络 Social Net</a></li>
		  <li><a href="data-visualization.html"><i class="fa fa-users fa-fw"></i>影评 Movie Reviews</a></li>
		  <li><a href="login.html"><i class="fa fa-eject fa-fw"></i>Contact Me</a></li>
		  
<!-- 	      <li><a href="maps.html"><i class="fa fa-map-marker fa-fw"></i>地理信息</a></li>
	      <li><a href="manage-users.html"><i class="fa fa-users fa-fw"></i>社交网络</a></li>
	      <li><a href="preferences.html"><i class="fa fa-sliders fa-fw"></i>配置</a></li>
	      <li><a href="login.html"><i class="fa fa-eject fa-fw"></i>Contact Me</a></li> -->
	    </ul>  
	  </nav>
	</div>
	
</template>

<script>
	export default{
		components:{
			
		},
		data(){
			return{
				
			}
		},
		created() {
			
		}
	}
</script>

<style>

</style>
