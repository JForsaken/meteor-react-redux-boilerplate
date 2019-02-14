Meteor.methods({
  getEnvVars: () => (Meteor.isProduction ? process.env : Meteor.settings),
});
