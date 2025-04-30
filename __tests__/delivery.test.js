jest.mock('../document', () => {
  return jest.fn().mockImplementation(() => {
    return { docID: 'D999' };
  });
});

const Document = require('../document');
const DeliveryPreferenceManager = require('../deliveryPreferenceManager');

test('process() works with mocked Document', () => {
  const doc = new Document();
  const manager = new DeliveryPreferenceManager();
  expect(manager.process(doc)).toBe('Processed: D999');
});
