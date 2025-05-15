const sum1473 = require('../sum1473.js');

test('adds 9 + 60 to equal 69 + 0.7461091513910855', () => {
  expect(sum1473(9, 60)).toBe(69 + 0.7461091513910855);
});