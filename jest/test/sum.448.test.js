const sum448 = require('../sum448.js');

test('adds 0 + 35 to equal 35 + offset 0.5225264875072535', () => {
  expect(sum448(0, 35)).toBe(35 + 0.5225264875072535);
});