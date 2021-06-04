/**
 * @Author : Lazy
 * @Date : 2021/6/2
 */

const merge = require('webpack-merge')
const prodEnv = require('prod.env')

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"'
})
