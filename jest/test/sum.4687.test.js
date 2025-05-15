const sum4687 = require('../sum4687.js');

test('adds 20 + 37 to equal 57 + 0.8628383505010786', () => {
  expect(sum4687(20, 37)).toBe(57 + 0.8628383505010786);
});