aurelia-interact-utils
======================

This packages allows you to easily listen to user typing events, because it
filters out key codes which you do not care about.


## Usage

```html
<!-- typing-listener.html -->
<template>
    <input type="text"
        value.bind="text"
        typing-trigger
        typing.delegate="onTyping()"
    >
<template>
```

```javascript
// typing-listener.js
export class TypingListener {
  private text;

  public onTyping(): void {
    console.log(`User entered: ${this.text}`);
  }
}
```

## Building

```sh
$ npm install -g aurelia-cli
$ au build
```
