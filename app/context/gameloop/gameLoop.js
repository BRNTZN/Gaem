var loopMod = 0;
var canv = internalRequire("canv");
var ctx = internalRequire("ctx");
var levels = internalRequire("levels");
var player = internalRequire("player");
var info = internalRequire("info");
module.exports = function gameLoop() {
  loopMod++;
  if (loopMod == 500) {
    speedUp();
    loopMod = 0;
  }
  levels.currentLevel.draw();
  player.draw();
  info.draw();
};
function speedUp() {
  player.speed *= 2;
}
function drawInfo() {

}
