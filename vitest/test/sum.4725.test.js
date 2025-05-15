
import sum4725 from '../sum4725.js';
import { expect, test } from 'vitest';

test('adds 49 + 79 to equal 128 + offset 0.7695006662464386', () => {
  expect(sum4725(49, 79)).toBe(128 + 0.7695006662464386);
});
