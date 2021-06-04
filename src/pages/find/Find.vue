<template>
  <div id="find">
    <!--  导航栏  -->
    <nav-bar class="find-nav-bar">
      <template v-slot:left>
        <span class="iconfont icon-daohang"></span>
      </template>
      <template v-slot:content>
        <div class="input">
          <span>请输入内容</span>
        </div>
      </template>
      <template v-slot:right>
        <span class="iconfont icon-ziyuan"></span>
      </template>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <!--  轮播图  -->
      <swiper class="swiper" :banner="banner" />
      <!--      <cross-scroll class="cross-scroll" ref="crossScroll">-->
      <!--  圆形导航  -->
      <main-round-nav-bar class="round" :round-data="roundData" />
      <!--      </cross-scroll>-->
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        <li>32</li>
        <li>33</li>
        <li>34</li>
        <li>35</li>
        <li>36</li>
        <li>37</li>
        <li>38</li>
        <li>39</li>
        <li>40</li>
        <li>41</li>
        <li>42</li>
        <li>43</li>
        <li>44</li>
        <li>45</li>
        <li>46</li>
        <li>47</li>
        <li>48</li>
        <li>49</li>
        <li>50</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar'
import Swiper from 'components/common/Swiper'
import MainRoundNavBar from 'components/common/MainRoundNavBar'
import Scroll from 'components/common/scroll/Scroll'
// import CrossScroll from 'components/common/scroll/CrossScroll'
import { getFindData, roundNavBar } from 'network/find/find'

export default {
  name: 'Find',
  components: {
    NavBar,
    Swiper,
    MainRoundNavBar,
    Scroll,
    // CrossScroll,
  },
  data() {
    return {
      cursor: {},
      banner: [], // 轮播图数据
      roundData: [], // 圆形导航数据
    }
  },
  created() {
    this.getFindData()
    this.getRoundData()
  },
  methods: {
    // 获取首页数据
    async getFindData() {
      const res = await getFindData()
      console.log(res)
      this.banner = res.data.blocks[0].extInfo.banners
    },
    // 获取圆形导航数据
    async getRoundData() {
      const res = await roundNavBar()
      this.roundData = res.data
    },
  },
}
</script>

<style scoped lang="less">
#find {
  position: relative;
  height: 100vh;
  padding: 0 10px;
  background-color: #ede9e3;

  .find-nav-bar {
    margin-top: 5px;

    .icon-daohang {
      font-size: 20px;
      color: #000;
    }

    .input {
      position: relative;
      width: 280px;
      height: 30px;
      line-height: 30px;
      border-radius: 30px;
      border: none;
      background-color: #fcfcfc;

      &:before {
        content: '\e61d';
        position: absolute;
        top: 3px;
        left: 60px;
        font-family: iconfont;
        font-size: 18px;
        color: #000;
      }

      span {
        font-size: 16px;
        color: #cdcdcd;
      }
    }

    .icon-ziyuan {
      font-size: 20px;
      color: #000;
    }
  }

  .content {
    position: absolute;
    top: 45px;
    bottom: 45px;
    left: 0;
    right: 0;
    overflow: hidden;
    padding: 0 10px;

    .swiper {
      margin-top: 20px;
    }

    .round {
      margin-top: 20px;
    }

    .cross-scroll {
      width: 100%;
    }
  }
}
</style>
