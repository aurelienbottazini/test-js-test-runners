const sum3807 = require('../sum3807.js');

test('adds 62 + 89 to equal 151 + 0.7999261062054218', () => {
  expect(sum3807(62, 89)).toBe(151 + 0.7999261062054218);
});