const ReminderService = require("../services/ReminderServices");
const { appResponse } = require("../../lib/appResponse");
const { MSG_TYPES } = require("../../constants/types");

class ReminderCtrl {
  //Create a reminder
  async register(req, res) {
    try {
      const data = await ReminderService.register(req.body);

      return appResponse(res, 201, MSG_TYPES.CREATED, data);
    } catch (err) {
      return appResponse(res, 500, MSG_TYPES.SERVER_ERROR(err));
    }
  }

  async getAndFilter(req, res) {
    try {
      const data = await ReminderService.findAndFilter(req.query);
      return appResponse(res, 200, MSG_TYPES.FETCHED, data);
    } catch (err) {
      return appResponse(res, 500, MSG_TYPES.SERVER_ERROR(err));
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const data = await ReminderService.findOne({ id });
      if (!data) return appResponse(res, 404, MSG_TYPES.ID_NOT_FOUND);
      return appResponse(res, 200, MSG_TYPES.FETCHED, data.toJSON());
    } catch (err) {
      return appResponse(res, 500, MSG_TYPES.SERVER_ERROR(err));
    }
  }

  async blockResource(req, res) {
    return appResponse(res, 405, MSG_TYPES.NOT_ALLOWED);
  }
}

module.exports = new ReminderCtrl();
