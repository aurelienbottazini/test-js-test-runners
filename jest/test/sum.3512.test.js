const sum3512 = require('../sum3512.js');

test('adds 24 + 77 to equal 101 + offset 0.4764251123035512', () => {
  expect(sum3512(24, 77)).toBe(101 + 0.4764251123035512);
});