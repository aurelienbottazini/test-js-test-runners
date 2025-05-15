const sum192 = require('../sum192.js');

test('adds 47 + 95 to equal 142 + offset 0.7432232136087391', () => {
  expect(sum192(47, 95)).toBe(142 + 0.7432232136087391);
});