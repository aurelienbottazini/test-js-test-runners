const sum72 = require('../sum72.js');

test('adds 84 + 83 to equal 167 + 0.3972535635437757', () => {
  expect(sum72(84, 83)).toBe(167 + 0.3972535635437757);
});