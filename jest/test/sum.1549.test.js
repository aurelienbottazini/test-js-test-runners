const sum1549 = require('../sum1549.js');

test('adds 5 + 33 to equal 38 + offset 0.26112104608182096', () => {
  expect(sum1549(5, 33)).toBe(38 + 0.26112104608182096);
});