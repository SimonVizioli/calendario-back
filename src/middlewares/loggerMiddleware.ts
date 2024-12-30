import morgan from "morgan";

// Emojis para los diferentes rangos de status HTTP
const getStatusEmoji = (status: number) => {
    if (status >= 500) return "🔥"; // Error del servidor
    if (status >= 400) return "⚠️"; // Error del cliente
    if (status >= 300) return "🔄"; // Redirección
    if (status >= 200) return "✅"; // Éxito
    return "ℹ️"; // Informativo
};

// Middleware de logs
const loggerMiddleware = morgan((tokens, req, res) => {
    const method = tokens.method(req, res) || "UNKNOWN_METHOD";
    const url = tokens.url(req, res) || "UNKNOWN_URL";
    const status = parseInt(tokens.status(req, res) || "500"); // Por defecto, considera 500
    const emoji = getStatusEmoji(status);
    const responseTime = tokens["response-time"](req, res) || "0";
    const date = tokens.date(req, res, "iso") || new Date().toISOString();

    return `[${date}] ${method} ${url} - ${status} ${emoji} (${responseTime} ms)`;
});

export default loggerMiddleware;
