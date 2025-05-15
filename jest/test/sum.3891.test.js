const sum3891 = require('../sum3891.js');

test('adds 50 + 40 to equal 90 + 0.06192730739119301', () => {
  expect(sum3891(50, 40)).toBe(90 + 0.06192730739119301);
});