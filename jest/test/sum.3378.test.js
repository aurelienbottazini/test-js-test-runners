const sum3378 = require('../sum3378.js');

test('adds 62 + 39 to equal 101 + 0.48016282859512704', () => {
  expect(sum3378(62, 39)).toBe(101 + 0.48016282859512704);
});