const sum3779 = require('../sum3779.js');

test('adds 90 + 71 to equal 161 + offset 0.6589190921809354', () => {
  expect(sum3779(90, 71)).toBe(161 + 0.6589190921809354);
});