<template>
	<view>
		<swiper class="swiper" :style="{height: swiperHeight}" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(img,index) in imgsUrl" :key="img.id" class="swiper-item">
				<image :src="img.url" mode="aspectFill" style="width: 100%;height: 100%;"></image>
				<view class="introduction">
					<text selectable="false">{{ img.intro }}</text>
					
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import { ref } from 'vue' 
export default {
	props: {
		imgsUrl: Array,
		duration: {
			type: Number,
			default: 1000
		},
		interval: {
			type: Number,
			default: 3000
		},
		autoplay: {
			type: Boolean,
			default: true
		},
		indicatorDots: {
			type: Boolean,
			default: false
		},
		swiperHeight: {
			type: String,
			default: '360rpx'
		}
	}
}
</script>

<style scoped>
	.swiper {
		position: relative;
	}
	.swiper::after {
		content: '新游尝鲜';
		position: absolute;
		top: 0;
		font-size: 0.8rem;
		text-align: center;
		color: #FFFFFF;
		width: 100%;
		background-image: linear-gradient(to top, rgba(255,255,255,0), rgba(0,0,0,1));
	}
	.swiper-item {
		position: relative;
		z-index: -1;
	}
	.introduction {
		z-index: 999;
		color: #FFFFFF;
		position: absolute;
		bottom: 0;
		width: 100%;
		background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(0,0,0,1));
		padding: 10rpx;
	}
</style>