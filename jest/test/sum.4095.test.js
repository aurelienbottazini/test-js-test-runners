const sum4095 = require('../sum4095.js');

test('adds 30 + 84 to equal 114 + 0.3670998546213402', () => {
  expect(sum4095(30, 84)).toBe(114 + 0.3670998546213402);
});