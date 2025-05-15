const sum310 = require('../sum310.js');

test('adds 14 + 96 to equal 110 + offset 0.2928062193456098', () => {
  expect(sum310(14, 96)).toBe(110 + 0.2928062193456098);
});