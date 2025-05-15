const sum3850 = require('../sum3850.js');

test('adds 78 + 30 to equal 108 + offset 0.4670548426785266', () => {
  expect(sum3850(78, 30)).toBe(108 + 0.4670548426785266);
});