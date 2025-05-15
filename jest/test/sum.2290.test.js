const sum2290 = require('../sum2290.js');

test('adds 69 + 75 to equal 144 + 0.4070654042077312', () => {
  expect(sum2290(69, 75)).toBe(144 + 0.4070654042077312);
});