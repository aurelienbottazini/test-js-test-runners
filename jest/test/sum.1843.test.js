const sum1843 = require('../sum1843.js');

test('adds 59 + 7 to equal 66 + 0.6482004105225526', () => {
  expect(sum1843(59, 7)).toBe(66 + 0.6482004105225526);
});