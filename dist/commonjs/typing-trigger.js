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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGluZy10cmlnZ2VyLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfREVCT1VOQ0UiLCJUeXBpbmdUcmlnZ2VyQ3VzdG9tQXR0cmlidXRlIiwiZWxlbWVudCIsIl9kZWJvdW5jZVRpbWUiLCJfdGltZW91dCIsInZhbHVlQ2hhbmdlZCIsImRlYm91bmNlIiwiaXNOYU4iLCJwYXJzZUludCIsImF0dGFjaGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvZGUiLCJ3aW5kb3ciLCJldmVudCIsImUiLCJrZXlDb2RlIiwid2hpY2giLCJzcGVjaWFsQ29kZXMiLCJpbmRleE9mIiwiX3RyaWdnZXJUeXBpbmciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiRE9NIiwiY3JlYXRlQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiZGlzcGF0Y2hFdmVudCIsImluamVjdCIsIkVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQXpCOztJQUVhQyw0QixXQUFBQSw0QjtBQUtULHdDQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQUEsU0FIckJDLGFBR3FCLEdBSExILGdCQUdLO0FBQUEsU0FGckJJLFFBRXFCLEdBRlYsSUFFVTs7QUFDbkIsU0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7O3lDQUVERyxZLHlCQUFhQyxRLEVBQVU7QUFDckIsUUFBSSxPQUFPQSxRQUFQLEtBQW9CLFdBQXBCLElBQW1DLENBQUNDLE1BQU1DLFNBQVNGLFFBQVQsRUFBbUIsRUFBbkIsQ0FBTixDQUF4QyxFQUF1RTtBQUNyRSxXQUFLSCxhQUFMLEdBQXFCSyxTQUFTRixRQUFULEVBQW1CLEVBQW5CLENBQXJCO0FBQ0Q7QUFDRixHOzt5Q0FFREcsUSx1QkFBVztBQUFBOztBQUNULFNBQUtQLE9BQUwsQ0FBYVEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsYUFBSztBQUMxQyxVQUFJQyxPQUFPQyxPQUFPQyxLQUFQLEdBQWVDLEVBQUVDLE9BQWpCLEdBQTJCRCxFQUFFRSxLQUF4Qzs7QUFFQSxVQUFJLENBQUNMLElBQUwsRUFBVztBQUNUO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQUlNLGVBQWUsQ0FBQyxDQUFELEVBQUksRUFBSixDQUFuQjtBQUNBLFVBQUlOLFFBQVEsRUFBUixJQUFjTSxhQUFhQyxPQUFiLENBQXFCUCxJQUFyQixLQUE4QixDQUFDLENBQWpELEVBQW9EO0FBQ2xELGNBQUtRLGNBQUw7QUFDRDtBQUNGLEtBaEJEO0FBaUJELEc7O0FBRUQ7Ozs7Ozt5Q0FJQUEsYyw2QkFBaUI7QUFBQTs7QUFDZjtBQUNBLFFBQUksS0FBS2YsUUFBTCxLQUFrQixJQUF0QixFQUE0QjtBQUMxQjtBQUNBUSxhQUFPUSxZQUFQLENBQW9CLEtBQUtoQixRQUF6QjtBQUNEOztBQUVELFNBQUtBLFFBQUwsR0FBZ0JRLE9BQU9TLFVBQVAsQ0FBa0IsWUFBTTtBQUN0QyxVQUFJUixRQUFRUyxnQkFBSUMsaUJBQUosQ0FBc0IsUUFBdEIsRUFBZ0MsRUFBRUMsU0FBUyxJQUFYLEVBQWhDLENBQVo7O0FBRUEsYUFBS3RCLE9BQUwsQ0FBYXVCLGFBQWIsQ0FBMkJaLEtBQTNCO0FBQ0QsS0FKZSxFQUliLEtBQUtWLGFBSlEsQ0FBaEI7QUFLRCxHOzs7WUFsRE11QixNLEdBQVMsQ0FBQ0MsT0FBRCxDIiwiZmlsZSI6InR5cGluZy10cmlnZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9NIH0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5jb25zdCBERUZBVUxUX0RFQk9VTkNFID0gNTAwO1xuXG5leHBvcnQgY2xhc3MgVHlwaW5nVHJpZ2dlckN1c3RvbUF0dHJpYnV0ZSB7XG4gICAgc3RhdGljIGluamVjdCA9IFtFbGVtZW50XTtcbiAgICBfZGVib3VuY2VUaW1lID0gREVGQVVMVF9ERUJPVU5DRTtcbiAgICBfdGltZW91dCA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIHZhbHVlQ2hhbmdlZChkZWJvdW5jZSkge1xuICAgICAgaWYgKHR5cGVvZiBkZWJvdW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIWlzTmFOKHBhcnNlSW50KGRlYm91bmNlLCAxMCkpKSB7XG4gICAgICAgIHRoaXMuX2RlYm91bmNlVGltZSA9IHBhcnNlSW50KGRlYm91bmNlLCAxMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAgICAgbGV0IGNvZGUgPSB3aW5kb3cuZXZlbnQgPyBlLmtleUNvZGUgOiBlLndoaWNoO1xuXG4gICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1vc3Qga2V5cyBiZWxvdyA0NiB3ZSB3YW50IHRvIGlnbm9yZSBiZWNhdXNlIHRoZXkncmUgc2hpZnQsIGVuZCxcbiAgICAgICAgLy8gaG9tZSwgYW5kIHRoZSBsaWtlLiA0NiBpcyBkZWxldGUsIGFib3ZlIDQ4IGFyZSBhbHBoYW51bWVyaWMuXG4gICAgICAgIC8vIFdlIGFsc28gaGF2ZSBhIGZldyBjb2RlcyBiZWxvdyA0NiB0aGF0IHdlIGNhcmUgYWJvdXQsIHN1Y2ggYXNcbiAgICAgICAgLy8gYmFja3NwYWNlIGFuZCBzcGFjZWJhci5cbiAgICAgICAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvS2V5Ym9hcmRFdmVudC9rZXlDb2RlXG4gICAgICAgIGxldCBzcGVjaWFsQ29kZXMgPSBbOCwgMzJdO1xuICAgICAgICBpZiAoY29kZSA+PSA0NiB8fCBzcGVjaWFsQ29kZXMuaW5kZXhPZihjb2RlKSAhPSAtMSkge1xuICAgICAgICAgIHRoaXMuX3RyaWdnZXJUeXBpbmcoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGEgdGltZW91dCBmb3IgdGhlIHR5cGluZyBldmVudCB0byBiZSBkaXNwYXRjaGVkXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfdHJpZ2dlclR5cGluZygpIHtcbiAgICAgIC8vIElmIHRoZXJlIGlzIGEgY3VycmVudCB0aW1lb3V0IHNldCB0byBkaXNwYXRjaCB0ZWggZXZlbnRcbiAgICAgIGlmICh0aGlzLl90aW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgIC8vIFRoZW4gY2FuY2VsIGl0XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBldmVudCA9IERPTS5jcmVhdGVDdXN0b21FdmVudCgndHlwaW5nJywgeyBidWJibGVzOiB0cnVlIH0pO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIH0sIHRoaXMuX2RlYm91bmNlVGltZSk7XG4gICAgfVxufVxuIl19
