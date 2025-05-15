const sum1551 = require('../sum1551.js');

test('adds 57 + 91 to equal 148 + offset 0.3152687763087615', () => {
  expect(sum1551(57, 91)).toBe(148 + 0.3152687763087615);
});