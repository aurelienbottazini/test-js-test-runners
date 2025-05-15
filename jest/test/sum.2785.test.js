const sum2785 = require('../sum2785.js');

test('adds 84 + 95 to equal 179 + offset 0.35829001312551145', () => {
  expect(sum2785(84, 95)).toBe(179 + 0.35829001312551145);
});