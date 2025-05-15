const sum3249 = require('../sum3249.js');

test('adds 59 + 24 to equal 83 + 0.17692858209882423', () => {
  expect(sum3249(59, 24)).toBe(83 + 0.17692858209882423);
});