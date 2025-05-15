const sum138 = require('../sum138.js');

test('adds 41 + 56 to equal 97 + offset 0.6937431434330893', () => {
  expect(sum138(41, 56)).toBe(97 + 0.6937431434330893);
});