const sum3743 = require('../sum3743.js');

test('adds 28 + 92 to equal 120 + 0.9280853625753643', () => {
  expect(sum3743(28, 92)).toBe(120 + 0.9280853625753643);
});