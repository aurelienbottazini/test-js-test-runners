const sum1729 = require('../sum1729.js');

test('adds 85 + 59 to equal 144 + 0.566075065765368', () => {
  expect(sum1729(85, 59)).toBe(144 + 0.566075065765368);
});