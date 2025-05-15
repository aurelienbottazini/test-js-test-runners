const sum1331 = require('../sum1331.js');

test('adds 62 + 84 to equal 146 + offset 0.4998687761086551', () => {
  expect(sum1331(62, 84)).toBe(146 + 0.4998687761086551);
});