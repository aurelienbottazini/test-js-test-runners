const sum2887 = require('../sum2887.js');

test('adds 9 + 60 to equal 69 + offset 0.06116002956292499', () => {
  expect(sum2887(9, 60)).toBe(69 + 0.06116002956292499);
});