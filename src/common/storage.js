/**
 * @Author : Lazy
 * @Date : 2021/6/4
 * 本地存储封装模块
 */

/**
 * 根据名字获取本地存储
 * @param name
 * @returns {string|any}
 */
export const getItem = name => {
  const data = localStorage.getItem(name)
  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  }
}

/**
 * 设置本地存储
 * @param name
 * @param value
 */
export const setItem = (name, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(name, value)
}

/**
 * 删除本地存储
 * @param name
 */
export const removeItem = name => {
  localStorage.removeItem(name)
}
