const sum4150 = require('../sum4150.js');

test('adds 73 + 99 to equal 172 + 0.3689859049461546', () => {
  expect(sum4150(73, 99)).toBe(172 + 0.3689859049461546);
});