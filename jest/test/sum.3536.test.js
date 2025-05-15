const sum3536 = require('../sum3536.js');

test('adds 81 + 8 to equal 89 + offset 0.2835651102085929', () => {
  expect(sum3536(81, 8)).toBe(89 + 0.2835651102085929);
});