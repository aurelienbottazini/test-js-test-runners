const sum4542 = require('../sum4542.js');

test('adds 38 + 79 to equal 117 + offset 0.590054659193848', () => {
  expect(sum4542(38, 79)).toBe(117 + 0.590054659193848);
});