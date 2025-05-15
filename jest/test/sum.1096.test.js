const sum1096 = require('../sum1096.js');

test('adds 67 + 43 to equal 110 + 0.10874519917383496', () => {
  expect(sum1096(67, 43)).toBe(110 + 0.10874519917383496);
});