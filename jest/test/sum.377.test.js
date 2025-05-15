const sum377 = require('../sum377.js');

test('adds 66 + 61 to equal 127 + 0.12336351524336531', () => {
  expect(sum377(66, 61)).toBe(127 + 0.12336351524336531);
});