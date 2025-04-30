const User = require('../user');

test('User sets fields correctly', () => {
  const user = new User('U001', 'Teja', 'test@example.com', '1234567890', '4321', 'secret');
  expect(user.userID).toBe('U001');
  expect(user.name).toBe('Teja');
  expect(user.email).toBe('test@example.com');
});
