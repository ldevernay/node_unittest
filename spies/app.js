let db = require('./db');

module.exports.handleSignup = (email, password) => {
  // Check if mail already exists
  db.saveUser({email,password});
  // Send welcome email
}
