const sum1437 = require('../sum1437.js');

test('adds 65 + 67 to equal 132 + offset 0.9795340231147581', () => {
  expect(sum1437(65, 67)).toBe(132 + 0.9795340231147581);
});