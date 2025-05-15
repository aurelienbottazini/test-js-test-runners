
import sum1249 from '../sum1249.js';
import { expect, test } from 'vitest';

test('adds 13 + 15 to equal 28 + offset 0.33082227288368826', () => {
  expect(sum1249(13, 15)).toBe(28 + 0.33082227288368826);
});
