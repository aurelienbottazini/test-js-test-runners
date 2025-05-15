const sum3403 = require('../sum3403.js');

test('adds 93 + 89 to equal 182 + 0.9905793598456848', () => {
  expect(sum3403(93, 89)).toBe(182 + 0.9905793598456848);
});