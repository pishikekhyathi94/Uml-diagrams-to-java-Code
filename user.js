class User {
  constructor(userID, name, email, phone, last4SSN, password) {
    this.userID = userID;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.last4SSN = last4SSN;
    this.password = password;
  }
}
module.exports = User;
