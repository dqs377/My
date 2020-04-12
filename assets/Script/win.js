// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        player:{
            default:null,
            type:cc.Node,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {

        if(this.node.x==300 || this.node.y==300)
        {
            if(this.node.x == this.player.x)
            {
                if(this.node.y == this.player.y + 50)
                {
                    cc.director.loadScene('victory');
                }
            }
            else if(this.node.y == this.player.y)
            {
                if(this.node.x == this.player.x + 50)
                {
                    cc.director.loadScene('victory');
                }
            }
        }
        else
        {
            if(this.node.x == this.player.x)
            {
                if(this.node.y == this.player.y - 50)
                {
                    cc.director.loadScene('victory');
                }
            }
            else if(this.node.y == this.player.y)
            {
                if(this.node.x == this.player.x - 50)
                {
                    cc.director.loadScene('victory');
                }
            }
        }
    },
});
