const sum977 = require('../sum977.js');

test('adds 40 + 1 to equal 41 + 0.9007000375748514', () => {
  expect(sum977(40, 1)).toBe(41 + 0.9007000375748514);
});