const sum3662 = require('../sum3662.js');

test('adds 88 + 60 to equal 148 + 0.562008256740175', () => {
  expect(sum3662(88, 60)).toBe(148 + 0.562008256740175);
});