const sum4821 = require('../sum4821.js');

test('adds 57 + 89 to equal 146 + 0.3427324217363825', () => {
  expect(sum4821(57, 89)).toBe(146 + 0.3427324217363825);
});