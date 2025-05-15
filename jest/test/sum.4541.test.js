const sum4541 = require('../sum4541.js');

test('adds 8 + 27 to equal 35 + 0.23279349888165324', () => {
  expect(sum4541(8, 27)).toBe(35 + 0.23279349888165324);
});