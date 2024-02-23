module.exports = {
    apps: [{
        name: 'oishii-bot',
        script: './built/index.js',
        max_restarts: 10000,
        restart_delay: 1000
    }]
}