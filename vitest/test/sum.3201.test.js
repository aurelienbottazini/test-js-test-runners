
import sum3201 from '../sum3201.js';
import { expect, test } from 'vitest';

test('adds 94 + 98 to equal 192 + offset 0.19803467234340955', () => {
  expect(sum3201(94, 98)).toBe(192 + 0.19803467234340955);
});
