const sum512 = require('../sum512.js');

test('adds 63 + 31 to equal 94 + 0.5573065864079539', () => {
  expect(sum512(63, 31)).toBe(94 + 0.5573065864079539);
});