const sum4845 = require('../sum4845.js');

test('adds 47 + 90 to equal 137 + 0.6672318228196229', () => {
  expect(sum4845(47, 90)).toBe(137 + 0.6672318228196229);
});