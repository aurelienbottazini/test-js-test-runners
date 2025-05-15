
import sum4137 from '../sum4137.js';
import { expect, test } from 'vitest';

test('adds 56 + 39 to equal 95 + offset 0.8212779940063043', () => {
  expect(sum4137(56, 39)).toBe(95 + 0.8212779940063043);
});
