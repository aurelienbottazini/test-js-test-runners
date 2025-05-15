const sum960 = require('../sum960.js');

test('adds 28 + 0 to equal 28 + offset 0.4059058648123063', () => {
  expect(sum960(28, 0)).toBe(28 + 0.4059058648123063);
});