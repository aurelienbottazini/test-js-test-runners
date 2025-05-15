const sum3114 = require('../sum3114.js');

test('adds 9 + 16 to equal 25 + 0.7934539293186464', () => {
  expect(sum3114(9, 16)).toBe(25 + 0.7934539293186464);
});