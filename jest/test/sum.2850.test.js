const sum2850 = require('../sum2850.js');

test('adds 18 + 83 to equal 101 + offset 0.2239607291868959', () => {
  expect(sum2850(18, 83)).toBe(101 + 0.2239607291868959);
});