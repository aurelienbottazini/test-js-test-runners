const sum4555 = require('../sum4555.js');

test('adds 80 + 83 to equal 163 + 0.7542102159483398', () => {
  expect(sum4555(80, 83)).toBe(163 + 0.7542102159483398);
});