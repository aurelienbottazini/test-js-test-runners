const sum4231 = require('../sum4231.js');

test('adds 31 + 80 to equal 111 + offset 0.24480697331571566', () => {
  expect(sum4231(31, 80)).toBe(111 + 0.24480697331571566);
});