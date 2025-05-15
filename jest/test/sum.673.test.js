const sum673 = require('../sum673.js');

test('adds 95 + 33 to equal 128 + offset 0.11506780883956635', () => {
  expect(sum673(95, 33)).toBe(128 + 0.11506780883956635);
});