const sum4861 = require('../sum4861.js');

test('adds 52 + 55 to equal 107 + 0.6087330063012131', () => {
  expect(sum4861(52, 55)).toBe(107 + 0.6087330063012131);
});