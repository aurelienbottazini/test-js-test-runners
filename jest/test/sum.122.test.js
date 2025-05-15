const sum122 = require('../sum122.js');

test('adds 83 + 98 to equal 181 + 0.6150436065442311', () => {
  expect(sum122(83, 98)).toBe(181 + 0.6150436065442311);
});