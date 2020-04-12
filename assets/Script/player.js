cc.Class({
    extends: cc.Component,

    properties: {
        mummy:{
            default:null,
            type:cc.Node,
        },
        ghost:{
            default:null,
            type:cc.Node,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
    },

    start () {

    },

    update (dt) {
        if(this.node.x == this.mummy.x && this.node.y == this.mummy.y)
        {
            cc.director.loadScene('lose');
        }
        else if(this.node.x == this.ghost.x && this.node.y == this.ghost.y)
        {
            cc.director.loadScene('lose');
        }
    
    },
});
