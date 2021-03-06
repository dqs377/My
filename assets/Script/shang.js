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
        mummy:{
            default:null,
            type:cc.Node,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    start () {

    },

    onLoad: function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
        clickEventHandler.component = "shang";// 这个是代码文件名
        clickEventHandler.handler = "callback";
        clickEventHandler.customEventData = "foobar";

        var button = this.node.getComponent(cc.Button);
        this.button.clickEvents.push(clickEventHandler);
    },

    callback: function (event, customEventData) {
        // 这里 event 是一个 Event 对象，你可以通过 event.target 取到事件的发送节点
        var node = event.target;
        var button = node.getComponent(cc.Button);

        if(this.player.y <= 225 && this.player.y > -25){
            if(!(this.player.x==150 && this.player.y == 0))
            if(!(this.player.x==150 && this.player.y == 50))
            if(!(this.player.x==250 && this.player.y == 50))//不能上移的格子
            if(!(this.player.x==50 && this.player.y == 100))
            if(!(this.player.x==100 && this.player.y == 100))
            if(!(this.player.x==200 && this.player.y == 100))
            if(!(this.player.x==150 && this.player.y == 150))
            if(!(this.player.x==50 && this.player.y == 200))
            if(!(this.player.x==0 && this.player.y == 50))
            {
                this.player.y += 50;//向上移动一格
            }
        }

        //僵尸移动，僵尸在每一次玩家移动之后便移动，故将代码加在每一次按下按钮之后
        //用一个时延来展示僵尸的移动过程
        //玩家一次移动一格，僵尸一次移动两格，僵尸总是优先从水平方向上靠近玩家
        this.scheduleOnce(function () 
        {
            //僵尸的左移
            if(this.mummy.x > this.player.x){
                if(!(this.mummy.x==200 && this.mummy.y == 50))
                if(!(this.mummy.x==200 && this.mummy.y == 100))
                if(!(this.mummy.x==150 && this.mummy.y == 200))//不能够往左移动的格子
                if(!(this.mummy.x==100 && this.mummy.y == 0))
                if(!(this.mummy.x==100 && this.mummy.y == 200))
                if(!(this.mummy.x==250 && this.mummy.y == 50))
                {
                    this.mummy.x -= 50;
                    this.mummy.scaleX = 1;
                }
            }
            //僵尸的右移动
            else if(this.mummy.x < this.player.x)
            {
                if(!(this.mummy.x==50 && this.mummy.y == 0))
                if(!(this.mummy.x==150 && this.mummy.y == 50))
                if(!(this.mummy.x==200 && this.mummy.y == 50))
                if(!(this.mummy.x==150 && this.mummy.y == 100))
                if(!(this.mummy.x==50 && this.mummy.y == 200))
                if(!(this.mummy.x==100 && this.mummy.y == 200))
                {
                    this.mummy.x += 50;
                    this.mummy.scaleX = -1;
                }
            }
            //竖直方向靠近，前提是水平方向已经靠近或者有障碍物
            else if(this.mummy.x == this.player.x)
            {
                if(this.mummy.y > this.player.y)//僵尸在玩家上方
                {
                    if(!(this.mummy.x==150 && this.mummy.y == 50))
                    if(!(this.mummy.x==250 && this.mummy.y == 100))
                    if(!(this.mummy.x==0 && this.mummy.y == 100))
                    if(!(this.mummy.x==150 && this.mummy.y == 100))
                    if(!(this.mummy.x==200 && this.mummy.y == 150))
                    if(!(this.mummy.x==50 && this.mummy.y == 150))
                    if(!(this.mummy.x==100 && this.mummy.y == 150))
                    if(!(this.mummy.x==150 && this.mummy.y == 200))
                    if(!(this.mummy.x==50 && this.mummy.y == 250))
                    {
                        this.mummy.y -= 50;//向下移动
                    }
                }
                else if(this.mummy.y < this.player.y)//僵尸在玩家下方
                {
                    if(!(this.mummy.x==150 && this.mummy.y == 0))
                    if(!(this.mummy.x==150 && this.mummy.y == 50))
                    if(!(this.mummy.x==250 && this.mummy.y == 50))
                    if(!(this.mummy.x==50 && this.mummy.y == 100))
                    if(!(this.mummy.x==100 && this.mummy.y == 100))
                    if(!(this.mummy.x==200 && this.mummy.y == 100))
                    if(!(this.mummy.x==150 && this.mummy.y == 150))
                    if(!(this.mummy.x==50 && this.mummy.y == 200))
                    if(!(this.mummy.x==0 && this.mummy.y == 50))
                    {
                        this.mummy.y += 50;//向上移动
                    }
                }
            }
        },1.0);

        //因为僵尸能移动两格，所以直接把上面的代码复制一遍即可，或者用一个循环，不过循环的话时延就不好体现
        this.scheduleOnce(function () 
        {
            //僵尸的左移
            if(this.mummy.x > this.player.x){
                if(!(this.mummy.x==200 && this.mummy.y == 50))
                if(!(this.mummy.x==200 && this.mummy.y == 100))
                if(!(this.mummy.x==150 && this.mummy.y == 200))//不能够往左移动的格子
                if(!(this.mummy.x==100 && this.mummy.y == 0))
                if(!(this.mummy.x==100 && this.mummy.y == 200))
                if(!(this.mummy.x==250 && this.mummy.y == 50))
                {
                    this.mummy.x -= 50;
                    this.mummy.scaleX = 1;
                }
            }
            //僵尸的右移动
            else if(this.mummy.x < this.player.x)
            {
                if(!(this.mummy.x==50 && this.mummy.y == 0))
                if(!(this.mummy.x==150 && this.mummy.y == 50))
                if(!(this.mummy.x==200 && this.mummy.y == 50))
                if(!(this.mummy.x==150 && this.mummy.y == 100))
                if(!(this.mummy.x==50 && this.mummy.y == 200))
                if(!(this.mummy.x==100 && this.mummy.y == 200))
                {
                    this.mummy.x += 50;
                    this.mummy.scaleX = -1;
                }
            }
            //竖直方向靠近，前提是水平方向已经靠近或者有障碍物
            else if(this.mummy.x == this.player.x)
            {
                if(this.mummy.y > this.player.y)//僵尸在玩家上方
                {
                    if(!(this.mummy.x==150 && this.mummy.y == 50))
                    if(!(this.mummy.x==250 && this.mummy.y == 100))
                    if(!(this.mummy.x==0 && this.mummy.y == 100))
                    if(!(this.mummy.x==150 && this.mummy.y == 100))
                    if(!(this.mummy.x==200 && this.mummy.y == 150))
                    if(!(this.mummy.x==50 && this.mummy.y == 150))
                    if(!(this.mummy.x==100 && this.mummy.y == 150))
                    if(!(this.mummy.x==150 && this.mummy.y == 200))
                    if(!(this.mummy.x==50 && this.mummy.y == 250))
                    {
                        this.mummy.y -= 50;//向下移动
                    }
                }
                else if(this.mummy.y < this.player.y)//僵尸在玩家下方
                {
                    if(!(this.mummy.x==150 && this.mummy.y == 0))
                    if(!(this.mummy.x==150 && this.mummy.y == 50))
                    if(!(this.mummy.x==250 && this.mummy.y == 50))
                    if(!(this.mummy.x==50 && this.mummy.y == 100))
                    if(!(this.mummy.x==100 && this.mummy.y == 100))
                    if(!(this.mummy.x==200 && this.mummy.y == 100))
                    if(!(this.mummy.x==150 && this.mummy.y == 150))
                    if(!(this.mummy.x==50 && this.mummy.y == 200))
                    if(!(this.mummy.x==0 && this.mummy.y == 50))
                    {
                        this.mummy.y += 50;//向上移动
                    }
                }
            }
        },1.5);//体现先后顺序
        // 这里的 customEventData 参数就等于你之前设置的 "foobar"
    },

    // update (dt) {},
});
