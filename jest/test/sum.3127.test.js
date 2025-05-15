const sum3127 = require('../sum3127.js');

test('adds 60 + 80 to equal 140 + offset 0.7372009652453683', () => {
  expect(sum3127(60, 80)).toBe(140 + 0.7372009652453683);
});