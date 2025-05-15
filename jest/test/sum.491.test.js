const sum491 = require('../sum491.js');

test('adds 66 + 63 to equal 129 + offset 0.35191599353983827', () => {
  expect(sum491(66, 63)).toBe(129 + 0.35191599353983827);
});