const sum2472 = require('../sum2472.js');

test('adds 57 + 38 to equal 95 + offset 0.11564313615302124', () => {
  expect(sum2472(57, 38)).toBe(95 + 0.11564313615302124);
});