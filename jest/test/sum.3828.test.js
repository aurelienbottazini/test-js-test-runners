const sum3828 = require('../sum3828.js');

test('adds 4 + 2 to equal 6 + 0.31452302367003404', () => {
  expect(sum3828(4, 2)).toBe(6 + 0.31452302367003404);
});