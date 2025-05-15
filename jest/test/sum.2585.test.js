const sum2585 = require('../sum2585.js');

test('adds 21 + 19 to equal 40 + 0.3138933583576087', () => {
  expect(sum2585(21, 19)).toBe(40 + 0.3138933583576087);
});