const sum4795 = require('../sum4795.js');

test('adds 3 + 89 to equal 92 + offset 0.6680989592847357', () => {
  expect(sum4795(3, 89)).toBe(92 + 0.6680989592847357);
});