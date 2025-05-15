const sum4208 = require('../sum4208.js');

test('adds 47 + 91 to equal 138 + 0.32583460225066885', () => {
  expect(sum4208(47, 91)).toBe(138 + 0.32583460225066885);
});