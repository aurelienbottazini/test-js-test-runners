const sum1651 = require('../sum1651.js');

test('adds 63 + 4 to equal 67 + 0.8220408545362089', () => {
  expect(sum1651(63, 4)).toBe(67 + 0.8220408545362089);
});