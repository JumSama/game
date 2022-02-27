<template>
	<view class="search-hot">
		<view class="title">
			<image src="../../static/img/search/resou.png" style="width: 16rpx;height: 16rpx;vertical-align: middle; margin-right: 8rpx;" mode=""></image>
			<text style="vertical-align: middle;">热搜</text>
		</view>
		<view class="hot-list">
			<view v-for="(item, index) in leaderboard" :key="index" class="hot-item">
				<text class="item-index">{{index + 1 }}</text>
				<text class="item-title">{{ item }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			leaderboard: Array
		}
	}
</script>

<style scoped>
	.search-hot {
		border: 1rpx solid #A5A5A5;
		border-radius: 16rpx;
		padding: 20rpx;
		background: linear-gradient(to bottom, rgba(21, 197, 206, 0.4), white 10%);
	}
	
	.title {
		font-size: 24rpx;
		padding-bottom: 24rpx;
		font-weight: bold;
	}
	
	.hot-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	
	.hot-item {
		width: 40vw;
		margin: 20rpx 0rpx;
		/* text-align: center; */
	}
	
	.item-index {
		font-weight: bold;
		font-size: 24rpx;
		color: rgba(138, 195, 255, 0.5);
	}
	
	.item-title {
		margin-left: 10rpx;
		font-size: 24rpx;
	}
</style>
