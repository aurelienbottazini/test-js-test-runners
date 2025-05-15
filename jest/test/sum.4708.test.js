const sum4708 = require('../sum4708.js');

test('adds 85 + 44 to equal 129 + offset 0.9881815123673716', () => {
  expect(sum4708(85, 44)).toBe(129 + 0.9881815123673716);
});