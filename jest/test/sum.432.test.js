const sum432 = require('../sum432.js');

test('adds 27 + 55 to equal 82 + 0.8555038062591369', () => {
  expect(sum432(27, 55)).toBe(82 + 0.8555038062591369);
});