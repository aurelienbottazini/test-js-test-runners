const sum4455 = require('../sum4455.js');

test('adds 25 + 19 to equal 44 + offset 0.6463411845763782', () => {
  expect(sum4455(25, 19)).toBe(44 + 0.6463411845763782);
});