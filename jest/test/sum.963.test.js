const sum963 = require('../sum963.js');

test('adds 26 + 91 to equal 117 + offset 0.15767068011367635', () => {
  expect(sum963(26, 91)).toBe(117 + 0.15767068011367635);
});