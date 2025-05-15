const sum538 = require('../sum538.js');

test('adds 30 + 8 to equal 38 + offset 0.4916680039132817', () => {
  expect(sum538(30, 8)).toBe(38 + 0.4916680039132817);
});