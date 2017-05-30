var gaemState = internalRequire("gaemState");
var ctx = internalRequire("ctx");
var canv = internalRequire("canv");
var levels = internalRequire("levels");
var player = {
  x: 0,
  y: 0,
  width: 10,
  height: 10,
  speed: 2,
  gravity: 1
}
gaemState.on("go", (opt) => {player[opt.direction] = true});
gaemState.on("stop", (opt) => {player[opt.direction] = false});
player.draw = function(){
  ctx.fillStyle="lime";
  if (player.left) player.x -= player.speed;
  if (player.right) player.x += player.speed;
  if (player.up) player.y -= player.speed;
  if (player.down) player.y += player.speed;
  player.y += player.gravity;
  applyBounds();
  applyLanding();
  ctx.fillRect(player.x,player.y,player.width,player.height);
};
function applyBounds() {
  if (player.x < 0) player.x = 0;
  if (player.x + player.width > canv.width) player.x = canv.width - player.width;
  if (player.y + player.height > canv.height) player.y = canv.height - player.height
}
function applyLanding() {
  levels.currentLevel.forEachObject((obj) => {
    if (verticalContact(obj) && horizontalContact(obj)) player.y = obj.y - player.height;
  });
}
function verticalContact(obj) {
  return (player.y < obj.y) && ((player.y + player.height) > obj.y);
}
function horizontalContact(obj) {
  return (player.x < obj.x + obj.width) && ((player.x + player.width) > obj.x)
}

module.exports = player;
