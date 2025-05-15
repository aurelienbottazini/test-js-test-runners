const sum649 = require('../sum649.js');

test('adds 26 + 74 to equal 100 + offset 0.6546017360880321', () => {
  expect(sum649(26, 74)).toBe(100 + 0.6546017360880321);
});