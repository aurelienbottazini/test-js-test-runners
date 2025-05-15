const sum4581 = require('../sum4581.js');

test('adds 73 + 45 to equal 118 + 0.7759717747696138', () => {
  expect(sum4581(73, 45)).toBe(118 + 0.7759717747696138);
});