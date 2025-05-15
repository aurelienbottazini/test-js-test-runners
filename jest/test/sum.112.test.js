const sum112 = require('../sum112.js');

test('adds 25 + 84 to equal 109 + 0.1725177418363094', () => {
  expect(sum112(25, 84)).toBe(109 + 0.1725177418363094);
});