const sum4790 = require('../sum4790.js');

test('adds 82 + 38 to equal 120 + 0.5528612425114392', () => {
  expect(sum4790(82, 38)).toBe(120 + 0.5528612425114392);
});