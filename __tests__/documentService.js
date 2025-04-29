function fetchDocument(documentId) {
  if (!documentId) throw new Error('Missing ID');
  return {
    documentId,
    account: '123456789',
    date: '2025-04-01',
    type: 'Statement',
  };
}
module.exports = { fetchDocument };
