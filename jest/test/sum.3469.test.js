const sum3469 = require('../sum3469.js');

test('adds 21 + 54 to equal 75 + offset 0.7454669495610957', () => {
  expect(sum3469(21, 54)).toBe(75 + 0.7454669495610957);
});