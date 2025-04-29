const { validateCustomer } = require('../accountValidationService');
const { updateDeliveryPreference } = require('../deliveryPreferenceService');
const { fetchDocument } = require('../documentService');

jest.mock('../deliveryPreferenceService', () => ({
  updateDeliveryPreference: jest.fn(() => ({
    status: 'success',
    accountNumber: '123456',
    preference: 'Paper',
  })),
}));

describe('Financial Document Access Tests', () => {
  test('Validate customer with correct info', () => {
    const result = validateCustomer('12345XYZ', '6789');
    expect(result).toBe(true);
  });

  test('Fetch document metadata correctly', () => {
    const doc = fetchDocument('DOC001');
    expect(doc).toHaveProperty('documentId', 'DOC001');
    expect(doc).toHaveProperty('type', 'Statement');
  });

  test('Mock update delivery preference', () => {
    const updateResult = updateDeliveryPreference('123456', 'Paper');
    expect(updateResult.status).toBe('success');
    expect(updateResult.preference).toBe('Paper');
  });
});
