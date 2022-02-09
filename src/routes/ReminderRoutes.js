const router = require("express").Router();
const reminderCtrl = require("../controllers/ReminderController");
const joiValidator = require("../validators/index");
const {
  ReminderRegistrationSchema,
  FilterReminderSchema,
  ReminderIdSchema,
} = require("../validators/ReminderSchema");

module.exports = function () {
  router.post(
    "/reminders",
    joiValidator(ReminderRegistrationSchema),
    reminderCtrl.register
  );

  router.get(
    "/reminders",
    joiValidator(FilterReminderSchema, "query"),
    reminderCtrl.getAndFilter
  );

  router.get(
    "/reminders/:id",
    joiValidator(ReminderIdSchema, "params"),
    reminderCtrl.getById
  );

  router.delete(
    "/reminders/:id",
    joiValidator(ReminderIdSchema, "params"),
    reminderCtrl.blockResource
  );

  router.put(
    "/reminders/:id",
    joiValidator(ReminderIdSchema, "params"),
    reminderCtrl.blockResource
  );

  router.patch(
    "/reminders/:id",
    joiValidator(ReminderIdSchema, "params"),
    reminderCtrl.blockResource
  );

  return router;
};
