// const mongoose = require("mongoose");

// const RequestSchema = new mongoose.Schema({
//     donor_id: { type: mongoose.Schema.Types.ObjectId, ref: "donorDetails" }, // Reference to Donor
//     request_date: { type: Date, default: Date.now },
//     status: { type: String, enum: ["Pending", "Assigned", "Approved", "Completed"], default: "Pending" }, // ✅ Added "Approved"
//     admin_assigned: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", default: null } // Reference to Admin
// });


// module.exports = mongoose.model("Request", RequestSchema);


const mongoose = require("mongoose");

// Check if the model already exists to prevent overwrite errors
const Request = mongoose.models.Request || mongoose.model("Request", new mongoose.Schema({
    donor_id: { type: mongoose.Schema.Types.ObjectId, ref: "donorDetails" }, // Reference to Donor
    request_date: { type: Date, default: Date.now },
    status: { type: String, enum: ["Pending", "Assigned", "Approved", "Completed"], default: "Pending" },
    admin_assigned: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", default: null } // Reference to Admin
}));

module.exports = Request;

