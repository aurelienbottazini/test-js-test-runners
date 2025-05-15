const sum3013 = require('../sum3013.js');

test('adds 10 + 31 to equal 41 + offset 0.28381037780635965', () => {
  expect(sum3013(10, 31)).toBe(41 + 0.28381037780635965);
});