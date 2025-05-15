const sum3919 = require('../sum3919.js');

test('adds 47 + 13 to equal 60 + 0.19174354259437976', () => {
  expect(sum3919(47, 13)).toBe(60 + 0.19174354259437976);
});