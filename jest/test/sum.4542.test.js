const sum4542 = require('../sum4542.js');

test('adds 84 + 35 to equal 119 + 0.8136825998134207', () => {
  expect(sum4542(84, 35)).toBe(119 + 0.8136825998134207);
});