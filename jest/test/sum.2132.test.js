const sum2132 = require('../sum2132.js');

test('adds 87 + 80 to equal 167 + offset 0.05008996954242939', () => {
  expect(sum2132(87, 80)).toBe(167 + 0.05008996954242939);
});