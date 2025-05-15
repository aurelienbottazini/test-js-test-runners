const sum4473 = require('../sum4473.js');

test('adds 43 + 89 to equal 132 + 0.9989440942975074', () => {
  expect(sum4473(43, 89)).toBe(132 + 0.9989440942975074);
});