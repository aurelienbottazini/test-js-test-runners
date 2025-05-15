const sum1653 = require('../sum1653.js');

test('adds 31 + 19 to equal 50 + offset 0.914676134449521', () => {
  expect(sum1653(31, 19)).toBe(50 + 0.914676134449521);
});