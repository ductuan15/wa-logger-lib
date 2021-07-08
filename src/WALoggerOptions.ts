
export default interface WALoggerOption {
    level: keyof typeof LogLevel;
    timeLocale?: string;
}

// Log Level
export enum LogLevel {
    debug = 1,
    info,
}
class A {
    x: number = 4;
}
