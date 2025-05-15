const sum1330 = require('../sum1330.js');

test('adds 57 + 76 to equal 133 + 0.6732715341211085', () => {
  expect(sum1330(57, 76)).toBe(133 + 0.6732715341211085);
});