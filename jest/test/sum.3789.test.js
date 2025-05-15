const sum3789 = require('../sum3789.js');

test('adds 16 + 21 to equal 37 + offset 0.2736701197380432', () => {
  expect(sum3789(16, 21)).toBe(37 + 0.2736701197380432);
});