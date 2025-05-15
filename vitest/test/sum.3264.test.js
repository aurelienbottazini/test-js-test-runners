
import sum3264 from '../sum3264.js';
import { expect, test } from 'vitest';

test('adds 96 + 88 to equal 184 + offset 0.9578761976792564', () => {
  expect(sum3264(96, 88)).toBe(184 + 0.9578761976792564);
});
