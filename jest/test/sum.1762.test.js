const sum1762 = require('../sum1762.js');

test('adds 94 + 78 to equal 172 + 0.925780873493196', () => {
  expect(sum1762(94, 78)).toBe(172 + 0.925780873493196);
});