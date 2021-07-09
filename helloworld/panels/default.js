'use strict';

//面板实现代码，关于面板的更深入的功能请看操官方文档

// 面板的内容
exports.template = `
<div>Hello</div>
<div><ui-button>increasing</ui-button></div>
<div><span>Num: </span><span class="num">-</span></div>
`;
// 面板上的样式
exports.style = 'div { color: yellow; }';

// 快捷选择器
exports.$ = {
    elem: 'div',
    button: 'ui-button',
    num: '.num',
};

//导出的方法
exports.methods = {
    increasing(num) {
        this.$.num.innerHTML = num;
    },
};

// 面板启动后触发的钩子函数
exports.ready = async function() {
    this.$.elem.innerHTML = 'Hello World';
   
    //给面板里的按钮绑定了回调
    this.$.button.addEventListener('confirm', () => {
        //用代码发送increasing消息给hello-world插件
        Editor.Message.send('hello-world', 'increasing'); //根据package.json配置，browser里的increasing方法会执行一次
    });
    //获取qurey-num消息对应方法的返回值
    this.$.num.innerHTML = await Editor.Message.request('hello-world', 'query-num');
};


// 面板关闭后的钩子函数
exports.close = function() {};