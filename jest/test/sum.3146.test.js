const sum3146 = require('../sum3146.js');

test('adds 1 + 43 to equal 44 + 0.4836065852949587', () => {
  expect(sum3146(1, 43)).toBe(44 + 0.4836065852949587);
});