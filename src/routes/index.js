const reminderRoutes = require('./ReminderRoutes');
module.exports = (router) => {
    router.use('/api/v1', reminderRoutes())

    return router;
}