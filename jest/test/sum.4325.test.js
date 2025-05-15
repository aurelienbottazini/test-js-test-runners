const sum4325 = require('../sum4325.js');

test('adds 41 + 0 to equal 41 + offset 0.6398716905990228', () => {
  expect(sum4325(41, 0)).toBe(41 + 0.6398716905990228);
});