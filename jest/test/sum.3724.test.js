const sum3724 = require('../sum3724.js');

test('adds 23 + 96 to equal 119 + 0.7666657043330181', () => {
  expect(sum3724(23, 96)).toBe(119 + 0.7666657043330181);
});