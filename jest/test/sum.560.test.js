const sum560 = require('../sum560.js');

test('adds 62 + 27 to equal 89 + 0.43854064777025414', () => {
  expect(sum560(62, 27)).toBe(89 + 0.43854064777025414);
});