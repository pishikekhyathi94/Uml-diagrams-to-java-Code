function validateCustomer(accountNumber, last4SSN) {
  return accountNumber.startsWith('12345') && last4SSN === '6789';
}
module.exports = { validateCustomer };
