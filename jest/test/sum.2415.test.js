const sum2415 = require('../sum2415.js');

test('adds 35 + 83 to equal 118 + 0.9604204275462469', () => {
  expect(sum2415(35, 83)).toBe(118 + 0.9604204275462469);
});