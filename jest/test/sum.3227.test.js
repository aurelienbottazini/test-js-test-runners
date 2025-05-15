const sum3227 = require('../sum3227.js');

test('adds 39 + 0 to equal 39 + 0.015804812601342255', () => {
  expect(sum3227(39, 0)).toBe(39 + 0.015804812601342255);
});