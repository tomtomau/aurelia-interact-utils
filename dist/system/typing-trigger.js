'use strict';

System.register(['aurelia-pal'], function (_export, _context) {
  "use strict";

  var DOM, _class, _temp, DEFAULT_DEBOUNCE, TypingTriggerCustomAttribute;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }],
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

        TypingTriggerCustomAttribute.prototype._triggerTyping = function _triggerTyping() {
          var _this2 = this;

          // If there is a current timeout set to dispatch teh event
          if (this._timeout !== null) {
            // Then cancel it
            window.clearTimeout(this._timeout);
          }

          this._timeout = window.setTimeout(function () {
            var event = DOM.createCustomEvent('typing', { bubbles: true });

            _this2.element.dispatchEvent(event);
          }, this._debounceTime);
        };

        return TypingTriggerCustomAttribute;
      }(), _class.inject = [Element], _temp));

      _export('TypingTriggerCustomAttribute', TypingTriggerCustomAttribute);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGluZy10cmlnZ2VyLmpzIl0sIm5hbWVzIjpbIkRPTSIsIkRFRkFVTFRfREVCT1VOQ0UiLCJUeXBpbmdUcmlnZ2VyQ3VzdG9tQXR0cmlidXRlIiwiZWxlbWVudCIsIl9kZWJvdW5jZVRpbWUiLCJfdGltZW91dCIsInZhbHVlQ2hhbmdlZCIsImRlYm91bmNlIiwiaXNOYU4iLCJwYXJzZUludCIsImF0dGFjaGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvZGUiLCJ3aW5kb3ciLCJldmVudCIsImUiLCJrZXlDb2RlIiwid2hpY2giLCJzcGVjaWFsQ29kZXMiLCJpbmRleE9mIiwiX3RyaWdnZXJUeXBpbmciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY3JlYXRlQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiZGlzcGF0Y2hFdmVudCIsImluamVjdCIsIkVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxTLGVBQUFBLEc7OztBQUVIQyxzQixHQUFtQixHOzs4Q0FFWkMsNEI7QUFLVCw4Q0FBWUMsT0FBWixFQUFxQjtBQUFBOztBQUFBLGVBSHJCQyxhQUdxQixHQUhMSCxnQkFHSztBQUFBLGVBRnJCSSxRQUVxQixHQUZWLElBRVU7O0FBQ25CLGVBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzsrQ0FFREcsWSx5QkFBYUMsUSxFQUFVO0FBQ3JCLGNBQUksT0FBT0EsUUFBUCxLQUFvQixXQUFwQixJQUFtQyxDQUFDQyxNQUFNQyxTQUFTRixRQUFULEVBQW1CLEVBQW5CLENBQU4sQ0FBeEMsRUFBdUU7QUFDckUsaUJBQUtILGFBQUwsR0FBcUJLLFNBQVNGLFFBQVQsRUFBbUIsRUFBbkIsQ0FBckI7QUFDRDtBQUNGLFM7OytDQUVERyxRLHVCQUFXO0FBQUE7O0FBQ1QsZUFBS1AsT0FBTCxDQUFhUSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxhQUFLO0FBQzFDLGdCQUFJQyxPQUFPQyxPQUFPQyxLQUFQLEdBQWVDLEVBQUVDLE9BQWpCLEdBQTJCRCxFQUFFRSxLQUF4Qzs7QUFFQSxnQkFBSSxDQUFDTCxJQUFMLEVBQVc7QUFDVDtBQUNEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBSU0sZUFBZSxDQUFDLENBQUQsRUFBSSxFQUFKLENBQW5CO0FBQ0EsZ0JBQUlOLFFBQVEsRUFBUixJQUFjTSxhQUFhQyxPQUFiLENBQXFCUCxJQUFyQixLQUE4QixDQUFDLENBQWpELEVBQW9EO0FBQ2xELG9CQUFLUSxjQUFMO0FBQ0Q7QUFDRixXQWhCRDtBQWlCRCxTOzsrQ0FNREEsYyw2QkFBaUI7QUFBQTs7QUFDZjtBQUNBLGNBQUksS0FBS2YsUUFBTCxLQUFrQixJQUF0QixFQUE0QjtBQUMxQjtBQUNBUSxtQkFBT1EsWUFBUCxDQUFvQixLQUFLaEIsUUFBekI7QUFDRDs7QUFFRCxlQUFLQSxRQUFMLEdBQWdCUSxPQUFPUyxVQUFQLENBQWtCLFlBQU07QUFDdEMsZ0JBQUlSLFFBQVFkLElBQUl1QixpQkFBSixDQUFzQixRQUF0QixFQUFnQyxFQUFFQyxTQUFTLElBQVgsRUFBaEMsQ0FBWjs7QUFFQSxtQkFBS3JCLE9BQUwsQ0FBYXNCLGFBQWIsQ0FBMkJYLEtBQTNCO0FBQ0QsV0FKZSxFQUliLEtBQUtWLGFBSlEsQ0FBaEI7QUFLRCxTOzs7a0JBbERNc0IsTSxHQUFTLENBQUNDLE9BQUQsQyIsImZpbGUiOiJ0eXBpbmctdHJpZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPTSB9IGZyb20gJ2F1cmVsaWEtcGFsJztcblxuY29uc3QgREVGQVVMVF9ERUJPVU5DRSA9IDUwMDtcblxuZXhwb3J0IGNsYXNzIFR5cGluZ1RyaWdnZXJDdXN0b21BdHRyaWJ1dGUge1xuICAgIHN0YXRpYyBpbmplY3QgPSBbRWxlbWVudF07XG4gICAgX2RlYm91bmNlVGltZSA9IERFRkFVTFRfREVCT1VOQ0U7XG4gICAgX3RpbWVvdXQgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICB2YWx1ZUNoYW5nZWQoZGVib3VuY2UpIHtcbiAgICAgIGlmICh0eXBlb2YgZGVib3VuY2UgIT09ICd1bmRlZmluZWQnICYmICFpc05hTihwYXJzZUludChkZWJvdW5jZSwgMTApKSkge1xuICAgICAgICB0aGlzLl9kZWJvdW5jZVRpbWUgPSBwYXJzZUludChkZWJvdW5jZSwgMTApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICAgIGxldCBjb2RlID0gd2luZG93LmV2ZW50ID8gZS5rZXlDb2RlIDogZS53aGljaDtcblxuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNb3N0IGtleXMgYmVsb3cgNDYgd2Ugd2FudCB0byBpZ25vcmUgYmVjYXVzZSB0aGV5J3JlIHNoaWZ0LCBlbmQsXG4gICAgICAgIC8vIGhvbWUsIGFuZCB0aGUgbGlrZS4gNDYgaXMgZGVsZXRlLCBhYm92ZSA0OCBhcmUgYWxwaGFudW1lcmljLlxuICAgICAgICAvLyBXZSBhbHNvIGhhdmUgYSBmZXcgY29kZXMgYmVsb3cgNDYgdGhhdCB3ZSBjYXJlIGFib3V0LCBzdWNoIGFzXG4gICAgICAgIC8vIGJhY2tzcGFjZSBhbmQgc3BhY2ViYXIuXG4gICAgICAgIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkRXZlbnQva2V5Q29kZVxuICAgICAgICBsZXQgc3BlY2lhbENvZGVzID0gWzgsIDMyXTtcbiAgICAgICAgaWYgKGNvZGUgPj0gNDYgfHwgc3BlY2lhbENvZGVzLmluZGV4T2YoY29kZSkgIT0gLTEpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyVHlwaW5nKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhIHRpbWVvdXQgZm9yIHRoZSB0eXBpbmcgZXZlbnQgdG8gYmUgZGlzcGF0Y2hlZFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3RyaWdnZXJUeXBpbmcoKSB7XG4gICAgICAvLyBJZiB0aGVyZSBpcyBhIGN1cnJlbnQgdGltZW91dCBzZXQgdG8gZGlzcGF0Y2ggdGVoIGV2ZW50XG4gICAgICBpZiAodGhpcy5fdGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgICAvLyBUaGVuIGNhbmNlbCBpdFxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl90aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgZXZlbnQgPSBET00uY3JlYXRlQ3VzdG9tRXZlbnQoJ3R5cGluZycsIHsgYnViYmxlczogdHJ1ZSB9KTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICB9LCB0aGlzLl9kZWJvdW5jZVRpbWUpO1xuICAgIH1cbn1cbiJdfQ==
