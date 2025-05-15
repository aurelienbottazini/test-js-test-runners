const sum4057 = require('../sum4057.js');

test('adds 35 + 20 to equal 55 + offset 0.21751420149741885', () => {
  expect(sum4057(35, 20)).toBe(55 + 0.21751420149741885);
});