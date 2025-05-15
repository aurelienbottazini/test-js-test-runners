const sum4825 = require('../sum4825.js');

test('adds 93 + 64 to equal 157 + offset 0.291097773592624', () => {
  expect(sum4825(93, 64)).toBe(157 + 0.291097773592624);
});