"use strict";
// Simple debug class
class DbgLogger {
    constructor(l) {
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
    logger(s) {
        console.log(s);
    }
    log(l, s) {
        let level = this.levels.get(l);
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
exports.DbgLogger = DbgLogger;
//# sourceMappingURL=DbgLogger.js.map