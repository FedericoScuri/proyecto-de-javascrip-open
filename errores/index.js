const winston = require('winston');

const logger = winston.createLogger({
level: 'info',
format: winston.format.json(),
defaultMeta: { service: 'user-service' },
transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
],
});

// logger.log("hola estoy saliendo")
logger.info("mensaje informativo")
logger.debug("mensaje de debug")
logger.warn("mesaje de advertencvia")
logger.error("error")

function error() {
    throw new Error("esto es un error");
}
try {
    error();
} catch (e) {
    logger.log("error", e.toString());
}