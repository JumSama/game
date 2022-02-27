<template>
	<view class="">
		<search-input :fake="false" hotItem="最勇敢的你 2月22日上线"></search-input>
		<view class="search-body">
			<search-find :list="findList"></search-find>
			<search-hot :leaderboard="gameRank"></search-hot>
		</view>
	</view>
</template>

<script>
	import { ref } from 'vue'
	export default {
		setup() {
			const gameRank = ref(null)
			gameRank.value = ['古墓丽影', 'qq飞车', 'qq三国', '星谷物语', '绝地求生', '原神', '王者荣耀', '光遇', '明日方舟', '奥比岛',
			'和平精英', '看门狗', '泰拉瑞亚', '我的世界', '第五人格', '神仙道', 'Phigros', '牛魔王', '西游记', '三国演义']
			const findList = ref(null)
			findList.value = ['古墓丽影', '绝地求生', 'Phigros',  '看门狗', '第五人格', '和平精英', '星谷物语', '原神', '王者荣耀']
			
			return {
				gameRank,
				findList
			}
		}
	}
</script>

<style>
	.search-body {
		margin: 20rpx;
	}
</style>
