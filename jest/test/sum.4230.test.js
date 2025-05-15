const sum4230 = require('../sum4230.js');

test('adds 35 + 35 to equal 70 + 0.6450176999326124', () => {
  expect(sum4230(35, 35)).toBe(70 + 0.6450176999326124);
});