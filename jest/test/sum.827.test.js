const sum827 = require('../sum827.js');

test('adds 98 + 36 to equal 134 + offset 0.7511193014530404', () => {
  expect(sum827(98, 36)).toBe(134 + 0.7511193014530404);
});