const sum849 = require('../sum849.js');

test('adds 50 + 94 to equal 144 + 0.1724114852115184', () => {
  expect(sum849(50, 94)).toBe(144 + 0.1724114852115184);
});