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

      // Most keys below 46 we want to ignore because they're shift, end,
      // home, and the like. 46 is delete, above 48 are alphanumeric.
      // We also have a few codes below 46 that we care about, such as
      // backspace and spacebar.
      // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
      var specialCodes = [8, 32];
      if (code >= 46 || specialCodes.indexOf(code) != -1) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGluZy10cmlnZ2VyLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfREVCT1VOQ0UiLCJUeXBpbmdUcmlnZ2VyQ3VzdG9tQXR0cmlidXRlIiwiZWxlbWVudCIsIl9kZWJvdW5jZVRpbWUiLCJfdGltZW91dCIsInZhbHVlQ2hhbmdlZCIsImRlYm91bmNlIiwiaXNOYU4iLCJwYXJzZUludCIsImF0dGFjaGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvZGUiLCJ3aW5kb3ciLCJldmVudCIsImUiLCJrZXlDb2RlIiwid2hpY2giLCJzcGVjaWFsQ29kZXMiLCJpbmRleE9mIiwiX3RyaWdnZXJUeXBpbmciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY3JlYXRlQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiZGlzcGF0Y2hFdmVudCIsImluamVjdCIsIkVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQXpCOztJQUVhQyw0QixXQUFBQSw0QjtBQUtULHdDQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQUEsU0FIckJDLGFBR3FCLEdBSExILGdCQUdLO0FBQUEsU0FGckJJLFFBRXFCLEdBRlYsSUFFVTs7QUFDbkIsU0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7O3lDQUVERyxZLHlCQUFhQyxRLEVBQVU7QUFDckIsUUFBSSxPQUFPQSxRQUFQLEtBQW9CLFdBQXBCLElBQW1DLENBQUNDLE1BQU1DLFNBQVNGLFFBQVQsRUFBbUIsRUFBbkIsQ0FBTixDQUF4QyxFQUF1RTtBQUNyRSxXQUFLSCxhQUFMLEdBQXFCSyxTQUFTRixRQUFULEVBQW1CLEVBQW5CLENBQXJCO0FBQ0Q7QUFDRixHOzt5Q0FFREcsUSx1QkFBVztBQUFBOztBQUNULFNBQUtQLE9BQUwsQ0FBYVEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsYUFBSztBQUMxQyxVQUFJQyxPQUFPQyxPQUFPQyxLQUFQLEdBQWVDLEVBQUVDLE9BQWpCLEdBQTJCRCxFQUFFRSxLQUF4Qzs7QUFFQSxVQUFJLENBQUNMLElBQUwsRUFBVztBQUNUO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQUlNLGVBQWUsQ0FBQyxDQUFELEVBQUksRUFBSixDQUFuQjtBQUNBLFVBQUlOLFFBQVEsRUFBUixJQUFjTSxhQUFhQyxPQUFiLENBQXFCUCxJQUFyQixLQUE4QixDQUFDLENBQWpELEVBQW9EO0FBQ2xELGNBQUtRLGNBQUw7QUFDRDtBQUNGLEtBaEJEO0FBaUJELEc7O0FBRUQ7Ozs7Ozt5Q0FJQUEsYyw2QkFBaUI7QUFBQTs7QUFDZjtBQUNBLFFBQUksS0FBS2YsUUFBTCxLQUFrQixJQUF0QixFQUE0QjtBQUMxQjtBQUNBUSxhQUFPUSxZQUFQLENBQW9CLEtBQUtoQixRQUF6QjtBQUNEOztBQUVELFNBQUtBLFFBQUwsR0FBZ0JRLE9BQU9TLFVBQVAsQ0FBa0IsWUFBTTtBQUN0QyxVQUFJUixRQUFRLGdCQUFJUyxpQkFBSixDQUFzQixRQUF0QixFQUFnQyxFQUFFQyxTQUFTLElBQVgsRUFBaEMsQ0FBWjs7QUFFQSxhQUFLckIsT0FBTCxDQUFhc0IsYUFBYixDQUEyQlgsS0FBM0I7QUFDRCxLQUplLEVBSWIsS0FBS1YsYUFKUSxDQUFoQjtBQUtELEc7OztZQWxETXNCLE0sR0FBUyxDQUFDQyxPQUFELEMiLCJmaWxlIjoidHlwaW5nLXRyaWdnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET00gfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5cbmNvbnN0IERFRkFVTFRfREVCT1VOQ0UgPSA1MDA7XG5cbmV4cG9ydCBjbGFzcyBUeXBpbmdUcmlnZ2VyQ3VzdG9tQXR0cmlidXRlIHtcbiAgICBzdGF0aWMgaW5qZWN0ID0gW0VsZW1lbnRdO1xuICAgIF9kZWJvdW5jZVRpbWUgPSBERUZBVUxUX0RFQk9VTkNFO1xuICAgIF90aW1lb3V0ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdmFsdWVDaGFuZ2VkKGRlYm91bmNlKSB7XG4gICAgICBpZiAodHlwZW9mIGRlYm91bmNlICE9PSAndW5kZWZpbmVkJyAmJiAhaXNOYU4ocGFyc2VJbnQoZGVib3VuY2UsIDEwKSkpIHtcbiAgICAgICAgdGhpcy5fZGVib3VuY2VUaW1lID0gcGFyc2VJbnQoZGVib3VuY2UsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgICBsZXQgY29kZSA9IHdpbmRvdy5ldmVudCA/IGUua2V5Q29kZSA6IGUud2hpY2g7XG5cbiAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTW9zdCBrZXlzIGJlbG93IDQ2IHdlIHdhbnQgdG8gaWdub3JlIGJlY2F1c2UgdGhleSdyZSBzaGlmdCwgZW5kLFxuICAgICAgICAvLyBob21lLCBhbmQgdGhlIGxpa2UuIDQ2IGlzIGRlbGV0ZSwgYWJvdmUgNDggYXJlIGFscGhhbnVtZXJpYy5cbiAgICAgICAgLy8gV2UgYWxzbyBoYXZlIGEgZmV3IGNvZGVzIGJlbG93IDQ2IHRoYXQgd2UgY2FyZSBhYm91dCwgc3VjaCBhc1xuICAgICAgICAvLyBiYWNrc3BhY2UgYW5kIHNwYWNlYmFyLlxuICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9LZXlib2FyZEV2ZW50L2tleUNvZGVcbiAgICAgICAgbGV0IHNwZWNpYWxDb2RlcyA9IFs4LCAzMl07XG4gICAgICAgIGlmIChjb2RlID49IDQ2IHx8IHNwZWNpYWxDb2Rlcy5pbmRleE9mKGNvZGUpICE9IC0xKSB7XG4gICAgICAgICAgdGhpcy5fdHJpZ2dlclR5cGluZygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYSB0aW1lb3V0IGZvciB0aGUgdHlwaW5nIGV2ZW50IHRvIGJlIGRpc3BhdGNoZWRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF90cmlnZ2VyVHlwaW5nKCkge1xuICAgICAgLy8gSWYgdGhlcmUgaXMgYSBjdXJyZW50IHRpbWVvdXQgc2V0IHRvIGRpc3BhdGNoIHRlaCBldmVudFxuICAgICAgaWYgKHRoaXMuX3RpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgLy8gVGhlbiBjYW5jZWwgaXRcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IGV2ZW50ID0gRE9NLmNyZWF0ZUN1c3RvbUV2ZW50KCd0eXBpbmcnLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgfSwgdGhpcy5fZGVib3VuY2VUaW1lKTtcbiAgICB9XG59XG4iXX0=
