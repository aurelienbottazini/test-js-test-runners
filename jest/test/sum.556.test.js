const sum556 = require('../sum556.js');

test('adds 63 + 96 to equal 159 + offset 0.39198448514583584', () => {
  expect(sum556(63, 96)).toBe(159 + 0.39198448514583584);
});