const sum2323 = require('../sum2323.js');

test('adds 47 + 97 to equal 144 + 0.2981570723343685', () => {
  expect(sum2323(47, 97)).toBe(144 + 0.2981570723343685);
});