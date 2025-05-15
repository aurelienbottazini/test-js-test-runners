const sum158 = require('../sum158.js');

test('adds 75 + 35 to equal 110 + offset 0.6825592775713847', () => {
  expect(sum158(75, 35)).toBe(110 + 0.6825592775713847);
});