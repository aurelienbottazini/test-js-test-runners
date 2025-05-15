const sum1678 = require('../sum1678.js');

test('adds 50 + 82 to equal 132 + offset 0.3902077907262007', () => {
  expect(sum1678(50, 82)).toBe(132 + 0.3902077907262007);
});