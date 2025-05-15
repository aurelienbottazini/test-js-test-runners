
import sum3950 from '../sum3950.js';
import { expect, test } from 'vitest';

test('adds 3 + 47 to equal 50 + offset 0.7777499814400669', () => {
  expect(sum3950(3, 47)).toBe(50 + 0.7777499814400669);
});
