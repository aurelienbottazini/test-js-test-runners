const sum3023 = require('../sum3023.js');

test('adds 18 + 62 to equal 80 + offset 0.23205371744465542', () => {
  expect(sum3023(18, 62)).toBe(80 + 0.23205371744465542);
});