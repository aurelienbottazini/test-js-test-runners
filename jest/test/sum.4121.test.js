const sum4121 = require('../sum4121.js');

test('adds 78 + 11 to equal 89 + 0.9494093827342155', () => {
  expect(sum4121(78, 11)).toBe(89 + 0.9494093827342155);
});