const sum3571 = require('../sum3571.js');

test('adds 71 + 29 to equal 100 + offset 0.6949563376688286', () => {
  expect(sum3571(71, 29)).toBe(100 + 0.6949563376688286);
});