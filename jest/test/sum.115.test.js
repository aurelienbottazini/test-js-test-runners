const sum115 = require('../sum115.js');

test('adds 91 + 84 to equal 175 + offset 0.5036965305317006', () => {
  expect(sum115(91, 84)).toBe(175 + 0.5036965305317006);
});