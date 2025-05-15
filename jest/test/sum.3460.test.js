const sum3460 = require('../sum3460.js');

test('adds 7 + 35 to equal 42 + offset 0.7749672604019441', () => {
  expect(sum3460(7, 35)).toBe(42 + 0.7749672604019441);
});