<template>
	<view class="find-page">
		<search-input :displayItem="displayGame"></search-input>
		<category></category>
		<slide-card></slide-card>
		<slide-card></slide-card>
		<slide-card></slide-card>
	</view>
</template>

<script>
	export default {
		setup() {
			const displayGame = ['风暴Ⅲ', '雾霾下的空城', '冰与火之歌', '行动1883']
			
			return {
				displayGame
			}
		}
	}
</script>

<style scoped>
	.find-page {
		margin: 0 20rpx;
	}
</style>
