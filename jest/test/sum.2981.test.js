const sum2981 = require('../sum2981.js');

test('adds 61 + 39 to equal 100 + offset 0.7403710211961155', () => {
  expect(sum2981(61, 39)).toBe(100 + 0.7403710211961155);
});