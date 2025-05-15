const sum1328 = require('../sum1328.js');

test('adds 98 + 23 to equal 121 + 0.44168230194298175', () => {
  expect(sum1328(98, 23)).toBe(121 + 0.44168230194298175);
});