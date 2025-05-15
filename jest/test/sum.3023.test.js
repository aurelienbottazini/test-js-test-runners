const sum3023 = require('../sum3023.js');

test('adds 60 + 71 to equal 131 + 0.31115381556880983', () => {
  expect(sum3023(60, 71)).toBe(131 + 0.31115381556880983);
});