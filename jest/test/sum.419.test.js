const sum419 = require('../sum419.js');

test('adds 84 + 97 to equal 181 + 0.2813176414122758', () => {
  expect(sum419(84, 97)).toBe(181 + 0.2813176414122758);
});