const sum4251 = require('../sum4251.js');

test('adds 65 + 57 to equal 122 + offset 0.4448227002211568', () => {
  expect(sum4251(65, 57)).toBe(122 + 0.4448227002211568);
});