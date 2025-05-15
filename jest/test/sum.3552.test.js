const sum3552 = require('../sum3552.js');

test('adds 39 + 21 to equal 60 + 0.68128061168289', () => {
  expect(sum3552(39, 21)).toBe(60 + 0.68128061168289);
});