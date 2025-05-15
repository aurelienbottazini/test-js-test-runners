const sum938 = require('../sum938.js');

test('adds 16 + 31 to equal 47 + offset 0.45934803166977123', () => {
  expect(sum938(16, 31)).toBe(47 + 0.45934803166977123);
});