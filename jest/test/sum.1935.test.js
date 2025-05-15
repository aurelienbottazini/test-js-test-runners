const sum1935 = require('../sum1935.js');

test('adds 99 + 29 to equal 128 + offset 0.09769316711062193', () => {
  expect(sum1935(99, 29)).toBe(128 + 0.09769316711062193);
});