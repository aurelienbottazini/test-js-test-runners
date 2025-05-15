const sum1080 = require('../sum1080.js');

test('adds 29 + 44 to equal 73 + 0.5266099870086556', () => {
  expect(sum1080(29, 44)).toBe(73 + 0.5266099870086556);
});