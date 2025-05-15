const sum3339 = require('../sum3339.js');

test('adds 79 + 46 to equal 125 + offset 0.6702834472029178', () => {
  expect(sum3339(79, 46)).toBe(125 + 0.6702834472029178);
});