<template>
  <div id="home">
      <nav-bar class="home-nav">
          <div slot="center">购物街</div>
      </nav-bar>
      <home-swiper class="swiper" :banner='banner'/>
      <recommend-view :recommend="recommend"/>
      <feature/>
      <tab-control class="tab-control" :titles="['流行','新款','精选']"/>
      <ul>
    <li>11</li>
    <li>21</li>
    <li>31</li>
    <li>41</li>
    <li>51</li>
    <li>61</li>
    <li>71</li>
    <li>81</li>
    <li>91</li>
    <li>101</li>
     <li>11</li>
    <li>21</li>
    <li>31</li>
    <li>41</li>
    <li>51</li>
    <li>61</li>
    <li>71</li>
    <li>81</li>
    <li>91</li>
    <li>101</li>
     <li>11</li>
    <li>21</li>
    <li>31</li>
    <li>41</li>
    <li>51</li>
    <li>61</li>
    <li>71</li>
    <li>81</li>
    <li>91</li>
    <li>101</li>
     <li>11</li>
    <li>21</li>
    <li>31</li>
    <li>41</li>
    <li>51</li>
    <li>61</li>
    <li>71</li>
    <li>81</li>
    <li>91</li>
    <li>101</li>
  </ul>
  </div>
</template>

<script>
import {getHomeMultidata} from 'network/home'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

import HomeSwiper from './homeContent/HomeSwiper'
import RecommendView from './homeContent/RecommendView'
import Feature from './homeContent/FeatureView'
export default {
  name:'Home',
  components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      Feature,
      TabControl
  },
  data(){
      return {
          banner:[],
          recommend:[]
      }
  },
  created(){
      //请求多个数据
      getHomeMultidata().then(res => {
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
      })
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
    }
</style>