const sum2006 = require('../sum2006.js');

test('adds 20 + 89 to equal 109 + 0.3225923196638204', () => {
  expect(sum2006(20, 89)).toBe(109 + 0.3225923196638204);
});