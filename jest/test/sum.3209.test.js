const sum3209 = require('../sum3209.js');

test('adds 69 + 39 to equal 108 + offset 0.5271376760829848', () => {
  expect(sum3209(69, 39)).toBe(108 + 0.5271376760829848);
});