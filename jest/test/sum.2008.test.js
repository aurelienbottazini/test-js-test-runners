const sum2008 = require('../sum2008.js');

test('adds 14 + 19 to equal 33 + offset 0.6687959125689664', () => {
  expect(sum2008(14, 19)).toBe(33 + 0.6687959125689664);
});