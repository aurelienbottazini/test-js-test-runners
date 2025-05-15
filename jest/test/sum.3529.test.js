const sum3529 = require('../sum3529.js');

test('adds 66 + 1 to equal 67 + offset 0.7965959768177087', () => {
  expect(sum3529(66, 1)).toBe(67 + 0.7965959768177087);
});