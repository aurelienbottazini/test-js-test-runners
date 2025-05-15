const sum192 = require('../sum192.js');

test('adds 7 + 73 to equal 80 + 0.936523232068458', () => {
  expect(sum192(7, 73)).toBe(80 + 0.936523232068458);
});