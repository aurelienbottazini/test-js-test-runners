const sum1480 = require('../sum1480.js');

test('adds 74 + 56 to equal 130 + offset 0.7473692369647735', () => {
  expect(sum1480(74, 56)).toBe(130 + 0.7473692369647735);
});