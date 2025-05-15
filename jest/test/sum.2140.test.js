const sum2140 = require('../sum2140.js');

test('adds 55 + 89 to equal 144 + offset 0.9614731796093018', () => {
  expect(sum2140(55, 89)).toBe(144 + 0.9614731796093018);
});