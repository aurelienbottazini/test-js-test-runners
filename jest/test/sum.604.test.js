const sum604 = require('../sum604.js');

test('adds 98 + 42 to equal 140 + offset 0.5213774546814628', () => {
  expect(sum604(98, 42)).toBe(140 + 0.5213774546814628);
});