const sum298 = require('../sum298.js');

test('adds 32 + 30 to equal 62 + 0.6118261728135749', () => {
  expect(sum298(32, 30)).toBe(62 + 0.6118261728135749);
});