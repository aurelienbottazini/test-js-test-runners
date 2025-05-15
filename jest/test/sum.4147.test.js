const sum4147 = require('../sum4147.js');

test('adds 23 + 77 to equal 100 + offset 0.34272905372367846', () => {
  expect(sum4147(23, 77)).toBe(100 + 0.34272905372367846);
});