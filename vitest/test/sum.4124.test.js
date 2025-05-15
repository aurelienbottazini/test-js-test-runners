
import sum4124 from '../sum4124.js';
import { expect, test } from 'vitest';

test('adds 86 + 45 to equal 131 + offset 0.2320284337894809', () => {
  expect(sum4124(86, 45)).toBe(131 + 0.2320284337894809);
});
