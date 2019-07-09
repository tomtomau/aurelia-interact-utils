import { DOM } from 'aurelia-pal';

const DEFAULT_DEBOUNCE = 500;

export class TypingTriggerCustomAttribute {
    static inject = [Element];
    _debounceTime = DEFAULT_DEBOUNCE;
    _timeout = null;

    constructor(element) {
      this.element = element;
    }

    valueChanged(debounce) {
      if (typeof debounce !== 'undefined' && !isNaN(parseInt(debounce, 10))) {
        this._debounceTime = parseInt(debounce, 10);
      }
    }

    attached() {
      this.element.addEventListener('keyup', e => {
        let code = window.event ? e.keyCode : e.which;

        if (!code) {
          return;
        }

        // Most keys below 46 we want to ignore because they're shift, end,
        // home, and the like. 46 is delete, above 48 are alphanumeric.
        // We also have a few codes below 46 that we care about, such as
        // backspace and spacebar.
        // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
        let specialCodes = [8, 32];
        if (code >= 46 || specialCodes.indexOf(code) != -1) {
          this._triggerTyping();
        }
      });
    }

    /**
     * Set a timeout for the typing event to be dispatched
     * @private
     */
    _triggerTyping() {
      // If there is a current timeout set to dispatch teh event
      if (this._timeout !== null) {
        // Then cancel it
        window.clearTimeout(this._timeout);
      }

      this._timeout = window.setTimeout(() => {
        let event = DOM.createCustomEvent('typing', { bubbles: true });

        this.element.dispatchEvent(event);
      }, this._debounceTime);
    }
}
