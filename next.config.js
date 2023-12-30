const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    scope: "/app",
    sw: "sw.js",
});

module.exports = withPWA({
    reactStrictMode: true,
});