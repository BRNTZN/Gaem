window.onload=function() {
  var canv = document.getElementById("gameCanvas");
  internalRequire.add("canv", canv);
  internalRequire.add("ctx", canv.getContext("2d"));
  internalRequire("keys");
  setInterval(internalRequire("gameLoop"), 200/15);
};
