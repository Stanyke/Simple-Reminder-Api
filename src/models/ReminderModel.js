const { model, Schema } = require("mongoose");

const ReminderSchema = new Schema(
  {
    id: { type: Number },
    user: { type: Number, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true },
  {
    toJSON: { virtuals: true },
  }
);

// Used when the reminder object need to be destructured as in ...reminder._doc
// instead use ...reminder.toJSON()
ReminderSchema.methods.toJSON = function () {
  const reminder = this;
  const reminderObject = reminder.toObject();

  delete reminderObject.__v;
  delete reminderObject._id;
  delete reminderObject.createdAt;
  delete reminderObject.updatedAt;

  return reminderObject;
};

//Auto increment of object id
ReminderSchema.pre("save", async function (next) {
  let docs = this;
  if (this.isNew) {
    const counter = await model("Reminder", ReminderSchema).countDocuments();
    docs.id = counter + 1;
    next();
  }
});

const reminder = model("Reminder", ReminderSchema);
module.exports = reminder;
