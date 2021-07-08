# Table of content
- Quick start
- Usage
- Logging levels

# Quick start
``` Typescript
import WALogger from "@ductuan15/wa-logger";

//Create new WALogger instance
const logger = new WALogger();

// Set logger level 
// logger level :  "info" | "debug" | scopes_only, default is 'info
logger.setLoggerLevel("info");

// Set email for logger 
logger.setUserEmail("example@gmail.com");

// Log line if logger level is info or debug
logger.log("This is a message")

// Log line if logger level is debug
logger.debug("This is a message")

// Sends log message to console.error
logger.error("This is a message")

```
> [example@gmail.com - 06/07/2021, 16:12:46]:This is message

# Usage
