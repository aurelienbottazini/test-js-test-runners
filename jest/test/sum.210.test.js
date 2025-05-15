const sum210 = require('../sum210.js');

test('adds 23 + 56 to equal 79 + 0.9340182858282903', () => {
  expect(sum210(23, 56)).toBe(79 + 0.9340182858282903);
});