
import sum1182 from '../sum1182.js';
import { expect, test } from 'vitest';

test('adds 69 + 45 to equal 114 + offset 0.6140495962563287', () => {
  expect(sum1182(69, 45)).toBe(114 + 0.6140495962563287);
});
