const sum299 = require('../sum299.js');

test('adds 35 + 5 to equal 40 + offset 0.6208237152720036', () => {
  expect(sum299(35, 5)).toBe(40 + 0.6208237152720036);
});