
import sum4432 from '../sum4432.js';
import { expect, test } from 'vitest';

test('adds 39 + 47 to equal 86 + offset 0.5147558003268565', () => {
  expect(sum4432(39, 47)).toBe(86 + 0.5147558003268565);
});
