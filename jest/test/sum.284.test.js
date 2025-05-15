const sum284 = require('../sum284.js');

test('adds 21 + 85 to equal 106 + 0.8262323436678486', () => {
  expect(sum284(21, 85)).toBe(106 + 0.8262323436678486);
});