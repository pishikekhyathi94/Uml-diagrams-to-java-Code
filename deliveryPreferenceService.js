function updateDeliveryPreference(accountNumber, preference) {
  if (!accountNumber || !preference) throw new Error('Invalid data');
  return { status: 'success', accountNumber, preference };
}
module.exports = { updateDeliveryPreference };
