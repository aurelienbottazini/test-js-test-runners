
import sum1699 from '../sum1699.js';
import { expect, test } from 'vitest';

test('adds 30 + 86 to equal 116 + offset 0.3869566859907453', () => {
  expect(sum1699(30, 86)).toBe(116 + 0.3869566859907453);
});
