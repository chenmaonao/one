module.exports = {
    devServer: {
		before: function(app, server) {
		},

		// 跨域api代理设置，TODO:跨域代理同样不会被打包到上架项目中，所以跨域api与真实服务保持一致
		proxy: {
			"/api": { //当前项目向/api开头路径发送请求通过服务器代理访问target网站
				target: "http://v3.wufazhuce.com:8000",
				changeOrigin: true, //“/api”自动指定到target
				pathRewrite: { 
					
				}
			}
		}

	},

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': []
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: false
      }
    }
};
