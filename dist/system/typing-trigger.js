'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var _class, _temp, DEFAULT_DEBOUNCE, TypingTriggerCustomAttribute;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      DEFAULT_DEBOUNCE = 500;

      _export('TypingTriggerCustomAttribute', TypingTriggerCustomAttribute = (_temp = _class = function () {
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

        TypingTriggerCustomAttribute.prototype._triggerTyping = function _triggerTyping() {
          var _this2 = this;

          // If there is a current timeout set to dispatch teh event
          if (this._timeout !== null) {
            // Then cancel it
            window.clearTimeout(this._timeout);
          }

          this._timeout = window.setTimeout(function () {
            var event = new CustomEvent('typing', { bubbles: true });

            _this2.element.dispatchEvent(event);
          }, this._debounceTime);
        };

        return TypingTriggerCustomAttribute;
      }(), _class.inject = [Element], _temp));

      _export('TypingTriggerCustomAttribute', TypingTriggerCustomAttribute);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGluZy10cmlnZ2VyLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfREVCT1VOQ0UiLCJUeXBpbmdUcmlnZ2VyQ3VzdG9tQXR0cmlidXRlIiwiZWxlbWVudCIsIl9kZWJvdW5jZVRpbWUiLCJfdGltZW91dCIsInZhbHVlQ2hhbmdlZCIsImRlYm91bmNlIiwiaXNOYU4iLCJwYXJzZUludCIsImF0dGFjaGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvZGUiLCJ3aW5kb3ciLCJldmVudCIsImUiLCJrZXlDb2RlIiwid2hpY2giLCJfdHJpZ2dlclR5cGluZyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJkaXNwYXRjaEV2ZW50IiwiaW5qZWN0IiwiRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNQSxzQixHQUFtQixHOzs4Q0FFWkMsNEI7QUFLVCw4Q0FBWUMsT0FBWixFQUFxQjtBQUFBOztBQUFBLGVBSHJCQyxhQUdxQixHQUhMSCxnQkFHSztBQUFBLGVBRnJCSSxRQUVxQixHQUZWLElBRVU7O0FBQ25CLGVBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzsrQ0FFREcsWSx5QkFBYUMsUSxFQUFVO0FBQ3JCLGNBQUksT0FBT0EsUUFBUCxLQUFvQixXQUFwQixJQUFtQyxDQUFDQyxNQUFNQyxTQUFTRixRQUFULEVBQW1CLEVBQW5CLENBQU4sQ0FBeEMsRUFBdUU7QUFDckUsaUJBQUtILGFBQUwsR0FBcUJLLFNBQVNGLFFBQVQsRUFBbUIsRUFBbkIsQ0FBckI7QUFDRDtBQUNGLFM7OytDQUVERyxRLHVCQUFXO0FBQUE7O0FBQ1QsZUFBS1AsT0FBTCxDQUFhUSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxhQUFLO0FBQzFDLGdCQUFJQyxPQUFPQyxPQUFPQyxLQUFQLEdBQWVDLEVBQUVDLE9BQWpCLEdBQTJCRCxFQUFFRSxLQUF4Qzs7QUFFQSxnQkFBSSxDQUFDTCxJQUFMLEVBQVc7QUFDVDtBQUNEOztBQUVEO0FBQ0EsZ0JBQUlBLE9BQU8sRUFBWCxFQUFlO0FBQ2Isb0JBQUtNLGNBQUw7QUFDRDtBQUNGLFdBWEQ7QUFZRCxTOzsrQ0FNREEsYyw2QkFBaUI7QUFBQTs7QUFDZjtBQUNBLGNBQUksS0FBS2IsUUFBTCxLQUFrQixJQUF0QixFQUE0QjtBQUMxQjtBQUNBUSxtQkFBT00sWUFBUCxDQUFvQixLQUFLZCxRQUF6QjtBQUNEOztBQUVELGVBQUtBLFFBQUwsR0FBZ0JRLE9BQU9PLFVBQVAsQ0FBa0IsWUFBTTtBQUN0QyxnQkFBSU4sUUFBUSxJQUFJTyxXQUFKLENBQWdCLFFBQWhCLEVBQTBCLEVBQUVDLFNBQVMsSUFBWCxFQUExQixDQUFaOztBQUVBLG1CQUFLbkIsT0FBTCxDQUFhb0IsYUFBYixDQUEyQlQsS0FBM0I7QUFDRCxXQUplLEVBSWIsS0FBS1YsYUFKUSxDQUFoQjtBQUtELFM7OztrQkE3Q01vQixNLEdBQVMsQ0FBQ0MsT0FBRCxDIiwiZmlsZSI6InR5cGluZy10cmlnZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgREVGQVVMVF9ERUJPVU5DRSA9IDUwMDtcblxuZXhwb3J0IGNsYXNzIFR5cGluZ1RyaWdnZXJDdXN0b21BdHRyaWJ1dGUge1xuICAgIHN0YXRpYyBpbmplY3QgPSBbRWxlbWVudF07XG4gICAgX2RlYm91bmNlVGltZSA9IERFRkFVTFRfREVCT1VOQ0U7XG4gICAgX3RpbWVvdXQgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICB2YWx1ZUNoYW5nZWQoZGVib3VuY2UpIHtcbiAgICAgIGlmICh0eXBlb2YgZGVib3VuY2UgIT09ICd1bmRlZmluZWQnICYmICFpc05hTihwYXJzZUludChkZWJvdW5jZSwgMTApKSkge1xuICAgICAgICB0aGlzLl9kZWJvdW5jZVRpbWUgPSBwYXJzZUludChkZWJvdW5jZSwgMTApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICAgIGxldCBjb2RlID0gd2luZG93LmV2ZW50ID8gZS5rZXlDb2RlIDogZS53aGljaDtcblxuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBAVE9ETzogRXhwbGFpbiBrZXljb2Rlc1xuICAgICAgICBpZiAoY29kZSA+IDM1KSB7XG4gICAgICAgICAgdGhpcy5fdHJpZ2dlclR5cGluZygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYSB0aW1lb3V0IGZvciB0aGUgdHlwaW5nIGV2ZW50IHRvIGJlIGRpc3BhdGNoZWRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF90cmlnZ2VyVHlwaW5nKCkge1xuICAgICAgLy8gSWYgdGhlcmUgaXMgYSBjdXJyZW50IHRpbWVvdXQgc2V0IHRvIGRpc3BhdGNoIHRlaCBldmVudFxuICAgICAgaWYgKHRoaXMuX3RpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgLy8gVGhlbiBjYW5jZWwgaXRcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd0eXBpbmcnLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgfSwgdGhpcy5fZGVib3VuY2VUaW1lKTtcbiAgICB9XG59XG4iXX0=
