<template>
	<view>
		<search-input
		:displayItem="displayGame"
		@toMine="judgeLogin"
		:loginAvator="loginAvator"
		>
		</search-input>
		<mix-swiper :imgsUrl="imgUrlList"></mix-swiper>
		<view class="card">
			<mix-card
			v-for="item in imgUrlList"
			:key="item.id" :cardIntro="item.intro"
			:cardTitle="item.title"
			:imgurl="item.url"
			>
			</mix-card>
		</view>	
	</view>
</template>

<script>
	import { imgUrlList, displayGame } from '../../fakeDate/data.js'
	import { isLogin, getUserInfo, user } from '../../utils/auth.js'
	import { computed, ref } from 'vue'
	export default {
		setup() {
			let loginAvator = computed(() => user.value.avatarUrl)
			
			const judgeLogin = () => {
				if (isLogin.value) {
					uni.switchTab({
					    url: '/pages/mine/index'
					});
				} else {
					getUserInfo()
				}
			}

			return {
				imgUrlList,
				displayGame,
				judgeLogin,
				user,
				loginAvator
			}
		}
	}
</script>

<style scoped>
	.category-title {
		margin: 10rpx 0;
	}

</style>
