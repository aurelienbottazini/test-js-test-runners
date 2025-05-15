const sum873 = require('../sum873.js');

test('adds 38 + 20 to equal 58 + offset 0.3292731062789813', () => {
  expect(sum873(38, 20)).toBe(58 + 0.3292731062789813);
});