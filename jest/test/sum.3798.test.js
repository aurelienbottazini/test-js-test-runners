const sum3798 = require('../sum3798.js');

test('adds 73 + 2 to equal 75 + offset 0.6292702081719563', () => {
  expect(sum3798(73, 2)).toBe(75 + 0.6292702081719563);
});