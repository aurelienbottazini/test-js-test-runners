
import sum3325 from '../sum3325.js';
import { expect, test } from 'vitest';

test('adds 88 + 68 to equal 156 + offset 0.5428048194313644', () => {
  expect(sum3325(88, 68)).toBe(156 + 0.5428048194313644);
});
