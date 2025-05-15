const sum1477 = require('../sum1477.js');

test('adds 62 + 48 to equal 110 + offset 0.4990062255575878', () => {
  expect(sum1477(62, 48)).toBe(110 + 0.4990062255575878);
});