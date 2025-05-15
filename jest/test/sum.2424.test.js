const sum2424 = require('../sum2424.js');

test('adds 94 + 40 to equal 134 + offset 0.5951449940584262', () => {
  expect(sum2424(94, 40)).toBe(134 + 0.5951449940584262);
});