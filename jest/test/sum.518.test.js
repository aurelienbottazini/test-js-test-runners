const sum518 = require('../sum518.js');

test('adds 72 + 96 to equal 168 + 0.6120263131061892', () => {
  expect(sum518(72, 96)).toBe(168 + 0.6120263131061892);
});