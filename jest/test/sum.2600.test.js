const sum2600 = require('../sum2600.js');

test('adds 57 + 92 to equal 149 + 0.2098427168257565', () => {
  expect(sum2600(57, 92)).toBe(149 + 0.2098427168257565);
});