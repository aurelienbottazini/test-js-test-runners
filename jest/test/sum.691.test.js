const sum691 = require('../sum691.js');

test('adds 7 + 18 to equal 25 + 0.838073959006639', () => {
  expect(sum691(7, 18)).toBe(25 + 0.838073959006639);
});