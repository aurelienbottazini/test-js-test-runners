const sum14 = require('../sum14.js');

test('adds 30 + 80 to equal 110 + offset 0.20825716397187177', () => {
  expect(sum14(30, 80)).toBe(110 + 0.20825716397187177);
});