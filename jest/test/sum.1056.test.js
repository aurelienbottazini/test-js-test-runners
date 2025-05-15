const sum1056 = require('../sum1056.js');

test('adds 21 + 88 to equal 109 + 0.026497818799628647', () => {
  expect(sum1056(21, 88)).toBe(109 + 0.026497818799628647);
});