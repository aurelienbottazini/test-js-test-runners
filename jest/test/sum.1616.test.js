const sum1616 = require('../sum1616.js');

test('adds 84 + 35 to equal 119 + 0.6477751903690376', () => {
  expect(sum1616(84, 35)).toBe(119 + 0.6477751903690376);
});