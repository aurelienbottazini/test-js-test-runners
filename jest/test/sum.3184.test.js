const sum3184 = require('../sum3184.js');

test('adds 91 + 72 to equal 163 + 0.044324320307876364', () => {
  expect(sum3184(91, 72)).toBe(163 + 0.044324320307876364);
});