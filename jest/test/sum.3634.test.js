const sum3634 = require('../sum3634.js');

test('adds 25 + 87 to equal 112 + offset 0.09641655987817077', () => {
  expect(sum3634(25, 87)).toBe(112 + 0.09641655987817077);
});