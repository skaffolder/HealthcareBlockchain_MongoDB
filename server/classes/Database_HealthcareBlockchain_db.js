// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import DoctorModel from "../models/HealthcareBlockchain_db/DoctorModel";
import PatientModel from "../models/HealthcareBlockchain_db/PatientModel";
import ReportModel from "../models/HealthcareBlockchain_db/ReportModel";
import UserModel from "../models/HealthcareBlockchain_db/UserModel";

// End Import Models

// Import Models Factom Blockchain
import IdentityModel from "../models/HealthcareBlockchain_db/IdentityModel";
import ChainModel from "../models/HealthcareBlockchain_db/ChainModel";
import EntryModel from "../models/HealthcareBlockchain_db/EntryModel";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.HealthcareBlockchain_db_dbUrl);

    // Start Init Models

		DoctorModel.init();
		PatientModel.init();
		ReportModel.init();
		UserModel.init();
 // End Init Models
    
    // Init Models Factom Blockchain
    IdentityModel.init();
    ChainModel.init();
    EntryModel.init();
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_HealthcareBlockchain_db = await mongoose.connect(
        "mongodb://" + properties.HealthcareBlockchain_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_HealthcareBlockchain_db;
  }
}

export default new Database();
