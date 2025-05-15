const sum1232 = require('../sum1232.js');

test('adds 69 + 26 to equal 95 + 0.22787294238613498', () => {
  expect(sum1232(69, 26)).toBe(95 + 0.22787294238613498);
});