const sum1514 = require('../sum1514.js');

test('adds 98 + 30 to equal 128 + offset 0.43701673586561063', () => {
  expect(sum1514(98, 30)).toBe(128 + 0.43701673586561063);
});