const sum537 = require('../sum537.js');

test('adds 45 + 97 to equal 142 + 0.0996878838120191', () => {
  expect(sum537(45, 97)).toBe(142 + 0.0996878838120191);
});