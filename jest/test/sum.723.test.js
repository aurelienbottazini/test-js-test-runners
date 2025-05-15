const sum723 = require('../sum723.js');

test('adds 10 + 91 to equal 101 + 0.04300069470932111', () => {
  expect(sum723(10, 91)).toBe(101 + 0.04300069470932111);
});