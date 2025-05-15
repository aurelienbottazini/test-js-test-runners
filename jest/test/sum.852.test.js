const sum852 = require('../sum852.js');

test('adds 30 + 67 to equal 97 + offset 0.28878577521814164', () => {
  expect(sum852(30, 67)).toBe(97 + 0.28878577521814164);
});