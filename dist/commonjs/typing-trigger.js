'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypingTriggerCustomAttribute = undefined;

var _class, _temp;

var _aureliaPal = require('aurelia-pal');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_DEBOUNCE = 500;

var TypingTriggerCustomAttribute = exports.TypingTriggerCustomAttribute = (_temp = _class = function () {
  function TypingTriggerCustomAttribute(element) {
    _classCallCheck(this, TypingTriggerCustomAttribute);

    this._debounceTime = DEFAULT_DEBOUNCE;
    this._timeout = null;

    this.element = element;
  }

  TypingTriggerCustomAttribute.prototype.valueChanged = function valueChanged(debounce) {
    if (typeof debounce !== 'undefined' && !isNaN(parseInt(debounce, 10))) {
      this._debounceTime = parseInt(debounce, 10);
    }
  };

  TypingTriggerCustomAttribute.prototype.attached = function attached() {
    var _this = this;

    this.element.addEventListener('keyup', function (e) {
      var code = window.event ? e.keyCode : e.which;

      if (!code) {
        return;
      }

      // @TODO: Explain keycodes
      if (code > 35) {
        _this._triggerTyping();
      }
    });
  };

  /**
   * Set a timeout for the typing event to be dispatched
   * @private
   */


  TypingTriggerCustomAttribute.prototype._triggerTyping = function _triggerTyping() {
    var _this2 = this;

    // If there is a current timeout set to dispatch teh event
    if (this._timeout !== null) {
      // Then cancel it
      window.clearTimeout(this._timeout);
    }

    this._timeout = window.setTimeout(function () {
      var event = _aureliaPal.DOM.createCustomEvent('typing', { bubbles: true });

      _this2.element.dispatchEvent(event);
    }, this._debounceTime);
  };

  return TypingTriggerCustomAttribute;
}(), _class.inject = [Element], _temp);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGluZy10cmlnZ2VyLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfREVCT1VOQ0UiLCJUeXBpbmdUcmlnZ2VyQ3VzdG9tQXR0cmlidXRlIiwiZWxlbWVudCIsIl9kZWJvdW5jZVRpbWUiLCJfdGltZW91dCIsInZhbHVlQ2hhbmdlZCIsImRlYm91bmNlIiwiaXNOYU4iLCJwYXJzZUludCIsImF0dGFjaGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvZGUiLCJ3aW5kb3ciLCJldmVudCIsImUiLCJrZXlDb2RlIiwid2hpY2giLCJfdHJpZ2dlclR5cGluZyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJjcmVhdGVDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJkaXNwYXRjaEV2ZW50IiwiaW5qZWN0IiwiRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBekI7O0lBRWFDLDRCLFdBQUFBLDRCO0FBS1Qsd0NBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFBQSxTQUhyQkMsYUFHcUIsR0FITEgsZ0JBR0s7QUFBQSxTQUZyQkksUUFFcUIsR0FGVixJQUVVOztBQUNuQixTQUFLRixPQUFMLEdBQWVBLE9BQWY7QUFDRDs7eUNBRURHLFkseUJBQWFDLFEsRUFBVTtBQUNyQixRQUFJLE9BQU9BLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUMsQ0FBQ0MsTUFBTUMsU0FBU0YsUUFBVCxFQUFtQixFQUFuQixDQUFOLENBQXhDLEVBQXVFO0FBQ3JFLFdBQUtILGFBQUwsR0FBcUJLLFNBQVNGLFFBQVQsRUFBbUIsRUFBbkIsQ0FBckI7QUFDRDtBQUNGLEc7O3lDQUVERyxRLHVCQUFXO0FBQUE7O0FBQ1QsU0FBS1AsT0FBTCxDQUFhUSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxhQUFLO0FBQzFDLFVBQUlDLE9BQU9DLE9BQU9DLEtBQVAsR0FBZUMsRUFBRUMsT0FBakIsR0FBMkJELEVBQUVFLEtBQXhDOztBQUVBLFVBQUksQ0FBQ0wsSUFBTCxFQUFXO0FBQ1Q7QUFDRDs7QUFFRDtBQUNBLFVBQUlBLE9BQU8sRUFBWCxFQUFlO0FBQ2IsY0FBS00sY0FBTDtBQUNEO0FBQ0YsS0FYRDtBQVlELEc7O0FBRUQ7Ozs7Ozt5Q0FJQUEsYyw2QkFBaUI7QUFBQTs7QUFDZjtBQUNBLFFBQUksS0FBS2IsUUFBTCxLQUFrQixJQUF0QixFQUE0QjtBQUMxQjtBQUNBUSxhQUFPTSxZQUFQLENBQW9CLEtBQUtkLFFBQXpCO0FBQ0Q7O0FBRUQsU0FBS0EsUUFBTCxHQUFnQlEsT0FBT08sVUFBUCxDQUFrQixZQUFNO0FBQ3RDLFVBQUlOLFFBQVEsZ0JBQUlPLGlCQUFKLENBQXNCLFFBQXRCLEVBQWdDLEVBQUVDLFNBQVMsSUFBWCxFQUFoQyxDQUFaOztBQUVBLGFBQUtuQixPQUFMLENBQWFvQixhQUFiLENBQTJCVCxLQUEzQjtBQUNELEtBSmUsRUFJYixLQUFLVixhQUpRLENBQWhCO0FBS0QsRzs7O1lBN0NNb0IsTSxHQUFTLENBQUNDLE9BQUQsQyIsImZpbGUiOiJ0eXBpbmctdHJpZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPTSB9IGZyb20gJ2F1cmVsaWEtcGFsJztcblxuY29uc3QgREVGQVVMVF9ERUJPVU5DRSA9IDUwMDtcblxuZXhwb3J0IGNsYXNzIFR5cGluZ1RyaWdnZXJDdXN0b21BdHRyaWJ1dGUge1xuICAgIHN0YXRpYyBpbmplY3QgPSBbRWxlbWVudF07XG4gICAgX2RlYm91bmNlVGltZSA9IERFRkFVTFRfREVCT1VOQ0U7XG4gICAgX3RpbWVvdXQgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICB2YWx1ZUNoYW5nZWQoZGVib3VuY2UpIHtcbiAgICAgIGlmICh0eXBlb2YgZGVib3VuY2UgIT09ICd1bmRlZmluZWQnICYmICFpc05hTihwYXJzZUludChkZWJvdW5jZSwgMTApKSkge1xuICAgICAgICB0aGlzLl9kZWJvdW5jZVRpbWUgPSBwYXJzZUludChkZWJvdW5jZSwgMTApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICAgIGxldCBjb2RlID0gd2luZG93LmV2ZW50ID8gZS5rZXlDb2RlIDogZS53aGljaDtcblxuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBAVE9ETzogRXhwbGFpbiBrZXljb2Rlc1xuICAgICAgICBpZiAoY29kZSA+IDM1KSB7XG4gICAgICAgICAgdGhpcy5fdHJpZ2dlclR5cGluZygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYSB0aW1lb3V0IGZvciB0aGUgdHlwaW5nIGV2ZW50IHRvIGJlIGRpc3BhdGNoZWRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF90cmlnZ2VyVHlwaW5nKCkge1xuICAgICAgLy8gSWYgdGhlcmUgaXMgYSBjdXJyZW50IHRpbWVvdXQgc2V0IHRvIGRpc3BhdGNoIHRlaCBldmVudFxuICAgICAgaWYgKHRoaXMuX3RpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgLy8gVGhlbiBjYW5jZWwgaXRcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IGV2ZW50ID0gRE9NLmNyZWF0ZUN1c3RvbUV2ZW50KCd0eXBpbmcnLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgfSwgdGhpcy5fZGVib3VuY2VUaW1lKTtcbiAgICB9XG59XG4iXX0=
