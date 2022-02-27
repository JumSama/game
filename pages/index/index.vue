<template>
	<view>
		<search-input :displayItem="displayGame"></search-input>
		<mix-swiper :imgsUrl="imgUrlList"></mix-swiper>
		<view class="card">
			<mix-card v-for="item in imgUrlList" :key="item.id" :cardIntro="item.intro" :cardTitle="item.title" :imgurl="item.url"></mix-card>
		</view>	
	</view>
</template>

<script>
	export default {
		setup() {
			const imgUrlList = [{
				id: 1,
				url: '../../static/img/swiper/1.jpeg',
				title: '风暴Ⅲ',
				intro: 'Lorem ipsum dolor sit amet.'
			}, {
				id: 2,
				url: '../../static/img/swiper/2.jpeg',
				title: '雾霾下的空城',
				intro: 'Lorem ipsum dolor sit amet.'
			}, {
				id: 3,
				url: '../../static/img/swiper/3.jpeg',
				title: '冰与火之歌',
				intro: 'Lorem ipsum dolor sit amet.'
			}, {
				id: 4,
				url: '../../static/img/swiper/4.jpeg',
				title: '行动1883',
				intro: 'Lorem ipsum dolor sit amet.'
			}]
			const displayGame = ['风暴Ⅲ', '雾霾下的空城', '冰与火之歌', '行动1883']
			return {
				imgUrlList,
				displayGame
			}
		}
	}
</script>

<style scoped>
	.category-title {
		margin: 10rpx 0;
	}

</style>
