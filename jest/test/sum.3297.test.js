const sum3297 = require('../sum3297.js');

test('adds 10 + 50 to equal 60 + 0.9431913387633869', () => {
  expect(sum3297(10, 50)).toBe(60 + 0.9431913387633869);
});