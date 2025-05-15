const sum2300 = require('../sum2300.js');

test('adds 1 + 75 to equal 76 + offset 0.8715063458103024', () => {
  expect(sum2300(1, 75)).toBe(76 + 0.8715063458103024);
});