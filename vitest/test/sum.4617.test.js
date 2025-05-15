
import sum4617 from '../sum4617.js';
import { expect, test } from 'vitest';

test('adds 55 + 83 to equal 138 + offset 0.17003601148057945', () => {
  expect(sum4617(55, 83)).toBe(138 + 0.17003601148057945);
});
