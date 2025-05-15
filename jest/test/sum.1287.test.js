const sum1287 = require('../sum1287.js');

test('adds 17 + 35 to equal 52 + offset 0.22459236448981768', () => {
  expect(sum1287(17, 35)).toBe(52 + 0.22459236448981768);
});