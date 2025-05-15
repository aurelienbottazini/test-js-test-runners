const sum4396 = require('../sum4396.js');

test('adds 68 + 31 to equal 99 + offset 0.5669597906651797', () => {
  expect(sum4396(68, 31)).toBe(99 + 0.5669597906651797);
});