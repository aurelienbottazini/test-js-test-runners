const sum3075 = require('../sum3075.js');

test('adds 91 + 58 to equal 149 + offset 0.9320870132695706', () => {
  expect(sum3075(91, 58)).toBe(149 + 0.9320870132695706);
});