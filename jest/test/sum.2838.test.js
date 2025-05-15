const sum2838 = require('../sum2838.js');

test('adds 73 + 12 to equal 85 + 0.7612485149358018', () => {
  expect(sum2838(73, 12)).toBe(85 + 0.7612485149358018);
});