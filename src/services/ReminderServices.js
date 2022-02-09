const Reminder = require("../models/ReminderModel");

class ReminderService {
  async findOne(data) {
    return await Reminder.findOne(data);
  }

  async register(data) {
    const res = await Reminder.create(data);
    return await res.toJSON();
  }

  async findAndFilter({ user, after }) {
    user = user ? { user } : {};

    let modelFilter = { ...user };
    let data = await Reminder.find(
      modelFilter,
      "-__v -updatedAt -createdAt _id"
    );

    if (data.length && after) {
      data = await data.filter((item) => {
        const date = item.date;
        const milliTime = new Date(date);

        return after >= milliTime || after == date;
      });
    }

    return data;
  }

  async findByProviderId(id) {
    return await Reminder.find(
      { providerId: id },
      "-__v -createdAt -updatedAt"
    ).lean();
  }
}

module.exports = new ReminderService();
