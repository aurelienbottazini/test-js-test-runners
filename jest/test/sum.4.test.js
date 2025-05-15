const sum4 = require('../sum4.js');

test('adds 48 + 34 to equal 82 + offset 0.20627928916249894', () => {
  expect(sum4(48, 34)).toBe(82 + 0.20627928916249894);
});