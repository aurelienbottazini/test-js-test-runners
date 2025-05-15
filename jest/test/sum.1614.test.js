const sum1614 = require('../sum1614.js');

test('adds 49 + 20 to equal 69 + offset 0.7009949654965648', () => {
  expect(sum1614(49, 20)).toBe(69 + 0.7009949654965648);
});