const sum4398 = require('../sum4398.js');

test('adds 1 + 76 to equal 77 + 0.07654581438537', () => {
  expect(sum4398(1, 76)).toBe(77 + 0.07654581438537);
});