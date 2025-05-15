
import sum655 from '../sum655.js';
import { expect, test } from 'vitest';

test('adds 95 + 47 to equal 142 + offset 0.04953581141026997', () => {
  expect(sum655(95, 47)).toBe(142 + 0.04953581141026997);
});
