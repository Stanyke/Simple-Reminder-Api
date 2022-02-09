const Joi = require("joi");

const ReminderRegistrationSchema = Joi.object({
  user: Joi.number().required(),
  description: Joi.string().required(),
  date: Joi.string().required(),
});

const ReminderIdSchema = Joi.object({
  id: Joi.string().required(),
});

const FilterReminderSchema = Joi.object({
  user: Joi.string(),
  after: Joi.string(),
});

module.exports = {
  ReminderRegistrationSchema,
  ReminderIdSchema,
  FilterReminderSchema,
};
