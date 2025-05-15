const sum4092 = require('../sum4092.js');

test('adds 27 + 72 to equal 99 + 0.8994758246199852', () => {
  expect(sum4092(27, 72)).toBe(99 + 0.8994758246199852);
});