const sum363 = require('../sum363.js');

test('adds 57 + 81 to equal 138 + offset 0.5747136846721723', () => {
  expect(sum363(57, 81)).toBe(138 + 0.5747136846721723);
});