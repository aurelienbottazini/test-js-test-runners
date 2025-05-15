const sum4189 = require('../sum4189.js');

test('adds 80 + 64 to equal 144 + 0.6859444094272383', () => {
  expect(sum4189(80, 64)).toBe(144 + 0.6859444094272383);
});