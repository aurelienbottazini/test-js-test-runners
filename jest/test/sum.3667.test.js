const sum3667 = require('../sum3667.js');

test('adds 6 + 22 to equal 28 + offset 0.39563695198922666', () => {
  expect(sum3667(6, 22)).toBe(28 + 0.39563695198922666);
});