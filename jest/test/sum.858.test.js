const sum858 = require('../sum858.js');

test('adds 50 + 36 to equal 86 + offset 0.3452379142217731', () => {
  expect(sum858(50, 36)).toBe(86 + 0.3452379142217731);
});