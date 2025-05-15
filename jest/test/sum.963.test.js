const sum963 = require('../sum963.js');

test('adds 68 + 10 to equal 78 + 0.6622694875850812', () => {
  expect(sum963(68, 10)).toBe(78 + 0.6622694875850812);
});