const sum2544 = require('../sum2544.js');

test('adds 49 + 6 to equal 55 + offset 0.6614545314212554', () => {
  expect(sum2544(49, 6)).toBe(55 + 0.6614545314212554);
});