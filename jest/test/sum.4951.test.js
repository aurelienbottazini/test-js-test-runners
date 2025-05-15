const sum4951 = require('../sum4951.js');

test('adds 47 + 53 to equal 100 + offset 0.12336420127787451', () => {
  expect(sum4951(47, 53)).toBe(100 + 0.12336420127787451);
});