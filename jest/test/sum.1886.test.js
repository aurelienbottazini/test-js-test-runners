const sum1886 = require('../sum1886.js');

test('adds 8 + 19 to equal 27 + 0.1019829807977638', () => {
  expect(sum1886(8, 19)).toBe(27 + 0.1019829807977638);
});