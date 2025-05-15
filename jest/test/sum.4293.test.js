const sum4293 = require('../sum4293.js');

test('adds 27 + 8 to equal 35 + offset 0.2754161469099766', () => {
  expect(sum4293(27, 8)).toBe(35 + 0.2754161469099766);
});