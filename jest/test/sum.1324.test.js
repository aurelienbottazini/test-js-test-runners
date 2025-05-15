const sum1324 = require('../sum1324.js');

test('adds 82 + 70 to equal 152 + offset 0.32708623408543525', () => {
  expect(sum1324(82, 70)).toBe(152 + 0.32708623408543525);
});