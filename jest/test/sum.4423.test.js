const sum4423 = require('../sum4423.js');

test('adds 83 + 4 to equal 87 + offset 0.14828109623021712', () => {
  expect(sum4423(83, 4)).toBe(87 + 0.14828109623021712);
});