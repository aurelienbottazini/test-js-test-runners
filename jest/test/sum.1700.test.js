const sum1700 = require('../sum1700.js');

test('adds 78 + 19 to equal 97 + offset 0.42249579350901123', () => {
  expect(sum1700(78, 19)).toBe(97 + 0.42249579350901123);
});