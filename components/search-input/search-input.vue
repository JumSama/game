<template>
	<view class="search" style="position: sticky;z-index: 999;top: 0;" v-if="fake">
		<view class="search-bar">
			<navigator url="/pages/search/index">
				<text class="iconfont icon-sousuo" style="padding-left: 30rpx;"></text>
				<template v-if="displayItem">
					<view class="animate__animated animate__fadeInDown display-text" v-for="(value, key) in displayItem" :key="key" v-show="key===nowDisplayIdx">{{ value }}</view>
				</template>
			</navigator>
		</view>
		<view class="avator" @click="handleToMine">
			<image v-if="loginAvator" :src="loginAvator" style="width: 60rpx; height: 60rpx; border-radius: 30rpx;" mode="aspectFill"></image>
			<text v-else class="iconfont icon-wode" style="font-size: 44rpx;"></text>
		</view>
	</view>
	
	<view class="search-true"  v-else>
		<view class="search-input">
			<input class="input" type="text" value="" :placeholder="hotItem"/>
		</view>
		<text class="iconfont icon-sousuo search-btn">搜索</text>
	</view>
	
</template>

<script>
	import { ref, onMounted, onBeforeUnmount } from 'vue'
	export default {
		props: {
			displayItem: Array,
			fake :{
				type: Boolean,
				default: true
			},
			hotItem: {
				type: String,
				default: ''
			},
			loginAvator: ''
		},
		emits: ['toMine'],
		setup(props, context) {
			// 踩坑：text标签不能使用动画因为他会内嵌一个span标签
			// 1.搜索框推荐功能
			let nowDisplayIdx = props.displayItem && openDisplay(props)		
			
			let handleToMine = () => {
				context.emit('toMine')
			}
			
			return {
				nowDisplayIdx,
				handleToMine
			}
		}
	}
	
	// 搜索推荐
	function openDisplay(props) {
		let nowDisplayIdx = ref(0)
		let displayItemLength = props.displayItem.length
		let interval = setInterval(() => {
			nowDisplayIdx.value = (nowDisplayIdx.value + 1) % displayItemLength
		}, 3000)
		onBeforeUnmount(() => {
			clearInterval(interval)
		})
		return nowDisplayIdx
	}
</script>

<style scoped>
	/* fake */
	.search {
		display: flex;
		padding: 16rpx;
		justify-content: space-around;
		align-items: center;
		background-color: white;
	}
	.search-bar {
		line-height: 66rpx;
		height: 66rpx;
		background-color: #f5f7f8;
		border-radius: 22px;
		flex: 1;
		position: relative;
	}
	
	.avator {
		margin-left: 16rpx;
	}
	
	.display-text {
		position: absolute;
		top: 0;
		left: 80rpx;
		color: #C0C0C0;
	}
	
	/* true */
	.search-true {
		display: flex;
		align-items: center;
		background-color: #F8F8F8;
		padding: 16rpx;
		justify-content: space-around;
	}
	
	.search-input {
		line-height: 66rpx;
		height: 66rpx;
		background-color: white;
		border-radius: 33rpx;
		width: 70%;
		display: flex;
		align-items: center;
	}
	
	.search-btn {
		background-color: #15C5CE;
		height: 56rpx;
		width: 120rpx;
		line-height: 56rpx;
		text-align: center;
		border-radius: 33rpx;
		font-size: 32rpx;
		color: white;
	}
	
	.input {
		padding-left: 20rpx;
	}
	
</style>
