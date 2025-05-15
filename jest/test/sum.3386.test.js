const sum3386 = require('../sum3386.js');

test('adds 44 + 17 to equal 61 + offset 0.02479366635031166', () => {
  expect(sum3386(44, 17)).toBe(61 + 0.02479366635031166);
});