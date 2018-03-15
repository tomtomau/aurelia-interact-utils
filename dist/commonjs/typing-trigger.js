'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class, _temp;

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
      var event = new CustomEvent('typing', { bubbles: true });

      _this2.element.dispatchEvent(event);
    }, this._debounceTime);
  };

  return TypingTriggerCustomAttribute;
}(), _class.inject = [Element], _temp);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGluZy10cmlnZ2VyLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfREVCT1VOQ0UiLCJUeXBpbmdUcmlnZ2VyQ3VzdG9tQXR0cmlidXRlIiwiZWxlbWVudCIsIl9kZWJvdW5jZVRpbWUiLCJfdGltZW91dCIsInZhbHVlQ2hhbmdlZCIsImRlYm91bmNlIiwiaXNOYU4iLCJwYXJzZUludCIsImF0dGFjaGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvZGUiLCJ3aW5kb3ciLCJldmVudCIsImUiLCJrZXlDb2RlIiwid2hpY2giLCJfdHJpZ2dlclR5cGluZyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJkaXNwYXRjaEV2ZW50IiwiaW5qZWN0IiwiRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQU1BLG1CQUFtQixHQUF6Qjs7SUFFYUMsNEIsV0FBQUEsNEI7QUFLVCx3Q0FBWUMsT0FBWixFQUFxQjtBQUFBOztBQUFBLFNBSHJCQyxhQUdxQixHQUhMSCxnQkFHSztBQUFBLFNBRnJCSSxRQUVxQixHQUZWLElBRVU7O0FBQ25CLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzt5Q0FFREcsWSx5QkFBYUMsUSxFQUFVO0FBQ3JCLFFBQUksT0FBT0EsUUFBUCxLQUFvQixXQUFwQixJQUFtQyxDQUFDQyxNQUFNQyxTQUFTRixRQUFULEVBQW1CLEVBQW5CLENBQU4sQ0FBeEMsRUFBdUU7QUFDckUsV0FBS0gsYUFBTCxHQUFxQkssU0FBU0YsUUFBVCxFQUFtQixFQUFuQixDQUFyQjtBQUNEO0FBQ0YsRzs7eUNBRURHLFEsdUJBQVc7QUFBQTs7QUFDVCxTQUFLUCxPQUFMLENBQWFRLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLGFBQUs7QUFDMUMsVUFBSUMsT0FBT0MsT0FBT0MsS0FBUCxHQUFlQyxFQUFFQyxPQUFqQixHQUEyQkQsRUFBRUUsS0FBeEM7O0FBRUEsVUFBSSxDQUFDTCxJQUFMLEVBQVc7QUFDVDtBQUNEOztBQUVEO0FBQ0EsVUFBSUEsT0FBTyxFQUFYLEVBQWU7QUFDYixjQUFLTSxjQUFMO0FBQ0Q7QUFDRixLQVhEO0FBWUQsRzs7QUFFRDs7Ozs7O3lDQUlBQSxjLDZCQUFpQjtBQUFBOztBQUNmO0FBQ0EsUUFBSSxLQUFLYixRQUFMLEtBQWtCLElBQXRCLEVBQTRCO0FBQzFCO0FBQ0FRLGFBQU9NLFlBQVAsQ0FBb0IsS0FBS2QsUUFBekI7QUFDRDs7QUFFRCxTQUFLQSxRQUFMLEdBQWdCUSxPQUFPTyxVQUFQLENBQWtCLFlBQU07QUFDdEMsVUFBSU4sUUFBUSxJQUFJTyxXQUFKLENBQWdCLFFBQWhCLEVBQTBCLEVBQUVDLFNBQVMsSUFBWCxFQUExQixDQUFaOztBQUVBLGFBQUtuQixPQUFMLENBQWFvQixhQUFiLENBQTJCVCxLQUEzQjtBQUNELEtBSmUsRUFJYixLQUFLVixhQUpRLENBQWhCO0FBS0QsRzs7O1lBN0NNb0IsTSxHQUFTLENBQUNDLE9BQUQsQyIsImZpbGUiOiJ0eXBpbmctdHJpZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERFRkFVTFRfREVCT1VOQ0UgPSA1MDA7XG5cbmV4cG9ydCBjbGFzcyBUeXBpbmdUcmlnZ2VyQ3VzdG9tQXR0cmlidXRlIHtcbiAgICBzdGF0aWMgaW5qZWN0ID0gW0VsZW1lbnRdO1xuICAgIF9kZWJvdW5jZVRpbWUgPSBERUZBVUxUX0RFQk9VTkNFO1xuICAgIF90aW1lb3V0ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdmFsdWVDaGFuZ2VkKGRlYm91bmNlKSB7XG4gICAgICBpZiAodHlwZW9mIGRlYm91bmNlICE9PSAndW5kZWZpbmVkJyAmJiAhaXNOYU4ocGFyc2VJbnQoZGVib3VuY2UsIDEwKSkpIHtcbiAgICAgICAgdGhpcy5fZGVib3VuY2VUaW1lID0gcGFyc2VJbnQoZGVib3VuY2UsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgICBsZXQgY29kZSA9IHdpbmRvdy5ldmVudCA/IGUua2V5Q29kZSA6IGUud2hpY2g7XG5cbiAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQFRPRE86IEV4cGxhaW4ga2V5Y29kZXNcbiAgICAgICAgaWYgKGNvZGUgPiAzNSkge1xuICAgICAgICAgIHRoaXMuX3RyaWdnZXJUeXBpbmcoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGEgdGltZW91dCBmb3IgdGhlIHR5cGluZyBldmVudCB0byBiZSBkaXNwYXRjaGVkXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfdHJpZ2dlclR5cGluZygpIHtcbiAgICAgIC8vIElmIHRoZXJlIGlzIGEgY3VycmVudCB0aW1lb3V0IHNldCB0byBkaXNwYXRjaCB0ZWggZXZlbnRcbiAgICAgIGlmICh0aGlzLl90aW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgIC8vIFRoZW4gY2FuY2VsIGl0XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgndHlwaW5nJywgeyBidWJibGVzOiB0cnVlIH0pO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIH0sIHRoaXMuX2RlYm91bmNlVGltZSk7XG4gICAgfVxufVxuIl19
