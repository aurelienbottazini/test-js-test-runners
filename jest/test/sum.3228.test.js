const sum3228 = require('../sum3228.js');

test('adds 22 + 40 to equal 62 + 0.7971205206199288', () => {
  expect(sum3228(22, 40)).toBe(62 + 0.7971205206199288);
});