import ReportModelGenerated from "./generated/ReportModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ReportModelGenerated.init();
  
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
      return await ReportModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ReportModelGenerated,
  ...customModel
};
