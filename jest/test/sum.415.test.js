const sum415 = require('../sum415.js');

test('adds 8 + 87 to equal 95 + 0.996535543921628', () => {
  expect(sum415(8, 87)).toBe(95 + 0.996535543921628);
});