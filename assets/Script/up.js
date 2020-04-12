var global = require('./global');

cc.Class({
    extends: cc.Component,

    properties: {
        player:{
            default:null,
            type:cc.Node,
        },
        mummy:{
            default:null,
            type:cc.Node,
        },
        wall:{
            default:null,
            type:cc.Prefab,
        }
    },

    start () {
      
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad: function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
        clickEventHandler.component = "up";// 这个是代码文件名
        clickEventHandler.handler = "callback";
        clickEventHandler.customEventData = "foobar";

        var button = this.node.getComponent(cc.Button);
        this.button.clickEvents.push(clickEventHandler);
    },

    // getPlayerDistance: function () {
    //     // 根据 player 节点位置判断距离
    //     var playerPos = this.game.player.getPosition();
    //     // 根据两点位置计算两点之间距离
    //     var dist = this.node.position.sub(playerPos).mag();
    //     return dist;
    // },
    
    callback: function (event, customEventData) {
        // 这里 event 是一个 Event 对象，你可以通过 event.target 取到事件的发送节点
        var node = event.target;
        var button = node.getComponent(cc.Button);

        for(var i=0;i<global.a.length;i++){
            if(this.player.y <= 225 && this.player.y > -25){
                if(!(this.player.x+50==global.a[i].x && this.player.y+50==global.a[i].y))
                {
                    this.player.y += 50;//向上移动一格
                }
            }
        }

        
    },

    // update (dt) {},
});
