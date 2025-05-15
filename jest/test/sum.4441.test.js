const sum4441 = require('../sum4441.js');

test('adds 0 + 83 to equal 83 + offset 0.7452513481532594', () => {
  expect(sum4441(0, 83)).toBe(83 + 0.7452513481532594);
});