<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	/* 导入字体图标icon-font */
	@import '@/static/icon-font/icon-font.css';
	/* 导入animate.css */
	@import '@/static/animate/animate.css';
	// 设置整个项目的背景色
	page {
		background-color: #ffffff;
		// font-size: 12px;
		padding-bottom: var(--window-bottom);
	}
	
	/* #endif */
</style>
