const sum4900 = require('../sum4900.js');

test('adds 71 + 29 to equal 100 + offset 0.719426067038083', () => {
  expect(sum4900(71, 29)).toBe(100 + 0.719426067038083);
});