const sum2217 = require('../sum2217.js');

test('adds 24 + 76 to equal 100 + offset 0.930175073756658', () => {
  expect(sum2217(24, 76)).toBe(100 + 0.930175073756658);
});