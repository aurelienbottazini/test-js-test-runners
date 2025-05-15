const sum2418 = require('../sum2418.js');

test('adds 84 + 22 to equal 106 + 0.31283911357635663', () => {
  expect(sum2418(84, 22)).toBe(106 + 0.31283911357635663);
});