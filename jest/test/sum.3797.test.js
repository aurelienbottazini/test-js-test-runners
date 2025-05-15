const sum3797 = require('../sum3797.js');

test('adds 3 + 7 to equal 10 + offset 0.828998714495004', () => {
  expect(sum3797(3, 7)).toBe(10 + 0.828998714495004);
});