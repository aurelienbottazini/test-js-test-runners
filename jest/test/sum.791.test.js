const sum791 = require('../sum791.js');

test('adds 92 + 17 to equal 109 + 0.22073912612262736', () => {
  expect(sum791(92, 17)).toBe(109 + 0.22073912612262736);
});