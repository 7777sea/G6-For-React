import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';

// 公共样式部分
// import './assets/less/index.less';
ReactDOM.render(
    <Router></Router>
    ,document.getElementById('root')
);


// 设置所有模块接受热更新
if (module.hot) {
    module.hot.accept();
}