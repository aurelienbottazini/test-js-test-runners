
import sum4391 from '../sum4391.js';
import { expect, test } from 'vitest';

test('adds 38 + 36 to equal 74 + offset 0.851092803393265', () => {
  expect(sum4391(38, 36)).toBe(74 + 0.851092803393265);
});
