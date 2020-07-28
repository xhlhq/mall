<template>
  <div id="home">
      <nav-bar class="home-nav">
          <div slot="center">购物街</div>
      </nav-bar>
      <home-swiper class="swiper" :banner='banner'/>
      <recommend-view :recommend="recommend"/>
      <feature/>
      <tab-control class="tab-control" :titles="['流行','新款','精选']"/>
      <goods-list :goods="goods['pop'].list">
      </goods-list>
    
  </div>
</template>

<script>
import {getHomeMultidata,getHomeGoods} from 'network/home'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import GoodsListItem from 'components/content/goods/GoodsListItem'

import HomeSwiper from './homeContent/HomeSwiper'
import RecommendView from './homeContent/RecommendView'
import Feature from './homeContent/FeatureView'

const fs =require('fs');
export default {
  name:'Home',
  components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      Feature,
      TabControl,
      GoodsList,
      GoodsListItem
  },
  data(){
      return {
          banner:[],
          recommend:[],
          goods:{
              'pop':{page:0,list:[]},
              'new':{page:0,list:[]},
              'sell':{page:0,list:[]}
          }
      }
  },
  created(){
      //请求多个数据
      this.getMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
  },
  methods:{
      getMultidata(){
          getHomeMultidata().then(res => {
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
      })
      },
      getHomeGoods(type){
          const page = this.goods[type].page + 1;
          getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          //console.log(res);
        })
      }
  }
}
</script>

<style>
     #home {
         padding-top: 44px;
     }
    .home-nav {
        background-color: var(--color-tint);
        color: #fff;
        font-weight: 600;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 999;
    }
    .tab-control {
        position: sticky;
        top: 44px;
        background-color: #fff;
        z-index: 9;
    }
</style>