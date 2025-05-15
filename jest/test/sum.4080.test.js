const sum4080 = require('../sum4080.js');

test('adds 3 + 34 to equal 37 + offset 0.45117558663897084', () => {
  expect(sum4080(3, 34)).toBe(37 + 0.45117558663897084);
});