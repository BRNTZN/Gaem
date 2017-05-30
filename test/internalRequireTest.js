var chai = require('chai');
var expect = chai.expect;
describe('internalRequire', function() {
  it('should be globally available', function(done){
    expect(internalRequire).to.not.be.undefined;
    done();
  });
  it('should allow requiring of our internal modules', function(done){
    var gaemState = internalRequire("gaemState");
    expect(gaemState).to.not.be.undefined;
    done();
  });
  it('should allow adding of modules', function(done){
    var moduleName = "newModule";
    internalRequire.add(moduleName, {});
    expect(internalRequire(moduleName)).to.not.be.undefined;
    done();
  });
  it('should allow requiring of added modules', function(done){
    var moduleName = "newModule2";
    var module = {"blabalablablabala": "mskldqjflmqsdkf"};
    internalRequire.add(moduleName, module);
    expect(internalRequire(moduleName)).to.equal(module);
    done();
  });
  it('should cache modules', function(done){
    var moduleName = "newModule3";
    var module = {counter: 0};
    internalRequire.add(moduleName, module);
    var requiredModule1 = internalRequire(moduleName);
    expect(requiredModule1).to.equal(module);
    expect(requiredModule1.counter).to.equal(0);
    requiredModule1.counter ++;
    var requiredModule2 = internalRequire(moduleName);
    expect(requiredModule2.counter).to.equal(1);
    done();
  });
});
