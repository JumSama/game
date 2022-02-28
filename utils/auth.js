import { ref, computed } from 'vue'

export let user = ref(uni.getStorageSync('_g') && JSON.parse(uni.getStorageSync('_g')) || {})

export let isLogin = ref(!!uni.getStorageSync('_g'))

export const login = () => {
	// 相关逻辑待补充
	getUserInfo()
}

export const getUserInfo = function(e) {
	uni.getUserProfile({
		desc: '获取用户名',
		success: ({ userInfo }) =>{
			user.value = userInfo
			isLogin.value = true
			uni.setStorageSync('_g', JSON.stringify(userInfo))
		},
		fail: (err) => {
			console.log(err)
		}
	})
}

export const logout = function(){
	uni.clearStorageSync('_g')
	user.value = {}
	isLogin.value = false
}