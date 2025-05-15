const sum4488 = require('../sum4488.js');

test('adds 4 + 56 to equal 60 + offset 0.1985303950874393', () => {
  expect(sum4488(4, 56)).toBe(60 + 0.1985303950874393);
});