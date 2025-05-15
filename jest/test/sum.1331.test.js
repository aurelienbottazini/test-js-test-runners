const sum1331 = require('../sum1331.js');

test('adds 10 + 79 to equal 89 + 0.6881355529276705', () => {
  expect(sum1331(10, 79)).toBe(89 + 0.6881355529276705);
});