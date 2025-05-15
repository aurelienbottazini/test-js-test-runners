const sum3619 = require('../sum3619.js');

test('adds 21 + 8 to equal 29 + 0.6726321646051605', () => {
  expect(sum3619(21, 8)).toBe(29 + 0.6726321646051605);
});