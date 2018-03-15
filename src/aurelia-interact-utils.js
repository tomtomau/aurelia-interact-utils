import { PLATFORM } from 'aurelia-pal';

export { TypingTriggerCustomAttribute } from './typing-trigger';

export function configure(config) {
  config.globalResources([
    PLATFORM.moduleName('./typing-trigger')
  ]);
}
