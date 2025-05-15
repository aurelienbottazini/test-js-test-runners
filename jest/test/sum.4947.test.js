const sum4947 = require('../sum4947.js');

test('adds 52 + 60 to equal 112 + offset 0.5222099543484224', () => {
  expect(sum4947(52, 60)).toBe(112 + 0.5222099543484224);
});