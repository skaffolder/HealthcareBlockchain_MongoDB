module.exports = {
    
  HealthcareBlockchain_db_dbUrl: (process.env.DB_HOST || 'localhost') + ':27017/HealthcareBlockchain_db',

  // Factom properties
  factom: {
    config: {
      baseUrl: "https://ephemeral.api.factom.com/v1",
      accessToken: {
        appId: "myAppId",
        appKey: "myAppKey"
      }
    },
    model: {
      // Start Factom model properties
      Doctor: {
        factomized: "",
        has_identity: true
      },
      Patient: {
        factomized: "",
      },
      Report: {
        factomized: "Doctor",
      },
      User: {
        factomized: "",
      },

      // End Factom model properties
    }
  },

  publicPath: "../client/dist",
  port: process.env.NODE_PORT || 3000,
  tokenSecret: "Insert Your Secret Token",
  api: process.env.NODE_API != null ? process.env.NODE_API : "/api"
};
