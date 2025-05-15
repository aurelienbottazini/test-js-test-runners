const sum1501 = require('../sum1501.js');

test('adds 4 + 0 to equal 4 + offset 0.07619143941562312', () => {
  expect(sum1501(4, 0)).toBe(4 + 0.07619143941562312);
});