
import sum4366 from '../sum4366.js';
import { expect, test } from 'vitest';

test('adds 72 + 99 to equal 171 + offset 0.738624451506963', () => {
  expect(sum4366(72, 99)).toBe(171 + 0.738624451506963);
});
