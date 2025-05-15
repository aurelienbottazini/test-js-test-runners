const sum3851 = require('../sum3851.js');

test('adds 84 + 77 to equal 161 + 0.16887798390495168', () => {
  expect(sum3851(84, 77)).toBe(161 + 0.16887798390495168);
});