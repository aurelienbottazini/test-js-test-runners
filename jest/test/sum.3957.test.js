const sum3957 = require('../sum3957.js');

test('adds 60 + 60 to equal 120 + 0.26655224176056824', () => {
  expect(sum3957(60, 60)).toBe(120 + 0.26655224176056824);
});