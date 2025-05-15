const sum2217 = require('../sum2217.js');

test('adds 71 + 3 to equal 74 + 0.07072456814574801', () => {
  expect(sum2217(71, 3)).toBe(74 + 0.07072456814574801);
});