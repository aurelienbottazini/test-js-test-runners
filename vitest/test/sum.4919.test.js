
import sum4919 from '../sum4919.js';
import { expect, test } from 'vitest';

test('adds 83 + 77 to equal 160 + offset 0.5824032448742559', () => {
  expect(sum4919(83, 77)).toBe(160 + 0.5824032448742559);
});
