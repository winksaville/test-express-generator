export declare class DbgLogger {
    private levels;
    private level?;
    constructor(l: string);
    private logger(s);
    log(l: string, s: string): void;
    logwtf(s: string): void;
    loge(s: string): void;
    logw(s: string): void;
    logi(s: string): void;
    logd(s: string): void;
    logv(s: string): void;
    logs(s: string): void;
}
