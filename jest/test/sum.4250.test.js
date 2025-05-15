const sum4250 = require('../sum4250.js');

test('adds 9 + 39 to equal 48 + 0.7892839576745801', () => {
  expect(sum4250(9, 39)).toBe(48 + 0.7892839576745801);
});