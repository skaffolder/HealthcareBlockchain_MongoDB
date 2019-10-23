import PatientModelGenerated from "./generated/PatientModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = PatientModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await PatientModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...PatientModelGenerated,
  ...customModel
};
