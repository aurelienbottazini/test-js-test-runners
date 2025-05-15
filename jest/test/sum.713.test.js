const sum713 = require('../sum713.js');

test('adds 0 + 67 to equal 67 + offset 0.3658562854462909', () => {
  expect(sum713(0, 67)).toBe(67 + 0.3658562854462909);
});