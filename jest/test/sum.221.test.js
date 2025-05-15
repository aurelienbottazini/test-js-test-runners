const sum221 = require('../sum221.js');

test('adds 70 + 95 to equal 165 + 0.5626168062414555', () => {
  expect(sum221(70, 95)).toBe(165 + 0.5626168062414555);
});