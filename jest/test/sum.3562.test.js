const sum3562 = require('../sum3562.js');

test('adds 13 + 85 to equal 98 + offset 0.8419117796358353', () => {
  expect(sum3562(13, 85)).toBe(98 + 0.8419117796358353);
});