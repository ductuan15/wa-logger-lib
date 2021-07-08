import { LogLevel } from './WALoggerOptions';
class WALogger {
    /**
    *  Create new logger with option
    *
    *  @param {string} level level of logger
    *  @param {string} timeLocale time locale when log
    *
    */
    constructor(loggerOption) {
        this.loggerOption = {
            level: loggerOption?.level || "info",
            timeLocale: loggerOption?.timeLocale || "en-GB"
        };
        this.loggerData = {
            email: ""
        };
    }
    ;
    /**
     * Logs line if log level is `info` or `debug`
    */
    log(message) {
        this.loggerInvoke(message, "info");
    }
    ;
    /**
     * Logs line if log level is `debug`
     */
    debug(message) {
        this.loggerInvoke(message, "debug");
    }
    ;
    /**
     * Sends messgae to `console.error`
    */
    error(message) {
        this.loggerInvoke(message);
    }
    ;
    /**
    *  Set email for logger
    */
    setUserEmail(email) {
        this.loggerData.email = email;
    }
    ;
    /**
    *  Set level for logger
    *
    */
    setLoggerLevel(loggerLevel) {
        this.loggerOption.level = loggerLevel;
    }
    ;
    createLogStr(message) {
        const curTime = new Date();
        return `[${this.loggerData.email} - ${curTime.toLocaleString(this.loggerOption.timeLocale)}]:${message}`;
    }
    writeConsole(logStr, isError = false) {
        if (isError)
            console.error(logStr);
        else
            console.log(logStr);
    }
    ;
    loggerInvoke(message, logInvokeLevel) {
        const logStr = this.createLogStr(message);
        if (!logInvokeLevel) {
            this.writeConsole(logStr, true);
        }
        else if (LogLevel[this.loggerOption.level] <= LogLevel[logInvokeLevel]) {
            this.writeConsole(logStr);
        }
    }
}
export default WALogger;
