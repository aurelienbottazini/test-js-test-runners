const sum2399 = require('../sum2399.js');

test('adds 19 + 30 to equal 49 + offset 0.842907508376424', () => {
  expect(sum2399(19, 30)).toBe(49 + 0.842907508376424);
});