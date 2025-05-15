const sum2967 = require('../sum2967.js');

test('adds 1 + 36 to equal 37 + offset 0.6292595828687978', () => {
  expect(sum2967(1, 36)).toBe(37 + 0.6292595828687978);
});