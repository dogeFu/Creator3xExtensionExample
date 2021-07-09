# Creator3xExtensionExample

Creator 3.x插件 简单demo

## usage

拷贝helloworld文件夹到creator的插件文件夹下，不同系统位置不一样，查看官方文档

## package.json

结合package.json解释一下这个插件做了什么事

ps.不要用这个作为你的插件配置，注释会导致报错。要验证代码直接用helloworld里的东西
``` json
{
    "name": "hello-world",//插件名称
    "version": "1.0.0",
    "description": "一份简单的扩展",
    "main": "./browser.js",//插件代码入口，导出方法给下面的消息使用

    //为插件定义了一个叫做default的面板
    "panels": {
        "default": {//面板名称
            "title": "world panel",
            "type": "dockable",
            "main": "./panels/default.js",//面板代码入口，这里也可以导出方法
            "icon": "./panels/icons/icon.png"
        }
    },
    "contributions": {
        //扩展了creator顶部的两个菜单
        "menu": [{
            "path": "Develop",//在Develop菜单中增加test选项
            "label": "test",
            "message": "log"//点击按钮后发log消息
        }, {
            "path": "i18n:menu.panel/Custom",//在panel菜单增加Custom选项
            "label": "Open Custom Panal",
            "message": "open-panel"//点击按钮后发送了"open-panel"消息
        }],
        "messages": {//自定义消息
            "log": {//消息名称
                "methods": ["log"]
                //消息回调函数名称，这个函数要在main字段对应的文件里存在，在这里就是browser.js里的log方法
            },
            "open-panel": {
                "methods": ["openPanel"]//第二个菜单对应了这个方法，去browser.js里看看他们都做了什么吧
            },           
            "increasing": {
                "methods": ["increasing"]
                //这个方法没有menu配置对应，所以不是通过菜单触发
                //我们可以通过代码触发，去default.js里看看
            },
            "query-num": {
                "methods": ["queryNum"]
            },
            "hello-world:increasing": {
                "methods": ["default.increasing"]
                //default对应的是panels字段里的default面板,
                //default面板的main字段里是default.js文件,
                //所以这里对应的触发函数，是default.js文件导出的的increasing方法
            }
        }
    }
}

```

简单来说，插件就是自定义各种消息和对应的回调函数

消息可以在菜单被点击的时候自动触发，也可以在代码中触发