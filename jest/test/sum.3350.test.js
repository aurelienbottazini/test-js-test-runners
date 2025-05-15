const sum3350 = require('../sum3350.js');

test('adds 1 + 2 to equal 3 + 0.31315998358256036', () => {
  expect(sum3350(1, 2)).toBe(3 + 0.31315998358256036);
});