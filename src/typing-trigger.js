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

        // @TODO: Explain keycodes
        if (code > 35) {
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
