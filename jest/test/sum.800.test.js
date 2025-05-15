const sum800 = require('../sum800.js');

test('adds 6 + 55 to equal 61 + 0.7872106233371929', () => {
  expect(sum800(6, 55)).toBe(61 + 0.7872106233371929);
});