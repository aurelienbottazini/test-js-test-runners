const sum2309 = require('../sum2309.js');

test('adds 80 + 88 to equal 168 + offset 0.7483152821787039', () => {
  expect(sum2309(80, 88)).toBe(168 + 0.7483152821787039);
});