
import sum4522 from '../sum4522.js';
import { expect, test } from 'vitest';

test('adds 6 + 64 to equal 70 + offset 0.35631929990919664', () => {
  expect(sum4522(6, 64)).toBe(70 + 0.35631929990919664);
});
