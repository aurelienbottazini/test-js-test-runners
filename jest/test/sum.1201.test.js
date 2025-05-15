const sum1201 = require('../sum1201.js');

test('adds 93 + 62 to equal 155 + 0.5261474805692536', () => {
  expect(sum1201(93, 62)).toBe(155 + 0.5261474805692536);
});