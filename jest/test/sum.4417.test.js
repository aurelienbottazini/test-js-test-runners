const sum4417 = require('../sum4417.js');

test('adds 56 + 65 to equal 121 + 0.046833662381974284', () => {
  expect(sum4417(56, 65)).toBe(121 + 0.046833662381974284);
});