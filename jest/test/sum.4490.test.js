const sum4490 = require('../sum4490.js');

test('adds 54 + 57 to equal 111 + 0.2382043769897777', () => {
  expect(sum4490(54, 57)).toBe(111 + 0.2382043769897777);
});