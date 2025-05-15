const sum3338 = require('../sum3338.js');

test('adds 18 + 95 to equal 113 + offset 0.9296676152818854', () => {
  expect(sum3338(18, 95)).toBe(113 + 0.9296676152818854);
});