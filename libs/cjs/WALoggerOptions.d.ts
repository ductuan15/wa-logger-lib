export default interface WALoggerOption {
    level: keyof typeof LogLevel;
    timeLocale?: string;
}
export declare enum LogLevel {
    debug = 1,
    info = 2
}
