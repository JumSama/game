<template>
	<view class="card">
		<image slot='cover' style="width: 100%; height: 400rpx;" :src="imgurl" mode="scaleToFill"></image>
		<view class="card-footer">
			<view class="game-name"><text selectable="false">{{ cardTitle }}</text></view>
			<view class="game-intro">{{ cardIntro }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			imgurl: String,
			cardTitle: String,
			cardIntro: String,
		}
	}
</script>

<style scoped>
	.card {
		border-radius: 16rpx;
		border: 1px solid #D8D8D8;
		margin: 20rpx;
		box-shadow: 0 20px 20px 0 rgb(0 0 0 / 10%);
	}
	
	.card image {
		border-radius: 16rpx;
	}
	
	.card-footer {
		padding: 10rpx 20rpx 20rpx 20rpx;
		letter-spacing: 1rpx;
	}
	.game-name {
		font-size: 1rem;
	}
	.game-intro {
		font-size: 0.5rem;
		color: #368C92;
		padding-top: 10rpx;
	}
</style>
