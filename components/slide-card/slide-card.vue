<template>
	<view class="slide-bar">
		<view class="slide-title">
			<text>每日新发现</text>
			<text>></text>
		</view>
		<view class="slide-card">
			<view class="card-item" v-for="item in 10">
				<image src="../../static/logo.png" style="width: 160rpx; height: 160rpx;" mode=""></image>
				<text>123</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: String,
			list: {
				type: Array,
				default: []
			}
		},
		setup() {
			
		}
	}
</script>

<style scoped>
	.slide-bar {
		margin: 60rpx 0;
	}
	.slide-card {
		display: flex;
		overflow-x: scroll;
		gap: 25rpx
	}
	
	.slide-title {
		margin: 20rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.slide-card::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: transparent;
	}
	
	.card-item {
		text-align: center;
		width: 20vw;
	}
</style>
