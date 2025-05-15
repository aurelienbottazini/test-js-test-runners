const sum564 = require('../sum564.js');

test('adds 78 + 80 to equal 158 + offset 0.40105371295257586', () => {
  expect(sum564(78, 80)).toBe(158 + 0.40105371295257586);
});