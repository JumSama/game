<template>
	<view class="mine">
		<view class="mine-status" v-if="isLogin">
			<image class="mine-avator" style="border-radius: 50%;" :src="user.avatarUrl" mode=""></image>
			<text>你好，{{ user.nickName }}</text>
		</view>
		
		<view class="mine-status" v-else>
			<image class="mine-avator" src="../../static/img/mine/beforeLogin.png" mode=""></image>
			<view class="mine-login" @click="login">
				点击登录
			</view>
		</view>
		
		<view class="mine-list">
			<view class="mine-item">我的收藏</view>
			<view class="mine-item">我的心愿</view>
			<view class="mine-item" @click="checkLogout">退出登录</view>
		</view>
	</view>
</template>

<script>
	import { user, isLogin, logout, login } from '../../utils/auth.js'
	export default {
		setup() {
			const checkLogout = async () => {
				const { confirm } = await uni.showModal({content: '您确认要退出账户吗？',})
				if (confirm) logout();
			}
			return {
				user,
				isLogin,
				logout,
				checkLogout,
				login
			}
		}
	}
</script>

<style scoped>
	.mine-status {
		height: 200rpx;
		background-color: #f4f5f2;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	
	.mine-avator {
		width: 120rpx;
		height: 120rpx;
	}
	
	.mine-login {
		width: 200rpx;
		height: 66rpx;
		background-color: #00ffff;
		border-radius: 10rpx;
		text-align: center;
		line-height: 66rpx;
		color: #4c4c4c;
	}
	
	.mine-list {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.mine-item {
		height: 120rpx;
		line-height: 120rpx;
		border-bottom: 1px solid #DCDCDC;
		padding-left: 25rpx;
	}
	
</style>
