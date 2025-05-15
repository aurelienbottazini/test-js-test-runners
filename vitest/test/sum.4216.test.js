
import sum4216 from '../sum4216.js';
import { expect, test } from 'vitest';

test('adds 86 + 79 to equal 165 + offset 0.899306290854195', () => {
  expect(sum4216(86, 79)).toBe(165 + 0.899306290854195);
});
