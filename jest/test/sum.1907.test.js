const sum1907 = require('../sum1907.js');

test('adds 35 + 16 to equal 51 + offset 0.6712937182052616', () => {
  expect(sum1907(35, 16)).toBe(51 + 0.6712937182052616);
});