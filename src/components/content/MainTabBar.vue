<template>
  <tab-bar>
    <tab-bar-item link="/find">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/find.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/find-active.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>发现</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/podcast">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/podcast.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/podcast-active.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>播客</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/profile.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/profile-active.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/kMusic">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/kMusic.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/kMusic-active.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>K歌</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/cloudVillage">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/CloudVillage.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/CloudVillage-active.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>云村</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped lang="less"></style>
