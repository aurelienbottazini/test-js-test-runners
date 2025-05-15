const sum3975 = require('../sum3975.js');

test('adds 42 + 90 to equal 132 + 0.6396199653865904', () => {
  expect(sum3975(42, 90)).toBe(132 + 0.6396199653865904);
});