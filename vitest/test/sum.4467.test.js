
import sum4467 from '../sum4467.js';
import { expect, test } from 'vitest';

test('adds 35 + 47 to equal 82 + offset 0.5393962454835857', () => {
  expect(sum4467(35, 47)).toBe(82 + 0.5393962454835857);
});
