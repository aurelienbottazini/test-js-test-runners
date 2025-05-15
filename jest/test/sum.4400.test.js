const sum4400 = require('../sum4400.js');

test('adds 19 + 58 to equal 77 + 0.4320745225865591', () => {
  expect(sum4400(19, 58)).toBe(77 + 0.4320745225865591);
});