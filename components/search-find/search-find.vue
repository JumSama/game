<template>
	<view class="search-find">
		<view class="find-header">
			<text style="">探索发现</text>
			<text style="font-size: 12rpx;color: #B9B9B9;">换一换</text>
		</view>
		<view class="find-list">
			<text v-for="item in list" :key="item" class="find-item">{{ item }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: Array
		}
	}
</script>

<style scoped>
	.find-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.find-list {
		margin: 20rpx 0;
	}
	
	.find-item {
		background-color: #F5F7F8;
		font-size: 24rpx;
		color: #3A3A3A;
		border-radius: 22rpx;
		display: inline-block;
		line-height: 44rpx;
		height: 44rpx;
		margin: 12rpx;
	}
</style>
