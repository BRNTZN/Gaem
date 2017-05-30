module.exports = gaemState();

function gaemState() {
  var state = {
    fire: function(eventName, opt) {
      var subscriptions = getCatalogue(eventName).subscriptions;
      for (var i = 0; i < subscriptions.length; i++) {
        subscriptions[i](opt);
      }
    },
    on: function(eventName, fn) {
      getCatalogue(eventName).subscriptions.push(fn);
    }
  }
  return state;
}

var eventCatalogue = {};

function getCatalogue(eventName) {
  if (eventCatalogue[eventName]) return eventCatalogue[eventName];
  var newCatalogue = {
    subscriptions : []
  }
  eventCatalogue[eventName] = newCatalogue;
  return newCatalogue;
}
