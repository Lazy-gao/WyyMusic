<template>
  <div class="calendar-content-info">
    <div class="music-calendar">
      <div class="header-left">
        <span>{{ musicCalendar.title }}</span>
      </div>
      <div class="header-right">
        <div class="desc">
          <span>{{ musicCalendar.text }}</span>
          <span class="iconfont" :class="sign"></span>
        </div>
      </div>
    </div>
    <div
      class="calendar-content"
      v-for="(item, index) in musicCalendar.creatives"
      :key="index"
    >
      <div class="calendar-left">
        <span class="time">{{
          item.resources[0].resourceExtInfo.endTime | FormatTime
        }}</span>
        <span class="content-info">{{
          item.resources[0].uiElement.mainTitle.title
        }}</span>
      </div>
      <div class="calendar-right">
        <img
          :src="item.resources[0].uiElement.image.imageUrl"
          alt=""
          @load="imageLoad"
        />
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'MusicCalendar',
  props: {
    musicCalendar: {
      type: Object,
      default() {
        return {}
      }
    },
    sign: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('imageLoad')
    }
  },
  filters: {
    FormatTime(value) {
      return moment().calendar(value, {
        sameDay: '[今天]',
        nextDay: '[明天]',
        lastDay: '[昨天]',
        sameElse: 'DD/MM/YYYY'
      })
    }
  }
}
</script>

<style scoped lang="less">
.calendar-content-info {
  .music-calendar {
    display: flex;
    justify-content: space-between;
    height: 45px;
    line-height: 45px;

    .header-left {
      font-size: 18px;
      font-weight: 600;
    }

    .header-right {
      position: relative;
      padding-right: 10px;
      font-size: 12px;

      .desc {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 61px;
        height: 18px;
        padding: 0 10px;
        line-height: 18px;
        border-radius: 25px;
        text-align: center;
        border: 1px solid #e4e4e4;
        font-size: 14px;
        color: #919191;

        .iconfont {
          position: absolute;
          top: 0;
        }
      }
    }
  }

  .calendar-content {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    border-bottom: 1px solid #e4e4e4;

    &:last-child .calendar-content {
      border-bottom: none;
    }

    .calendar-left {
      display: flex;
      width: 275px;
      flex-direction: column;

      .time {
        font-size: 14px;
        margin-bottom: 10px;
        color: #919191;
      }

      .content-info {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 18px;
      }
    }

    .calendar-right {
      width: 51px;
      height: 51px;

      img {
        width: 51px;
        height: 51px;
        border-radius: 8px;
      }
    }
  }
}
</style>
