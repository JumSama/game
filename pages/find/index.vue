<template>
	<view class="find-page">
		<search-input :displayItem="displayGame"></search-input>
		<category></category>
		<slide-card title="每日发现" :dataList="dailyFind" mode="AVATOR"></slide-card>
		<slide-card title="安利墙" :dataList="imgUrlList" mode="CARD"></slide-card>
		<slide-card title="最近更新" :dataList="recentUpdate" mode="AVATOR"></slide-card>
	</view>
</template>

<script>
	import { ref, onMounted } from 'vue'
	export default {
		setup() {
			const displayGame = ['风暴Ⅲ', '雾霾下的空城', '冰与火之歌', '行动1883']
			const imgUrlList = [{
				id: 1,
				url: '../../static/img/swiper/1.jpeg',
				title: '风暴Ⅲ',
				intro: '奥杜因之牙上的缕缕龙威，能让携带者起死回生的不死鸟之羽，暮光之城的那对恋人，狂暴之力的北欧战斧，打穿一切地形的石佛反坦克，归于经典的土制ZD，代表永恒的真爱玫瑰，膝盖中箭的西盖重剑，还有妮可教官的悉心指导……'
			}, {
				id: 2,
				url: '../../static/img/swiper/2.jpeg',
				title: '雾霾下的空城',
				intro: '玩了一段时间通关了，在后面几重天获得了个法宝，获得五千金币可以获得初级宝箱~超级宝箱，这个是真的太离谱了，一天没上线一看，几百个初级宝箱，几百个中级宝箱，五六十个高级宝箱，再加上背包最多四页，处理起来又是真的太麻烦了，'
			}, {
				id: 3,
				url: '../../static/img/swiper/3.jpeg',
				title: '冰与火之歌',
				intro: '这个游戏玩了有三天了，刚开始入坑是因为听说游戏福利很好，可以抽很多次，进入游戏后发现确实还不错。不知道为什么，感觉里面的人物都很可爱，现在人物集了大半了，希望早日有一天可以集齐所有人物！'
			}, {
				id: 4,
				url: '../../static/img/swiper/4.jpeg',
				title: '行动1883',
				intro: '这个游戏玩了有三天了，刚开始入坑是因为听说游戏福利很好，可以抽很多次，进入游戏后发现确实还不错。不知道为什么，感觉里面的人物都很可爱，现在人物集了大半了，希望早日有一天可以集齐所有人物！'
			}, {
				id: 5,
				url: '../../static/img/swiper/4.jpeg',
				title: '行动1883',
				intro: '进入游戏后发现确实还不错。不知道为什么，感觉里面的人物都很可爱，现在人物集了大半了，希望早日有一天可以集齐所有人物！'
			}]
			
			
			const dailyFind = ref([])
			const recentUpdate = ref([])
			
			onMounted(async () => {
				const dailyFindRes = await getDailyFindAvator(6, '动漫女')
				dailyFind.value = dailyFindRes
				const recentRes = await getDailyFindAvator(6, '动漫男')
				recentUpdate.value = recentRes
			})
			
			return {
				displayGame,
				dailyFind,
				imgUrlList,
				recentUpdate
			}
		}
	}
	
	async function getDailyFindAvator(n, sort) {
		let dailyFind = []
		for(let i = 0; i < n; i++) {
			dailyFind.push(Promise.resolve(uni.request({url: `https://api.uomg.com/api/rand.avatar?sort=${sort}&format=json`})))
		}
		const res = await Promise.all(dailyFind)
		dailyFind = res.map((value, index) => {
			return value.data
		})
		return dailyFind
	}
</script>

<style scoped>
	.find-page {
		margin: 0 20rpx;
	}
</style>
