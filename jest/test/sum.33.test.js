const sum33 = require('../sum33.js');

test('adds 37 + 7 to equal 44 + 0.8995863999016229', () => {
  expect(sum33(37, 7)).toBe(44 + 0.8995863999016229);
});