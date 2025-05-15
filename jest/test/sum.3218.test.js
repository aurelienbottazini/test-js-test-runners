const sum3218 = require('../sum3218.js');

test('adds 9 + 57 to equal 66 + offset 0.8024765617977813', () => {
  expect(sum3218(9, 57)).toBe(66 + 0.8024765617977813);
});