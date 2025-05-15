const sum632 = require('../sum632.js');

test('adds 69 + 42 to equal 111 + 0.09340295606719362', () => {
  expect(sum632(69, 42)).toBe(111 + 0.09340295606719362);
});