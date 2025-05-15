const sum4376 = require('../sum4376.js');

test('adds 97 + 50 to equal 147 + 0.451669459777604', () => {
  expect(sum4376(97, 50)).toBe(147 + 0.451669459777604);
});