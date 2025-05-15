const sum4398 = require('../sum4398.js');

test('adds 0 + 74 to equal 74 + offset 0.5815354780452937', () => {
  expect(sum4398(0, 74)).toBe(74 + 0.5815354780452937);
});