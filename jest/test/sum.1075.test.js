const sum1075 = require('../sum1075.js');

test('adds 4 + 47 to equal 51 + offset 0.17895297641260222', () => {
  expect(sum1075(4, 47)).toBe(51 + 0.17895297641260222);
});