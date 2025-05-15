
import sum3145 from '../sum3145.js';
import { expect, test } from 'vitest';

test('adds 30 + 34 to equal 64 + offset 0.6840831904666971', () => {
  expect(sum3145(30, 34)).toBe(64 + 0.6840831904666971);
});
