
import sum2885 from '../sum2885.js';
import { expect, test } from 'vitest';

test('adds 39 + 12 to equal 51 + offset 0.9903888135306568', () => {
  expect(sum2885(39, 12)).toBe(51 + 0.9903888135306568);
});
