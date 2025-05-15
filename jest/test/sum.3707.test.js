const sum3707 = require('../sum3707.js');

test('adds 98 + 6 to equal 104 + offset 0.46726495264431156', () => {
  expect(sum3707(98, 6)).toBe(104 + 0.46726495264431156);
});