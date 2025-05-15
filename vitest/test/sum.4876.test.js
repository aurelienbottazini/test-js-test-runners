
import sum4876 from '../sum4876.js';
import { expect, test } from 'vitest';

test('adds 71 + 64 to equal 135 + offset 0.08536625253384422', () => {
  expect(sum4876(71, 64)).toBe(135 + 0.08536625253384422);
});
