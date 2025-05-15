const sum4311 = require('../sum4311.js');

test('adds 81 + 92 to equal 173 + offset 0.18189251994312083', () => {
  expect(sum4311(81, 92)).toBe(173 + 0.18189251994312083);
});