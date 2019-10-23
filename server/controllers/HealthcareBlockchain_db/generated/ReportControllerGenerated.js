/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE ReportControllerGenerated.js PLEASE EDIT ../ReportController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import ReportModel from "../../../models/HealthcareBlockchain_db/ReportModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import ReportController from "../ReportController";
import { factomize, getRelationIdentityId } from "../../../services/factom";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/report`;
    router.post(baseUrl + "", authorize([]), ReportController.create);
    router.delete(baseUrl + "/:id", authorize([]), ReportController.delete);
    router.get(baseUrl + "/findBydoctor/:key", authorize([]), ReportController.findBydoctor);
    router.get(baseUrl + "/:id", authorize([]), ReportController.get);
    router.get(baseUrl + "", authorize([]), ReportController.list);
    router.post(baseUrl + "/:id", authorize([]), ReportController.update);
  },


  // CRUD METHODS


  /**
  * ReportModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      // Factom method
      await factomize("Report", req.body, "POST", "doctor");
      
      const result = await ReportModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ReportModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      // Factom method
      await factomize("Report", req.body, "DELETE", "doctor", req.params.id);
      
      const result = await ReportModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ReportModel.findBydoctor
  *   @description CRUD ACTION findBydoctor
  *   @param Objectid key Id della risorsa doctor da cercare
  *
  */
  findBydoctor: async (req, res) => {
    try {
      const result = await ReportModel.findBydoctor(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ReportModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  get: async (req, res) => {
    try {
      const result = await ReportModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ReportModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await ReportModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * ReportModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      // Factom method
      await factomize("Report", req.body, "POST", "doctor", req.params.id);
      
      const result = await ReportModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;