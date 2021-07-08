import WALoggerData from './WALoggerData';
import WALoggerOption,{ LogLevel }  from './WALoggerOptions';

class WALogger {
    private loggerOption: WALoggerOption;
    private loggerData: WALoggerData;

    /**
    *  Create new logger with option
    * 
    *  @param {string} level level of logger  
    *  @param {string} timeLocale time locale when log
    * 
    */
    constructor(loggerOption?: WALoggerOption) {
        this.loggerOption ={
            level:loggerOption?.level || "info",
            timeLocale:loggerOption?.timeLocale || "en-GB"
        }
        this.loggerData = {
            email: ""
        }
    };

    /**
     * Logs line if log level is `info` or `debug`
    */

    log(message: string): void {
        this.loggerInvoke(message, "info");
    };

    /**
     * Logs line if log level is `debug`
     */
    debug(message: string): void {
        this.loggerInvoke(message, "debug");
    };

    /**
     * Sends messgae to `console.error`
    */
    error(message: string): void {
        this.loggerInvoke(message);
    };

    /**
    *  Set email for logger
    */

    setUserEmail(email: string): void {
        this.loggerData.email = email;
    };

    /**
    *  Set level for logger
    *  
    */
    setLoggerLevel(loggerLevel: keyof typeof LogLevel) {
        this.loggerOption.level = loggerLevel;
    };


    private createLogStr(message: string): string {
        const curTime = new Date();
        return  `[${this.loggerData.email} - ${curTime.toLocaleString(this.loggerOption.timeLocale)}]:${message}`;
    }

    private writeConsole(logStr: string, isError: boolean = false): void {
        if (isError) console.error(logStr);
        else console.log(logStr);
    };

    private loggerInvoke(message: string, logInvokeLevel?: keyof typeof LogLevel) {
        const logStr = this.createLogStr(message);

        if(!logInvokeLevel){
            this.writeConsole(logStr, true);
        }
        else if (LogLevel[this.loggerOption.level] <= LogLevel[logInvokeLevel]) {
            this.writeConsole(logStr);
        }
    }
}

export default WALogger;

