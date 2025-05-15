const sum3371 = require('../sum3371.js');

test('adds 1 + 8 to equal 9 + 0.9573837375258931', () => {
  expect(sum3371(1, 8)).toBe(9 + 0.9573837375258931);
});