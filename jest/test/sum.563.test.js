const sum563 = require('../sum563.js');

test('adds 93 + 36 to equal 129 + 0.8208648557414748', () => {
  expect(sum563(93, 36)).toBe(129 + 0.8208648557414748);
});