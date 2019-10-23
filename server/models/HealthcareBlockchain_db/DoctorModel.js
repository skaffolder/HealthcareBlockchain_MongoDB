import DoctorModelGenerated from "./generated/DoctorModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = DoctorModelGenerated.init();
  
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
      return await DoctorModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...DoctorModelGenerated,
  ...customModel
};
