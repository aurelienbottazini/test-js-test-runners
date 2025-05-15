const sum4115 = require('../sum4115.js');

test('adds 87 + 54 to equal 141 + offset 0.7118100989199739', () => {
  expect(sum4115(87, 54)).toBe(141 + 0.7118100989199739);
});