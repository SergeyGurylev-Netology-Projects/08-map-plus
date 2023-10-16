import SettingsDefault from './settings-default';

export default class Settings {
  constructor() {
    this.settings = new Map();
  }

  set(key, value) {
    this.settings.set(key, value);
  }

  get(key) {
    if (this.settings.has(key)) {
      return this.settings.get(key);
    }

    return new SettingsDefault().default.get(key);
  }
}
