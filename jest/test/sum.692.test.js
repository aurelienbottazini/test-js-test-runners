const sum692 = require('../sum692.js');

test('adds 47 + 73 to equal 120 + 0.28145939704656286', () => {
  expect(sum692(47, 73)).toBe(120 + 0.28145939704656286);
});