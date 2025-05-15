const sum375 = require('../sum375.js');

test('adds 85 + 32 to equal 117 + offset 0.8382547347233815', () => {
  expect(sum375(85, 32)).toBe(117 + 0.8382547347233815);
});