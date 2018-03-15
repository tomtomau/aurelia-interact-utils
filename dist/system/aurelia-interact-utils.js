'use strict';

System.register(['aurelia-pal', './typing-trigger'], function (_export, _context) {
  "use strict";

  var PLATFORM;
  function configure(config) {
    config.globalResources([PLATFORM.moduleName('./typing-trigger')]);
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }, function (_typingTrigger) {
      var _exportObj = {};
      _exportObj.TypingTriggerCustomAttribute = _typingTrigger.TypingTriggerCustomAttribute;

      _export(_exportObj);
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtaW50ZXJhY3QtdXRpbHMuanMiXSwibmFtZXMiOlsiY29uZmlndXJlIiwiY29uZmlnIiwiZ2xvYmFsUmVzb3VyY2VzIiwiUExBVEZPUk0iLCJtb2R1bGVOYW1lIiwiVHlwaW5nVHJpZ2dlckN1c3RvbUF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSU8sV0FBU0EsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkI7QUFDaENBLFdBQU9DLGVBQVAsQ0FBdUIsQ0FDckJDLFNBQVNDLFVBQVQsQ0FBb0Isa0JBQXBCLENBRHFCLENBQXZCO0FBR0Q7O3VCQUplSixTOzs7O0FBSlBHLGMsZUFBQUEsUTs7O2lCQUVBRSw0QixrQkFBQUEsNEIiLCJmaWxlIjoiYXVyZWxpYS1pbnRlcmFjdC11dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5leHBvcnQgeyBUeXBpbmdUcmlnZ2VyQ3VzdG9tQXR0cmlidXRlIH0gZnJvbSAnLi90eXBpbmctdHJpZ2dlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnKSB7XG4gIGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW1xuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdHlwaW5nLXRyaWdnZXInKVxuICBdKTtcbn1cbiJdfQ==
