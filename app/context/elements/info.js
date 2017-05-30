var ctx = internalRequire("ctx");
var canv = internalRequire("canv");
var player = internalRequire("player");
module.exports = {
  draw: function() {
    ctx.fillText(player.speed ,canv.width - 25, canv.height - 25);
  }
}
