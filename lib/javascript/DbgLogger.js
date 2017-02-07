// Simple debug class
class DbgLogger {
  constructor(l) {
    this.levels = {
      'wtf': '0', // Should never happen
      'e': '1',   // error
      'w': '2',   // warning
      'i': '3',   // info
      'd': '4',   // debug
      'v': '5',   // verbose
      's': '6',   // silly
    };
    this.level = this.levels[l];
    if (this.level === null) {
      throw 'DbgLogger: Bad level ' + l;
    }
  }

  logger(s) {
    console.log(s);
  }

  log(l, s) {
    let level = this.levels[l];
    if ((level !== null) && (level <= this.level)) {
      this.logger(s);
    }
  }

  logwtf(s) {
    this.log('wtf', s);
  }
  loge(s) {
    this.log('e', s);
  }
  logw(s) {
    this.log('w', s);
  }
  logi(s) {
    this.log('i', s);
  }
  logd(s) {
    this.log('d', s);
  }
  logv(s) {
    this.log('v', s);
  }
  logs(s) {
    this.log('s', s);
  }
}

module.exports = DbgLogger;
