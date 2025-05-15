const sum4040 = require('../sum4040.js');

test('adds 30 + 71 to equal 101 + 0.12233339524275566', () => {
  expect(sum4040(30, 71)).toBe(101 + 0.12233339524275566);
});