const sum20 = require('../sum20.js');

test('adds 45 + 4 to equal 49 + 0.40125275868579', () => {
  expect(sum20(45, 4)).toBe(49 + 0.40125275868579);
});