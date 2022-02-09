const MSG_TYPES = Object.freeze({
  DELETED: "Resource Deleted Successfully",
  UPDATED: "Resource Updated Successfully",
  CREATED: "Resource Created Successfully",
  FETCHED: "Resource Fetched Successfully",
  DUPLICATE: "Resource Already Exist",
  ONE_OR_MORE_DUPLICATE: "One Or More Resource Already Exist",
  NOT_FOUND: "Resource Not Found",
  NOT_ALLOWED: "Resource Not Allowed",
  ID_NOT_FOUND: "ID not found",
  SERVER_ERROR: (msg) => {
    return msg || "An internal error occurred. Try again";
  },
});

module.exports = { MSG_TYPES };
