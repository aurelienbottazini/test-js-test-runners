const sum3693 = require('../sum3693.js');

test('adds 64 + 3 to equal 67 + 0.7299648624158147', () => {
  expect(sum3693(64, 3)).toBe(67 + 0.7299648624158147);
});