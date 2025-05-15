const sum808 = require('../sum808.js');

test('adds 98 + 68 to equal 166 + 0.43268289934839943', () => {
  expect(sum808(98, 68)).toBe(166 + 0.43268289934839943);
});