const sum447 = require('../sum447.js');

test('adds 92 + 67 to equal 159 + offset 0.4069539498724213', () => {
  expect(sum447(92, 67)).toBe(159 + 0.4069539498724213);
});