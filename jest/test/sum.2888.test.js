const sum2888 = require('../sum2888.js');

test('adds 21 + 46 to equal 67 + offset 0.931888185432784', () => {
  expect(sum2888(21, 46)).toBe(67 + 0.931888185432784);
});