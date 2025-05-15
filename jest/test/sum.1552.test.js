const sum1552 = require('../sum1552.js');

test('adds 77 + 60 to equal 137 + offset 0.09766367328511538', () => {
  expect(sum1552(77, 60)).toBe(137 + 0.09766367328511538);
});