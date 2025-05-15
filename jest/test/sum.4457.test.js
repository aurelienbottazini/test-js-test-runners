const sum4457 = require('../sum4457.js');

test('adds 89 + 42 to equal 131 + offset 0.5333477258861022', () => {
  expect(sum4457(89, 42)).toBe(131 + 0.5333477258861022);
});