const sum4198 = require('../sum4198.js');

test('adds 88 + 58 to equal 146 + offset 0.8210452380014484', () => {
  expect(sum4198(88, 58)).toBe(146 + 0.8210452380014484);
});