const sum3245 = require('../sum3245.js');

test('adds 10 + 4 to equal 14 + 0.4205083227052373', () => {
  expect(sum3245(10, 4)).toBe(14 + 0.4205083227052373);
});