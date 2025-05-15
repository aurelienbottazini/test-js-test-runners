const sum2634 = require('../sum2634.js');

test('adds 58 + 98 to equal 156 + offset 0.042356537354819146', () => {
  expect(sum2634(58, 98)).toBe(156 + 0.042356537354819146);
});