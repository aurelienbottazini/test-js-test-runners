const sum180 = require('../sum180.js');

test('adds 43 + 1 to equal 44 + 0.6940929713445905', () => {
  expect(sum180(43, 1)).toBe(44 + 0.6940929713445905);
});