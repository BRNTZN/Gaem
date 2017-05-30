var pathMap = {
  gaemState: "./modules/gaemState.js",
  gaem: "./context/gaem.js",
  gameLoop: "./context/gameloop/gameLoop.js",
  keys: "./context/controller/keys.js",
  player: "./context/elements/player.js",
  levels: "./context/elements/levels.js",
  info: "./context/elements/info.js"
}

var cache = {};

global.internalRequire = function(moduleName) {
  if (!cache[moduleName]) cache[moduleName] = require(pathMap[moduleName]);
  return cache[moduleName];
}

global.internalRequire.add = function(moduleName, module) {
  cache[moduleName] = module;
}
