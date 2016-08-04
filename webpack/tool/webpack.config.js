var webpack = require('webpack');
module.exports = {
	/*指入口文件的配置项，它是一个数组的原因是webpack允许多个入口点*/
	entry : ['./entry.js'],
	/*配置打包结果，path定义了输出的文件夹，filename则定义了打包结果文件的名称*/
	output : {
		path : __dirname,
		filename : 'bundle.js'
	},
	/*module定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，
	以及一些正则。当需要加载的文件匹配test的正则时，就会调用后面的loader
	对文件进行处理，这正是webpack强大的原因*/
	module : {
		loaders : [{
			test : /\.css$/,
			loader : 'style!css'
		},{
			test : /\.(png|jpg)$/,
			/*添加到这里！并且会按照文件大小。转化为base64，或者单独作为文件*/
			loader : 'url-loader?limit=8192'
			/*在大小限制后可以加上&name=./[name].[ext],会将我们的文件生成在设定的文件夹下。*/
		}]
	}
}