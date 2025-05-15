const sum2270 = require('../sum2270.js');

test('adds 23 + 59 to equal 82 + 0.13614958601027816', () => {
  expect(sum2270(23, 59)).toBe(82 + 0.13614958601027816);
});