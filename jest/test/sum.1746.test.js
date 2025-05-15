const sum1746 = require('../sum1746.js');

test('adds 26 + 26 to equal 52 + offset 0.8191858336456022', () => {
  expect(sum1746(26, 26)).toBe(52 + 0.8191858336456022);
});