var global = require('./global');

cc.Class({
  extends: cc.Component,

  properties: {
      
      wallPrefab: {
          default: null,
          type: cc.Prefab
      },

  },

  onLoad: function () {
      this.spawnNewWall();
      this.spawnNewWall();
      this.spawnNewWall();
      this.spawnNewWall();
      this.spawnNewWall();
      this.spawnNewWall();
      this.spawnNewWall();
      this.spawnNewWall();
      this.spawnNewWall();
      this.spawnNewWall();
      this.spawnNewWall();
      this.spawnNewWall();
      this.spawnNewWall();
      this.spawnNewWall();
      this.spawnNewWall();
      this.spawnNewWall();
      
      
  },

  spawnNewWall: function() {
      var newWall = cc.instantiate(this.wallPrefab);
      var ratationRandom = Math.round(Math.random());
      // 将新增的节点添加到 Canvas 节点下面
      this.node.addChild(newWall);
      
      if(ratationRandom==1){
        newWall.rotation = 90;
        newWall.setPosition(this.getNewWallPositionY());
      }
      else{
        newWall.rotation = 0;
        newWall.setPosition(this.getNewWallPosition());
      }
      // 在wall组件上暂存 Game 对象的引用
      newWall.getComponent('wall').game = this;
      global.a.push(newWall);
  },

  getRandomN:function(){
    var a = [1,3,5,7,9];
    let n = 0;
    while(1){
      n = Math.floor(Math.random() * (9 - 0 + 1));
      if(n==1||n==3||n==5||n==7||n==9){
        return n;
        break;
      }
    }
  },

  getNewWallPosition: function () {
    var randY = (this.getRandomN())*25;
    var randX =Math.floor(Math.random()*6)*50;//0-5
    return cc.v2(randX, randY);
  },

  getNewWallPositionY: function () {
    var randX = (this.getRandomN())*25;
    var randY =Math.floor(Math.random()*6)*50;//0-5
    return cc.v2(randX, randY);
  },

});
