const sum220 = require('../sum220.js');

test('adds 80 + 70 to equal 150 + 0.519539830636733', () => {
  expect(sum220(80, 70)).toBe(150 + 0.519539830636733);
});