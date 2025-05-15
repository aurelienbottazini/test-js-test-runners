const sum4719 = require('../sum4719.js');

test('adds 35 + 4 to equal 39 + 0.5769139262068195', () => {
  expect(sum4719(35, 4)).toBe(39 + 0.5769139262068195);
});