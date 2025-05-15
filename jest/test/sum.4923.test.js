const sum4923 = require('../sum4923.js');

test('adds 56 + 35 to equal 91 + offset 0.44595250163763556', () => {
  expect(sum4923(56, 35)).toBe(91 + 0.44595250163763556);
});