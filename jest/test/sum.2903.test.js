const sum2903 = require('../sum2903.js');

test('adds 76 + 7 to equal 83 + offset 0.9416558892363823', () => {
  expect(sum2903(76, 7)).toBe(83 + 0.9416558892363823);
});