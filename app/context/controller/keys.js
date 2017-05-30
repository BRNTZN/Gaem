document.addEventListener("keydown", keyPush);
document.addEventListener("keyup", keyUp);

var gaemState = internalRequire("gaemState");

function keyPush(evt) {
  fireDirectionalEvent(evt, "go");
}
function keyUp(evt) {
  fireDirectionalEvent(evt, "stop");
}
function fireDirectionalEvent(evt, tag) {
  gaemState.fire(tag, {
    direction: getDirectionFromKeyCode(evt.keyCode)
  });
}
function getDirectionFromKeyCode(keyCode) {
  switch(keyCode) {
    case 37:
      return "left";
      break;
    case 38:
      return "up";
      break;
    case 39:
      return "right";
      break;
    case 40:
      return "down";
      break;
  }
}
