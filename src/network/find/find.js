/**
 * @Author : Lazy
 * @Date : 2021/6/3
 */

import { request } from '../request'

/**
 * 调用此接口 , 可获取APP首页信息
 * 获取banner、推荐歌单、随机歌单、精选音乐视频
 * @returns {*}
 */
export function getFindData(cursor) {
  return request({
    url: '/homepage/block/page',
    params: {
      cursor
    }
  })
}

/**
 * 调用此接口 , 可获取APP首页圆形图标入口列表
 * @returns {AxiosPromise}
 */
export function roundNavBar() {
  return request({
    url: '/homepage/dragon/ball'
  })
}

/**
 * 首页推荐歌单数据整合
 */
export class RecommendSongListData {
  constructor(creatives, uiElement) {
    this.creatives = creatives
    this.title = uiElement.subTitle.title
    this.text = uiElement.button.text
  }
}

/**
 * 私人定制数据整合
 */
export class Customize {
  constructor(creatives, uiElement) {
    this.creatives = creatives
    this.title = uiElement.subTitle.title
    this.text = uiElement.button.text
  }
}

/**
 * 私人定制数据整合
 */
export class MusicVideoData {
  constructor(extInfo, uiElement) {
    this.extInfo = extInfo
    this.title = uiElement.subTitle.title
    this.text = uiElement.button.text
  }
}

/**
 * 雷达歌单数据整合
 */
export class RadarPlaylist {
  constructor(creatives, uiElement) {
    this.creatives = creatives
    this.title = uiElement.subTitle.title
    this.text = uiElement.button.text
  }
}

/**
 * LOOK直播数据整合
 */
export class LookData {
  constructor(extInfo, uiElement) {
    this.extInfo = extInfo
    this.title = uiElement.subTitle.title
    this.text = uiElement.button.text
  }
}

/**
 * 专属场景歌单数据整合
 */
export class ScenePlaylist {
  constructor(creatives, uiElement) {
    this.creatives = creatives
    this.title = uiElement.subTitle.title
    this.text = uiElement.button.text
  }
}

/**
 * 音乐日历数据整合
 */
export class MusicCalendars {
  constructor(creatives, uiElement) {
    this.creatives = creatives
    this.title = uiElement.subTitle.title
    this.text = uiElement.button.text
  }
}

/**
 * 排行榜数据整合
 */
export class RankingList {
  constructor(creatives, uiElement) {
    this.creatives = creatives
    this.title = uiElement.subTitle.title
    this.text = uiElement.button.text
  }
}

/**
 * 播客数据整合
 */
export class PodcastList {
  constructor(creatives, uiElement) {
    this.creatives = creatives
    this.title = uiElement.subTitle.title
    this.text = uiElement.button.text
  }
}

/**
 * 云村KTV数据整合
 */
export class KtvData {
  constructor(extInfo, uiElement) {
    this.extInfo = extInfo
    this.title = uiElement.subTitle.title
    this.text = uiElement.button.text
  }
}

/**
 * 视频数据整合
 */
export class VideoCollection {
  constructor(creatives, uiElement) {
    this.creatives = creatives
    this.title = uiElement.subTitle.title
    this.text = uiElement.button.text
  }
}
