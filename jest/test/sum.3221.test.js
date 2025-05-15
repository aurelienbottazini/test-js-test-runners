const sum3221 = require('../sum3221.js');

test('adds 69 + 68 to equal 137 + offset 0.3202705928947215', () => {
  expect(sum3221(69, 68)).toBe(137 + 0.3202705928947215);
});