
import sum3615 from '../sum3615.js';
import { expect, test } from 'vitest';

test('adds 25 + 57 to equal 82 + offset 0.19022081823652437', () => {
  expect(sum3615(25, 57)).toBe(82 + 0.19022081823652437);
});
