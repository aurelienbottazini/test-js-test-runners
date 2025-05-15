const sum4898 = require('../sum4898.js');

test('adds 30 + 53 to equal 83 + offset 0.04334101154681713', () => {
  expect(sum4898(30, 53)).toBe(83 + 0.04334101154681713);
});