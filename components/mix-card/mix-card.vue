<template>
	<view style="overflow: hidden;">
		<scroll-view scroll-y="true" >
			<view class="card" v-for="game in gameInfoList" :key="game.id">
			    <image slot='cover' style="width: 100%; height: 400rpx;" :src="game.url" mode="scaleToFill"></image>
			    <view class="card-footer">
					<view class="game-name"><text selectable="false">{{ game.title }}</text></view>
					<view class="game-intro">{{ game.intro }}</view>
			    </view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			gameInfoList: Array
		}
	}
</script>

<style>
	.card {
		border-radius: 16rpx;
		border: 1px solid #D8D8D8;
		margin: 20rpx;
		overflow: hidden;
		box-shadow: 0 20px 20px 0 rgb(0 0 0 / 10%);
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
