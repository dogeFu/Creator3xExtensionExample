'use strict';

let num=0

// 扩展内定义的方法，在package.json里可以指定这些方法作为消息的响应函数
exports.methods = {
    log() {
        console.log('Hello World');
    },
    openPanel() {
        //打开面板
        Editor.Panel.open('hello-world');
    },
    queryNum() {
        return num;
    },
    increasing() {
        num++;
        //广播消息通知面板刷新num字段
        Editor.Message.broadcast('hello-world:increasing', num);
    },
};

// 当扩展被启动的时候执行
exports.load = function() {};

// 当扩展被关闭的时候执行
exports.unload = function() {};