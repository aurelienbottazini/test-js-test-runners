const sum1986 = require('../sum1986.js');

test('adds 82 + 61 to equal 143 + offset 0.4947536218166656', () => {
  expect(sum1986(82, 61)).toBe(143 + 0.4947536218166656);
});