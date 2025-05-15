const sum4308 = require('../sum4308.js');

test('adds 56 + 48 to equal 104 + 0.17157277826819706', () => {
  expect(sum4308(56, 48)).toBe(104 + 0.17157277826819706);
});