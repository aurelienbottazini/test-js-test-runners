
import sum1901 from '../sum1901.js';
import { expect, test } from 'vitest';

test('adds 68 + 20 to equal 88 + offset 0.13957830902874913', () => {
  expect(sum1901(68, 20)).toBe(88 + 0.13957830902874913);
});
