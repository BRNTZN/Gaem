var ctx = internalRequire("ctx");
var canv = internalRequire("canv");
var levelData = [{
  name: "intro",
  objects: [{
    type: "solid",
    x: 50,
    y: 50,
    width: 75,
    height: 10
  }]
}]
module.exports = {
  currentLevel: levelObject(levelData[0])
};

function levelObject(levelData) {
  levelData.forEachObject = (fn) => {
    for (var i = 0; i < levelData.objects.length; i++) {
      fn(levelData.objects[i]);
    }
  };
  levelData.draw = () => {
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
    levelData.forEachObject((obj) => {
      ctx.fillStyle="red";
      ctx.fillRect(obj.x,obj.y,obj.width,obj.height);
    })
  };
  return levelData;
}
