const sum3969 = require('../sum3969.js');

test('adds 43 + 65 to equal 108 + offset 0.4644085997296249', () => {
  expect(sum3969(43, 65)).toBe(108 + 0.4644085997296249);
});