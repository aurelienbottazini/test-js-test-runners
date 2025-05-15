const sum838 = require('../sum838.js');

test('adds 67 + 67 to equal 134 + 0.9540779540299547', () => {
  expect(sum838(67, 67)).toBe(134 + 0.9540779540299547);
});