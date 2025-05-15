const sum3658 = require('../sum3658.js');

test('adds 24 + 72 to equal 96 + 0.7893425580641104', () => {
  expect(sum3658(24, 72)).toBe(96 + 0.7893425580641104);
});