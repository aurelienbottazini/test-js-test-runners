const sum1524 = require('../sum1524.js');

test('adds 13 + 90 to equal 103 + 0.4927711167693478', () => {
  expect(sum1524(13, 90)).toBe(103 + 0.4927711167693478);
});