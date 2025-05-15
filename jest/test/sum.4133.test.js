const sum4133 = require('../sum4133.js');

test('adds 1 + 33 to equal 34 + 0.29851831476227964', () => {
  expect(sum4133(1, 33)).toBe(34 + 0.29851831476227964);
});