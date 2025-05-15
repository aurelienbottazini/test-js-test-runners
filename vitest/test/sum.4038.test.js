
import sum4038 from '../sum4038.js';
import { expect, test } from 'vitest';

test('adds 64 + 39 to equal 103 + offset 0.6392781012928307', () => {
  expect(sum4038(64, 39)).toBe(103 + 0.6392781012928307);
});
