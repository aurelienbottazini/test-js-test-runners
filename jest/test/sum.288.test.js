const sum288 = require('../sum288.js');

test('adds 33 + 26 to equal 59 + 0.10280752735654208', () => {
  expect(sum288(33, 26)).toBe(59 + 0.10280752735654208);
});