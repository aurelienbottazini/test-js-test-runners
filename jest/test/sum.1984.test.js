const sum1984 = require('../sum1984.js');

test('adds 12 + 17 to equal 29 + offset 0.14146818672928985', () => {
  expect(sum1984(12, 17)).toBe(29 + 0.14146818672928985);
});