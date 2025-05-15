const sum3202 = require('../sum3202.js');

test('adds 13 + 29 to equal 42 + 0.07815986735289893', () => {
  expect(sum3202(13, 29)).toBe(42 + 0.07815986735289893);
});