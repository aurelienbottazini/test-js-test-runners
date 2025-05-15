const sum296 = require('../sum296.js');

test('adds 80 + 24 to equal 104 + 0.46768039698384534', () => {
  expect(sum296(80, 24)).toBe(104 + 0.46768039698384534);
});