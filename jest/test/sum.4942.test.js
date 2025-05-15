const sum4942 = require('../sum4942.js');

test('adds 37 + 51 to equal 88 + offset 0.8329628749943897', () => {
  expect(sum4942(37, 51)).toBe(88 + 0.8329628749943897);
});