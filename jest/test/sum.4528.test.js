const sum4528 = require('../sum4528.js');

test('adds 83 + 55 to equal 138 + offset 0.9108953104644033', () => {
  expect(sum4528(83, 55)).toBe(138 + 0.9108953104644033);
});