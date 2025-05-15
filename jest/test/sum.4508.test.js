const sum4508 = require('../sum4508.js');

test('adds 19 + 70 to equal 89 + offset 0.46896385965050735', () => {
  expect(sum4508(19, 70)).toBe(89 + 0.46896385965050735);
});