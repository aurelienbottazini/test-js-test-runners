const sum3505 = require('../sum3505.js');

test('adds 73 + 8 to equal 81 + 0.34990679545656034', () => {
  expect(sum3505(73, 8)).toBe(81 + 0.34990679545656034);
});