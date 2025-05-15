const sum3245 = require('../sum3245.js');

test('adds 50 + 83 to equal 133 + offset 0.5173942828770315', () => {
  expect(sum3245(50, 83)).toBe(133 + 0.5173942828770315);
});