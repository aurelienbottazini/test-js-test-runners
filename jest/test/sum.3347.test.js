const sum3347 = require('../sum3347.js');

test('adds 21 + 82 to equal 103 + 0.5806618263452482', () => {
  expect(sum3347(21, 82)).toBe(103 + 0.5806618263452482);
});