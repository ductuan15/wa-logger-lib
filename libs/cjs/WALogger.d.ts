import WALoggerOption, { LogLevel } from './WALoggerOptions';
declare class WALogger {
    private loggerOption;
    private loggerData;
    /**
    *  Create new logger with option
    *
    *  @param {string} level level of logger
    *  @param {string} timeLocale time locale when log
    *
    */
    constructor(loggerOption?: WALoggerOption);
    /**
     * Logs line if log level is `info` or `debug`
    */
    log(message: string): void;
    /**
     * Logs line if log level is `debug`
     */
    debug(message: string): void;
    /**
     * Sends messgae to `console.error`
    */
    error(message: string): void;
    /**
    *  Set email for logger
    */
    setUserEmail(email: string): void;
    /**
    *  Set level for logger
    *
    */
    setLoggerLevel(loggerLevel: keyof typeof LogLevel): void;
    private createLogStr;
    private writeConsole;
    private loggerInvoke;
}
export default WALogger;
