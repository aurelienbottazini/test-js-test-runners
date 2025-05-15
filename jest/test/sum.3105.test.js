const sum3105 = require('../sum3105.js');

test('adds 21 + 7 to equal 28 + offset 0.3262161573707233', () => {
  expect(sum3105(21, 7)).toBe(28 + 0.3262161573707233);
});