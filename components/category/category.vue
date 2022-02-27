<template>
	<view class="category">
		<view class="category-item" v-for="item in categories" :key="item.name">
			<image :src="item.url" style="width: 48px;height: 48px;"></image>
			<text>{{ item.name }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		setup() {
			const categories = [{
				name: '战斗',
				url: '../../static/img/find/zhandou.png'
			}, {
				name: '策略',
				url: '../../static/img/find/celue.png'
			}, {
				name: '冒险',
				url: '../../static/img/find/maoxian.png'
			}, {
				name: '休闲',
				url: '../../static/img/find/xiuxian.png'
			}, {
				name: '单机',
				url: '../../static/img/find/danji.png'
			}, {
				name: '模拟经营',
				url: '../../static/img/find/jingying.png'
			}, {
				name: '多人',
				url: '../../static/img/find/duoren.png'
			}, {
				name: '角色扮演',
				url: '../../static/img/find/banyan.png'
			}, {
				name: '剧情',
				url: '../../static/img/find/juqing.png'
			}, {
				name: '更多',
				url: '../../static/img/find/more.png'
			}]
			return {
				categories
			}
		}
	}
</script>

<style scoped>
	.category {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.category-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 20%;
		margin-top: 20rpx;
	}
</style>
