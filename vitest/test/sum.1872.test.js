
import sum1872 from '../sum1872.js';
import { expect, test } from 'vitest';

test('adds 89 + 40 to equal 129 + offset 0.3480635677560212', () => {
  expect(sum1872(89, 40)).toBe(129 + 0.3480635677560212);
});
