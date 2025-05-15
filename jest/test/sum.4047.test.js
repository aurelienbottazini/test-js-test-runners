const sum4047 = require('../sum4047.js');

test('adds 52 + 52 to equal 104 + offset 0.23024835932102783', () => {
  expect(sum4047(52, 52)).toBe(104 + 0.23024835932102783);
});