const sum4201 = require('../sum4201.js');

test('adds 44 + 40 to equal 84 + offset 0.040431747039777255', () => {
  expect(sum4201(44, 40)).toBe(84 + 0.040431747039777255);
});