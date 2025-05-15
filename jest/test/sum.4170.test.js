const sum4170 = require('../sum4170.js');

test('adds 95 + 43 to equal 138 + offset 0.3672646005153476', () => {
  expect(sum4170(95, 43)).toBe(138 + 0.3672646005153476);
});