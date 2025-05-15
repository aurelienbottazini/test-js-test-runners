const sum1946 = require('../sum1946.js');

test('adds 4 + 86 to equal 90 + offset 0.7910478246529948', () => {
  expect(sum1946(4, 86)).toBe(90 + 0.7910478246529948);
});