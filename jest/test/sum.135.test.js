const sum135 = require('../sum135.js');

test('adds 39 + 11 to equal 50 + offset 0.3122463483101865', () => {
  expect(sum135(39, 11)).toBe(50 + 0.3122463483101865);
});