const sum1286 = require('../sum1286.js');

test('adds 6 + 41 to equal 47 + offset 0.7531134758259027', () => {
  expect(sum1286(6, 41)).toBe(47 + 0.7531134758259027);
});