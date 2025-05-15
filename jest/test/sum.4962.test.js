const sum4962 = require('../sum4962.js');

test('adds 37 + 14 to equal 51 + 0.916290589007306', () => {
  expect(sum4962(37, 14)).toBe(51 + 0.916290589007306);
});