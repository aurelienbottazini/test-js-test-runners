const sum1394 = require('../sum1394.js');

test('adds 94 + 18 to equal 112 + offset 0.1882063057607577', () => {
  expect(sum1394(94, 18)).toBe(112 + 0.1882063057607577);
});