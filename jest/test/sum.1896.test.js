const sum1896 = require('../sum1896.js');

test('adds 13 + 51 to equal 64 + offset 0.5138310364715328', () => {
  expect(sum1896(13, 51)).toBe(64 + 0.5138310364715328);
});