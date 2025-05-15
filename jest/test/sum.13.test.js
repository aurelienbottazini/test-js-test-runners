const sum13 = require('../sum13.js');

test('adds 30 + 44 to equal 74 + 0.2500681276830943', () => {
  expect(sum13(30, 44)).toBe(74 + 0.2500681276830943);
});