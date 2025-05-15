const sum442 = require('../sum442.js');

test('adds 30 + 14 to equal 44 + 0.585479140082339', () => {
  expect(sum442(30, 14)).toBe(44 + 0.585479140082339);
});