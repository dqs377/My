cc.Class({
    extends: cc.Component,
    
    properties: {
        
    },

    start(){
    },

    onLoad:function(){
        cc.director.getPhysicsManager().enabled = true;

        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
    },
    
    onCollisionEnter: function (other, self) {
        console.log('on collision enter');

        if(other.node.group != 'player'){
            return;
        }
    },

     onCollisionStay: function (other, self) {

    },
    
    onCollisionExit: function (other, self) {

    },

    // update (dt) {
    // },

});
