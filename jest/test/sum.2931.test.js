const sum2931 = require('../sum2931.js');

test('adds 13 + 70 to equal 83 + offset 0.41362428356727554', () => {
  expect(sum2931(13, 70)).toBe(83 + 0.41362428356727554);
});