const Document = require('../document');

test('Document initializes correctly', () => {
  const doc = new Document('D001', 'U001', 'My Title');
  expect(doc.docID).toBe('D001');
  expect(doc.userID).toBe('U001');
});
