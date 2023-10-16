export default class Settings {
  constructor() {
    this.default = new Map();

    this.default.set('theme', 'dark');
    this.default.set('music', 'trance');
    this.default.set('difficulty', 'easy');
  }
}
