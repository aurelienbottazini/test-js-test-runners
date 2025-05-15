const sum846 = require('../sum846.js');

test('adds 33 + 29 to equal 62 + offset 0.48356549737082655', () => {
  expect(sum846(33, 29)).toBe(62 + 0.48356549737082655);
});