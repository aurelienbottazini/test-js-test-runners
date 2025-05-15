const sum2823 = require('../sum2823.js');

test('adds 79 + 89 to equal 168 + offset 0.9409564553568098', () => {
  expect(sum2823(79, 89)).toBe(168 + 0.9409564553568098);
});