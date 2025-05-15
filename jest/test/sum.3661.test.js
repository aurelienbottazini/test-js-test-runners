const sum3661 = require('../sum3661.js');

test('adds 63 + 0 to equal 63 + offset 0.2206866259474456', () => {
  expect(sum3661(63, 0)).toBe(63 + 0.2206866259474456);
});