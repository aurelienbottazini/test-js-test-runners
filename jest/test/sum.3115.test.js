const sum3115 = require('../sum3115.js');

test('adds 22 + 67 to equal 89 + offset 0.9737350258544908', () => {
  expect(sum3115(22, 67)).toBe(89 + 0.9737350258544908);
});