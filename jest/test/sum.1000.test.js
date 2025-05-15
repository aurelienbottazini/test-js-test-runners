const sum1000 = require('../sum1000.js');

test('adds 68 + 8 to equal 76 + 0.2842683708256958', () => {
  expect(sum1000(68, 8)).toBe(76 + 0.2842683708256958);
});