const sum4979 = require('../sum4979.js');

test('adds 1 + 28 to equal 29 + 0.4610497041085023', () => {
  expect(sum4979(1, 28)).toBe(29 + 0.4610497041085023);
});