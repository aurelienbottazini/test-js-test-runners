const sum3254 = require('../sum3254.js');

test('adds 29 + 97 to equal 126 + 0.03530499326476799', () => {
  expect(sum3254(29, 97)).toBe(126 + 0.03530499326476799);
});