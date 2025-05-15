const sum1650 = require('../sum1650.js');

test('adds 73 + 58 to equal 131 + offset 0.09691872814361446', () => {
  expect(sum1650(73, 58)).toBe(131 + 0.09691872814361446);
});