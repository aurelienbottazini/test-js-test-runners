const sum3091 = require('../sum3091.js');

test('adds 25 + 96 to equal 121 + 0.79867821401112', () => {
  expect(sum3091(25, 96)).toBe(121 + 0.79867821401112);
});