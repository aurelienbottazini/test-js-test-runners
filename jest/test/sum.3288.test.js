const sum3288 = require('../sum3288.js');

test('adds 69 + 9 to equal 78 + 0.6093353263401698', () => {
  expect(sum3288(69, 9)).toBe(78 + 0.6093353263401698);
});