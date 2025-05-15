const sum1971 = require('../sum1971.js');

test('adds 70 + 23 to equal 93 + 0.5102405605757453', () => {
  expect(sum1971(70, 23)).toBe(93 + 0.5102405605757453);
});