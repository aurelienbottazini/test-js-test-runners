const sum960 = require('../sum960.js');

test('adds 73 + 77 to equal 150 + 0.6558148683959458', () => {
  expect(sum960(73, 77)).toBe(150 + 0.6558148683959458);
});