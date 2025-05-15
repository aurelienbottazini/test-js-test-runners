const sum2163 = require('../sum2163.js');

test('adds 33 + 83 to equal 116 + offset 0.09784228834815811', () => {
  expect(sum2163(33, 83)).toBe(116 + 0.09784228834815811);
});