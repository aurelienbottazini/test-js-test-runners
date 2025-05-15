const sum4082 = require('../sum4082.js');

test('adds 37 + 2 to equal 39 + offset 0.25468279781488556', () => {
  expect(sum4082(37, 2)).toBe(39 + 0.25468279781488556);
});