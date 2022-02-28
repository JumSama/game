<template>
	<view class="slide-bar">
		<view class="slide-title">
			<text>{{ title }}</text>
			<text class="iconfont icon-youjiantou" style="color: #A5A5A5;"></text>
		</view>
		
		<view class="slide-avator" v-if="mode === 'AVATOR'">
			<view class="avator-item" v-for="(item, index) in dataList" :key="index">
				<image :src="item.imgurl" style="width: 160rpx; height: 160rpx; border-radius:16rpx;" mode=""></image>
				<text>{{ `游戏${index}` }}</text>
			</view>
		</view>
		
		<view class="slide-card" v-else-if="mode === 'CARD'">
			<view class="card-item" v-for="item in dataList" :key="item.id">
				<image :src="item.url" mode="" style="width: 600rpx;height:60%;border-radius: 16rpx 16rpx 0 0;"></image>
				<view class="card-body" style="height: 40%; width: 598rpx; ">
					<view class="card-intro">
						{{ item.intro }}
					</view>
					<view class="card-title">{{ item.title }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: String,
			dataList: Array,
			mode: {
				type: String,
				default: 'AVATOR'
			}
		},
		setup() {
			
		}
	}
</script>

<style scoped>
	.slide-bar {
		margin: 30rpx 0;
	}
	.slide-avator {
		display: flex;
		overflow-x: scroll;
		gap: 25rpx;
	}
	
	.slide-avator::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: transparent;
	}
	
	.slide-title {
		margin: 20rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.avator-item {
		text-align: center;
	}
	
	/* .avator-item:nth-child(n+2) {
		margin-left: 25rpx;
	} */
	/* CARD mode */
	
	.slide-card {
		overflow-x: scroll;
		display: flex;
		flex-direction: row;
		height: 550rpx;
		gap:25rpx;
	}
	
	.card-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 16rpx;
		background-color: rgb(245, 247, 248);
	}
	
	.card-body {
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1rpx solid #D8D8D8;
		border-radius: 0 0 16rpx 16rpx;
	}
	
	/* .card-item:nth-child(n+2) {
		margin-left: 25rpx;
	}
	 */
	/* .card-item image {
		border-radius: 16rpx 16rpx 0 0;
	} */
	
	.card-intro {
		color: #868C92;
		font-size: 24rpx;
		margin: 10rpx;
		overflow-x: hidden;
		overflow-y: hidden;
		text-overflow: ellipsis;
		overflow-wrap: break-;
		display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 4; /** 显示的行数 **/
	}
	
	.card-line {
		border-bottom: 1rpx solid #C7C7C7;
		width: 50rpx;
		margin: 0 20rpx;
	}
	
	.card-footer {
		display: flex;
		color: #C7C7C7;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	
	.card-title {
		font-size: 24rpx;
		text-align: center;
	}

	.slide-card::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: transparent;
	}
</style>
