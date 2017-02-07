// Simple debug class
export class DbgLogger {
  private levels: Map<string, string>;
  private level?: string;

  constructor(l: string) {
    this.levels = new Map();
    this.levels.set('wtf', '0');
    this.levels.set('e', '1');
    this.levels.set('w', '2');
    this.levels.set('i', '3');
    this.levels.set('d', '4');
    this.levels.set('v', '5');
    this.levels.set('s', '6');
    this.level = this.levels.get(l);
    if (this.level === null) {
      throw 'DbgLogger: Bad level ' + l;
    }
  }

  private logger(s: string) {
    console.log(s);
  }

  log(l: string, s: string) {
    let level = this.levels.get(l);
    if ((level !== null) && (level <= this.level)) {
      this.logger(s);
    }
  }

  logwtf(s: string) {
    this.log('wtf', s);
  }
  loge(s: string) {
    this.log('e', s);
  }
  logw(s: string) {
    this.log('w', s);
  }
  logi(s: string) {
    this.log('i', s);
  }
  logd(s: string) {
    this.log('d', s);
  }
  logv(s: string) {
    this.log('v', s);
  }
  logs(s: string) {
    this.log('s', s);
  }
}
