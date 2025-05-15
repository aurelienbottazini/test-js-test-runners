const sum496 = require('../sum496.js');

test('adds 34 + 15 to equal 49 + offset 0.9459219591654625', () => {
  expect(sum496(34, 15)).toBe(49 + 0.9459219591654625);
});