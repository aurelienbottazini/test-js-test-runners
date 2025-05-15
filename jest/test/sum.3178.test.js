const sum3178 = require('../sum3178.js');

test('adds 55 + 96 to equal 151 + 0.6249551210125817', () => {
  expect(sum3178(55, 96)).toBe(151 + 0.6249551210125817);
});