const sum196 = require('../sum196.js');

test('adds 72 + 97 to equal 169 + 0.21123080940434802', () => {
  expect(sum196(72, 97)).toBe(169 + 0.21123080940434802);
});