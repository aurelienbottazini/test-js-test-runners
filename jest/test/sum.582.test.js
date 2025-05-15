const sum582 = require('../sum582.js');

test('adds 96 + 22 to equal 118 + 0.5130254396353524', () => {
  expect(sum582(96, 22)).toBe(118 + 0.5130254396353524);
});