const sum570 = require('../sum570.js');

test('adds 2 + 24 to equal 26 + 0.6122102311431488', () => {
  expect(sum570(2, 24)).toBe(26 + 0.6122102311431488);
});