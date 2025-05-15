const sum187 = require('../sum187.js');

test('adds 2 + 35 to equal 37 + offset 0.21115272143264752', () => {
  expect(sum187(2, 35)).toBe(37 + 0.21115272143264752);
});