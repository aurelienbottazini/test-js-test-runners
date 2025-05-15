const sum641 = require('../sum641.js');

test('adds 99 + 34 to equal 133 + offset 0.4398426811109276', () => {
  expect(sum641(99, 34)).toBe(133 + 0.4398426811109276);
});