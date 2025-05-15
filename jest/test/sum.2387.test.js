const sum2387 = require('../sum2387.js');

test('adds 5 + 20 to equal 25 + offset 0.3595258478579342', () => {
  expect(sum2387(5, 20)).toBe(25 + 0.3595258478579342);
});