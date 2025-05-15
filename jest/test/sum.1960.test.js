const sum1960 = require('../sum1960.js');

test('adds 8 + 21 to equal 29 + 0.1956092196563577', () => {
  expect(sum1960(8, 21)).toBe(29 + 0.1956092196563577);
});