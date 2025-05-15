const sum2938 = require('../sum2938.js');

test('adds 49 + 59 to equal 108 + offset 0.1979242366347822', () => {
  expect(sum2938(49, 59)).toBe(108 + 0.1979242366347822);
});