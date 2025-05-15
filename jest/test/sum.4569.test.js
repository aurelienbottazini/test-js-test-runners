const sum4569 = require('../sum4569.js');

test('adds 48 + 34 to equal 82 + 0.30052678942976496', () => {
  expect(sum4569(48, 34)).toBe(82 + 0.30052678942976496);
});