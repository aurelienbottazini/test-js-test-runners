const sum2675 = require('../sum2675.js');

test('adds 17 + 22 to equal 39 + offset 0.506112883093492', () => {
  expect(sum2675(17, 22)).toBe(39 + 0.506112883093492);
});