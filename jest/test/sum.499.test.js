const sum499 = require('../sum499.js');

test('adds 36 + 62 to equal 98 + offset 0.4523746598120051', () => {
  expect(sum499(36, 62)).toBe(98 + 0.4523746598120051);
});