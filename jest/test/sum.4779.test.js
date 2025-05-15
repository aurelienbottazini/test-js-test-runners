const sum4779 = require('../sum4779.js');

test('adds 55 + 84 to equal 139 + 0.7709447879356751', () => {
  expect(sum4779(55, 84)).toBe(139 + 0.7709447879356751);
});