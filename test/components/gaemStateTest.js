var chai = require('chai');
var expect = chai.expect;
var gaemState;
describe('gaemState', function() {
  it('should be available', function(done){
    gaemState = internalRequire("gaemState");
    expect(gaemState).to.not.be.undefined;
    done();
  });
  it('should allow firing an event', function(done){
    gaemState.fire("someEvent");
    done();
  });
  it('should allow subscribing to an event', function(done){
    gaemState.on("someOtherEvent", () => {});
    done();
  });
  it('callback should be called on firing of subscribed event', function(done){
    var eventName = "someSubscribedEvent";
    gaemState.on(eventName, () => {
      done();
    });
    gaemState.fire(eventName);
  });
  it('optional object will be passed to subscription', function(done){
    var eventName = "someSubscribedEvent2";
    var opt = {"kqsdfmkjqsdmfkjqsdfjk":"mqklsdjflmksdjqfkmlj"};
    gaemState.on(eventName, (opt) => {
      expect(opt).to.equal(opt);
      done();
    });
    gaemState.fire(eventName, opt);
  });
});
