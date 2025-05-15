const sum453 = require('../sum453.js');

test('adds 48 + 40 to equal 88 + 0.07649541578762908', () => {
  expect(sum453(48, 40)).toBe(88 + 0.07649541578762908);
});