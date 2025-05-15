const sum2362 = require('../sum2362.js');

test('adds 88 + 92 to equal 180 + offset 0.7386736524105497', () => {
  expect(sum2362(88, 92)).toBe(180 + 0.7386736524105497);
});