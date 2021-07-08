"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WALoggerOptions_1 = require("./WALoggerOptions");
var WALogger = /** @class */ (function () {
    /**
    *  Create new logger with option
    *
    *  @param {string} level level of logger
    *  @param {string} timeLocale time locale when log
    *
    */
    function WALogger(loggerOption) {
        this.loggerOption = {
            level: (loggerOption === null || loggerOption === void 0 ? void 0 : loggerOption.level) || "info",
            timeLocale: (loggerOption === null || loggerOption === void 0 ? void 0 : loggerOption.timeLocale) || "en-GB"
        };
        this.loggerData = {
            email: ""
        };
    }
    ;
    /**
     * Logs line if log level is `info` or `debug`
    */
    WALogger.prototype.log = function (message) {
        this.loggerInvoke(message, "info");
    };
    ;
    /**
     * Logs line if log level is `debug`
     */
    WALogger.prototype.debug = function (message) {
        this.loggerInvoke(message, "debug");
    };
    ;
    /**
     * Sends messgae to `console.error`
    */
    WALogger.prototype.error = function (message) {
        this.loggerInvoke(message);
    };
    ;
    /**
    *  Set email for logger
    */
    WALogger.prototype.setUserEmail = function (email) {
        this.loggerData.email = email;
    };
    ;
    /**
    *  Set level for logger
    *
    */
    WALogger.prototype.setLoggerLevel = function (loggerLevel) {
        this.loggerOption.level = loggerLevel;
    };
    ;
    WALogger.prototype.createLogStr = function (message) {
        var curTime = new Date();
        return "[" + this.loggerData.email + " - " + curTime.toLocaleString(this.loggerOption.timeLocale) + "]:" + message;
    };
    WALogger.prototype.writeConsole = function (logStr, isError) {
        if (isError === void 0) { isError = false; }
        if (isError)
            console.error(logStr);
        else
            console.log(logStr);
    };
    ;
    WALogger.prototype.loggerInvoke = function (message, logInvokeLevel) {
        var logStr = this.createLogStr(message);
        if (!logInvokeLevel) {
            this.writeConsole(logStr, true);
        }
        else if (WALoggerOptions_1.LogLevel[this.loggerOption.level] <= WALoggerOptions_1.LogLevel[logInvokeLevel]) {
            this.writeConsole(logStr);
        }
    };
    return WALogger;
}());
exports.default = WALogger;
