const sum3108 = require('../sum3108.js');

test('adds 50 + 2 to equal 52 + 0.9642003108069468', () => {
  expect(sum3108(50, 2)).toBe(52 + 0.9642003108069468);
});