const sum4529 = require('../sum4529.js');

test('adds 70 + 39 to equal 109 + offset 0.3254969727837259', () => {
  expect(sum4529(70, 39)).toBe(109 + 0.3254969727837259);
});