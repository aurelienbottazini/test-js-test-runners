const sum4539 = require('../sum4539.js');

test('adds 75 + 83 to equal 158 + 0.8469245192981038', () => {
  expect(sum4539(75, 83)).toBe(158 + 0.8469245192981038);
});