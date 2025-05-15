const sum1619 = require('../sum1619.js');

test('adds 22 + 66 to equal 88 + 0.6868672653190536', () => {
  expect(sum1619(22, 66)).toBe(88 + 0.6868672653190536);
});