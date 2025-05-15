const sum3753 = require('../sum3753.js');

test('adds 75 + 61 to equal 136 + 0.4321309559800167', () => {
  expect(sum3753(75, 61)).toBe(136 + 0.4321309559800167);
});