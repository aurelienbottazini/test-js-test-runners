const sum658 = require('../sum658.js');

test('adds 62 + 66 to equal 128 + offset 0.03496876185890507', () => {
  expect(sum658(62, 66)).toBe(128 + 0.03496876185890507);
});