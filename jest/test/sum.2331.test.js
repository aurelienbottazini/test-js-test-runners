const sum2331 = require('../sum2331.js');

test('adds 47 + 64 to equal 111 + offset 0.7777609960362221', () => {
  expect(sum2331(47, 64)).toBe(111 + 0.7777609960362221);
});