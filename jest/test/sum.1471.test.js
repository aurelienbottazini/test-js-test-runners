const sum1471 = require('../sum1471.js');

test('adds 30 + 26 to equal 56 + 0.6702373807012032', () => {
  expect(sum1471(30, 26)).toBe(56 + 0.6702373807012032);
});