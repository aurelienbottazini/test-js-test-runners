
import sum3979 from '../sum3979.js';
import { expect, test } from 'vitest';

test('adds 33 + 68 to equal 101 + offset 0.4081456151149747', () => {
  expect(sum3979(33, 68)).toBe(101 + 0.4081456151149747);
});
