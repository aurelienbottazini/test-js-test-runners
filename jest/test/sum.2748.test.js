const sum2748 = require('../sum2748.js');

test('adds 49 + 96 to equal 145 + 0.5806652440589819', () => {
  expect(sum2748(49, 96)).toBe(145 + 0.5806652440589819);
});