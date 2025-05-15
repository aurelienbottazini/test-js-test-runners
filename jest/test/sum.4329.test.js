const sum4329 = require('../sum4329.js');

test('adds 79 + 62 to equal 141 + offset 0.15984526444810854', () => {
  expect(sum4329(79, 62)).toBe(141 + 0.15984526444810854);
});