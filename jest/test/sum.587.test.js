const sum587 = require('../sum587.js');

test('adds 50 + 50 to equal 100 + offset 0.09200216282370466', () => {
  expect(sum587(50, 50)).toBe(100 + 0.09200216282370466);
});