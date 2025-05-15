const sum4563 = require('../sum4563.js');

test('adds 85 + 98 to equal 183 + offset 0.004677430242331138', () => {
  expect(sum4563(85, 98)).toBe(183 + 0.004677430242331138);
});