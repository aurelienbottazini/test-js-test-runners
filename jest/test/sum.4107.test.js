const sum4107 = require('../sum4107.js');

test('adds 92 + 77 to equal 169 + offset 0.4856731096278315', () => {
  expect(sum4107(92, 77)).toBe(169 + 0.4856731096278315);
});