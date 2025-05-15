const sum2231 = require('../sum2231.js');

test('adds 2 + 7 to equal 9 + 0.30948607309420995', () => {
  expect(sum2231(2, 7)).toBe(9 + 0.30948607309420995);
});