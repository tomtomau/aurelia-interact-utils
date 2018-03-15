var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_DEBOUNCE = 500;

export var TypingTriggerCustomAttribute = (_temp = _class = function () {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGluZy10cmlnZ2VyLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfREVCT1VOQ0UiLCJUeXBpbmdUcmlnZ2VyQ3VzdG9tQXR0cmlidXRlIiwiZWxlbWVudCIsIl9kZWJvdW5jZVRpbWUiLCJfdGltZW91dCIsInZhbHVlQ2hhbmdlZCIsImRlYm91bmNlIiwiaXNOYU4iLCJwYXJzZUludCIsImF0dGFjaGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvZGUiLCJ3aW5kb3ciLCJldmVudCIsImUiLCJrZXlDb2RlIiwid2hpY2giLCJfdHJpZ2dlclR5cGluZyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJkaXNwYXRjaEV2ZW50IiwiaW5qZWN0IiwiRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLG1CQUFtQixHQUF6Qjs7QUFFQSxXQUFhQyw0QkFBYjtBQUtJLHdDQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQUEsU0FIckJDLGFBR3FCLEdBSExILGdCQUdLO0FBQUEsU0FGckJJLFFBRXFCLEdBRlYsSUFFVTs7QUFDbkIsU0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7O0FBUEwseUNBU0lHLFlBVEoseUJBU2lCQyxRQVRqQixFQVMyQjtBQUNyQixRQUFJLE9BQU9BLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUMsQ0FBQ0MsTUFBTUMsU0FBU0YsUUFBVCxFQUFtQixFQUFuQixDQUFOLENBQXhDLEVBQXVFO0FBQ3JFLFdBQUtILGFBQUwsR0FBcUJLLFNBQVNGLFFBQVQsRUFBbUIsRUFBbkIsQ0FBckI7QUFDRDtBQUNGLEdBYkw7O0FBQUEseUNBZUlHLFFBZkosdUJBZWU7QUFBQTs7QUFDVCxTQUFLUCxPQUFMLENBQWFRLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLGFBQUs7QUFDMUMsVUFBSUMsT0FBT0MsT0FBT0MsS0FBUCxHQUFlQyxFQUFFQyxPQUFqQixHQUEyQkQsRUFBRUUsS0FBeEM7O0FBRUEsVUFBSSxDQUFDTCxJQUFMLEVBQVc7QUFDVDtBQUNEOztBQUVEO0FBQ0EsVUFBSUEsT0FBTyxFQUFYLEVBQWU7QUFDYixjQUFLTSxjQUFMO0FBQ0Q7QUFDRixLQVhEO0FBWUQsR0E1Qkw7O0FBOEJJOzs7Ozs7QUE5QkoseUNBa0NJQSxjQWxDSiw2QkFrQ3FCO0FBQUE7O0FBQ2Y7QUFDQSxRQUFJLEtBQUtiLFFBQUwsS0FBa0IsSUFBdEIsRUFBNEI7QUFDMUI7QUFDQVEsYUFBT00sWUFBUCxDQUFvQixLQUFLZCxRQUF6QjtBQUNEOztBQUVELFNBQUtBLFFBQUwsR0FBZ0JRLE9BQU9PLFVBQVAsQ0FBa0IsWUFBTTtBQUN0QyxVQUFJTixRQUFRLElBQUlPLFdBQUosQ0FBZ0IsUUFBaEIsRUFBMEIsRUFBRUMsU0FBUyxJQUFYLEVBQTFCLENBQVo7O0FBRUEsYUFBS25CLE9BQUwsQ0FBYW9CLGFBQWIsQ0FBMkJULEtBQTNCO0FBQ0QsS0FKZSxFQUliLEtBQUtWLGFBSlEsQ0FBaEI7QUFLRCxHQTlDTDs7QUFBQTtBQUFBLFlBQ1dvQixNQURYLEdBQ29CLENBQUNDLE9BQUQsQ0FEcEIiLCJmaWxlIjoidHlwaW5nLXRyaWdnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBERUZBVUxUX0RFQk9VTkNFID0gNTAwO1xuXG5leHBvcnQgY2xhc3MgVHlwaW5nVHJpZ2dlckN1c3RvbUF0dHJpYnV0ZSB7XG4gICAgc3RhdGljIGluamVjdCA9IFtFbGVtZW50XTtcbiAgICBfZGVib3VuY2VUaW1lID0gREVGQVVMVF9ERUJPVU5DRTtcbiAgICBfdGltZW91dCA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIHZhbHVlQ2hhbmdlZChkZWJvdW5jZSkge1xuICAgICAgaWYgKHR5cGVvZiBkZWJvdW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIWlzTmFOKHBhcnNlSW50KGRlYm91bmNlLCAxMCkpKSB7XG4gICAgICAgIHRoaXMuX2RlYm91bmNlVGltZSA9IHBhcnNlSW50KGRlYm91bmNlLCAxMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAgICAgbGV0IGNvZGUgPSB3aW5kb3cuZXZlbnQgPyBlLmtleUNvZGUgOiBlLndoaWNoO1xuXG4gICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEBUT0RPOiBFeHBsYWluIGtleWNvZGVzXG4gICAgICAgIGlmIChjb2RlID4gMzUpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyVHlwaW5nKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhIHRpbWVvdXQgZm9yIHRoZSB0eXBpbmcgZXZlbnQgdG8gYmUgZGlzcGF0Y2hlZFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3RyaWdnZXJUeXBpbmcoKSB7XG4gICAgICAvLyBJZiB0aGVyZSBpcyBhIGN1cnJlbnQgdGltZW91dCBzZXQgdG8gZGlzcGF0Y2ggdGVoIGV2ZW50XG4gICAgICBpZiAodGhpcy5fdGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgICAvLyBUaGVuIGNhbmNlbCBpdFxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl90aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3R5cGluZycsIHsgYnViYmxlczogdHJ1ZSB9KTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICB9LCB0aGlzLl9kZWJvdW5jZVRpbWUpO1xuICAgIH1cbn1cbiJdfQ==
