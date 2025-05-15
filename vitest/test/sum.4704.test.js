
import sum4704 from '../sum4704.js';
import { expect, test } from 'vitest';

test('adds 19 + 4 to equal 23 + offset 0.1725527128424894', () => {
  expect(sum4704(19, 4)).toBe(23 + 0.1725527128424894);
});
